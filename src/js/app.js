import { ApexGlobe } from './globe.js';
import {
  CITIES,
  DEFAULT_PINS,
  getCityById,
  searchCities,
  loadPinnedIds,
  savePinnedIds,
  formatTime,
  getLocalTimeZone,
  getOffsetLabel,
  convertEventTime,
  convertEventToZones,
  formatConversionCopy,
  quickEventPresets,
  relativeDelta,
  describeCityTime,
  todayISOInZone,
  wallTimeToUtcDate,
} from './timezones.js';
import {
  loadSettings,
  saveSettings,
  updateSettings,
  exportPinsPayload,
  importPinsPayload,
  DEFAULT_SETTINGS,
} from './settings.js';
import { createSportsUI } from './sports/ui.js';

const apex = window.apex;
const isWidgetQuery = new URLSearchParams(location.search).get('widget') === '1';
const localTz = getLocalTimeZone();

let settings = loadSettings();
let pinnedIds = loadPinnedIds(settings.pinnedIds);
let selectedId = null;
let hoverCity = null;
let globe = null;
let searchActiveIndex = -1;
let widgetMode = settings.widgetMode || isWidgetQuery;
let sportsUi = null;
let pendingGlobeHandlers = null;

const els = {
  localTime: document.getElementById('localTime'),
  localZone: document.getElementById('localZone'),
  utcNow: document.getElementById('utcNow'),
  hoverCard: document.getElementById('hoverCard'),
  hoverCity: document.getElementById('hoverCity'),
  hoverTime: document.getElementById('hoverTime'),
  hoverMeta: document.getElementById('hoverMeta'),
  clockList: document.getElementById('clockList'),
  searchInput: document.getElementById('searchInput'),
  searchClear: document.getElementById('searchClear'),
  searchResults: document.getElementById('searchResults'),
  eventTime: document.getElementById('eventTime'),
  eventDate: document.getElementById('eventDate'),
  eventZone: document.getElementById('eventZone'),
  bridgeValue: document.getElementById('bridgeValue'),
  bridgeDelta: document.getElementById('bridgeDelta'),
  bridgeTable: document.getElementById('bridgeTable'),
  bridgeChips: document.getElementById('bridgeChips'),
  btnCopyBridge: document.getElementById('btnCopyBridge'),
  loadingOverlay: document.getElementById('loadingOverlay'),
  appVersion: document.getElementById('appVersion'),
  btnResetPins: document.getElementById('btnResetPins'),
  btnPinSelected: document.getElementById('btnPinSelected'),
  canvas: document.getElementById('globeCanvas'),
  btnMax: document.getElementById('btnMax'),
  settingsPanel: document.getElementById('settingsPanel'),
  onboarding: document.getElementById('onboarding'),
  app: document.getElementById('app'),
  groupsBar: document.getElementById('groupsBar'),
  homeSelect: document.getElementById('homeSelect'),
  reminderTitle: document.getElementById('reminderTitle'),
  reminderNotify: document.getElementById('reminderNotify'),
  btnSaveReminder: document.getElementById('btnSaveReminder'),
  reminderList: document.getElementById('reminderList'),
};

function hour12() {
  return !!settings.hour12;
}

function persistPins() {
  settings = updateSettings({ pinnedIds });
  savePinnedIds(pinnedIds);
  globe?.setPinned(pinnedIds);
  syncTrayTimes();
}

function showLoadError(message) {
  if (!els.loadingOverlay) return;
  els.loadingOverlay.style.display = 'flex';
  els.loadingOverlay.classList.remove('fade-out');
  const text = els.loadingOverlay.querySelector('.loader-text');
  if (text) text.textContent = message;
}

