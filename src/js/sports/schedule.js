/**
 * Pure helpers for sports schedules — dual zone times & countdowns.
 * Supports fixed sessions and waiting-period 'window' sessions (surfing,
 * stage races): a window counts down to first call on its start date and is
 * "live" for the whole period.
 */
import { wallTimeToUtcDate, formatTime, relativeDelta } from '../timeMath.js';

export function isWindowSession(session) {
  return session?.type === 'window';
}

// Wall-time → instant is deterministic, and wallTimeToUtcDate is Intl-heavy;
// memoize so cross-series scans (Up Next, tray) stay cheap.
const instantCache = new Map();

function cachedWallInstant(dateStr, timeStr, venueTz) {
  const key = `${venueTz}|${dateStr}|${timeStr}`;
  if (instantCache.has(key)) return instantCache.get(key);
  const [y, mo, d] = dateStr.split('-').map(Number);
  const [hh, mm] = timeStr.split(':').map(Number);
  const instant = wallTimeToUtcDate(y, mo, d, hh, mm, venueTz);
  instantCache.set(key, instant);
  return instant;
}

export function sessionToInstant(session, venueTz) {
  if (!session || !venueTz) return null;
  if (isWindowSession(session)) {
    if (!session.startDate) return null;
    return cachedWallInstant(session.startDate, session.firstCallTime || '08:00', venueTz);
  }
  if (!session.date || !session.time) return null;
  return cachedWallInstant(session.date, session.time, venueTz);
}

/** End instant of a window session (end of its last day at venue). */
export function windowEndInstant(session, venueTz) {
  if (!isWindowSession(session) || !session.endDate) return null;
  return cachedWallInstant(session.endDate, '23:59', venueTz);
}

function formatWindowLabel(session) {
  const fmt = (iso) => {
    const [y, mo, d] = iso.split('-').map(Number);
    const dt = new Date(Date.UTC(y, mo - 1, d, 12));
    return dt.toLocaleDateString(undefined, { month: 'short', day: 'numeric', timeZone: 'UTC' });
  };
  return `${fmt(session.startDate)} – ${fmt(session.endDate)}`;
}

/** Prefer explicit catalog status when present. */
export function resolveStatus(session, { ms, isWindow, windowEnd, now }) {
  const explicit = (session?.status || '').toLowerCase();
  if (explicit === 'final') return 'finished';
  if (explicit === 'live') return 'live-or-recent';
  if (explicit === 'delayed') return 'delayed';
  // 'scheduled' or missing → clock inference
  if (isWindow) {
    if (windowEnd && now.getTime() > windowEnd.getTime()) return 'finished';
    if (ms < 0) return 'live-or-recent';
    return 'upcoming';
  }
  if (ms < -3 * 3600000) return 'finished';
  if (ms < 0) return 'live-or-recent';
  return 'upcoming';
}

export function statusLabel(status) {
  switch (status) {
    case 'finished': return 'Final';
    case 'live-or-recent': return 'Live';
    case 'delayed': return 'Delayed';
    case 'upcoming': return 'Scheduled';
    default: return status || '—';
  }
}

