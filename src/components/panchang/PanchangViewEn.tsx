import Link from 'next/link';
import { hasDatePage } from '@/lib/static-budget';
import { computeDayPanchang, YOGA_NAMES_EN, karanaNameEn, TAMIL_MONTH_NAMES_EN, type DayPanchang } from '@/lib/astro-core/panchang-day';
import { calculateRahuKalam, calculateYamakandam, calculateKuligai, calculateGowriPanchangam } from '@/lib/astro-core/panchangam';
import { WEEKDAYS_TAMIL, type TamilCity } from '@/lib/astro-core/constants';
import { addDays, formatDateEn, parseDateStr } from '@/lib/date-format';
import CitySelect from '@/components/tools/CitySelect';
import CityLinks from '@/components/tools/CityLinks';
import AdsterraBanner from '@/components/ads/AdsterraBanner';

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3 border-b border-gray-100 last:border-0">
      <dt className="text-sm font-bold text-gray-500 shrink-0">{label}</dt>
      <dd className="text-sm md:text-base font-semibold text-gray-900 text-right">{children}</dd>
    </div>
  );
}

const until = (end: string, nextDay: boolean) => `until ${end}${nextDay ? ' (next day)' : ''}`;
const pakshaEn = (p: 'shukla' | 'krishna') => (p === 'shukla' ? 'Shukla Paksha (waxing)' : 'Krishna Paksha (waning)');

export function panchangFaqsEn(p: DayPanchang) {
  const t = p.tithiSegments[0];
  const n = p.nakshatraSegments[0];
  const city = p.city.nameEn;
  return [
    { q: `What is the tithi on ${formatDateEn(p.dateStr)} in ${city}?`, a: `At sunrise on ${formatDateEn(p.dateStr)} the tithi is ${pakshaEn(t.name.paksha)} ${t.name.en}, ${until(t.endFormatted, t.endsNextDay)}.` },
    { q: `What is the nakshatra on ${formatDateEn(p.dateStr)}?`, a: `${n.nameEn} nakshatra ${until(n.endFormatted, n.endsNextDay)}. Sunrise is ${p.sunrise} and sunset ${p.sunset} (${city} local time).` },
    { q: 'What is a Panchangam?', a: 'A Panchangam is a Hindu almanac with five limbs: tithi, vaara (weekday), nakshatra, yoga and karana. It is used to choose auspicious times for weddings, house-warmings and other ceremonies.' },
  ];
}

