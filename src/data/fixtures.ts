/**
 * Kick-offs Europe/Madrid. Curated commercially important fixtures only.
 * confirmedOnScreens = Radar Confirmed + kick-off inside opening hours (src/data/hours.ts).
 * Not a TV-rights inference on its own. Owner permanent 8 Oct 2026: Dubliners has
 * DAZN + Movistar + Premier Sports.
 * - Rows with dateKey < 2026-10-13 (incl. Mon 12 Levante–Sevilla + Coventry–Newcastle) RETIRED 13 Oct (morning block).
 * - Tue 13 UCL J2 rows (Atlético–Man Utd, Galatasaray–Barcelona, Arsenal–Lille, Villarreal–Napoli) RETIRED 14 Oct (morning block).
 * - Wed 14 UCL J2 rows (LASK–Liverpool, Feyenoord–Como, Roma–Real Madrid, Man City–PSG, Betis–Porto, Aston Villa–Fenerbahçe) RETIRED 15 Oct (morning block).
 * - Thu 15 UEL/UECL rows (Craiova–Getafe, Brighton–Žalgiris, USG–Real Sociedad, Celta–Juventus, Lyon–Crystal Palace, Torreense–Sunderland, Bournemouth–Sturm Graz, Benfica–Celtic, Marseille–Olympiacos) RETIRED 16 Oct (morning block).
 * - UCL J2 Wed 14 LASK–Liverpool 18:45, Roma–Real Madrid, Man City–PSG, Betis–Porto,
 *   Aston Villa–Fenerbahçe 21:00 (Movistar Liga de Campeones; Roma–RM movistarplus.es ficha).
 * - UEL J2 Thu 15 USG–Real Sociedad 18:45, Celta–Juventus 21:00 (movistarplus.es fichas 11 Oct).
 * - Conference: Thu 15 Craiova–Getafe 18:45; Thu 22 Getafe–Lugano 18:45 (M+ LDC).
 * - LaLiga J9 Fri 16 Deportivo–Levante 21:00 (LALIGA TV M+ — corrected 13 Oct per movistar.es guide), Sat 17 Espanyol–Atlético 14:00 DAZN,
 *   Betis–Barcelona 18:30 DAZN, Valencia–Athletic 21:00 M+, Sun 18 Real Madrid–Sevilla 21:00 M+,
 *   Mon 19 Getafe–Rayo 21:00 DAZN.
 * - Premier MW7 times premierleague.com/en/news/4688862; channel DAZN (all Premier League in
 *   Spain on DAZN): Sat 17 Everton–Chelsea 13:30, Brentford–Liverpool 16:00, Man City–Ipswich
 *   16:00, Newcastle–Villa 18:30; Sun 18 Leeds–Man Utd 15:00, Forest–Arsenal 17:30;
 *   Mon 19 Tottenham–Coventry 21:00 (Radar 2026-10-12-profundo Confirmed, DAZN) ADDED 12 Oct.
 * - UCL: Wed 21 Real Madrid–Leipzig 21:00 Movistar Plus+.
 * - 17 Oct: LaLiga J10 (23–26 Oct, laliga.com: UTC times → Madrid, CEST until 25 Oct 03:00 then CET) and Copa del Rey R1
 *   (27–29 Oct, rfef.es «hora peninsular», 56 ties) ADDED per owner rule (all matches inside opening hours). Source Radar
 *   2026-10-17-j10-copa. Channel only «DAZN» / «Movistar LALIGA»; Thu 29 Copa rows NO channel (pending).
 * - 17 Oct (morning block): Premier League MW8 ADDED (premierleague.com/en/news/4688862 + 4705445: Liverpool–Brighton moved to
 *   Sun 25 14:00 GMT, confirmed liverpoolfc.com): Sat 24 Villa–Man City 13:30, Arsenal–Everton 16:00, Chelsea–Spurs 18:30 (BST+1);
 *   Sun 25 Palace–Newcastle, Liverpool–Brighton, Man Utd–Bournemouth 15:00 (GMT+1 = CET). Channel DAZN (as MW7).
 * - 17 Oct: NFL Week 7 Sun 25 Oct ADDED — owner confirmed via DG 16 Oct Dubliners shows 14:30, 18:00, 21:05, 21:25 slots.
 *   nfl.com/schedules/2026/by-week/week-7 UTC 13:30Z/17:00Z/20:05Z/20:25Z → CET (UTC+1, Madrid already on winter time).
 *   SNF Chiefs–Seahawks 01:20 Mon and MNF Cowboys–Eagles 01:15 Tue OMITTED (not confirmed; would run past close 02:00).
 * - 17 Oct (DG decision): URC Leinster–Munster Sat 24 Oct 19:00 Madrid (18:00 IST, avivastadium.ie + RTÉ/Sky), NO channel.
 * - 24 Oct (morning): Fri 23 rows (Ipswich–Forest, Alavés–Málaga, 4 URC/Premiership, Bulls–Bucks) + 01:00 Sat 24 NBA (5) RETIRED.
 * - 21 Oct (morning): Tue 20 rows (UCL J3 Tue, NBA, Deep Purple) + 01:00 Wed 21 NBA/NHL RETIRED.
 * - 20 Oct (morning): Mon 19 Getafe–Rayo, Tottenham–Coventry + NHL 01:00 Tue 20 (Ducks–Rangers, Avalanche–Flyers) RETIRED.
 * - 18 Oct: rows dateKey <= 2026-10-17 RETIRED (morning). NFL Sun 18 Oct (nfl.com 2026 week 6, ET+6 → CEST; Away vs Home like other NFL rows) ADDED,
 *   11 games, no channel; Cowboys at Packers 02:20 Mon EXCLUDED (Sunday close 02:00).
 * - 18 Oct (DG P1, Radar 2026-10-18-escocia): watch-with-other-fans rows, NO channel: Bulls–Ulster 24/10 13:45, Motherwell–Hearts 25/10 15:00,
 *   Stormers–Ulster + Rangers–Aberdeen (Premier Sports Cup SF) + Munster–Sharks 31/10, Hearts–Hibernian (SF) + Liverpool–Arsenal 1/11.
 *   Sources: spfl.co.uk, rangers.co.uk, ulster.rugby, munsterrugby.ie/sharksrugby.co.za, premierleague.com. Celtic–Celta note added.
 *   Sky-only / no-TV Scottish games NOT listed (Celtic–Hearts, Hibernian–Celtic, Hearts–Rangers, Falkirk–Celtic, Rangers–St Johnstone).
 * - 18 Oct: NFL Sun 1 Nov (nfl.com 2026 week 8 + ESPN UTC; US EST from 1 Nov → ET+6): 8 games 19:00, Chargers–Rams 22:05,
 *   Chiefs–Broncos + Patriots–Dolphins 22:25. No international game that week. Eagles at Commanders SNF 02:20 Mon EXCLUDED (Sun close 02:00).
 * - 18 Oct audit 19–25 Oct: + UCL MD3 (4 missing), UEL (12), UECL (17, no channel) from match.uefa.com; + Premier MW8 (4 missing);
 *   + URC R4 (6) + Premiership Rugby R4 (5); + F1 US GP quali/race; + NFL SNF Mon 26 01:20; + MLB World Series G1/G2 (02:00 Fri/Sat night);
 *   + NBA (ESPN API, nba.com cross-check) and NHL (api-web.nhle.com) games starting inside opening hours.
 * - 18 Oct fixes: movistarplus.es guide confirms M+ Liga de Campeones for the 4 new UCL rows and 11/12 new UEL rows;
 *   Plzeň–Levski not in the guide -> channel removed. Ospreys–Dragons 19:00 UK (ospreysrugby.com + dragonsrfc.wales) = 20:00 Madrid.
 *   MLB WS G1/G2 8:00 PM ET confirmed on mlb.com/postseason.
 * - 18 Oct (morning block): + Premier Sun 18 Bournemouth–Sunderland + Brighton–Palace 14:00 BST = 15:00 Madrid (premierleague.com/en/news/4688862,
 *   moved to Sunday for UEL); + MLB ALCS G5 Rays at Guardians 21:08Z = 23:08 (statsapi.mlb.com); + NHL CBJ at MIN 22:00Z = 00:00 Mon
 *   (Sunday night, inside 01:00 cut-off; api-web.nhle.com). CAR at CGY 02:00 and ALCS G6 02:08 Tue EXCLUDED (cut-off).
 * - 18 Oct DG cut-off rule: a match must start ≥1 h before that night's close (Sun–Thu 02:00, Fri–Sat 02:30; 00:00–05:59
 *   belongs to the previous night) -> removed later starts (incl. MLB WS G1/G2 and NFL SNF Mon 26 01:20).
 *   + M+ Liga de Campeones channels on 6 UECL rows (movistarplus.es guide).
 * - OMIT (Tentative / not verified):  *   URC 23–24 Oct except Leinster–Munster, NFL London Game Pass, NFL Sun 18, NCAA, UCL J3
 *   20–21 Oct (except RM–Leipzig), low-demand Premier/LaLiga rows, NBA.
 * - NFL Week 9 Sun 8 Nov (nfl.com/schedules/2026/by-week/week-9, ET+6h): owner confirmed via DG 13 Oct
 *   all Sunday NFL games live. Bucs–Bears 02:20 Mon OMITTED (after Sunday close 02:00).
 * - Owner permanent 13 Oct (via DG): ALL sport is live (UCL, UEL, UECL incl.); RedZone confirmed by owner via DG 13 Oct for Sun 8 Nov (from 19:00, within hours).
 * - 4 Nov (morning): Rennes–Olympiacos (was Thu 5 18:45) REMOVED: Radar UEFA JSON (evidencia-2026-11-02/profunda/uefa-14.json) gives Wed 4 16:30 → mismatch, flagged to DG.
 * - 5 Nov (morning): Wed 4 rows RETIRED (9 UCL MD4 + EuroLeague RM–Panathinaikos).
 * - 4 Nov (morning): Tue 3 rows (9 UCL MD4 incl. Atlético–Bayern) RETIRED. Wed 4 (9 UCL) + Thu 5 Getafe–Brighton 21:00 re-checked vs Radar horarios-oficiales-2026-11-04-05 (UEFA API): OK.
 * - 3 Nov (morning): Mon 2 rows (Newcastle–Everton, Deportivo–Osasuna) RETIRED. Wed 4 UCL (9) + Thu 5 Getafe–Brighton 21:00 re-checked vs Radar horarios-oficiales-2026-11-04-05 (UEFA API): OK.
 * - 2 Nov (morning): FA Cup R1 (7 rows, 6–8 Nov, thefa.com TV picks via Radar agenda-semana-2026-11-02, CONFIRMADA) ADDED, no channel.
 * - 2 Nov (morning): 63 played rows Sat 31 Oct / Sun 1 Nov (incl. NFL week 8, Liverpool–Arsenal, Hearts–Hibernian) RETIRED.
 * - 15 Oct: Brighton–Kauno Žalgiris 21:00 Madrid RETIRED 16 Oct (morning block).
 * - Fri 16 LaLiga Deportivo–Levante RETIRED 17 Oct (DG P0). Weekend 17–18 Oct times re-verified 17 Oct: laliga.com broadcast table (J9) + premierleague.com/en/news/4688862 (BST+1 = Madrid).
 * - Getafe–Brighton Thu 5 Nov 21:00 (Getafe CF official site via DG; UEFA fixture list). Fontaines D.C. kind:event.
 * - 13 Oct Radar ligero (movistar.es official guides): UCL J2–J3 + UEL J2–J3 = «Movistar Liga de Campeones»
 *   (no dial); LaLiga J9 channels LALIGA TV M+ / DAZN LALIGA; added missing rows. LaLiga J10 channel PENDING.
 * - 15 Oct: Bournemouth–Sturm Graz corrected 18:45 → 21:00 (uefa.com MD2 briefing: 21:00 CET unless stated; SK Sturm site 21:00; BBC 20:00 UK).
 * - 19 Oct (DG 12:32): UCL MD4 3–4 Nov ADDED from match.uefa.com (competitionId=1, seasonYear=2027; UTC → CET, Madrid UTC+1):
 *   18 matches, NO channel (movistarplus.es guide for 3–4 Nov not published yet). Atlético–Bayern (Estadio Metropolitano)
 *   = watch with other fans + link /de/bayern-fans-madrid/. + Mon 2 Nov Premier MW9 Newcastle–Everton 20:00 GMT
 *   (premierleague.com API) and LaLiga J11 Deportivo–Osasuna 20:00 UTC (laliga.com resultados/2026-27/jornada-11), both 21:00, NO channel.
 * - 19 Oct (DG): + LaLiga J11 30 Oct–1 Nov (laliga.com resultados/2026-27/jornada-11, UTC → CET); + UEL (18) and UECL (17) Thu 5 Nov
 *   (match.uefa.com competitionId 14 / 2019); + Premier MW9 31 Oct and MW10 6–8 Nov (premierleague.com API, GMT+1);
 *   + URC R5 (glasgowwarriors.org, cardiffrugby.wales, scarlets.wales, dragonsrfc.wales, connachtrugby.ie + BBC), Premiership R5
 *   (leicestertigers.com, exeterchiefs.co.uk, salesharks.com), Nations Championship R4 (nationschampionshiprugby.com, scottishrugby.org,
 *   englandrugby.com). NO channel (Movistar Plus+ guide published only to 25 Oct; DAZN guide not verified).
 * - 19 Oct (DG 14:21): + LaLiga J12 6–8 Nov (laliga.com resultados/2026-27/jornada-12); + Top 14 J8/J9 31 Oct–8 Nov (top14.lnr.fr, French time = Madrid);
 *   + WXV USA–England 30 Oct 22:15 and South Africa–Ireland 31 Oct 14:00, + Nations Cup Spain–Uruguay 7 Nov 16:00 (World Rugby match API, UTC+1).
 * 29 Oct (DG, Radar DU4): Ireland–Argentina 6 Nov 21:10 note «Irish rugby Friday night» (irishrugby.ie 20:10 Irish time).
 *   NZ–France 07:10 and Japan–Wales 08:00 (31 Oct) EXCLUDED (before 12:00 opening). NO channel.
 * - 19 Oct (DG 14:35): + Sat 31 Oct Saracens–Newcastle 16:00, Northampton–Gloucester 18:30 (Premiership), Benetton–Edinburgh 16:00 (URC):
 *   World Rugby match API (15:00Z / 17:30Z / 15:00Z → +1). NO channel.
 * - 23 Oct (morning): Thu 22 rows (UEL/UECL J3 incl. Getafe–Lugano, Fontaines D.C.) + 01:00 Fri 23 NBA/NHL RETIRED (43).
 * - 23 Oct (owner via DG 09:42): Halloween party at Dubliners Sat 31 Oct from 19:00 (costumes, decorations, music) ADDED as kind:'event'.
 *   Not in SportsEvent JSON-LD (filter = confirmed Premier/Champions only). approxDurationMin only keeps the row visible on the board.
 * - 25 Oct (AGENDA-26OCT-DUB, Radar agenda-semana-2026-10-26.md «PARTIDOS VERIFICADOS» only): Sat 24 + Sat-night (25 Oct <12:00) rows RETIRED;
 *   Copa del Rey R1 rows REMOVED except Sporting Hortaleza–Sevilla (Radar: rest NO VERIFICADO, ESPN only) → Movistar Plus+ (movistarplus.es ficha 4414084);
 *   channels from Radar on LaLiga J11 + Premier MW9; + EuroLeague Real Madrid–Fenerbahçe Thu 29 20:45 (EuroLeague feed); + NHL Fri 30 23:00, Sat 31 (6),
 *   Sun 1 (3) + Mon 2 00:00 (api-web.nhle.com); + F1 Mexico quali Sat 31 22:00 / race Sun 1 21:00 (formula1.com); + NFL RedZone Sun 1 from 19:00.
 *   EXCLUDED (cut-off ≥1 h before close): MNF Tue 27 01:15, TNF Fri 30 01:15, MLB World Series 01:00 (G3–G7), NHL starts ≥01:00, SNF Mon 2 02:20.
 *   Sat 31 = Halloween from 19:00 is the main event (DG 25 Oct 08:39): that day's matches are listed as screenings only, no separate promotion.
 * - 25 Oct (THANKSGIVING-DUB, Radar R-21 club websites): + Thu 26 Nov NFL Bears–Lions 19:00, Eagles–Cowboys 22:30 → /thanksgiving-madrid/.
 *   Chiefs–Bills Fri 27 02:20 EXCLUDED (Thu close 02:00).
 * - 25 Oct (DG, AGENDA-26OCT-DUB-RUGBY): 24 rugby/Premier Sports Cup rows 30 Oct–1 Nov re-verified on competition/club sites (log in
 *   /workspace/dubliners-agenda-2026-10-26/QA-2026-10-25.md), all unchanged. Harlequins–Saracens 25 Oct REMOVED (kick-off time not on a primary source).
 * Opening hours: see src/data/hours.ts (master source).
 * Screen claim ONLY when confirmedOnScreens === true. Never from TV-rights alone.
 * - 26 Oct (DG LUNES-26, visiting fans; Radar fichas 5 bis): + EuroLeague RM–Panathinaikos Wed 4 Nov 20:45, RM–Crvena Zvezda Thu 12 Nov 21:00,
 *   RM–Žalgiris Kaunas Wed 25 Nov 20:45 (movistararena.es); + Spain–Chile World Rugby Nations Cup Sat 14 Nov 17:00 (ferugby.es, Butarque);
 *   + UCL MD5 Atlético–Viking FK Wed 25 Nov 21:00 (UEFA API) → /viking-fans-madrid/. NO channel on new rows. Getafe–Brighton row linked to
 *   /brighton-fans-madrid/. Note: Radar's agenda said Crvena Zvezda and Panathinaikos were already listed — they were not (added now).
 * - 26 Oct (DG follow-up 16:11, AGENDA 27–28 Oct + 9–23 Nov; 80 rows, NO channel; per-row log in /workspace/dubliners-agenda-2026-10-26/FUENTES.md):
 *   Copa del Rey R1 Recreativo–Rayo, Trival Valderas–Leganés, Navalcarnero–Betis (rfef.es horarios, hora peninsular); EFL Cup R16 + DFB-Pokal R2
 *   (BBC Sport fixtures, UK +1, cross-checked ESPN); UWCL MD 28 Oct / 10–19 Nov (match.uefa.com competitionId=28, UTC+1); NBA (ESPN) / NHL
 *   (api-web.nhle.com) starts ≤00:30; Nations Championship 13–21 Nov + Spain–Samoa (World Rugby match API, UTC+1); NFL W10/W11 Sun 15/22 Nov
 *   (nfl.com by-week + ESPN; Patriots–Lions in Munich); Premier League 21–23 Nov (premierleague.com news 4725574, GMT+1); LaLiga J13 20–23 Nov
 *   (laliga.com horarios J13, UTC+1). EXCLUDED: NBA/NHL ≥01:00, SNF/TNF/MNF 02:15–02:20, other Copa ties (not selected), MLB (no season).
 * - 27 Oct (morning block): rows dateKey <= 2026-10-26 RETIRED (33 rows: Sun 25 + Mon 26 Oct, all played).
 * - 28 Oct (morning block): rows dateKey <= 2026-10-27 RETIRED (3 rows: Tue 27 Oct, all played).
 * - 28 Oct (DG, owner order, AUDITORIA agenda 29 Oct–8 Nov): + EFL Cup R16 Everton–Newcastle Thu 29 20:45 (evertonfc.com / newcastleunited.com 19:45 GMT);
 *   + F1 Mexico FP1 Fri 30 19:30 / FP2 23:00 (formula1.com timetable 12:30/16:00 local, UTC-6); + F1 São Paulo quali Sat 7 Nov 19:00 / race Sun 8 18:00
 *   (formula1.com 15:00/14:00 local, UTC-3); + Bundesliga MD8 Bayern–Dortmund Sat 31 18:30 CET (bundesliga.com, datencenter.dfb.de). NO channel.
 * - 29 Oct (morning block): rows dateKey <= 2026-10-28 + Wed-night rows 00:00–00:30 Thu 29 (NBA/NHL) RETIRED (19 rows, all played).
 * - 7 Nov (morning): Fri 6 rows RETIRED (5: Oxford City–Leicester, Everton–Coventry, Ireland–Argentina, Sevilla–Alavés, F1 FP2).
 * - 6 Nov (morning): Thu 5 rows RETIRED (35: Getafe–Brighton + UEL/UECL J3).
 * - 6 Nov (afternoon): Spain–Chile note — venue confirmed Estadio Ontime Butarque (Radar/FERugby).
 * - 9 Nov (agenda lock Mon 9–Sun 15): board for 10–15 Nov is the approved subset only. No broadcast without verified in-pub channel (owner 9 Nov). Removed Austria–Ireland; removed UWCL rows without channel; removed ATP Finals Sun 15. Channels: Spain–England La 1; Spain–Chile + Ireland–Fiji Movistar Plus; RM–Zvezda Movistar+ Baloncesto; Czechia–Spain La 1. NFL Sun 15 kept. Premier Sat 21 / Sun 22: Newcastle–Arsenal + Liverpool–United DAZN (Radar 9 Nov).
 * - 12 Nov (owner standing rule via DG 15:08): ALL sport events listed ≥7 days ahead, times from league/federation sources; channel NOT required (9 Nov no-channel exclusion annulled). 66 rows added 12–22 Nov.
 * - 26 Nov (morning block): played rows dateKey <= 2026-11-25 RETIRED (Radar 2026-11-26-ligero) except Ireland–Fiji + Ireland–South Africa (landing pages read them); added 2–12 Dec rows from Radar (FUENTES-PARTIDOS-COMPARTIDAS 24–26 Nov). All major sport LIVE incl. NFL + basketball (owner 26 Nov 11:13).
 * - 16 Nov (agenda lock Mon 16–Sun 22): board is the approved subset only. Played rows (dateKey ≤ 2026-11-15) RETIRED except Ireland–Fiji (landing). Removed ATP, NFL this week, F1, extra rugby / other UWCL / EuroLeague / MotoGP. RM Fem–Inter (Wed 18, 18:45, UWCL) published, no channel. Austria–Ireland not published. Channel DAZN only on Newcastle–Arsenal and Liverpool–United.
 * - 17 Nov (DG): UCL MD5 RM–PSV (Tue 24) + Atlético–Viking (Wed 25) on the fixture board through 25 Nov (not only Looking ahead). Mon 23 rows on board when in range.
 * - 22 Nov (agenda lock Mon 23–Sun 29): board through 29 Nov. Played 16–21 Nov football/UNL/UWCL RETIRED; Sat 21 rugby kept (landing + removable home block). Sun 22 leftover kept, DAZN stripped. Named UCL MD5 / UEL-UECL J5 / Premier / LaLiga / rugby 23–29 ADDED, NO channel. Thanksgiving NFL + RM–Žalgiris kept. Unnamed «resto» and Celtic (no opponent) not invented.
 * - 22 Nov (home/away, Nations Championship match centre API https://nationschampionshiprugby.com/api/match-centre/fixtures + HTML https://nationschampionshiprugby.com/en/match-centre/fixtures): FIJ–ITA Fri 16:40Z, IRE–AUS Fri 20:10Z, WAL–JPN Sat 13:10Z, ENG–NZL Sat 16:40Z, SCO–ARG Sun 13:10Z, RSA–FRA Sun 16:40Z. Madrid CET +1. Named rows restored; generic Sun 29 time-slot labels replaced. NO channel.
 * - 23 Nov (DG): home/away per laliga.com J14 (Radar): Levante–Racing (Fri 27) and Betis–Rayo (Sat 28). RM–Žalgiris: broadcast NOT confirmed →
 *   confirmedOnScreens false + «To be confirmed / por confirmar». Sat 21 rugby rows RETIRED (Ireland v South Africa kept, unlinked, as data for its archive page).
 *   Final written France v South Africa / Francia–Sudáfrica (owner rule).
 * - 26 Nov (DG): LaLiga J16 Sun 13 Dec — Atlético de Madrid–Valencia 14:00, Real Madrid–Osasuna 21:00 (LaLiga jornada 16;
 *   realmadrid.com 23 Nov 2026 + laliga.com; FUENTES-PARTIDOS-COMPARTIDAS.md not in agencia-digital-operaciones main/PR15).
 *   Thanksgiving NFL (nfl.com REG11): Thu 26 Bears–Lions 19:00, Eagles–Cowboys 22:30; Fri 27 02:20 Chiefs–Bills (Madrid). Thu games LIVE on board; Chiefs–Bills hideFromAgenda (kick-off after close 02:00, owner 26 Nov).
 * - 25 Nov (owner via DG): Ads is football-only; other events go organic. + EuroLeague Real Madrid–FC Bayern Munich
 *   basketball Tue 15 Dec 20:45 Movistar Arena (feed E2026_166, 19:45Z, confirmedDate/Time; realmadrid.com match page).
 *   confirmedOnScreens true (owner 24 Nov 20:24). Meeting point + LIVE at Dubliners; links /bayern-basketball-fans-madrid/.
 * No invented fixtures / TV channels / reservations.
 */


