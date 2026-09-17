# Dubliners Madrid — official website (V1)

Static Astro site for Dubliners Irish pub, Calle de Espoz y Mina 7, 28012 Madrid.

- **Pre-prod domain:** https://dublinersmadrid.es/ (apex; `noindex` until GO LIVE)
- **Legacy Pages path:** https://salachangolive-glitch.github.io/dubliners-madrid/
- **Repo:** https://github.com/salachangolive-glitch/dubliners-madrid
- **Stack:** Astro + TypeScript, `output: 'static'`, `site: dublinersmadrid.es`, `base: '/'` (apex)
- **Deploy (V1):** `gh-pages` branch (built `dist`). Free GitHub Pages.
- **Actions:** see `docs/github-pages-actions-workflow.yml.example` (needs `workflow` token scope to commit under `.github/workflows/`).

## Develop

```bash
npm install
npm run dev
npm run build
```

## Notes

- Hours: Mon–Thu & Sun 12:00–02:00; Fri–Sat 12:30–02:30. Do not invent shot start times, fixtures, terrace, live music, or reservations.
- Photos: original venue images in `public/images/`.
- Independent of any other venue brands.

## Deploy rule (P2 overwrite protection)

**Always** publish from current `origin/main` tip:

```bash
./scripts/deploy-gh-pages.sh
```

What’s On / fixtures updates must `git pull` latest `main`, edit fixtures only, commit to `main`, then run that script — never `gh-pages -d` from an old local checkout or cached `dist`.
