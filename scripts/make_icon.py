"""Professional ApexTimeZones app icon from real Earth textures (orthographic sphere)."""
from __future__ import annotations

import math
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
DAY = Image.open(ROOT / "public/textures/earth_day.jpg").convert("RGB")
NIGHT = Image.open(ROOT / "public/textures/earth_night.jpg").convert("RGB")
OUT_WEB = ROOT / "website/assets"
OUT_APP = ROOT / "assets"
OUT_WEB.mkdir(parents=True, exist_ok=True)
OUT_APP.mkdir(parents=True, exist_ok=True)


def sample(img: Image.Image, lon: float, lat: float):
    """lon [-pi,pi], lat [-pi/2,pi/2] -> RGB."""
    w, h = img.size
    u = (lon / (2 * math.pi) + 0.5) % 1.0
    v = 0.5 - lat / math.pi
    x = min(w - 1, max(0, int(u * w)))
    y = min(h - 1, max(0, int(v * h)))
    return img.getpixel((x, y))


def render_sphere(size: int = 512, yaw: float = 0.72) -> Image.Image:
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    px = img.load()
    cx = cy = size / 2.0
    radius = size * 0.40

    sun_az, sun_el = 0.65, 0.28
    sun = (
        math.cos(sun_el) * math.cos(sun_az),
        math.sin(sun_el),
        math.cos(sun_el) * math.sin(sun_az),
    )
    sn = math.sqrt(sum(c * c for c in sun))
    sun = (sun[0] / sn, sun[1] / sn, sun[2] / sn)
    cos_y, sin_y = math.cos(yaw), math.sin(yaw)

    for j in range(size):
        for i in range(size):
            nx = (i + 0.5 - cx) / radius
            ny = -(j + 0.5 - cy) / radius
            r2 = nx * nx + ny * ny
            if r2 > 1.0:
                continue
            nz = math.sqrt(max(0.0, 1.0 - r2))
            # World after yaw so Europe/Africa faces camera
            x = nx * cos_y + nz * sin_y
            z = -nx * sin_y + nz * cos_y
            y = ny
            lat = math.asin(max(-1.0, min(1.0, y)))
            lon = math.atan2(z, x)
            day = sample(DAY, lon, lat)
            night = sample(NIGHT, lon, lat)
            ndotl = x * sun[0] + y * sun[1] + z * sun[2]
            t = max(0.0, min(1.0, (ndotl + 0.12) / 0.34))
            t = t * t * (3 - 2 * t)
            r = int(night[0] * 1.3 * (1 - t) + day[0] * t)
            g = int(night[1] * 1.3 * (1 - t) + day[1] * t)
            b = int(night[2] * 1.4 * (1 - t) + day[2] * t)
            if t > 0.45 and ndotl > 0:
                spec = (max(ndotl, 0) ** 20) * 48 * t
                r = min(255, int(r + spec * 0.5))
                g = min(255, int(g + spec * 0.65))
                b = min(255, int(b + spec))
            limb = 0.7 + 0.3 * nz
            px[i, j] = (
                min(255, int(r * limb)),
                min(255, int(g * limb)),
                min(255, int(b * limb)),
                255,
            )

    # Atmosphere ring
    glow = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    for k in range(22, 0, -1):
        a = int(36 * ((k / 22) ** 1.55))
        pad = radius + k * 1.4
        gd.ellipse([cx - pad, cy - pad, cx + pad, cy + pad], fill=(55, 165, 255, a))
    ga = glow.split()[3]
    gap = ga.load()
    for j in range(size):
        for i in range(size):
            nx = (i + 0.5 - cx) / radius
            ny = (j + 0.5 - cy) / radius
            if nx * nx + ny * ny <= 1.0:
                gap[i, j] = 0
    glow.putalpha(ga)
    glow = glow.filter(ImageFilter.GaussianBlur(1.8))

    plate = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    pd = ImageDraw.Draw(plate)
    corner = int(size * 0.22)
    pd.rounded_rectangle([0, 0, size - 1, size - 1], radius=corner, fill=(8, 14, 24, 255))

    earth = Image.alpha_composite(Image.new("RGBA", (size, size), (0, 0, 0, 0)), glow)
    earth = Image.alpha_composite(earth, img)

    # Pin near Spa when front-facing
    pin = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    pdraw = ImageDraw.Draw(pin)
    plat, plon = math.radians(50.44), math.radians(5.97)
    wx = math.cos(plat) * math.cos(plon)
    wy = math.sin(plat)
    wz = math.cos(plat) * math.sin(plon)
    # view = Ry(-yaw) * world
    vx = wx * cos_y - wz * sin_y
    vz = wx * sin_y + wz * cos_y
    vy = wy
    if vz > 0.12:
        sx = cx + vx * radius
        sy = cy - vy * radius
        pdraw.ellipse([sx - 11, sy - 11, sx + 11, sy + 11], fill=(255, 200, 80, 50))
        pdraw.ellipse([sx - 6, sy - 6, sx + 6, sy + 6], fill=(255, 209, 102, 140))
        pdraw.ellipse([sx - 3, sy - 3, sx + 3, sy + 3], fill=(255, 245, 210, 255))

    earth = Image.alpha_composite(earth, pin)
    out = Image.alpha_composite(plate, earth)

    border = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    bd = ImageDraw.Draw(border)
    bd.rounded_rectangle(
        [1, 1, size - 2, size - 2], radius=corner, outline=(77, 201, 255, 100), width=2
    )
    bd.rounded_rectangle(
        [3, 3, size - 4, size - 4], radius=max(1, corner - 2), outline=(255, 255, 255, 18), width=1
    )
    return Image.alpha_composite(out, border)


def main() -> None:
    icon = render_sphere(512, yaw=0.72)
    icon.save(OUT_WEB / "icon.png", "PNG", optimize=True)
    icon.resize((64, 64), Image.Resampling.LANCZOS).save(OUT_WEB / "icon-64.png", "PNG", optimize=True)
    icon.save(OUT_APP / "icon.png", "PNG", optimize=True)
    icon.resize((32, 32), Image.Resampling.LANCZOS).save(OUT_APP / "tray.png", "PNG", optimize=True)
    print("ok", (OUT_WEB / "icon.png").stat().st_size)


if __name__ == "__main__":
    main()