export type Fixture = {
  dateKey: string; // YYYY-MM-DD Madrid calendar day of kickoff
  whenLabel: string;
  competition: string;
  teams: string;
  madridTime: string; // HH:mm 24h Europe/Madrid
  /** Optional override of the standard sport duration (minutes). Normally unset. */
  approxDurationMin?: number;
  /** Explicit venue confirmation; only these rows may claim the match is on screens. */
  confirmedOnScreens?: boolean;
  /** Optional short per-row note (EN / ES). Rendered only on that row. */
  noteEn?: string;
  noteEs?: string;
  /** 'event' = non-sport city event (e.g. concert elsewhere). Never shown as LIVE on screens. */
  kind?: 'sport' | 'event';
  /** Optional Spanish title / subtitle for kind:'event' rows (ES board). */
  teamsEs?: string;
  competitionEs?: string;
  /** Broadcaster name as published by the operator (no dial numbers). */
  channel?: string;
  /** Exact UTC instant (ISO, e.g. 2026-10-25T00:00:00Z) for wall times that are ambiguous at the DST change (25 Oct 02:00–02:59). */
  startUtc?: string;
  /** Optional per-row internal link (site path, e.g. a fans page). Rendered after the note. */
  link?: { href: string; labelEn: string; labelEs: string; hreflang?: string; hrefEs?: string };
  /** Row kept in FIXTURES but omitted from What’s On / Partidos (e.g. kick-off after close). */
  hideFromAgenda?: boolean;
};

