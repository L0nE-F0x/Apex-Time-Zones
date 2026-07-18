/**
 * Pure time helpers — no DOM. Used by UI and unit tests.
 */

/** Format wall clock in a timezone */
export function formatTime(date, timeZone, opts = {}) {
  const { hour12 = false, withSeconds = true, withDate = false } = opts;
  try {
    const time = new Intl.DateTimeFormat(undefined, {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: withSeconds ? '2-digit' : undefined,
      hour12,
    }).format(date);

    if (!withDate) return time;

    const day = new Intl.DateTimeFormat(undefined, {
      timeZone,
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    }).format(date);

    return { time, day };
  } catch {
    return withDate ? { time: '—', day: '—' } : '—';
  }
}

export function getOffsetLabel(date, timeZone) {
  try {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone,
      timeZoneName: 'shortOffset',
    }).formatToParts(date);
    return parts.find((p) => p.type === 'timeZoneName')?.value || '';
  } catch {
    return '';
  }
}

export function getLocalTimeZone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export function getLocalHour(date, timeZone) {
  try {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone,
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    }).formatToParts(date);
    let h = Number(parts.find((p) => p.type === 'hour')?.value || 0);
    const m = Number(parts.find((p) => p.type === 'minute')?.value || 0);
    if (h === 24) h = 0;
    return h + m / 60;
  } catch {
    return 12;
  }
}

/** Clock-heuristic day/night (fallback). Prefer isDaytimeSolar when sun dir known. */
export function isDaytimeClock(date, timeZone) {
  const hour = getLocalHour(date, timeZone);
  return hour >= 6 && hour < 18.5;
}

/**
 * Day/night from solar direction (same model as globe terminator).
 * lat/lng in degrees; sunDir is unit vector in earth-centered coords matching latLngToVector3.
 */
export function isDaytimeSolar(lat, lng, sunDir) {
  if (!sunDir) return true;
  const n = latLngToVector3(lat, lng, 1);
  const ndot =
    n.x * sunDir.x + n.y * sunDir.y + n.z * sunDir.z;
  return ndot > -0.05;
}

export function approxSunDirection(now = new Date()) {
  const utcHours =
    now.getUTCHours() + now.getUTCMinutes() / 60 + now.getUTCSeconds() / 3600;
  const sunLng = 180 - utcHours * 15;
  const sunLat = approxSunDeclination(now);
  const p = latLngToVector3(sunLat, sunLng, 1);
  const len = Math.hypot(p.x, p.y, p.z) || 1;
  return { x: p.x / len, y: p.y / len, z: p.z / len };
}

export function approxSunDeclination(now) {
  const start = Date.UTC(now.getUTCFullYear(), 0, 0);
  const day = (now.getTime() - start) / 86400000;
  return -23.44 * Math.cos(((2 * Math.PI) / 365) * (day + 10));
}

export function latLngToVector3(lat, lng, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return { x, y, z };
}

/**
 * Offset minutes of timeZone relative to UTC at `date` (accounts for DST).
 */
export function getOffsetMinutes(date, timeZone) {
  try {
    const dtf = new Intl.DateTimeFormat('en-US', {
      timeZone,
      timeZoneName: 'longOffset',
    });
    const parts = dtf.formatToParts(date);
    const name = parts.find((p) => p.type === 'timeZoneName')?.value || 'GMT';
    // GMT, GMT+5, GMT-05:30, UTC+1, etc.
    const m = name.match(/([+-])(\d{1,2})(?::(\d{2}))?/);
    if (!m) return 0;
    const sign = m[1] === '-' ? -1 : 1;
    const hh = Number(m[2]);
    const mm = Number(m[3] || 0);
    return sign * (hh * 60 + mm);
  } catch {
    return 0;
  }
}

/**
 * Human delta of targetTz vs localTz at the same instant.
 * Returns { minutes, label, dayNote }
 */
