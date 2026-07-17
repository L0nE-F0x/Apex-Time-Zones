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

export function sessionToInstant(session, venueTz) {
  if (!session || !venueTz) return null;
  if (isWindowSession(session)) {
    if (!session.startDate) return null;
    const [y, mo, d] = session.startDate.split('-').map(Number);
    const [hh, mm] = (session.firstCallTime || '08:00').split(':').map(Number);
    return wallTimeToUtcDate(y, mo, d, hh, mm, venueTz);
  }
  if (!session.date || !session.time) return null;
  const [y, mo, d] = session.date.split('-').map(Number);
  const [hh, mm] = session.time.split(':').map(Number);
  return wallTimeToUtcDate(y, mo, d, hh, mm, venueTz);
}

/** End instant of a window session (end of its last day at venue). */
export function windowEndInstant(session, venueTz) {
  if (!isWindowSession(session) || !session.endDate) return null;
  const [y, mo, d] = session.endDate.split('-').map(Number);
  return wallTimeToUtcDate(y, mo, d, 23, 59, venueTz);
}

function formatWindowLabel(session) {
  const fmt = (iso) => {
    const [y, mo, d] = iso.split('-').map(Number);
    const dt = new Date(Date.UTC(y, mo - 1, d, 12));
    return dt.toLocaleDateString(undefined, { month: 'short', day: 'numeric', timeZone: 'UTC' });
  };
  return `${fmt(session.startDate)} – ${fmt(session.endDate)}`;
}

export function annotateSession(session, venueTz, localTz, hour12 = false, now = new Date()) {
  const instant = sessionToInstant(session, venueTz);
  if (!instant) {
    return { ...session, instant: null, venueTime: '—', localTime: '—', countdown: null, status: 'unknown' };
  }

  if (isWindowSession(session)) {
    const end = windowEndInstant(session, venueTz);
    const ms = instant.getTime() - now.getTime();
    let status = 'upcoming';
    if (end && now.getTime() > end.getTime()) status = 'finished';
    else if (ms < 0) status = 'live-or-recent';
    const localFmt = formatTime(instant, localTz, { withSeconds: false, withDate: true, hour12 });
    const delta = relativeDelta(instant, venueTz, localTz);
    return {
      ...session,
      instant,
      windowEnd: end,
      isWindow: true,
      venueTime: `${formatWindowLabel(session)} · first call ${session.firstCallTime || '—'}`,
      venueDay: 'waiting period',
      localTime: localFmt.time,
      localDay: localFmt.day,
      countdown: status === 'live-or-recent' ? 'window open' : formatCountdown(ms),
      msUntil: ms,
      status,
      deltaLabel: delta.label,
    };
  }

  const venueFmt = formatTime(instant, venueTz, { withSeconds: false, withDate: true, hour12 });
  const localFmt = formatTime(instant, localTz, { withSeconds: false, withDate: true, hour12 });
  const ms = instant.getTime() - now.getTime();
  let status = 'upcoming';
  if (ms < -3 * 3600000) status = 'finished';
  else if (ms < 0) status = 'live-or-recent';
  const countdown = formatCountdown(ms);
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
  return [...events].sort((a, b) => {
    const na = nextSession(a, now);
    const nb = nextSession(b, now);
    const ma = na?.instant?.getTime() ?? Number.MAX_SAFE_INTEGER;
    const mb = nb?.instant?.getTime() ?? Number.MAX_SAFE_INTEGER;
    return ma - mb;
  });
}

/**
 * Upcoming sessions across many series, soonest first.
 * seriesList: catalog series array (already filtered to followed if desired).
 * Returns [{ series, event, session (annotated) }].
 */
export function upcomingAcrossSeries(seriesList, localTz, hour12 = false, now = new Date(), limit = 8) {
  const out = [];
  for (const series of seriesList || []) {
    for (const event of series.events || []) {
      for (const raw of event.sessions || []) {
        const s = annotateSession(raw, event.tz, localTz, hour12, now);
        if (!s.instant) continue;
        if (s.isWindow) {
          if (s.windowEnd && now.getTime() > s.windowEnd.getTime()) continue;
        } else if (s.msUntil < -3600000) {
          continue;
        }
        out.push({ series, event, session: s });
      }
    }
  }
  out.sort((a, b) => a.session.msUntil - b.session.msUntil);
  return out.slice(0, limit);
}
