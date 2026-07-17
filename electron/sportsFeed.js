/**
 * Over-the-air sports catalog feed.
 *
 * Fetches website/data/sports/v2/catalog.json from the marketing site (same
 * trust model as the update feed), validates the payload shape, caches it in
 * userData, and pushes it to renderer windows. The renderer falls back to the
 * bundled snapshot whenever no valid feed/cache is available, so the app is
 * fully offline-safe.
 */
const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');
const store = require('./store');
const { fetchJson } = require('./updater');

const SCHEMA_VERSION = 2;
const DEFAULT_SPORTS_FEED_URLS = [
  'https://apextimezones.netlify.app/data/sports/v2/catalog.json',
  'https://raw.githubusercontent.com/L0nE-F0x/Apex-Time-Zones/main/website/data/sports/v2/catalog.json',
];

let checkTimer = null;

function cacheFile() {
  return path.join(app.getPath('userData'), 'sports-catalog.json');
}

/** Structural validation — a bad feed must never replace good data. */
function isValidCatalog(catalog) {
  if (!catalog || catalog.schemaVersion !== SCHEMA_VERSION) return false;
  if (!Array.isArray(catalog.series) || !catalog.series.length) return false;
  for (const s of catalog.series) {
    if (!s.id || !s.name || !Array.isArray(s.events) || !s.events.length) return false;
    for (const e of s.events) {
      if (!e.id || typeof e.lat !== 'number' || typeof e.lng !== 'number' || !e.tz) return false;
      if (!Array.isArray(e.sessions) || !e.sessions.length) return false;
    }
  }
  return true;
}

function readCache() {
  try {
    const raw = fs.readFileSync(cacheFile(), 'utf8');
    const parsed = JSON.parse(raw);
    return isValidCatalog(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function writeCache(catalog) {
  try {
    fs.writeFileSync(cacheFile(), JSON.stringify(catalog), 'utf8');
  } catch (e) {
    console.error('sports cache write failed', e);
  }
}

function broadcast(catalog) {
  for (const win of BrowserWindow.getAllWindows()) {
    if (!win.isDestroyed()) win.webContents.send('sports-catalog', catalog);
  }
}

async function refresh() {
  const settings = store.read();
  const feeds = [];
  if (settings.sportsFeedUrl) feeds.push(settings.sportsFeedUrl);
  feeds.push(...DEFAULT_SPORTS_FEED_URLS);

  for (const feed of feeds) {
    if (!feed) continue;
    try {
      const catalog = await fetchJson(feed);
      if (!isValidCatalog(catalog)) continue;
      const cached = readCache();
      if (cached && cached.generatedAt && catalog.generatedAt && cached.generatedAt >= catalog.generatedAt) {
        return { ok: true, fresh: false };
      }
      writeCache(catalog);
      broadcast(catalog);
      return { ok: true, fresh: true };
    } catch {
      /* try next feed */
    }
  }
  return { ok: false };
}

/** Cached catalog for the renderer to apply at boot (null → use bundled). */
function getCatalog() {
  return readCache();
}

function startPeriodicChecks() {
  setTimeout(() => {
    refresh().catch(() => {});
  }, 10000);
  clearInterval(checkTimer);
  checkTimer = setInterval(() => {
    refresh().catch(() => {});
  }, 6 * 60 * 60 * 1000);
}

function stopPeriodicChecks() {
  clearInterval(checkTimer);
  checkTimer = null;
}

module.exports = {
  refresh,
  getCatalog,
  startPeriodicChecks,
  stopPeriodicChecks,
  DEFAULT_SPORTS_FEED_URLS,
};
