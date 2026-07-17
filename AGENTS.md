# ApexTimeZones — agent / collaborator notes

**Full takeover brief:** [`HANDOFF.md`](HANDOFF.md) — read this first if you are a new agent.

## Always follow

1. **Release pipeline:** see [`docs/WORKFLOW.md`](docs/WORKFLOW.md) for every feature batch (build → portable → `website/downloads` → `updates/latest.json` → push → Netlify → in-app update).
2. **Branding:** keep **Built by Apex Forge** linking to https://ame-apexforge.org/ in the installed app footer and marketing site footer.
3. **In-app updates:** do not ship a new binary without updating `website/updates/latest.json` to the same semver as `package.json`.
4. **Do not** re-skin the marketing site with generic design-MD / “AI template” themes (rejected by owner). Keep the calm product baseline; app quality first.

## Stack

- Electron main: `electron/`
- Renderer: `src/` → bundled to `src/js/app.bundle.js`
- Marketing: `website/` (Netlify publish root via `netlify.toml`)
- Tests: `npm test` → `tests/timeMath.test.mjs`, `tests/sports.test.mjs`
