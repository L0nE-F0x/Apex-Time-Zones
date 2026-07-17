/**
 * Window chrome controls — plain script independent of globe bundle.
 */
(function initChrome() {
  const apex = window.apex;
  if (!apex) {
    console.warn('[ApexTimeZones] preload bridge missing (window.apex)');
  }

  const bind = (id, fn) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      try {
        fn();
      } catch (err) {
        console.error(err);
      }
    });
  };

  bind('btnMin', () => apex?.minimize());
  bind('btnMax', () => apex?.maximize());
  bind('btnTray', () => apex?.hideToTray());
  bind('btnClose', () => apex?.close());

  if (apex?.getVersion) {
    apex.getVersion().then((v) => {
      const el = document.getElementById('appVersion');
      if (el && v) el.textContent = `v${v}`;
    });
  }

  if (apex?.onWindowState) {
    apex.onWindowState((state) => {
      const btn = document.getElementById('btnMax');
      if (btn && state && typeof state.maximized === 'boolean') {
        btn.textContent = state.maximized ? '❐' : '□';
      }
    });
  }
  if (apex?.isMaximized) {
    apex.isMaximized().then((m) => {
      const btn = document.getElementById('btnMax');
      if (btn) btn.textContent = m ? '❐' : '□';
    });
  }
})();
