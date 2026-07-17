/**
 * In-app updates for portable Windows builds.
 * Checks website/updates/latest.json (Netlify or GitHub raw), downloads new EXE, relaunches.
 */
const { app, BrowserWindow, Notification, shell } = require('electron');
const path = require('path');
const fs = require('fs');
const https = require('https');
const http = require('http');
const crypto = require('crypto');
const { spawn } = require('child_process');
const store = require('./store');

/** Feed URLs tried in order until one succeeds */
const DEFAULT_FEED_URLS = [
  // Production marketing site (Netlify)
  'https://apextimezones.netlify.app/updates/latest.json',
  // GitHub raw (works if repo is public)
  'https://raw.githubusercontent.com/L0nE-F0x/Apex-Time-Zones/main/website/updates/latest.json',
];

let checkTimer = null;
let downloading = false;
let lastInfo = null;

function parseVersion(v) {
  const m = String(v || '0')
    .replace(/^v/i, '')
    .split(/[.-]/)
    .map((x) => parseInt(x, 10) || 0);
  return [m[0] || 0, m[1] || 0, m[2] || 0];
}

function isNewer(remote, local) {
  const a = parseVersion(remote);
  const b = parseVersion(local);
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) return true;
    if (a[i] < b[i]) return false;
  }
  return false;
}

function fetchJson(url, redirects = 0) {
  return new Promise((resolve, reject) => {
    if (redirects > 5) return reject(new Error('Too many redirects'));
    const lib = url.startsWith('https') ? https : http;
    const req = lib.get(
      url,
      {
        headers: {
          'User-Agent': `ApexTimeZones/${app.getVersion()}`,
          Accept: 'application/json',
        },
        timeout: 20000,
      },
      (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          const next = new URL(res.headers.location, url).href;
          res.resume();
          return resolve(fetchJson(next, redirects + 1));
        }
        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        }
        let data = '';
        res.setEncoding('utf8');
        res.on('data', (c) => {
          data += c;
        });
        res.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(e);
          }
        });
      }
    );
    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('timeout'));
    });
  });
}

function downloadFile(url, dest, onProgress) {
  return new Promise((resolve, reject) => {
    const follow = (current, redirects = 0) => {
      if (redirects > 8) return reject(new Error('Too many redirects'));
      const lib = current.startsWith('https') ? https : http;
      const req = lib.get(
        current,
        {
          headers: { 'User-Agent': `ApexTimeZones/${app.getVersion()}` },
          timeout: 120000,
        },
        (res) => {
          if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            const next = new URL(res.headers.location, current).href;
            res.resume();
            return follow(next, redirects + 1);
          }
          if (res.statusCode !== 200) {
            res.resume();
            return reject(new Error(`Download HTTP ${res.statusCode}`));
          }
          const total = parseInt(res.headers['content-length'] || '0', 10);
          let received = 0;
          const tmp = dest + '.part';
          const out = fs.createWriteStream(tmp);
          res.on('data', (chunk) => {
            received += chunk.length;
            if (onProgress && total) {
              onProgress(Math.min(99, Math.round((received / total) * 100)));
            }
          });
          res.pipe(out);
          out.on('finish', () => {
            out.close(() => {
              try {
                if (fs.existsSync(dest)) fs.unlinkSync(dest);
                fs.renameSync(tmp, dest);
                if (onProgress) onProgress(100);
                resolve(dest);
              } catch (e) {
                reject(e);
              }
            });
          });
          out.on('error', reject);
        }
      );
      req.on('error', reject);
      req.on('timeout', () => {
        req.destroy();
        reject(new Error('download timeout'));
      });
    };
    follow(url);
  });
}

function resolveDownloadUrl(info, feedUrl) {
  if (info.downloadUrl && /^https?:\/\//i.test(info.downloadUrl)) {
    return info.downloadUrl;
  }
  const pathPart = info.downloadPath || info.downloadUrl || '/downloads/ApexTimeZones-Portable.exe';
  try {
    const base = new URL(feedUrl);
    return new URL(pathPart, `${base.protocol}//${base.host}`).href;
  } catch {
    return pathPart;
  }
}

function sendToWindows(channel, payload) {
  for (const win of BrowserWindow.getAllWindows()) {
    if (!win.isDestroyed()) {
      win.webContents.send(channel, payload);
    }
  }
}

