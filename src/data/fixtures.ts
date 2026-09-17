/** Kick-offs: prefer official competition/club, then a second official source. Thu 17 Sep 2026 = Betis–Getafe 19:00 (Marca 17/09 09:16 CEST), Málaga–Villarreal 21:30 (Transfermarkt), EL MD1 21:00 Madrid. No PL today. */
export type Fixture = {
  dateKey: string; // YYYY-MM-DD Madrid calendar day of kickoff
  whenLabel: string;
  competition: string;
  teams: string;
  madridTime: string;
};

export const FIXTURES: Fixture[] = [
  {
    dateKey: '2026-09-16',
    whenLabel: 'Wed 16 Sep',
    competition: 'LaLiga',
    teams: 'Atlético Madrid vs Osasuna',
    madridTime: '19:00',
  },
  {
    dateKey: '2026-09-16',
    whenLabel: 'Wed 16 Sep',
    competition: 'LaLiga',
    teams: 'Deportivo vs Sevilla',
    madridTime: '19:00',
  },
  {
    dateKey: '2026-09-16',
    whenLabel: 'Wed 16 Sep',
    competition: 'UEFA Europa League',
    teams: 'AC Milan vs Benfica',
    madridTime: '21:00',
  },
  {
    dateKey: '2026-09-16',
    whenLabel: 'Wed 16 Sep',
    competition: 'UEFA Europa League',
    teams: 'Sunderland vs AZ Alkmaar',
    madridTime: '21:00',
  },
  {
    dateKey: '2026-09-16',
    whenLabel: 'Wed 16 Sep',
    competition: 'LaLiga',
    teams: 'Barcelona vs Racing Santander',
    madridTime: '21:30',
  },
  {
    dateKey: '2026-09-16',
    whenLabel: 'Wed 16 Sep',
    competition: 'LaLiga',
    teams: 'Levante vs Athletic Club',
    madridTime: '21:30',
  },
  {
    dateKey: '2026-09-17',
    whenLabel: 'Thu 17 Sep',
    competition: 'LaLiga',
    teams: 'Real Betis vs Getafe',
    madridTime: '19:00',
  },
  {
    dateKey: '2026-09-17',
    whenLabel: 'Thu 17 Sep',
    competition: 'UEFA Europa League',
    teams: 'Celtic vs Ferencváros',
    madridTime: '21:00',
  },
  {
    dateKey: '2026-09-17',
    whenLabel: 'Thu 17 Sep',
    competition: 'UEFA Europa League',
    teams: 'Crystal Palace vs Lech Poznań',
    madridTime: '21:00',
  },
  {
    dateKey: '2026-09-17',
    whenLabel: 'Thu 17 Sep',
    competition: 'UEFA Europa League',
    teams: 'Juventus vs NEC',
    madridTime: '21:00',
  },
  {
    dateKey: '2026-09-17',
    whenLabel: 'Thu 17 Sep',
    competition: 'UEFA Europa League',
    teams: 'Real Sociedad vs AFC Bournemouth',
    madridTime: '21:00',
  },
  {
    dateKey: '2026-09-17',
    whenLabel: 'Thu 17 Sep',
    competition: 'UEFA Europa League',
    teams: 'Viktoria Plzeň vs Union Saint-Gilloise',
    madridTime: '21:00',
  },
  {
    dateKey: '2026-09-17',
    whenLabel: 'Thu 17 Sep',
    competition: 'LaLiga',
    teams: 'Málaga vs Villarreal',
    madridTime: '21:30',
  },
];

/** Madrid calendar date string YYYY-MM-DD for "today" at build/runtime preview. */
export const PREVIEW_TODAY = '2026-09-17';