export const FIXTURES: Fixture[] = [
{
    dateKey: '2026-11-14',
    whenLabel: 'Sat 14 Nov',
    competition: 'Rugby Nations Championship',
    teams: 'Ireland vs Fiji',
    madridTime: '21:10',
    confirmedOnScreens: true,
    noteEn: 'Aviva Stadium, Dublin.',
    noteEs: 'Aviva Stadium, Dublín.',
    link: { href: '/irish-double-saturday-madrid/', labelEn: 'Ireland v Fiji in Madrid (Sat 14 Nov)', labelEs: 'Irlanda–Fiyi en Madrid (sáb 14 nov, en inglés)', hreflang: 'en' },
  },
{
    dateKey: '2026-11-21',
    whenLabel: 'Sat 21 Nov',
    competition: 'Rugby Nations Championship',
    teams: 'Ireland vs South Africa',
    madridTime: '17:40',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens. Full Saturday slate on the guide below.',
    noteEs: 'En directo en nuestras pantallas. Cartel del sábado en la guía de abajo.',
  },
{
    dateKey: '2026-11-26',
    whenLabel: 'Thu 26 Nov',
    competition: 'NFL',
    teams: 'Chicago Bears at Detroit Lions',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Thanksgiving NFL. LIVE on our screens at Dubliners by Puerta del Sol.',
    noteEs: 'NFL de Thanksgiving. En directo en nuestras pantallas en Dubliners junto a Puerta del Sol.',
    link: {
      href: '/thanksgiving-madrid/',
      hrefEs: '/es/thanksgiving-madrid/',
      labelEn: 'Thanksgiving NFL in Madrid',
      labelEs: 'NFL de Thanksgiving en Madrid',
    },
  },
{
    dateKey: '2026-11-26',
    whenLabel: 'Thu 26 Nov',
    competition: 'NFL',
    teams: 'Philadelphia Eagles at Dallas Cowboys',
    madridTime: '22:30',
    confirmedOnScreens: true,
    noteEn: 'Thanksgiving NFL. LIVE on our screens at Dubliners by Puerta del Sol.',
    noteEs: 'NFL de Thanksgiving. En directo en nuestras pantallas en Dubliners junto a Puerta del Sol.',
    link: {
      href: '/thanksgiving-madrid/',
      hrefEs: '/es/thanksgiving-madrid/',
      labelEn: 'Thanksgiving NFL in Madrid',
      labelEs: 'NFL de Thanksgiving en Madrid',
    },
  },
{
    dateKey: '2026-11-27',
    whenLabel: 'Fri 27 Nov',
    competition: 'NFL',
    teams: 'Kansas City Chiefs at Buffalo Bills',
    madridTime: '02:20',
    confirmedOnScreens: false,
    hideFromAgenda: true,
    noteEn: 'Thanksgiving NFL (Friday 02:20 Madrid). Omitted from the pub board — kick-off after close.',
    noteEs: 'NFL de Thanksgiving (viernes 02:20 Madrid). Fuera del cartel del pub — pitido tras el cierre.',
    link: {
      href: '/thanksgiving-madrid/',
      hrefEs: '/es/thanksgiving-madrid/',
      labelEn: 'Thanksgiving NFL in Madrid',
      labelEs: 'NFL de Thanksgiving en Madrid',
    },
  },
{
    dateKey: '2026-11-26',
    whenLabel: 'Thu 26 Nov',
    competition: 'UEFA Europa League',
    teams: 'Celta vs Bournemouth',
    madridTime: '18:45',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-11-26',
    whenLabel: 'Thu 26 Nov',
    competition: 'UEFA Europa League',
    teams: 'Olympiacos vs Milan',
    madridTime: '18:45',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-11-26',
    whenLabel: 'Thu 26 Nov',
    competition: 'UEFA Europa League',
    teams: 'Crystal Palace vs Real Sociedad',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-11-26',
    whenLabel: 'Thu 26 Nov',
    competition: 'UEFA Europa League',
    teams: 'Sunderland vs Jagiellonia',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-11-26',
    whenLabel: 'Thu 26 Nov',
    competition: 'UEFA Europa League',
    teams: 'Juventus vs Omonia',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-11-26',
    whenLabel: 'Thu 26 Nov',
    competition: 'UEFA Conference League',
    teams: 'Iberia Tbilisi vs Getafe',
    madridTime: '18:45',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-11-26',
    whenLabel: 'Thu 26 Nov',
    competition: 'UEFA Conference League',
    teams: 'Brighton vs U. Craiova',
    madridTime: '18:45',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-11-26',
    whenLabel: 'Thu 26 Nov',
    competition: 'UEFA Conference League',
    teams: 'Hearts vs Monaco',
    madridTime: '18:45',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-11-26',
    whenLabel: 'Thu 26 Nov',
    competition: 'UEFA Conference League',
    teams: 'Gent vs Crvena Zvezda',
    teamsEs: 'Gent vs Estrella Roja',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-11-26',
    whenLabel: 'Thu 26 Nov',
    competition: 'UEFA Conference League',
    teams: 'Freiburg vs Twente',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-11-27',
    whenLabel: 'Fri 27 Nov',
    competition: 'LaLiga',
    teams: 'Levante vs Racing Santander',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-11-27',
    whenLabel: 'Fri 27 Nov',
    competition: 'Rugby Nations Championship',
    teams: 'Italy vs Fiji',
    teamsEs: 'Italia vs Fiyi',
    madridTime: '17:40',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
    link: {
      href: '/rugby-nations-finals-weekend-madrid/',
      hrefEs: '/es/rugby-nations-finals-fin-de-semana-sol/',
      labelEn: 'Nations Championship finals weekend near Sol',
      labelEs: 'Nations Championship — fin de semana junto a Sol',
    },
  },
{
    dateKey: '2026-11-27',
    whenLabel: 'Fri 27 Nov',
    competition: 'Rugby Nations Championship',
    teams: 'Ireland vs Australia',
    teamsEs: 'Irlanda vs Australia',
    madridTime: '21:10',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
    link: {
      href: '/rugby-nations-finals-weekend-madrid/',
      hrefEs: '/es/rugby-nations-finals-fin-de-semana-sol/',
      labelEn: 'Nations Championship finals weekend near Sol',
      labelEs: 'Nations Championship — fin de semana junto a Sol',
    },
  },
{
    dateKey: '2026-11-27',
    whenLabel: 'Fri 27 Nov',
    competition: 'Premier League',
    teams: 'Nottingham Forest vs Chelsea',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-11-28',
    whenLabel: 'Sat 28 Nov',
    competition: 'Rugby Nations Championship',
    teams: 'Wales vs Japan',
    teamsEs: 'Gales vs Japón',
    madridTime: '14:10',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
    link: {
      href: '/rugby-nations-finals-weekend-madrid/',
      hrefEs: '/es/rugby-nations-finals-fin-de-semana-sol/',
      labelEn: 'Nations Championship finals weekend near Sol',
      labelEs: 'Nations Championship — fin de semana junto a Sol',
    },
  },
{
    dateKey: '2026-11-28',
    whenLabel: 'Sat 28 Nov',
    competition: 'LaLiga',
    teams: 'Real Betis vs Rayo Vallecano',
    madridTime: '14:00',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-11-28',
    whenLabel: 'Sat 28 Nov',
    competition: 'Premier League',
    teams: 'Leeds United vs Coventry City',
    madridTime: '16:00',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-11-28',
    whenLabel: 'Sat 28 Nov',
    competition: 'Premier League',
    teams: 'Manchester United vs Brentford',
    madridTime: '16:00',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-11-28',
    whenLabel: 'Sat 28 Nov',
    competition: 'LaLiga',
    teams: 'Málaga vs Athletic Club',
    madridTime: '16:15',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-11-28',
    whenLabel: 'Sat 28 Nov',
    competition: 'Premier League',
    teams: 'Ipswich Town vs Aston Villa',
    madridTime: '18:30',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-11-28',
    whenLabel: 'Sat 28 Nov',
    competition: 'LaLiga',
    teams: 'Elche vs Atlético de Madrid',
    madridTime: '18:30',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-11-28',
    whenLabel: 'Sat 28 Nov',
    competition: 'Rugby Nations Championship',
    teams: 'England vs New Zealand',
    teamsEs: 'Inglaterra vs Nueva Zelanda',
    madridTime: '17:40',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
    link: {
      href: '/rugby-nations-finals-weekend-madrid/',
      hrefEs: '/es/rugby-nations-finals-fin-de-semana-sol/',
      labelEn: 'Nations Championship finals weekend near Sol',
      labelEs: 'Nations Championship — fin de semana junto a Sol',
    },
  },
{
    dateKey: '2026-11-28',
    whenLabel: 'Sat 28 Nov',
    competition: 'LaLiga',
    teams: 'Real Madrid vs Alavés',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-11-29',
    whenLabel: 'Sun 29 Nov',
    competition: 'Premier League',
    teams: 'Everton vs Liverpool',
    madridTime: '13:00',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-11-29',
    whenLabel: 'Sun 29 Nov',
    competition: 'LaLiga',
    teams: 'Valencia vs Osasuna',
    madridTime: '14:00',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-11-29',
    whenLabel: 'Sun 29 Nov',
    competition: 'Rugby Nations Championship',
    teams: 'Scotland vs Argentina',
    teamsEs: 'Escocia vs Argentina',
    madridTime: '14:10',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
    link: {
      href: '/rugby-nations-finals-weekend-madrid/',
      hrefEs: '/es/rugby-nations-finals-fin-de-semana-sol/',
      labelEn: 'Nations Championship finals weekend near Sol',
      labelEs: 'Nations Championship — fin de semana junto a Sol',
    },
  },
{
    dateKey: '2026-11-29',
    whenLabel: 'Sun 29 Nov',
    competition: 'Premier League',
    teams: 'Brighton vs Newcastle United',
    madridTime: '15:05',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-11-29',
    whenLabel: 'Sun 29 Nov',
    competition: 'Premier League',
    teams: 'Crystal Palace vs Hull City',
    madridTime: '15:05',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-11-29',
    whenLabel: 'Sun 29 Nov',
    competition: 'Premier League',
    teams: 'Fulham vs Bournemouth',
    madridTime: '15:05',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-11-29',
    whenLabel: 'Sun 29 Nov',
    competition: 'Premier League',
    teams: 'Sunderland vs Tottenham Hotspur',
    madridTime: '15:05',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-11-29',
    whenLabel: 'Sun 29 Nov',
    competition: 'LaLiga',
    teams: 'Deportivo vs Barcelona',
    madridTime: '16:15',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-11-29',
    whenLabel: 'Sun 29 Nov',
    competition: 'Premier League',
    teams: 'Arsenal vs Manchester City',
    madridTime: '17:30',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-11-29',
    whenLabel: 'Sun 29 Nov',
    competition: 'Rugby Nations Championship',
    teams: 'France v South Africa',
    teamsEs: 'Francia–Sudáfrica',
    madridTime: '17:40',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens. Final.',
    noteEs: 'En directo en nuestras pantallas. Final.',
    link: {
      href: '/rugby-nations-finals-weekend-madrid/',
      hrefEs: '/es/rugby-nations-finals-fin-de-semana-sol/',
      labelEn: 'Nations Championship finals weekend near Sol',
      labelEs: 'Nations Championship — fin de semana junto a Sol',
    },
  },
{
    dateKey: '2026-11-29',
    whenLabel: 'Sun 29 Nov',
    competition: 'LaLiga',
    teams: 'Celta vs Villarreal',
    madridTime: '18:30',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-11-29',
    whenLabel: 'Sun 29 Nov',
    competition: 'LaLiga',
    teams: 'Real Sociedad vs Sevilla',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-12-02',
    whenLabel: 'Wed 2 Dec',
    competition: 'LaLiga',
    teams: 'Barcelona vs Atlético de Madrid',
    madridTime: '21:30',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-12-02',
    whenLabel: 'Wed 2 Dec',
    competition: 'Premier League',
    teams: 'Newcastle United vs Manchester United',
    madridTime: '21:15',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-12-02',
    whenLabel: 'Wed 2 Dec',
    competition: 'Premier League',
    teams: 'Aston Villa vs Everton',
    madridTime: '21:15',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-12-03',
    whenLabel: 'Thu 3 Dec',
    competition: 'EuroLeague',
    teams: 'Real Madrid vs Barcelona',
    madridTime: '20:45',
    confirmedOnScreens: true,
    noteEn: 'EuroLeague basketball at the Movistar Arena, 20:45 Madrid. LIVE on our screens at Dubliners.',
    noteEs: 'Baloncesto EuroLeague en el Movistar Arena, 20:45 Madrid. En directo en nuestras pantallas en Dubliners.',
  },
{
    dateKey: '2026-12-05',
    whenLabel: 'Sat 5 Dec',
    competition: 'Premier League',
    teams: 'Chelsea vs Liverpool',
    madridTime: '13:30',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-12-06',
    whenLabel: 'Sun 6 Dec',
    competition: 'Premier League',
    teams: 'Tottenham Hotspur vs Arsenal',
    madridTime: '17:30',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-12-06',
    whenLabel: 'Sun 6 Dec',
    competition: 'LaLiga',
    teams: 'Atlético de Madrid vs Real Betis',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-12-08',
    whenLabel: 'Tue 8 Dec',
    competition: 'UEFA Champions League',
    teams: 'Barcelona vs Manchester City',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'UEFA Champions League at Spotify Camp Nou, 21:00 CET (uefa.com matchday 6). LIVE on our screens.',
    noteEs: 'Champions League en el Spotify Camp Nou, 21:00 CET (uefa.com jornada 6). En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-12-09',
    whenLabel: 'Wed 9 Dec',
    competition: 'UEFA Champions League',
    teams: 'Arsenal vs Real Madrid',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'UEFA Champions League at Arsenal Stadium, 21:00 CET (uefa.com matchday 6). LIVE on our screens.',
    noteEs: 'Champions League en el Emirates, 21:00 CET (uefa.com jornada 6). En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-12-09',
    whenLabel: 'Wed 9 Dec',
    competition: 'UEFA Champions League',
    teams: 'PSV Eindhoven vs Atlético de Madrid',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'UEFA Champions League, 21:00 CET (uefa.com matchday 6). LIVE on our screens.',
    noteEs: 'Champions League, 21:00 CET (uefa.com jornada 6). En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-12-10',
    whenLabel: 'Thu 10 Dec',
    competition: 'UEFA Conference League',
    teams: 'Getafe vs Inter Club d’Escaldes',
    madridTime: '18:45',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-12-12',
    whenLabel: 'Sat 12 Dec',
    competition: 'Premier League',
    teams: 'Manchester City vs Chelsea',
    madridTime: '18:30',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-12-12',
    whenLabel: 'Sat 12 Dec',
    competition: 'Champions Cup rugby',
    teams: 'Leinster vs Sale Sharks',
    madridTime: '18:30',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-12-12',
    whenLabel: 'Sat 12 Dec',
    competition: 'Champions Cup rugby',
    teams: 'Bristol Bears vs Munster',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens.',
    noteEs: 'En directo en nuestras pantallas.',
  },
{
    dateKey: '2026-12-13',
    whenLabel: 'Sun 13 Dec',
    competition: 'LaLiga',
    teams: 'Atlético de Madrid vs Valencia',
    teamsEs: 'Atlético de Madrid vs Valencia',
    madridTime: '14:00',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens. LaLiga matchday 16.',
    noteEs: 'En directo en nuestras pantallas. Jornada 16 de LaLiga.',
  },
{
    dateKey: '2026-12-13',
    whenLabel: 'Sun 13 Dec',
    competition: 'LaLiga',
    teams: 'Real Madrid vs Osasuna',
    teamsEs: 'Real Madrid vs Osasuna',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'LIVE on our screens. LaLiga matchday 16.',
    noteEs: 'En directo en nuestras pantallas. Jornada 16 de LaLiga.',
  },
{
    dateKey: '2026-12-15',
    whenLabel: 'Tue 15 Dec',
    competition: 'EuroLeague',
    teams: 'Real Madrid vs FC Bayern Munich',
    madridTime: '20:45',
    confirmedOnScreens: true,
    noteEn: 'EuroLeague basketball at the Movistar Arena, 20:45 Madrid. LIVE on our screens at Dubliners; meeting point Mon 14 & Tue 15 Dec with O’Connell’s & O’Reilly’s by Puerta del Sol.',
    noteEs: 'Baloncesto EuroLeague en el Movistar Arena, 20:45 Madrid. En directo en nuestras pantallas en Dubliners; punto de encuentro lun 14 y mar 15 dic con O’Connell’s y O’Reilly’s junto a Puerta del Sol.',
    link: {
      href: '/bayern-basketball-fans-madrid/',
      hrefEs: '/es/aficionados-bayern-baloncesto-madrid/',
      labelEn: 'Bayern basketball fans in Madrid: meeting point (EN · ES · DE)',
      labelEs: 'Aficionados del Bayern de baloncesto en Madrid: punto de encuentro',
      hreflang: 'en',
    },
  }
];

