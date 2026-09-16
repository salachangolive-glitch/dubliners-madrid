# Dubliners — domain flip checklist (DO NOT RUN until user authorises)

Internal only. Preview stays on GitHub Pages (`github.io`) with noindex until this is executed.

Current preview: `https://salachangolive-glitch.github.io/dubliners-madrid/`
GBP website today: Localo (do not switch until this list is done).
Cost lock: 0 € extra unless user authorises domain/DNS.

## 0. Before touching DNS
- [ ] Domain name chosen and paid
- [ ] HTTPS certificate will be automatic (GitHub Pages) or confirmed
- [ ] Freeze code except the flip itself
- [ ] Students V4 still frozen unless a real bug

## 1. Canonical host
- [ ] Canonical domain decided (`www` vs apex) — one host only
- [ ] HTTPS on that host
- [ ] Apex ↔ www redirect (301) so only one indexable origin

## 2. `src/site.ts`
- [ ] `SITE.siteUrl` = `https://<canonical-host>` (no github.io)
- [ ] `SITE.base` = `''` or `/` as required by the host
- [ ] `SITE.publicEmail` only after mailbox exists (never invent `@dubliners…`)
- [ ] Rebuild via `./scripts/deploy-gh-pages.sh` only

## 3. Robots / index
- [ ] `robots.txt`: `User-agent: *` + `Allow: /` (remove `Disallow: /`)
- [ ] Meta robots: `index,follow` (today hardcoded `noindex,follow` in `BaseLayout.astro`)
- [ ] `robots.txt` Sitemap: `https://<canonical-host>/sitemap-index.xml`

## 4. Canonical + hreflang
- [ ] EN canonical: `https://<canonical-host>/`
- [ ] ES canonical: `https://<canonical-host>/es/`
- [ ] Every other page: self-canonical on the new host
- [ ] hreflang `en` / `es` pairs (PATH_PAIRS) on the new host
- [ ] `x-default` → EN home (current rule)

## 5. Sitemap
- [ ] Regenerated sitemap lists only the canonical host
- [ ] No `github.io` URLs in sitemap
- [ ] Submit sitemap in Google Search Console (new property)

## 6. Schema
- [ ] `jsonLd.url` = canonical home EN or ES as now, but on new host
- [ ] Overnight hours stay Google format: one spec, `closes` earlier than `opens` on the opening day
- [ ] `sameAs`: Instagram (and others only if real)
- [ ] GEO: replace `40.4164, -3.7025` only after verifying the doorway of Calle de Espoz y Mina 7 (5 decimal places)
- [ ] Still no telephone in schema/web

## 7. Open Graph
- [ ] `og:url` / `og:image` absolute URLs on the canonical host
- [ ] Social share test EN + ES

## 8. github.io must not remain a duplicate
- [ ] Keep `noindex,follow` on github.io **or** 301 everything to the domain
- [ ] Confirm Search Console does not index `salachangolive-glitch.github.io/dubliners-madrid/`
- [ ] Inspect Home EN/ES + About EN/ES live HTML: canonical ≠ github.io

## 9. Search Console
- [ ] Add canonical-host property
- [ ] Verify HTTPS
- [ ] Submit sitemap
- [ ] URL inspection: Home EN, Home ES, About EN, About ES, What’s on
- [ ] Request indexing after robots allow

## 10. Off-site (needs user OK — not this agent until asked)
- [ ] GBP website URL → canonical domain (ask first; Localo stays until then)
- [ ] Localo website URL → canonical domain
- [ ] Ads final URL / sitelinks → canonical domain when campaigns use the site
- [ ] Instagram / directories if they still point at Localo or github.io

## 11. QA after flip
- [ ] 404 / leftover `/dubliners-madrid/` base paths
- [ ] EN↔ES switcher
- [ ] Sticky: Partidos | Cómo llegar | Horarios (until Contact email is live)
- [ ] Skip link keyboard
- [ ] Phone still 0 on web
- [ ] Students V4 strings still present
- [ ] Hours unchanged: Mon–Thu & Sun 12:00–02:00; Fri–Sat 12:30–02:30
