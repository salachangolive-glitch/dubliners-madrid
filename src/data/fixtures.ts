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
 * - 18 Oct: rows dateKey <= 2026-10-17 RETIRED (morning). NFL Sun 18 Oct (nfl.com 2026 week 6, ET+6 → CEST; Away vs Home like other NFL rows) ADDED,
 *   11 games, no channel; Cowboys at Packers 02:20 Mon EXCLUDED (Sunday close 02:00).
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
 * Opening hours: see src/data/hours.ts (master source).
 * Screen claim ONLY when confirmedOnScreens === true. Never from TV-rights alone.
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
  /** Broadcaster name as published by the operator (no dial numbers). */
  channel?: string;
};

export const FIXTURES: Fixture[] = [
  {
    dateKey: '2026-10-18',
    whenLabel: 'Sun 18 Oct',
    competition: 'NFL',
    teams: 'Texans vs Jaguars',
    madridTime: '15:30',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners. NFL International Game, played at Wembley Stadium (London).',
    noteEs: 'En directo en Dubliners. Partido internacional de la NFL en el estadio de Wembley (Londres).',
  },
  {
    dateKey: '2026-10-18',
    whenLabel: 'Sun 18 Oct',
    competition: 'NFL',
    teams: 'Bears vs Falcons',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-18',
    whenLabel: 'Sun 18 Oct',
    competition: 'NFL',
    teams: 'Ravens vs Browns',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-18',
    whenLabel: 'Sun 18 Oct',
    competition: 'NFL',
    teams: 'Titans vs Colts',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-18',
    whenLabel: 'Sun 18 Oct',
    competition: 'NFL',
    teams: 'Jets vs Patriots',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-18',
    whenLabel: 'Sun 18 Oct',
    competition: 'NFL',
    teams: 'Saints vs Giants',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-18',
    whenLabel: 'Sun 18 Oct',
    competition: 'NFL',
    teams: 'Panthers vs Eagles',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-18',
    whenLabel: 'Sun 18 Oct',
    competition: 'NFL',
    teams: 'Steelers vs Buccaneers',
    madridTime: '19:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-18',
    whenLabel: 'Sun 18 Oct',
    competition: 'NFL',
    teams: 'Cardinals vs Rams',
    madridTime: '22:05',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-18',
    whenLabel: 'Sun 18 Oct',
    competition: 'NFL',
    teams: 'Chargers vs Chiefs',
    madridTime: '22:25',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-18',
    whenLabel: 'Sun 18 Oct',
    competition: 'NFL',
    teams: 'Bills vs Raiders',
    madridTime: '22:25',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-24',
    whenLabel: 'Sat 24 Oct',
    competition: 'URC',
    teams: 'Leinster vs Munster',
    madridTime: '19:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-24',
    whenLabel: 'Sat 24 Oct',
    competition: 'Premier League',
    teams: 'Aston Villa vs Manchester City',
    madridTime: '13:30',
    confirmedOnScreens: true,
    channel: 'DAZN',
  },
  {
    dateKey: '2026-10-24',
    whenLabel: 'Sat 24 Oct',
    competition: 'Premier League',
    teams: 'Arsenal vs Everton',
    madridTime: '16:00',
    confirmedOnScreens: true,
    channel: 'DAZN',
  },
  {
    dateKey: '2026-10-24',
    whenLabel: 'Sat 24 Oct',
    competition: 'Premier League',
    teams: 'Chelsea vs Tottenham',
    madridTime: '18:30',
    confirmedOnScreens: true,
    channel: 'DAZN',
  },
  {
    dateKey: '2026-10-25',
    whenLabel: 'Sun 25 Oct',
    competition: 'Premier League',
    teams: 'Crystal Palace vs Newcastle United',
    madridTime: '15:00',
    confirmedOnScreens: true,
    channel: 'DAZN',
  },
  {
    dateKey: '2026-10-25',
    whenLabel: 'Sun 25 Oct',
    competition: 'Premier League',
    teams: 'Liverpool vs Brighton',
    madridTime: '15:00',
    confirmedOnScreens: true,
    channel: 'DAZN',
  },
  {
    dateKey: '2026-10-25',
    whenLabel: 'Sun 25 Oct',
    competition: 'Premier League',
    teams: 'Manchester United vs Bournemouth',
    madridTime: '15:00',
    confirmedOnScreens: true,
    channel: 'DAZN',
  },
  {
    dateKey: '2026-10-25',
    whenLabel: 'Sun 25 Oct',
    competition: 'NFL',
    teams: 'Steelers vs Saints',
    madridTime: '14:30',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners. NFL International Game, played at the Stade de France (Saint-Denis, Paris).',
    noteEs: 'En directo en Dubliners. Partido internacional de la NFL en el Stade de France (Saint-Denis, París).',
  },
  {
    dateKey: '2026-10-25',
    whenLabel: 'Sun 25 Oct',
    competition: 'NFL',
    teams: '49ers vs Falcons',
    madridTime: '18:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-25',
    whenLabel: 'Sun 25 Oct',
    competition: 'NFL',
    teams: 'Bengals vs Ravens',
    madridTime: '18:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-25',
    whenLabel: 'Sun 25 Oct',
    competition: 'NFL',
    teams: 'Buccaneers vs Panthers',
    madridTime: '18:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-25',
    whenLabel: 'Sun 25 Oct',
    competition: 'NFL',
    teams: 'Giants vs Texans',
    madridTime: '18:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-25',
    whenLabel: 'Sun 25 Oct',
    competition: 'NFL',
    teams: 'Colts vs Vikings',
    madridTime: '18:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-25',
    whenLabel: 'Sun 25 Oct',
    competition: 'NFL',
    teams: 'Dolphins vs Jets',
    madridTime: '18:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-25',
    whenLabel: 'Sun 25 Oct',
    competition: 'NFL',
    teams: 'Browns vs Titans',
    madridTime: '18:00',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-25',
    whenLabel: 'Sun 25 Oct',
    competition: 'NFL',
    teams: 'Broncos vs Cardinals',
    madridTime: '21:05',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-25',
    whenLabel: 'Sun 25 Oct',
    competition: 'NFL',
    teams: 'Packers vs Lions',
    madridTime: '21:25',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-25',
    whenLabel: 'Sun 25 Oct',
    competition: 'NFL',
    teams: 'Rams vs Raiders',
    madridTime: '21:25',
    confirmedOnScreens: true,
    noteEn: 'Live at Dubliners.',
    noteEs: 'En directo en Dubliners.',
  },
  {
    dateKey: '2026-10-23',
    whenLabel: 'Fri 23 Oct',
    competition: 'LaLiga',
    teams: 'Alavés vs Málaga',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'DAZN',
  },
  {
    dateKey: '2026-10-24',
    whenLabel: 'Sat 24 Oct',
    competition: 'LaLiga',
    teams: 'Rayo Vallecano vs Elche',
    madridTime: '14:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-24',
    whenLabel: 'Sat 24 Oct',
    competition: 'LaLiga',
    teams: 'Racing de Santander vs Espanyol',
    madridTime: '16:15',
    confirmedOnScreens: true,
    channel: 'DAZN',
  },
  {
    dateKey: '2026-10-24',
    whenLabel: 'Sat 24 Oct',
    competition: 'LaLiga',
    teams: 'Valencia vs Villarreal',
    madridTime: '18:30',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-24',
    whenLabel: 'Sat 24 Oct',
    competition: 'LaLiga',
    teams: 'Atlético de Madrid vs Deportivo',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-25',
    whenLabel: 'Sun 25 Oct',
    competition: 'LaLiga',
    teams: 'Athletic Club vs Getafe',
    madridTime: '14:00',
    confirmedOnScreens: true,
    channel: 'DAZN',
  },
  {
    dateKey: '2026-10-25',
    whenLabel: 'Sun 25 Oct',
    competition: 'LaLiga',
    teams: 'Celta vs Betis',
    madridTime: '16:15',
    confirmedOnScreens: true,
    channel: 'DAZN',
  },
  {
    dateKey: '2026-10-25',
    whenLabel: 'Sun 25 Oct',
    competition: 'LaLiga',
    teams: 'Real Sociedad vs Levante',
    madridTime: '18:30',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-25',
    whenLabel: 'Sun 25 Oct',
    competition: 'LaLiga',
    teams: 'Barcelona vs Real Madrid',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'DAZN',
  },
  {
    dateKey: '2026-10-26',
    whenLabel: 'Mon 26 Oct',
    competition: 'LaLiga',
    teams: 'Sevilla vs Osasuna',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-27',
    whenLabel: 'Tue 27 Oct',
    competition: 'Copa del Rey',
    teams: 'Cuarte vs Girona',
    madridTime: '18:30',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-27',
    whenLabel: 'Tue 27 Oct',
    competition: 'Copa del Rey',
    teams: 'Sestao River vs Espanyol',
    madridTime: '19:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-27',
    whenLabel: 'Tue 27 Oct',
    competition: 'Copa del Rey',
    teams: 'Calamocha vs Europa',
    madridTime: '19:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-27',
    whenLabel: 'Tue 27 Oct',
    competition: 'Copa del Rey',
    teams: 'Pinatar vs Elche',
    madridTime: '19:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-27',
    whenLabel: 'Tue 27 Oct',
    competition: 'Copa del Rey',
    teams: 'Manresa vs Sant Andreu',
    madridTime: '19:30',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-27',
    whenLabel: 'Tue 27 Oct',
    competition: 'Copa del Rey',
    teams: 'Castellonense vs Almería',
    madridTime: '19:45',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-27',
    whenLabel: 'Tue 27 Oct',
    competition: 'Copa del Rey',
    teams: 'RSD Alcalá vs Las Palmas',
    madridTime: '20:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-27',
    whenLabel: 'Tue 27 Oct',
    competition: 'Copa del Rey',
    teams: 'Atlético Tordesillas vs Mirandés',
    madridTime: '20:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-27',
    whenLabel: 'Tue 27 Oct',
    competition: 'Copa del Rey',
    teams: 'Gimnástica Segoviana vs Cultural Leonesa',
    madridTime: '20:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-27',
    whenLabel: 'Tue 27 Oct',
    competition: 'Copa del Rey',
    teams: 'Llanera vs Ponferradina',
    madridTime: '20:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-27',
    whenLabel: 'Tue 27 Oct',
    competition: 'Copa del Rey',
    teams: 'Ciudad de Lucena vs Rayo Majadahonda',
    madridTime: '20:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-27',
    whenLabel: 'Tue 27 Oct',
    competition: 'Copa del Rey',
    teams: 'Don Benito vs Extremadura',
    madridTime: '20:30',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-27',
    whenLabel: 'Tue 27 Oct',
    competition: 'Copa del Rey',
    teams: 'Atlético Paso vs Córdoba',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-27',
    whenLabel: 'Tue 27 Oct',
    competition: 'Copa del Rey',
    teams: 'Manacor vs Villarreal',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-27',
    whenLabel: 'Tue 27 Oct',
    competition: 'Copa del Rey',
    teams: 'Recreativo de Huelva vs Rayo Vallecano',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-27',
    whenLabel: 'Tue 27 Oct',
    competition: 'Copa del Rey',
    teams: 'Tudelano vs Zaragoza',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-27',
    whenLabel: 'Tue 27 Oct',
    competition: 'Copa del Rey',
    teams: 'Sporting de Alcázar vs Málaga',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-27',
    whenLabel: 'Tue 27 Oct',
    competition: 'Copa del Rey',
    teams: 'Arosa vs Pontevedra',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'Copa del Rey',
    teams: 'Utebo vs Sabadell',
    madridTime: '19:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'Copa del Rey',
    teams: 'Pamplona vs Eibar',
    madridTime: '19:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'Copa del Rey',
    teams: 'Poblense vs Ceuta',
    madridTime: '19:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'Copa del Rey',
    teams: 'Coruxo vs Zamora',
    madridTime: '19:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'Copa del Rey',
    teams: 'Portugalete vs Real Unión',
    madridTime: '19:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'Copa del Rey',
    teams: 'Anaitasuna vs Alavés',
    madridTime: '19:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'Copa del Rey',
    teams: 'Tarancón vs Levante',
    madridTime: '19:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'Copa del Rey',
    teams: 'Peña Sport vs Huesca',
    madridTime: '19:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'Copa del Rey',
    teams: 'Amorebieta vs Logroñés',
    madridTime: '20:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'Copa del Rey',
    teams: 'Mijas Las Lagunas vs Real Jaén',
    madridTime: '20:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'Copa del Rey',
    teams: 'Alcoyano vs Mallorca',
    madridTime: '20:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'Copa del Rey',
    teams: 'Trival Valderas Alcorcón vs Leganés',
    madridTime: '20:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'Copa del Rey',
    teams: 'Covadonga vs Valladolid',
    madridTime: '20:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'Copa del Rey',
    teams: 'Numancia vs Oviedo',
    madridTime: '20:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'Copa del Rey',
    teams: 'Badajoz vs Tenerife',
    madridTime: '20:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'Copa del Rey',
    teams: 'Puertollano vs Albacete',
    madridTime: '20:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'Copa del Rey',
    teams: 'Cieza vs Granada',
    madridTime: '20:30',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'Copa del Rey',
    teams: 'Reus vs Barakaldo',
    madridTime: '20:30',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'Copa del Rey',
    teams: 'Minera vs Cartagena',
    madridTime: '20:30',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'Copa del Rey',
    teams: 'Gimnástica Torrelavega vs Ourense',
    madridTime: '20:30',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'Copa del Rey',
    teams: 'Navalcarnero vs Betis',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'Copa del Rey',
    teams: 'Salamanca UDS vs Celta',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'Copa del Rey',
    teams: 'Xerez vs Cádiz',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-28',
    whenLabel: 'Wed 28 Oct',
    competition: 'Copa del Rey',
    teams: 'Tavernes de la Valldigna vs Valencia',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'Movistar LALIGA',
  },
  {
    dateKey: '2026-10-29',
    whenLabel: 'Thu 29 Oct',
    competition: 'Copa del Rey',
    teams: 'Lebrijana vs Getafe',
    madridTime: '19:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-29',
    whenLabel: 'Thu 29 Oct',
    competition: 'Copa del Rey',
    teams: 'Atlético Calatayud vs Osasuna',
    madridTime: '19:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-29',
    whenLabel: 'Thu 29 Oct',
    competition: 'Copa del Rey',
    teams: 'Atlético Baleares vs Eldense',
    madridTime: '19:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-29',
    whenLabel: 'Thu 29 Oct',
    competition: 'Copa del Rey',
    teams: 'Sanse vs Coria',
    madridTime: '19:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-29',
    whenLabel: 'Thu 29 Oct',
    competition: 'Copa del Rey',
    teams: 'Guijuelo vs Sporting de Gijón',
    madridTime: '20:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-29',
    whenLabel: 'Thu 29 Oct',
    competition: 'Copa del Rey',
    teams: 'Conquense vs Castellón',
    madridTime: '20:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-29',
    whenLabel: 'Thu 29 Oct',
    competition: 'Copa del Rey',
    teams: 'Laredo vs Burgos',
    madridTime: '20:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-29',
    whenLabel: 'Thu 29 Oct',
    competition: 'Copa del Rey',
    teams: 'Varea vs Andorra',
    madridTime: '20:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-29',
    whenLabel: 'Thu 29 Oct',
    competition: 'Copa del Rey',
    teams: 'Antequera vs Águilas',
    madridTime: '20:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-29',
    whenLabel: 'Thu 29 Oct',
    competition: 'Copa del Rey',
    teams: 'Real Ávila vs Unionistas de Salamanca',
    madridTime: '20:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-29',
    whenLabel: 'Thu 29 Oct',
    competition: 'Copa del Rey',
    teams: 'Prat vs Athletic Club',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-29',
    whenLabel: 'Thu 29 Oct',
    competition: 'Copa del Rey',
    teams: 'Sporting Hortaleza vs Sevilla',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-29',
    whenLabel: 'Thu 29 Oct',
    competition: 'Copa del Rey',
    teams: 'Ribadesella vs Racing de Santander',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-29',
    whenLabel: 'Thu 29 Oct',
    competition: 'Copa del Rey',
    teams: 'Auriense vs Deportivo',
    madridTime: '21:00',
    confirmedOnScreens: true,
  },
  {
    dateKey: '2026-10-18',
    whenLabel: 'Sun 18 Oct',
    competition: 'Premier League',
    teams: 'Leeds United vs Manchester United',
    madridTime: '15:00',
    confirmedOnScreens: true,
    channel: 'DAZN',
  },
  {
    dateKey: '2026-10-18',
    whenLabel: 'Sun 18 Oct',
    competition: 'Premier League',
    teams: 'Nottingham Forest vs Arsenal',
    madridTime: '17:30',
    confirmedOnScreens: true,
    channel: 'DAZN',
  },
  {
    dateKey: '2026-10-18',
    whenLabel: 'Sun 18 Oct',
    competition: 'LaLiga',
    teams: 'Real Madrid vs Sevilla',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'LALIGA TV M+',
  },
  {
    dateKey: '2026-10-19',
    whenLabel: 'Mon 19 Oct',
    competition: 'LaLiga',
    teams: 'Getafe vs Rayo Vallecano',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'DAZN LALIGA',
  },
  {
    dateKey: '2026-10-19',
    whenLabel: 'Mon 19 Oct',
    competition: 'Premier League',
    teams: 'Tottenham vs Coventry City',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'DAZN',
  },
  {
    dateKey: '2026-10-21',
    whenLabel: 'Wed 21 Oct',
    competition: 'UEFA Champions League',
    teams: 'Real Madrid vs RB Leipzig',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'Movistar Liga de Campeones',
  },
  {
    dateKey: '2026-10-22',
    whenLabel: 'Thu 22 Oct',
    competition: 'UEFA Conference League',
    teams: 'Getafe vs Lugano',
    madridTime: '18:45',
    confirmedOnScreens: true,
    channel: 'Movistar Liga de Campeones',
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
    dateKey: '2026-10-22',
    whenLabel: 'Thu 22 Oct',
    competition: 'Concert at Movistar Arena',
    teams: 'Fontaines D.C.',
    madridTime: '20:45',
    kind: 'event',
    approxDurationMin: 150,
    noteEn: 'Pre/post-gig at Dubliners — the concert is at the Movistar Arena, not in the pub.',
    noteEs: 'Antes y después del concierto en Dubliners — el concierto es en el Movistar Arena, no en el pub.',
  },
  {
    dateKey: '2026-11-05',
    whenLabel: 'Thu 5 Nov',
    competition: 'UEFA Conference League',
    teams: 'Getafe vs Brighton',
    madridTime: '21:00',
    confirmedOnScreens: true,
    noteEn: 'Brighton fans in Madrid? Watch it live near Puerta del Sol. Walk-ins only.',
    noteEs: '¿Aficionados del Brighton en Madrid? En directo junto a Puerta del Sol, por orden de llegada.',
  },
  {
    dateKey: '2026-10-18',
    whenLabel: 'Sun 18 Oct',
    competition: 'LaLiga',
    teams: 'Osasuna vs Racing',
    madridTime: '14:00',
    confirmedOnScreens: true,
    channel: 'LALIGA TV M+',
  },
  {
    dateKey: '2026-10-18',
    whenLabel: 'Sun 18 Oct',
    competition: 'LaLiga',
    teams: 'Celta vs Alavés',
    madridTime: '16:15',
    confirmedOnScreens: true,
    channel: 'DAZN LALIGA',
  },
  {
    dateKey: '2026-10-18',
    whenLabel: 'Sun 18 Oct',
    competition: 'LaLiga',
    teams: 'Málaga vs Real Sociedad',
    madridTime: '18:30',
    confirmedOnScreens: true,
    channel: 'LALIGA TV M+',
  },
  {
    dateKey: '2026-10-20',
    whenLabel: 'Tue 20 Oct',
    competition: 'UEFA Champions League',
    teams: 'Fenerbahçe vs Slavia Praha',
    madridTime: '18:45',
    confirmedOnScreens: true,
    channel: 'Movistar Liga de Campeones',
  },
  {
    dateKey: '2026-10-20',
    whenLabel: 'Tue 20 Oct',
    competition: 'UEFA Champions League',
    teams: 'Sabah vs Borussia Dortmund',
    madridTime: '18:45',
    confirmedOnScreens: true,
    channel: 'Movistar Liga de Campeones',
  },
  {
    dateKey: '2026-10-20',
    whenLabel: 'Tue 20 Oct',
    competition: 'UEFA Champions League',
    teams: 'Paris Saint-Germain vs Barcelona',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'Movistar Liga de Campeones',
  },
  {
    dateKey: '2026-10-20',
    whenLabel: 'Tue 20 Oct',
    competition: 'UEFA Champions League',
    teams: 'Stuttgart vs Atlético de Madrid',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'Movistar Liga de Campeones',
  },
  {
    dateKey: '2026-10-20',
    whenLabel: 'Tue 20 Oct',
    competition: 'UEFA Champions League',
    teams: 'Liverpool vs Villarreal',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'Movistar Liga de Campeones',
  },
  {
    dateKey: '2026-10-20',
    whenLabel: 'Tue 20 Oct',
    competition: 'UEFA Champions League',
    teams: 'Manchester City vs AEK Athens',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'Movistar Liga de Campeones',
  },
  {
    dateKey: '2026-10-20',
    whenLabel: 'Tue 20 Oct',
    competition: 'UEFA Champions League',
    teams: 'Napoli vs Bodø/Glimt',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'Movistar Liga de Campeones',
  },
  {
    dateKey: '2026-10-21',
    whenLabel: 'Wed 21 Oct',
    competition: 'UEFA Champions League',
    teams: 'Como vs Manchester United',
    madridTime: '18:45',
    confirmedOnScreens: true,
    channel: 'Movistar Liga de Campeones',
  },
  {
    dateKey: '2026-10-21',
    whenLabel: 'Wed 21 Oct',
    competition: 'UEFA Champions League',
    teams: 'Lille vs Galatasaray',
    madridTime: '18:45',
    confirmedOnScreens: true,
    channel: 'Movistar Liga de Campeones',
  },
  {
    dateKey: '2026-10-21',
    whenLabel: 'Wed 21 Oct',
    competition: 'UEFA Champions League',
    teams: 'Bayern Munich vs Arsenal',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'Movistar Liga de Campeones',
  },
  {
    dateKey: '2026-10-21',
    whenLabel: 'Wed 21 Oct',
    competition: 'UEFA Champions League',
    teams: 'Aston Villa vs Viking',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'Movistar Liga de Campeones',
  },
  {
    dateKey: '2026-10-21',
    whenLabel: 'Wed 21 Oct',
    competition: 'UEFA Champions League',
    teams: 'Betis vs Feyenoord',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'Movistar Liga de Campeones',
  },
  {
    dateKey: '2026-10-21',
    whenLabel: 'Wed 21 Oct',
    competition: 'UEFA Champions League',
    teams: 'Inter vs Shakhtar Donetsk',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'Movistar Liga de Campeones',
  },
  {
    dateKey: '2026-10-22',
    whenLabel: 'Thu 22 Oct',
    competition: 'UEFA Europa League',
    teams: 'Lech Poznań vs Sunderland',
    madridTime: '18:45',
    confirmedOnScreens: true,
    channel: 'Movistar Liga de Campeones',
  },
  {
    dateKey: '2026-10-22',
    whenLabel: 'Thu 22 Oct',
    competition: 'UEFA Europa League',
    teams: 'Juventus vs Rennes',
    madridTime: '18:45',
    confirmedOnScreens: true,
    channel: 'Movistar Liga de Campeones',
  },
  {
    dateKey: '2026-10-22',
    whenLabel: 'Thu 22 Oct',
    competition: 'UEFA Europa League',
    teams: 'Celtic vs Celta',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'Movistar Liga de Campeones',
  },
  {
    dateKey: '2026-10-22',
    whenLabel: 'Thu 22 Oct',
    competition: 'UEFA Europa League',
    teams: 'Lillestrøm vs Real Sociedad',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'Movistar Liga de Campeones',
  },
  {
    dateKey: '2026-10-22',
    whenLabel: 'Thu 22 Oct',
    competition: 'UEFA Europa League',
    teams: 'Bournemouth vs Milan',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'Movistar Liga de Campeones',
  },
  {
    dateKey: '2026-10-22',
    whenLabel: 'Thu 22 Oct',
    competition: 'UEFA Europa League',
    teams: 'Beşiktaş vs Crystal Palace',
    madridTime: '21:00',
    confirmedOnScreens: true,
    channel: 'Movistar Liga de Campeones',
  },
  {
    dateKey: '2026-11-08',
    whenLabel: 'Sun 8 Nov',
    competition: 'NFL',
    teams: 'NFL RedZone',
    madridTime: '19:00',
    approxDurationMin: 390,
    confirmedOnScreens: true,
    noteEn: 'NFL RedZone LIVE from 19:00, during opening hours (until 02:00). Walk-ins only, first come first served.',
    noteEs: 'NFL RedZone EN DIRECTO desde las 19:00, dentro del horario (hasta las 02:00). Sin reserva, por orden de llegada.',
  },
  {
    dateKey: '2026-10-20',
    whenLabel: 'Tue 20 Oct',
    competition: 'Concert at Movistar Arena',
    teams: 'Deep Purple',
    madridTime: '21:00',
    kind: 'event',
    approxDurationMin: 150,
    noteEn: 'Pre/post-gig at Dubliners — the concert is at the Movistar Arena, not in the pub.',
    noteEs: 'Antes y después del concierto en Dubliners — el concierto es en el Movistar Arena, no en el pub.',
  },
];

/** Human sport label for board rows (presentation only — does not change gates). */
export function sportLabel(competition: string): string {
  const c = competition.toLowerCase();
  if (c.startsWith('concert')) return 'Event';
  if (c.includes('nfl')) return 'NFL';
  if (c.includes('nba')) return 'NBA';
  if (c.includes('formula') || c === 'f1') return 'Formula 1';
  if (c.includes('rugby') || c.includes('urc') || c.includes('six nations')) return 'Rugby';
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
      latitude: 40.4164,
      longitude: -3.7025,
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
        startDate: madridIsoWithOffset(f.dateKey, f.madridTime),
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
