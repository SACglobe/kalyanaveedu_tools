import Link from 'next/link';
import { hasDatePage } from '@/lib/static-budget';
import { computeDayPanchang, type DayPanchang } from '@/lib/astro-core/panchang-day';
import { calculateRahuKalam, calculateYamakandam, calculateKuligai, calculateGowriPanchangam } from '@/lib/astro-core/panchangam';
import { WEEKDAYS_TAMIL, type TamilCity } from '@/lib/astro-core/constants';
import { getTamilDate } from '@/lib/tamil-calendar-utils';
import { addDays, formatDateEn, formatDateTa, parseDateStr } from '@/lib/date-format';
import CitySelect from '@/components/tools/CitySelect';
import CityLinks from '@/components/tools/CityLinks';
import AdsterraBanner from '@/components/ads/AdsterraBanner';
import RelatedTools from '@/components/tools/RelatedTools';

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3 border-b border-gray-100 last:border-0">
      <dt className="text-sm font-bold text-gray-500 shrink-0">{label}</dt>
      <dd className="text-sm md:text-base font-semibold text-gray-900 text-right">{children}</dd>
    </div>
  );
}

function endNote(endFormatted: string, endsNextDay: boolean) {
  return `${endFormatted}${endsNextDay ? ' (அடுத்த நாள்)' : ''} வரை`;
}

export function panchangFaqs(p: DayPanchang) {
  const t = p.tithiSegments[0];
  const n = p.nakshatraSegments[0];
  const city = p.city.nameTa;
  return [
    {
      q: `${formatDateTa(p.dateStr)} அன்று ${city}யில் திதி என்ன?`,
      a: `${formatDateTa(p.dateStr)} அன்று சூரிய உதய நேரத்தில் ${t.name.pakshaTa} ${t.name.ta} திதி, ${endNote(t.endFormatted, t.endsNextDay)} உள்ளது.`,
    },
    {
      q: `${formatDateTa(p.dateStr)} அன்றைய நட்சத்திரம் என்ன?`,
      a: `${n.nameTa} நட்சத்திரம் ${endNote(n.endFormatted, n.endsNextDay)} இருக்கும். சூரிய உதயம் ${p.sunrise}, அஸ்தமனம் ${p.sunset} (${city} நேரப்படி).`,
    },
    {
      q: 'பஞ்சாங்கம் என்றால் என்ன?',
      a: 'பஞ்சாங்கம் என்பது திதி, வாரம், நட்சத்திரம், யோகம், கரணம் ஆகிய ஐந்து அங்கங்களைக் கொண்ட நாள்காட்டி. திருமணம், புதுமனை புகுவிழா போன்ற சுப காரியங்களுக்கு நல்ல நேரம் பார்க்க இது பயன்படுகிறது.',
    },
  ];
}

