#!/usr/bin/env bash
set -euo pipefail

MIN_LEN=10
ERRORS=0

# On PR events GitHub provides base/head SHAs
BASE_SHA="${GITHUB_BASE_SHA:-${GITHUB_EVENT_PULL_REQUEST_BASE_SHA:-}}"
HEAD_SHA="${GITHUB_HEAD_SHA:-${GITHUB_EVENT_PULL_REQUEST_HEAD_SHA:-}}"

# Fallback: if base/head not set, try to use github event payload
if [[ -z "$BASE_SHA" || -z "$HEAD_SHA" ]]; then
  BASE_SHA=$(jq -r .pull_request.base.sha <"$GITHUB_EVENT_PATH" 2>/dev/null || true)
  HEAD_SHA=$(jq -r .pull_request.head.sha <"$GITHUB_EVENT_PATH" 2>/dev/null || true)
fi

if [[ -z "$BASE_SHA" || -z "$HEAD_SHA" ]]; then
  echo "Could not determine base/head SHAs. Exiting with failure."
  exit 1
fi

# Ensure git history available
git fetch --no-tags --prune origin "$BASE_SHA" "$HEAD_SHA" || true

# Iterate commit SHAs between base and head
commits=$(git rev-list --no-merges "$BASE_SHA".."$HEAD_SHA" || true)

if [[ -z "$commits" ]]; then
  echo "No commits to inspect."
  exit 0
fi

for sha in $commits; do
  # Get full commit message, trim leading/trailing whitespace
  msg=$(git log -1 --pretty=%B "$sha" | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//')
  # Remove newlines for length check (we check total characters)
  msg_singleline=$(echo -n "$msg" | tr -d '\n' | tr -d '\r')
  len=${#msg_singleline}
  if [[ $len -lt $MIN_LEN ]]; then
    echo "Commit $sha message too short ($len < $MIN_LEN):"
    echo ">> ${msg_singleline:-<empty>}"
    ERRORS=$((ERRORS+1))
  fi
done

if [[ $ERRORS -gt 0 ]]; then
  echo
  echo "Commit message policy failed: $ERRORS offending commit(s)."
  echo "Policy: commit message must be at least $MIN_LEN characters (non-newline)."
  exit 2
fi

echo "All commit messages comply (>= $MIN_LEN chars)."
exit 0
