/**
 * Thanksgiving NFL at Dubliners — single source for /thanksgiving-madrid/ (EN) and /es/thanksgiving-madrid/ (ES).
 * REUSE EVERY YEAR: update YEAR, DATE_KEY (fourth Thursday of November), the games (Madrid time) and SOURCES,
 * only from a primary source verified by Radar. Games that start less than 1 h before that night's close
 * (src/data/hours.ts; Thursday close 02:00) go in EXCLUDED, never in GAMES.
 * 2026 (DG THANKSGIVING-DUB, Radar R-21, club websites, curl 25 Oct 08:35–08:40):
 *   Lions–Bears 1:00 PM EST = 19:00 (CBS) · Cowboys–Eagles 3:30 PM CST = 22:30 (FOX) · Bills–Chiefs 8:20 PM EST = Fri 27 02:20 (NBC) → EXCLUDED.
 */
export type TgGame = { madridTime: string; away: string; home: string; usTv: string; source: string };
export const TG = {
  year: 2026,
  dateKey: '2026-11-26',
  dateEn: 'Thursday 26 November 2026',
  dateEs: 'jueves 26 de noviembre de 2026',
  updatedEn: '25 October 2026',
  updatedEs: '25 de octubre de 2026',
  games: [
    { madridTime: '19:00', away: 'Chicago Bears', home: 'Detroit Lions', usTv: 'CBS', source: 'https://www.detroitlions.com/schedule/' },
    { madridTime: '22:30', away: 'Philadelphia Eagles', home: 'Dallas Cowboys', usTv: 'FOX', source: 'https://www.dallascowboys.com/schedule/' },
  ] as TgGame[],
  excluded: [
    { madridTime: '02:20', away: 'Kansas City Chiefs', home: 'Buffalo Bills', usTv: 'NBC', source: 'https://www.buffalobills.com/schedule/' },
  ] as TgGame[],
};
