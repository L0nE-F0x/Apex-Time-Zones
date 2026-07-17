# ApexTimeZones

Sleek Windows **system-tray** world clock with a futuristic **3D Earth globe**, multi-city **Time Bridge**, and tools for sports, markets, and global events.

**Current version: 1.2.0** — in-app updates + Apex Forge branding

**Repo:** [github.com/L0nE-F0x/Apex-Time-Zones](https://github.com/L0nE-F0x/Apex-Time-Zones)

**Built by [Apex Forge](https://ame-apexforge.org/)**

**Release method:** every feature batch follows [`docs/WORKFLOW.md`](docs/WORKFLOW.md) (build → portable → site download + `updates/latest.json` → push → Netlify → in-app update).

## Marketing site (Netlify)

Static site lives in [`website/`](website/):

| Path | Purpose |
|------|---------|
| `website/index.html` | Landing page |
| `website/downloads/ApexTimeZones-Portable.exe` | Downloadable portable build (~80 MB) |
| `netlify.toml` | Publish directory = `website` |

### Connect to Netlify

1. [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**
2. Choose **GitHub** → `L0nE-F0x/Apex-Time-Zones`
3. Settings are in `netlify.toml` (no build command; publish `website`)
4. Deploy — the **Download** button serves `/downloads/ApexTimeZones-Portable.exe`

Live site: [apextimezones.netlify.app](https://apextimezones.netlify.app/)  
Download: [apextimezones.netlify.app/download](https://apextimezones.netlify.app/download)  
Update feed: [apextimezones.netlify.app/updates/latest.json](https://apextimezones.netlify.app/updates/latest.json)

## Install (normal Windows app)

1. Download the portable EXE from the site (or build with `npm run build:win`)
2. Double-click **ApexTimeZones-Portable.exe** (or the Setup installer)
3. Closing hides to the **system tray** (right-click tray → Quit to exit fully)

> **Code signing / auto-update:** not configured in this environment (no certificate or update host). Windows SmartScreen may warn on first run — use *More info → Run anyway*. To add later: set `CSC_LINK` / `CSC_KEY_PASSWORD` for electron-builder signing and wire `electron-updater` + a static release host.

## Features

### Core
- Interactive 3D globe (drag, zoom, auto-orbit)
- Realistic day/night terminator + city lights
- City pins with **solar-aligned** day/night colors
- Labels on hover / selection / zoom
- System tray app with live times in menu + tooltip

### Time tools
- **Pinned clocks** with relative deltas (ahead/behind + calendar day)
- **Time Bridge**: event wall time → your local + **multi-city table**
- Quick chips: In 2 hours, Tonight 8pm, US market open, London 3pm, Tokyo open
- **Copy conversion** to clipboard
- Event **reminders** (~15 min before) via OS notifications while app runs
- 12/24-hour preference

### Desktop
- **Global hotkey:** `Ctrl+Alt+T` (toggle show/hide)
- Always on top, **Start with Windows**
- Window **bounds** remembered
- **Mini widget mode** (clocks-only UI)
- Settings gear: quality, grid, TZ band overlay, reduced motion, home city

### Data
- Expanded city list (finance / sports hubs)
- Vietnam zones use `Asia/Ho_Chi_Minh`
- Favorite **groups** (Finance / Sports / Crypto) — apply to pins
- **Import / export** pin lists as JSON
- Home city picker + first-run **onboarding**

## Developer

```bash
cd ApexTimeZones
npm install
npm test          # pure time helpers + DST cases
npm start         # bundle + Electron
npm run build:win # production bundle + NSIS/portable installers
```

### Scripts
| Script | Purpose |
|--------|---------|
| `npm run bundle` | Dev renderer bundle (with sourcemap) |
| `npm run bundle:prod` | Minified bundle, **no** sourcemap |
| `npm test` | `node --test tests/timeMath.test.mjs` |
| `npm run build:win` | Windows installer + portable |

### Project layout
```
ApexTimeZones/
├── electron/          # Main process: tray, hotkey, startup, notifications, store
├── src/
│   ├── index.html
│   ├── styles/app.css
│   └── js/            # app, globe, timeMath, cities, settings → app.bundle.js
├── tests/             # Pure unit tests (shipped timeMath)
├── public/textures/   # Earth maps
├── scripts/build-renderer.mjs
└── package.json
```

### Packaging notes
- Three.js is **bundled** into `app.bundle.js` (devDependency only — not shipped as `node_modules/three` for runtime).
- Source maps are excluded from release (`!*.map` + prod bundle).
- Signing disabled locally (`signAndEditExecutable: false`).

## Usage tips

| Action | How |
|--------|-----|
| Rotate / zoom | Drag / scroll on globe |
| Focus city | Click pin (does **not** auto-pin) |
| Pin city | Search result, or **Pin selected** |
| Convert event | Time Bridge + chips; Copy conversion |
| Hide | ↓ / ✕ / hotkey |
| Quit | Tray → Quit |
| Mini mode | Settings → Toggle mini widget mode |

## License

MIT
