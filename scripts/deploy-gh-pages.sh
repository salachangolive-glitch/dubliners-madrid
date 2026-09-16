#!/usr/bin/env bash
# Dubliners Pages deploy — NEVER publish a stale snapshot.
# Rule: origin/main tip → clean build → gh-pages. Cost 0 €.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

git fetch origin
git checkout main
git pull --ff-only origin main

echo "Building from $(git rev-parse --short HEAD) $(git log -1 --pretty=%s)"

npm ci --omit=dev 2>/dev/null || npm install
npm run build

EN="dist/international-students-pub-madrid/index.html"
ES="dist/es/estudiantes-internacionales/index.html"
for f in "$EN" "$ES"; do
  test -f "$f" || { echo "MISSING $f"; exit 1; }
done
grep -q 'An Irish pub with a story to tell' "$EN" || { echo "EN H1 missing — abort deploy"; exit 1; }
grep -qE 'Barragán|Barragan' "$EN" || { echo "EN Barragán missing — abort"; exit 1; }
grep -q 'Where suits were once made' "$EN" || { echo "EN brand line missing — abort"; exit 1; }
grep -q 'Un pub irlandés con historia' "$ES" || { echo "ES H1 missing — abort"; exit 1; }
grep -q 'Donde antes se cosían trajes' "$ES" || { echo "ES brand line missing — abort"; exit 1; }
if grep -qE 'English-friendly pub near Sol|Easy in English|Midweek near Sol' "$EN"; then
  echo "Stale EN copy detected — abort"; exit 1
fi

touch dist/.nojekyll
MSG="${1:-deploy: Pages from $(git rev-parse --short HEAD)}"
npx gh-pages -d dist -b gh-pages -m "$MSG"
echo "Published gh-pages from main $(git rev-parse HEAD)"
