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

## 2. GitHub Releases as binary host — ✅ DONE (2026-07-17, v2.0.0)

Binaries live on GitHub Releases as of v2.0.0. Each release uploads two assets:
the versioned EXE (immutable URL — used by `latest.json` and winget) and a
stable-named `ApexTimeZones-Portable.exe` (used by the `releases/latest`
redirect). Netlify redirects `/download` and `/downloads/*` to the latest
release, so every old link keeps working. `release-prep.mjs` prints the exact
`gh release create` command per release; EXEs are no longer committed to git.

Still optional: rewriting git history to purge the old ~80 MB blobs and shrink
clones (destructive — needs a deliberate decision, not part of routine releases).

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
