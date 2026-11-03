'use client';

import { useState, useMemo } from 'react';
import { TAMIL_CITIES, type TamilCity } from '@/lib/astro-core/constants';
import { calculateRahuKalam, type RahuKalamResult } from '@/lib/astro-core/panchangam';
import AdsterraBanner from '@/components/ads/AdsterraBanner';
import RelatedTools from '@/components/tools/RelatedTools';

export default function RahuKalam() {
  const [selectedCityId, setSelectedCityId] = useState<string>('chennai');
  const [selectedDateStr, setSelectedDateStr] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });

  const selectedCity = useMemo(() => {
    return TAMIL_CITIES.find((c) => c.id === selectedCityId) || TAMIL_CITIES[0];
  }, [selectedCityId]);

  const selectedDate = useMemo(() => {
    if (!selectedDateStr) return new Date();
    const [y, m, d] = selectedDateStr.split('-').map(Number);
    return new Date(y, m - 1, d);
  }, [selectedDateStr]);

  const result: RahuKalamResult = useMemo(() => {
    return calculateRahuKalam(selectedDate, selectedCity);
  }, [selectedDate, selectedCity]);

  // Is today currently in Rahu Kalam?
  const isCurrentlyRahuKalam = useMemo(() => {
    const now = new Date();
    const isToday =
      now.getFullYear() === selectedDate.getFullYear() &&
      now.getMonth() === selectedDate.getMonth() &&
      now.getDate() === selectedDate.getDate();

    if (!isToday) return false;
    const nowTime = now.getTime();
    return nowTime >= result.window.start.getTime() && nowTime <= result.window.end.getTime();
  }, [selectedDate, result]);

  // Quick 7-day table
  const weeklySchedule = useMemo(() => {
    return [0, 1, 2, 3, 4, 5, 6].map((dayOffset) => {
      const d = new Date(selectedDate);
      const diff = dayOffset - d.getDay();
      d.setDate(d.getDate() + diff);
      return calculateRahuKalam(d, selectedCity);
    });
  }, [selectedDate, selectedCity]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Card */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10 mb-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-3xl mx-auto mb-3">
            ⏰
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-1">
            இன்றைய ராகு காலம் கணிப்பான்
          </h2>
          <p className="text-sm md:text-base text-gray-500">
            Tamil Rahu Kalam Calculator (Sunrise &amp; City Based)
          </p>
        </div>

        {/* Filter Bar: City & Date */}
        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto bg-orange-50/50 p-4 rounded-2xl border border-orange-100/60 mb-8">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5">
              நகரம் / ஊர் (City)
            </label>
            <select
              value={selectedCityId}
              onChange={(e) => setSelectedCityId(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {TAMIL_CITIES.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.nameTa} ({city.nameEn})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5">
              தேதி (Select Date)
            </label>
            <input
              type="date"
              value={selectedDateStr}
              onChange={(e) => setSelectedDateStr(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Highlight Result Card */}
        <div className="relative overflow-hidden bg-gradient-to-br from-rose-500 to-red-600 text-white rounded-3xl p-6 md:p-8 text-center shadow-lg">
          {/* Status Badge */}
          {isCurrentlyRahuKalam && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold mb-4 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-yellow-300"></span>
              இப்போது ராகு காலம் நடப்பில் உள்ளது (Active Now)
            </div>
          )}

          <p className="text-rose-100 text-sm font-semibold mb-1">
            {result.weekdayTa} கிழமை | {selectedCity.nameTa}
          </p>
          <p className="text-xs text-rose-200 mb-4">
            {result.date.toLocaleDateString('ta-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl py-4 px-6 inline-block mx-auto border border-white/20 mb-4">
            <span className="text-3xl md:text-5xl font-black tracking-tight text-white block">
              {result.window.startFormatted} - {result.window.endFormatted}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto text-xs text-rose-100 pt-3 border-t border-white/20">
            <div>
              <span className="opacity-75 block">சூரிய உதயம் (Sunrise)</span>
              <strong className="text-white text-sm">{result.sunriseFormatted}</strong>
            </div>
            <div>
              <span className="opacity-75 block">சூரிய அஸ்தமனம் (Sunset)</span>
              <strong className="text-white text-sm">{result.sunsetFormatted}</strong>
            </div>
          </div>
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

        {/* 7-Day Quick Table */}
        <div className="mt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span>📅</span>
            <span>வாரத்தின் 7 நாட்கள் ராகு கால அட்டவணை ({selectedCity.nameTa})</span>
          </h3>

          <div className="overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-left text-sm">
              <thead className="bg-orange-50 text-orange-950 font-bold border-b border-orange-100">
                <tr>
                  <th className="py-3 px-4">கிழமை (Day)</th>
                  <th className="py-3 px-4">ராகு காலம் (Rahu Kalam)</th>
                  <th className="py-3 px-4 text-center">பகுதி (Part)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {weeklySchedule.map((item, idx) => {
                  const isCurrentRow = item.weekdayEn === result.weekdayEn;
                  return (
                    <tr
                      key={idx}
                      className={isCurrentRow ? 'bg-rose-50/60 font-bold text-rose-900' : 'hover:bg-gray-50/50'}
                    >
                      <td className="py-3 px-4">
                        {item.weekdayTa} ({item.weekdayEn})
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-gray-900 font-semibold">
                          {item.window.startFormatted} - {item.window.endFormatted}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center text-xs text-gray-500">
                        பகல் {item.segmentIndex}-ம் பகுதி
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Explanation / Traditional Rule */}
        <div className="mt-8 p-5 bg-amber-50/60 rounded-2xl border border-amber-200/60 text-amber-950 text-xs md:text-sm leading-relaxed space-y-2">
          <p className="font-bold text-amber-900">📌 ராகு காலம் குறித்த முக்கிய குறிப்பு:</p>
          <p>
            ராகு காலம் என்பது ஒரு நாளின் சூரிய உதயம் முதல் சூரிய அஸ்தமனம் வரையிலான பகல் பொழுதை 8 சம பகுதிகளாக பிரித்து, அதில் ராகுவுக்குரிய ஒரு பகுதியை குறிக்கும் காலமாகும்.
          </p>
          <p>
            இந்த நேரத்தில் திருமணம், கிரகப்பிரவேசம், புதிய தொழில் அல்லது ஒப்பந்தங்கள் தொடங்குதல் மற்றும் நீண்ட தூர பயணங்களை தவிர்ப்பது பாரம்பரிய வழக்கமாகும். ஏற்கெனவே தொடங்கிய பணிகளை தொடரலாம்.
          </p>
        </div>
      </div>

      {/* Ad Banner 320x50 */}
      <div className="flex justify-center mb-8">
        <AdsterraBanner format="320x50" />
      </div>

      <RelatedTools currentSlug="rahu-kalam" />
    </div>
  );
}
