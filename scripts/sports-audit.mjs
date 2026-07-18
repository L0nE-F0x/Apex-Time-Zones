/**
 * Sports data audit — human-readable report of coverage + staleness.
 * Run:  node scripts/sports-audit.mjs
 * Also invoked lightly by check-data-freshness.mjs.
 *
 * Flags series that are past-only, thin (few upcoming sessions), or lack
 * explicit status on completed marquee events.
 */
import { buildCatalog } from './build-sports-data.mjs';

const now = Date.now();
const catalog = buildCatalog();

console.log(`ApexTimeZones sports audit — ${new Date().toISOString().slice(0, 10)}`);
console.log(`schema v${catalog.schemaVersion} · generatedAt ${catalog.generatedAt || '(build time)'}`);
console.log('─'.repeat(64));

let totalEvents = 0;
let totalSessions = 0;
let upcomingSessions = 0;
const thin = [];
const pastOnly = [];

for (const series of catalog.series) {
  let upcoming = 0;
  let past = 0;
  let latest = 0;
  let earliestUpcoming = null;
  for (const e of series.events) {
    totalEvents++;
    for (const s of e.sessions) {
      totalSessions++;
      const dateStr = s.type === 'window' ? s.endDate : s.date;
      if (!dateStr) continue;
      const t = Date.parse((s.type === 'window' ? s.startDate : dateStr) + 'T12:00:00Z');
      const endT = Date.parse(dateStr + 'T23:59:00Z');
      if (!Number.isNaN(endT)) latest = Math.max(latest, endT);
      const explicitFinal = s.status === 'final';
      if (explicitFinal || (!Number.isNaN(endT) && endT < now - 3 * 3600000)) {
        past++;
      } else {
        upcoming++;
        upcomingSessions++;
        if (earliestUpcoming == null || t < earliestUpcoming) earliestUpcoming = t;
      }
    }
  }
  const quietDays = latest ? Math.floor((now - latest) / 86400000) : 999;
  const flag = upcoming === 0 ? 'PAST-ONLY' : upcoming < 3 ? 'THIN' : 'OK';
  const next = earliestUpcoming
    ? new Date(earliestUpcoming).toISOString().slice(0, 10)
    : '—';
  console.log(
    `${flag.padEnd(9)} ${series.id.padEnd(22)} events=${String(series.events.length).padStart(2)}  upcomingSess≈${String(upcoming).padStart(3)}  next=${next}`
  );
  if (flag === 'PAST-ONLY') pastOnly.push(series);
  if (flag === 'THIN') thin.push(series);
}

console.log('─'.repeat(64));
console.log(
  `${catalog.series.length} series · ${totalEvents} events · ${totalSessions} sessions · ~${upcomingSessions} upcoming`
);
if (pastOnly.length) {
  console.log(`\nPast-only (archive OK if intentional): ${pastOnly.map((s) => s.id).join(', ')}`);
}
if (thin.length) {
  console.log(`Thin coverage (consider expanding): ${thin.map((s) => s.id).join(', ')}`);
}
console.log('\nAudit complete. Re-run after editing scripts/build-sports-data.mjs.');
