/**
 * Offline smoke checklist — validates release readiness without launching Electron.
 * Run:  npm run smoke
 *
 * Exit 0 = all critical checks pass. Prints a manual QA list for tray/globe UX.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildCatalog, validateCatalog } from './build-sports-data.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const fail = [];
const warn = [];
const ok = (m) => console.log('  ✓', m);
const bad = (m) => { console.error('  ✗', m); fail.push(m); };
const soft = (m) => { console.warn('  !', m); warn.push(m); };

console.log('ApexTimeZones smoke checklist\n');

// package / feed version sync
const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));
const feedPath = path.join(ROOT, 'website', 'updates', 'latest.json');
if (!fs.existsSync(feedPath)) bad('missing website/updates/latest.json');
else {
  const feed = JSON.parse(fs.readFileSync(feedPath, 'utf8'));
  if (feed.version !== pkg.version) soft(`feed version ${feed.version} ≠ package ${pkg.version} (ok pre-release-prep)`);
  else ok(`version aligned ${pkg.version}`);
  if (!feed.sha256 && feed.version === pkg.version) soft('latest.json missing sha256 — run release-prep after pack');
}

// catalog
const catalog = buildCatalog();
const errors = validateCatalog(catalog);
if (errors.length) errors.forEach((e) => bad(`catalog: ${e}`));
else ok(`catalog valid (${catalog.series.length} series)`);

const bundled = path.join(ROOT, 'src', 'data', 'sports-catalog.json');
const feedCat = path.join(ROOT, 'website', 'data', 'sports', 'v2', 'catalog.json');
if (!fs.existsSync(bundled)) bad('missing bundled sports-catalog.json — run sports:build');
if (!fs.existsSync(feedCat)) bad('missing website sports feed JSON — run sports:build');
if (fs.existsSync(bundled) && fs.existsSync(feedCat)) {
  const a = JSON.parse(fs.readFileSync(bundled, 'utf8'));
  const b = JSON.parse(fs.readFileSync(feedCat, 'utf8'));
  if (a.series?.length !== b.series?.length) bad('bundled vs website catalog series count mismatch');
  else ok('bundled catalog matches website feed series count');
}

// renderer bundle
const bundle = path.join(ROOT, 'src', 'js', 'app.bundle.js');
if (!fs.existsSync(bundle)) soft('app.bundle.js missing — run npm run bundle before start');
else ok('renderer bundle present');

// critical assets
for (const rel of [
  'public/textures/earth_day.jpg',
  'public/textures/earth_night.jpg',
  'public/textures/earth_clouds.jpg',
  'assets/icon.ico',
  'assets/icon.png',
  'assets/tray.png',
  'src/index.html',
  'src/styles/app.css',
  'electron/main.js',
  'electron/updater.js',
  'electron/sportsFeed.js',
]) {
  if (!fs.existsSync(path.join(ROOT, rel))) bad(`missing ${rel}`);
}
if (!fail.some((f) => f.startsWith('missing public') || f.startsWith('missing assets'))) {
  ok('textures + icons + electron entrypoints present');
}

// Apex Forge branding
const html = fs.readFileSync(path.join(ROOT, 'src', 'index.html'), 'utf8');
const site = fs.readFileSync(path.join(ROOT, 'website', 'index.html'), 'utf8');
if (!html.includes('Apex Forge')) bad('app missing Apex Forge footer');
else ok('app Apex Forge branding');
if (!site.includes('ame-apexforge.org')) soft('site may be missing Apex Forge link');
else ok('site Apex Forge link');

console.log('\nManual QA (run after npm start / portable):');
const manual = [
  'Tray icon visible; tooltip shows times / next session',
  'Hotkey Ctrl+Alt+T toggles window',
  'Globe: day/night terminator, clouds, sport markers after opening a series',
  'Up Next: All / Tonight / Live filters',
  'Sports: drill-down, status pills, Remind all, .ics export',
  'Convert / Time Bridge multi-city table',
  'Feed badge shows Live feed / Offline / Stale',
  'Settings: pin density, quality, reduced motion',
  'Welcome tour via ? button',
  'Update check does not error (network)',
];
for (const m of manual) console.log('  ○', m);

console.log('');
if (fail.length) {
  console.error(`FAILED ${fail.length} check(s).`);
  process.exit(1);
}
console.log(`Smoke automated checks passed${warn.length ? ` (${warn.length} warning(s))` : ''}.`);
