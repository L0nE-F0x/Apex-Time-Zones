/**
 * Versioned settings schema shared by renderer (localStorage).
 * Main process mirrors a subset via IPC for bounds / AOT / hotkey / startup.
 */

export const SETTINGS_KEY = 'apex-settings-v1';
export const SETTINGS_VERSION = 1;

export const DEFAULT_SETTINGS = {
  version: SETTINGS_VERSION,
  hour12: false,
  alwaysOnTop: false,
  autoRotate: true,
  reducedMotion: false,
  showGrid: true,
  showTzBands: false,
  quality: 'high', // high | medium | low
  homeCityId: null,
  pinnedIds: null, // null → use DEFAULT_PINS from cities
  favoriteGroups: {
    Finance: ['nyc', 'lon', 'tyo', 'hkg', 'sgp', 'zur', 'chi'],
    Sports: ['lon', 'mad', 'tyo', 'syd', 'nyc', 'rio'],
    Crypto: ['syd', 'tyo', 'sgp', 'lon', 'nyc'],
  },
  activeGroup: null,
  bounds: null, // { x, y, width, height }
  hotkey: 'CommandOrControl+Alt+T',
  startWithWindows: false,
  widgetMode: false,
  onboardingDone: false,
  reminders: [], // { id, title, dateStr, timeStr, tz, notifyMinutes, fired }
  trayCityIds: null, // null → first 4 pins
};

export function loadSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return { ...DEFAULT_SETTINGS, favoriteGroups: { ...DEFAULT_SETTINGS.favoriteGroups } };
    const parsed = JSON.parse(raw);
    return migrateSettings(parsed);
  } catch {
    return { ...DEFAULT_SETTINGS, favoriteGroups: { ...DEFAULT_SETTINGS.favoriteGroups } };
  }
}

export function saveSettings(settings) {
  const next = { ...settings, version: SETTINGS_VERSION };
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(next));
  return next;
}

export function updateSettings(partial) {
  const cur = loadSettings();
  return saveSettings({ ...cur, ...partial });
}

export function migrateSettings(parsed) {
  const base = {
    ...DEFAULT_SETTINGS,
    favoriteGroups: { ...DEFAULT_SETTINGS.favoriteGroups },
    ...(parsed && typeof parsed === 'object' ? parsed : {}),
  };
  if (!base.favoriteGroups || typeof base.favoriteGroups !== 'object') {
    base.favoriteGroups = { ...DEFAULT_SETTINGS.favoriteGroups };
  }
  if (!Array.isArray(base.reminders)) base.reminders = [];
  base.version = SETTINGS_VERSION;
  return base;
}

/** Export pins + groups as portable JSON */
export function exportPinsPayload(settings) {
  return {
    type: 'apex-timezones-export',
    version: 1,
    exportedAt: new Date().toISOString(),
    homeCityId: settings.homeCityId,
    pinnedIds: settings.pinnedIds,
    favoriteGroups: settings.favoriteGroups,
  };
}

export function importPinsPayload(json, currentSettings) {
  let data = json;
  if (typeof json === 'string') data = JSON.parse(json);
  if (!data || data.type !== 'apex-timezones-export') {
    throw new Error('Invalid ApexTimeZones export file');
  }
  return {
    ...currentSettings,
    homeCityId: data.homeCityId ?? currentSettings.homeCityId,
    pinnedIds: Array.isArray(data.pinnedIds) ? data.pinnedIds : currentSettings.pinnedIds,
    favoriteGroups:
      data.favoriteGroups && typeof data.favoriteGroups === 'object'
        ? data.favoriteGroups
        : currentSettings.favoriteGroups,
  };
}
