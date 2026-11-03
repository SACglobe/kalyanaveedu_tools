import Link from 'next/link';
import { TAMIL_CITIES } from '@/lib/astro-core/constants';
import { cityTodayStr } from '@/lib/astro-core/sunrise';
import { computeDayPanchang } from '@/lib/astro-core/panchang-day';
import { calculateRahuKalam } from '@/lib/astro-core/panchangam';
import { formatDateTa, parseDateStr } from '@/lib/date-format';

// Server-rendered snapshot of today's panchangam (Chennai): a daily-return hook plus links into the new pages
export default function TodayStrip() {
  const city = TAMIL_CITIES[0];
  const today = cityTodayStr(city);
  const p = parseDateStr(today)!;
  const day = computeDayPanchang(p.y, p.m, p.d, city);
  const rahu = calculateRahuKalam(new Date(p.y, p.m - 1, p.d), city);
  const t = day.tithiSegments[0];
  const n = day.nakshatraSegments[0];

  const items = [
    { k: 'திதி', v: `${t.name.pakshaTa} ${t.name.ta}` },
    { k: 'நட்சத்திரம்', v: n.nameTa },
    { k: 'ராகு காலம்', v: `${rahu.window.startFormatted} – ${rahu.window.endFormatted}` },
    { k: 'சூரிய உதயம்', v: day.sunrise },
  ];

  return (
    <section className="container mx-auto px-4">
      <div className="bg-white rounded-3xl border border-orange-100 shadow-sm p-5 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <h2 className="text-xl md:text-2xl font-black text-gray-900">🪔 இன்றைய பஞ்சாங்கம் – {formatDateTa(today)}</h2>
          <span className="text-xs text-gray-400">{city.nameTa} நேரப்படி</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
          {items.map((i) => (
            <div key={i.k} className="bg-orange-50/60 rounded-2xl p-3 text-center">
              <div className="text-xs font-bold text-gray-500 mb-1">{i.k}</div>
              <div className="font-black text-gray-900 text-sm md:text-base">{i.v}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 text-sm font-bold">
          <Link href="/panchangam" className="px-4 py-2 rounded-xl bg-primary text-white">முழு பஞ்சாங்கம் →</Link>
          <Link href="/rasi-palan" className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-700 hover:border-orange-300">இன்றைய ராசி பலன்</Link>
          <Link href="/tools/gowri-nalla-neram" className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-700 hover:border-orange-300">நல்ல நேரம்</Link>
          <Link href="/tools/viratham" className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-700 hover:border-orange-300">விரத நாட்கள்</Link>
        </div>
      </div>
    </section>
  );
}
