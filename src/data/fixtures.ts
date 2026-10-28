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
 * No invented fixtures / TV channels / reservations.
 */export type Fixture = {
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
};

export const FIXTURES: Fixture[] = [
  {
    dateKey: '2026-11-01',
    whenLabel: 'Sun 1 Nov',
    competition: 'NFL',
    teams: 'Ravens vs Bills',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-01',
    whenLabel: 'Sun 1 Nov',
    competition: 'NFL',
    teams: 'Titans vs Bengals',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-01',
    whenLabel: 'Sun 1 Nov',
    competition: 'NFL',
    teams: 'Cardinals vs Cowboys',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-01',
    whenLabel: 'Sun 1 Nov',
    competition: 'NFL',
    teams: 'Vikings vs Lions',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-01',
    whenLabel: 'Sun 1 Nov',
    competition: 'NFL',
    teams: 'Colts vs Jaguars',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-01',
    whenLabel: 'Sun 1 Nov',
    competition: 'NFL',
    teams: 'Raiders vs Jets',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-01',
    whenLabel: 'Sun 1 Nov',
    competition: 'NFL',
    teams: 'Browns vs Steelers',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-01',
    whenLabel: 'Sun 1 Nov',
    competition: 'NFL',
    teams: 'Falcons vs Buccaneers',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-01',
    whenLabel: 'Sun 1 Nov',
    competition: 'NFL',
    teams: 'Chargers vs Rams',
    madridTime: '22:05',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-01',
    whenLabel: 'Sun 1 Nov',
    competition: 'NFL',
    teams: 'Chiefs vs Broncos',
    madridTime: '22:25',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-01',
    whenLabel: 'Sun 1 Nov',
    competition: 'NFL',
    teams: 'Patriots vs Dolphins',
    madridTime: '22:25',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'URC',
    teams: 'Stormers vs Ulster',
    madridTime: '13:45',
    confirmedOnScreens: true,
    noteEn: 'Watch the match with other Ulster rugby fans.',
    noteEs: 'Para ver el partido con otros aficionados del Ulster.',
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'Premier Sports Cup (semi-final)',
    teams: 'Rangers vs Aberdeen',
    madridTime: '18:30',
    confirmedOnScreens: true,
    noteEn: 'Watch the match with other Scottish football fans.',
    noteEs: 'Para ver el partido con otros aficionados del fútbol escocés.',
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'URC',
    teams: 'Munster vs Sharks',
    madridTime: '18:30',
    confirmedOnScreens: true,
    noteEn: 'Watch the match with other Munster rugby fans.',
    noteEs: 'Para ver el partido con otros aficionados del Munster.',
  },
  {
    dateKey: '2026-11-01',
    whenLabel: 'Sun 1 Nov',
    competition: 'Premier Sports Cup (semi-final)',
    teams: 'Hearts vs Hibernian',
    madridTime: '16:00',
    confirmedOnScreens: true,
    noteEn: 'Watch the match with other Scottish football fans.',
    noteEs: 'Para ver el partido con otros aficionados del fútbol escocés.',
  },
  {
    dateKey: '2026-11-01',
    whenLabel: 'Sun 1 Nov',
    competition: 'Premier League',
    teams: 'Liverpool vs Arsenal',
    madridTime: '17:30',
    confirmedOnScreens: true,
    channel: 'DAZN',
    noteEn: 'Watch the match with other Liverpool and Arsenal fans.',
    noteEs: 'Para ver el partido con otros aficionados del Liverpool y del Arsenal.',
  },
  {
    dateKey: '2026-10-29',
    whenLabel: 'Thu 29 Oct',
    competition: 'Copa del Rey',
    teams: 'Sporting Hortaleza vs Sevilla',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'Copa del Rey from the Madrid region (El Val, Alcalá de Henares). Live at Dubliners.',
    noteEs: 'Copa del Rey desde la Comunidad de Madrid (El Val, Alcalá de Henares). En directo en Dubliners.',
    channel: 'Movistar Plus+',
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'NFL',
    teams: 'Bengals vs Falcons',
    madridTime: '15:30',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners. Played at the Santiago Bernabéu, Madrid.',
    noteEs: 'En directo en Dubliners. Se juega en el Estadio Santiago Bernabéu, Madrid.',
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'NFL',
    teams: 'Broncos vs Panthers',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'NFL',
    teams: 'Cowboys vs Colts',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'NFL',
    teams: 'Jets vs Chiefs',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'NFL',
    teams: 'Lions vs Dolphins',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'NFL',
    teams: 'Browns vs Saints',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'NFL',
    teams: 'Giants vs Eagles',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'NFL',
    teams: 'Rams vs Commanders',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'NFL',
    teams: 'Texans vs Chargers',
    madridTime: '22:05',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'NFL',
    teams: 'Raiders vs 49ers',
    madridTime: '22:05',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'NFL',
    teams: 'Packers vs Patriots',
    madridTime: '22:25',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'NFL',
    teams: 'Cardinals vs Seahawks',
    madridTime: '22:25',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Conference League',
    teams: 'Getafe vs Brighton',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'Brighton fans in Madrid? Watch it live near Puerta del Sol.',
    noteEs: '¿Aficionados del Brighton en Madrid? En directo junto a Puerta del Sol.',
    link: { href: '/brighton-fans-madrid/', labelEn: 'Brighton fans in Madrid: match guide', labelEs: 'Aficionados del Brighton en Madrid', hreflang: 'en', hrefEs: '/es/aficionados-brighton-madrid/' },
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'NFL',
    teams: 'NFL RedZone',
    madridTime: '19:00',
    approxDurationMin: 390,
    confirmedOnScreens: true,
    noteEn: 'NFL RedZone LIVE from 19:00 across the 19:00, 22:05 and 22:25 games (we close at 02:00).',
    noteEs: 'NFL RedZone EN DIRECTO desde las 19:00 durante los partidos de las 19:00, 22:05 y 22:25 (cerramos a las 02:00).',
  },
  {
    dateKey: '2026-11-02',
    whenLabel: 'Mon 2 Nov',
    competition: 'Premier League',
    teams: 'Newcastle United vs Everton',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-02',
    whenLabel: 'Mon 2 Nov',
    competition: 'LaLiga',
    teams: 'Deportivo vs Osasuna',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-03',
    whenLabel: 'Tue 3 Nov',
    competition: 'UEFA Champions League',
    teams: 'Shakhtar Donetsk vs Sporting CP',
    madridTime: '18:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-03',
    whenLabel: 'Tue 3 Nov',
    competition: 'UEFA Champions League',
    teams: 'Galatasaray vs Stuttgart',
    madridTime: '18:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-03',
    whenLabel: 'Tue 3 Nov',
    competition: 'UEFA Champions League',
    teams: 'Barcelona vs Aston Villa',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-03',
    whenLabel: 'Tue 3 Nov',
    competition: 'UEFA Champions League',
    teams: 'Atlético de Madrid vs Bayern Munich',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'Watch the match with other Bayern fans in Madrid, by Puerta del Sol.',
    noteEs: 'Para ver el partido con otros aficionados del Bayern en Madrid, junto a la Puerta del Sol.',
    link: { href: '/de/bayern-fans-madrid/', labelEn: 'Bayern fans: info in German', labelEs: 'Aficionados del Bayern: info en alemán', hreflang: 'de' },
  },
  {
    dateKey: '2026-11-03',
    whenLabel: 'Tue 3 Nov',
    competition: 'UEFA Champions League',
    teams: 'Manchester United vs Roma',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-03',
    whenLabel: 'Tue 3 Nov',
    competition: 'UEFA Champions League',
    teams: 'Feyenoord vs Inter',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-03',
    whenLabel: 'Tue 3 Nov',
    competition: 'UEFA Champions League',
    teams: 'Bodø/Glimt vs Lille',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-03',
    whenLabel: 'Tue 3 Nov',
    competition: 'UEFA Champions League',
    teams: 'Villarreal vs Paris Saint-Germain',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-03',
    whenLabel: 'Tue 3 Nov',
    competition: 'UEFA Champions League',
    teams: 'LASK vs Slovan Bratislava',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-04',
    whenLabel: 'Wed 4 Nov',
    competition: 'UEFA Champions League',
    teams: 'Fenerbahçe vs Liverpool',
    madridTime: '18:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-04',
    whenLabel: 'Wed 4 Nov',
    competition: 'UEFA Champions League',
    teams: 'AEK Athens vs Real Madrid',
    madridTime: '18:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-04',
    whenLabel: 'Wed 4 Nov',
    competition: 'UEFA Champions League',
    teams: 'Borussia Dortmund vs Betis',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-04',
    whenLabel: 'Wed 4 Nov',
    competition: 'UEFA Champions League',
    teams: 'Porto vs Napoli',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-04',
    whenLabel: 'Wed 4 Nov',
    competition: 'UEFA Champions League',
    teams: 'PSV vs Club Brugge',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-04',
    whenLabel: 'Wed 4 Nov',
    competition: 'UEFA Champions League',
    teams: 'RB Leipzig vs Manchester City',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-04',
    whenLabel: 'Wed 4 Nov',
    competition: 'UEFA Champions League',
    teams: 'Slavia Praha vs Arsenal',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-04',
    whenLabel: 'Wed 4 Nov',
    competition: 'UEFA Champions League',
    teams: 'Lens vs Como',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-04',
    whenLabel: 'Wed 4 Nov',
    competition: 'UEFA Champions League',
    teams: 'Viking vs Sabah',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-30',
    whenLabel: 'Fri 30 Oct',
    competition: 'LaLiga',
    teams: 'Villarreal vs Espanyol',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'LaLiga',
    teams: 'Levante vs Atlético de Madrid',
    madridTime: '14:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'LaLiga',
    teams: 'Rayo Vallecano vs Celta',
    madridTime: '16:15',
    confirmedOnScreens: true,
    channel: 'DAZN',
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'LaLiga',
    teams: 'Betis vs Málaga',
    madridTime: '18:30',
    confirmedOnScreens: true,
    channel: 'DAZN',
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'LaLiga',
    teams: 'Barcelona vs Alavés',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'Movistar Plus+, Orange Fútbol 1, Movistar LALIGA',
  },
  {
    dateKey: '2026-11-01',
    whenLabel: 'Sun 1 Nov',
    competition: 'LaLiga',
    teams: 'Getafe vs Sevilla',
    madridTime: '14:00',
    confirmedOnScreens: true,
    channel: 'DAZN',
  },
  {
    dateKey: '2026-11-01',
    whenLabel: 'Sun 1 Nov',
    competition: 'LaLiga',
    teams: 'Racing vs Real Madrid',
    madridTime: '16:15',
    confirmedOnScreens: true,
    noteEn: 'Sunday before the Monday bank holiday in Madrid. Live at Dubliners.',
    noteEs: 'Domingo víspera del festivo del lunes en Madrid. En directo en Dubliners.',
    channel: 'DAZN',
  },
  {
    dateKey: '2026-11-01',
    whenLabel: 'Sun 1 Nov',
    competition: 'LaLiga',
    teams: 'Elche vs Valencia',
    madridTime: '18:30',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-11-01',
    whenLabel: 'Sun 1 Nov',
    competition: 'LaLiga',
    teams: 'Athletic Club vs Real Sociedad',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'Basque derby. Sunday before the Monday bank holiday. Live at Dubliners.',
    noteEs: 'Derbi vasco. Domingo víspera del festivo del lunes. En directo en Dubliners.',
    channel: 'DAZN',
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Europa League',
    teams: 'AC Milan vs Ferencváros',
    madridTime: '18:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Europa League',
    teams: 'Real Sociedad vs Lyon',
    madridTime: '18:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Europa League',
    teams: 'Sparta Praha vs Bournemouth',
    madridTime: '18:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Europa League',
    teams: 'Rennes vs Olympiacos',
    madridTime: '18:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Europa League',
    teams: 'Anderlecht vs Salzburg',
    madridTime: '18:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Europa League',
    teams: 'Crystal Palace vs Hoffenheim',
    madridTime: '18:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Europa League',
    teams: 'NEC Nijmegen vs Omonia',
    madridTime: '18:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Europa League',
    teams: 'Lillestrøm vs Viktoria Plzeň',
    madridTime: '18:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Europa League',
    teams: 'Levski Sofia vs Jagiellonia',
    madridTime: '18:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Europa League',
    teams: 'Bayer Leverkusen vs Marseille',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Europa League',
    teams: 'Benfica vs Lech Poznań',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Europa League',
    teams: 'AZ Alkmaar vs Juventus',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Europa League',
    teams: 'Celtic vs Beşiktaş',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Europa League',
    teams: 'Sturm Graz vs Celje',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Europa League',
    teams: 'Sunderland vs Dinamo Zagreb',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Europa League',
    teams: 'Celta vs Union Saint-Gilloise',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Europa League',
    teams: 'Torreense vs Ararat-Armenia',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Europa League',
    teams: 'Hapoel Beer-Sheva vs OFI Crete',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Conference League',
    teams: 'Atalanta vs Kairat Almaty',
    madridTime: '18:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Conference League',
    teams: 'Midtjylland vs Ajax',
    madridTime: '18:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Conference League',
    teams: 'Crvena Zvezda vs Inter Escaldes',
    madridTime: '18:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Conference League',
    teams: 'KuPS Kuopio vs Gent',
    madridTime: '18:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Conference League',
    teams: 'Lincoln Red Imps vs Hajduk Split',
    madridTime: '18:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Conference League',
    teams: 'Trabzonspor vs Freiburg',
    madridTime: '18:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Conference League',
    teams: 'AGF Aarhus vs Braga',
    madridTime: '18:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Conference League',
    teams: 'Thun vs Hearts',
    madridTime: '18:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Conference League',
    teams: 'Mjällby vs Borac Banja Luka',
    madridTime: '18:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Conference League',
    teams: 'Monaco vs Nordsjælland',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Conference League',
    teams: 'Copenhagen vs Iberia 1999 Tbilisi',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Conference League',
    teams: 'Panathinaikos vs CSKA Sofia',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Conference League',
    teams: 'Lugano vs Kauno Žalgiris',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Conference League',
    teams: 'Twente vs Pafos',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Conference League',
    teams: 'Sint-Truiden vs Brann',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Conference League',
    teams: 'Universitatea Craiova vs Egnatia',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Conference League',
    teams: 'Riga FC vs Jablonec',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'Premier League',
    teams: 'Chelsea vs Manchester United',
    madridTime: '13:30',
    confirmedOnScreens: true,
    channel: 'DAZN',
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'Premier League',
    teams: 'Bournemouth vs Leeds United',
    madridTime: '16:00',
    confirmedOnScreens: true,
    channel: 'DAZN',
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'Premier League',
    teams: 'Brentford vs Nottingham Forest',
    madridTime: '16:00',
    confirmedOnScreens: true,
    channel: 'DAZN',
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'Premier League',
    teams: 'Coventry City vs Sunderland',
    madridTime: '16:00',
    confirmedOnScreens: true,
    channel: 'DAZN',
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'Premier League',
    teams: 'Hull City vs Ipswich Town',
    madridTime: '16:00',
    confirmedOnScreens: true,
    channel: 'DAZN',
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'Premier League',
    teams: 'Manchester City vs Brighton',
    madridTime: '16:00',
    confirmedOnScreens: true,
    channel: 'DAZN',
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'Premier League',
    teams: 'Tottenham Hotspur vs Crystal Palace',
    madridTime: '18:30',
    confirmedOnScreens: true,
    channel: 'DAZN',
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'Premier League',
    teams: 'Aston Villa vs Fulham',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'DAZN',
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'Event at Dubliners',
    competitionEs: 'Evento en Dubliners',
    teams: 'Halloween party at Dubliners',
    teamsEs: 'Fiesta de Halloween en Dubliners',
    madridTime: '19:00',
    kind: 'event',
    approxDurationMin: 360,
    noteEn: 'From 19:00: costumes, decorations and music.',
    noteEs: 'Desde las 19:00: disfraces, decoración y música.',
  },
  {
    dateKey: '2026-11-06',
    whenLabel: 'Fri 6 Nov',
    competition: 'Premier League',
    teams: 'Everton vs Coventry City',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-07',
    whenLabel: 'Sat 7 Nov',
    competition: 'Premier League',
    teams: 'Leeds United vs Tottenham Hotspur',
    madridTime: '13:30',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-07',
    whenLabel: 'Sat 7 Nov',
    competition: 'Premier League',
    teams: 'Arsenal vs Hull City',
    madridTime: '16:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-07',
    whenLabel: 'Sat 7 Nov',
    competition: 'Premier League',
    teams: 'Fulham vs Newcastle United',
    madridTime: '16:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-07',
    whenLabel: 'Sat 7 Nov',
    competition: 'Premier League',
    teams: 'Nottingham Forest vs Manchester City',
    madridTime: '18:30',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'Premier League',
    teams: 'Brighton vs Brentford',
    madridTime: '15:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'Premier League',
    teams: 'Crystal Palace vs Liverpool',
    madridTime: '15:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'Premier League',
    teams: 'Ipswich Town vs Bournemouth',
    madridTime: '15:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'Premier League',
    teams: 'Sunderland vs Chelsea',
    madridTime: '15:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'Premier League',
    teams: 'Manchester United vs Aston Villa',
    madridTime: '17:30',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-30',
    whenLabel: 'Fri 30 Oct',
    competition: 'URC',
    teams: 'Connacht vs Leinster',
    madridTime: '20:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-30',
    whenLabel: 'Fri 30 Oct',
    competition: 'URC',
    teams: 'Glasgow Warriors vs Lions',
    madridTime: '20:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'URC',
    teams: 'Bulls vs Scarlets',
    madridTime: '16:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'URC',
    teams: 'Dragons vs Zebre Parma',
    madridTime: '18:30',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'URC',
    teams: 'Ospreys vs Cardiff',
    madridTime: '20:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-30',
    whenLabel: 'Fri 30 Oct',
    competition: 'Premiership Rugby',
    teams: 'Bristol Bears vs Leicester Tigers',
    madridTime: '20:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'Premiership Rugby',
    teams: 'Exeter Chiefs vs Harlequins',
    madridTime: '16:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'Premiership Rugby',
    teams: 'Bath vs Sale Sharks',
    madridTime: '16:05',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-06',
    whenLabel: 'Fri 6 Nov',
    competition: 'Rugby Nations Championship',
    teams: 'Ireland vs Argentina',
    madridTime: '21:10',
    confirmedOnScreens: true,
  },
  // 20 Oct: Ireland men Nov 2026 (irishrugby.ie fixtures 20:10 / 16:40 Irish time + World Rugby API) = Madrid +1 h.
  {
    dateKey: '2026-11-14',
    whenLabel: 'Sat 14 Nov',
    competition: 'Rugby Nations Championship',
    teams: 'Ireland vs Fiji',
    madridTime: '21:10',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-21',
    whenLabel: 'Sat 21 Nov',
    competition: 'Rugby Nations Championship',
    teams: 'Ireland vs South Africa',
    madridTime: '17:40',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-07',
    whenLabel: 'Sat 7 Nov',
    competition: 'Rugby Nations Championship',
    teams: 'Italy vs South Africa',
    madridTime: '12:40',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-07',
    whenLabel: 'Sat 7 Nov',
    competition: 'Rugby Nations Championship',
    teams: 'Scotland vs New Zealand',
    madridTime: '15:10',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-07',
    whenLabel: 'Sat 7 Nov',
    competition: 'Rugby Nations Championship',
    teams: 'Wales vs Japan',
    madridTime: '17:40',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-07',
    whenLabel: 'Sat 7 Nov',
    competition: 'Rugby Nations Championship',
    teams: 'France vs Fiji',
    madridTime: '21:10',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'Rugby Nations Championship',
    teams: 'England vs Australia',
    madridTime: '16:10',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-06',
    whenLabel: 'Fri 6 Nov',
    competition: 'LaLiga',
    teams: 'Sevilla vs Alavés',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-07',
    whenLabel: 'Sat 7 Nov',
    competition: 'LaLiga',
    teams: 'Málaga vs Racing',
    madridTime: '14:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-07',
    whenLabel: 'Sat 7 Nov',
    competition: 'LaLiga',
    teams: 'Espanyol vs Deportivo',
    madridTime: '16:15',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-07',
    whenLabel: 'Sat 7 Nov',
    competition: 'LaLiga',
    teams: 'Osasuna vs Athletic Club',
    madridTime: '18:30',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-07',
    whenLabel: 'Sat 7 Nov',
    competition: 'LaLiga',
    teams: 'Valencia vs Real Madrid',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'LaLiga',
    teams: 'Elche vs Betis',
    madridTime: '14:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'LaLiga',
    teams: 'Real Sociedad vs Rayo Vallecano',
    madridTime: '16:15',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'LaLiga',
    teams: 'Celta vs Levante',
    madridTime: '18:30',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'LaLiga',
    teams: 'Villarreal vs Getafe',
    madridTime: '18:30',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'LaLiga',
    teams: 'Atlético de Madrid vs Barcelona',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'Top 14',
    teams: 'Clermont vs Racing 92',
    madridTime: '14:30',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'Top 14',
    teams: 'Bordeaux-Bègles vs Bayonne',
    madridTime: '16:35',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'Top 14',
    teams: 'Lyon vs Vannes',
    madridTime: '16:35',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'Top 14',
    teams: 'Montpellier vs Castres',
    madridTime: '16:35',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'Top 14',
    teams: 'Stade Français vs La Rochelle',
    madridTime: '16:35',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'Top 14',
    teams: 'Perpignan vs Toulon',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-01',
    whenLabel: 'Sun 1 Nov',
    competition: 'Top 14',
    teams: 'Pau vs Toulouse',
    madridTime: '21:05',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-07',
    whenLabel: 'Sat 7 Nov',
    competition: 'Top 14',
    teams: 'Vannes vs Bordeaux-Bègles',
    madridTime: '14:30',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-07',
    whenLabel: 'Sat 7 Nov',
    competition: 'Top 14',
    teams: 'Castres vs Racing 92',
    madridTime: '16:35',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-07',
    whenLabel: 'Sat 7 Nov',
    competition: 'Top 14',
    teams: 'Montpellier vs Lyon',
    madridTime: '16:35',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-07',
    whenLabel: 'Sat 7 Nov',
    competition: 'Top 14',
    teams: 'Pau vs Perpignan',
    madridTime: '16:35',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-07',
    whenLabel: 'Sat 7 Nov',
    competition: 'Top 14',
    teams: 'Toulon vs Stade Français',
    madridTime: '16:35',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-07',
    whenLabel: 'Sat 7 Nov',
    competition: 'Top 14',
    teams: 'Toulouse vs Clermont',
    madridTime: '16:35',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'Top 14',
    teams: 'La Rochelle vs Bayonne',
    madridTime: '21:05',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-30',
    whenLabel: 'Fri 30 Oct',
    competition: 'WXV Global Series (women)',
    teams: 'USA vs England',
    madridTime: '22:15',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'WXV Global Series (women)',
    teams: 'South Africa vs Ireland',
    madridTime: '14:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-07',
    whenLabel: 'Sat 7 Nov',
    competition: 'World Rugby Nations Cup',
    teams: 'Spain vs Uruguay',
    madridTime: '16:00',
    confirmedOnScreens: true,
    noteEn: 'Played in Madrid, at the Estadio Nacional Universidad Complutense.',
    noteEs: 'Se juega en Madrid, en el Estadio Nacional de la Universidad Complutense.',
  },
  {
    dateKey: '2026-11-15',
    whenLabel: 'Sun 15 Nov',
    competition: 'UEFA Nations League',
    teams: 'Spain vs England',
    madridTime: '20:45',
    confirmedOnScreens: true,
    noteEn: 'Played in Madrid, at the Riyadh Air Metropolitano. Watch the match with other England fans.',
    noteEs: 'Se juega en Madrid, en el Riyadh Air Metropolitano. Para ver el partido con otros aficionados ingleses.',
    link: { href: '/england-fans-madrid/', labelEn: 'England fans in Madrid: match guide', labelEs: 'Aficionados ingleses en Madrid: guía (en inglés)', hreflang: 'en' },
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'Premiership Rugby',
    teams: 'Saracens vs Newcastle Red Bulls',
    madridTime: '16:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'Premiership Rugby',
    teams: 'Northampton Saints vs Gloucester',
    madridTime: '18:30',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'URC',
    teams: 'Benetton vs Edinburgh',
    madridTime: '16:00',
    confirmedOnScreens: true,
  },
  // 20 Oct: UEFA Nations League 12–17 Nov (uefa.com match API, competitionId 2014; times CET = Madrid). Spain vs England 15 Nov already above.
  {
    dateKey: '2026-11-12',
    whenLabel: 'Thu 12 Nov',
    competition: 'UEFA Nations League',
    teams: 'Czechia vs Spain',
    madridTime: '20:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-12',
    whenLabel: 'Thu 12 Nov',
    competition: 'UEFA Nations League',
    teams: 'England vs Croatia',
    madridTime: '20:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-13',
    whenLabel: 'Fri 13 Nov',
    competition: 'UEFA Nations League',
    teams: 'Scotland vs North Macedonia',
    madridTime: '20:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-14',
    whenLabel: 'Sat 14 Nov',
    competition: 'UEFA Nations League',
    teams: 'Norway vs Wales',
    madridTime: '18:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-14',
    whenLabel: 'Sat 14 Nov',
    competition: 'UEFA Nations League',
    teams: 'Austria vs Republic of Ireland',
    madridTime: '20:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-14',
    whenLabel: 'Sat 14 Nov',
    competition: 'UEFA Nations League',
    teams: 'Northern Ireland vs Ukraine',
    madridTime: '20:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-16',
    whenLabel: 'Mon 16 Nov',
    competition: 'UEFA Nations League',
    teams: 'Germany vs Netherlands',
    madridTime: '20:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-16',
    whenLabel: 'Mon 16 Nov',
    competition: 'UEFA Nations League',
    teams: 'Switzerland vs Scotland',
    madridTime: '20:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-17',
    whenLabel: 'Tue 17 Nov',
    competition: 'UEFA Nations League',
    teams: 'Wales vs Portugal',
    madridTime: '20:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-17',
    whenLabel: 'Tue 17 Nov',
    competition: 'UEFA Nations League',
    teams: 'Hungary vs Northern Ireland',
    madridTime: '20:45',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-17',
    whenLabel: 'Tue 17 Nov',
    competition: 'UEFA Nations League',
    teams: 'Republic of Ireland vs Kosovo',
    madridTime: '20:45',
    confirmedOnScreens: true,
  },
  // 20 Oct: Real Madrid vs PSV, UCL league phase MD5 (uefa.com match 2049625, 2026-11-24T20:00Z = 21:00 CET).
  {
    dateKey: '2026-11-24',
    whenLabel: 'Tue 24 Nov',
    competition: 'UEFA Champions League',
    teams: 'Real Madrid vs PSV Eindhoven',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'PSV fans welcome: watch the match with other fans by Puerta del Sol, open from 12:00. Welkom in Madrid!',
    noteEs: 'Bienvenidos, aficionados del PSV: para ver el partido con otros aficionados junto a Sol, abrimos desde las 12:00. Welkom in Madrid!',
    link: { href: '/psv-fans-madrid/', labelEn: 'PSV fans in Madrid: match guide (EN · NL)', labelEs: 'Aficionados del PSV en Madrid: guía (en inglés y neerlandés)', hreflang: 'en' },
  },
  {
    dateKey: '2026-10-29',
    whenLabel: 'Thu 29 Oct',
    competition: 'EuroLeague',
    teams: 'Real Madrid vs Fenerbahçe',
    madridTime: '20:45',
    confirmedOnScreens: true,
    noteEn: 'EuroLeague basketball (Movistar Arena, Madrid). Live at Dubliners.',
    noteEs: 'Baloncesto, EuroLeague (Movistar Arena, Madrid). En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-30',
    whenLabel: 'Fri 30 Oct',
    competition: 'NHL',
    teams: 'Vegas Golden Knights vs New Jersey Devils',
    madridTime: '23:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'NHL',
    teams: 'Boston Bruins vs Chicago Blackhawks',
    madridTime: '18:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'NHL',
    teams: 'Detroit Red Wings vs St. Louis Blues',
    madridTime: '18:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'NHL',
    teams: 'New York Islanders vs Edmonton Oilers',
    madridTime: '19:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'NHL',
    teams: 'Nashville Predators vs Tampa Bay Lightning',
    madridTime: '19:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'NHL',
    teams: 'Los Angeles Kings vs Buffalo Sabres',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'NHL',
    teams: 'San Jose Sharks vs Ottawa Senators',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'Formula 1',
    teams: 'Mexico City Grand Prix — Qualifying',
    madridTime: '22:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-01',
    whenLabel: 'Sun 1 Nov',
    competition: 'Formula 1',
    teams: 'Mexico City Grand Prix — Race',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'Sunday before the Monday bank holiday. Live at Dubliners.',
    noteEs: 'Domingo víspera del festivo del lunes. En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-29',
    whenLabel: 'Thu 29 Oct',
    competition: 'EFL Cup',
    teams: 'Everton vs Newcastle United',
    madridTime: '20:45',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-30',
    whenLabel: 'Fri 30 Oct',
    competition: 'Formula 1',
    teams: 'Mexico City Grand Prix — Practice 1',
    madridTime: '19:30',
    approxDurationMin: 60,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-30',
    whenLabel: 'Fri 30 Oct',
    competition: 'Formula 1',
    teams: 'Mexico City Grand Prix — Practice 2',
    madridTime: '23:00',
    approxDurationMin: 60,
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-31',
    whenLabel: 'Sat 31 Oct',
    competition: 'Bundesliga',
    teams: 'Bayern Munich vs Borussia Dortmund',
    madridTime: '18:30',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-07',
    whenLabel: 'Sat 7 Nov',
    competition: 'Formula 1',
    teams: 'São Paulo Grand Prix — Qualifying',
    madridTime: '19:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'Formula 1',
    teams: 'São Paulo Grand Prix — Race',
    madridTime: '18:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-01',
    whenLabel: 'Sun 1 Nov',
    competition: 'NFL',
    teams: 'NFL RedZone',
    madridTime: '19:00',
    approxDurationMin: 390,
    confirmedOnScreens: true,
    channel: 'NFL RedZone',
    noteEn: 'Every touchdown from the Sunday games, from 19:00. Sunday before the Monday bank holiday.',
    noteEs: 'Todos los touchdowns de los partidos del domingo, desde las 19:00. Víspera del festivo del lunes.',
  },
  {
    dateKey: '2026-11-01',
    whenLabel: 'Sun 1 Nov',
    competition: 'NHL',
    teams: 'Carolina Hurricanes vs Winnipeg Jets',
    madridTime: '19:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-01',
    whenLabel: 'Sun 1 Nov',
    competition: 'NHL',
    teams: 'Washington Capitals vs Minnesota Wild',
    madridTime: '21:30',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-01',
    whenLabel: 'Sun 1 Nov',
    competition: 'NHL',
    teams: 'Philadelphia Flyers vs Utah Mammoth',
    madridTime: '22:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-02',
    whenLabel: 'Mon 2 Nov',
    competition: 'NHL',
    teams: 'New York Rangers vs Edmonton Oilers',
    madridTime: '00:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-11-26',
    whenLabel: 'Thu 26 Nov',
    competition: 'NFL',
    teams: 'Bears vs Lions',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Thanksgiving Thursday. Live at Dubliners.',
    noteEs: 'Jueves de Thanksgiving. En directo en Dubliners.',
    link: { href: '/thanksgiving-madrid/', labelEn: 'Thanksgiving NFL in Madrid', labelEs: 'NFL de Thanksgiving en Madrid', hrefEs: '/es/thanksgiving-madrid/' },
  },
  {
    dateKey: '2026-11-26',
    whenLabel: 'Thu 26 Nov',
    competition: 'NFL',
    teams: 'Eagles vs Cowboys',
    madridTime: '22:30',
    confirmedOnScreens: true,
    noteEn: 'Thanksgiving Thursday. Live at Dubliners.',
    noteEs: 'Jueves de Thanksgiving. En directo en Dubliners.',
    link: { href: '/thanksgiving-madrid/', labelEn: 'Thanksgiving NFL in Madrid', labelEs: 'NFL de Thanksgiving en Madrid', hrefEs: '/es/thanksgiving-madrid/' },
  },
  // 26 Oct (DG LUNES-26): visiting-fan rows from Radar fichas 5 bis. NO channel.
  {
    dateKey: '2026-11-04',
    whenLabel: 'Wed 4 Nov',
    competition: 'EuroLeague',
    teams: 'Real Madrid vs Panathinaikos',
    madridTime: '20:45',
    confirmedOnScreens: true,
    noteEn: 'EuroLeague basketball (Movistar Arena, Madrid). Watch it with other fans near Sol.',
    noteEs: 'Baloncesto, EuroLeague (Movistar Arena, Madrid). Para ver el partido con otros aficionados junto a Sol.',
  },
  {
    dateKey: '2026-11-12',
    whenLabel: 'Thu 12 Nov',
    competition: 'EuroLeague',
    teams: 'Real Madrid vs Crvena Zvezda',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'EuroLeague basketball (Movistar Arena, Madrid). Watch it with other fans near Sol.',
    noteEs: 'Baloncesto, EuroLeague (Movistar Arena, Madrid). Para ver el partido con otros aficionados junto a Sol.',
  },
  {
    dateKey: '2026-11-14',
    whenLabel: 'Sat 14 Nov',
    competition: 'World Rugby Nations Cup',
    teams: 'Spain vs Chile',
    madridTime: '17:00',
    confirmedOnScreens: true,
    noteEn: 'Venue pending confirmation (expected: Estadio Municipal de Butarque, Leganés). Ireland vs Fiji follows at 21:10.',
    noteEs: 'Sede pendiente de confirmación (prevista: Estadio Municipal de Butarque, Leganés). Después, Irlanda–Fiyi a las 21:10.',
  },
  {
    dateKey: '2026-11-25',
    whenLabel: 'Wed 25 Nov',
    competition: 'EuroLeague',
    teams: 'Real Madrid vs Žalgiris Kaunas',
    madridTime: '20:45',
    confirmedOnScreens: true,
    noteEn: 'EuroLeague basketball (Movistar Arena, Madrid). Watch it with other fans near Sol.',
    noteEs: 'Baloncesto, EuroLeague (Movistar Arena, Madrid). Para ver el partido con otros aficionados junto a Sol.',
  },
  {
    dateKey: '2026-11-25',
    whenLabel: 'Wed 25 Nov',
    competition: 'UEFA Champions League',
    teams: 'Atlético de Madrid vs Viking',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'Played in Madrid, at the Riyadh Air Metropolitano. Watch the match with other Viking fans.',
    noteEs: 'Se juega en Madrid, en el Riyadh Air Metropolitano. Para ver el partido con otros aficionados del Viking.',
    link: { href: '/viking-fans-madrid/', labelEn: 'Viking fans in Madrid: match guide (EN · NO)', labelEs: 'Aficionados del Viking en Madrid: guía (en inglés y noruego)', hreflang: 'en' },
  },
  // 26 Oct (DG follow-up 16:11): Tue 27 / Wed 28 Oct + 9–23 Nov reinforcement. Sources per row in
  // /workspace/dubliners-agenda-2026-10-26/FUENTES.md. NO channel. NFL without RedZone (owner-confirmed only 1 + 8 Nov).
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'NHL',
    teams: 'Philadelphia Flyers vs Columbus Blue Jackets',
    madridTime: '00:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'NBA',
    teams: 'Boston Celtics vs Brooklyn Nets',
    madridTime: '00:30',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'UEFA Women\'s Champions League',
    teams: 'Bayern Munich vs Real Madrid',
    madridTime: '18:45',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'UEFA Women\'s Champions League',
    teams: 'Chelsea vs Roma',
    madridTime: '18:45',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'UEFA Women\'s Champions League',
    teams: 'Arsenal vs Benfica',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'EFL Cup',
    teams: 'Manchester City vs Brighton',
    madridTime: '20:30',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'EFL Cup',
    teams: 'Bournemouth vs Aston Villa',
    madridTime: '20:45',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'EFL Cup',
    teams: 'Fulham vs Crystal Palace',
    madridTime: '20:45',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'EFL Cup',
    teams: 'Sunderland vs Brentford',
    madridTime: '20:45',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'EFL Cup',
    teams: 'Liverpool vs Chelsea',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'DFB-Pokal',
    teams: 'Bayern Munich vs Magdeburg',
    madridTime: '20:45',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'Copa del Rey',
    teams: 'Trival Valderas vs Leganés',
    madridTime: '20:00',
    confirmedOnScreens: true,
    noteEn: 'Copa del Rey with Madrid-region clubs. Live at Dubliners.',
    noteEs: 'Copa del Rey con equipos de la Comunidad de Madrid. En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'Copa del Rey',
    teams: 'Navalcarnero vs Real Betis',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'Copa del Rey from the Madrid region. Live at Dubliners.',
    noteEs: 'Copa del Rey desde la Comunidad de Madrid. En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-29',
    whenLabel: 'Thu 29 Oct',
    competition: 'NBA',
    teams: 'Atlanta Hawks vs Miami Heat',
    madridTime: '00:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-29',
    whenLabel: 'Thu 29 Oct',
    competition: 'NBA',
    teams: 'Cleveland Cavaliers vs Washington Wizards',
    madridTime: '00:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-29',
    whenLabel: 'Thu 29 Oct',
    competition: 'NBA',
    teams: 'Detroit Pistons vs Charlotte Hornets',
    madridTime: '00:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-29',
    whenLabel: 'Thu 29 Oct',
    competition: 'NBA',
    teams: 'Indiana Pacers vs Philadelphia 76ers',
    madridTime: '00:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-29',
    whenLabel: 'Thu 29 Oct',
    competition: 'NBA',
    teams: 'Toronto Raptors vs Orlando Magic',
    madridTime: '00:30',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-29',
    whenLabel: 'Thu 29 Oct',
    competition: 'NHL',
    teams: 'Washington Capitals vs Philadelphia Flyers',
    madridTime: '00:30',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-10',
    whenLabel: 'Tue 10 Nov',
    competition: 'UEFA Women\'s Champions League',
    teams: 'Real Madrid vs Paris FC',
    madridTime: '18:45',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-10',
    whenLabel: 'Tue 10 Nov',
    competition: 'UEFA Women\'s Champions League',
    teams: 'Paris Saint-Germain vs Bayern Munich',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-12',
    whenLabel: 'Thu 12 Nov',
    competition: 'UEFA Women\'s Champions League',
    teams: 'Barcelona vs Arsenal',
    madridTime: '18:45',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-18',
    whenLabel: 'Wed 18 Nov',
    competition: 'UEFA Women\'s Champions League',
    teams: 'Real Madrid vs Inter',
    madridTime: '18:45',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-18',
    whenLabel: 'Wed 18 Nov',
    competition: 'UEFA Women\'s Champions League',
    teams: 'Chelsea vs Paris Saint-Germain',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-19',
    whenLabel: 'Thu 19 Nov',
    competition: 'UEFA Women\'s Champions League',
    teams: 'Arsenal vs OL Lyonnes',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-13',
    whenLabel: 'Fri 13 Nov',
    competition: 'Rugby Nations Championship',
    teams: 'France vs South Africa',
    madridTime: '21:10',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-14',
    whenLabel: 'Sat 14 Nov',
    competition: 'Rugby Nations Championship',
    teams: 'Italy vs Argentina',
    madridTime: '12:40',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-14',
    whenLabel: 'Sat 14 Nov',
    competition: 'Rugby Nations Championship',
    teams: 'Wales vs New Zealand',
    madridTime: '15:10',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-14',
    whenLabel: 'Sat 14 Nov',
    competition: 'Rugby Nations Championship',
    teams: 'England vs Japan',
    madridTime: '17:40',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-15',
    whenLabel: 'Sun 15 Nov',
    competition: 'Rugby Nations Championship',
    teams: 'Scotland vs Australia',
    madridTime: '16:10',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-21',
    whenLabel: 'Sat 21 Nov',
    competition: 'Rugby Nations Championship',
    teams: 'England vs New Zealand',
    madridTime: '15:10',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-21',
    whenLabel: 'Sat 21 Nov',
    competition: 'Rugby Nations Championship',
    teams: 'Scotland vs Japan',
    madridTime: '15:10',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-21',
    whenLabel: 'Sat 21 Nov',
    competition: 'Rugby Nations Championship',
    teams: 'Italy vs Fiji',
    madridTime: '17:40',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-21',
    whenLabel: 'Sat 21 Nov',
    competition: 'Rugby Nations Championship',
    teams: 'France vs Argentina',
    madridTime: '21:10',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-21',
    whenLabel: 'Sat 21 Nov',
    competition: 'Rugby Nations Championship',
    teams: 'Wales vs Australia',
    madridTime: '21:10',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-21',
    whenLabel: 'Sat 21 Nov',
    competition: 'World Rugby Nations Cup',
    teams: 'Spain vs Samoa',
    madridTime: '17:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-15',
    whenLabel: 'Sun 15 Nov',
    competition: 'NFL',
    teams: 'Patriots vs Lions',
    madridTime: '15:30',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners. Played in Munich.',
    noteEs: 'En directo en Dubliners. Se juega en Múnich.',
  },
  {
    dateKey: '2026-11-15',
    whenLabel: 'Sun 15 Nov',
    competition: 'NFL',
    teams: 'Chiefs vs Falcons',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-15',
    whenLabel: 'Sun 15 Nov',
    competition: 'NFL',
    teams: 'Texans vs Browns',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-15',
    whenLabel: 'Sun 15 Nov',
    competition: 'NFL',
    teams: 'Vikings vs Packers',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-15',
    whenLabel: 'Sun 15 Nov',
    competition: 'NFL',
    teams: 'Dolphins vs Colts',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-15',
    whenLabel: 'Sun 15 Nov',
    competition: 'NFL',
    teams: 'Panthers vs Saints',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-15',
    whenLabel: 'Sun 15 Nov',
    competition: 'NFL',
    teams: 'Bills vs Jets',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-15',
    whenLabel: 'Sun 15 Nov',
    competition: 'NFL',
    teams: 'Jaguars vs Titans',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-15',
    whenLabel: 'Sun 15 Nov',
    competition: 'NFL',
    teams: 'Rams vs Cardinals',
    madridTime: '22:05',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-15',
    whenLabel: 'Sun 15 Nov',
    competition: 'NFL',
    teams: 'Seahawks vs Raiders',
    madridTime: '22:05',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-15',
    whenLabel: 'Sun 15 Nov',
    competition: 'NFL',
    teams: '49ers vs Cowboys',
    madridTime: '22:25',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-22',
    whenLabel: 'Sun 22 Nov',
    competition: 'NFL',
    teams: 'Dolphins vs Bills',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-22',
    whenLabel: 'Sun 22 Nov',
    competition: 'NFL',
    teams: 'Ravens vs Panthers',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-22',
    whenLabel: 'Sun 22 Nov',
    competition: 'NFL',
    teams: 'Saints vs Bears',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-22',
    whenLabel: 'Sun 22 Nov',
    competition: 'NFL',
    teams: 'Titans vs Cowboys',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-22',
    whenLabel: 'Sun 22 Nov',
    competition: 'NFL',
    teams: 'Buccaneers vs Lions',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-22',
    whenLabel: 'Sun 22 Nov',
    competition: 'NFL',
    teams: 'Cardinals vs Chiefs',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-22',
    whenLabel: 'Sun 22 Nov',
    competition: 'NFL',
    teams: 'Jaguars vs Giants',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-22',
    whenLabel: 'Sun 22 Nov',
    competition: 'NFL',
    teams: 'Jets vs Chargers',
    madridTime: '22:05',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-22',
    whenLabel: 'Sun 22 Nov',
    competition: 'NFL',
    teams: 'Raiders vs Broncos',
    madridTime: '22:25',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-22',
    whenLabel: 'Sun 22 Nov',
    competition: 'NFL',
    teams: 'Steelers vs Eagles',
    madridTime: '22:25',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-21',
    whenLabel: 'Sat 21 Nov',
    competition: 'Premier League',
    teams: 'Manchester City vs Fulham',
    madridTime: '13:30',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-21',
    whenLabel: 'Sat 21 Nov',
    competition: 'Premier League',
    teams: 'Aston Villa vs Sunderland',
    madridTime: '16:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-21',
    whenLabel: 'Sat 21 Nov',
    competition: 'Premier League',
    teams: 'Bournemouth vs Nottingham Forest',
    madridTime: '16:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-21',
    whenLabel: 'Sat 21 Nov',
    competition: 'Premier League',
    teams: 'Chelsea vs Leeds United',
    madridTime: '16:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-21',
    whenLabel: 'Sat 21 Nov',
    competition: 'Premier League',
    teams: 'Coventry City vs Crystal Palace',
    madridTime: '16:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-21',
    whenLabel: 'Sat 21 Nov',
    competition: 'Premier League',
    teams: 'Tottenham Hotspur vs Ipswich Town',
    madridTime: '16:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-21',
    whenLabel: 'Sat 21 Nov',
    competition: 'Premier League',
    teams: 'Newcastle United vs Arsenal',
    madridTime: '18:30',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-22',
    whenLabel: 'Sun 22 Nov',
    competition: 'Premier League',
    teams: 'Hull City vs Brighton',
    madridTime: '15:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-22',
    whenLabel: 'Sun 22 Nov',
    competition: 'Premier League',
    teams: 'Liverpool vs Manchester United',
    madridTime: '17:30',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-23',
    whenLabel: 'Mon 23 Nov',
    competition: 'Premier League',
    teams: 'Brentford vs Everton',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-20',
    whenLabel: 'Fri 20 Nov',
    competition: 'LaLiga',
    teams: 'Athletic Club vs Espanyol',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-21',
    whenLabel: 'Sat 21 Nov',
    competition: 'LaLiga',
    teams: 'Alavés vs Deportivo',
    madridTime: '14:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-21',
    whenLabel: 'Sat 21 Nov',
    competition: 'LaLiga',
    teams: 'Rayo Vallecano vs Valencia',
    madridTime: '16:15',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-21',
    whenLabel: 'Sat 21 Nov',
    competition: 'LaLiga',
    teams: 'Sevilla vs Real Betis',
    madridTime: '18:30',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-21',
    whenLabel: 'Sat 21 Nov',
    competition: 'LaLiga',
    teams: 'Real Madrid vs Celta',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-22',
    whenLabel: 'Sun 22 Nov',
    competition: 'LaLiga',
    teams: 'Barcelona vs Villarreal',
    madridTime: '14:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-22',
    whenLabel: 'Sun 22 Nov',
    competition: 'LaLiga',
    teams: 'Racing Santander vs Real Sociedad',
    madridTime: '16:15',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-22',
    whenLabel: 'Sun 22 Nov',
    competition: 'LaLiga',
    teams: 'Osasuna vs Málaga',
    madridTime: '18:30',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-22',
    whenLabel: 'Sun 22 Nov',
    competition: 'LaLiga',
    teams: 'Getafe vs Atlético de Madrid',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-11-23',
    whenLabel: 'Mon 23 Nov',
    competition: 'LaLiga',
    teams: 'Levante vs Elche',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
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
 * - UPCOMING: kickoff on a later Madrid date
 * The client script (FixtureAntiStale) applies exactly the same rule in the browser.
 */
export function buildNow(): Date {
  // Test hook: AGENDA_NOW=2026-10-09T20:50:00+02:00 npm run build (never set in deploy).
  const v = typeof process !== 'undefined' ? process.env?.AGENDA_NOW : undefined;
  return v ? new Date(v) : new Date();
}

export function agendaAt(now: Date = buildNow()): { todayKey: string; today: Fixture[]; upcoming: Fixture[] } {
  const todayKey = madridToday(now);
  const t = now.getTime();
  const live = sortFixturesSoonestFirst(FIXTURES).filter((f) => t < fixtureEndMs(f));
  const today = live.filter((f) => f.dateKey === todayKey || (f.dateKey < todayKey && fixtureStartMs(f) <= t));
  const upcoming = live.filter((f) => f.dateKey > todayKey);
  return { todayKey, today, upcoming };
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
