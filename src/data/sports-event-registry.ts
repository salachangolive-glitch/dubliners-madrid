/**
 * Sports event campaigns — single registry (Dubliners).
 * Register once; drives home promo, agenda rows, and generated fan/meetup pages.
 *
 * pageMode:
 * - `external` — indexable URLs already in src/pages (paths.*); no duplicate page build.
 * - `generated` — Astro route /campaign/[id] builds the page from this record.
 */

export type SportsEventLanguage = 'en' | 'es' | 'de' | 'nl' | 'no' | 'lt';

export type SportsEventCampaign = {
  id: string;
  sport: 'football' | 'rugby' | 'basketball' | 'nfl' | 'other';
  competition: string;
  competitionEs?: string;
  teamsEn: string;
  teamsEs: string;
  /** Madrid calendar day YYYY-MM-DD */
  madridDateKey: string;
  /** HH:mm Europe/Madrid */
  madridTime: string;
  /** ISO start for JSON-LD */
  startIso: string;
  fanOrigin?: { city?: string; country: string; labelEn?: string; labelEs?: string };
  languages: SportsEventLanguage[];
  paths: Partial<Record<SportsEventLanguage, string>> & { en: string; es: string };
  /** Higher = earlier on home when several promos overlap */
  priority: number;
  broadcastConfirmed: boolean;
  /** Home highlight visible from this Madrid date (inclusive) */
  promoStart: string;
  /** Home highlight hidden after this Madrid date (inclusive); page URLs stay */
  homeTakeDown: string;
  pageMode: 'external' | 'generated';
  /** Home strip title override */
  homeTitleEn?: string;
  homeTitleEs?: string;
  /** Short home body override (screens vs meeting-point tone applied if unset) */
  homeLeadEn?: string;
  homeLeadEs?: string;
  ctaEn?: string;
  ctaEs?: string;
  /** Agenda: skip if false (e.g. external-only hub) */
  includeInAgenda?: boolean;
  whenLabelEn?: string;
  whenLabelEs?: string;
};

/** Add campaigns here; do not duplicate slugs or copy across entries. */
export const SPORTS_EVENT_REGISTRY: SportsEventCampaign[] = [
  {
    id: 'zalgiris-euroleague-2026-11-25',
    sport: 'basketball',
    competition: 'EuroLeague',
    competitionEs: 'EuroLeague',
    teamsEn: 'Real Madrid vs Žalgiris Kaunas',
    teamsEs: 'Real Madrid vs Žalgiris Kaunas',
    madridDateKey: '2026-11-25',
    madridTime: '20:45',
    startIso: '2026-11-25T20:45:00+01:00',
    fanOrigin: { city: 'Kaunas', country: 'Lithuania', labelEn: 'Žalgiris supporters', labelEs: 'Aficionados del Žalgiris' },
    languages: ['en', 'es', 'lt'],
    paths: {
      en: '/zalgiris-fans-madrid/',
      es: '/es/aficionados-zalgiris-madrid/',
      lt: '/lt/zalgiris-fans-madrid/',
    },
    priority: 30,
    broadcastConfirmed: true,
    promoStart: '2026-11-17',
    homeTakeDown: '2026-11-25',
    pageMode: 'external',
    homeTitleEn: 'EuroLeague basketball — Wednesday 25 November',
    homeTitleEs: 'EuroLeague baloncesto — miércoles 25 de noviembre',
    ctaEn: 'Žalgiris fans guide',
    ctaEs: 'Guía aficionados Žalgiris',
    includeInAgenda: true,
    whenLabelEn: 'Wed 25 Nov',
    whenLabelEs: 'Mié 25 nov',
  },
  {
    id: 'portugal-nations-league-meetup-2026-11-20',
    sport: 'football',
    competition: 'UEFA Nations League',
    competitionEs: 'UEFA Nations League',
    teamsEn: 'Portugal vs Armenia (meetup before kick-off)',
    teamsEs: 'Portugal vs Armenia (quedada previa)',
    madridDateKey: '2026-11-20',
    madridTime: '20:45',
    startIso: '2026-11-20T20:45:00+01:00',
    fanOrigin: { country: 'Portugal', labelEn: 'Portuguese supporters in Madrid', labelEs: 'Aficionados portugueses en Madrid' },
    languages: ['en', 'es'],
    paths: { en: '/campaign/portugal-nations-league-meetup-2026-11-20/', es: '/es/campaign/portugal-nations-league-meetup-2026-11-20/' },
    priority: 10,
    broadcastConfirmed: false,
    promoStart: '2026-11-17',
    homeTakeDown: '2026-11-20',
    pageMode: 'generated',
    homeTitleEn: 'Portuguese football fans — Thursday 20 November',
    homeTitleEs: 'Afición portuguesa — jueves 20 de noviembre',
    homeLeadEn: 'Meeting point near Puerta del Sol before kick-off. We do not promise this match on our screens unless it is on What’s On.',
    homeLeadEs: 'Punto de encuentro junto a Puerta del Sol antes del saque. No prometemos este partido en pantalla salvo que figure en Partidos.',
    ctaEn: 'Meeting point guide',
    ctaEs: 'Guía punto de encuentro',
    includeInAgenda: true,
    whenLabelEn: 'Thu 20 Nov',
    whenLabelEs: 'Jue 20 nov',
  },
];

export function campaignById(id: string): SportsEventCampaign | undefined {
  return SPORTS_EVENT_REGISTRY.find((c) => c.id === id);
}

export function generatedCampaigns(): SportsEventCampaign[] {
  return SPORTS_EVENT_REGISTRY.filter((c) => c.pageMode === 'generated');
}