/** Human sport label for board rows (presentation only — does not change gates). */
export function sportLabel(competition: string): string {
  const c = competition.toLowerCase();
  if (c.startsWith('concert')) return 'Event';
  if (c.includes('nfl')) return 'NFL';
  if (c.includes('nba')) return 'NBA';
  if (c.includes('nhl')) return 'NHL';
  if (c.includes('mlb')) return 'MLB';
  if (c.includes('euroleague')) return 'Basketball';
  if (c.includes('formula') || c === 'f1') return 'Formula 1';
  if (c.includes('motogp')) return 'MotoGP';
  if (c.includes('rugby') || c.includes('urc') || c.includes('six nations') || c.includes('top 14') || c.includes('wxv')) return 'Rugby';
  if (c.includes('tennis') || c.includes('atp') || c.includes('wta') || c.includes('masters')) {
    return 'Tennis';
  }
  return 'Football';
}

/** Spanish sport label for Partidos board. */
export function sportLabelEs(competition: string): string {
  const en = sportLabel(competition);
  if (en === 'Football') return 'Fútbol';
  if (en === 'Formula 1') return 'Fórmula 1';
  if (en === 'MotoGP') return 'MotoGP';
  if (en === 'Tennis') return 'Tenis';
  if (en === 'Event') return 'Evento';
  if (en === 'Basketball') return 'Baloncesto';
  return en; // NFL, NBA, Rugby
}