// ——— Incremental clock list ———
function ensureClockCards() {
  const existing = new Set(
    [...els.clockList.querySelectorAll('.clock-card')].map((el) => el.dataset.id)
  );
  const wanted = new Set(pinnedIds);

  for (const id of existing) {
    if (!wanted.has(id)) {
      els.clockList.querySelector(`.clock-card[data-id="${id}"]`)?.remove();
    }
  }

  for (const id of pinnedIds) {
    if (!existing.has(id)) {
      const city = getCityById(id);
      if (!city) continue;
      const card = document.createElement('div');
      card.className = 'clock-card';
      card.dataset.id = id;
      card.innerHTML = `
        <div class="clock-city"></div>
        <div class="clock-time"></div>
        <div class="clock-region"></div>
        <div class="clock-offset">
          <span class="clock-dayoff"></span>
          <span class="clock-delta"></span>
        </div>
        <button class="clock-remove" title="Unpin" type="button">✕</button>
        <button class="clock-focus" title="Focus on globe" type="button">◎</button>
      `;
      card.querySelector('.clock-city').textContent = city.name;
      card.querySelector('.clock-region').textContent = city.region;
      card.addEventListener('click', (e) => {
        if (e.target.closest('button')) return;
        selectCity(id);
      });
      card.querySelector('.clock-remove').addEventListener('click', (e) => {
        e.stopPropagation();
        unpin(id);
      });
      card.querySelector('.clock-focus').addEventListener('click', (e) => {
        e.stopPropagation();
        selectCity(id);
      });
      els.clockList.appendChild(card);
    }
  }

  // Reorder to match pinnedIds
  for (const id of pinnedIds) {
    const el = els.clockList.querySelector(`.clock-card[data-id="${id}"]`);
    if (el) els.clockList.appendChild(el);
  }
}

function updateClockTimes(now) {
  ensureClockCards();
  const sunDir = globe?.getSunDir?.() || null;
  for (const id of pinnedIds) {
    const city = getCityById(id);
    const card = els.clockList.querySelector(`.clock-card[data-id="${id}"]`);
    if (!city || !card) continue;
    const info = describeCityTime(city, now, hour12(), sunDir);
    const delta = relativeDelta(now, city.tz, localTz);
    card.classList.toggle('day', info.isDay);
    card.classList.toggle('night', !info.isDay);
    card.classList.toggle('selected', selectedId === id);
    card.querySelector('.clock-time').textContent = info.time;
    card.querySelector('.clock-dayoff').textContent = `${info.day} · ${info.offset}`;
    card.querySelector('.clock-delta').textContent = delta.label + (delta.dayNote ? ` · ${delta.dayNote}` : '');
  }
}

function pin(id) {
  if (!getCityById(id)) return;
  if (!pinnedIds.includes(id)) {
    pinnedIds = [id, ...pinnedIds];
    persistPins();
  }
  selectCity(id);
  updateClockTimes(new Date());
}

function unpin(id) {
  pinnedIds = pinnedIds.filter((x) => x !== id);
  persistPins();
  updateClockTimes(new Date());
  updateBridge();
}

function selectCity(id) {
  selectedId = id;
  globe?.selectCity(id, !widgetMode);
  updateClockTimes(new Date());
  const city = getCityById(id);
  if (city) {
    showHover(city);
    if (els.eventZone) els.eventZone.value = city.tz;
    updateBridge();
  }
  updatePinButton();
}

function updatePinButton() {
  if (!els.btnPinSelected) return;
  if (!selectedId) {
    els.btnPinSelected.disabled = true;
    els.btnPinSelected.textContent = 'Pin selected';
    return;
  }
  els.btnPinSelected.disabled = false;
  els.btnPinSelected.textContent = pinnedIds.includes(selectedId) ? 'Unpin selected' : 'Pin selected';
}

els.btnPinSelected?.addEventListener('click', () => {
  if (!selectedId) return;
  if (pinnedIds.includes(selectedId)) unpin(selectedId);
  else pin(selectedId);
  updatePinButton();
});

els.btnResetPins?.addEventListener('click', () => {
  if (!confirm('Reset pinned clocks to defaults?')) return;
  pinnedIds = [...DEFAULT_PINS];
  persistPins();
  updateClockTimes(new Date());
  updateBridge();
});

// ——— Search with keyboard ———
function renderSearch(query) {
  const q = query.trim();
  els.searchClear.hidden = !q;
  searchActiveIndex = -1;
  if (!q) {
    els.searchResults.hidden = true;
    els.searchResults.innerHTML = '';
    return;
  }
  const results = searchCities(q);
  if (!results.length) {
    els.searchResults.hidden = false;
    els.searchResults.innerHTML = `<div class="search-item"><span class="search-item-meta">No matches</span></div>`;
    return;
  }
  els.searchResults.hidden = false;
  els.searchResults.innerHTML = results
    .map(
      (c, i) => `
      <button type="button" class="search-item" data-id="${c.id}" data-idx="${i}">
        <span class="search-item-name">${escapeHtml(c.name)}</span>
        <span class="search-item-meta">${escapeHtml(c.region)} · ${escapeHtml(c.tz)}</span>
      </button>`
    )
    .join('');
  els.searchResults.querySelectorAll('.search-item').forEach((btn) => {
    btn.addEventListener('click', () => {
      selectCity(btn.dataset.id);
      // explicit pin from search
      pin(btn.dataset.id);
      els.searchInput.value = '';
      renderSearch('');
    });
  });
}

