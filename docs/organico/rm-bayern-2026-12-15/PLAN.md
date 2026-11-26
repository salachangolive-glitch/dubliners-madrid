> **Cursor orgánico · 26 nov 2026 (DG):** Hasta el lunes 30 nov publica Cursor, no el bot Grok. **Todo el deporte importante en LIVE** en Dubliners (NFL y baloncesto incluidos). En **artículos nuevos** no usar «sin reservas», «orden de llegada» ni «first come first served». RM–Bayern basket (15 dic): emisión confirmada — ignorar «no confirmada» / «sin prometer emisión» en texto antiguo del plan.

# Plan orgánico · Real Madrid–FC Bayern Munich (baloncesto)

Fecha del plan: miércoles 25 de noviembre de 2026, Europa/Madrid.  
Evento: **martes 15 de diciembre de 2026, 20:45 hora de Madrid**, EuroLeague jornada 17, **Movistar Arena**.  
Regla del dueño (vía DG, 25 nov 16:40): Google Ads solo para fútbol. El resto, orgánico con la antelación de una campaña de pago, y más artículos al acercarse el evento (hasta 2–3 al día). Sin prometer emisión no confirmada. Sin noindex y sin borrar nada.

## Ficha verificada (25 nov 2026)

| Campo | Dato | Fuente |
|---|---|---|
| Partido | Real Madrid–FC Bayern Munich (baloncesto) | Feed EuroLeague E2026_166; página del Real Madrid |
| Competición | EuroLeague 2026-27, temporada regular, jornada 17 | Feed: `round.name = Round 17`, `code = 166` |
| Fecha y hora | Mar 15 dic 2026, **20:45 Madrid** (CET = 19:45 UTC) | Feed incrowd: `date = 2026-12-15T19:45:00.000Z`, `confirmedDate` y `confirmedTime` = true. Radar FUENTES-PARTIDOS-COMPARTIDAS.md (~línea 230) y SEMANA-2026-11-25.md. |
| Sede | Movistar Arena, Avenida de Felipe II, 28009 Madrid | Feed (`venue.name = MOVISTAR ARENA`); realmadrid.com (partido y ficha del pabellón) |
| Emisión en Dubliners | **No confirmada** | Orden del dueño / DG: no poner «en directo» / LIVE / «en nuestras pantallas» sobre este partido |

Fuentes consultadas el 25 nov:

- https://feeds.incrowdsports.com/provider/euroleague-feeds/v2/competitions/E/seasons/E2026/games?teamCode=MAD (HTTP 200)
- https://www.realmadrid.com/es-ES/baloncesto/partidos/euroliga/real-madrid-fc-bayern-munich/15-12-2026 (HTTP 200; el «15 dic - 19:45» visible en esa página es el instante UTC)
- https://www.realmadrid.com/es-ES/el-club/movistar-arena (HTTP 200; Metro Goya L2 y L4, O’Donnell L6, Cercanías Recoletos)
- `fcbayern.com/basketball` y `euroleaguebasketball.net`: no verificables hoy (403 / 429) → **no enlazadas**

## URLs creadas (indexables, sitemap automático)

Hubs (punto de encuentro / Treffpunkt / meeting point):

- https://dublinersmadrid.es/bayern-basketball-fans-madrid/ (EN)
- https://dublinersmadrid.es/es/aficionados-bayern-baloncesto-madrid/ (ES)
- https://dublinersmadrid.es/de/bayern-basketball-fans-madrid/ (DE)

Artículo T−20 (25 nov):

- https://dublinersmadrid.es/de/bayern-basketball-fans-madrid/was-ihr-vor-dem-spiel-wissen-muesst/ (DE)
- https://dublinersmadrid.es/bayern-basketball-fans-madrid/what-to-know-before-the-game/ (EN)

No se reutiliza `/bayern-fans-madrid/` (sigue siendo la guía de fútbol del 3 nov). Esa página y `/de/bayern-fans-madrid/` enlazan a la nueva hub. También What’s On y Partidos. Fila de agenda en `fixtures.ts` con `confirmedOnScreens: false` (fuera de la ventana del tablero hasta el 29 nov).