export function relativeDelta(date, targetTz, localTz) {
  const tMin = getOffsetMinutes(date, targetTz);
  const lMin = getOffsetMinutes(date, localTz);
  const minutes = tMin - lMin;
  const abs = Math.abs(minutes);
  const h = Math.floor(abs / 60);
  const m = abs % 60;
  let label;
  if (minutes === 0) label = 'same as local';
  else if (minutes > 0) {
    label = m ? `${h}h ${m}m ahead` : `${h}h ahead`;
  } else {
    label = m ? `${h}h ${m}m behind` : `${h}h behind`;
  }

  // Calendar day difference in wall dates
  const dayTarget = new Intl.DateTimeFormat('en-CA', {
    timeZone: targetTz,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
  const dayLocal = new Intl.DateTimeFormat('en-CA', {
    timeZone: localTz,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
  let dayNote = '';
  if (dayTarget > dayLocal) dayNote = 'next calendar day there';
  else if (dayTarget < dayLocal) dayNote = 'previous calendar day there';

  return { minutes, label, dayNote, dayTarget, dayLocal };
}

/**
 * Convert wall-clock time in fromTz on dateStr (YYYY-MM-DD) + timeStr (HH:MM)
 * into an absolute Date, then format for toTz.
 */
export function convertEventTime(dateStr, timeStr, fromTz, toTz) {
  if (!dateStr || !timeStr || !fromTz || !toTz) return null;

  const [hh, mm] = timeStr.split(':').map(Number);
  const [y, mo, d] = dateStr.split('-').map(Number);
  if ([hh, mm, y, mo, d].some((n) => Number.isNaN(n))) return null;

  const best = wallTimeToUtcDate(y, mo, d, hh, mm, fromTz);
  if (!best) return null;

  const local = formatTime(best, toTz, { withSeconds: false, withDate: true, hour12: true });
  const source = formatTime(best, fromTz, { withSeconds: false, withDate: true, hour12: true });
  const local24 = formatTime(best, toTz, { withSeconds: false, withDate: true, hour12: false });
  return { instant: best, local, source, local24 };
}

/**
 * Binary search UTC instant that maps to wall y-mo-d hh:mm in timeZone.
 * Handles DST by searching a ±1 day window.
 */
export function wallTimeToUtcDate(y, mo, d, hh, mm, timeZone) {
  let lo = Date.UTC(y, mo - 1, d - 1, 0, 0, 0);
  let hi = Date.UTC(y, mo - 1, d + 2, 0, 0, 0);
  let best = null;
  let exact = false;

  for (let i = 0; i < 48; i++) {
    const mid = Math.floor((lo + hi) / 2);
    const probe = new Date(mid);
    const wall = readWallParts(probe, timeZone);
    if (!wall) break;

    const wallKey =
      wall.year * 1e8 +
      wall.month * 1e6 +
      wall.day * 1e4 +
      wall.hour * 100 +
      wall.minute;
    const target = y * 1e8 + mo * 1e6 + d * 1e4 + hh * 100 + mm;

    if (wallKey === target) {
      best = probe;
      exact = true;
      // refine to second 0
      hi = mid;
      lo = mid - 60 * 1000;
      if (i > 10 && exact) break;
      continue;
    }
    if (wallKey < target) lo = mid + 1;
    else hi = mid - 1;
    best = probe;
  }

  // Normalize to the top of the minute; timezone offsets are minute-granular
  // so this cannot change the wall minute.
  if (best) best = new Date(Math.floor(best.getTime() / 60000) * 60000);

  // Verify final
  if (best) {
    const w = readWallParts(best, timeZone);
    if (
      w &&
      w.year === y &&
      w.month === mo &&
      w.day === d &&
      w.hour === hh &&
      w.minute === mm
    ) {
      return best;
    }
    // Fallback: linear scan nearest minute in window
    const start = Date.UTC(y, mo - 1, d - 1, 0, 0, 0);
    for (let t = start; t < start + 3 * 86400000; t += 60000) {
      const probe = new Date(t);
      const w2 = readWallParts(probe, timeZone);
      if (
        w2 &&
        w2.year === y &&
        w2.month === mo &&
        w2.day === d &&
        w2.hour === hh &&
        w2.minute === mm
      ) {
        return probe;
      }
    }
  }
  return exact ? best : best;
}

function readWallParts(date, timeZone) {
  try {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).formatToParts(date);
    const get = (t) => Number(parts.find((p) => p.type === t)?.value);
    let hour = get('hour');
    if (hour === 24) hour = 0;
    return {
      year: get('year'),
      month: get('month'),
      day: get('day'),
      hour,
      minute: get('minute'),
    };
  } catch {
    return null;
  }
}

/**
 * Convert one event to many timezones.
 * cities: [{ id, name, tz }, ...]
 */
export function convertEventToZones(dateStr, timeStr, fromTz, zones, localTz, hour12 = false) {
  const base = convertEventTime(dateStr, timeStr, fromTz, localTz);
  if (!base) return null;

  const rows = zones.map((z) => {
    const fmt = formatTime(base.instant, z.tz, {
      withSeconds: false,
      withDate: true,
      hour12,
    });
    const delta = relativeDelta(base.instant, z.tz, localTz);
    const offset = getOffsetLabel(base.instant, z.tz);
    return {
      id: z.id,
      name: z.name,
      tz: z.tz,
      time: fmt.time,
      day: fmt.day,
      offset,
      deltaLabel: delta.label,
      dayNote: delta.dayNote,
      minutes: delta.minutes,
    };
  });

  return { instant: base.instant, local: base.local, source: base.source, rows };
}

/** Human-readable clipboard string */
export function formatConversionCopy(eventLabel, sourceCity, rows, localRow) {
  const lines = [
    eventLabel || 'Event time conversion',
    sourceCity ? `Source: ${sourceCity}` : '',
    localRow ? `Your local: ${localRow.time} · ${localRow.day}` : '',
    '',
    ...rows.map(
      (r) =>
        `${r.name}: ${r.time} (${r.day}) · ${r.deltaLabel}${r.dayNote ? ` · ${r.dayNote}` : ''}`
    ),
  ].filter(Boolean);
  return lines.join('\n');
}

/**
 * Quick time chips for the Convert tab (sports & everyday — not markets).
 * Returns { dateStr, timeStr, fromTz?, label }. fromTz optional — often leave as current event zone
 */
export function quickEventPresets(now = new Date(), localTz = getLocalTimeZone()) {
  const pad = (n) => String(n).padStart(2, '0');
  const localParts = readWallParts(now, localTz);
  const dateStr = `${localParts.year}-${pad(localParts.month)}-${pad(localParts.day)}`;

  // +2 hours local
  const in2 = new Date(now.getTime() + 2 * 3600000);
  const p2 = readWallParts(in2, localTz);
  const in2Date = `${p2.year}-${pad(p2.month)}-${pad(p2.day)}`;
  const in2Time = `${pad(p2.hour)}:${pad(p2.minute)}`;

  // Tonight 20:00 local (common primetime)
  const tonightTime = '20:00';
  const tonightDate = dateStr;

  // Weekend-ish: next Saturday noon local
  const localDow = new Date(
    Date.UTC(localParts.year, localParts.month - 1, localParts.day, 12)
  );
  // Use wall day-of-week via Intl
  const dowName = new Intl.DateTimeFormat('en-US', { timeZone: localTz, weekday: 'short' }).format(now);
  const dowMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  const dow = dowMap[dowName] ?? 0;
  const daysUntilSat = (6 - dow + 7) % 7 || 7; // next Saturday (not today if Saturday → +7 for a true "next")
  const sat = new Date(now.getTime() + daysUntilSat * 86400000);
  const satParts = readWallParts(sat, localTz);
  const satDate = `${satParts.year}-${pad(satParts.month)}-${pad(satParts.day)}`;

  // Sports-friendly venue shortcuts (kickoff / race windows people actually convert)
  const nyDate = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);

  const lonDate = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/London',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);

  return [
    { id: 'in2h', label: 'In 2 hours', dateStr: in2Date, timeStr: in2Time, fromTz: localTz },
    { id: 'tonight', label: 'Tonight 8pm', dateStr: tonightDate, timeStr: tonightTime, fromTz: localTz },
    { id: 'satnoon', label: 'Sat noon (you)', dateStr: satDate, timeStr: '12:00', fromTz: localTz },
    { id: 'lonko', label: 'London 3pm kickoff', dateStr: lonDate, timeStr: '15:00', fromTz: 'Europe/London' },
    { id: 'nyprime', label: 'NY 8pm primetime', dateStr: nyDate, timeStr: '20:00', fromTz: 'America/New_York' },
  ];
}

/**
 * Ranked city search
 */
export function searchCities(cities, query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const scored = [];
  for (const c of cities) {
    const name = c.name.toLowerCase();
    const region = (c.region || '').toLowerCase();
    const tz = c.tz.toLowerCase();
    const tags = (c.tags || []).map((t) => t.toLowerCase());
    let score = 0;
    if (name === q) score = 100;
    else if (name.startsWith(q)) score = 80;
    else if (name.includes(q)) score = 50;
    if (tags.some((t) => t === q)) score = Math.max(score, 70);
    else if (tags.some((t) => t.startsWith(q) || t.includes(q))) score = Math.max(score, 40);
    if (tz.includes(q)) score = Math.max(score, 45);
    if (region.startsWith(q) || region.includes(q)) score = Math.max(score, 30);
    // multi-word
    const words = q.split(/\s+/);
    if (words.length > 1 && words.every((w) => (name + ' ' + region + ' ' + tags.join(' ')).includes(w))) {
      score = Math.max(score, 55);
    }
    if (score > 0) scored.push({ city: c, score });
  }
  scored.sort((a, b) => b.score - a.score || a.city.name.localeCompare(b.city.name));
  return scored.slice(0, 12).map((s) => s.city);
}

/** YYYY-MM-DD in local wall for a timezone */
export function todayISOInZone(timeZone = getLocalTimeZone(), now = new Date()) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);
}