export function annotateSession(session, venueTz, localTz, hour12 = false, now = new Date()) {
  const instant = sessionToInstant(session, venueTz);
  if (!instant) {
    return { ...session, instant: null, venueTime: '—', localTime: '—', countdown: null, status: 'unknown' };
  }

  if (isWindowSession(session)) {
    const end = windowEndInstant(session, venueTz);
    const ms = instant.getTime() - now.getTime();
    const status = resolveStatus(session, { ms, isWindow: true, windowEnd: end, now });
    const localFmt = formatTime(instant, localTz, { withSeconds: false, withDate: true, hour12 });
    const delta = relativeDelta(instant, venueTz, localTz);
    let countdown = formatCountdown(ms);
    if (status === 'live-or-recent') countdown = 'window open';
    if (status === 'finished') countdown = 'done';
    if (status === 'delayed') countdown = 'delayed';
    return {
      ...session,
      instant,
      windowEnd: end,
      isWindow: true,
      venueTime: `${formatWindowLabel(session)} · first call ${session.firstCallTime || '—'}`,
      venueDay: 'waiting period',
      localTime: localFmt.time,
      localDay: localFmt.day,
      countdown,
      msUntil: ms,
      status,
      statusLabel: statusLabel(status),
      deltaLabel: delta.label,
    };
  }

  const venueFmt = formatTime(instant, venueTz, { withSeconds: false, withDate: true, hour12 });
  const localFmt = formatTime(instant, localTz, { withSeconds: false, withDate: true, hour12 });
  const ms = instant.getTime() - now.getTime();
  const status = resolveStatus(session, { ms, isWindow: false, windowEnd: null, now });
  let countdown = formatCountdown(ms);
  if (status === 'finished') countdown = 'final';
  if (status === 'delayed') countdown = 'delayed';
  if (status === 'live-or-recent' && ms < 0) countdown = formatCountdown(ms); // "Xm ago" while live
  const delta = relativeDelta(instant, venueTz, localTz);
  return {
    ...session,
    instant,
    venueTime: venueFmt.time,
    venueDay: venueFmt.day,
    localTime: localFmt.time,
    localDay: localFmt.day,
    countdown,
    msUntil: ms,
    status,
    statusLabel: statusLabel(status),
    deltaLabel: delta.label,
  };
}

export function formatCountdown(ms) {
  const past = ms < 0;
  const abs = Math.abs(ms);
  const totalMin = Math.floor(abs / 60000);
  const days = Math.floor(totalMin / (60 * 24));
  const hours = Math.floor((totalMin % (60 * 24)) / 60);
  const mins = totalMin % 60;
  const secs = Math.floor((abs % 60000) / 1000);
  let core;
  if (days > 0) core = `${days}d ${hours}h ${mins}m`;
  else if (hours > 0) core = `${hours}h ${mins}m ${secs}s`;
  else core = `${mins}m ${secs}s`;
  return past ? `${core} ago` : core;
}

export function nextSession(event, now = new Date(), localTz = null) {
  const tz = localTz || Intl.DateTimeFormat().resolvedOptions().timeZone;
  const annotated = (event.sessions || []).map((s) => annotateSession(s, event.tz, tz, false, now));
  const upcoming = annotated
    .filter((s) => {
      if (!s.instant) return false;
      if (s.status === 'finished') return false;
      if (s.isWindow) return !s.windowEnd || now.getTime() <= s.windowEnd.getTime();
      return s.msUntil > -3600000;
    })
    .sort((a, b) => a.msUntil - b.msUntil);
  return upcoming[0] || annotated[annotated.length - 1] || null;
}

export function primarySession(event) {
  const order = ['race', 'final', 'finals', 'match', 'kickoff', 'main-card', 'window'];
  for (const type of order) {
    const s = (event.sessions || []).find(
      (x) =>
        (x.type || '').toLowerCase() === type ||
        (x.name || '').toLowerCase().includes(type)
    );
    if (s) return s;
  }
  return (event.sessions || [])[(event.sessions || []).length - 1] || null;
}

export function eventHeadlineTime(event, localTz, hour12 = false, now = new Date()) {
  const primary = primarySession(event);
  if (!primary) return null;
  return annotateSession(primary, event.tz, localTz, hour12, now);
}

export function sortEventsByNext(events, now = new Date()) {
  // Upcoming first (soonest → latest), then finished events (most recent
  // first) — nobody opens a season to see March at the top in July.
  const nowMs = now.getTime();
  const scored = events.map((e) => {
    const n = nextSession(e, now);
    const t = n?.instant?.getTime() ?? Number.MAX_SAFE_INTEGER;
    const upcoming = n && (n.status !== 'finished') && t >= nowMs - 3600000;
    return { e, t, upcoming };
  });
  scored.sort((a, b) => {
    if (a.upcoming !== b.upcoming) return a.upcoming ? -1 : 1;
    return a.upcoming ? a.t - b.t : b.t - a.t;
  });
  return scored.map((x) => x.e);
}

