#!/usr/bin/env bash
set -u

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PRIVATE_DIR="$ROOT/private/yacht-flex-deck"
PUBLIC_DIR="$ROOT/public_html/yacht-flex-demo"
PRIVATE_INDEX="$PRIVATE_DIR/index.html"
PUBLIC_INDEX="$PUBLIC_DIR/index.html"
PRIVATE_JS="$PRIVATE_DIR/assets/yfd-core.js"
PUBLIC_JS="$PUBLIC_DIR/assets/yfd-core.js"
PRIVATE_CSS="$PRIVATE_DIR/assets/yacht-flex.css"
PUBLIC_CSS="$PUBLIC_DIR/assets/yacht-flex.css"

LOCAL_URL="${REVOYACHT_LOCAL_URL:-http://revoyacht.local}"
LIVE_URL="${REVOYACHT_LIVE_URL:-https://brkovic.ltd/yacht-flex-demo/}"
GDRIVE_ROOT="${REVOYACHT_GDRIVE_ROOT:-$HOME/GoogleDrive/FOR CODEX/Интернет-проекты/01-RevoYacht}"
GDRIVE_LATEST="$GDRIVE_ROOT/00-Handoff/REVOYACHT_BUILDER_V2_LATEST_20260508.md"
GDRIVE_LINUX="$GDRIVE_ROOT/00-Handoff/REVOYACHT_LINUX_HANDOFF_20260508.md"
GDRIVE_BACKUPS="$GDRIVE_ROOT/04-Backups-archives"

PASS_COUNT=0
WARN_COUNT=0
FAIL_COUNT=0

say() {
  printf '%s\n' "$*"
}

section() {
  printf '\n== %s ==\n' "$*"
}

ok() {
  PASS_COUNT=$((PASS_COUNT + 1))
  printf '[OK]   %s\n' "$*"
}

warn() {
  WARN_COUNT=$((WARN_COUNT + 1))
  printf '[WARN] %s\n' "$*"
}

fail() {
  FAIL_COUNT=$((FAIL_COUNT + 1))
  printf '[FAIL] %s\n' "$*"
}

have() {
  command -v "$1" >/dev/null 2>&1
}

first_version_from_file() {
  local file="$1"
  if [[ ! -f "$file" ]]; then
    return 1
  fi
  rg -o 'v=[^"]+' "$file" 2>/dev/null | head -n 1 | sed 's/^v=//'
}

first_version_from_url() {
  local url="$1"
  curl -fsSL --max-time 12 "$url" 2>/dev/null | rg -o 'v=[^"]+' | head -n 1 | sed 's/^v=//'
}

sha_local() {
  local file="$1"
  sha256sum "$file" | awk '{print $1}'
}

sha_url() {
  local url="$1"
  curl -fsSL --max-time 20 "$url" 2>/dev/null | sha256sum | awk '{print $1}'
}

compare_files() {
  local label="$1"
  local left="$2"
  local right="$3"

  if [[ ! -f "$left" || ! -f "$right" ]]; then
    fail "$label: file missing"
    return
  fi

  local left_hash right_hash
  left_hash="$(sha_local "$left")"
  right_hash="$(sha_local "$right")"

  if [[ "$left_hash" == "$right_hash" ]]; then
    ok "$label: private/public match"
  else
    fail "$label: private/public differ"
    say "       private: $left_hash"
    say "       public : $right_hash"
  fi
}

section "Repo"
cd "$ROOT" || exit 1

branch="$(git branch --show-current 2>/dev/null || true)"
head_line="$(git log -1 --oneline 2>/dev/null || true)"
dirty="$(git status --short 2>/dev/null || true)"

say "Root:   $ROOT"
say "Branch: ${branch:-unknown}"
say "HEAD:   ${head_line:-unknown}"

if [[ -z "$dirty" ]]; then
  ok "Working tree is clean"
else
  warn "Working tree has local changes"
  printf '%s\n' "$dirty" | sed 's/^/       /'
fi

if git remote get-url origin >/dev/null 2>&1; then
  origin_url="$(git remote get-url origin)"
  say "Origin: $origin_url"
else
  warn "No git origin remote found"
fi

if have git; then
  remote_main="$(git ls-remote --heads origin main 2>/dev/null | awk '{print $1}' | cut -c1-7 || true)"
  local_main="$(git rev-parse --short main 2>/dev/null || true)"
  local_head="$(git rev-parse --short HEAD 2>/dev/null || true)"

  if [[ -n "$remote_main" ]]; then
    say "GitHub main: $remote_main"
    if [[ "$local_head" == "$remote_main" || "$local_main" == "$remote_main" ]]; then
      ok "Local git history sees the current GitHub main"
    else
      warn "Local HEAD/main does not match GitHub main"
      say "       local HEAD: ${local_head:-unknown}"
      say "       local main: ${local_main:-unknown}"
    fi
  else
    warn "Could not read GitHub main with git ls-remote"
  fi
fi

section "Versions"
private_version="$(first_version_from_file "$PRIVATE_INDEX" || true)"
public_version="$(first_version_from_file "$PUBLIC_INDEX" || true)"
say "Private index: ${private_version:-missing}"
say "Public index:  ${public_version:-missing}"

