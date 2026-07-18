# ApexTimeZones — handoff document

**Date:** 2026-07-18  
**Repo:** https://github.com/L0nE-F0x/Apex-Time-Zones  
**Current version:** **2.2.0**

Read `AGENTS.md` + `docs/WORKFLOW.md` for day-to-day rules. Roadmap status: `docs/ROADMAP.md`.

## Product

Windows Electron **system-tray** world clock:

- Interactive **3D Earth** (Three.js) with day/night, clouds, city pins, sport markers  
- Clocks / Sports / Convert tabs · Time Bridge · reminders · follow + Up Next  
- **13 sports series** (schema v2 catalog), OTA feed + bundled snapshot  
- In-app updates (SHA-256) from Netlify feed → GitHub Releases binaries  
- Branding: **Built by Apex Forge** → https://ame-apexforge.org/

**Live site:** https://apextimezones.netlify.app/  
**Feed:** https://apextimezones.netlify.app/updates/latest.json  
**Sports feed:** https://apextimezones.netlify.app/data/sports/v2/catalog.json

## Stack

| Path | Role |
|------|------|
| `electron/` | main, preload, store, updater, sportsFeed |
| `src/js/` | app shell, globe, timeMath, sports/* → `app.bundle.js` |
| `scripts/build-sports-data.mjs` | **sports source of truth** |
| `scripts/sports-audit.mjs` | coverage report |
| `scripts/smoke-checklist.mjs` | release smoke |
| `website/` | marketing + feeds (Netlify publish root) |
| `tests/` | timeMath + sports |

## Commands

```powershell
npm test
npm run sports:build
npm run sports:audit
npm run smoke
npm start
npm run pack          # portable
npm run build:win     # NSIS + portable
npm run release:prep "notes"
```

## v2.2 highlights

- Deeper sports calendars + post-WC club football  
- Session status pills (`final` / `live` / `delayed`)  
- Up Next: All / Tonight / Live · Remind all  
- Globe: better terminator/atmosphere, sport glyphs, pin density  
- Feed badge, a11y pass, multi-size icons  
- CI smoke + draft release workflow on version tags  

## Owner preferences

- No design-MD / AI-template marketing reskins  
- Hero Earth must look real  
- Ship end-to-end (binary + feed + site)  
- App quality first  

## Distribution still owner-side

Code signing + winget submit — see `docs/DISTRIBUTION.md`.

## Gotchas

- Path has spaces — set location to full repo path  
- Always `npm run bundle` before packaging (prestart handles dev)  
- `chrome.js` is not in the ES bundle  
- Never bump `latest.json` before GitHub Release assets exist  
