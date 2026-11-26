# Registro de artículos · Rugby Nations Championship, finales (27–29 nov 2026)

Para que las siguientes ejecuciones no repitan tema ni slug. Hora en Europa/Madrid.

| Fecha publicación | T | Tema | Idioma | URL LIVE | Commit |
|---|---|---|---|---|---|
| 2026-11-25 18:16 | T−2 | «Ireland v Australia on Friday night near Sol: your plan for the rugby weekend»: 6 partidos en hora de Madrid, a qué hora llegar, cómo llegar desde Sol, punto de encuentro IE/AU, CTA Maps | EN | https://dublinersmadrid.es/rugby-nations-finals-weekend-madrid/ireland-australia-friday-night-plan/ | `5a5f0a46` (PR #101, merge `20c2206b`, gh-pages `a8cb0e5a`) |
| 2026-11-25 18:16 | T−2 | «Irlanda–Australia el viernes junto a Sol: plan del fin de semana de rugby» | ES | https://dublinersmadrid.es/es/rugby-nations-finals-fin-de-semana-sol/irlanda-australia-viernes-plan/ | `5a5f0a46` |
| 2026-11-26 12:00 | T−1 | «England v New Zealand on Saturday near Sol: your plan for the rugby weekend» | EN | https://dublinersmadrid.es/rugby-nations-finals-weekend-madrid/england-new-zealand-saturday-plan/ | (PR pending) |
| 2026-11-26 12:00 | T−1 | «Inglaterra–Nueva Zelanda el sábado junto a Sol: plan del fin de semana de rugby» | ES | https://dublinersmadrid.es/es/rugby-nations-finals-fin-de-semana-sol/inglaterra-nueva-zelanda-sabado-plan/ | (PR pending) |
| 2026-11-26 18:00 | T−1 | «France v South Africa final on Sunday near Sol: your plan for the rugby weekend» | EN | https://dublinersmadrid.es/rugby-nations-finals-weekend-madrid/france-south-africa-final-sunday-plan/ | (PR pending) |
| 2026-11-26 18:00 | T−1 | «Final Francia–Sudáfrica el domingo junto a Sol: plan del fin de semana de rugby» | ES | https://dublinersmadrid.es/es/rugby-nations-finals-fin-de-semana-sol/final-francia-sudafrica-domingo-plan/ | (PR pending) |

La hub EN y la ES enlazan cada artículo desde su LinkHub (mismo commit que el batch).

Temas/slugs ya usados (no repetir):
- ireland-australia-friday-night-plan
- irlanda-australia-viernes-plan
- england-new-zealand-saturday-plan
- inglaterra-nueva-zelanda-sabado-plan
- france-south-africa-final-sunday-plan
- final-francia-sudafrica-domingo-plan
- hubs `/rugby-nations-finals-weekend-madrid/`, `/es/rugby-nations-finals-fin-de-semana-sol/` (anteriores)

## QA LIVE · 25 nov 2026, 18:16 (Europa/Madrid)

Deploy `./scripts/deploy-gh-pages.sh` desde `main` en `20c2206b` → gh-pages `a8cb0e5a`. El build de Pages (creado 18:15:55, `built` a las 18:16:20, 25 s) salió a la primera, sin rebuild. Build local previo correcto (267 páginas, las dos URLs nuevas están en el sitemap).

Curl anti-caché (no-cache + query única):

| URL | HTTP | noindex | GA4 G-FRDF0849P3 | localo.site | prohibidas | enlace al artículo |
|---|---|---|---|---|---|---|
| /rugby-nations-finals-weekend-madrid/ireland-australia-friday-night-plan/ | 200 | no (index,follow) | sí | 0 | 0 | — |
| /es/rugby-nations-finals-fin-de-semana-sol/irlanda-australia-viernes-plan/ | 200 | no | sí | 0 | 0 | — |
| /rugby-nations-finals-weekend-madrid/ (hub EN) | 200 | no | sí | 0 | 0 | sí |
| /es/rugby-nations-finals-fin-de-semana-sol/ (hub ES) | 200 | no | sí | 0 | 0 | sí |

Prohibidas comprobadas: oficial, official, best, mejor, proyector, projector, aforo, capacidad, capacity; sin canales, marcas, precios ni otros bares en el texto. Nota: el teléfono del pub (+34 915 32 79 56) aparece solo en el pie y el JSON-LD comunes a todo el sitio (BaseLayout), no en el texto del artículo.
