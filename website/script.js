/**
 * Site chrome: quiet starfield + live countdown HUD.
 * Globe preview: globe-preview.js (Three.js).
 */
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const canvas = document.getElementById('starfield');
  const ctx = canvas?.getContext('2d');
  let w = 0;
  let h = 0;
  let stars = [];

  function resize() {
    if (!canvas || !ctx) return;
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    const count = Math.min(110, Math.floor((w * h) / 20000));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.0 + 0.2,
      a: Math.random() * Math.PI * 2,
      s: 0.003 + Math.random() * 0.008,
    }));
  }

  function draw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, w, h);
    const g = ctx.createRadialGradient(w * 0.55, h * 0.3, 0, w * 0.55, h * 0.3, w * 0.55);
    g.addColorStop(0, 'rgba(14, 32, 58, 0.18)');
    g.addColorStop(1, 'transparent');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);

    for (const s of stars) {
      if (!reduce) s.a += s.s;
      const tw = 0.3 + Math.sin(s.a) * 0.2;
      ctx.fillStyle = `rgba(190, 210, 230, ${tw})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    if (!reduce) requestAnimationFrame(draw);
  }

  if (canvas && ctx) {
    resize();
    draw();
    window.addEventListener('resize', () => {
      resize();
      if (reduce) draw();
    });
  }

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
      title: 'Belgian Grand Prix',
      venueTz: 'Europe/Brussels',
      city: 'Spa',
      when: wallApprox('2026-07-26', '15:00', 'Europe/Brussels'),
    },
    {
      title: 'Hungarian Grand Prix',
      venueTz: 'Europe/Budapest',
      city: 'Budapest',
      when: wallApprox('2026-08-02', '15:00', 'Europe/Budapest'),
    },
    {
      title: 'Dutch Grand Prix',
      venueTz: 'Europe/Amsterdam',
      city: 'Zandvoort',
      when: wallApprox('2026-08-30', '15:00', 'Europe/Amsterdam'),
    },
  ];

  function tickHud() {
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
    set('hudVenue', `${fmt(when, best.venueTz)} · ${best.city}`);
    set('hudLocal', fmt(when, localTz));
    set('termNext', `${best.title} · ${countdown(when.getTime() - now.getTime())}`);
    set('termLocal', `${fmt(when, localTz)} (${localTz.split('/').pop().replace(/_/g, ' ')})`);
  }

  tickHud();
  setInterval(tickHud, 1000);
})();
