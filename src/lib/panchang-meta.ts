import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import { formatDateEn, formatDateTa } from '@/lib/date-format';
import type { TamilCity } from '@/lib/astro-core/constants';
import { langAlternates } from '@/lib/hreflang';

export function panchangMetadata(city: TamilCity, path: string, canonicalPath: string, dateStr: string, isToday: boolean): Metadata {
  const dateTa = formatDateTa(dateStr);
  const dateEn = formatDateEn(dateStr);
  const title = isToday
    ? `இன்றைய பஞ்சாங்கம் ${city.nameTa} – ${dateTa} | Today Panchangam ${city.nameEn}`
    : `பஞ்சாங்கம் ${city.nameTa} ${dateTa} | Panchangam ${city.nameEn} ${dateEn}`;
  const description = isToday
    ? `${dateTa} இன்றைய பஞ்சாங்கம் – ${city.nameTa}: திதி, நட்சத்திரம், யோகம், கரணம், ராகு காலம், யமகண்டம், நல்ல நேரம். Today Tamil Panchangam for ${city.nameEn} with tithi, nakshatra, Rahu Kalam and Nalla Neram.`
    : `${dateTa} (${dateEn}) பஞ்சாங்கம் – ${city.nameTa}: திதி, நட்சத்திரம், யோகம், ராகு காலம், நல்ல நேரம். Tamil Panchangam for ${city.nameEn} on ${dateEn}.`;
  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}${canonicalPath}`,
      languages: langAlternates(canonicalPath, canonicalPath.replace('/panchangam', '/en/panchangam')),
    },
    openGraph: { title, description, url: `${SITE_CONFIG.url}${path}`, type: 'website', locale: 'ta_IN' },
  };
}
