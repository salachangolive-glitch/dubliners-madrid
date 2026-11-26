/**
 * Investec Champions Cup round 2 — Saturday 12 December 2026 (Madrid kick-offs).
 * Times: local venue kick-off + winter conversion to Madrid (CET).
 * Sources: leinsterrugby.ie fixture/view/169 (17:30 Dublin → 18:30 Madrid);
 * munsterrugby.ie fixture/view/1440 (20:00 Bristol → 21:00 Madrid).
 */
export const CHAMPIONS_CUP_GUIDE_EN = '/leinster-munster-champions-cup-madrid/';
export const CHAMPIONS_CUP_GUIDE_ES = '/es/champions-cup-rugby-leinster-munster-madrid/';

export const CHAMPIONS_CUP_R2_DATE = '2026-12-12';

export const CHAMPIONS_CUP_R2_MATCHES = [
  {
    timeMadrid: '18:30',
    kickOffLocal: '17:30',
    venueEn: 'Laya Arena, Dublin',
    venueEs: 'Laya Arena, Dublín',
    en: 'Leinster v Sale Sharks',
    es: 'Leinster–Sale Sharks',
    highlight: true,
  },
  {
    timeMadrid: '21:00',
    kickOffLocal: '20:00',
    venueEn: 'Ashton Gate, Bristol',
    venueEs: 'Ashton Gate, Bristol',
    en: 'Bristol Bears v Munster',
    es: 'Bristol Bears–Munster',
    highlight: true,
  },
] as const;