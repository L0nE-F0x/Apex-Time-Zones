# ApexTimeZones — roadmap

**Updated:** 2026-07-18 · **Current ship:** v2.2.0 · **North star:** *the world clock for sports fans*

## Shipped (through v2.2)

| Version | Theme | Highlights |
|---------|-------|------------|
| 1.4–1.5 | Data + pipeline | Esports out; 12 sports; OTA catalog feed; hashed updates |
| 1.6 | Utility | Follow, Up Next, reminders, .ics |
| 1.7–2.1 | Polish | Calm voice, three tabs, drill-down sports, welcome tour |
| 2.0 | Reach | GitHub Releases binaries, CI, winget skeleton, distribution docs |
| **2.2** | **Depth + instrument** | Season depth, post-WC club football, session status, smarter Up Next, globe/pin polish, feed badge, a11y, smoke + release workflows |

## v2.2 delivered checklist

### Track A — Credibility
- [x] **A1** Season depth: tennis Finals, NFL marquee expansion, golf autumn, cricket white-ball + Aus summer, cycling Vuelta/Worlds, club football
- [x] **A2** Post–World Cup plan: WC archive with `status: final` + `club-football-2026` series
- [x] **A3** Data ops: `npm run sports:audit`, freshness tip, `sports:build` / `sports:freshness`
- [x] **A4** Session status: optional `scheduled | delayed | live | final` with UI pills

### Track B — Graphics
- [x] **B1** Shader terminator + dual atmosphere + mip/aniso texture path
- [x] **B2** Per-sport marker glyphs on the globe
- [x] **B3** Pin density (auto / pinned / all) + softer ambient pins
- [x] **B4** Smoother fly-to, live marker pulse, reduced-motion respect
- [x] **B5** Loading subcopy, empty clocks state, calmer chrome
- [x] **B6** Multi-size ICO + crisp tray PNG regenerated from Earth textures

### Track C — Utility
- [x] **C1** Up Next modes: All / Tonight / Live
- [x] **C2** Remind-all for an event’s upcoming sessions
- [x] **C6** Feed status badge (live / offline / stale)
- [x] **C8** Tab keyboard arrows, focus rings, skip link, ARIA on tabs

### Track D — Ops
- [x] **D3** `.github/workflows/release.yml` draft release on `v*` tags; CI smoke step
- [x] **D4** `npm run smoke` → `scripts/smoke-checklist.mjs`
- [x] **D5** Docs refresh (this file, HANDOFF, WORKFLOW touch)

## Next (not in 2.2)

- Code signing (owner — see DISTRIBUTION.md)
- winget submission after first signed build
- macOS tray build
- User custom events on the globe
- Higher-resolution Earth texture pack (optional downloadable quality tier)

## Standing rules

Apex Forge attribution; WORKFLOW.md end-to-end ship; never bump feed before EXE is live; no design-MD reskins.
