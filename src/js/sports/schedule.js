/**
 * Pure helpers for sports schedules — dual zone times & countdowns.
 */
import { wallTimeToUtcDate, formatTime, relativeDelta } from '../timeMath.js';

export function sessionToInstant(session, venueTz) {
  if (!session?.date || !session?.time || !venueTz) return null;
  const [y, mo, d] = session.date.split('-').map(Number);
  const [hh, mm] = session.time.split(':').map(Number);
  return wallTimeToUtcDate(y, mo, d, hh, mm, venueTz);
}

export function annotateSession(session, venueTz, localTz, hour12 = false, now = new Date()) {
  const instant = sessionToInstant(session, venueTz);
  if (!instant) {
    return { ...session, instant: null, venueTime: '—', localTime: '—', countdown: null, status: 'unknown' };
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

export function nextSession(event, now = new Date()) {
  const annotated = (event.sessions || []).map((s) =>
    annotateSession(s, event.tz, Intl.DateTimeFormat().resolvedOptions().timeZone, false, now)
  );
  const upcoming = annotated
    .filter((s) => s.instant && s.msUntil > -3600000)
    .sort((a, b) => a.msUntil - b.msUntil);
  return upcoming[0] || annotated[annotated.length - 1] || null;
}

export function primarySession(event) {
  const order = ['race', 'final', 'finals', 'match', 'kickoff', 'grand final'];
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
