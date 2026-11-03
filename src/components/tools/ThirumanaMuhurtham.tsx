'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { TAMIL_MONTHS } from '@/lib/tamil-calendar-data';
import AdsterraBanner from '@/components/ads/AdsterraBanner';
import RelatedTools from '@/components/tools/RelatedTools';

export interface MuhurthamEvent {
  date: string; // YYYY-MM-DD
  year: number;
  englishMonth: string;
  tamilMonth: string;
  tamilDate: string;
  dayOfWeekTa: string;
  dayOfWeekEn: string;
  tithiTa: string;
  nakshatraTa: string;
  muhurthamTimeTa: string;
  isValarpirai: boolean;
  type: 'morning' | 'evening';
}

// Curated 2025 and 2026 Subha Muhurtham Dates for Tamil weddings
export const ALL_MUHURTHAM_DATES: MuhurthamEvent[] = [
  // 2025 Dates
  { date: '2025-01-23', year: 2025, englishMonth: 'January', tamilMonth: 'தை', tamilDate: '10', dayOfWeekTa: 'வியாழன்', dayOfWeekEn: 'Thursday', tithiTa: 'நவமி', nakshatraTa: 'சுவாதி', muhurthamTimeTa: 'காலை 06:15 - 07:15', isValarpirai: true, type: 'morning' },
  { date: '2025-01-26', year: 2025, englishMonth: 'January', tamilMonth: 'தை', tamilDate: '13', dayOfWeekTa: 'ஞாயிறு', dayOfWeekEn: 'Sunday', tithiTa: 'துவாதசி', nakshatraTa: 'மூலம்', muhurthamTimeTa: 'காலை 09:15 - 10:15', isValarpirai: true, type: 'morning' },
  { date: '2025-02-06', year: 2025, englishMonth: 'February', tamilMonth: 'தை', tamilDate: '24', dayOfWeekTa: 'வியாழன்', dayOfWeekEn: 'Thursday', tithiTa: 'நவமி', nakshatraTa: 'ரோகிணி', muhurthamTimeTa: 'காலை 06:30 - 07:30', isValarpirai: true, type: 'morning' },
  { date: '2025-02-14', year: 2025, englishMonth: 'February', tamilMonth: 'மாசி', tamilDate: '02', dayOfWeekTa: 'வெள்ளி', dayOfWeekEn: 'Friday', tithiTa: 'துவிதியை', nakshatraTa: 'மகம்', muhurthamTimeTa: 'காலை 06:15 - 07:15', isValarpirai: true, type: 'morning' },
  { date: '2025-02-21', year: 2025, englishMonth: 'February', tamilMonth: 'மாசி', tamilDate: '09', dayOfWeekTa: 'வெள்ளி', dayOfWeekEn: 'Friday', tithiTa: 'நவமி', nakshatraTa: 'அனுஷம்', muhurthamTimeTa: 'காலை 09:00 - 10:00', isValarpirai: false, type: 'morning' },
  { date: '2025-03-02', year: 2025, englishMonth: 'March', tamilMonth: 'மாசி', tamilDate: '18', dayOfWeekTa: 'ஞாயிறு', dayOfWeekEn: 'Sunday', tithiTa: 'திரிதியை', nakshatraTa: 'ரேவதி', muhurthamTimeTa: 'காலை 07:30 - 08:30', isValarpirai: true, type: 'morning' },
  { date: '2025-03-09', year: 2025, englishMonth: 'March', tamilMonth: 'மாசி', tamilDate: '25', dayOfWeekTa: 'ஞாயிறு', dayOfWeekEn: 'Sunday', tithiTa: 'தசமி', nakshatraTa: 'பூசம்', muhurthamTimeTa: 'காலை 09:15 - 10:15', isValarpirai: true, type: 'morning' },
  { date: '2025-04-20', year: 2025, englishMonth: 'April', tamilMonth: 'சித்திரை', tamilDate: '07', dayOfWeekTa: 'ஞாயிறு', dayOfWeekEn: 'Sunday', tithiTa: 'சப்தமி', nakshatraTa: 'உத்திராடம்', muhurthamTimeTa: 'காலை 06:30 - 07:30', isValarpirai: true, type: 'morning' },
  { date: '2025-04-25', year: 2025, englishMonth: 'April', tamilMonth: 'சித்திரை', tamilDate: '12', dayOfWeekTa: 'வெள்ளி', dayOfWeekEn: 'Friday', tithiTa: 'துவாதசி', nakshatraTa: 'பூரட்டாதி', muhurthamTimeTa: 'காலை 09:00 - 10:00', isValarpirai: true, type: 'morning' },
  { date: '2025-05-08', year: 2025, englishMonth: 'May', tamilMonth: 'சித்திரை', tamilDate: '25', dayOfWeekTa: 'வியாழன்', dayOfWeekEn: 'Thursday', tithiTa: 'ஏகாதசி', nakshatraTa: 'உத்திரம்', muhurthamTimeTa: 'காலை 06:15 - 07:15', isValarpirai: true, type: 'morning' },
  { date: '2025-05-18', year: 2025, englishMonth: 'May', tamilMonth: 'வைகாசி', tamilDate: '04', dayOfWeekTa: 'ஞாயிறு', dayOfWeekEn: 'Sunday', tithiTa: 'சஷ்டி', nakshatraTa: 'திருவோணம்', muhurthamTimeTa: 'காலை 09:15 - 10:15', isValarpirai: false, type: 'morning' },
  { date: '2025-06-05', year: 2025, englishMonth: 'June', tamilMonth: 'வைகாசி', tamilDate: '22', dayOfWeekTa: 'வியாழன்', dayOfWeekEn: 'Thursday', tithiTa: 'தசமி', nakshatraTa: 'ஹஸ்தம்', muhurthamTimeTa: 'காலை 06:30 - 07:30', isValarpirai: true, type: 'morning' },
  { date: '2025-06-15', year: 2025, englishMonth: 'June', tamilMonth: 'ஆனி', tamilDate: '01', dayOfWeekTa: 'ஞாயிறு', dayOfWeekEn: 'Sunday', tithiTa: 'பஞ்சமி', nakshatraTa: 'அவிட்டம்', muhurthamTimeTa: 'காலை 09:00 - 10:00', isValarpirai: false, type: 'morning' },
  { date: '2025-08-24', year: 2025, englishMonth: 'August', tamilMonth: 'ஆவணி', tamilDate: '08', dayOfWeekTa: 'ஞாயிறு', dayOfWeekEn: 'Sunday', tithiTa: 'பிரதமை', nakshatraTa: 'மகம்', muhurthamTimeTa: 'காலை 06:15 - 07:15', isValarpirai: true, type: 'morning' },
  { date: '2025-08-29', year: 2025, englishMonth: 'August', tamilMonth: 'ஆவணி', tamilDate: '13', dayOfWeekTa: 'வெள்ளி', dayOfWeekEn: 'Friday', tithiTa: 'சஷ்டி', nakshatraTa: 'சுவாதி', muhurthamTimeTa: 'காலை 09:00 - 10:00', isValarpirai: true, type: 'morning' },
  { date: '2025-09-07', year: 2025, englishMonth: 'September', tamilMonth: 'ஆவணி', tamilDate: '22', dayOfWeekTa: 'ஞாயிறு', dayOfWeekEn: 'Sunday', tithiTa: 'பௌர்ணமி', nakshatraTa: 'சதயம்', muhurthamTimeTa: 'காலை 06:30 - 07:30', isValarpirai: true, type: 'morning' },
  { date: '2025-10-24', year: 2025, englishMonth: 'October', tamilMonth: 'ஐப்பசி', tamilDate: '07', dayOfWeekTa: 'வெள்ளி', dayOfWeekEn: 'Friday', tithiTa: 'துவிதியை', nakshatraTa: 'அனுஷம்', muhurthamTimeTa: 'காலை 09:15 - 10:15', isValarpirai: true, type: 'morning' },
  { date: '2025-11-02', year: 2025, englishMonth: 'November', tamilMonth: 'ஐப்பசி', tamilDate: '16', dayOfWeekTa: 'ஞாயிறு', dayOfWeekEn: 'Sunday', tithiTa: 'ஏகாதசி', nakshatraTa: 'பூரட்டாதி', muhurthamTimeTa: 'காலை 06:15 - 07:15', isValarpirai: true, type: 'morning' },
  { date: '2025-11-23', year: 2025, englishMonth: 'November', tamilMonth: 'கார்த்திகை', tamilDate: '07', dayOfWeekTa: 'ஞாயிறு', dayOfWeekEn: 'Sunday', tithiTa: 'திரிதியை', nakshatraTa: 'மூலம்', muhurthamTimeTa: 'காலை 09:00 - 10:00', isValarpirai: true, type: 'morning' },

  // 2026 Dates
  { date: '2026-01-25', year: 2026, englishMonth: 'January', tamilMonth: 'தை', tamilDate: '11', dayOfWeekTa: 'ஞாயிறு', dayOfWeekEn: 'Sunday', tithiTa: 'சப்தமி', nakshatraTa: 'ரேவதி', muhurthamTimeTa: 'காலை 06:30 - 07:30', isValarpirai: true, type: 'morning' },
  { date: '2026-02-08', year: 2026, englishMonth: 'February', tamilMonth: 'தை', tamilDate: '25', dayOfWeekTa: 'ஞாயிறு', dayOfWeekEn: 'Sunday', tithiTa: 'சஷ்டி', nakshatraTa: 'சுவாதி', muhurthamTimeTa: 'காலை 09:15 - 10:15', isValarpirai: true, type: 'morning' },
  { date: '2026-02-15', year: 2026, englishMonth: 'February', tamilMonth: 'மாசி', tamilDate: '03', dayOfWeekTa: 'ஞாயிறு', dayOfWeekEn: 'Sunday', tithiTa: 'திரயோதசி', nakshatraTa: 'உத்திராடம்', muhurthamTimeTa: 'காலை 06:15 - 07:15', isValarpirai: true, type: 'morning' },
  { date: '2026-03-01', year: 2026, englishMonth: 'March', tamilMonth: 'மாசி', tamilDate: '17', dayOfWeekTa: 'ஞாயிறு', dayOfWeekEn: 'Sunday', tithiTa: 'துவாதசி', nakshatraTa: 'பூசம்', muhurthamTimeTa: 'காலை 09:00 - 10:00', isValarpirai: true, type: 'morning' },
  { date: '2026-04-19', year: 2026, englishMonth: 'April', tamilMonth: 'சித்திரை', tamilDate: '06', dayOfWeekTa: 'ஞாயிறு', dayOfWeekEn: 'Sunday', tithiTa: 'துவிதியை', nakshatraTa: 'ரோகிணி', muhurthamTimeTa: 'காலை 06:30 - 07:30', isValarpirai: true, type: 'morning' },
  { date: '2026-05-03', year: 2026, englishMonth: 'May', tamilMonth: 'சித்திரை', tamilDate: '20', dayOfWeekTa: 'ஞாயிறு', dayOfWeekEn: 'Sunday', tithiTa: 'துவிதியை', nakshatraTa: 'அனுஷம்', muhurthamTimeTa: 'காலை 09:15 - 10:15', isValarpirai: true, type: 'morning' },
  { date: '2026-06-07', year: 2026, englishMonth: 'June', tamilMonth: 'வைகாசி', tamilDate: '24', dayOfWeekTa: 'ஞாயிறு', dayOfWeekEn: 'Sunday', tithiTa: 'சப்தமி', nakshatraTa: 'உத்திரம்', muhurthamTimeTa: 'காலை 06:15 - 07:15', isValarpirai: true, type: 'morning' },
  { date: '2026-08-23', year: 2026, englishMonth: 'August', tamilMonth: 'ஆவணி', tamilDate: '07', dayOfWeekTa: 'ஞாயிறு', dayOfWeekEn: 'Sunday', tithiTa: 'தசமி', nakshatraTa: 'மூலம்', muhurthamTimeTa: 'காலை 09:00 - 10:00', isValarpirai: true, type: 'morning' },
  { date: '2026-09-06', year: 2026, englishMonth: 'September', tamilMonth: 'ஆவணி', tamilDate: '21', dayOfWeekTa: 'ஞாயிறு', dayOfWeekEn: 'Sunday', tithiTa: 'ஏகாதசி', nakshatraTa: 'திருவோணம்', muhurthamTimeTa: 'காலை 06:30 - 07:30', isValarpirai: true, type: 'morning' },
  { date: '2026-11-01', year: 2026, englishMonth: 'November', tamilMonth: 'ஐப்பசி', tamilDate: '15', dayOfWeekTa: 'ஞாயிறு', dayOfWeekEn: 'Sunday', tithiTa: 'சஷ்டி', nakshatraTa: 'பூசம்', muhurthamTimeTa: 'காலை 09:15 - 10:15', isValarpirai: true, type: 'morning' },
];