function highlightSearch(idx) {
  const items = [...els.searchResults.querySelectorAll('.search-item[data-id]')];
  items.forEach((el, i) => el.classList.toggle('active', i === idx));
  if (items[idx]) items[idx].scrollIntoView({ block: 'nearest' });
}

els.searchInput?.addEventListener('input', () => renderSearch(els.searchInput.value));
els.searchClear?.addEventListener('click', () => {
  els.searchInput.value = '';
  renderSearch('');
  els.searchInput.focus();
});
els.searchInput?.addEventListener('keydown', (e) => {
  const items = [...els.searchResults.querySelectorAll('.search-item[data-id]')];
  if (e.key === 'Escape') {
    els.searchInput.value = '';
    renderSearch('');
    e.preventDefault();
    return;
  }
  if (!items.length) return;
  if (e.key === 'ArrowDown') {
    searchActiveIndex = Math.min(items.length - 1, searchActiveIndex + 1);
    highlightSearch(searchActiveIndex);
    e.preventDefault();
  } else if (e.key === 'ArrowUp') {
    searchActiveIndex = Math.max(0, searchActiveIndex - 1);
    highlightSearch(searchActiveIndex);
    e.preventDefault();
  } else if (e.key === 'Enter') {
    const idx = searchActiveIndex >= 0 ? searchActiveIndex : 0;
    const id = items[idx]?.dataset.id;
    if (id) {
      pin(id);
      els.searchInput.value = '';
      renderSearch('');
    }
    e.preventDefault();
  }
});

// ——— Hover ———
function showHover(city, now = new Date()) {
  if (!city || !els.hoverCard) return;
  const info = describeCityTime(city, now, hour12(), globe?.getSunDir?.());
  const delta = relativeDelta(now, city.tz, localTz);
  els.hoverCity.textContent = `${city.name}, ${city.region}`;
  els.hoverTime.textContent = info.time;
  els.hoverMeta.textContent = `${info.day} · ${info.offset} · ${delta.label}${delta.dayNote ? ' · ' + delta.dayNote : ''}`;
  els.hoverCard.hidden = false;
}

function updateHoverCard(now) {
  if (hoverCity) showHover(hoverCity, now);
  else if (selectedId) {
    const city = getCityById(selectedId);
    if (city) showHover(city, now);
  }
}

function tickHeader(now) {
  if (els.localTime) {
    els.localTime.textContent = formatTime(now, localTz, { withSeconds: true, hour12: hour12() });
  }
  if (els.localZone) {
    const home = settings.homeCityId ? getCityById(settings.homeCityId) : null;
    els.localZone.textContent = home
      ? `${home.name} · ${localTz.replace(/_/g, ' ')}`
      : localTz.replace(/_/g, ' ');
  }
  if (els.utcNow) {
    const utc = formatTime(now, 'UTC', { withSeconds: true, hour12: hour12() });
    els.utcNow.textContent = `UTC ${utc}`;
  }
}

// ——— Zones select + bridge ———
function populateZoneSelect() {
  if (!els.eventZone) return;
  const seen = new Set();
  const options = [];
  for (const city of CITIES) {
    if (seen.has(city.tz)) continue;
    seen.add(city.tz);
    options.push({ tz: city.tz, label: `${city.name} — ${city.tz}` });
  }
  options.sort((a, b) => a.label.localeCompare(b.label));
  els.eventZone.innerHTML = options
    .map((o) => `<option value="${o.tz}">${escapeHtml(o.label)}</option>`)
    .join('');
  els.eventZone.value = 'Europe/London';
}

