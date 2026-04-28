#!/usr/bin/env bash
# PreToolUse hook: bloquea Edit/Write a package-lock.json.
# El lockfile siempre debe regenerarse vía `npm install`, nunca editarse a mano.

set -euo pipefail

input=$(cat)
file_path=$(echo "$input" | jq -r '.tool_input.file_path // empty')

if [[ "$file_path" == *package-lock.json ]]; then
  jq -n '{
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "deny",
      permissionDecisionReason: "package-lock.json no debe editarse a mano. Usá `npm install` para regenerarlo correctamente."
    }
  }'
fi

exit 0
