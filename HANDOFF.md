# ApexTimeZones — handoff document

**Prepared for:** next agent (Claude Fable 5 / any successor)  
**Prepared by:** Grok (xAI) session  
**Date:** 2026-07-17  
**Repo HEAD at handoff:** `cdf6027` on `main`  
**Remote:** https://github.com/L0nE-F0x/Apex-Time-Zones  
**Local path:** `C:\Users\Temple Lodge\Desktop\Coding with Grok\Random Projects\ApexTimeZones`

This document is the takeover brief. Read it fully, then use `AGENTS.md` + `docs/WORKFLOW.md` for day-to-day rules.

---

## 1. What this product is

**ApexTimeZones** is a **Windows Electron system-tray** app:

- Interactive **3D Earth** (Three.js) with real day/night textures and city / sports pins  
- **World clocks**, pinned cities, **Time Bridge** (event wall time → local + multi-city table)  
- **Sports / esports mode**: F1, FIFA World Cup 2026 venues, Grand Slams, MTG, LoL, CS — venues on the globe with dual-zone times  
- Tray icon, global hotkey, mini widget, settings, **in-app updates** from Netlify feed  
- Portable EXE download from marketing site (no installer required for the portable channel)

**Branding:** **Built by Apex Forge** → https://ame-apexforge.org/ (app footer + site footer — do not remove).

**Live marketing site:** https://apextimezones.netlify.app/  
**Update feed:** https://apextimezones.netlify.app/updates/latest.json  
**Download:** `website/downloads/ApexTimeZones-Portable.exe` (~80 MB)

**Current shipping version:** `1.3.0` (`package.json` + `website/updates/latest.json`).

---

## 2. Owner preferences (critical)

The human owner (Temple Lodge / L0nE-F0x) has strong taste constraints:

| Preference | Meaning for you |
|------------|-----------------|
| **Hate “AI-generated” / design-MD skins** | Do **not** re-skin the marketing site with generic design-system templates (Nexus, Aether Prime, Global System Dashboard were tried and **rejected**, then rolled back). Keep the calm product baseline. |
| **Hero globe must look real** | Site hero must use the same textured Earth approach as the app, not CSS toy spheres or wireframe cartoons. |
| **Logo must not look cheap** | Icons regenerated from real Earth textures (`scripts/make_icon.py`). Don’t revert to flat blue grid globes. |
| **Ship end-to-end** | Features without portable EXE + `latest.json` + site push are incomplete. |
| **Sports calendars matter** | Dual-zone accuracy depends on correct venue `tz` + wall-clock sessions in `src/js/sports/catalog.js`. |

---

## 3. Stack & architecture

```
┌─────────────────────────────────────────────────────────────┐
│ Electron main (electron/)                                   │
│  main.js · preload.js · store.js · updater.js               │
│  Tray, window, hotkey, IPC, update check, window chrome       │
└──────────────────────────┬──────────────────────────────────┘
                           │ preload IPC
┌──────────────────────────▼──────────────────────────────────┐
│ Renderer (src/)                                             │
│  index.html · styles/app.css · js/*                         │
│  Bundled by esbuild → src/js/app.bundle.js (IIFE)           │
│  chrome.js is separate plain script (not in ES bundle)      │
└─────────────────────────────────────────────────────────────┘
         │
         ├── globe.js     Three.js Earth (day/night shader, pins, events)
         ├── cities.js    City catalog + pins
         ├── timeMath.js  Pure IANA/wall-time helpers (tested)
         ├── sports/*     catalog + schedule + sports UI
         └── app.js       Shell, clocks, Time Bridge, settings glue

Marketing (website/) ── Netlify publish root (netlify.toml)
  index.html · styles.css · script.js · globe-preview.js
  assets/{icon, earth_day, earth_night, earth_clouds}
  downloads/ApexTimeZones-Portable.exe
  updates/latest.json
```

### Why the bundle exists

Packaged Electron + `asar` broke ES modules / import maps. **Always ship `app.bundle.js`**. Dev and start scripts run `prestart` → `npm run bundle`.

- Bundle: `scripts/build-renderer.mjs` (esbuild)  
- Three.js is a **devDependency** bundled into the renderer (not a runtime `node_modules` load in the packaged app)

### Time model

No heavy date libraries. Pure logic in `src/js/timeMath.js` (wall time in IANA zones, DST-aware conversion, solar day/night helpers). **Run `npm test` after time or sports changes.**

---

## 4. Repo map (where to edit)