function populateHomeSelect() {
  if (!els.homeSelect) return;
  els.homeSelect.innerHTML =
    `<option value="">Auto (${escapeHtml(localTz)})</option>` +
    CITIES.map(
      (c) =>
        `<option value="${c.id}" ${settings.homeCityId === c.id ? 'selected' : ''}>${escapeHtml(c.name)} · ${escapeHtml(c.tz)}</option>`
    ).join('');
}

function updateBridge() {
  if (!els.eventDate || !els.eventTime || !els.eventZone) return;
  const dateStr = els.eventDate.value;
  const timeStr = els.eventTime.value;
  const fromTz = els.eventZone.value;
  const result = convertEventTime(dateStr, timeStr, fromTz, localTz);
  if (!result) {
    if (els.bridgeValue) els.bridgeValue.textContent = '—';
    if (els.bridgeDelta) els.bridgeDelta.textContent = '';
    if (els.bridgeTable) els.bridgeTable.innerHTML = '';
    return;
  }
  const localFmt = formatTime(result.instant, localTz, {
    withSeconds: false,
    withDate: true,
    hour12: hour12(),
  });
  els.bridgeValue.textContent = `${localFmt.time} · ${localFmt.day}`;
  const eventCity = CITIES.find((c) => c.tz === fromTz);
  const label = eventCity ? eventCity.name : fromTz;
  const srcFmt = formatTime(result.instant, fromTz, {
    withSeconds: false,
    withDate: true,
    hour12: hour12(),
  });
  els.bridgeDelta.textContent = `when it is ${srcFmt.time} in ${label}`;

  // Multi-city table for pinned zones
  const zones = pinnedIds
    .map((id) => getCityById(id))
    .filter(Boolean)
    .map((c) => ({ id: c.id, name: c.name, tz: c.tz }));
  // ensure local represented
  const multi = convertEventToZones(dateStr, timeStr, fromTz, zones, localTz, hour12());
  if (multi && els.bridgeTable) {
    els.bridgeTable.innerHTML = `
      <table class="bridge-table">
        <thead><tr><th>City</th><th>Time</th><th>vs you</th></tr></thead>
        <tbody>
          ${multi.rows
            .map(
              (r) => `<tr data-id="${r.id}">
                <td>${escapeHtml(r.name)}</td>
                <td>${escapeHtml(r.time)}<div class="muted">${escapeHtml(r.day)}</div></td>
                <td>${escapeHtml(r.deltaLabel)}${r.dayNote ? `<div class="muted">${escapeHtml(r.dayNote)}</div>` : ''}</td>
              </tr>`
            )
            .join('')}
        </tbody>
      </table>`;
    els.bridgeTable.querySelectorAll('tr[data-id]').forEach((tr) => {
      tr.addEventListener('click', () => selectCity(tr.dataset.id));
    });
  }
}

function renderChips() {
  if (!els.bridgeChips) return;
  const presets = quickEventPresets(new Date(), localTz);
  els.bridgeChips.innerHTML = presets
    .map(
      (p) =>
        `<button type="button" class="chip-btn" data-chip="${p.id}">${escapeHtml(p.label)}</button>`
    )
    .join('');
  els.bridgeChips.querySelectorAll('.chip-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const p = presets.find((x) => x.id === btn.dataset.chip);
      if (!p) return;
      els.eventDate.value = p.dateStr;
      els.eventTime.value = p.timeStr;
      if (p.fromTz) els.eventZone.value = p.fromTz;
      updateBridge();
    });
  });
}

els.eventTime?.addEventListener('input', updateBridge);
els.eventDate?.addEventListener('input', updateBridge);
els.eventZone?.addEventListener('change', updateBridge);

els.btnCopyBridge?.addEventListener('click', async () => {
  const dateStr = els.eventDate.value;
  const timeStr = els.eventTime.value;
  const fromTz = els.eventZone.value;
  const zones = pinnedIds
    .map((id) => getCityById(id))
    .filter(Boolean)
    .map((c) => ({ id: c.id, name: c.name, tz: c.tz }));
  const multi = convertEventToZones(dateStr, timeStr, fromTz, zones, localTz, hour12());
  if (!multi) return;
  const eventCity = CITIES.find((c) => c.tz === fromTz);
  const text = formatConversionCopy(
    `Event ${timeStr} ${dateStr}`,
    eventCity ? `${eventCity.name} (${fromTz})` : fromTz,
    multi.rows,
    { time: multi.local.time, day: multi.local.day }
  );
  try {
    await navigator.clipboard.writeText(text);
    els.btnCopyBridge.textContent = 'Copied!';
    setTimeout(() => {
      els.btnCopyBridge.textContent = 'Copy conversion';
    }, 1500);
  } catch {
    els.btnCopyBridge.textContent = 'Copy failed';
  }
});

