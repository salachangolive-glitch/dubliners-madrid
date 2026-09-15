export const SITE = {
  name: 'Dubliners',
  fullName: 'Dubliners Madrid',
  tagline: 'Irish pub near Puerta del Sol',
  address: 'Calle de Espoz y Mina 7',
  postal: '28012 Madrid',
  city: 'Madrid',
  country: 'ES',
  phone: '+34 915 32 79 56',
  phoneHref: 'tel:+34915327956',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Calle+de+Espoz+y+Mina+7,+28012+Madrid',
  mapsEmbed:
    'https://www.google.com/maps?q=Calle+de+Espoz+y+Mina+7,+28012+Madrid&output=embed',
  instagram: 'https://www.instagram.com/dublinersirishpubmadrid/',
  instagramHandle: '@dublinersirishpubmadrid',
  siteUrl: 'https://salachangolive-glitch.github.io',
  base: '/dubliners-madrid',
} as const;

export const HOURS = [
  { day: 'Monday', hours: '12:00–02:00' },
  { day: 'Tuesday', hours: '12:00–02:00' },
  { day: 'Wednesday', hours: '12:00–02:00' },
  { day: 'Friday', hours: '12:30–02:30' },
  { day: 'Saturday', hours: '12:30–02:30' },
  { day: 'Sunday', hours: '12:00–02:00' },
] as const;

export function absUrl(path: string): string {
  const base = SITE.base.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.siteUrl}${base}${p}`;
}

export function withBase(path: string): string {
  const base = SITE.base.replace(/\/$/, '');
  if (!path || path === '/') return `${base}/`;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}