| Path | Role |
|------|------|
| `electron/main.js` | Window, tray, hotkeys, lifecycle |
| `electron/preload.js` | Safe IPC bridge |
| `electron/store.js` | Persisted settings / pins |
| `electron/updater.js` | Feed fetch, download, relaunch |
| `src/js/app.js` | App shell, clocks UI, bridge, settings wiring |
| `src/js/globe.js` | ApexGlobe — textures, terminator, pins, event markers |
| `src/js/cities.js` | Cities list (incl. Denpasar / Bali, F1 hubs, etc.) |
| `src/js/timeMath.js` | Time conversion pure functions |
| `src/js/sports/catalog.js` | Series + events + venues + sessions |
| `src/js/sports/schedule.js` | Schedule helpers |
| `src/js/sports/ui.js` | Sports tab UI |
| `src/js/settings.js` | Settings schema helpers |
| `src/js/chrome.js` | Frameless window controls (standalone script) |
| `src/index.html` | Renderer DOM |
| `src/styles/app.css` | App UI |
| `public/textures/` | `earth_day.jpg`, `earth_night.jpg`, `earth_clouds.jpg`, `stars.jpg` |
| `assets/` | App icon / tray / electron-builder resources |
| `website/` | Marketing + portable download + update feed |
| `website/globe-preview.js` | Hero Three.js globe (CDN three@0.171) |
| `scripts/make_icon.py` | Orthographic Earth icon from textures |
| `scripts/release-prep.mjs` | Release helper (feed + portable copy) |
| `docs/WORKFLOW.md` | **Mandatory** release pipeline |
| `AGENTS.md` | Short always-on rules for agents |
| `tests/` | `timeMath.test.mjs`, `sports.test.mjs` |

---

## 5. Commands

From project root (Windows PowerShell):

```powershell
cd "C:\Users\Temple Lodge\Desktop\Coding with Grok\Random Projects\ApexTimeZones"
npm install
npm test
npm start              # bundle + Electron
npm run dev            # bundle + Electron --dev
npm run pack           # portable only
npm run build:win      # NSIS + portable → dist/
npm run release:prep   # sync feed / copy portable if present
```

**Code signing:** intentionally off (`signAndEditExecutable: false`) — SmartScreen will warn on first run. Do not assume certs exist in this environment.

**electron-builder note:** Windows code-sign symlink privilege issues were worked around by disabling signing/edit; leave that unless the owner adds a cert.

---

## 6. Release pipeline (do this every feature batch)

Full checklist: **`docs/WORKFLOW.md`**. Short form:

1. Implement in `electron/` + `src/`  
2. Bump `package.json` version (semver)  
3. `npm test`  
4. `npm run build:win` (or `pack`)  
5. Copy portable EXE → `website/downloads/ApexTimeZones-Portable.exe`  
6. Update `website/updates/latest.json` (same version + notes + date)  
7. Bump version strings on marketing page if shown  
8. Confirm Apex Forge footers  
9. `git push origin main`  
10. Wait for Netlify; smoke-test download + feed  
11. Optional: launch older portable → confirm update banner  

**Never** bump `latest.json` version before the new EXE is on the site.

Feed resolution order (`electron/updater.js`):

1. User override `updateFeedUrl`  
2. `https://apextimezones.netlify.app/updates/latest.json`  
3. GitHub raw `website/updates/latest.json`  

---

## 7. Current product state (v1.3.0)

### App features shipped

- 3D globe: day/night shader, clouds, grid, TZ bands toggle, quality levels, auto-rotate, fly-to  
- Pins: cities + sports event markers; labels; selection  
- Clocks tab: pinned cities, relative deltas, 12/24h  
- Time Bridge: wall time conversion, multi-city table, quick chips, copy, reminders (~15 min)  
- Sports tab: search/series chips, session tables, dual venue/local times, map series onto globe  
- Desktop: tray menu/tooltip, `Ctrl+Alt+T`, always-on-top, start with Windows, bounds memory, widget mode  
- Settings: home city, quality, grid, bands, reduced motion, check for updates  
- Onboarding / groups / import-export pins  
- In-app updater (notification + banner → download → relaunch)

### Sports packs (catalog)

- Formula 1 (season mapped)  
- FIFA World Cup (2026 venues)  
- Grand Slams  
- MTG / LoL / CS-style esports windows  

### Marketing site (latest polish — commit `cdf6027`)

