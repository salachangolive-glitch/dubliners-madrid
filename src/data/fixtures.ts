/** Kick-offs Europe/Madrid. Fri 18: Espanyol–Elche 21:00 (Marca + La Vanguardia 18/09); Brentford–Chelsea 21:00 Madrid = 20:00 BST (Sky Sports + PL list). Sat–Sun LaLiga MD7: Football Web Pages + laligatable.co (CET slots). UFC 331 main card ~03:00 Madrid Sun — outside hours, omitted. No UCL this weekend. */
export type Fixture = {
  dateKey: string; // YYYY-MM-DD Madrid calendar day of kickoff
  whenLabel: string;
  competition: string;
  teams: string;
  madridTime: string;
};

export const FIXTURES: Fixture[] = [
  {
    dateKey: '2026-09-18',
    whenLabel: 'Fri 18 Sep',
    competition: 'LaLiga',
    teams: 'Espanyol vs Elche',
    madridTime: '21:00',
  },
  {
    dateKey: '2026-09-18',
    whenLabel: 'Fri 18 Sep',
    competition: 'Premier League',
    teams: 'Brentford vs Chelsea',
    madridTime: '21:00',
  },
  {
    dateKey: '2026-09-19',
    whenLabel: 'Sat 19 Sep',
    competition: 'LaLiga',
    teams: 'Osasuna vs Rayo Vallecano',
    madridTime: '14:00',
  },
  {
    dateKey: '2026-09-19',
    whenLabel: 'Sat 19 Sep',
    competition: 'LaLiga',
    teams: 'Athletic Club vs Alavés',
    madridTime: '16:15',
  },
  {
    dateKey: '2026-09-19',
    whenLabel: 'Sat 19 Sep',
    competition: 'LaLiga',
    teams: 'Celta Vigo vs Racing Santander',
    madridTime: '18:30',
  },
  {
    dateKey: '2026-09-19',
    whenLabel: 'Sat 19 Sep',
    competition: 'LaLiga',
    teams: 'Sevilla vs Barcelona',
    madridTime: '21:00',
  },
  {
    dateKey: '2026-09-20',
    whenLabel: 'Sun 20 Sep',
    competition: 'LaLiga',
    teams: 'Getafe vs Málaga',
    madridTime: '14:00',
  },
  {
    dateKey: '2026-09-20',
    whenLabel: 'Sun 20 Sep',
    competition: 'LaLiga',
    teams: 'Atlético Madrid vs Real Madrid',
    madridTime: '16:15',
  },
  {
    dateKey: '2026-09-20',
    whenLabel: 'Sun 20 Sep',
    competition: 'LaLiga',
    teams: 'Deportivo vs Real Betis',
    madridTime: '18:30',
  },
  {
    dateKey: '2026-09-20',
    whenLabel: 'Sun 20 Sep',
    competition: 'LaLiga',
    teams: 'Villarreal vs Levante',
    madridTime: '18:30',
  },
  {
    dateKey: '2026-09-20',
    whenLabel: 'Sun 20 Sep',
    competition: 'LaLiga',
    teams: 'Valencia vs Real Sociedad',
    madridTime: '21:00',
  },
];

/** Today's calendar date YYYY-MM-DD in Europe/Madrid (evaluated at build time for static Pages). */
export function madridToday(d: Date = new Date()): string {
  // en-CA yields YYYY-MM-DD
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Madrid',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(d);
}

/** Madrid calendar date string YYYY-MM-DD for "today" — kept for compatibility. */
export const PREVIEW_TODAY = madridToday();
