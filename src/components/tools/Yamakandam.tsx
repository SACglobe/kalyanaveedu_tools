'use client';

import { useState, useMemo } from 'react';
import { TAMIL_CITIES, type TamilCity } from '@/lib/astro-core/constants';
import {
  calculateYamakandam,
  calculateKuligai,
  type YamakandamResult,
  type KuligaiResult,
} from '@/lib/astro-core/panchangam';
import AdsterraBanner from '@/components/ads/AdsterraBanner';
import RelatedTools from '@/components/tools/RelatedTools';

export default function Yamakandam() {
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

  const yamaResult: YamakandamResult = useMemo(() => {
    return calculateYamakandam(selectedDate, selectedCity);
  }, [selectedDate, selectedCity]);

  const kuliResult: KuligaiResult = useMemo(() => {
    return calculateKuligai(selectedDate, selectedCity);
  }, [selectedDate, selectedCity]);

  // Weekly table
  const weeklySchedule = useMemo(() => {
    return [0, 1, 2, 3, 4, 5, 6].map((dayOffset) => {
      const d = new Date(selectedDate);
      const diff = dayOffset - d.getDay();
      d.setDate(d.getDate() + diff);
      return {
        date: d,
        yama: calculateYamakandam(d, selectedCity),
        kuli: calculateKuligai(d, selectedCity),
      };
    });
  }, [selectedDate, selectedCity]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10 mb-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-3xl mx-auto mb-3">
            ⏳
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-1">
            இன்றைய யமகண்டம் &amp; குளிகை கணிப்பான்
          </h2>
          <p className="text-sm md:text-base text-gray-500">
            Yamakandam &amp; Kuligai Timings Today (City Based)
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

        {/* Dual Highlight Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Yamakandam Card */}
          <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 text-white rounded-3xl p-6 text-center shadow-md">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-200 block mb-1">
              {yamaResult.weekdayTa} கிழமை
            </span>
            <h3 className="text-xl font-black mb-3">யமகண்டம் (Yamakandam)</h3>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl py-3 px-4 mb-3 border border-white/20 inline-block w-full">
              <span className="text-2xl md:text-3xl font-black tracking-tight block">
                {yamaResult.window.startFormatted} - {yamaResult.window.endFormatted}
              </span>
            </div>
            <p className="text-xs text-indigo-100 leading-relaxed">
              கேது பகவானின் நேரம். புதிய சுப காரியங்கள், ஒப்பந்தங்கள் மற்றும் முதலீடுகளை தவிர்க்கவும்.
            </p>
          </div>

          {/* Kuligai Card */}
          <div className="bg-gradient-to-br from-teal-800 to-emerald-700 text-white rounded-3xl p-6 text-center shadow-md">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-200 block mb-1">
              {kuliResult.weekdayTa} கிழமை
            </span>
            <h3 className="text-xl font-black mb-3">குளிகை (Kuligai)</h3>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl py-3 px-4 mb-3 border border-white/20 inline-block w-full">
              <span className="text-2xl md:text-3xl font-black tracking-tight block">
                {kuliResult.window.startFormatted} - {kuliResult.window.endFormatted}
              </span>
            </div>
            <p className="text-xs text-emerald-100 leading-relaxed">
              குளிகை காலத்தில் செய்யும் காரியம் மீண்டும் மீண்டும் நடக்கும். தங்கம் வாங்குதல் மற்றும் சுப காரியங்களுக்கு நன்று; கடன் வாங்குவதை தவிர்க்கவும்.
            </p>
          </div>
        </div>

        {/* Ad Banner */}
        <div className="flex justify-center my-6">
          <div className="hidden md:block">
            <AdsterraBanner format="728x90" />
          </div>
          <div className="block md:hidden">
            <AdsterraBanner format="300x250" />
          </div>
        </div>

        {/* Weekly Table */}
        <div className="mt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span>📅</span>
            <span>வாரத்தின் 7 நாட்கள் யமகண்டம் &amp; குளிகை அட்டவணை ({selectedCity.nameTa})</span>
          </h3>

          <div className="overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-left text-sm">
              <thead className="bg-orange-50 text-orange-950 font-bold border-b border-orange-100">
                <tr>
                  <th className="py-3 px-4">கிழமை (Day)</th>
                  <th className="py-3 px-4 text-indigo-950">யமகண்டம் (Yamakandam)</th>
                  <th className="py-3 px-4 text-emerald-950">குளிகை (Kuligai)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {weeklySchedule.map((item, idx) => {
                  const isCurrentRow = item.yama.weekdayEn === yamaResult.weekdayEn;
                  return (
                    <tr
                      key={idx}
                      className={isCurrentRow ? 'bg-indigo-50/50 font-bold text-indigo-950' : 'hover:bg-gray-50/50'}
                    >
                      <td className="py-3.5 px-4 font-bold">
                        {item.yama.weekdayTa} ({item.yama.weekdayEn})
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-indigo-800">
                        {item.yama.window.startFormatted} - {item.yama.window.endFormatted}
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-emerald-800">
                        {item.kuli.window.startFormatted} - {item.kuli.window.endFormatted}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <AdsterraBanner format="320x50" />
      </div>

      <RelatedTools currentSlug="yamakandam" />
    </div>
  );
}
