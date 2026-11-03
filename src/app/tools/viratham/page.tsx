import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import AdsterraBanner from '@/components/ads/AdsterraBanner';
import { cityTodayStr } from '@/lib/astro-core/sunrise';
import { VIRATHAM_LIST, upcomingViratham } from '@/lib/viratham';
import { formatDateTa } from '@/lib/date-format';
import { SITE_CONFIG } from '@/lib/constants';

export const revalidate = 21600;

export const metadata: Metadata = {
  title: 'விரத நாட்கள் – அமாவாசை, பௌர்ணமி, ஏகாதசி, சஷ்டி, பிரதோஷம் | Tamil Viratham Calendar',
  description: 'வரும் அமாவாசை, பௌர்ணமி, ஏகாதசி, சஷ்டி, பிரதோஷம், சங்கடஹர சதுர்த்தி, கார்த்திகை விரத தேதிகள். Upcoming Tamil viratham & fasting dates.',
  alternates: { canonical: `${SITE_CONFIG.url}/tools/viratham` },
};

export default function VirathamHub() {
  const today = cityTodayStr();
  const horizon = 75;
  const merged = VIRATHAM_LIST.flatMap((v) =>
    upcomingViratham(v.type, today, horizon).map((e) => ({ ...e, meta: v }))
  ).sort((a, b) => a.dateStr.localeCompare(b.dateStr));

  return (
    <div className="bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Breadcrumbs items={[{ name: 'முகப்பு', href: '/' }, { name: 'கருவிகள்', href: '/tools' }, { name: 'விரத நாட்கள்' }]} />
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">விரத நாட்கள் & முக்கிய திதிகள்</h1>
          <p className="text-gray-600">Tamil Viratham Calendar – Amavasai, Pournami, Ekadashi, Sashti, Pradosham</p>
          <p className="text-xs text-gray-400 mt-1">புதுப்பிக்கப்பட்டது: {formatDateTa(today)}</p>
        </header>

        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {VIRATHAM_LIST.map((v) => {
            const next = upcomingViratham(v.type, today, 60)[0];
            return (
              <Link key={v.type} href={`/tools/viratham/${v.type}`} className="bg-white rounded-2xl border border-gray-100 p-4 hover:border-orange-300 hover:shadow-md transition-all flex items-center gap-4">
                <span className="text-3xl">{v.icon}</span>
                <span>
                  <span className="block font-black text-gray-900">{v.titleTa} <span className="text-xs font-medium text-gray-400">{v.titleEn}</span></span>
                  <span className="block text-sm text-gray-600">{next ? `அடுத்தது: ${formatDateTa(next.dateStr)} (${next.weekdayTa})` : 'தேதிகளைக் காண்க'}</span>
                </span>
              </Link>
            );
          })}
        </div>

        <AdsterraBanner format="300x250" className="mb-8" />

        <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-5 md:p-8 mb-6">
          <h2 className="text-xl font-black text-gray-900 mb-4">அடுத்த {horizon} நாட்களில் வரும் விரதங்கள்</h2>
          <ul className="divide-y divide-gray-100">
            {merged.map((e) => (
              <li key={e.meta.type + e.dateStr} className="py-3 flex items-center justify-between gap-3">
                <span className="font-bold text-gray-900">{formatDateTa(e.dateStr)} <span className="text-gray-400 font-medium">({e.weekdayTa})</span></span>
                <Link href={`/tools/viratham/${e.meta.type}`} className="text-sm text-primary font-bold">{e.meta.icon} {e.meta.titleTa}</Link>
              </li>
            ))}
          </ul>
        </section>
        <p className="text-xs text-gray-400">
          தேதிகள் சென்னை நேரப்படி திதி/நட்சத்திரம் கணிப்பில் பெறப்பட்டவை. சில விரதங்கள் சம்பிரதாயப்படி (ஸ்மார்த்த / வைஷ்ணவ) ஒரு நாள் வேறுபடலாம்; உங்கள் கோயில் பஞ்சாங்கத்துடன் உறுதி செய்யவும்.
        </p>
      </div>
    </div>
  );
}