// ——— Groups ———
function renderGroups() {
  if (!els.groupsBar) return;
  const groups = settings.favoriteGroups || {};
  const names = Object.keys(groups);
  els.groupsBar.innerHTML =
    `<button type="button" class="chip-btn ${!settings.activeGroup ? 'active' : ''}" data-group="">All pins</button>` +
    names
      .map(
        (g) =>
          `<button type="button" class="chip-btn ${settings.activeGroup === g ? 'active' : ''}" data-group="${escapeHtml(g)}">${escapeHtml(g)}</button>`
      )
      .join('') +
    `<button type="button" class="chip-btn" data-group="__apply">Apply group</button>`;
  els.groupsBar.querySelectorAll('.chip-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const g = btn.dataset.group;
      if (g === '__apply') {
        if (settings.activeGroup && groups[settings.activeGroup]) {
          pinnedIds = groups[settings.activeGroup].filter((id) => getCityById(id));
          persistPins();
          updateClockTimes(new Date());
          updateBridge();
        }
        return;
      }
      settings = updateSettings({ activeGroup: g || null });
      renderGroups();
      if (g && groups[g]) {
        // highlight only — don't replace until Apply
      }
    });
  });
}

// ——— Import / export ———
function wireImportExport() {
  document.getElementById('btnExportPins')?.addEventListener('click', () => {
    const payload = exportPinsPayload({ ...settings, pinnedIds });
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'apextimezones-pins.json';
    a.click();
    URL.revokeObjectURL(a.href);
  });
  document.getElementById('btnImportPins')?.addEventListener('click', () => {
    document.getElementById('importFile')?.click();
  });
  document.getElementById('importFile')?.addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const next = importPinsPayload(text, { ...settings, pinnedIds });
      settings = saveSettings(next);
      pinnedIds = loadPinnedIds(settings.pinnedIds);
      persistPins();
      updateClockTimes(new Date());
      populateHomeSelect();
      renderGroups();
      alert('Import successful');
    } catch (err) {
      alert('Import failed: ' + err.message);
    }
    e.target.value = '';
  });
}

// ——— Reminders ———
function scheduleRemindersToMain() {
  const list = (settings.reminders || []).map((r) => {
    if (r.fireAt) return r;
    try {
      const [y, mo, d] = r.dateStr.split('-').map(Number);
      const [hh, mm] = r.timeStr.split(':').map(Number);
      const instant = wallTimeToUtcDate(y, mo, d, hh, mm, r.tz || localTz);
      if (!instant) return r;
      const notifyMin = Number(r.notifyMinutes || 15);
      const fireAt = instant.getTime() - notifyMin * 60000;
      return { ...r, fireAt, body: `${r.title} in ~${notifyMin} min` };
    } catch {
      return r;
    }
  });
  settings = updateSettings({ reminders: list });
  apex?.setMainSettings?.({ reminders: list });
  renderReminders();
}

function renderReminders() {
  if (!els.reminderList) return;
  const list = settings.reminders || [];
  els.reminderList.innerHTML = list
    .map(
      (r) =>
        `<div class="reminder-row">
          <span>${escapeHtml(r.title)} · ${escapeHtml(r.dateStr)} ${escapeHtml(r.timeStr)} (${escapeHtml(r.tz || '')})</span>
          <button type="button" data-del="${r.id}" class="ghost-btn">✕</button>
        </div>`
    )
    .join('') || '<div class="muted">No saved events</div>';
  els.reminderList.querySelectorAll('[data-del]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const reminders = (settings.reminders || []).filter((r) => r.id !== btn.dataset.del);
      settings = updateSettings({ reminders });
      scheduleRemindersToMain();
    });
  });
}

