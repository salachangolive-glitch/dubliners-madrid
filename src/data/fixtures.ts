/** Kick-offs re-verified 15 Sep 2026 (Europe/Madrid) from club / LaLiga / UEFA-facing sources. */
export type Fixture = {
  dateKey: string; // YYYY-MM-DD Madrid calendar day of kickoff
  whenLabel: string;
  competition: string;
  teams: string;
  madridTime: string;
};

export const FIXTURES: Fixture[] = [
  {
    dateKey: '2026-09-15',
    whenLabel: 'Tue 15 Sep',
    competition: 'LaLiga',
    teams: 'Elche vs Real Madrid',
    madridTime: '21:30',
  },
  {
    dateKey: '2026-09-16',
    whenLabel: 'Wed 16 Sep',
    competition: 'LaLiga',
    teams: 'Atlético Madrid vs Osasuna',
    madridTime: '17:00',
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
    dateKey: '2026-09-17',
    whenLabel: 'Thu 17 Sep',
    competition: 'UEFA Europa League',
    teams: 'Celtic vs Ferencváros',
    madridTime: '21:00',
  },
];

/** Madrid calendar date string YYYY-MM-DD for "today" at build/runtime preview. */
export const PREVIEW_TODAY = '2026-09-15';
