# Distribution — trust & reach (owner actions)

Status as of v2.0.0. These are the steps that need the owner's accounts or money;
everything else in the release pipeline is automated.

## 1. Code signing (kills the SmartScreen warning)

Every new user and every update currently hits "Windows protected your PC".
Options, cheapest-effort first:

| Option | Cost (approx) | Notes |
|--------|---------------|-------|
| **Azure Trusted Signing** | ~$10/month | Easiest modern path; needs an Azure account + identity validation. Integrates with electron-builder via `azureSignOptions`. |
| OV code-signing cert (Certum, Sectigo…) | ~$70–200/yr | Classic route; SmartScreen reputation still builds over weeks. |
| EV cert | ~$250–400/yr | Instant SmartScreen reputation; hardware token hassle. |

Once a cert exists: set `CSC_LINK`/`CSC_KEY_PASSWORD` (or `azureSignOptions`) and
remove `signAndEditExecutable: false` from `package.json` build config.

## 2. GitHub Releases as binary host (shrinks the repo)

The portable EXE (~80 MB) currently lives in git under `website/downloads/`.
To migrate (needs `gh auth login` on this machine, or the GitHub web UI):

1. `gh release create v2.0.0 "dist/ApexTimeZones-Portable-2.0.0.exe" --title "v2.0.0" --notes "..."`
2. Point `downloadUrl` in `website/updates/latest.json` at the release asset URL
   (the in-app updater follows redirects and verifies sha256 — already supported).
3. Keep `/downloads/ApexTimeZones-Portable.exe` on Netlify as a redirect
   (netlify.toml `[[redirects]]`) so old links keep working.
4. Stop committing new EXEs; optionally rewrite history later to shrink clones
   (destructive — needs a deliberate decision, not part of routine releases).

## 3. winget (free distribution channel)

After the first **signed** release on GitHub Releases:

```
winget install ApexTimeZones
```

Submit a manifest PR to microsoft/winget-pkgs. Skeleton
(`manifests/a/ApexForge/ApexTimeZones/2.0.0/`):

```yaml
# ApexForge.ApexTimeZones.installer.yaml
PackageIdentifier: ApexForge.ApexTimeZones
PackageVersion: 2.0.0
InstallerType: portable
Installers:
  - Architecture: x64
    InstallerUrl: https://github.com/L0nE-F0x/Apex-Time-Zones/releases/download/v2.0.0/ApexTimeZones-Portable-2.0.0.exe
    InstallerSha256: <from latest.json>
ManifestType: installer
ManifestVersion: 1.6.0
```

winget requires stable URLs + hashes — both already produced by the release
pipeline (`release-prep` writes sha256 into `latest.json`).

## 4. Later

- macOS build: Three.js/Electron port is cheap; tray + login-item semantics differ.
- Store listing (Microsoft Store) — needs signing first.