els.btnSaveReminder?.addEventListener('click', () => {
  const title = els.reminderTitle?.value?.trim() || 'Event';
  const dateStr = els.eventDate.value;
  const timeStr = els.eventTime.value;
  const tz = els.eventZone.value;
  const notifyMinutes = Number(els.reminderNotify?.value || 15);
  const id = 'r_' + Date.now();
  const reminders = [
    ...(settings.reminders || []),
    { id, title, dateStr, timeStr, tz, notifyMinutes, fired: false },
  ];
  settings = updateSettings({ reminders });
  scheduleRemindersToMain();
  if (els.reminderTitle) els.reminderTitle.value = '';
});

// ——— Settings panel ———
function wireUpdates() {
  const banner = document.getElementById('updateBanner');
  const title = document.getElementById('updateTitle');
  const notes = document.getElementById('updateNotes');
  const progWrap = document.getElementById('updateProgressWrap');
  const progBar = document.getElementById('updateProgressBar');
  const progLabel = document.getElementById('updateProgressLabel');
  const btnNow = document.getElementById('btnUpdateNow');
  const btnLater = document.getElementById('btnUpdateLater');

  const showBanner = (info) => {
    if (!banner) return;
    if (title) {
      title.textContent = `Update available · v${info.latestVersion || ''}`;
    }
    if (notes) {
      notes.textContent =
        info.releaseNotes ||
        `You have v${info.currentVersion}. A newer build is ready to install.`;
    }
    banner.hidden = false;
  };

  apex?.onUpdateAvailable?.((info) => showBanner(info));
  apex?.onUpdateNotAvailable?.((info) => {
    if (banner) banner.hidden = true;
    alert(`You're up to date (v${info?.currentVersion || ''}).`);
  });
  apex?.onUpdateProgress?.((p) => {
    if (progWrap) progWrap.hidden = false;
    if (progBar) progBar.style.width = `${p.percent || 0}%`;
    if (progLabel) progLabel.textContent = `${p.percent || 0}% · ${p.status || ''}`;
    if (btnNow) {
      btnNow.disabled = true;
      btnNow.textContent = p.status === 'installing' ? 'Restarting…' : 'Downloading…';
    }
  });
  apex?.onUpdateError?.((err) => {
    if (btnNow) {
      btnNow.disabled = false;
      btnNow.textContent = 'Update now';
    }
    alert('Update failed: ' + (err?.message || 'unknown error'));
  });

  btnLater?.addEventListener('click', () => {
    if (banner) banner.hidden = true;
  });
  btnNow?.addEventListener('click', async () => {
    if (btnNow) {
      btnNow.disabled = true;
      btnNow.textContent = 'Downloading…';
    }
    if (progWrap) progWrap.hidden = false;
    try {
      await apex?.downloadUpdate?.();
    } catch (e) {
      alert('Update failed: ' + (e?.message || e));
      if (btnNow) {
        btnNow.disabled = false;
        btnNow.textContent = 'Update now';
      }
    }
  });

  document.getElementById('btnCheckUpdates')?.addEventListener('click', async () => {
    try {
      const r = await apex?.checkForUpdates?.();
      if (r?.available) showBanner(r);
      else if (r?.ok) alert(`You're up to date (v${r.currentVersion}).`);
      else alert('Could not check for updates' + (r?.reason ? `: ${r.reason}` : '.'));
    } catch (e) {
      alert('Update check failed: ' + (e?.message || e));
    }
  });
}

function wireApexForge() {
  const open = () => {
    if (apex?.openApexForge) apex.openApexForge();
    else apex?.openExternal?.('https://ame-apexforge.org/');
  };
  document.getElementById('btnApexForge')?.addEventListener('click', open);
  document.getElementById('btnApexForgeSettings')?.addEventListener('click', open);
}

