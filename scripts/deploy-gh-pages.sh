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
# Static agenda (Today/Hoy) follows Madrid calendar + clock at build, not UTC on the runner.
# Use the real local offset (CET/CEST). A pinned T12:00:00+01:00 date-stamp is fine for the
# calendar day; the previous form still went stale between deploys if the runner date drifted.
if [ -z "${AGENDA_NOW:-}" ]; then
  AGENDA_NOW="$(TZ=Europe/Madrid date +%Y-%m-%dT%H:%M:%S%z | sed -E 's/([+-][0-9]{2})([0-9]{2})$/\1:\2/')"
  export AGENDA_NOW
fi
echo "AGENDA_NOW=$AGENDA_NOW (Europe/Madrid)"
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
grep -q 'Erasmus &amp; international students pub near Sol' "$EN" || grep -q 'Erasmus & international students pub near Sol' "$EN" || { echo "EN Erasmus H1 missing — abort deploy"; exit 1; }
grep -qE 'Barragán|Barragan' "$EN" || { echo "EN Barragán missing — abort"; exit 1; }
grep -q 'Where suits were once made' "$EN" || { echo "EN brand line missing — abort"; exit 1; }
grep -q 'Pub Erasmus y estudiantes internacionales cerca de Sol' "$ES" || { echo "ES Erasmus H1 missing — abort"; exit 1; }
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
grep -q 'An Irish pub near Puerta del Sol, in the heart of Madrid' "$HOME_EN" || { echo "HOME EN H1 missing — abort"; exit 1; }
grep -q 'Un pub irlandés cerca de Puerta del Sol, en el corazón de Madrid' "$HOME_ES" || { echo "HOME ES H1 missing — abort"; exit 1; }
if grep -q '4 BARS. ONE FAN WEEKEND' "$HOME_EN" "$HOME_ES"; then
  echo "Fan-weekend chrome still in Home — abort"; exit 1
fi
if grep -q 'CUATRO BARES. UN GRAN PUNTO DE ENCUENTRO' "$HOME_ES"; then
  echo "Fan-weekend chrome still in Home ES — abort"; exit 1
fi
grep -q 'Irish Pub Madrid, less than a minute from Sol' "$HOME_EN" || { echo "HOME EN title missing Sol phrase — abort"; exit 1; }
grep -q 'Pub irlandés Madrid, a menos de un minuto de Sol' "$HOME_ES" || { echo "HOME ES title missing Sol phrase — abort"; exit 1; }
grep -q 'less than a minute from Sol' "$HOME_EN" || { echo "HOME EN meta Sol phrase missing — abort"; exit 1; }
grep -q 'a menos de un minuto de Sol' "$HOME_ES" || { echo "HOME ES meta Sol phrase missing — abort"; exit 1; }
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


# Ireland hubs: played Nov 2026 Tests must not remain EventScheduled SportsEvents
python3 - <<'PY' || exit 1
import json, re, pathlib, sys
played = (
    "Ireland v Argentina", "Ireland v Fiji", "Ireland v South Africa",
    "Irlanda–Argentina", "Irlanda–Fiyi", "Irlanda–Sudáfrica",
)
files = [
    pathlib.Path("dist/ireland-rugby-madrid/index.html"),
    pathlib.Path("dist/es/rugby-irlanda-madrid/index.html"),
]
for f in files:
    if not f.is_file():
        sys.stderr.write(f"MISSING {f}\n")
        sys.exit(1)
    html = f.read_text()
    for m in re.finditer(r'<script type="application/ld\+json">(.*?)</script>', html, re.S):
        try:
            data = json.loads(m.group(1))
        except json.JSONDecodeError:
            continue
        if not isinstance(data, dict) or data.get("@type") != "SportsEvent":
            continue
        status = str(data.get("eventStatus", ""))
        name = str(data.get("name", ""))
        if status.endswith("EventScheduled") and any(p in name for p in played):
            sys.stderr.write(f"stale EventScheduled SportsEvent in {f}: {name}\n")
            sys.exit(1)
print("Ireland hub SportsEvent check OK")
PY

# What's On / Partidos: do not leave false empty-today copy when today's rows exist
python3 - <<'PY' || exit 1
from pathlib import Path
import re, sys
for f in [Path("dist/whats-on/index.html"), Path("dist/es/partidos/index.html")]:
    if not f.is_file():
        sys.stderr.write(f"MISSING {f}\n")
        sys.exit(1)
    html = f.read_text()
    m = re.search(r'data-fixture-slot="today"(.*?)data-fixture-slot="week"', html, re.S)
    if not m:
        sys.stderr.write(f"no today slot in {f}\n")
        sys.exit(1)
    col = m.group(1)
    empty = re.search(r'data-fixture-empty[^>]*>([^<]*)', col)
    empty_text = (empty.group(1) if empty else "").strip()
    has_rows = "data-date-key=" in col
    if has_rows and empty_text:
        sys.stderr.write(f"false empty-today copy in {f}: {empty_text!r}\n")
        sys.exit(1)
print("Fixture board empty-today check OK")
PY

touch dist/.nojekyll
MSG="${1:-deploy: Pages from $(git rev-parse --short HEAD)}"
npx gh-pages -d dist -b gh-pages -m "$MSG"
echo "Published gh-pages from main $(git rev-parse HEAD)"
