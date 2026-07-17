/**
 * Nexus Cinematic motion layer for ApexTimeZones marketing site.
 * WebGL ambient particles · scroll beats · magnetic hooks · card tilt.
 * Honors prefers-reduced-motion.
 */
(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ——— WebGL / Canvas particle field ———
  const canvas = document.getElementById('webgl-bg');
  const gl = canvas?.getContext('webgl', { alpha: true, antialias: true });
  let animId = 0;

  function initParticles() {
    if (!canvas || !gl || reduceMotion) {
      // Soft 2D fallback
      if (canvas && !reduceMotion) initCanvas2dFallback();
      return;
    }

    const vs = `
      attribute vec2 a_pos;
      attribute float a_size;
      attribute float a_alpha;
      uniform vec2 u_res;
      uniform float u_time;
      varying float v_a;
      void main() {
        vec2 p = a_pos;
        p.x += sin(u_time * 0.15 + a_pos.y * 3.0) * 0.02;
        p.y += cos(u_time * 0.12 + a_pos.x * 2.5) * 0.015;
        vec2 zeroToOne = (p + 1.0) * 0.5;
        vec2 clip = zeroToOne * 2.0 - 1.0;
        gl_Position = vec4(clip * vec2(1.0, -1.0), 0.0, 1.0);
        gl_PointSize = a_size * (u_res.y / 900.0);
        v_a = a_alpha;
      }
    `;
    const fs = `
      precision mediump float;
      varying float v_a;
      void main() {
        vec2 c = gl_PointCoord - 0.5;
        float d = length(c);
        float soft = smoothstep(0.5, 0.1, d);
        // Neural pink tint
        gl_FragColor = vec4(0.96, 0.72, 0.82, soft * v_a);
      }
    `;

    function compile(type, src) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }

    const prog = gl.createProgram();
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const COUNT = 160;
    const pos = new Float32Array(COUNT * 2);
    const size = new Float32Array(COUNT);
    const alpha = new Float32Array(COUNT);
    for (let i = 0; i < COUNT; i++) {
      pos[i * 2] = Math.random() * 2 - 1;
      pos[i * 2 + 1] = Math.random() * 2 - 1;
      size[i] = 1.5 + Math.random() * 3.5;
      alpha[i] = 0.15 + Math.random() * 0.45;
    }

    function buf(data, locName, sizeN) {
      const b = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, b);
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(prog, locName);
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, sizeN, gl.FLOAT, false, 0, 0);
    }

    buf(pos, 'a_pos', 2);
    // need separate binds - re-bind properly
    const bPos = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bPos);
    gl.bufferData(gl.ARRAY_BUFFER, pos, gl.STATIC_DRAW);
    const locPos = gl.getAttribLocation(prog, 'a_pos');
    gl.enableVertexAttribArray(locPos);
    gl.vertexAttribPointer(locPos, 2, gl.FLOAT, false, 0, 0);

    const bSize = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bSize);
    gl.bufferData(gl.ARRAY_BUFFER, size, gl.STATIC_DRAW);
    const locSize = gl.getAttribLocation(prog, 'a_size');
    gl.enableVertexAttribArray(locSize);
    gl.vertexAttribPointer(locSize, 1, gl.FLOAT, false, 0, 0);

    const bAlpha = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bAlpha);
    gl.bufferData(gl.ARRAY_BUFFER, alpha, gl.STATIC_DRAW);
    const locAlpha = gl.getAttribLocation(prog, 'a_alpha');
    gl.enableVertexAttribArray(locAlpha);
    gl.vertexAttribPointer(locAlpha, 1, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, 'u_res');
    const uTime = gl.getUniformLocation(prog, 'u_time');

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    }

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

    const t0 = performance.now();
    function frame(now) {
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(uTime, (now - t0) / 1000);
      gl.drawArrays(gl.POINTS, 0, COUNT);
      animId = requestAnimationFrame(frame);
    }

    resize();
    window.addEventListener('resize', resize);
    animId = requestAnimationFrame(frame);
  }

  function initCanvas2dFallback() {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let w, h, stars;
    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      stars = Array.from({ length: 120 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.5 + 0.3,
        a: Math.random(),
      }));
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        s.a += 0.012;
        ctx.fillStyle = `rgba(245,184,208,${0.2 + Math.sin(s.a) * 0.2})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    }
    resize();
    window.addEventListener('resize', resize);
    draw();
  }

  initParticles();

  // ——— Magnetic pull ———
  function magnetic(el, strength = 0.35) {
    if (reduceMotion) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };
    const reset = () => {
      el.style.transform = '';
    };
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', reset);
  }

  document.querySelectorAll('.mag').forEach((el) => {
    const s = el.classList.contains('btn') ? 0.22 : 0.35;
    magnetic(el, s);
  });

  // ——— 3D card tilt ———
  document.querySelectorAll('.agent-card').forEach((card) => {
    if (reduceMotion) return;
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 10).toFixed(2)}deg) scale(1.02)`;
    });
    card.addEventListener('pointerleave', () => {
      card.style.transform = '';
    });
  });

  // ——— Scroll reveal + timeline beats ———
  const captions = ['01 · Arrival', '02 · Orbit', '03 · Sports', '04 · Deploy'];
  const dots = document.querySelectorAll('.timeline-track .dot');
  const captionEl = document.getElementById('timelineCaption');
  const stage = document.querySelector('.hero-stage');

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) en.target.classList.add('is-visible');
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    document.querySelectorAll('.beat-in').forEach((el) => io.observe(el));

    const beatIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const step = Number(en.target.dataset.step || 0);
          dots.forEach((d, i) => d.classList.toggle('active', i === step));
          if (captionEl) captionEl.textContent = captions[step] || captions[0];
          if (stage) stage.dataset.step = String(step);
          const fill = document.getElementById('hudProgress');
          if (fill) fill.style.width = `${20 + step * 22}%`;
        });
      },
      { threshold: 0.55 }
    );
    document.querySelectorAll('.beat-spacer').forEach((el) => beatIO.observe(el));
  } else {
    document.querySelectorAll('.beat-in').forEach((el) => el.classList.add('is-visible'));
  }

  // ——— Cursor glow ———
  const glow = document.getElementById('cursorGlow');
  if (glow && !reduceMotion) {
    window.addEventListener('pointermove', (e) => {
      glow.style.opacity = '1';
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });
  }

  // ——— Node tooltips ———
  const tip = document.getElementById('tip');
  document.querySelectorAll('.node').forEach((node) => {
    node.addEventListener('pointerenter', (e) => {
      if (!tip) return;
      tip.hidden = false;
      tip.textContent = node.dataset.tip || '';
      tip.style.left = e.clientX + 12 + 'px';
      tip.style.top = e.clientY + 12 + 'px';
    });
    node.addEventListener('pointermove', (e) => {
      if (!tip || tip.hidden) return;
      tip.style.left = e.clientX + 12 + 'px';
      tip.style.top = e.clientY + 12 + 'px';
    });
    node.addEventListener('pointerleave', () => {
      if (tip) tip.hidden = true;
    });
  });

  // ——— Live countdown HUD ———
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
    { title: 'British Grand Prix', tz: 'Europe/London', city: 'Silverstone', when: wallApprox('2026-07-05', '15:00', 'Europe/London') },
    { title: 'Belgian Grand Prix', tz: 'Europe/Brussels', city: 'Spa', when: wallApprox('2026-07-26', '15:00', 'Europe/Brussels') },
    { title: 'Hungarian Grand Prix', tz: 'Europe/Budapest', city: 'Budapest', when: wallApprox('2026-08-02', '15:00', 'Europe/Budapest') },
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
    set('hudVenue', fmt(when, best.tz) + ' · ' + best.city);
    set('hudLocal', fmt(when, localTz));
    set('termNext', `${best.title} · Race · ${countdown(when.getTime() - now.getTime())}`);
    set('termLocal', `tune-in ${fmt(when, localTz)} (${localTz})`);
  }

  tickHud();
  setInterval(tickHud, 1000);

  // Nav shadow on scroll
  const nav = document.getElementById('nav');
  window.addEventListener(
    'scroll',
    () => {
      if (!nav) return;
      nav.style.boxShadow =
        window.scrollY > 12 ? '0 12px 40px rgba(0,0,0,0.35)' : 'none';
    },
    { passive: true }
  );
})();
