import { notFound } from 'next/navigation';
import PanchangViewEn, { panchangFaqsEn } from '@/components/panchang/PanchangViewEn';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import { TAMIL_CITIES, getCityById } from '@/lib/astro-core/constants';
import { cityTodayStr } from '@/lib/astro-core/sunrise';
import { computeDayPanchang } from '@/lib/astro-core/panchang-day';
import { parseDateStr, formatDateEn } from '@/lib/date-format';
import { panchangMetadataEn } from '@/lib/panchang-meta-en';
import { generateToolJsonLd } from '@/lib/seo/tool-schema';

export const revalidate = 1800;
export const dynamicParams = false;

export function generateStaticParams() {
  return TAMIL_CITIES.map((c) => ({ city: c.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city: id } = await params;
  const city = getCityById(id);
  if (!city) return {};
  return panchangMetadataEn(city, `/en/panchangam/${id}`, id === 'chennai' ? '/en/panchangam' : `/en/panchangam/${id}`, id === 'chennai' ? '/panchangam' : `/panchangam/${id}`, cityTodayStr(city), true);
}

export default async function EnCityPanchangamPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: id } = await params;
  const city = getCityById(id);
  if (!city) notFound();
  const today = cityTodayStr(city);
  const ymd = parseDateStr(today)!;
  const faqs = panchangFaqsEn(computeDayPanchang(ymd.y, ymd.m, ymd.d, city));
  const jsonLd = generateToolJsonLd({ name: `Today Panchangam ${city.nameEn}`, description: `Tithi, nakshatra, Rahu Kalam and Nalla Neram for ${city.nameEn}`, path: `/en/panchangam/${id}`, faqs });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 pt-4"><Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Panchangam', href: '/en/panchangam' }, { name: city.nameEn }]} /></div>
        <PanchangViewEn city={city} dateStr={today} isToday basePath="/en/panchangam" updatedLabel={formatDateEn(today)} />
      </div>
    </>
  );
}