function wireSettings() {
  const panel = els.settingsPanel;
  if (!panel) return;

  document.getElementById('btnSettings')?.addEventListener('click', () => {
    panel.hidden = !panel.hidden;
  });
  document.getElementById('btnCloseSettings')?.addEventListener('click', () => {
    panel.hidden = true;
  });

  const bindCheck = (id, key, apply) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.checked = !!settings[key];
    el.addEventListener('change', () => {
      settings = updateSettings({ [key]: el.checked });
      apply?.(el.checked);
    });
  };

  bindCheck('setHour12', 'hour12', () => {
    tick(new Date());
    updateBridge();
  });
  bindCheck('setAlwaysOnTop', 'alwaysOnTop', (v) => apex?.setAlwaysOnTop?.(v));
  bindCheck('setAutoRotate', 'autoRotate', (v) => globe?.setAutoRotate(v));
  bindCheck('setReducedMotion', 'reducedMotion', (v) => {
    document.body.classList.toggle('reduced-motion', v);
    if (v) globe?.setAutoRotate(false);
  });
  bindCheck('setShowGrid', 'showGrid', (v) => globe?.setShowGrid(v));
  bindCheck('setShowBands', 'showTzBands', (v) => globe?.setShowBands(v));
  bindCheck('setStartWindows', 'startWithWindows', (v) => apex?.setStartWithWindows?.(v));

  const quality = document.getElementById('setQuality');
  if (quality) {
    quality.value = settings.quality || 'high';
    quality.addEventListener('change', () => {
      settings = updateSettings({ quality: quality.value });
      globe?.setQuality(quality.value);
    });
  }

  document.getElementById('btnToggleWidget')?.addEventListener('click', () => {
    setWidgetMode(!widgetMode);
  });

  els.homeSelect?.addEventListener('change', () => {
    const id = els.homeSelect.value || null;
    settings = updateSettings({ homeCityId: id });
    globe?.setHomeCity(id);
    tickHeader(new Date());
  });
}

function setWidgetMode(on) {
  widgetMode = !!on;
  settings = updateSettings({ widgetMode });
  document.body.classList.toggle('widget-mode', widgetMode);
  els.app?.classList.toggle('widget-mode', widgetMode);
  requestAnimationFrame(() => {
    globe?.resize();
    if (!on && selectedId) {
      const c = getCityById(selectedId);
      if (c) globe?.flyTo(c.lat, c.lng, 0.8);
    }
  });
}

// ——— Onboarding ———
function maybeOnboard() {
  if (settings.onboardingDone || isWidgetQuery) {
    els.onboarding && (els.onboarding.hidden = true);
    return;
  }
  if (!els.onboarding) return;
  els.onboarding.hidden = false;
  const home = document.getElementById('onboardHome');
  if (home) {
    home.innerHTML = CITIES.map(
      (c) => `<option value="${c.id}">${escapeHtml(c.name)} (${escapeHtml(c.region)})</option>`
    ).join('');
  }
  document.getElementById('onboardFinish')?.addEventListener('click', () => {
    const homeId = home?.value || null;
    const picks = [...document.querySelectorAll('#onboardPins input:checked')].map((i) => i.value);
    if (homeId) settings = updateSettings({ homeCityId: homeId });
    if (picks.length) {
      pinnedIds = picks.filter((id) => getCityById(id));
      persistPins();
    }
    settings = updateSettings({ onboardingDone: true });
    els.onboarding.hidden = true;
    globe?.setHomeCity(settings.homeCityId);
    populateHomeSelect();
    updateClockTimes(new Date());
  });
  document.getElementById('onboardSkip')?.addEventListener('click', () => {
    settings = updateSettings({ onboardingDone: true });
    els.onboarding.hidden = true;
  });
}

// ——— Tray sync ———
function syncTrayTimes() {
  const now = new Date();
  const ids = (settings.trayCityIds && settings.trayCityIds.length
    ? settings.trayCityIds
    : pinnedIds
  ).slice(0, 5);
  const payload = ids
    .map((id) => getCityById(id))
    .filter(Boolean)
    .map((c) => ({
      id: c.id,
      name: c.name,
      time: formatTime(now, c.tz, { withSeconds: false, hour12: hour12() }),
    }));
  apex?.setTrayTimes?.(payload);
}

// ——— Maximize icon ———
function setMaxIcon(maximized) {
  if (els.btnMax) els.btnMax.textContent = maximized ? '❐' : '□';
}

// ——— Master tick ———
function tick() {
  const now = new Date();
  tickHeader(now);
  updateClockTimes(now);
  updateHoverCard(now);
  globe?.updateClocks(now);
  sportsUi?.tick?.();
  syncTrayTimes();
}

