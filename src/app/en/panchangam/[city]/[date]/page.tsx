import { notFound } from 'next/navigation';
import { dateWindowParams } from '@/lib/static-budget';
import PanchangViewEn, { panchangFaqsEn } from '@/components/panchang/PanchangViewEn';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import { getCityById } from '@/lib/astro-core/constants';
import { cityTodayStr } from '@/lib/astro-core/sunrise';
import { computeDayPanchang } from '@/lib/astro-core/panchang-day';
import { isSupportedDate, parseDateStr, formatDateEn } from '@/lib/date-format';
import { panchangMetadataEn } from '@/lib/panchang-meta-en';
import { generateToolJsonLd } from '@/lib/seo/tool-schema';

export const dynamicParams = false;

export function generateStaticParams() {
  return dateWindowParams('en');
}

type P = { params: Promise<{ city: string; date: string }> };

export async function generateMetadata({ params }: P) {
  const { city: id, date } = await params;
  const city = getCityById(id);
  if (!city || !isSupportedDate(date)) return {};
  return panchangMetadataEn(city, `/en/panchangam/${id}/${date}`, `/en/panchangam/${id}/${date}`, `/panchangam/${id}/${date}`, date, false);
}

export default async function EnPanchangamDatePage({ params }: P) {
  const { city: id, date } = await params;
  const city = getCityById(id);
  if (!city || !isSupportedDate(date)) notFound();
  const ymd = parseDateStr(date)!;
  const faqs = panchangFaqsEn(computeDayPanchang(ymd.y, ymd.m, ymd.d, city));
  const jsonLd = generateToolJsonLd({ name: `Panchangam ${city.nameEn} ${formatDateEn(date)}`, description: `Tithi, nakshatra, Rahu Kalam and Nalla Neram for ${city.nameEn} on ${formatDateEn(date)}`, path: `/en/panchangam/${id}/${date}`, faqs });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 pt-4"><Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Panchangam', href: '/en/panchangam' }, { name: city.nameEn, href: `/en/panchangam/${id}` }, { name: formatDateEn(date) }]} /></div>
        <PanchangViewEn city={city} dateStr={date} isToday={false} basePath="/en/panchangam" updatedLabel={formatDateEn(cityTodayStr(city))} />
      </div>
    </>
  );
}
