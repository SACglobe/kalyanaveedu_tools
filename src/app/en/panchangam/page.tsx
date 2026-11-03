import PanchangViewEn, { panchangFaqsEn } from '@/components/panchang/PanchangViewEn';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import { TAMIL_CITIES } from '@/lib/astro-core/constants';
import { cityTodayStr } from '@/lib/astro-core/sunrise';
import { computeDayPanchang } from '@/lib/astro-core/panchang-day';
import { parseDateStr, formatDateEn } from '@/lib/date-format';
import { panchangMetadataEn } from '@/lib/panchang-meta-en';
import { generateToolJsonLd } from '@/lib/seo/tool-schema';

export const revalidate = 1800;
const city = TAMIL_CITIES[0];

export function generateMetadata() {
  return panchangMetadataEn(city, '/en/panchangam', '/en/panchangam', '/panchangam', cityTodayStr(city), true);
}

export default function EnPanchangamPage() {
  const today = cityTodayStr(city);
  const ymd = parseDateStr(today)!;
  const faqs = panchangFaqsEn(computeDayPanchang(ymd.y, ymd.m, ymd.d, city));
  const jsonLd = generateToolJsonLd({ name: "Today's Panchangam – Tamil Panchangam", description: 'Daily tithi, nakshatra, yoga, karana, Rahu Kalam and Nalla Neram', path: '/en/panchangam', faqs });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 pt-4"><Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: "Today's Panchangam" }]} /></div>
        <PanchangViewEn city={city} dateStr={today} isToday basePath="/en/panchangam" updatedLabel={formatDateEn(today)} />
      </div>
    </>
  );
}
