/**
 * Global System Dashboard — atmospheric FX + dashboard telemetry for ApexTimeZones.
 */
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ——— WebGL / canvas atmospheric field ———
  const canvas = document.getElementById('fx-bg');
  const ctx = canvas?.getContext('2d');
  let w = 0;
  let h = 0;
  let particles = [];
  let t = 0;

  function resize() {
    if (!canvas || !ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    particles = Array.from({ length: Math.min(180, Math.floor((w * h) / 14000)) }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random(),
      vx: (Math.random() - 0.5) * 0.25,
      vy: -0.15 - Math.random() * 0.35,
    }));
  }

  function frame() {
    if (!ctx) return;
    t += 0.01;
    ctx.fillStyle = '#020617';
    ctx.fillRect(0, 0, w, h);

    // deep indigo wash
    const g = ctx.createRadialGradient(w * 0.7, h * 0.15, 0, w * 0.7, h * 0.15, w * 0.55);
    g.addColorStop(0, 'rgba(59,130,246,0.16)');
    g.addColorStop(0.45, 'rgba(30,27,75,0.35)');
    g.addColorStop(1, 'transparent');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);

    // scanlines / dither
    ctx.globalAlpha = 0.04;
    for (let y = 0; y < h; y += 3) {
      ctx.fillStyle = y % 6 === 0 ? '#fff' : '#1e1b4b';
      ctx.fillRect(0, y, w, 1);
    }
    ctx.globalAlpha = 1;

    // soft grid
    ctx.strokeStyle = 'rgba(39,39,42,0.85)';
    ctx.lineWidth = 1;
    const step = 56;
    const ox = reduce ? 0 : (t * 6) % step;
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

    // particles
    for (const p of particles) {
      if (!reduce) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -4) {
          p.y = h + 4;
          p.x = Math.random() * w;
        }
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
      }
      const a = 0.15 + p.z * 0.55;
      ctx.fillStyle = `rgba(96,165,250,${a})`;
      ctx.fillRect(p.x, p.y, 1.2 + p.z * 1.8, 1.2 + p.z * 1.8);
    }

    // connecting lines (sparse)
    ctx.strokeStyle = 'rgba(59,130,246,0.08)';
    for (let i = 0; i < particles.length; i += 7) {
      const a = particles[i];
      const b = particles[(i + 11) % particles.length];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      if (dx * dx + dy * dy < 12000) {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }

    if (!reduce) requestAnimationFrame(frame);
  }

  if (canvas && ctx) {
    resize();
    frame();
    window.addEventListener('resize', () => {
      resize();
      if (reduce) frame();
    });
  }

  // ——— Reveal ———
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('in');
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
  }

  // ——— Animated liquidity metrics ———
  function animateValue(el, to, prefix = '', decimals = 0) {
    if (!el) return;
    const start = performance.now();
    const from = 0;
    const dur = reduce ? 0 : 1200;
    function step(now) {
      const p = dur ? Math.min(1, (now - start) / dur) : 1;
      const eased = 1 - Math.pow(1 - p, 3);
      const v = from + (to - from) * eased;
      el.textContent = prefix + v.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  animateValue(document.getElementById('liquidityVal'), 128400, '$', 0);
  animateValue(document.getElementById('yieldVal'), 8420, '$', 0);

  // ——— Charts ———
  function lineChart(el, color, seed) {
    if (!el) return;
    const c = el.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const parent = el.parentElement;
    const W = Math.max(200, parent.clientWidth - 48);
    const H = el.height || 64;
    el.width = W * dpr;
    el.height = H * dpr;
    el.style.width = W + 'px';
    el.style.height = H + 'px';
    c.setTransform(dpr, 0, 0, dpr, 0, 0);
    c.clearRect(0, 0, W, H);

    const n = 32;
    const pts = [];
    let v = 0.45;
    for (let i = 0; i < n; i++) {
      v += Math.sin(i * 0.35 + seed) * 0.04 + (Math.random() - 0.5) * 0.06;
      v = Math.max(0.15, Math.min(0.9, v));
      pts.push(v);
    }

    c.beginPath();
    pts.forEach((p, i) => {
      const x = (i / (n - 1)) * W;
      const y = H - p * (H - 8) - 4;
      if (i === 0) c.moveTo(x, y);
      else c.lineTo(x, y);
    });
    c.strokeStyle = color;
    c.lineWidth = 1.75;
    c.stroke();

    c.lineTo(W, H);
    c.lineTo(0, H);
    c.closePath();
    c.fillStyle = color;
    c.globalAlpha = 0.12;
    c.fill();
    c.globalAlpha = 1;
  }

  function drawCharts() {
    lineChart(document.getElementById('liqChart'), '#3b82f6', 1);
    lineChart(document.getElementById('yieldChart'), '#60a5fa', 2.2);
    lineChart(document.getElementById('bandChart'), '#818cf8', 0.7);
  }

  drawCharts();
  window.addEventListener('resize', drawCharts);

  // Range buttons visual only
  document.querySelectorAll('.seg-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.parentElement.querySelectorAll('.seg-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      lineChart(document.getElementById('yieldChart'), '#60a5fa', Math.random() * 3);
    });
  });

  // ——— Countdown ———
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
    set(
      'clockNow',
      now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    );
  }

  tick();
  setInterval(tick, 1000);
})();
