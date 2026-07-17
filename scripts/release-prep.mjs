/**
 * Prepare a release: hashed update feed + site version label.
 * Usage: node scripts/release-prep.mjs [release notes...]
 *
 * Binaries live on GitHub Releases (since 2.0.0), not in the repo.
 * Flow: npm run build:win → this script → gh release create (see output)
 *       → git push. Netlify redirects /downloads/* to the latest release.
 */
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
const version = pkg.version;
const today = new Date().toISOString().slice(0, 10);

const REPO = 'L0nE-F0x/Apex-Time-Zones';
const portable = path.join(root, 'dist', `ApexTimeZones-Portable-${version}.exe`);

const updatesDir = path.join(root, 'website', 'updates');
fs.mkdirSync(updatesDir, { recursive: true });

const notesArg = process.argv.slice(2).join(' ').trim();
const releaseNotes = notesArg || `ApexTimeZones ${version} — see GitHub release notes.`;

const latest = {
  version,
  publishedAt: today,
  downloadPath: '/downloads/ApexTimeZones-Portable.exe',
  downloadUrl: `https://github.com/${REPO}/releases/download/v${version}/ApexTimeZones-Portable-${version}.exe`,
  mandatory: false,
  releaseNotes,
};

if (fs.existsSync(portable)) {
  const buf = fs.readFileSync(portable);
  latest.sha256 = crypto.createHash('sha256').update(buf).digest('hex');
  latest.sizeBytes = buf.length;
  console.log('portable:', portable);
  console.log('sha256:', latest.sha256);
} else {
  console.error(`Missing dist portable for ${version}: ${portable}`);
  console.error('Run npm run build:win (or npm run pack) first.');
  process.exit(1);
}

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

const stableCopy = path.join(root, 'dist', 'ApexTimeZones-Portable.exe');
fs.copyFileSync(portable, stableCopy);

console.log(`
Next (feed must not go live before the release assets exist):
  1. gh release create v${version} "${path.relative(root, portable)}" "${path.relative(root, stableCopy)}" --title "v${version}" --notes "${releaseNotes.replace(/"/g, "'")}"
  2. Confirm the asset URL responds, then git add -A && git commit && git push origin main
  3. Wait for Netlify; smoke-test /updates/latest.json and /download
  4. Launch previous portable once; confirm update banner + hash-verified install
`);