async function checkForUpdates({ silent = true } = {}) {
  const settings = store.read();
  if (settings.autoUpdate === false) {
    return { ok: false, reason: 'disabled' };
  }

  const feeds = [];
  if (settings.updateFeedUrl) feeds.push(settings.updateFeedUrl);
  feeds.push(...DEFAULT_FEED_URLS);

  const local = app.getVersion();
  let lastError = null;

  for (const feed of feeds) {
    if (!feed) continue;
    try {
      const info = await fetchJson(feed);
      if (!info || !info.version) continue;

      lastInfo = { ...info, _feed: feed };
      const available = isNewer(info.version, local);

      const payload = {
        available,
        currentVersion: local,
        latestVersion: info.version,
        releaseNotes: info.releaseNotes || '',
        publishedAt: info.publishedAt || '',
        mandatory: !!info.mandatory,
        downloadUrl: resolveDownloadUrl(info, feed),
        silent,
      };

      if (available) {
        sendToWindows('update-available', payload);
        if (Notification.isSupported()) {
          const n = new Notification({
            title: 'ApexTimeZones update available',
            body: `Version ${info.version} is ready. Open the app to update.`,
          });
          n.show();
        }
      } else if (!silent) {
        sendToWindows('update-not-available', payload);
      }
      return { ok: true, ...payload };
    } catch (e) {
      lastError = e;
    }
  }

  if (!silent) {
    sendToWindows('update-error', { message: lastError?.message || 'Update check failed' });
  }
  return { ok: false, reason: lastError?.message || 'unreachable' };
}

function sha256File(file) {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(file);
    stream.on('data', (c) => hash.update(c));
    stream.on('end', () => resolve(hash.digest('hex')));
    stream.on('error', reject);
  });
}

/** Remove stale downloaded update EXEs, keeping only `keep` (optional). */
function cleanUpdatesDir(dir, keep) {
  try {
    for (const name of fs.readdirSync(dir)) {
      const full = path.join(dir, name);
      if (full === keep) continue;
      if (/\.(exe|part|cmd)$/i.test(name)) {
        try {
          fs.unlinkSync(full);
        } catch {
          /* in use — next run gets it */
        }
      }
    }
  } catch {
    /* dir may not exist yet */
  }
}

async function downloadAndInstall() {
  if (downloading) return { ok: false, reason: 'busy' };
  if (!lastInfo) {
    const r = await checkForUpdates({ silent: true });
    if (!r.available) return { ok: false, reason: 'no-update' };
  }
  const info = lastInfo;
  const feed = info._feed;
  const url = resolveDownloadUrl(info, feed);
  downloading = true;
  sendToWindows('update-progress', { percent: 0, status: 'starting' });

  try {
    const dir = path.join(app.getPath('userData'), 'updates');
    fs.mkdirSync(dir, { recursive: true });
    cleanUpdatesDir(dir);
    const dest = path.join(dir, `ApexTimeZones-Portable-${info.version}.exe`);

    await downloadFile(url, dest, (percent) => {
      sendToWindows('update-progress', { percent, status: 'downloading' });
    });

    // Integrity: if the feed publishes a hash, the download must match it.
    if (info.sha256) {
      sendToWindows('update-progress', { percent: 100, status: 'verifying' });
      const actual = await sha256File(dest);
      if (actual.toLowerCase() !== String(info.sha256).toLowerCase()) {
        try {
          fs.unlinkSync(dest);
        } catch {
          /* ignore */
        }
        throw new Error('Downloaded file failed integrity check (sha256 mismatch)');
      }
    }

    sendToWindows('update-progress', { percent: 100, status: 'installing' });

    // Relaunch via a short-delay script so the new instance never races the
    // old one for the single-instance lock: the old process exits first, the
    // new EXE starts ~2s later.
    const script = path.join(dir, 'relaunch.cmd');
    fs.writeFileSync(
      script,
      ['@echo off', 'ping -n 3 127.0.0.1 >nul', `start "" "${dest}"`, ''].join('\r\n'),
      'utf8'
    );
    const child = spawn('cmd.exe', ['/c', script], {
      detached: true,
      stdio: 'ignore',
      windowsHide: true,
    });
    child.unref();

    setTimeout(() => {
      app.exit(0);
    }, 300);

    return { ok: true, path: dest };
  } catch (e) {
    sendToWindows('update-error', { message: e.message || String(e) });
    return { ok: false, reason: e.message };
  } finally {
    downloading = false;
  }
}

function openDownloadPage() {
  // Prefer marketing /download on the feed host
  if (lastInfo?._feed) {
    try {
      const origin = new URL(lastInfo._feed).origin;
      shell.openExternal(`${origin}/download`);
      return;
    } catch {
      /* fall through */
    }
  }
  if (lastInfo) {
    shell.openExternal(resolveDownloadUrl(lastInfo, lastInfo._feed));
    return;
  }
  shell.openExternal('https://github.com/L0nE-F0x/Apex-Time-Zones');
}

function startPeriodicChecks(getMainWindow) {
  // Initial check after short delay so UI is ready
  setTimeout(() => {
    checkForUpdates({ silent: true }).catch(() => {});
  }, 8000);

  clearInterval(checkTimer);
  // Every 6 hours
  checkTimer = setInterval(() => {
    checkForUpdates({ silent: true }).catch(() => {});
  }, 6 * 60 * 60 * 1000);

  // Optional: re-check when window shown
  return () => clearInterval(checkTimer);
}

function stopPeriodicChecks() {
  clearInterval(checkTimer);
  checkTimer = null;
}

module.exports = {
  checkForUpdates,
  downloadAndInstall,
  openDownloadPage,
  startPeriodicChecks,
  stopPeriodicChecks,
  isNewer,
  fetchJson,
  DEFAULT_FEED_URLS,
};
