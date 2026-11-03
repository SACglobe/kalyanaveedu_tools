'use client';

import { useState, useMemo, useEffect } from 'react';
import { TAMIL_CITIES, type TamilCity } from '@/lib/astro-core/constants';
import { calculateChoghadiya, type ChoghadiyaResult, type ChoghadiyaSegment } from '@/lib/astro-core/panchangam';
import AdsterraBanner from '@/components/ads/AdsterraBanner';
import RelatedTools from '@/components/tools/RelatedTools';
import { cityTodayStr, cityNow } from '@/lib/astro-core/sunrise';

export default function Choghadiya({ initialCityId = 'chennai', initialDate }: { initialCityId?: string; initialDate?: string }) {
  const [selectedCityId, setSelectedCityId] = useState<string>(initialCityId);
  const [selectedDateStr, setSelectedDateStr] = useState<string>(
    () => initialDate ?? cityTodayStr(TAMIL_CITIES.find((c) => c.id === initialCityId) || TAMIL_CITIES[0])
  );

  // Static pages are rendered ahead of time, so sync to the visitor's real "today" (in the city's time zone) on load
  useEffect(() => {
    setSelectedDateStr(cityTodayStr(TAMIL_CITIES.find((c) => c.id === initialCityId) || TAMIL_CITIES[0]));
  }, [initialCityId]);
  const [activeTab, setActiveTab] = useState<'day' | 'night'>('day');

  const selectedCity = useMemo(() => {
    return TAMIL_CITIES.find((c) => c.id === selectedCityId) || TAMIL_CITIES[0];
  }, [selectedCityId]);

  const selectedDate = useMemo(() => {
    if (!selectedDateStr) return new Date();
    const [y, m, d] = selectedDateStr.split('-').map(Number);
    return new Date(y, m - 1, d);
  }, [selectedDateStr]);

  const result: ChoghadiyaResult = useMemo(() => {
    return calculateChoghadiya(selectedDate, selectedCity);
  }, [selectedDate, selectedCity]);

  const badgeStyles = {
    good: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    neutral: 'bg-amber-100 text-amber-800 border-amber-200',
    bad: 'bg-rose-100 text-rose-800 border-rose-200',
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10 mb-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-3xl mx-auto mb-3">
            🧭
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-1">
            சோகாதியம் அட்டவணை கணிப்பான்
          </h2>
          <p className="text-sm md:text-base text-gray-500">
            Choghadiya Muhurat Calculator (Day &amp; Night)
          </p>
        </div>

        {/* Filters */}
        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto bg-orange-50/50 p-4 rounded-2xl border border-orange-100/60 mb-8">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5">நகரம் / ஊர் (City)</label>
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
            <label className="block text-xs font-bold text-gray-700 mb-1.5">தேதி (Select Date)</label>
            <input
              type="date"
              value={selectedDateStr}
              onChange={(e) => setSelectedDateStr(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex p-1 rounded-2xl bg-gray-100">
            <button
              onClick={() => setActiveTab('day')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'day'
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              ☀️ பகல் சோகாதியம் (Day)
            </button>
            <button
              onClick={() => setActiveTab('night')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'night'
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              🌙 இரவு சோகாதியம் (Night)
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-gray-100">
          <table className="w-full text-left text-sm">
            <thead className="bg-orange-50 text-orange-950 font-bold border-b border-orange-100">
              <tr>
                <th className="py-3 px-4">நேரம் (Time)</th>
                <th className="py-3 px-4">சோகாதியம் (Choghadiya)</th>
                <th className="py-3 px-4 text-center">தன்மை (Nature)</th>
                <th className="py-3 px-4">கிரக அதிபதி (Ruler)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {(activeTab === 'day' ? result.daySegments : result.nightSegments).map(
                (seg: ChoghadiyaSegment) => (
                  <tr key={seg.segmentIndex} className="hover:bg-gray-50/50">
                    <td className="py-3.5 px-4 font-semibold text-gray-900">
                      {seg.window.startFormatted} - {seg.window.endFormatted}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-gray-800">
                      {seg.nameTa} ({seg.nameEn})
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${
                          badgeStyles[seg.nature]
                        }`}
                      >
                        {seg.natureTa}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-xs text-gray-600 font-medium">
                      {seg.ruler}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
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
      </div>

      <div className="flex justify-center mb-8">
        <AdsterraBanner format="320x50" />
      </div>

      <RelatedTools currentSlug="choghadiya" />
    </div>
  );
}
