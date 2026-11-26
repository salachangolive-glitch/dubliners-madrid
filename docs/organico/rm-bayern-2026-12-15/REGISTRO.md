# Registro de artículos · Real Madrid–FC Bayern Munich (baloncesto, 15 dic 2026)

Para que las siguientes ejecuciones no repitan tema ni slug. Hora en Europa/Madrid.

| Fecha publicación | T | Tema | Idioma | URL LIVE | Commit |
|---|---|---|---|---|---|
| 2026-11-25 (T−20) | T−20 | Hub punto de encuentro / Treffpunkt / meeting point (dirección, horario, mapa, CTA Maps, Sol → Movistar Arena, antes y después, sin reservas). Emisión no confirmada. | EN | https://dublinersmadrid.es/bayern-basketball-fans-madrid/ | `32a970c4` (merge `c4644306`, gh-pages `04daa10b`) |
| 2026-11-25 (T−20) | T−20 | Misma hub | ES | https://dublinersmadrid.es/es/aficionados-bayern-baloncesto-madrid/ | `32a970c4` |
| 2026-11-25 (T−20) | T−20 | Misma hub | DE | https://dublinersmadrid.es/de/bayern-basketball-fans-madrid/ | `32a970c4` |
| 2026-11-25 (T−20) | T−20 | Artículo guía: «Bayern-Fans in Madrid: was ihr vor dem Spiel wissen müsst» | DE | https://dublinersmadrid.es/de/bayern-basketball-fans-madrid/was-ihr-vor-dem-spiel-wissen-muesst/ | `32a970c4` |
| 2026-11-25 (T−20) | T−20 | Artículo guía: «Bayern fans in Madrid: what you need to know before the game» | EN | https://dublinersmadrid.es/bayern-basketball-fans-madrid/what-to-know-before-the-game/ | `32a970c4` |

Temas/slugs ya usados (no repetir):

- was-ihr-vor-dem-spiel-wissen-muesst
- what-to-know-before-the-game
- hubs `/bayern-basketball-fans-madrid/`, `/de/bayern-basketball-fans-madrid/`, `/es/aficionados-bayern-baloncesto-madrid/`

## QA LIVE · 25 nov 2026, 18:03 (Europa/Madrid)

Commit en `gh-pages`: `04daa10b` (deploy de `c4644306`, PR #100). El build de Pages de las 16:59 (build 1402705334) se quedó colgado en `building` (duration 0, updated_at congelado en 15:59:46Z) y las 5 URLs devolvían 404. A las 17:58 se ejecutó `./scripts/deploy-gh-pages.sh` desde `main` actualizado: el árbol coincidía con `04daa10b`, no hubo commit nuevo. Se pidió un rebuild con `POST /pages/builds`. El build colgado pasó a `errored` («Page build failed.»). El nuevo build del mismo `04daa10b` (creado 17:59:44, `built` a las 18:00:12, duration 28441 ms) y el workflow `pages-build-deployment` 45659921361 (32 s, success) dejaron el sitio en `status: built`.

Curl anti-caché a las 18:03 (Europa/Madrid): las 5 URLs responden 200, `robots=index,follow` (sin noindex), GA4 `G-FRDF0849P3`, 0 `localo.site`, 0 palabras prohibidas (oficial, official, best, mejor, proyector, «en directo»/LIVE sobre este partido).

| URL | HTTP | noindex | GA4 | localo.site | prohibidas |
|---|---|---|---|---|---|
| https://dublinersmadrid.es/bayern-basketball-fans-madrid/ | 200 | no | sí | 0 | 0 |
| https://dublinersmadrid.es/es/aficionados-bayern-baloncesto-madrid/ | 200 | no | sí | 0 | 0 |
| https://dublinersmadrid.es/de/bayern-basketball-fans-madrid/ | 200 | no | sí | 0 | 0 |
| https://dublinersmadrid.es/bayern-basketball-fans-madrid/what-to-know-before-the-game/ | 200 | no | sí | 0 | 0 |
| https://dublinersmadrid.es/de/bayern-basketball-fans-madrid/was-ihr-vor-dem-spiel-wissen-muesst/ | 200 | no | sí | 0 | 0 |

LIVE y QA OK. URLs EN/DE de la hub enviadas a Localo para el post GBP del Bayern del mar 8 dic, cuando el dueño lo confirme. No se avisó al DG ni al dueño.
