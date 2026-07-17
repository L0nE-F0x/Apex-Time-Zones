# ApexTimeZones — 10x roadmap

**Date:** 2026-07-17 · **Baseline:** v1.3.0 (`63a9a40`) · **Author:** deep audit by Claude (Fable 5) session

**North star:** *the world clock for sports fans* — for any event on Earth, know exactly when to tune in where you are, and never miss a session. Everything below serves that: accurate data, broad sport coverage, zero-friction reminders, and a UI that feels like a precision instrument rather than a template.

Owner-set direction for this roadmap:

- **Drop esports** (MTG, LoL, CS) — the product is sports-first.
- **Push sports coverage hard** — add WSL surfing, UFC, and more; go wide.
- **10x everything**: data accuracy + pipeline, UI aesthetic, utility.

---

## Part 1 — Audit findings (v1.3.0)

### What's solid

- **Time math** ([src/js/timeMath.js](../src/js/timeMath.js)) is genuinely good: DST-aware wall-time→instant conversion via binary search + linear fallback, no date-library dependency, unit-tested (21/21 green). This is the crown jewel — everything else can lean on it.
- **Globe** ([src/js/globe.js](../src/js/globe.js)): real day/night shader with solar terminator, clouds, pins, event markers, fly-to. Looks legitimate, performs fine.
- **Desktop integration**: tray menu/tooltip, global hotkey, always-on-top, start-with-windows, bounds memory, single instance, reminders via OS notifications.
- **Update pipeline**: feed → download → relaunch works end-to-end; feed fallback order is sensible.
- **Ship discipline**: `docs/WORKFLOW.md` release checklist is real and followed.

### The core weakness: data

1. **Fixtures are fictional.** `src/js/sports/catalog.js` says it plainly: *"Schedules are curated/representative."* The World Cup entry has a "Mexico vs TBD" opener and 10 generic matches out of 104 real ones; F1 dates/times are plausible guesses; tennis/esports are sketches. For an app whose promise is "when do I tune in," **wrong times are worse than no times.** This is the single biggest gap between promise and product.
2. **Data is welded into the EXE.** Every schedule fix requires: bump version → rebuild portable → upload 80 MB → feed bump → user downloads 80 MB. Sports schedules change weekly (postponements, TBD kickoff times firming up, UFC card reshuffles). The architecture guarantees staleness.
3. **Renderer cannot fetch remote data**: CSP in [src/index.html](../src/index.html) is `connect-src 'self'`. (Not a flaw today — but it means the data pipeline must go through the main process, or the CSP must be opened to exactly the feed origin.)

### Bugs & paper cuts found in the audit

| # | Issue | Where |
|---|-------|-------|
| B1 | **Reminders can be silently missed**: fire window is `now >= fireAt && now < fireAt + 120000` polled every 30 s ([electron/main.js:457](../electron/main.js)). If the PC is asleep/off at fire time and wakes >2 min later, the notification never fires and the reminder is marked stale forever. Should fire late (with "started X min ago") rather than never. | `electron/main.js` |
| B2 | **Dev can't run beside the installed app**: dev `electron .` and the portable share the same userData → single-instance lock kills the dev instance. `app.setPath('userData', …-dev)` when `--dev`. | `electron/main.js` |
| B3 | **Update handoff race**: new portable EXE is spawned while the old instance lives another 900 ms ([electron/updater.js:247](../electron/updater.js)). If the new EXE requests the single-instance lock before the old one exits, the *update* quits and the old version keeps running. Retry the lock or wait-for-exit. | `electron/updater.js` |
| B4 | **No download integrity check**: updater runs whatever bytes arrived; `latest.json` has no `sha256`/size field. | `electron/updater.js` |
| B5 | **Old update EXEs accumulate forever** in `%APPDATA%/apex-timezones/updates/` (~80 MB each). No cleanup. | `electron/updater.js` |
| B6 | **Quality setting half-works**: `setQuality()` only changes pixel ratio; sphere segment count is read once at texture load ([src/js/globe.js:323](../src/js/globe.js)), before settings apply, so "low" never reduces geometry. | `src/js/globe.js` |
| B7 | **Sports panel re-renders via innerHTML every second**: `renderEventDetail` rebuilds the whole schedule table each tick — churn, focus loss risk, GC pressure. Update countdown text nodes only. Also `tick()` in [src/js/sports/ui.js:208](../src/js/sports/ui.js) is dead code (only `tickLight` is returned). | `src/js/sports/ui.js` |
| B8 | **Dead/orphan features**: separate widget window (`open-widget` IPC / `createWidgetWindow`) is unreachable from UI; `set-hotkey` IPC exists but no settings UI exposes it; `trayCityIds` has no picker. Wire them or cut them. | `electron/main.js`, `src/index.html` |
| B9 | **README says 1.2.0**; app/feed are 1.3.0. `assets/icon.ico` may still be wireframe-era while PNGs were regenerated. | `README.md`, `assets/` |
| B10 | **package.json lacks `"type": "module"`** → node test runner warns on every run. | `package.json` |

