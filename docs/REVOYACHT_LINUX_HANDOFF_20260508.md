# RevoYacht Linux Handoff - START HERE

Date: 2026-05-08

This file is written for continuing the RevoYacht work from another computer, especially Linux.

## Current GitHub Point

Repository:

```text
https://github.com/vetus-nauta/Revoyacht.git
```

Current branch to use:

```text
main
```

Current expected commit:

```text
5db8dd1 Add SO439 sailing ready-made template
```

Current live demo:

```text
https://brkovic.ltd/yacht-flex-demo/?v=20260508-v40d3d5l-so439-template
```

Do not store FTP/server credentials in repo files or handoff files.

## Clone On Linux

```bash
git clone https://github.com/vetus-nauta/Revoyacht.git
cd Revoyacht
git checkout main
git pull --ff-only origin main
git log --oneline -3
```

Expected top commit:

```text
5db8dd1 Add SO439 sailing ready-made template
```

## Install GitHub CLI On Linux

If `gh` is not installed, install it using the official GitHub CLI Linux instructions:

```text
https://github.com/cli/cli/blob/trunk/docs/install_linux.md
```

Ubuntu/Debian official install command from GitHub CLI docs:

```bash
(type -p wget >/dev/null || (sudo apt update && sudo apt install wget -y)) \
  && sudo mkdir -p -m 755 /etc/apt/keyrings \
  && out=$(mktemp) && wget -nv -O$out https://cli.github.com/packages/githubcli-archive-keyring.gpg \
  && cat $out | sudo tee /etc/apt/keyrings/githubcli-archive-keyring.gpg > /dev/null \
  && sudo chmod go+r /etc/apt/keyrings/githubcli-archive-keyring.gpg \
  && sudo mkdir -p -m 755 /etc/apt/sources.list.d \
  && echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
  && sudo apt update \
  && sudo apt install gh -y
```

Then authenticate:

```bash
gh auth login
```

Recommended answers:

```text
GitHub.com
HTTPS
Login with a web browser
Authenticate Git with your GitHub credentials: Yes
```

Verify:

```bash
gh auth status
gh repo view vetus-nauta/Revoyacht --json nameWithOwner,defaultBranchRef,viewerPermission,pushedAt
```

Expected: account has access to `vetus-nauta/Revoyacht`, default branch is `main`.

## Run Locally On Linux

This is a static frontend prototype. The simplest local server:

```bash
cd Revoyacht/private/yacht-flex-deck
python3 -m http.server 4173 --bind 127.0.0.1
```

Open:

```text
http://127.0.0.1:4173/?v=20260508-v40d3d5l-so439-template
```

Alternative public-demo folder:

```bash
cd Revoyacht/public_html/yacht-flex-demo
python3 -m http.server 4173 --bind 127.0.0.1
```

## Verification Commands

If Node.js is installed:

```bash
node --check private/yacht-flex-deck/assets/yfd-core.js
node --check public_html/yacht-flex-demo/assets/yfd-core.js
```

Check private/public demo files stay identical:

```bash
sha256sum private/yacht-flex-deck/index.html public_html/yacht-flex-demo/index.html
sha256sum private/yacht-flex-deck/assets/yfd-core.js public_html/yacht-flex-demo/assets/yfd-core.js
sha256sum private/yacht-flex-deck/assets/yacht-flex.css public_html/yacht-flex-demo/assets/yacht-flex.css
```

The matching private/public file pairs should have the same hashes.

## Current Product State

The latest completed task:

- Full checkpoint `stable 08/05/26` was created on Windows/Google Drive before this change.
- GitHub `main` was updated to `5db8dd1`.
- Added `Jeanneau SO439 - 2023` as the second Structure Template.
- Template key: `jeanneau_sun_odyssey_439`.
- Category: sailing yacht / monohull / Bermudan sloop / fractional sloop.
- Create yacht modal shows the Jeanneau ready-made card only for `Sailing + 1 hull + Bermuda Sloop`.
- SO439 opens in Ready-made mode, not custom Builder V2 mode.
- SO439 sailing rig sections are separate from hull/deck systems:
  - `AFT SAILS`
  - `FORWARD SAILS`
  - `TOP`
  - `SPAR`
  - `RIGS`
- `RIGS` is the UI label; database meaning is rigging.
- SO439 main structure layers:
  - `Template Identity`
  - `Hull Type Layer`
  - `Deck / Exterior`
  - `Hull / Underwater`
  - `Interior`
  - `Machinery`
  - `Electrical`
  - `Plumbing`
  - `Deck Equipment`
  - `Steering`
  - `Navigation & Electronics`
  - `Safety`
- Motor ready-made layers such as `Hardtop`, `Flybridge`, `Sun Deck` must not appear inside SO439 ready-made.
- Structure Templates catalog now lists:
  - `Fixed monohull motor yacht example`
  - `Jeanneau SO439 - 2023`

## Important Architecture Rules

Source files:

```text
private/yacht-flex-deck/index.html
private/yacht-flex-deck/assets/yfd-core.js
private/yacht-flex-deck/assets/yacht-flex.css
```

Public demo mirror:

```text
public_html/yacht-flex-demo/index.html
public_html/yacht-flex-demo/assets/yfd-core.js
public_html/yacht-flex-demo/assets/yacht-flex.css
```

When changing frontend code, update both private and public demo copies, then bump the version query in both index files.

Do not commit local temp screenshots/audits:

```text
tmp/
```

Do not commit credentials, FTP passwords, local tokens, or `.env` secrets.

## What To Read Next

Main long handoff:

```text
docs/REVOYACHT_BUILDER_V2_CONTINUATION_20260507.md
```

Latest Google Drive handoff mirror, if Google Drive is mounted:

```text
FOR CODEX/Интернет-проекты/01-RevoYacht/00-Handoff/REVOYACHT_BUILDER_V2_LATEST_20260508.md
```

Original SO439 source handoff, if Google Drive is mounted:

```text
FOR CODEX/Интернет-проекты/01-RevoYacht/Sails sistem/Structure templates/jeanneau_sun_odyssey_439_structure_template_codex_handoff.md
```

## Good Next Step

The next engineering step should be template/ready-made synchronization policy:

- decide whether Structure Templates are the source of truth, or whether Ready-made edits can write back to templates;
- keep this as an admin/developer mode only;
- users should work with yacht instances, not directly mutate locked system templates;
- owner/user changes should live in a custom layer, not inside the locked template base.

