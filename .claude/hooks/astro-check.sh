#!/usr/bin/env bash
# PostToolUse hook: corre `astro check` tras Edit/Write a .astro / .ts / .tsx.
# Reporta errores de tipo via stderr (exit 2) para que Claude los vea y corrija.
# No bloquea (la edición ya pasó); solo informa.

set -euo pipefail

input=$(cat)
file_path=$(echo "$input" | jq -r '.tool_input.file_path // empty')

if [[ -z "$file_path" ]]; then
  exit 0
fi

case "$file_path" in
  *.astro|*.ts|*.tsx) ;;
  *) exit 0 ;;
esac

cd "$CLAUDE_PROJECT_DIR"

if ! output=$(npx --no-install astro check --minimumSeverity error 2>&1); then
  echo "astro check encontró errores tras editar $file_path:" >&2
  echo "$output" >&2
  exit 2
fi

exit 0
