/**
 * Versioned settings schema shared by renderer (localStorage).
 * Main process mirrors a subset via IPC for bounds / AOT / hotkey / startup.
 */

export const SETTINGS_KEY = 'apex-settings-v1';
export const SETTINGS_VERSION = 1;

/** Default pin groups — sports & world clocks only (no finance/crypto). */
export const DEFAULT_FAVORITE_GROUPS = {
  Sports: ['lon', 'mad', 'tyo', 'syd', 'nyc', 'rio', 'mel', 'dxb'],
  Americas: ['nyc', 'mia', 'mex', 'sao', 'tor', 'chi'],
  'Asia & Pacific': ['tyo', 'sgp', 'syd', 'hkg', 'dps', 'sel'],
};

export const DEFAULT_SETTINGS = {
  version: SETTINGS_VERSION,
  hour12: false,
  alwaysOnTop: false,
  autoRotate: true,
  reducedMotion: false,
  showGrid: true,
  showTzBands: false,
  quality: 'high', // high | medium | low
  pinDensity: 'auto', // auto | pinned | all
  homeCityId: null,
  pinnedIds: null, // null → use DEFAULT_PINS from cities
  favoriteGroups: { ...DEFAULT_FAVORITE_GROUPS },
  activeGroup: null,
  bounds: null,
  hotkey: 'CommandOrControl+Alt+T',
  startWithWindows: false,
  widgetMode: false,
  onboardingDone: false,
  reminders: [],
  trayCityIds: null,
  followedSeriesIds: [],
};

export function loadSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) {
      return {
        ...DEFAULT_SETTINGS,
        favoriteGroups: { ...DEFAULT_FAVORITE_GROUPS },
      };
    }
    const parsed = JSON.parse(raw);
    return migrateSettings(parsed);
  } catch {
    return {
      ...DEFAULT_SETTINGS,
      favoriteGroups: { ...DEFAULT_FAVORITE_GROUPS },
    };
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

const LEGACY_GROUP_NAMES = new Set(['finance', 'crypto']);

export function migrateSettings(parsed) {
  const base = {
    ...DEFAULT_SETTINGS,
    favoriteGroups: { ...DEFAULT_FAVORITE_GROUPS },
    ...(parsed && typeof parsed === 'object' ? parsed : {}),
  };

  // Drop finance/crypto pin groups from older installs
  let groups =
    base.favoriteGroups && typeof base.favoriteGroups === 'object'
      ? { ...base.favoriteGroups }
      : { ...DEFAULT_FAVORITE_GROUPS };
  for (const key of Object.keys(groups)) {
    if (LEGACY_GROUP_NAMES.has(String(key).toLowerCase())) {
      delete groups[key];
    }
  }
  if (!Object.keys(groups).length) {
    groups = { ...DEFAULT_FAVORITE_GROUPS };
  }
  base.favoriteGroups = groups;

  if (base.activeGroup && LEGACY_GROUP_NAMES.has(String(base.activeGroup).toLowerCase())) {
    base.activeGroup = null;
  }

  if (!Array.isArray(base.reminders)) base.reminders = [];
  if (!Array.isArray(base.followedSeriesIds)) base.followedSeriesIds = [];
  base.version = SETTINGS_VERSION;
  return base;
}

/** Backup pins + groups as a portable file (internal format — not shown as "JSON" in UI). */
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
    throw new Error('That file is not an ApexTimeZones city backup.');
  }
  // Strip legacy groups on restore too
  let groups =
    data.favoriteGroups && typeof data.favoriteGroups === 'object'
      ? { ...data.favoriteGroups }
      : currentSettings.favoriteGroups;
  for (const key of Object.keys(groups || {})) {
    if (LEGACY_GROUP_NAMES.has(String(key).toLowerCase())) delete groups[key];
  }
  return {
    ...currentSettings,
    homeCityId: data.homeCityId ?? currentSettings.homeCityId,
    pinnedIds: Array.isArray(data.pinnedIds) ? data.pinnedIds : currentSettings.pinnedIds,
    favoriteGroups: groups && Object.keys(groups).length ? groups : currentSettings.favoriteGroups,
  };
}