## Commits y PR

| Qué | SHA / ref | Hora (Europa/Madrid) |
|---|---|---|
| Commit de contenido | `32a970c4` | 25 nov 2026, tarde |
| Merge a `main` | `c4644306` | 25 nov 2026, 16:51 |
| PR | [#100](https://github.com/salachangolive-glitch/dubliners-madrid/pull/100) (MERGED) | 16:51 |
| Publicación `gh-pages` | `04daa10b` | 25 nov 2026, 16:52 |

Deploy: `./scripts/deploy-gh-pages.sh` desde `main` `c4644306`. AGENDA_NOW=2026-11-25T16:52:15+01:00.

## Calendario de artículos hasta el 15 dic

Todos son punto de encuentro / guía práctica. **Ninguno promete emisión.** Idiomas: DE+EN como base (afición visitante); ES cuando el tema también sirve a quien vive en Madrid. Tras publicar, anotar en `REGISTRO.md` para no repetir tema ni slug.

### T−20 … T−15 (25–30 nov) · 1 artículo en toda la ventana

| T | Fecha | Tema | Idioma | Slug sugerido |
|---|---|---|---|---|
| T−20 | mié 25 nov | Qué hay que saber antes del partido (ficha, Treffpunkt, cómo llegar, sin reservas) | DE + EN | **PUBLICADO** `/de/bayern-basketball-fans-madrid/was-ihr-vor-dem-spiel-wissen-muesst/` · `/bayern-basketball-fans-madrid/what-to-know-before-the-game/` |

### T−14 … T−8 (1–7 dic) · uno cada 2–3 días

| T | Fecha | Tema | Idioma | Slug sugerido |
|---|---|---|---|---|
| T−14 | mar 1 dic | Llegada a Madrid: del aeropuerto o de Atocha a Sol, y de ahí al pub | DE + EN | `/de/bayern-basketball-fans-madrid/ankunft-in-madrid/` · `/bayern-basketball-fans-madrid/arriving-in-madrid/` |
| T−11 | vie 4 dic | De Sol al Movistar Arena en transporte público (Goya L2/L4, O’Donnell L6, crtm.es; sin inventar tiempos) | DE + ES + EN | `/de/bayern-basketball-fans-madrid/von-der-sol-zur-movistar-arena/` · `/bayern-basketball-fans-madrid/sol-to-movistar-arena/` · `/es/aficionados-bayern-baloncesto-madrid/de-sol-al-movistar-arena/` |
| T−8 | lun 7 dic | Antes y después del partido: horario del martes, sin reservas, reagruparse en Sol | DE + EN | `/de/bayern-basketball-fans-madrid/vor-und-nach-dem-spiel/` · `/bayern-basketball-fans-madrid/before-and-after-the-game/` |

### T−7 … T−3 (8–12 dic) · 1 al día

| T | Fecha | Tema | Idioma | Slug sugerido |
|---|---|---|---|---|
| T−7 | mar 8 dic | Una semana: plan del martes 15 (horario, Treffpunkt, ruta al pabellón) | DE + EN | `/de/bayern-basketball-fans-madrid/eine-woche-vorher/` · `/bayern-basketball-fans-madrid/one-week-to-go/` |
| T−6 | mié 9 dic | Dónde es Dubliners: dirección, mapa, «Route planen», a menos de un minuto de Sol | DE + ES | `/de/bayern-basketball-fans-madrid/wo-ist-dubliners/` · `/es/aficionados-bayern-baloncesto-madrid/donde-esta-dubliners/` |
| T−5 | jue 10 dic | Noche de EuroLeague en transporte público: app de Metro y crtm.es, sin tiempos inventados | DE + EN | `/de/bayern-basketball-fans-madrid/oeffentlicher-verkehr-spieltag/` · `/bayern-basketball-fans-madrid/match-night-public-transport/` |
| T−4 | vie 11 dic | El centro en diciembre: quedar en Dubliners antes de ir al pabellón (luces / Plaza Mayor solo como contexto, sin mezclar fichas) | DE + EN | `/de/bayern-basketball-fans-madrid/dezember-im-zentrum/` · `/bayern-basketball-fans-madrid/december-in-the-centre/` |
| T−3 | sáb 12 dic | Fin de semana previo: plan del sábado y el domingo hasta el martes | DE + ES + EN | `/de/bayern-basketball-fans-madrid/wochenende-davor/` · `/bayern-basketball-fans-madrid/weekend-before/` |

### T−2 … T0 (13–15 dic) · 2–3 al día

| T | Fecha | Tema | Idioma | Slug sugerido |
|---|---|---|---|---|
| T−2 a | dom 13 dic (mañana) | Lista práctica de los dos días previos (qué está confirmado: hora, sede, Treffpunkt) | DE + EN | `/de/bayern-basketball-fans-madrid/checkliste/` · `/bayern-basketball-fans-madrid/checklist/` |
| T−2 b | dom 13 dic (tarde) | Cómo quedar en Dubliners antes de salir hacia el Movistar Arena | DE + EN | `/de/bayern-basketball-fans-madrid/treffen-vor-der-halle/` · `/bayern-basketball-fans-madrid/meet-before-the-arena/` |
| T−1 a | lun 14 dic (mañana) | Mañana en el Movistar Arena: lo que está confirmado (fecha, 20:45, sede) | DE + EN | `/de/bayern-basketball-fans-madrid/morgen-in-der-arena/` · `/bayern-basketball-fans-madrid/tomorrow-at-the-arena/` |
| T−1 b | lun 14 dic (tarde) | Plan de la tarde del martes, hora a hora, sin afirmar emisión | DE + ES + EN | `/de/bayern-basketball-fans-madrid/dienstag-stunde-fuer-stunde/` · `/bayern-basketball-fans-madrid/tuesday-hour-by-hour/` |
| T0 a | mar 15 dic (mañana) | Hoy es el día: Treffpunkt abierto desde las 12:00, sin reservas | DE + EN + ES | `/de/bayern-basketball-fans-madrid/heute-spieltag/` · `/bayern-basketball-fans-madrid/game-day/` · `/es/aficionados-bayern-baloncesto-madrid/hoy-dia-de-partido/` |
| T0 b | mar 15 dic (mediodía) | De Sol al pabellón hoy (mismas paradas verificadas; recordar crtm.es) | DE + ES | `/de/bayern-basketball-fans-madrid/heute-zur-arena/` · `/es/aficionados-bayern-baloncesto-madrid/hoy-al-pabellon/` |
| T0 c | mar 15 dic (noche, post partido) | Después del partido: volver a Sol, Dubliners abierto hasta las 02:00 | DE + EN | `/de/bayern-basketball-fans-madrid/nach-dem-spiel/` · `/bayern-basketball-fans-madrid/after-the-game/` |

Si un día no da tiempo a dos piezas, no compensar con copia que prometa emisión. No repetir un slug ya anotado en `REGISTRO.md`.

## Notas de ejecución

- CTA Maps (prioridad arriba): `https://www.google.com/maps/dir/?api=1&destination=Dubliners+Madrid&destination_place_id=ChIJLdKNhYAoQg0RE6Nxotwa1zw`
- Frases obligatorias: «a menos de un minuto de Sol» / «less than a minute from Sol» / «weniger als eine Minute von der Sol»; «sin reservas, acceso por orden de llegada».
- Prohibido en la copia de estas URLs: oficial, best, mejor, proyector, aforo/capacity, canales de TV, otros bares, teléfonos, «en directo», LIVE, «en nuestras pantallas» sobre este partido, tiempos de trayecto inventados.
- PR #76 no se ha tocado.
- Localo: el envío de textos GBP lo hace el agente Dubliners / el padre, no esta ejecución.