/** Today's calendar date YYYY-MM-DD in Europe/Madrid. */
export function madridToday(d: Date = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Madrid',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(d);
}

/** Sunday YYYY-MM-DD of the Madrid week containing `dateKey` (week starts Monday). */
export function madridWeekEnd(dateKey: string): string {
  const [y, m, d] = dateKey.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  const dow = dt.getUTCDay();
  const add = dow === 0 ? 0 : 7 - dow;
  dt.setUTCDate(dt.getUTCDate() + add);
  const yy = dt.getUTCFullYear();
  const mm = String(dt.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(dt.getUTCDate()).padStart(2, '0');
  return `${yy}-${mm}-${dd}`;
}

/** Madrid local wall-clock HH:mm (24h). Returns null if Intl fails (fail closed). */
export function madridNowHm(d: Date = new Date()): string | null {
  try {
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Madrid',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).formatToParts(d);
    const hour = parts.find((p) => p.type === 'hour')?.value;
    const minute = parts.find((p) => p.type === 'minute')?.value;
    if (!hour || !minute) return null;
    return `${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`;
  } catch {
    return null;
  }
}

/** Standard duration per sport (minutes) used to decide when a fixture has finished. */
export const SPORT_DURATION_MIN: Record<string, number> = {
  Football: 120, // 90' + half-time + stoppage
  Rugby: 120,
  NFL: 210, // ~3h30
  'Formula 1': 150, // ~2h30
  MotoGP: 120,
  NBA: 150,
  NHL: 150,
  MLB: 210,
  Basketball: 120,
  Tennis: 180, // best-of-3/5 varies; 3h is a conservative default
};
/** Any other sport: 3h (documented default). */
export const DEFAULT_DURATION_MIN = 180;

export function fixtureDurationMin(f: Fixture): number {
  if (f.approxDurationMin && f.approxDurationMin > 0) return f.approxDurationMin;
  return SPORT_DURATION_MIN[sportLabel(f.competition)] ?? DEFAULT_DURATION_MIN;
}

/** Offset (ms) of Europe/Madrid vs UTC at a given instant. */
function madridOffsetMs(epochMs: number): number {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Madrid',
    hourCycle: 'h23',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).formatToParts(new Date(epochMs));
  const g = (t: string) => Number(parts.find((p) => p.type === t)?.value);
  const asUtc = Date.UTC(g('year'), g('month') - 1, g('day'), g('hour'), g('minute'), g('second'));
  return asUtc - Math.floor(epochMs / 1000) * 1000;
}

