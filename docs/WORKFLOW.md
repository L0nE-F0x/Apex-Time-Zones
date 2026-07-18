# ApexTimeZones — release & update workflow

This is the **project method** for every feature batch from now on.

## Principles

1. **Ship end-to-end:** app → portable EXE → marketing site download → `latest.json` feed → git push → Netlify auto-deploy → in-app update notice.
2. **Users should not need Chrome** to get updates: the installed/portable app checks the feed and can download + relaunch.
3. **Branding:** always show **Built by Apex Forge** → https://ame-apexforge.org/ in the app footer and marketing site footer.
4. **Sports data:** season calendars live in `src/js/sports/catalog.js` — update schedules when rolling seasons; keep venue `tz` + wall-clock sessions accurate for dual-zone tune-in.

## Channels

| Channel | Role |
|---------|------|
| GitHub `L0nE-F0x/Apex-Time-Zones` | Source of truth, Netlify git source |
| `website/` | Marketing site (Netlify publish dir) |
| `website/downloads/ApexTimeZones-Portable.exe` | Public download binary |
| `website/updates/latest.json` | In-app update feed |
| Netlify | Auto-deploy on push to `main` |

## Version feed (`website/updates/latest.json`)

```json
{
  "version": "1.2.0",
  "publishedAt": "YYYY-MM-DD",
  "downloadPath": "/downloads/ApexTimeZones-Portable.exe",
  "downloadUrl": "/downloads/ApexTimeZones-Portable.exe",
  "mandatory": false,
  "releaseNotes": "Short user-facing notes."
}
```

- `version` must match `package.json` **version** for that release.
- Absolute `downloadUrl` is optional; the app resolves relative paths against the feed host.
- Override feed URL on a machine via main settings key `updateFeedUrl` if needed.

### Feed URLs the app tries (in order)

1. User override `updateFeedUrl` (if set)
2. `https://apextimezones.netlify.app/updates/latest.json` (production Netlify site)
3. `https://raw.githubusercontent.com/L0nE-F0x/Apex-Time-Zones/main/website/updates/latest.json` (works when the repo is public)

If the public site URL changes (custom domain), update `DEFAULT_FEED_URLS` in `electron/updater.js`.

## Feature-batch checklist (every release)

```text
[ ] 1. Implement features in app (electron/, src/)
[ ] 2. Sports fixtures changed? Edit scripts/build-sports-data.mjs, then
       node scripts/build-sports-data.mjs   (regenerates bundled + feed JSON)
[ ] 3. Bump package.json "version" (semver)
[ ] 4. npm test && npm run smoke   (schema + smoke checklist)
[ ] 4b. npm run sports:audit   (optional coverage report)
[ ] 5. npm run build:win   (or npm run pack for portable only)
[ ] 6. node scripts/release-prep.mjs "notes"   (writes latest.json with
       sha256 + sizeBytes + GitHub Releases downloadUrl, bumps site label)
[ ] 7. gh release create vX.Y.Z <both dist EXEs>   (exact command is printed
       by release-prep; binaries live on GitHub Releases, NOT in git)
[ ] 8. Confirm Apex Forge footer on app + website
[ ] 9. git add / commit / push main
[ ] 10. Wait for Netlify deploy; smoke-test /download, /updates/latest.json,
        and /data/sports/v2/catalog.json
[ ] 11. Launch previous portable once; confirm update banner + hash-verified install
```

**Sports data only** (no app changes): edit `scripts/build-sports-data.mjs`,
run it, `npm test`, push. Installed apps pick the new catalog up within ~6 hours
— no binary, no version bump.

Helper script:

```bash
npm run release:prep
```

(See `scripts/release-prep.mjs` — bumps feed from package.json, copies portable if present.)

## In-app update behaviour

1. ~8s after launch (and every 6 hours), main process fetches `latest.json`.
2. If remote version is newer → OS notification + in-app banner/modal.
3. User clicks **Update now** → download to `%APPDATA%/apex-timezones/updates/` → launch new EXE → quit old process.
4. **Check for updates** also available in Settings.

Unsigned builds may still show SmartScreen on first run of a newly downloaded EXE.

## Branding (do not drop)

- App footer: `Built by Apex Forge` → opens https://ame-apexforge.org/
- Marketing footer: same link + copy
- Optional secondary: GitHub repo link

## Netlify

- Config: root `netlify.toml` → `publish = "website"`
- Import GitHub repo; no build command
- Live site: https://apextimezones.netlify.app/ (keep `electron/updater.js` feed list in sync if this changes)

## What not to do

- Don’t ship updates only as a WhatsApp EXE without updating `latest.json` (installed users won’t see the banner).
- Don’t bump the feed version before the new EXE is on Netlify.
- Don’t remove Apex Forge attribution from shipping UI.
