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

# Custom domain (apex) — CNAME must ship with dist for GitHub Pages
test -f dist/CNAME || { echo "MISSING dist/CNAME"; exit 1; }
grep -qx 'dublinersmadrid.es' dist/CNAME || { echo "CNAME content mismatch — abort"; exit 1; }
# Root deploy: built Home must not keep old project-pages base path
if grep -qE '/dubliners-madrid/' dist/index.html dist/es/index.html; then
  echo "Stale /dubliners-madrid/ base path in Home — abort"; exit 1
fi

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


HOME_EN="dist/index.html"
HOME_ES="dist/es/index.html"
ABOUT_EN="dist/about/index.html"
ABOUT_ES="dist/es/sobre-dubliners/index.html"
for f in "$HOME_EN" "$HOME_ES" "$ABOUT_EN" "$ABOUT_ES"; do
  test -f "$f" || { echo "MISSING $f"; exit 1; }
done
grep -q 'An Irish pub in the heart of Madrid' "$HOME_EN" || { echo "HOME EN H1 missing — abort"; exit 1; }
grep -q 'Tu pub irlandés junto a la Puerta del Sol' "$HOME_ES" || { echo "HOME ES H1 missing — abort"; exit 1; }
grep -q 'Where suits were once made' "$HOME_EN" || { echo "HOME EN brand line missing — abort"; exit 1; }
grep -q 'Donde antes se cosían trajes' "$HOME_ES" || { echo "HOME ES brand line missing — abort"; exit 1; }
grep -q 'The story behind Dubliners' "$ABOUT_EN" || { echo "ABOUT EN H1 missing — abort"; exit 1; }
grep -q 'La historia detrás de Dubliners' "$ABOUT_ES" || { echo "ABOUT ES H1 missing — abort"; exit 1; }
if grep -qiE 'UNESCO|Dubliners desde 1885|Dubliners since 1885' "$HOME_EN" "$HOME_ES" "$ABOUT_EN" "$ABOUT_ES"; then
  echo "Forbidden history claim — abort"; exit 1
fi


# Stale Home copy must never republish (auditor phrases + old SEO footer)
if grep -qE 'Deporte en directo y noches largas|Live sport and late nights|Dentro del pub|Inside the pub|Madera oscura|Dark wood, pints|mixed crowd|gente de todo tipo|cuando se echan|Irish pub near Sol · live sport|Pub irlandés cerca de Sol · deporte' "$HOME_EN" "$HOME_ES"; then
  echo "Stale Home copy or old SEO footer — abort"; exit 1
fi
grep -q 'Discover our story' "$HOME_EN" || { echo "HOME EN About CTA missing — abort"; exit 1; }
grep -q 'Descubre nuestra historia' "$HOME_ES" || { echo "HOME ES About CTA missing — abort"; exit 1; }
grep -q 'Dubliners Madrid · Calle de Espoz y Mina 7 · Madrid' "$HOME_EN" || { echo "HOME EN brand footer missing — abort"; exit 1; }
grep -q 'Dubliners Madrid · Calle de Espoz y Mina 7 · Madrid' "$HOME_ES" || { echo "HOME ES brand footer missing — abort"; exit 1; }

grep -qE 'Barragán|Barragan' "$HOME_EN" || { echo "HOME EN Barragán missing — abort"; exit 1; }
grep -q '1885' "$HOME_EN" || { echo "HOME EN 1885 missing — abort"; exit 1; }
grep -qE 'Barragán|Barragan' "$HOME_ES" || { echo "HOME ES Barragán missing — abort"; exit 1; }
grep -q '1885' "$HOME_ES" || { echo "HOME ES 1885 missing — abort"; exit 1; }
if grep -q 'The rooms' "$HOME_EN"; then
  echo "Stale EN heading The rooms — abort"; exit 1
fi


touch dist/.nojekyll
MSG="${1:-deploy: Pages from $(git rev-parse --short HEAD)}"
npx gh-pages -d dist -b gh-pages -m "$MSG"
echo "Published gh-pages from main $(git rev-parse HEAD)"
