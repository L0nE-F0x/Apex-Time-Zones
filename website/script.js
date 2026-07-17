(function () {
  function pad(n) {
    return String(n).padStart(2, '0');
  }

  function formatInTz(date, timeZone) {
    try {
      return new Intl.DateTimeFormat(undefined, {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(date);
    } catch {
      return '--:--';
    }
  }

  function tickClocks() {
    const now = new Date();
    document.querySelectorAll('.chip-time[data-tz]').forEach((el) => {
      el.textContent = formatInTz(now, el.dataset.tz);
    });
  }

  /** Demo: event is "today 15:00 Europe/London" shown as wall times elsewhere */
  function updateBridgeDemo() {
    const now = new Date();
    // Approximate: find a Date whose London wall clock is 15:00 today
    // For marketing demo only — app uses full converter
    const londonParts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/London',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).formatToParts(now);
    const get = (t) => londonParts.find((p) => p.type === t)?.value;
    // Use current real times for mock rows (live clocks) — clearer than fake event
    document.querySelectorAll('[data-mock-tz]').forEach((el) => {
      el.textContent = formatInTz(now, el.dataset.mockTz);
    });
    const local = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const localEl = document.getElementById('mockLocal');
    if (localEl) localEl.textContent = formatInTz(now, local) + ' · ' + local.split('/').pop().replace(/_/g, ' ');
  }

  tickClocks();
  updateBridgeDemo();
  setInterval(() => {
    tickClocks();
    updateBridgeDemo();
  }, 1000);

  // Optional analytics-free download click feedback
  document.querySelectorAll('a[download]').forEach((a) => {
    a.addEventListener('click', () => {
      a.classList.add('downloading');
      setTimeout(() => a.classList.remove('downloading'), 1200);
    });
  });
})();