/** Epoch ms of a Madrid wall-clock time (handles CET/CEST). */
export function madridWallToEpoch(dateKey: string, hm: string): number {
  const [y, m, d] = dateKey.split('-').map(Number);
  const [hh, mm] = hm.split(':').map(Number);
  const naive = Date.UTC(y, m - 1, d, hh, mm);
  let t = naive - madridOffsetMs(naive);
  t = naive - madridOffsetMs(t);
  return t;
}

/** ISO 8601 with the correct Madrid offset for that day (+02:00 CEST / +01:00 CET). */
export function madridIsoWithOffset(dateKey: string, hm: string): string {
  const epoch = madridWallToEpoch(dateKey, hm);
  const offMin = Math.round(madridOffsetMs(epoch) / 60_000);
  const sign = offMin >= 0 ? '+' : '-';
  const a = Math.abs(offMin);
  const off = `${sign}${String(Math.floor(a / 60)).padStart(2, '0')}:${String(a % 60).padStart(2, '0')}`;
  return `${dateKey}T${hm}:00${off}`;
}

export function fixtureStartMs(f: Fixture): number {
  if (f.startUtc) return Date.parse(f.startUtc);
  return madridWallToEpoch(f.dateKey, f.madridTime);
}
export function fixtureEndMs(f: Fixture): number {
  return fixtureStartMs(f) + fixtureDurationMin(f) * 60_000;
}