if [[ -n "$private_version" && "$private_version" == "$public_version" ]]; then
  ok "Private/public version strings match"
else
  fail "Private/public version strings differ"
fi

local_version="$(first_version_from_url "$LOCAL_URL" || true)"
if [[ -n "$local_version" ]]; then
  say "Local site:    $local_version"
  if [[ "$local_version" == "$private_version" ]]; then
    ok "Local site version matches repo"
  else
    warn "Local site version differs from repo"
  fi
else
  warn "Local site is not reachable: $LOCAL_URL"
fi

live_version="$(first_version_from_url "$LIVE_URL" || true)"
if [[ -n "$live_version" ]]; then
  say "Live site:     $live_version"
  if [[ "$live_version" == "$private_version" ]]; then
    ok "Live site version matches repo"
  else
    warn "Live site version differs from repo"
  fi
else
  warn "Live site is not reachable: $LIVE_URL"
fi

section "Private/Public Files"
compare_files "index.html" "$PRIVATE_INDEX" "$PUBLIC_INDEX"
compare_files "yfd-core.js" "$PRIVATE_JS" "$PUBLIC_JS"
compare_files "yacht-flex.css" "$PRIVATE_CSS" "$PUBLIC_CSS"

section "Live Assets"
if [[ -n "${live_version:-}" ]]; then
  live_js_hash="$(sha_url "$LIVE_URL/assets/yfd-core.js?v=$live_version" || true)"
  live_css_hash="$(sha_url "$LIVE_URL/assets/yacht-flex.css?v=$live_version" || true)"
  repo_js_hash="$(sha_local "$PRIVATE_JS")"
  repo_css_hash="$(sha_local "$PRIVATE_CSS")"

  if [[ -n "$live_js_hash" && "$live_js_hash" == "$repo_js_hash" ]]; then
    ok "Live JS matches repo"
  else
    warn "Live JS differs or could not be fetched"
    say "       repo: ${repo_js_hash:-unknown}"
    say "       live: ${live_js_hash:-unknown}"
  fi

  if [[ -n "$live_css_hash" && "$live_css_hash" == "$repo_css_hash" ]]; then
    ok "Live CSS matches repo"
  else
    warn "Live CSS differs or could not be fetched"
    say "       repo: ${repo_css_hash:-unknown}"
    say "       live: ${live_css_hash:-unknown}"
  fi
else
  warn "Skipped live asset hash check because live version is unknown"
fi

section "Google Drive"
if mountpoint -q "$HOME/GoogleDrive"; then
  ok "Google Drive is mounted at $HOME/GoogleDrive"
else
  warn "Google Drive mount is not active at $HOME/GoogleDrive"
fi

if systemctl --user is-active --quiet rclone-gdrive.service 2>/dev/null; then
  ok "rclone-gdrive.service is active"
else
  warn "rclone-gdrive.service is not active"
fi

if [[ -f "$GDRIVE_LATEST" ]]; then
  ok "Drive latest handoff exists"
  say "       $GDRIVE_LATEST"
  drive_version="$(rg -m 1 '20260508-v40d3d5l|20260508-v40d3d5k|20260508-v40d3d4' "$GDRIVE_LATEST" 2>/dev/null | sed 's/^[[:space:]]*//')"
  if [[ -n "$drive_version" ]]; then
    say "       marker: $drive_version"
  fi
else
  warn "Drive latest handoff not found"
  say "       $GDRIVE_LATEST"
fi

if [[ -f "$GDRIVE_LINUX" ]]; then
  ok "Drive Linux handoff exists"
else
  warn "Drive Linux handoff not found"
fi

if [[ -d "$GDRIVE_BACKUPS" ]]; then
  latest_backup="$(find "$GDRIVE_BACKUPS" -maxdepth 1 -mindepth 1 -printf '%T@ %f\n' 2>/dev/null | sort -nr | head -n 1 | cut -d' ' -f2- || true)"
  if [[ -n "$latest_backup" ]]; then
    ok "Drive backups folder is readable"
    say "       latest seen: $latest_backup"
  else
    warn "Drive backups folder is empty or slow to read"
  fi
else
  warn "Drive backups folder not found"
fi

section "Tools"
if have node; then
  if node --check "$PRIVATE_JS" >/dev/null 2>&1 && node --check "$PUBLIC_JS" >/dev/null 2>&1; then
    ok "Node syntax check passed for private/public JS"
  else
    fail "Node syntax check failed"
  fi
else
  warn "node is not installed, skipped JS syntax check"
fi

if git diff --check >/dev/null 2>&1; then
  ok "git diff --check passed"
else
  fail "git diff --check found whitespace/conflict-marker issues"
fi

section "Summary"
say "OK:   $PASS_COUNT"
say "WARN: $WARN_COUNT"
say "FAIL: $FAIL_COUNT"

if [[ "$FAIL_COUNT" -gt 0 ]]; then
  say "Result: stop before patching; fix FAIL items first."
  exit 2
fi

if [[ "$WARN_COUNT" -gt 0 ]]; then
  say "Result: usable, but read WARN items before patching."
  exit 0
fi

say "Result: clean baseline for a small patch."
exit 0
