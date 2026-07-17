(function () {
  // ——— Starfield ———
  const canvas = document.getElementById('starfield');
  const ctx = canvas?.getContext('2d');
  let stars = [];
  let w = 0, h = 0, raf;

  function resize() {
    if (!canvas) return;
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    stars = Array.from({ length: Math.min(220, Math.floor((w * h) / 12000)) }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 0.8 + 0.2,
      a: Math.random(),
    }));
  }

  function drawStars() {
    if (!ctx) return;
    ctx.clearRect(0, 0, w, h);
    const g = ctx.createRadialGradient(w * 0.7, h * 0.2, 0, w * 0.7, h * 0.2, w * 0.5);
    g.addColorStop(0, 'rgba(20,60,120,0.25)');
    g.addColorStop(1, 'transparent');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    for (const s of stars) {
      s.a += 0.01;
      const tw = 0.4 + Math.sin(s.a) * 0.3;
      ctx.fillStyle = `rgba(200,230,255,${tw})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.z * 1.4, 0, Math.PI * 2);
      ctx.fill();
    }
    raf = requestAnimationFrame(drawStars);
  }

  if (canvas && ctx) {
    resize();
    drawStars();
    window.addEventListener('resize', resize);
  }

  // ——— Live clocks / demo HUD (British GP Silverstone style sample) ———
  function fmt(date, tz) {
    try {
      return new Intl.DateTimeFormat(undefined, {
        timeZone: tz,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(date);
    } catch {
      return '--:--';
    }
  }

  // Demo target: next Sunday 15:00 Europe/London (or fixed upcoming sample)
  function nextSundayLondon15() {
    const now = new Date();
    // Find a stable demo: 2026-07-05 15:00 London if still useful, else rolling next Sunday
    const candidates = [
      wallApprox('2026-07-05', '15:00', 'Europe/London'),
      wallApprox('2026-07-26', '15:00', 'Europe/Brussels'),
      wallApprox('2026-08-02', '15:00', 'Europe/Budapest'),
    ].filter(Boolean);
    const upcoming = candidates.find((d) => d.getTime() > now.getTime() - 3600000);
    return upcoming || candidates[candidates.length - 1] || new Date(now.getTime() + 86400000 * 3);
  }

  function wallApprox(dateStr, timeStr, tz) {
    // coarse: treat as UTC shift by reading offset at midday
    try {
      const [y, m, d] = dateStr.split('-').map(Number);
      const [hh, mm] = timeStr.split(':').map(Number);
      // binary search light
      let lo = Date.UTC(y, m - 1, d - 1);
      let hi = Date.UTC(y, m - 1, d + 2);
      for (let i = 0; i < 40; i++) {
        const mid = Math.floor((lo + hi) / 2);
        const parts = new Intl.DateTimeFormat('en-US', {
          timeZone: tz,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).formatToParts(new Date(mid));
        const get = (t) => Number(parts.find((p) => p.type === t)?.value);
        let hour = get('hour');
        if (hour === 24) hour = 0;
        const key = get('year') * 1e8 + get('month') * 1e6 + get('day') * 1e4 + hour * 100 + get('minute');
        const target = y * 1e8 + m * 1e6 + d * 1e4 + hh * 100 + mm;
        if (key === target) return new Date(mid);
        if (key < target) lo = mid + 1;
        else hi = mid - 1;
      }
    } catch {
      /* ignore */
    }
    return null;
  }

  function countdown(ms) {
    const past = ms < 0;
    const a = Math.abs(ms);
    const d = Math.floor(a / 86400000);
    const h = Math.floor((a % 86400000) / 3600000);
    const m = Math.floor((a % 3600000) / 60000);
    const s = Math.floor((a % 60000) / 1000);
    const core = d > 0 ? `${d}d ${h}h ${m}m` : `${h}h ${m}m ${s}s`;
    return past ? core + ' ago' : core;
  }

  const demoMeta = [
    { title: 'British Grand Prix', venueTz: 'Europe/London', city: 'Silverstone' },
    { title: 'Belgian Grand Prix', venueTz: 'Europe/Brussels', city: 'Spa' },
    { title: 'Hungarian Grand Prix', venueTz: 'Europe/Budapest', city: 'Budapest' },
  ];
  let demoIdx = 0;

  function tickHud() {
    const now = new Date();
    const targets = [
      wallApprox('2026-07-05', '15:00', 'Europe/London'),
      wallApprox('2026-07-26', '15:00', 'Europe/Brussels'),
      wallApprox('2026-08-02', '15:00', 'Europe/Budapest'),
    ];
    // pick soonest future
    let bestI = 0;
    let bestT = Infinity;
    targets.forEach((t, i) => {
      if (!t) return;
      const diff = t.getTime() - now.getTime();
      if (diff > -3600000 && diff < bestT) {
        bestT = diff;
        bestI = i;
      }
    });
    demoIdx = bestI;
    const meta = demoMeta[demoIdx];
    const when = targets[demoIdx] || new Date(now.getTime() + 3 * 86400000);
    const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const hudTitle = document.getElementById('hudTitle');
    const hudCount = document.getElementById('hudCount');
    const hudVenue = document.getElementById('hudVenue');
    const hudLocal = document.getElementById('hudLocal');
    const termNext = document.getElementById('termNext');
    const termLocal = document.getElementById('termLocal');

    if (hudTitle) hudTitle.textContent = meta.title;
    if (hudCount) hudCount.textContent = countdown(when.getTime() - now.getTime());
    if (hudVenue) hudVenue.textContent = fmt(when, meta.venueTz) + ' · ' + meta.city;
    if (hudLocal) hudLocal.textContent = fmt(when, localTz);
    if (termNext) termNext.textContent = `${meta.title} · Race · ${countdown(when.getTime() - now.getTime())}`;
    if (termLocal) termLocal.textContent = `tune-in ${fmt(when, localTz)} (${localTz})`;
  }

  tickHud();
  setInterval(tickHud, 1000);

  // Hotspot tooltips
  const tip = document.getElementById('tip');
  document.querySelectorAll('.hotspot').forEach((hs) => {
    hs.addEventListener('mouseenter', (e) => {
      if (!tip) return;
      tip.hidden = false;
      tip.textContent = hs.dataset.label || '';
      tip.style.left = e.clientX + 12 + 'px';
      tip.style.top = e.clientY + 12 + 'px';
    });
    hs.addEventListener('mousemove', (e) => {
      if (!tip || tip.hidden) return;
      tip.style.left = e.clientX + 12 + 'px';
      tip.style.top = e.clientY + 12 + 'px';
    });
    hs.addEventListener('mouseleave', () => {
      if (tip) tip.hidden = true;
    });
  });

  // Sport card tilt
  document.querySelectorAll('.sport-card').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `translateY(-4px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg)`;
    });
    card.addEventListener('pointerleave', () => {
      card.style.transform = '';
    });
  });
})();