/** Soonest first: dateKey then madridTime. Stable for same-slot ties (array order). */
export function sortFixturesSoonestFirst(list: Fixture[]): Fixture[] {
  return [...list].sort((a, b) => {
    if (a.dateKey !== b.dateKey) return a.dateKey < b.dateKey ? -1 : 1;
    if (a.madridTime !== b.madridTime) return a.madridTime < b.madridTime ? -1 : 1;
    return 0;
  });
}

/**
 * SINGLE agenda rule for EN + ES, Today/Hoy + Upcoming/Próximos (Europe/Madrid).
 * - finished (now >= start + sport duration) → hidden everywhere
 * - TODAY: kickoff on today's Madrid date, or already started and not finished
 *   (covers late games that run past midnight)
 * - UPCOMING: kickoff on a later Madrid date, still inside this week (through Sunday)
 * Board may extend through Sunday 29 Nov 2026 (owner agenda lock 23–29 Nov).
 * The client script (FixtureAntiStale) hides finished rows; the board HTML only includes this week.
 */

/** Latest Madrid calendar day on the fixture board (extends through Tue 15 Dec 2026 Bayern week). */
const AGENDA_BOARD_THROUGH = '2026-12-15';

function agendaBoardEndKey(weekEnd: string): string {
  return weekEnd < AGENDA_BOARD_THROUGH ? AGENDA_BOARD_THROUGH : weekEnd;
}
/** Home EN/ES PSV eve video band — owner 23 Nov 2026; off after Tue 24 Nov 17:00 Europe/Madrid. */
export const PSV_HOME_VIDEO_UNTIL_ISO = '2026-11-24T17:00:00+01:00';