/**
 * Upcoming sessions across many series, soonest first.
 * seriesList: catalog series array (already filtered to followed if desired).
 * Candidates are filtered/sorted on memoized instants; only the top `limit`
 * get the (Intl-heavy) full annotation.
 * Returns [{ series, event, session (annotated) }].
 */
export function upcomingAcrossSeries(seriesList, localTz, hour12 = false, now = new Date(), limit = 8) {
  const nowMs = now.getTime();
  const cands = [];
  for (const series of seriesList || []) {
    for (const event of series.events || []) {
      for (const raw of event.sessions || []) {
        const instant = sessionToInstant(raw, event.tz);
        if (!instant) continue;
        if ((raw.status || '').toLowerCase() === 'final') continue;
        if (isWindowSession(raw)) {
          const end = windowEndInstant(raw, event.tz);
          if (end && nowMs > end.getTime()) continue;
        } else if (instant.getTime() - nowMs < -3600000) {
          continue;
        }
        cands.push({ series, event, raw, t: instant.getTime() });
      }
    }
  }
  cands.sort((a, b) => a.t - b.t);
  return cands.slice(0, limit).map((c) => ({
    series: c.series,
    event: c.event,
    session: annotateSession(c.raw, c.event.tz, localTz, hour12, now),
  }));
}


/**
 * Sessions that start in the local evening window (default 16:00–23:59 local).
 * Falls back to the next few upcoming if nothing is "tonight".
 */
export function upcomingTonight(seriesList, localTz, hour12 = false, now = new Date(), limit = 8, opts = {}) {
  const eveningStartHour = opts.eveningStartHour ?? 16;
  const rows = upcomingAcrossSeries(seriesList, localTz, hour12, now, 40);
  const y = now.getFullYear();
  const m = now.getMonth();
  const d = now.getDate();
  // Local calendar day bounds via Intl is heavy; approximate with offset of first row or wall format.
  const tonight = rows.filter((r) => {
    if (!r.session?.instant) return false;
    if (r.session.status === 'finished') return false;
    const local = formatTime(r.session.instant, localTz, { withSeconds: false, withDate: true, hour12: false });
    // local.day like "Sat" and time "HH:MM" — compare date string on instant in local tz
    try {
      const parts = new Intl.DateTimeFormat('en-CA', {
        timeZone: localTz,
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', hour12: false,
      }).formatToParts(r.session.instant);
      const get = (t) => parts.find((p) => p.type === t)?.value;
      const dateStr = `${get('year')}-${get('month')}-${get('day')}`;
      const hour = Number(get('hour'));
      const todayParts = new Intl.DateTimeFormat('en-CA', {
        timeZone: localTz, year: 'numeric', month: '2-digit', day: '2-digit',
      }).formatToParts(now);
      const gt = (t) => todayParts.find((p) => p.type === t)?.value;
      const todayStr = `${gt('year')}-${gt('month')}-${gt('day')}`;
      if (dateStr !== todayStr) return false;
      // Live now always counts as tonight
      if (r.session.status === 'live-or-recent') return true;
      return hour >= eveningStartHour || r.session.msUntil < 6 * 3600000;
    } catch {
      return r.session.msUntil >= 0 && r.session.msUntil < 12 * 3600000;
    }
  });
  const picked = (tonight.length ? tonight : rows).slice(0, limit);
  return picked;
}

/** Filter upcoming rows by mode: 'all' | 'tonight' | 'live'. */
export function filterUpcoming(rows, mode = 'all') {
  if (mode === 'live') {
    return rows.filter((r) => r.session?.status === 'live-or-recent' || r.session?.status === 'delayed');
  }
  if (mode === 'tonight') {
    // Caller should pass already-tonight rows; keep non-finished
    return rows.filter((r) => r.session?.status !== 'finished');
  }
  return rows;
}