### Aesthetic audit (in-app)

The owner rejected "AI-template" skins on the site; the **in-app chrome still carries the same residue**: `ORBITAL CLOCK` badge, `ACQUIRING ORBITAL LINK…` loader, `NAVIGATION` / `SOLAR STATUS` HUD panels in all-caps sci-fi voice, four neon accents (cyan/mint/pink/gold) competing on one screen. The globe itself is the hero and looks real; the chrome around it should get out of its way. Direction: **precision-instrument calm, not spaceship cosplay** — same rule as the site. Incremental CSS/copy only, no framework, no full re-theme.

### Coverage audit

124 cities (good). 6 sport series, of which 3 are esports (to be removed) and 3 are sports with thin, partly fictional data. No UFC, no surfing, no MotoGP, no NFL/NBA/MLB, no cricket, no rugby, no golf, no cycling, no athletics — i.e., most of what sports fans actually track across timezones (the exact audience of this app: UFC prelims at 3 a.m., WSL waiting periods in Fiji, F1 in Suzuka) is absent.

---

## Part 2 — The roadmap

Five releases, each shipped end-to-end per [WORKFLOW.md](WORKFLOW.md). Order matters: honest data first (it's the product's credibility), then the pipeline so it stays honest, then utility, then polish, then reach.

### v1.4 — "Real sports, real times" (data honesty + refocus)

*The single highest-leverage release. Ship fast.*

**Remove esports.** Delete `mtg-2026`, `lol-2026`, `cs-2026` from `catalog.js`; update `tests/sports.test.mjs` (it currently asserts MTG exists); remove "MTG, esports" from search placeholder, marketing copy, and `latest.json` notes lineage.

**Replace fiction with verified fixtures** (verify every date/time/tz against official sources at implementation time — do not trust the current file):

- **F1 2026** — remaining rounds from the official calendar, real session times per GP (they vary by venue; current file assumes uniform times).
- **FIFA World Cup 2026** — the actual remaining knockout bracket with real teams, venues, kickoff times (final July 19, MetLife). After the final, keep it as a completed event until season cleanup.
- **Tennis** — US Open with real session structure; add ATP/WTA Finals.
- **New sports (the expansion):**