// ——— Boot ———
async function boot() {
  document.body.classList.toggle('reduced-motion', !!settings.reducedMotion);
  if (widgetMode) setWidgetMode(true);

  if (els.eventDate) els.eventDate.value = todayISOInZone(localTz);
  populateZoneSelect();
  populateHomeSelect();
  renderChips();
  renderGroups();
  wireImportExport();
  wireSettings();
  wireUpdates();
  wireApexForge();
  sportsUi = createSportsUI({
    hour12,
    getGlobe: () => globe,
    setBridge: ({ dateStr, timeStr, fromTz }) => {
      if (els.eventDate && dateStr) els.eventDate.value = dateStr;
      if (els.eventTime && timeStr) els.eventTime.value = timeStr;
      if (els.eventZone && fromTz) els.eventZone.value = fromTz;
      updateBridge();
    },
    registerGlobeHandlers: (h) => {
      pendingGlobeHandlers = h;
    },
  });
  maybeOnboard();
  scheduleRemindersToMain();
  updateClockTimes(new Date());
  updateBridge();
  updatePinButton();

  // Sync main settings
  try {
    const mainS = await apex?.getMainSettings?.();
    if (mainS) {
      if (typeof mainS.alwaysOnTop === 'boolean') {
        settings = updateSettings({ alwaysOnTop: mainS.alwaysOnTop });
        const el = document.getElementById('setAlwaysOnTop');
        if (el) el.checked = mainS.alwaysOnTop;
      }
      if (typeof mainS.startWithWindows === 'boolean') {
        const el = document.getElementById('setStartWindows');
        if (el) el.checked = mainS.startWithWindows;
      }
    }
  } catch {
    /* ignore */
  }

  apex?.onWindowState?.((state) => {
    if (state && typeof state.maximized === 'boolean') setMaxIcon(state.maximized);
  });
  apex?.isMaximized?.().then((m) => setMaxIcon(!!m));

  apex?.onVisibility?.((visible) => {
    globe?.setPaused(!visible);
  });
  apex?.onToggleWidget?.(() => setWidgetMode(!widgetMode));

  document.addEventListener('visibilitychange', () => {
    globe?.setPaused(document.hidden);
  });

  if (!widgetMode) {
    globe = new ApexGlobe(els.canvas, {
      onReady: () => {
        els.loadingOverlay?.classList.add('fade-out');
        setTimeout(() => {
          if (els.loadingOverlay) els.loadingOverlay.style.display = 'none';
        }, 500);
        globe.setAutoRotate(settings.autoRotate && !settings.reducedMotion);
        globe.setShowGrid(settings.showGrid !== false);
        globe.setShowBands(!!settings.showTzBands);
        globe.setQuality(settings.quality || 'high');
        globe.setHomeCity(settings.homeCityId);
      },
      onHover: (city) => {
        hoverCity = city;
        if (city) showHover(city);
        else if (selectedId) showHover(getCityById(selectedId));
        else if (els.hoverCard) els.hoverCard.hidden = true;
      },
      onPinClick: (city) => {
        selectedId = city.id;
        updateClockTimes(new Date());
        updatePinButton();
        if (els.eventZone) els.eventZone.value = city.tz;
        updateBridge();
      },
      onSelect: (id) => {
        selectedId = id;
        updateClockTimes(new Date());
        updatePinButton();
      },
      onEventClick: (ev) => pendingGlobeHandlers?.onEventClick?.(ev),
      onEventHover: (ev) => {
        if (!ev || !els.hoverCard) return;
        els.hoverCity.textContent = ev.name;
        els.hoverTime.textContent = 'Sports event';
        els.hoverMeta.textContent = `${ev.city || ''} · click for schedule`;
        els.hoverCard.hidden = false;
      },
    });
    globe.setPinned(pinnedIds);
    await globe.init();
    globe.resize();
    if (settings.homeCityId) {
      const c = getCityById(settings.homeCityId);
      if (c) globe.flyTo(c.lat, c.lng, 1.4);
    } else if (globe.localCityId) {
      const c = getCityById(globe.localCityId);
      if (c) globe.flyTo(c.lat, c.lng, 1.4);
    }
  } else {
    if (els.loadingOverlay) els.loadingOverlay.style.display = 'none';
  }

  tick();
  setInterval(tick, 1000);
  // Refresh bridge every 30s for day rollover
  setInterval(updateBridge, 30000);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

boot().catch((err) => {
  console.error(err);
  showLoadError('ORBITAL LINK FAILED — ' + (err?.message || 'SEE LOGS'));
});