export default function PanchangView({
  city,
  dateStr,
  isToday,
  basePath,
  updatedLabel,
}: {
  city: TamilCity;
  dateStr: string;
  isToday: boolean;
  basePath: string; // e.g. /panchangam
  updatedLabel: string;
}) {
  const ymd = parseDateStr(dateStr)!;
  const p = computeDayPanchang(ymd.y, ymd.m, ymd.d, city);
  const wall = new Date(ymd.y, ymd.m - 1, ymd.d);
  const rahu = calculateRahuKalam(wall, city);
  const yama = calculateYamakandam(wall, city);
  const kuligai = calculateKuligai(wall, city);
  const gowri = calculateGowriPanchangam(wall, city);
  const goodGowri = [...gowri.daySegments, ...gowri.nightSegments].filter((s) => s.isAuspicious);
  const tamilYear = getTamilDate(wall).tamilYear;
  const weekday = WEEKDAYS_TAMIL[p.weekdayIndex];
  const cityPath = `${basePath}/${city.id}`;
  const strip = [-3, -2, -1, 0, 1, 2, 3].map((o) => addDays(dateStr, o)).filter((d) => d === dateStr || hasDatePage('ta', city.id, d));

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <header className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
          {isToday ? 'இன்றைய பஞ்சாங்கம்' : 'பஞ்சாங்கம்'} – {city.nameTa}
        </h1>
        <p className="text-gray-600">
          {isToday ? 'Today Panchangam' : 'Tamil Panchangam'} {city.nameEn} · {formatDateTa(dateStr)} ({weekday.nameTa}) · {formatDateEn(dateStr)}
        </p>
        <p className="text-xs text-gray-400 mt-1">புதுப்பிக்கப்பட்டது (Updated): {updatedLabel} · <Link href={`/en/panchangam/${city.id}${isToday || !hasDatePage('en', city.id, dateStr) ? '' : `/${dateStr}`}`} className="text-primary font-bold">View in English →</Link></p>
      </header>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-5 md:p-8 mb-6">
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <CitySelect basePath={basePath} currentId={city.id} suffix="" />
          <div className="flex items-end gap-2">
            {hasDatePage('ta', city.id, addDays(dateStr, -1)) && (
<Link href={`${cityPath}/${addDays(dateStr, -1)}`} className="flex-1 text-center px-3 py-2.5 rounded-xl border border-gray-200 text-sm font-bold text-gray-700 hover:border-orange-300">
              ← முந்தைய நாள்
            </Link>
)}
            {!isToday && (
              <Link href={cityPath} className="px-3 py-2.5 rounded-xl bg-primary text-white text-sm font-bold">இன்று</Link>
            )}
            {hasDatePage('ta', city.id, addDays(dateStr, 1)) && (
<Link href={`${cityPath}/${addDays(dateStr, 1)}`} className="flex-1 text-center px-3 py-2.5 rounded-xl border border-gray-200 text-sm font-bold text-gray-700 hover:border-orange-300">
              அடுத்த நாள் →
            </Link>
)}
          </div>
        </div>

        <dl>
          <Row label="தமிழ் தேதி">{tamilYear} வருடம், {p.tamilDate.monthTa} {p.tamilDate.day}</Row>
          <Row label="கிழமை">{weekday.nameTa} ({weekday.nameEn})</Row>
          <Row label="திதி">
            {p.tithiSegments.map((s, i) => (
              <div key={i}>
                {s.name.pakshaTa} {s.name.ta} <span className="text-gray-500 font-medium">– {endNote(s.endFormatted, s.endsNextDay)}</span>
              </div>
            ))}
          </Row>
          <Row label="நட்சத்திரம்">
            {p.nakshatraSegments.map((s, i) => (
              <div key={i}>
                {s.nameTa} <span className="text-gray-500 font-medium">– {endNote(s.endFormatted, s.endsNextDay)}</span>
              </div>
            ))}
          </Row>
          <Row label="யோகம்">
            {p.yogaSegments.map((s, i) => (
              <div key={i}>
                {s.nameTa} <span className="text-gray-500 font-medium">– {endNote(s.endFormatted, s.endsNextDay)}</span>
              </div>
            ))}
          </Row>
          <Row label="கரணம்">
            {p.karanaSegments.map((s, i) => (
              <div key={i}>
                {s.nameTa} <span className="text-gray-500 font-medium">– {endNote(s.endFormatted, s.endsNextDay)}</span>
              </div>
            ))}
          </Row>
          <Row label="சந்திர ராசி">
            {p.moonRasiSegments.map((s, i) => (
              <div key={i}>
                {s.rasiTa} <span className="text-gray-500 font-medium">{i < p.moonRasiSegments.length - 1 ? `– ${endNote(s.endFormatted, s.endsNextDay)}` : ''}</span>
              </div>
            ))}
          </Row>
          <Row label="சூரிய உதயம் / அஸ்தமனம்">{p.sunrise} / {p.sunset}</Row>
        </dl>
      </div>

      <AdsterraBanner format="300x250" className="mb-6" />

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <section className="bg-rose-50 rounded-2xl border border-rose-100 p-5">
          <h2 className="text-lg font-black text-rose-900 mb-3">தவிர்க்க வேண்டிய நேரங்கள்</h2>
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between"><dt className="font-bold">ராகு காலம்</dt><dd>{rahu.window.startFormatted} – {rahu.window.endFormatted}</dd></div>
            <div className="flex justify-between"><dt className="font-bold">யமகண்டம்</dt><dd>{yama.window.startFormatted} – {yama.window.endFormatted}</dd></div>
            <div className="flex justify-between"><dt className="font-bold">குளிகை</dt><dd>{kuligai.window.startFormatted} – {kuligai.window.endFormatted}</dd></div>
          </dl>
        </section>
        <section className="bg-emerald-50 rounded-2xl border border-emerald-100 p-5">
          <h2 className="text-lg font-black text-emerald-900 mb-3">நல்ல நேரம் (கவுரி)</h2>
          <ul className="space-y-1.5 text-sm">
            {goodGowri.slice(0, 6).map((s, i) => (
              <li key={i} className="flex justify-between">
                <span className="font-bold">{s.nameTa}</span>
                <span>{s.window.startFormatted} – {s.window.endFormatted}</span>
              </li>
            ))}
          </ul>
          <Link href={`/tools/gowri-nalla-neram/${city.id}`} className="inline-block mt-3 text-sm font-bold text-emerald-800 underline">முழு கவுரி நல்ல நேரம் →</Link>
        </section>
      </div>

      <nav aria-label="Nearby days" className="mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-3">அருகிலுள்ள நாட்கள் (Nearby days)</h2>
        <div className="flex flex-wrap gap-2">
          {strip.map((d) => (
            <Link
              key={d}
              href={d === dateStr ? cityPath + (isToday ? '' : `/${d}`) : `${cityPath}/${d}`}
              aria-current={d === dateStr ? 'page' : undefined}
              className={`px-3 py-1.5 rounded-full text-sm border ${d === dateStr ? 'bg-primary text-white border-primary' : 'bg-white border-gray-200 text-gray-700 hover:border-orange-300'}`}
            >
              {formatDateTa(d)}
            </Link>
          ))}
        </div>
      </nav>

      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-black text-gray-900">கேள்விகள் (FAQ)</h2>
        {panchangFaqs(p).map((f) => (
          <details key={f.q} className="bg-white rounded-xl border border-gray-100 p-4" open>
            <summary className="font-bold text-gray-900 cursor-pointer">{f.q}</summary>
            <p className="mt-2 text-gray-600 leading-relaxed text-sm">{f.a}</p>
          </details>
        ))}
        <p className="text-xs text-gray-400">
          கணிப்புகள் சூரிய–சந்திர நிலைகளின் (லாகிரி அயனாம்சம்) கணித மாதிரியில் பெறப்பட்டவை; சில நிமிடங்கள் வேறுபடலாம். முக்கிய சுப காரியங்களுக்கு உங்கள் குடும்ப ஜோதிடரிடம் உறுதி செய்யவும்.
        </p>
      </section>

      <CityLinks basePath={basePath} title="பிற ஊர்களுக்கான பஞ்சாங்கம்" currentId={city.id} />
      <RelatedTools currentSlug="rahu-kalam" />
    </div>
  );
}