export default function ThirumanaMuhurtham() {
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const [selectedTamilMonth, setSelectedTamilMonth] = useState<string>('all');
  const [onlyValarpirai, setOnlyValarpirai] = useState<boolean>(false);

  const filteredDates = useMemo(() => {
    return ALL_MUHURTHAM_DATES.filter((item) => {
      if (item.year !== selectedYear) return false;
      if (selectedTamilMonth !== 'all' && item.tamilMonth !== selectedTamilMonth) return false;
      if (onlyValarpirai && !item.isValarpirai) return false;
      return true;
    });
  }, [selectedYear, selectedTamilMonth, onlyValarpirai]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10 mb-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-3xl mx-auto mb-3">
            💍
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-1">
            திருமண முகூர்த்த தேதிகள் {selectedYear}
          </h2>
          <p className="text-sm md:text-base text-gray-500">
            Tamil Marriage Muhurtham Dates &amp; Auspicious Timings List
          </p>
        </div>

        {/* Filters */}
        <div className="bg-orange-50/50 p-6 rounded-3xl border border-orange-100/60 mb-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Year Toggle */}
            <div className="inline-flex p-1 rounded-xl bg-white border border-gray-200">
              <button
                onClick={() => setSelectedYear(2025)}
                className={`px-5 py-2 rounded-lg text-sm font-extrabold transition-all ${
                  selectedYear === 2025 ? 'bg-orange-500 text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                2025 முகூர்த்தங்கள்
              </button>
              <button
                onClick={() => setSelectedYear(2026)}
                className={`px-5 py-2 rounded-lg text-sm font-extrabold transition-all ${
                  selectedYear === 2026 ? 'bg-orange-500 text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                2026 முகூர்த்தங்கள்
              </button>
            </div>

            {/* Tamil Month Dropdown */}
            <div className="flex items-center gap-2">
              <label className="text-xs font-bold text-gray-700">தமிழ் மாதம்:</label>
              <select
                value={selectedTamilMonth}
                onChange={(e) => setSelectedTamilMonth(e.target.value)}
                className="bg-white border border-gray-200 rounded-xl px-3 py-2 text-sm font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="all">அனைத்து மாதங்கள் (All)</option>
                {TAMIL_MONTHS.map((m) => (
                  <option key={m.name} value={m.name}>
                    {m.name} ({m.english})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="pt-2">
            <label className="flex items-center gap-2 cursor-pointer text-xs md:text-sm text-gray-800 font-bold">
              <input
                type="checkbox"
                checked={onlyValarpirai}
                onChange={(e) => setOnlyValarpirai(e.target.checked)}
                className="w-4 h-4 rounded text-orange-600 focus:ring-orange-500 border-gray-300"
              />
              <span>வளர்பிறை முகூர்த்த தேதிகள் மட்டும் (Only Shukla Paksha / Valarpirai)</span>
            </label>
          </div>
        </div>

        {/* Counter */}
        <div className="flex items-center justify-between mb-4 px-1">
          <p className="text-sm font-bold text-gray-700">
            மொத்த தேதிகள்: <span className="text-orange-600 font-black">{filteredDates.length}</span>
          </p>
          <span className="text-xs text-gray-400">அனைத்தும் காலை சுப முகூர்த்த நேரங்கள்</span>
        </div>

        {/* Date Cards Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {filteredDates.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-gray-100 hover:border-orange-300 bg-white shadow-sm hover:shadow-md transition-all duration-200 space-y-3"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-2xl font-black text-gray-900 block">
                    {new Date(item.date).getDate()}{' '}
                    <span className="text-sm font-bold text-gray-500">
                      {item.englishMonth} {item.year}
                    </span>
                  </span>
                  <span className="text-xs font-extrabold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md inline-block mt-0.5">
                    {item.tamilMonth} {item.tamilDate} | {item.dayOfWeekTa}
                  </span>
                </div>

                <span
                  className={`text-[10px] font-black px-2 py-1 rounded-full ${
                    item.isValarpirai
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      : 'bg-indigo-100 text-indigo-800 border border-indigo-200'
                  }`}
                >
                  {item.isValarpirai ? 'வளர்பிறை' : 'தேய்பிறை'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs bg-gray-50/70 p-2.5 rounded-xl border border-gray-100">
                <div>
                  <span className="text-gray-400 block text-[10px]">நட்சத்திரம்</span>
                  <strong className="text-gray-800">{item.nakshatraTa}</strong>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px]">திதி</span>
                  <strong className="text-gray-800">{item.tithiTa}</strong>
                </div>
              </div>

              <div className="pt-1 flex items-center justify-between text-xs">
                <span className="font-extrabold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-lg">
                  ⏰ {item.muhurthamTimeTa}
                </span>
                <Link
                  href="/tools/jathagam-porutham"
                  className="text-orange-600 font-bold hover:underline text-[11px]"
                >
                  பொருத்தம் பார்க்க →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Ad Banner */}
        <div className="flex justify-center my-8">
          <div className="hidden md:block">
            <AdsterraBanner format="728x90" />
          </div>
          <div className="block md:hidden">
            <AdsterraBanner format="300x250" />
          </div>
        </div>

        {/* Marriage Muhurtham Guidelines */}
        <div className="mt-8 p-5 bg-orange-50/70 rounded-2xl border border-orange-200/60 text-xs md:text-sm text-gray-800 space-y-2">
          <h4 className="font-black text-orange-950 text-sm">💡 முகூர்த்த நாள் தேர்வு செய்வதற்கான விதிமுறைகள்:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-xs">
            <li>வளர்பிறை (சுக்ல பட்சம்) நாட்களில் திருமணம் செய்வது சந்ததி வளர்ச்சி மற்றும் மங்கல வாழ்வுக்கு உகந்தது.</li>
            <li>சித்திரை, வைகாசி, ஆவணி, ஐப்பசி, கார்த்திகை, தை, மாசி, பங்குனி ஆகிய மாதங்கள் திருமணத்திற்கு சிறந்தது.</li>
            <li>ஆடி, புரட்டாசி மற்றும் மார்கழி மாதங்களில் பாரம்பரிய வழக்கப்படி திருமண முகூர்த்தங்கள் வைக்கப்படுவதில்லை.</li>
            <li>மணமகன், மணமகள் இருவரின் சந்திராஷ்டமம் மற்றும் கரிநாட்களை தவிர்த்து நாள் குறிக்க வேண்டும்.</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <AdsterraBanner format="320x50" />
      </div>

      <RelatedTools currentSlug="thirumana-muhurtham" />
    </div>
  );
}