| Sport | Series to model | Session model notes |
|-------|----------------|---------------------|
| **UFC** | Numbered events + Fight Nights | Early prelims / prelims / main card as sessions; venue tz + broadcast-friendly framing. Card times are announced ~weeks out — pipeline (v1.5) keeps them fresh. |
| **WSL surfing** | Championship Tour stops + Finals | **Needs schema extension**: WSL runs *waiting periods* (multi-day windows, "first call" times), not fixed sessions. Add a `window` session type: `{ startDate, endDate, firstCallTime }` rendered as "Window: Aug 10–20 · first call 7:00 local". |
| **MotoGP** | Full season | Same weekend structure as F1 (FP/Q/Sprint/Race). |
| **NFL** | Season kickoff, weekly prime-time games, playoffs, Super Bowl | Kickoff sessions; huge international audience across zones. |
| **Cricket** | International series, T20/ODI World Cups, IPL knockouts | Day/day-night/Test start times; massive tz-spread audience (IND/AUS/UK). |
| **Boxing** | Marquee title fights | Like UFC: undercard + main event walk-out window. |
| **Rugby** | Internationals, Six Nations (2027: World Cup) | Kickoff sessions. |
| **Golf** | Majors + Ryder Cup | Tee-time windows (round start blocks). |
| **Cycling** | Grand Tours (Tour de France is live *now*) | Stage start / expected finish window per key stage. |
| **NBA / MLB** | Finals, opening night, World Series | Marquee-only until the pipeline exists; full league schedules are a feed problem, not a curation problem. |
| **Athletics** | World Champs, marathon majors | Race start sessions. |

- **Schema v2** in `catalog.js` to support the above: optional `session.type: 'window'` with `startDate/endDate/firstCallTime`; optional per-session `tz` override (rare but real, e.g. broadcast-scheduled cards); `series.sport` key for iconography; keep everything backward-compatible with `schedule.js` helpers. Extend `tests/sports.test.mjs`: schema validation for every event (valid IANA tz, date within season, lat/lng in range, sessions sorted).
- **Hygiene in the same release:** README → 1.4.0 + rewritten feature list; regenerate `assets/icon.ico` from the new `icon.png` (multi-size) so taskbar/installer match; add `"type": "module"` or rename tests to silence node warnings.

### v1.5 — "The data pipeline" (accuracy that stays accurate)

*Break the data-inside-the-EXE architecture. This is the 10x unlock: after this release, schedule updates reach every installed app in hours without shipping a binary.*

- **Remote sports feed:** publish `website/data/sports/v2/catalog.json` (+ per-series files if it grows) on Netlify beside the update feed. Schema-versioned (`/v2/` in the path) so old apps never break on new schema.
- **App-side:** main process fetches the feed on launch + every 6 h (same cadence/plumbing as `updater.js`), validates against the schema, caches to userData, exposes via IPC. Renderer uses: fresh feed → cached feed → bundled snapshot (offline-safe). CSP stays locked; only the main process talks to the network — same trust model as updates today.
- **Repo-side refresh workflow:** `scripts/update-sports-data.mjs` pulls from per-sport sources — official ICS calendars (F1, MotoGP publish them), TheSportsDB, league sites — normalizes into schema v2, and **fails loudly on anything suspicious** (tz changes, sessions moving >6 h, events disappearing). Run it manually per release at first; then a scheduled GitHub Action that opens a PR with the diff — curation stays human-approved, which is the right accuracy/effort trade.
- **Update integrity (B4):** add `sha256` + `sizeBytes` to `latest.json`; `release-prep.mjs` computes them; updater verifies before launching, deletes on mismatch. Also: cleanup old EXEs in the updates dir (B5), fix the handoff race (B3).

### v1.6 — "Never miss a session" (utility)

*Turn passive schedules into an alerting instrument. This is what makes it a daily-driver tray app instead of a lookup tool.*

