/**
 * Sports data freshness check — fails when the catalog is going stale.
 * Run:  node scripts/check-data-freshness.mjs [--max-quiet-days=21]
 *
 * A series is "stale" when its latest session ended more than the threshold
 * ago (nothing upcoming, nothing recent). CI runs this weekly so the owner
 * gets a red build instead of shipping a dead sports tab.
 */
import { buildCatalog } from './build-sports-data.mjs';

const arg = process.argv.find((a) => a.startsWith('--max-quiet-days='));
const MAX_QUIET_DAYS = Number(arg?.split('=')[1] || 21);

const now = Date.now();
const catalog = buildCatalog();
const stale = [];
let upcomingTotal = 0;

for (const series of catalog.series) {
  let latest = 0;
  let upcoming = 0;
  for (const e of series.events) {
    for (const s of e.sessions) {
      const dateStr = s.type === 'window' ? s.endDate : s.date;
      if (!dateStr) continue;
      const t = Date.parse(dateStr + 'T23:59:00Z');
      if (Number.isNaN(t)) continue;
      latest = Math.max(latest, t);
      if (t > now) upcoming++;
    }
  }
  upcomingTotal += upcoming;
  const quietDays = Math.floor((now - latest) / 86400000);
  if (upcoming === 0 && quietDays > MAX_QUIET_DAYS) {
    stale.push({ id: series.id, name: series.name, quietDays });
  }
}

console.log(`Catalog: ${catalog.series.length} series, ${upcomingTotal} upcoming session days.`);
if (stale.length) {
  console.error(`\nSTALE SERIES (nothing upcoming, quiet > ${MAX_QUIET_DAYS} days):`);
  for (const s of stale) console.error(`  - ${s.name} (${s.id}) — quiet ${s.quietDays} days`);
  console.error('\nUpdate scripts/build-sports-data.mjs and republish the feed.');
  process.exit(1);
}
console.log('Freshness OK.');
console.log('(Tip: node scripts/sports-audit.mjs for a coverage report.)');