- Real hero Earth (`globe-preview.js` + day/night/clouds textures)  
- Logo from real Earth projection (`scripts/make_icon.py`)  
- De-templated copy/CSS after failed design-MD experiments  
- Design-MD remakes were **reverted** to sports-era baseline, then polished — **do not reintroduce those skins**

### Version note

`README.md` still says **1.2.0** in places; app/feed are **1.3.0**. Sync README on next touch.

---

## 8. Recent session history (what just happened)

1. Full app + packaging + portable + Netlify pipeline built  
2. Sports/esports + more cities (incl. Denpasar)  
3. In-app updates + Apex Forge branding + `docs/WORKFLOW.md`  
4. Marketing experiments with multiple design MDs → **owner rejected all** → rollback to `6a2d794` baseline  
5. Owner feedback: hero globe looked like a child’s drawing; logo cheap; page still “AI vibe”  
6. Fix: real Three.js hero + night texture + regenerated icon + calmer CSS → **pushed** `cdf6027`  

**Handoff focus for next agent: the app itself**, not more marketing skins (unless owner asks). Site is “good enough” after `cdf6027`; hard-refresh Netlify if cache shows old assets.

---

## 9. Known gaps / good next work (app-first)

Suggested backlog (not ordered by owner priority — **ask before large redesigns**):

1. **Icon pipeline completeness**  
   - PNGs refreshed; `assets/icon.ico` / installer multi-size ICO may still be older wireframe-era — regenerate ICO from new `icon.png` and rebuild portable if owner wants matching desktop/taskbar icons.

2. **Sports data freshness**  
   - F1 / WC / tennis / esports calendars drift; update `catalog.js` for real session walls and TZs. Add tests in `tests/sports.test.mjs` when structure changes.

3. **Update UX hardening**  
   - Signed builds not available; SmartScreen friction. Download integrity (hash in `latest.json`) would be a solid improvement.

4. **README / docs sync**  
   - Version strings, feature list vs 1.3.0 sports mode.

5. **App UI polish**  
   - Owner may still feel residual “generated” chrome in-app; prefer tight, product-y adjustments over full theme rewrites.

6. **Tests**  
   - `npm test` covers timeMath + sports structure; no automated Electron e2e in CI yet. Manual smoke: tray, globe textures load, sports search, Time Bridge, update check.

7. **Git / Netlify**  
   - Large portable EXE lives in git under `website/downloads/` — clones are heavy; acceptable for this project’s Netlify-static model, but be aware.

---

## 10. Gotchas (save yourself hours)

| Gotcha | Detail |
|--------|--------|
| **Wrong shell cwd** | Path has spaces: always `Set-Location` to the full `...\ApexTimeZones` path. Parent folder is *not* the git root. |
| **PowerShell ≠ bash** | No `<<EOF` heredocs; write temp files or use `python scripts/...`. |
| **Don’t edit only sources** | Forget `npm run bundle` and Electron runs stale `app.bundle.js`. |
| **`chrome.js` not in bundle** | Window chrome is a separate script tag — keep it that way. |
| **Textures path** | App loads from `public/textures/` relative to packaged layout; site copies under `website/assets/`. |
| **Design MD temptation** | Owner explicitly hates those full-site restyles. Incremental CSS only. |
| **Commit messages** | Prefer complete sentences; push to `main` deploys Netlify. |
| **CDP / probes** | Past sessions used Electron remote debugging carefully; PowerShell mangled inline JS — prefer script files. |

---

## 11. First 30 minutes for the new agent

1. Read this file + `AGENTS.md` + `docs/WORKFLOW.md`  
2. `npm test` — confirm green  
3. `npm start` — smoke globe, clocks, sports tab, settings  
4. Open https://apextimezones.netlify.app/ — confirm hero globe + new logo after cache clear  
5. Ask owner **what app problem to tackle first** (do not invent a redesign)  
6. For any shippable change, follow the release checklist end-to-end  

---

## 12. Owner communication style

- Direct, visual, low patience for template/AI aesthetics  
- Screenshots and “fix the real thing” matter  
- Prefers working portable EXE and site download over theoretical purity  
- When in doubt: **make the real product better**, don’t redecorate the landing page  

---

## 13. Files intentionally not secrets

No API keys required for core app (no backend). Sports data is static in-repo. Netlify/GitHub auth are on the owner’s accounts — agents use local git remote already configured.

---

**End of handoff.**  
Next agent: work from this directory, keep Apex Forge attribution, ship through `docs/WORKFLOW.md`, and treat the app as the product — the marketing site only needs care when it lies about the app or looks cheap again.
