/**
 * Thanksgiving NFL at Dubliners — single source for /thanksgiving-madrid/ (EN) and /es/thanksgiving-madrid/ (ES).
 * REUSE EVERY YEAR: update YEAR, DATE_KEY (fourth Thursday of November), the games (Madrid time) and SOURCES,
 * only from a primary source verified by Radar. Games that start less than 1 h before that night's close
 * (src/data/hours.ts; Thursday close 02:00) go in EXCLUDED, never in GAMES.
 * 2026 (DG 18 Nov, nfl.com schedules, Europe/Madrid):
 *   Bears @ Lions 19:00 · Eagles @ Cowboys 22:30 · Chiefs @ Bills Fri 27 02:20 → EXCLUDED (after Thursday close).
 */
export type TgGame = { madridTime: string; away: string; home: string; usTv: string; source: string };
export const TG = {
  year: 2026,
  dateKey: '2026-11-26',
  dateEn: 'Thursday 26 November 2026',
  dateEs: 'jueves 26 de noviembre de 2026',
  updatedEn: '18 November 2026',
  updatedEs: '18 de noviembre de 2026',
  games: [
    { madridTime: '19:00', away: 'Chicago Bears', home: 'Detroit Lions', usTv: 'CBS', source: 'https://www.nfl.com/schedules/' },
    { madridTime: '22:30', away: 'Philadelphia Eagles', home: 'Dallas Cowboys', usTv: 'FOX', source: 'https://www.nfl.com/schedules/' },
  ] as TgGame[],
  excluded: [
    { madridTime: '02:20', away: 'Kansas City Chiefs', home: 'Buffalo Bills', usTv: 'NBC', source: 'https://www.nfl.com/schedules/' },
  ] as TgGame[],
};
