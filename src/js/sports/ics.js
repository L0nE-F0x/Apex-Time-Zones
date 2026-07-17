/**
 * Minimal iCalendar (.ics) generation for sports events.
 * Times are emitted in UTC; calendar apps localize for the user.
 */
import { sessionToInstant, windowEndInstant, isWindowSession } from './schedule.js';

function pad(n) {
  return String(n).padStart(2, '0');
}

export function icsUtcStamp(date) {
  return (
    date.getUTCFullYear() +
    pad(date.getUTCMonth() + 1) +
    pad(date.getUTCDate()) +
    'T' +
    pad(date.getUTCHours()) +
    pad(date.getUTCMinutes()) +
    pad(date.getUTCSeconds()) +
    'Z'
  );
}

function escapeText(s) {
  return String(s || '')
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n');
}

const DEFAULT_DURATION_MIN = 120;

/**
 * Build VEVENT blocks for one catalog event.
 * seriesName used in summaries; sessions with unresolvable times are skipped.
 */
export function eventToVevents(seriesName, event, now = new Date()) {
  const out = [];
  for (const session of event.sessions || []) {
    const start = sessionToInstant(session, event.tz);
    if (!start) continue;
    const isWindow = isWindowSession(session);
    const end = isWindow
      ? windowEndInstant(session, event.tz) || new Date(start.getTime() + DEFAULT_DURATION_MIN * 60000)
      : new Date(start.getTime() + DEFAULT_DURATION_MIN * 60000);
    const summary = isWindow
      ? `${event.name} — ${session.name} (waiting period)`
      : `${event.name} — ${session.name}`;
    out.push(
      [
        'BEGIN:VEVENT',
        `UID:apex-${event.id}-${session.id}@apextimezones`,
        `DTSTAMP:${icsUtcStamp(now)}`,
        `DTSTART:${icsUtcStamp(start)}`,
        `DTEND:${icsUtcStamp(end)}`,
        `SUMMARY:${escapeText(summary)}`,
        `LOCATION:${escapeText(`${event.city}, ${event.country}`)}`,
        `DESCRIPTION:${escapeText(`${seriesName}. Venue timezone: ${event.tz}. Added from ApexTimeZones.`)}`,
        'END:VEVENT',
      ].join('\r\n')
    );
  }
  return out;
}

/** Full .ics document for one event (all sessions) or a whole series. */
export function buildIcs(seriesName, events, now = new Date()) {
  const vevents = [];
  for (const ev of Array.isArray(events) ? events : [events]) {
    vevents.push(...eventToVevents(seriesName, ev, now));
  }
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//ApexTimeZones//Sports//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    ...vevents,
    'END:VCALENDAR',
    '',
  ].join('\r\n');
}
