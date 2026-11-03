import { notFound } from 'next/navigation';
import PanchangView, { panchangFaqs } from '@/components/panchang/PanchangView';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import { TAMIL_CITIES, getCityById } from '@/lib/astro-core/constants';
import { cityTodayStr } from '@/lib/astro-core/sunrise';
import { computeDayPanchang } from '@/lib/astro-core/panchang-day';
import { parseDateStr, formatDateTa } from '@/lib/date-format';
import { panchangMetadata } from '@/lib/panchang-meta';
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
  // Chennai's canonical view is /panchangam
  return panchangMetadata(city, `/panchangam/${id}`, id === 'chennai' ? '/panchangam' : `/panchangam/${id}`, cityTodayStr(city), true);
}

export default async function CityPanchangamPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: id } = await params;
  const city = getCityById(id);
  if (!city) notFound();
  const today = cityTodayStr(city);
  const ymd = parseDateStr(today)!;
  const faqs = panchangFaqs(computeDayPanchang(ymd.y, ymd.m, ymd.d, city));
  const jsonLd = generateToolJsonLd({
    name: `இன்றைய பஞ்சாங்கம் ${city.nameTa} – Today Panchangam ${city.nameEn}`,
    description: `${city.nameTa} நேரப்படி இன்றைய திதி, நட்சத்திரம், ராகு காலம், நல்ல நேரம்`,
    path: `/panchangam/${id}`,
    faqs,
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 pt-4">
          <Breadcrumbs items={[{ name: 'முகப்பு', href: '/' }, { name: 'பஞ்சாங்கம்', href: '/panchangam' }, { name: city.nameTa }]} />
        </div>
        <PanchangView city={city} dateStr={today} isToday basePath="/panchangam" updatedLabel={formatDateTa(today)} />
      </div>
    </>
  );
}