export default function PanchangViewEn({ city, dateStr, isToday, basePath, updatedLabel }: { city: TamilCity; dateStr: string; isToday: boolean; basePath: string; updatedLabel: string }) {
  const ymd = parseDateStr(dateStr)!;
  const p = computeDayPanchang(ymd.y, ymd.m, ymd.d, city);
  const wall = new Date(ymd.y, ymd.m - 1, ymd.d);
  const rahu = calculateRahuKalam(wall, city);
  const yama = calculateYamakandam(wall, city);
  const kuligai = calculateKuligai(wall, city);
  const gowri = calculateGowriPanchangam(wall, city);
  const good = [...gowri.daySegments, ...gowri.nightSegments].filter((s) => s.isAuspicious);
  const weekday = WEEKDAYS_TAMIL[p.weekdayIndex];
  const cityPath = `${basePath}/${city.id}`;
  const strip = [-3, -2, -1, 0, 1, 2, 3].map((o) => addDays(dateStr, o)).filter((d) => d === dateStr || hasDatePage('en', city.id, d));

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <header className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{isToday ? "Today's Panchangam" : 'Panchangam'} – {city.nameEn}</h1>
        <p className="text-gray-600">{formatDateEn(dateStr)} ({weekday.nameEn}) · Tamil Panchangam with tithi, nakshatra, Rahu Kalam and Nalla Neram</p>
        <p className="text-xs text-gray-400 mt-1">Updated: {updatedLabel}</p>
      </header>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-5 md:p-8 mb-6">
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <CitySelect english basePath={basePath} currentId={city.id} suffix="" />
          <div className="flex items-end gap-2">
            {hasDatePage('en', city.id, addDays(dateStr, -1)) && (
<Link href={`${cityPath}/${addDays(dateStr, -1)}`} className="flex-1 text-center px-3 py-2.5 rounded-xl border border-gray-200 text-sm font-bold text-gray-700 hover:border-orange-300">← Previous day</Link>
)}
            {!isToday && <Link href={cityPath} className="px-3 py-2.5 rounded-xl bg-primary text-white text-sm font-bold">Today</Link>}
            {hasDatePage('en', city.id, addDays(dateStr, 1)) && (
<Link href={`${cityPath}/${addDays(dateStr, 1)}`} className="flex-1 text-center px-3 py-2.5 rounded-xl border border-gray-200 text-sm font-bold text-gray-700 hover:border-orange-300">Next day →</Link>
)}
          </div>
        </div>
        <dl>
          <Row label="Tamil date">{TAMIL_MONTH_NAMES_EN[p.tamilDate.monthIndex]} {p.tamilDate.day}</Row>
          <Row label="Weekday">{weekday.nameEn}</Row>
          <Row label="Tithi">{p.tithiSegments.map((s, i) => <div key={i}>{pakshaEn(s.name.paksha)} {s.name.en} <span className="text-gray-500 font-medium">– {until(s.endFormatted, s.endsNextDay)}</span></div>)}</Row>
          <Row label="Nakshatra">{p.nakshatraSegments.map((s, i) => <div key={i}>{s.nameEn} <span className="text-gray-500 font-medium">– {until(s.endFormatted, s.endsNextDay)}</span></div>)}</Row>
          <Row label="Yoga">{p.yogaSegments.map((s, i) => <div key={i}>{YOGA_NAMES_EN[s.index]} <span className="text-gray-500 font-medium">– {until(s.endFormatted, s.endsNextDay)}</span></div>)}</Row>
          <Row label="Karana">{p.karanaSegments.map((s, i) => <div key={i}>{karanaNameEn(s.index)} <span className="text-gray-500 font-medium">– {until(s.endFormatted, s.endsNextDay)}</span></div>)}</Row>
          <Row label="Moon sign">{p.moonRasiSegments.map((s, i) => <div key={i}>{s.rasiEn}{i < p.moonRasiSegments.length - 1 ? <span className="text-gray-500 font-medium"> – {until(s.endFormatted, s.endsNextDay)}</span> : null}</div>)}</Row>
          <Row label="Sunrise / Sunset">{p.sunrise} / {p.sunset}</Row>
        </dl>
      </div>

      <AdsterraBanner format="300x250" className="mb-6" />

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <section className="bg-rose-50 rounded-2xl border border-rose-100 p-5">
          <h2 className="text-lg font-black text-rose-900 mb-3">Times to avoid</h2>
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between"><dt className="font-bold">Rahu Kalam</dt><dd>{rahu.window.startFormatted} – {rahu.window.endFormatted}</dd></div>
            <div className="flex justify-between"><dt className="font-bold">Yamakandam</dt><dd>{yama.window.startFormatted} – {yama.window.endFormatted}</dd></div>
            <div className="flex justify-between"><dt className="font-bold">Kuligai</dt><dd>{kuligai.window.startFormatted} – {kuligai.window.endFormatted}</dd></div>
          </dl>
        </section>
        <section className="bg-emerald-50 rounded-2xl border border-emerald-100 p-5">
          <h2 className="text-lg font-black text-emerald-900 mb-3">Nalla Neram (Gowri)</h2>
          <ul className="space-y-1.5 text-sm">
            {good.slice(0, 6).map((s, i) => <li key={i} className="flex justify-between"><span className="font-bold">{s.nameEn}</span><span>{s.window.startFormatted} – {s.window.endFormatted}</span></li>)}
          </ul>
        </section>
      </div>

      <nav aria-label="Nearby days" className="mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-3">Nearby days</h2>
        <div className="flex flex-wrap gap-2">
          {strip.map((d) => (
            <Link key={d} href={d === dateStr && isToday ? cityPath : `${cityPath}/${d}`} aria-current={d === dateStr ? 'page' : undefined} className={`px-3 py-1.5 rounded-full text-sm border ${d === dateStr ? 'bg-primary text-white border-primary' : 'bg-white border-gray-200 text-gray-700 hover:border-orange-300'}`}>{formatDateEn(d)}</Link>
          ))}
        </div>
      </nav>

      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-black text-gray-900">FAQ</h2>
        {panchangFaqsEn(p).map((f) => (
          <details key={f.q} className="bg-white rounded-xl border border-gray-100 p-4" open>
            <summary className="font-bold text-gray-900 cursor-pointer">{f.q}</summary>
            <p className="mt-2 text-gray-600 leading-relaxed text-sm">{f.a}</p>
          </details>
        ))}
        <p className="text-xs text-gray-400">Computed from Sun and Moon positions (Lahiri ayanamsa); times may differ by a few minutes. Confirm important ceremonies with your family astrologer.</p>
        <p className="text-sm"><Link href={`/panchangam/${city.id}${isToday || !hasDatePage('ta', city.id, dateStr) ? '' : `/${dateStr}`}`} className="text-primary font-bold">தமிழில் பார்க்க →</Link></p>
      </section>

      <CityLinks english basePath={basePath} title="Panchangam for other cities" currentId={city.id} />
    </div>
  );
}
