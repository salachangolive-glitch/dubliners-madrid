/**
 * Thanksgiving NFL at Dubliners — single source for /thanksgiving-madrid/ (EN) and /es/thanksgiving-madrid/ (ES).
 * REUSE EVERY YEAR: update YEAR, DATE_KEY (fourth Thursday of November), the games (Madrid time) and SOURCES,
 * only from a primary source verified by Radar (nfl.com schedules).
 * 2026 (DG 26 Nov, nfl.com REG11 Thu 26 / Fri 27 Madrid):
 *   Bears @ Lions 19:00 · Eagles @ Cowboys 22:30 · Chiefs @ Bills Fri 27 02:20 — all LIVE (owner 26 Nov).
 * Do not name US TV networks on Dubliners pages (usTv kept for internal Radar only; not rendered).
 */
export type TgGame = { madridTime: string; away: string; home: string; usTv: string; source: string; dayNoteEn?: string; dayNoteEs?: string };
export const TG = {
  year: 2026,
  dateKey: '2026-11-26',
  dateEn: 'Thursday 26 November 2026',
  dateEs: 'jueves 26 de noviembre de 2026',
  updatedEn: '26 November 2026',
  updatedEs: '26 de noviembre de 2026',
  games: [
    { madridTime: '19:00', away: 'Chicago Bears', home: 'Detroit Lions', usTv: 'CBS', source: 'https://www.nfl.com/schedules/2026/REG11/' },
    { madridTime: '22:30', away: 'Philadelphia Eagles', home: 'Dallas Cowboys', usTv: 'FOX', source: 'https://www.nfl.com/schedules/2026/REG11/' },
    {
      madridTime: '02:20',
      away: 'Kansas City Chiefs',
      home: 'Buffalo Bills',
      usTv: 'NBC',
      source: 'https://www.nfl.com/schedules/2026/REG11/',
      dayNoteEn: 'Friday 27 November (02:20 Madrid, after US Thanksgiving kick-off)',
      dayNoteEs: 'viernes 27 de noviembre (02:20 Madrid)',
    },
  ] as TgGame[],
  excluded: [] as TgGame[],
};