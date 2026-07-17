/**
 * Prepare a release for Netlify + in-app updates.
 * Usage: node scripts/release-prep.mjs
 * Assumes `npm run build:win` already produced dist portable EXE (optional).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
const version = pkg.version;
const today = new Date().toISOString().slice(0, 10);

const portableCandidates = [
  path.join(root, 'dist', `ApexTimeZones-Portable-${version}.exe`),
  path.join(root, 'dist', 'ApexTimeZones-Portable-1.1.0.exe'),
  path.join(root, 'dist', 'ApexTimeZones-Portable.exe'),
];

const downloadsDir = path.join(root, 'website', 'downloads');
const updatesDir = path.join(root, 'website', 'updates');
fs.mkdirSync(downloadsDir, { recursive: true });
fs.mkdirSync(updatesDir, { recursive: true });

const destExe = path.join(downloadsDir, 'ApexTimeZones-Portable.exe');
const found = portableCandidates.find((p) => fs.existsSync(p));
if (found) {
  fs.copyFileSync(found, destExe);
  console.log('Copied portable →', destExe);
} else {
  console.warn('No portable EXE found in dist/. Build with npm run build:win first.');
  console.warn('latest.json will still be updated.');
}

const notesArg = process.argv.slice(2).join(' ').trim();
const releaseNotes =
  notesArg ||
  `ApexTimeZones ${version} — see GitHub release notes / changelog.`;

const latest = {
  version,
  publishedAt: today,
  downloadPath: '/downloads/ApexTimeZones-Portable.exe',
  downloadUrl: '/downloads/ApexTimeZones-Portable.exe',
  mandatory: false,
  releaseNotes,
};

fs.writeFileSync(path.join(updatesDir, 'latest.json'), JSON.stringify(latest, null, 2) + '\n');
console.log('Wrote website/updates/latest.json for', version);

// Light touch on marketing version string if present
const indexPath = path.join(root, 'website', 'index.html');
if (fs.existsSync(indexPath)) {
  let html = fs.readFileSync(indexPath, 'utf8');
  html = html.replace(/Version\s+\d+\.\d+\.\d+/g, `Version ${version}`);
  fs.writeFileSync(indexPath, html);
  console.log('Updated version label in website/index.html');
}

console.log(`
Next:
  1. Confirm Apex Forge footers
  2. git add -A && git commit && git push origin main
  3. Wait for Netlify; test /updates/latest.json and /download
`);
