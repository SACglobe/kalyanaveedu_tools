import RahuKalam from '@/components/tools/RahuKalam';
import Yamakandam from '@/components/tools/Yamakandam';
import GowriNallaNeram from '@/components/tools/GowriNallaNeram';
import Choghadiya from '@/components/tools/Choghadiya';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import CityLinks from '@/components/tools/CityLinks';
import { type TamilCity } from '@/lib/astro-core/constants';
import { cityTodayStr } from '@/lib/astro-core/sunrise';
import { CITY_TOOLS, citySummary, type CityToolKey } from '@/lib/city-tools';
import { parseDateStr, formatDateTa } from '@/lib/date-format';
import { generateToolJsonLd } from '@/lib/seo/tool-schema';

export default function CityToolPage({ tool, city }: { tool: CityToolKey; city: TamilCity }) {
  const meta = CITY_TOOLS[tool];
  const today = cityTodayStr(city);
  const p = parseDateStr(today)!;
  const summary = citySummary(tool, city, today, new Date(p.y, p.m - 1, p.d));
  const jsonLd = generateToolJsonLd({
    name: `${meta.titleTa} ${city.nameTa} – ${meta.titleEn} in ${city.nameEn}`,
    description: summary.a,
    path: `/tools/${tool}/${city.id}`,
    faqs: [summary],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 pt-4">
          <Breadcrumbs
            items={[
              { name: 'முகப்பு', href: '/' },
              { name: 'கருவிகள்', href: '/tools' },
              { name: meta.titleTa, href: `/tools/${tool}` },
              { name: city.nameTa },
            ]}
          />
        </div>
        <div className="container mx-auto px-4 pb-2 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            {meta.titleTa} – {city.nameTa}
          </h1>
          <p className="text-lg text-gray-600">{meta.titleEn} in {city.nameEn}</p>
          <p className="mt-4 max-w-2xl mx-auto text-gray-700 leading-relaxed bg-white border border-orange-100 rounded-2xl p-4 text-sm md:text-base">
            {summary.a}
          </p>
          <p className="text-xs text-gray-400 mt-2">புதுப்பிக்கப்பட்டது: {formatDateTa(today)}</p>
        </div>

        {tool === 'rahu-kalam' && <RahuKalam initialCityId={city.id} initialDate={today} />}
        {tool === 'yamakandam' && <Yamakandam initialCityId={city.id} initialDate={today} />}
        {tool === 'gowri-nalla-neram' && <GowriNallaNeram initialCityId={city.id} initialDate={today} />}
        {tool === 'choghadiya' && <Choghadiya initialCityId={city.id} initialDate={today} />}

        <CityLinks basePath={`/tools/${tool}`} title={`பிற ஊர்களுக்கான ${meta.titleTa}`} currentId={city.id} />
      </div>
    </>
  );
}
