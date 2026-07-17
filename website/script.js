/**
 * Aether Prime telemetry interactions for ApexTimeZones marketing site.
 */
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ——— Dither / matrix field (light dashboard atmosphere) ———
  const canvas = document.getElementById('matrix-bg');
  const ctx = canvas?.getContext('2d');
  let w = 0;
  let h = 0;
  let t = 0;
  let particles = [];

  function resizeMatrix() {
    if (!canvas || !ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    particles = Array.from({ length: Math.floor((w * h) / 18000) }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      v: 0.15 + Math.random() * 0.45,
      s: Math.random() * 1.2 + 0.3,
    }));
  }

  function drawMatrix() {
    if (!ctx) return;
    t += 0.008;
    ctx.clearRect(0, 0, w, h);

    // soft blue wash
    const g = ctx.createLinearGradient(0, 0, w, h);
    g.addColorStop(0, 'rgba(59,130,246,0.04)');
    g.addColorStop(0.5, 'rgba(255,255,255,0)');
    g.addColorStop(1, 'rgba(52,211,153,0.05)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);

    // grid
    ctx.strokeStyle = 'rgba(229,231,235,0.7)';
    ctx.lineWidth = 1;
    const step = 48;
    const ox = (t * 8) % step;
    for (let x = -step + ox; x < w + step; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += step) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // dither dots
    for (const p of particles) {
      if (!reduce) {
        p.y += p.v;
        if (p.y > h) {
          p.y = -4;
          p.x = Math.random() * w;
        }
      }
      ctx.fillStyle = 'rgba(59,130,246,0.35)';
      ctx.fillRect(p.x, p.y, p.s, p.s);
    }

    if (!reduce) requestAnimationFrame(drawMatrix);
  }

  if (canvas && ctx) {
    resizeMatrix();
    drawMatrix();
    window.addEventListener('resize', () => {
      resizeMatrix();
      if (reduce) drawMatrix();
    });
  }

  // ——— Reveal on scroll ———
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('is-in');
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-in'));
  }

  // ——— Sparkline charts on modules ———
  function spark(canvasEl, color) {
    const c = canvasEl.getContext('2d');
    if (!c) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvasEl.parentElement.getBoundingClientRect();
    const W = Math.max(120, rect.width);
    const H = 40;
    canvasEl.width = W * dpr;
    canvasEl.height = H * dpr;
    c.setTransform(dpr, 0, 0, dpr, 0, 0);
    const pts = Array.from({ length: 24 }, (_, i) => {
      const n = Math.sin(i * 0.45) * 0.35 + Math.cos(i * 0.2) * 0.2 + Math.random() * 0.15;
      return 0.35 + n * 0.35;
    });
    c.beginPath();
    pts.forEach((v, i) => {
      const x = (i / (pts.length - 1)) * (W - 8) + 4;
      const y = H - 6 - v * (H - 12);
      if (i === 0) c.moveTo(x, y);
      else c.lineTo(x, y);
    });
    c.strokeStyle = color;
    c.lineWidth = 1.5;
    c.stroke();
    // fill
    const lastX = W - 4;
    c.lineTo(lastX, H);
    c.lineTo(4, H);
    c.closePath();
    c.fillStyle = color.replace(')', ',0.12)').replace('rgb', 'rgba').replace('#3b82f6', 'rgba(59,130,246,0.12)').replace('#34d399', 'rgba(52,211,153,0.12)');
    // simpler fill
    c.globalAlpha = 0.12;
    c.fillStyle = color;
    c.fill();
    c.globalAlpha = 1;
  }

  const sparkColors = { f1: '#3b82f6', wc: '#34d399', ten: '#3b82f6', esp: '#34d399' };
  document.querySelectorAll('canvas[data-spark]').forEach((el) => {
    spark(el, sparkColors[el.dataset.spark] || '#3b82f6');
  });
  window.addEventListener('resize', () => {
    document.querySelectorAll('canvas[data-spark]').forEach((el) => {
      spark(el, sparkColors[el.dataset.spark] || '#3b82f6');
    });
  });

  // ——— Zone chart ———
  function drawZoneChart() {
    const el = document.getElementById('zoneChart');
    if (!el) return;
    const c = el.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = el.parentElement.clientWidth - 0;
    const H = 120;
    el.width = W * dpr;
    el.height = H * dpr;
    el.style.width = W + 'px';
    el.style.height = H + 'px';
    c.setTransform(dpr, 0, 0, dpr, 0, 0);
    c.clearRect(0, 0, W, H);

    const now = new Date();
    const hours = Array.from({ length: 12 }, (_, i) => {
      const d = new Date(now.getTime() + i * 3600000);
      return {
        utc: d.getUTCHours() + d.getUTCMinutes() / 60,
        local: d.getHours() + d.getMinutes() / 60,
        lon: (() => {
          try {
            const parts = new Intl.DateTimeFormat('en-GB', {
              timeZone: 'Europe/London',
              hour: 'numeric',
              minute: 'numeric',
              hour12: false,
            }).formatToParts(d);
            const hh = Number(parts.find((p) => p.type === 'hour')?.value || 0) % 24;
            const mm = Number(parts.find((p) => p.type === 'minute')?.value || 0);
            return hh + mm / 60;
          } catch {
            return d.getUTCHours();
          }
        })(),
      };
    });

    function series(key, color) {
      c.beginPath();
      hours.forEach((pt, i) => {
        const x = 20 + (i / 11) * (W - 36);
        const y = H - 16 - (pt[key] / 24) * (H - 28);
        if (i === 0) c.moveTo(x, y);
        else c.lineTo(x, y);
      });
      c.strokeStyle = color;
      c.lineWidth = 2;
      c.stroke();
    }

    // grid
    c.strokeStyle = '#e5e7eb';
    c.lineWidth = 1;
    for (let i = 0; i < 4; i++) {
      const y = 12 + i * ((H - 28) / 3);
      c.beginPath();
      c.moveTo(16, y);
      c.lineTo(W - 12, y);
      c.stroke();
    }

    series('utc', '#93c5fd');
    series('lon', '#3b82f6');
    series('local', '#34d399');
  }

  drawZoneChart();
  window.addEventListener('resize', drawZoneChart);

  // ——— Countdown HUD ———
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

  function wallApprox(dateStr, timeStr, tz) {
    try {
      const [y, m, d] = dateStr.split('-').map(Number);
      const [hh, mm] = timeStr.split(':').map(Number);
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
        const key =
          get('year') * 1e8 + get('month') * 1e6 + get('day') * 1e4 + hour * 100 + get('minute');
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

  const demos = [
    {
      title: 'British Grand Prix',
      tz: 'Europe/London',
      city: 'Silverstone',
      when: wallApprox('2026-07-05', '15:00', 'Europe/London'),
    },
    {
      title: 'Belgian Grand Prix',
      tz: 'Europe/Brussels',
      city: 'Spa',
      when: wallApprox('2026-07-26', '15:00', 'Europe/Brussels'),
    },
    {
      title: 'Hungarian Grand Prix',
      tz: 'Europe/Budapest',
      city: 'Budapest',
      when: wallApprox('2026-08-02', '15:00', 'Europe/Budapest'),
    },
  ];

  function tick() {
    const now = new Date();
    let best = demos[0];
    let bestDiff = Infinity;
    for (const d of demos) {
      if (!d.when) continue;
      const diff = d.when.getTime() - now.getTime();
      if (diff > -3600000 && diff < bestDiff) {
        bestDiff = diff;
        best = d;
      }
    }
    const when = best.when || new Date(now.getTime() + 3 * 86400000);
    const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const set = (id, v) => {
      const el = document.getElementById(id);
      if (el) el.textContent = v;
    };
    set('hudTitle', best.title);
    set('hudCount', countdown(when.getTime() - now.getTime()));
    set('hudVenue', `${fmt(when, best.tz)} · ${best.city}`);
    set('hudLocal', fmt(when, localTz));
    set('termNext', `${best.title} · Race · ${countdown(when.getTime() - now.getTime())}`);
    set('termLocal', `tune-in ${fmt(when, localTz)} (${localTz})`);
    set(
      'chartNow',
      now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    );
  }

  tick();
  setInterval(tick, 1000);
  setInterval(drawZoneChart, 60000);
})();
