import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import { formatDateEn } from '@/lib/date-format';
import type { TamilCity } from '@/lib/astro-core/constants';
import { langAlternates } from '@/lib/hreflang';

export function panchangMetadataEn(city: TamilCity, path: string, canonicalPath: string, taPath: string, dateStr: string, isToday: boolean): Metadata {
  const d = formatDateEn(dateStr);
  const title = isToday
    ? `Today Panchangam ${city.nameEn} – ${d} | Tithi, Nakshatra, Rahu Kalam`
    : `Panchangam ${city.nameEn} ${d} | Tithi, Nakshatra, Rahu Kalam`;
  const description = `Tamil Panchangam for ${city.nameEn} on ${d}: tithi, nakshatra, yoga, karana, Rahu Kalam, Yamakandam and Nalla Neram with exact timings.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_CONFIG.url}${canonicalPath}`, languages: langAlternates(taPath, path) },
    openGraph: { title, description, url: `${SITE_CONFIG.url}${path}`, type: 'website', locale: 'en_IN' },
  };
}
