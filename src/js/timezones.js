/**
 * Facade: cities + time math for app/globe imports.
 */
export { CITIES, DEFAULT_PINS, getCityById, getValidPinnedIds } from './cities.js';
export {
  formatTime,
  getOffsetLabel,
  getLocalTimeZone,
  getLocalHour,
  isDaytimeClock,
  isDaytimeSolar,
  approxSunDirection,
  approxSunDeclination,
  latLngToVector3,
  getOffsetMinutes,
  relativeDelta,
  convertEventTime,
  wallTimeToUtcDate,
  convertEventToZones,
  formatConversionCopy,
  quickEventPresets,
  searchCities as searchCitiesRanked,
  todayISOInZone,
} from './timeMath.js';

import { CITIES, DEFAULT_PINS, getCityById, getValidPinnedIds } from './cities.js';
import { searchCities as ranked, formatTime, getOffsetLabel, isDaytimeClock, isDaytimeSolar, approxSunDirection } from './timeMath.js';

const PINS_LEGACY_KEY = 'apex-timezones-pins';

export function searchCities(query) {
  return ranked(CITIES, query);
}

export function loadPinnedIds(settingsPinned) {
  if (Array.isArray(settingsPinned) && settingsPinned.length) {
    return getValidPinnedIds(settingsPinned);
  }
  try {
    const raw = localStorage.getItem(PINS_LEGACY_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length) return getValidPinnedIds(parsed);
    }
  } catch {
    /* ignore */
  }
  return [...DEFAULT_PINS];
}

export function savePinnedIds(ids) {
  localStorage.setItem(PINS_LEGACY_KEY, JSON.stringify(ids));
}

export function describeCityTime(city, now = new Date(), hour12 = false, sunDir = null) {
  const { time, day } = formatTime(now, city.tz, {
    withSeconds: true,
    withDate: true,
    hour12,
  });
  const offset = getOffsetLabel(now, city.tz);
  const isDay = sunDir
    ? isDaytimeSolar(city.lat, city.lng, sunDir)
    : isDaytimeClock(now, city.tz);
  return { time, day, offset, isDay };
}
