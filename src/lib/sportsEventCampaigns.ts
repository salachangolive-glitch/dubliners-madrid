import type { Fixture } from '../data/fixtures';
import type { Lang } from '../i18n';
import type { SportsEventCampaign } from '../data/sports-event-registry';
import { SPORTS_EVENT_REGISTRY } from '../data/sports-event-registry';
import { SITE, absUrl } from '../site';

const BAR = 'dubliners';

export function madridDateKeyFrom(d: Date = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Madrid',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(d);
}

/** Campaigns whose home strip should render (build-time + data-show-until). */
export function activeHomeCampaigns(todayKey: string): SportsEventCampaign[] {
  return SPORTS_EVENT_REGISTRY.filter(
    (c) => c.promoStart <= todayKey && todayKey <= c.homeTakeDown,
  ).sort((a, b) => b.priority - a.priority);
}

export function campaignPagePath(c: SportsEventCampaign, lang: Lang): string {
  return lang === 'es' ? c.paths.es || c.paths.en : c.paths.en;
}

export function campaignAbsoluteUrl(c: SportsEventCampaign, lang: Lang): string {
  return `${SITE.siteUrl}${campaignPagePath(c, lang)}`;
}

export function screensLead(c: SportsEventCampaign, lang: Lang): string {
  if (c.homeLeadEn && lang === 'en') return c.homeLeadEn;
  if (c.homeLeadEs && lang === 'es') return c.homeLeadEs;
  if (c.broadcastConfirmed) {
    return lang === 'es'
      ? 'En directo en nuestras pantallas (hora Madrid).'
      : 'Live on our screens (Madrid time).';
  }
  return lang === 'es'
    ? 'Punto de encuentro junto a Puerta del Sol. Sin promesa de pantalla hasta confirmación en Partidos.'
    : 'Meeting point near Puerta del Sol. No screens promise until confirmed on What’s On.';
}

export function homeTitle(c: SportsEventCampaign, lang: Lang): string {
  if (lang === 'es') return c.homeTitleEs || c.teamsEs;
  return c.homeTitleEn || c.teamsEn;
}

export function ctaLabel(c: SportsEventCampaign, lang: Lang): string {
  if (lang === 'es') return c.ctaEs || 'Ver guía del evento';
  return c.ctaEn || 'View event guide';
}

/** Agenda row shape for fixtures.ts (merge manually or via future sync). */
export function campaignToFixtureRow(c: SportsEventCampaign): Fixture {
  const href = c.paths.en;
  const hrefEs = c.paths.es || c.paths.en;
  return {
    dateKey: c.madridDateKey,
    whenLabel: c.whenLabelEn || 'TBC',
    competition: c.competition,
    competitionEs: c.competitionEs,
    teams: c.teamsEn.replace(/\s*\(.*\)\s*$/, ''),
    teamsEs: c.teamsEs.replace(/\s*\(.*\)\s*$/, ''),
    madridTime: c.madridTime,
    confirmedOnScreens: c.broadcastConfirmed,
    noteEn: c.broadcastConfirmed ? 'LIVE on our screens.' : 'Meeting point near Sol.',
    noteEs: c.broadcastConfirmed ? 'En directo en pantalla.' : 'Punto de encuentro junto a Sol.',
    link: {
      href,
      hrefEs,
      labelEn: `${c.teamsEn} near Sol`,
      labelEs: `${c.teamsEs} junto a Sol`,
    },
  };
}

export function campaignSportsEventJsonLd(c: SportsEventCampaign, lang: Lang) {
  const path = campaignPagePath(c, lang);
  const desc =
    c.broadcastConfirmed
      ? lang === 'es'
        ? `${c.teamsEs} (${c.competition}) en directo en las pantallas de Dubliners, Espoz y Mina 7, junto a Puerta del Sol, Madrid.`
        : `${c.teamsEn} (${c.competition}) shown LIVE on the screens at Dubliners, Espoz y Mina 7, by Puerta del Sol, Madrid.`
      : lang === 'es'
        ? `${c.teamsEs} — punto de encuentro en Dubliners, Espoz y Mina 7, junto a Puerta del Sol, Madrid.`
        : `${c.teamsEn} — meeting point at Dubliners, Espoz y Mina 7, by Puerta del Sol, Madrid.`;

  return {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: lang === 'es' ? `${c.teamsEs} — ${c.competition}` : `${c.teamsEn} — ${c.competition}`,
    description: desc,
    startDate: c.startIso,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'BarOrPub',
      name: 'Dubliners Irish Pub',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Calle de Espoz y Mina 7',
        addressLocality: 'Madrid',
        postalCode: '28012',
        addressCountry: 'ES',
      },
      hasMap: SITE.mapsUrl,
    },
    organizer: { '@type': 'BarOrPub', name: 'Dubliners Irish Pub', url: absUrl('/') },
    url: absUrl(path),
  };
}

export const sportsEventTrackingBar = BAR;