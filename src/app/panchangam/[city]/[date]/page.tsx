import { notFound } from 'next/navigation';
import { dateWindowParams } from '@/lib/static-budget';
import PanchangView, { panchangFaqs } from '@/components/panchang/PanchangView';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import { getCityById } from '@/lib/astro-core/constants';
import { cityTodayStr } from '@/lib/astro-core/sunrise';
import { computeDayPanchang } from '@/lib/astro-core/panchang-day';
import { isSupportedDate, parseDateStr, formatDateTa } from '@/lib/date-format';
import { panchangMetadata } from '@/lib/panchang-meta';
import { generateToolJsonLd } from '@/lib/seo/tool-schema';

// Date pages are generated on first request, then cached
export const dynamicParams = false;

export function generateStaticParams() {
  return dateWindowParams();
}

type P = { params: Promise<{ city: string; date: string }> };

export async function generateMetadata({ params }: P) {
  const { city: id, date } = await params;
  const city = getCityById(id);
  if (!city || !isSupportedDate(date)) return {};
  const meta = panchangMetadata(city, `/panchangam/${id}/${date}`, `/panchangam/${id}/${date}`, date, date === cityTodayStr(city));
  return meta;
}

export default async function PanchangamDatePage({ params }: P) {
  const { city: id, date } = await params;
  const city = getCityById(id);
  if (!city || !isSupportedDate(date)) notFound();
  const ymd = parseDateStr(date)!;
  const faqs = panchangFaqs(computeDayPanchang(ymd.y, ymd.m, ymd.d, city));
  const jsonLd = generateToolJsonLd({
    name: `பஞ்சாங்கம் ${city.nameTa} ${formatDateTa(date)}`,
    description: `${formatDateTa(date)} அன்று ${city.nameTa}யின் திதி, நட்சத்திரம், ராகு காலம், நல்ல நேரம்`,
    path: `/panchangam/${id}/${date}`,
    faqs,
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 pt-4">
          <Breadcrumbs
            items={[
              { name: 'முகப்பு', href: '/' },
              { name: 'பஞ்சாங்கம்', href: '/panchangam' },
              { name: city.nameTa, href: `/panchangam/${id}` },
              { name: formatDateTa(date) },
            ]}
          />
        </div>
        <PanchangView city={city} dateStr={date} isToday={false} basePath="/panchangam" updatedLabel={formatDateTa(cityTodayStr(city))} />
      </div>
    </>
  );
}
