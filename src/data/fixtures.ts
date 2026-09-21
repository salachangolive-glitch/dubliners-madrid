/**
 * Kick-offs Europe/Madrid. Curated international demand — not a full dump.
 * Sources (Tue 22 Sep 2026): no LaLiga/PL/UCL/EL midweek (intl break; LL J8 11 Oct; UCL MD2 13–14 Oct).
 * Sat 26: F1 Azerbaijan GP 15:00 Baku (UTC+4) = 13:00 Madrid — formula1.com timetable.
 * Sun 27 NFL Week 3 (ET→Madrid +6 in CEST): Chiefs–Dolphins 13:00 ET=19:00; Ravens–Cowboys (Rio) 16:25 ET=22:25 — Sporting News / CBS / nfl-schedule.com.
 * Omitted (outside hours or full card past close): TNF Falcons–Packers 02:15 Fri; SNF Rams–Broncos 02:20 Mon; MNF Eagles–Bears 02:15 Tue; UFC Fight Night main ~02:00 Sun.
 */
export type Fixture = {
  dateKey: string; // YYYY-MM-DD Madrid calendar day of kickoff
  whenLabel: string;
  competition: string;
  teams: string;
  madridTime: string; // HH:mm 24h Europe/Madrid
  /** Approximate broadcast length for anti-stale “still on” checks (minutes). */
  approxDurationMin?: number;
};

export const FIXTURES: Fixture[] = [
  {
    dateKey: '2026-09-26',
    whenLabel: 'Sat 26 Sep',
    competition: 'Formula 1',
    teams: 'Azerbaijan Grand Prix',
    madridTime: '13:00',
    approxDurationMin: 150,
  },
  {
    dateKey: '2026-09-27',
    whenLabel: 'Sun 27 Sep',
    competition: 'NFL',
    teams: 'Chiefs vs Dolphins',
    madridTime: '19:00',
    approxDurationMin: 210,
  },
  {
    dateKey: '2026-09-27',
    whenLabel: 'Sun 27 Sep',
    competition: 'NFL',
    teams: 'Ravens vs Cowboys (Rio)',
    madridTime: '22:25',
    approxDurationMin: 210,
  },
];

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

function hmToMinutes(hm: string): number | null {
  const m = /^(\d{2}):(\d{2})$/.exec(hm);
  if (!m) return null;
  return Number(m[1]) * 60 + Number(m[2]);
}

/**
 * True if the fixture is still “current” in Europe/Madrid:
 * - dateKey > today → upcoming week item
 * - dateKey === today → kickoff+duration not yet passed (Madrid wall clock; overnight end clamped to 23:59 same calendar day for Today slot)
 * - dateKey < today → past (never current)
 * Fail closed: missing/invalid time → not current.
 */
export function isCurrentFixture(f: Fixture, now: Date = new Date()): boolean {
  let today: string;
  try {
    today = madridToday(now);
  } catch {
    return false;
  }
  if (f.dateKey > today) return true;
  if (f.dateKey < today) return false;

  const nowHm = madridNowHm(now);
  if (!nowHm) return false;
  const startMin = hmToMinutes(f.madridTime);
  const nowMin = hmToMinutes(nowHm);
  if (startMin == null || nowMin == null) return false;
  const dur = f.approxDurationMin ?? 180;
  const endMin = Math.min(startMin + dur, 24 * 60 - 1);
  return nowMin < endMin;
}

/** Build-time / SSR: today’s still-current fixtures only. */
export function fixturesForToday(now: Date = new Date()): Fixture[] {
  const today = madridToday(now);
  return FIXTURES.filter((f) => f.dateKey === today && isCurrentFixture(f, now));
}

/** Build-time / SSR: this week = today (current) + future dateKeys. Past days excluded. */
export function fixturesForWeek(now: Date = new Date()): Fixture[] {
  const today = madridToday(now);
  return FIXTURES.filter((f) => {
    if (f.dateKey > today) return true;
    if (f.dateKey === today) return isCurrentFixture(f, now);
    return false;
  });
}

/**
 * @deprecated Build-time snapshot only — do not treat as runtime “today”.
 * Prefer madridToday() / fixturesForToday() / fixturesForWeek(), plus client anti-stale.
 */
export const PREVIEW_TODAY = madridToday();