- **"Up Next" rail:** a global, cross-sport view (globe-side or panel-top) of the next N sessions across *followed* series, sorted by soonest, with live countdowns. The current UX requires drilling series → event → session; the answer to "what's on tonight?" should be zero clicks.
- **Follow model:** star a series (or single event). Followed = appears in Up Next, gets auto-reminders (default: 15 min before every race/main card/kickoff, configurable per series), shows in tray.
- **One-click reminders from any session row** — no more detour through Time Bridge. (Keep "send to bridge" for the multi-city table; it's good.)
- **Tray = next event:** tooltip and menu show the next followed session + countdown alongside pinned city times. The tray icon is the app's most-seen surface; today it only shows clocks.
- **Widget mode 2.0:** mini widget shows next followed event countdown + top clocks. Decide the fate of the orphaned separate-widget-window path (B8): either wire it as "detached widget" or delete it.
- **Calendar export:** generate `.ics` per event/series (times in UTC; calendar apps localize) — one click from schedule to Outlook/Google. Cheap to build on `timeMath`, huge utility.
- **Fix reminder reliability (B1):** fire late rather than never (up to 24 h, labeled "started X ago"); recompute on wake (`powerMonitor` resume event).
- **Sports search across events**, not just series: "silverstone", "ufc 320", "teahupo'o" should hit directly.

### v1.7 — "Instrument, not spaceship" (aesthetic + performance)

*Incremental, owner-taste-aligned: calm precision. No re-theme, no design-MD. Every change is a CSS/copy/DOM tweak reviewable in a screenshot.*

- **Voice pass:** kill `ORBITAL CLOCK`, `ACQUIRING ORBITAL LINK…`, `NAVIGATION`, `SOLAR STATUS` sci-fi copy → plain confident labels ("Loading Earth…", "Sun position", drop the hint panel after first run). All-caps only for micro-labels, if at all.
- **Color discipline:** one accent (cyan) + one semantic highlight (gold for live/next). Mint/pink demoted to states (pinned/selected) at lower saturation. Today four neons compete; the textured Earth should be the only rich thing on screen.
- **Sport identity on the globe:** per-sport marker glyph/color (checkered = motorsport, octagon = UFC, wave = WSL…), live-event pulse, label collision avoidance. This is where "amount of coverage" becomes *visible* wow.
- **Type & density:** tabular numerals (`font-variant-numeric: tabular-nums`) for every clock/countdown so digits don't jitter; slightly larger time displays; consistent 4/8 px spacing rhythm; compact mode.
- **Performance:** countdown ticks update text nodes only (B7); delete dead `tick()`; make quality setting actually rebuild geometry (B6); pause sports ticks when tab hidden.
- **Settings UX:** hotkey capture UI, tray-cities picker (both IPC paths already exist, B8), grouped settings panel.

### v2.0 — "Reach" (distribution + trust)

- **Binaries out of git:** host the portable EXE on GitHub Releases; `latest.json` keeps working via absolute `downloadUrl` (updater already supports redirects). Repo drops from ~80 MB to a few MB; Netlify serves site + feeds only. Keep `/downloads/` as a redirect for old links.
- **CI:** GitHub Actions — `npm test` + bundle + `electron-builder` on every push; release workflow builds, hashes, uploads, and updates the feed. The WORKFLOW.md checklist becomes automation with a human "go" button.
- **Code signing:** revisit — an OV cert or Azure Trusted Signing kills the SmartScreen warning that currently taxes every single new user and every update. Highest-impact trust fix available for money.
- **Winget manifest** (`winget install ApexTimeZones`) — free distribution channel for exactly this app's audience.
- **Site refresh (honest, not redecorated):** same calm baseline, updated to show sports coverage breadth + Up Next; live "next 3 global events" strip on the page powered by the same `data/sports` feed — the site and app literally share one source of truth.
- **Later / evaluate:** macOS build (Three.js + Electron port is cheap; tray semantics differ), localization, a lightweight "tonight in your timezone" weekly notification.

---

## Sequencing summary

| Version | Theme | Headline |
|---------|-------|----------|
| 1.4 | Data honesty | Esports out; UFC, WSL, MotoGP, NFL, cricket + more in, with verified times |
| 1.5 | Pipeline | Schedules update over the air; hashed, verified downloads |
| 1.6 | Utility | Follow → Up Next → auto-reminders → tray countdown → .ics |
| 1.7 | Polish | Calm instrument UI, per-sport globe identity, perf fixes |
| 2.0 | Reach | Signed builds, CI, GitHub Releases, winget, honest site refresh |

**Standing rules carried through every release:** Apex Forge attribution stays; release checklist in WORKFLOW.md is mandatory; `npm test` green before any push; never bump the feed before the EXE is live; no design-MD reskins ever.
