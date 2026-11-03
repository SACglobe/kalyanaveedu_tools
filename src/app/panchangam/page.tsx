import PanchangView, { panchangFaqs } from '@/components/panchang/PanchangView';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import { TAMIL_CITIES } from '@/lib/astro-core/constants';
import { cityTodayStr } from '@/lib/astro-core/sunrise';
import { computeDayPanchang } from '@/lib/astro-core/panchang-day';
import { parseDateStr, formatDateTa } from '@/lib/date-format';
import { panchangMetadata } from '@/lib/panchang-meta';
import { generateToolJsonLd } from '@/lib/seo/tool-schema';

export const revalidate = 1800;

const city = TAMIL_CITIES[0]; // Chennai: the default view, other cities live at /panchangam/[city]

export function generateMetadata() {
  return panchangMetadata(city, '/panchangam', '/panchangam', cityTodayStr(city), true);
}

export default function PanchangamPage() {
  const today = cityTodayStr(city);
  const ymd = parseDateStr(today)!;
  const faqs = panchangFaqs(computeDayPanchang(ymd.y, ymd.m, ymd.d, city));
  const jsonLd = generateToolJsonLd({
    name: 'இன்றைய பஞ்சாங்கம் – Today Tamil Panchangam',
    description: 'தினசரி தமிழ் பஞ்சாங்கம்: திதி, நட்சத்திரம், யோகம், கரணம், ராகு காலம், நல்ல நேரம்',
    path: '/panchangam',
    faqs,
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 pt-4">
          <Breadcrumbs items={[{ name: 'முகப்பு', href: '/' }, { name: 'இன்றைய பஞ்சாங்கம்' }]} />
        </div>
        <PanchangView city={city} dateStr={today} isToday basePath="/panchangam" updatedLabel={formatDateTa(today)} />
      </div>
    </>
  );
}