export function psvHomeVideoActive(now: Date = buildNow()): boolean {
  return now.getTime() < new Date(PSV_HOME_VIDEO_UNTIL_ISO).getTime();
}

export function buildNow(): Date {
  // AGENDA_NOW=ISO — deploy sets Europe/Madrid local now so “today” is the Madrid calendar date,
  // not the runner’s UTC date. Tests: AGENDA_NOW=2026-10-09T20:50:00+02:00 npm run build
  const v = typeof process !== 'undefined' ? process.env?.AGENDA_NOW : undefined;
  return v ? new Date(v) : new Date();
}

export function agendaAt(now: Date = buildNow()): { todayKey: string; today: Fixture[]; upcoming: Fixture[]; weekEnd: string } {
  const todayKey = madridToday(now);
  const weekEnd = agendaBoardEndKey(madridWeekEnd(todayKey));
  const t = now.getTime();
  const live = sortFixturesSoonestFirst(FIXTURES).filter(
    (f) => t < fixtureEndMs(f) && f.dateKey <= weekEnd && !f.hideFromAgenda,
  );
  const today = live.filter((f) => f.dateKey === todayKey || (f.dateKey < todayKey && fixtureStartMs(f) <= t));
  const upcoming = live.filter((f) => f.dateKey > todayKey);
  return { todayKey, today, upcoming, weekEnd };
}

/** True if the fixture has not finished yet at `now`. */
export function isCurrentFixture(f: Fixture, now: Date = new Date()): boolean {
  return now.getTime() < fixtureEndMs(f);
}

/** Build-time: today’s not-finished fixtures. */
export function fixturesForToday(now: Date = new Date()): Fixture[] {
  return agendaAt(now).today;
}

/** Build-time: today (not finished) + upcoming. */
export function fixturesForWeek(now: Date = new Date()): Fixture[] {
  const a = agendaAt(now);
  return [...a.today, ...a.upcoming];
}

/** Premier League or UEFA Champions League competition (SEO SportsEvent filter). */
export function isPremierOrChampions(competition: string): boolean {
  const c = competition.toLowerCase();
  return c.includes('premier league') || c.includes('champions league');
}

/**
 * SportsEvent JSON-LD for Confirmed Premier / Champions fixtures still current this week.
 * Location = Dubliners Irish Pub, Espoz y Mina 7, Sol, Madrid. Kick-off Europe/Madrid (offset per date: CEST/CET).
 */
export function sportsEventsJsonLd(
  fixtures: Fixture[],
  opts: { pageUrl: string; lang?: 'en' | 'es' },
): Record<string, unknown>[] {
  const lang = opts.lang ?? 'en';
  const venue = {
    '@type': 'BarOrPub',
    name: 'Dubliners Irish Pub',
    alternateName: 'Dubliners Madrid',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle de Espoz y Mina 7',
      addressLocality: 'Madrid',
      addressRegion: 'Community of Madrid',
      postalCode: '28012',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.4158342,
      longitude: -3.7022626,
    },
  };
  return fixtures
    .filter((f) => f.confirmedOnScreens && isPremierOrChampions(f.competition))
    .map((f) => {
      const parts = f.teams.split(' vs ');
      const description =
        lang === 'es'
          ? `Ver ${f.teams} (${f.competition}) en pantallas en Dubliners, pub irlandés en Sol, Espoz y Mina 7, Madrid.`
          : `Watch ${f.teams} (${f.competition}) on screens at Dubliners Irish Pub near Sol, Espoz y Mina 7, Madrid.`;
      const ev: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'SportsEvent',
        name: `${f.teams} — ${f.competition}`,
        description,
        startDate: f.startUtc ? `${f.dateKey}T${f.madridTime}:00+02:00` : madridIsoWithOffset(f.dateKey, f.madridTime),
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: venue,
        organizer: {
          '@type': 'BarOrPub',
          name: 'Dubliners Irish Pub',
          url: 'https://dublinersmadrid.es/',
        },
        url: opts.pageUrl,
      };
      if (parts.length === 2) {
        ev.homeTeam = { '@type': 'SportsTeam', name: parts[0].trim() };
        ev.awayTeam = { '@type': 'SportsTeam', name: parts[1].trim() };
      }
      return ev;
    });
}

/**
 * @deprecated Build-time snapshot only — do not treat as runtime “today”.
 * Prefer madridToday() / fixturesForToday() / fixturesForWeek(), plus client anti-stale.
 */
export const PREVIEW_TODAY = madridToday();
