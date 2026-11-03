'use client';

import { useState, useMemo } from 'react';
import { TAMIL_CITIES, type TamilCity } from '@/lib/astro-core/constants';
import { calculateGowriPanchangam, type GowriPanchangamResult, type GowriSegment } from '@/lib/astro-core/panchangam';
import AdsterraBanner from '@/components/ads/AdsterraBanner';
import RelatedTools from '@/components/tools/RelatedTools';

export default function GowriNallaNeram() {
  const [selectedCityId, setSelectedCityId] = useState<string>('chennai');
  const [selectedDateStr, setSelectedDateStr] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [activeTab, setActiveTab] = useState<'day' | 'night'>('day');

  const selectedCity = useMemo(() => {
    return TAMIL_CITIES.find((c) => c.id === selectedCityId) || TAMIL_CITIES[0];
  }, [selectedCityId]);

  const selectedDate = useMemo(() => {
    if (!selectedDateStr) return new Date();
    const [y, m, d] = selectedDateStr.split('-').map(Number);
    return new Date(y, m - 1, d);
  }, [selectedDateStr]);

  const result: GowriPanchangamResult = useMemo(() => {
    return calculateGowriPanchangam(selectedDate, selectedCity);
  }, [selectedDate, selectedCity]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10 mb-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mx-auto mb-3">
            ✨
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-1">
            இன்றைய கவுரி நல்ல நேரம் கணிப்பான்
          </h2>
          <p className="text-sm md:text-base text-gray-500">
            Gowri Nalla Neram Panchangam (Day &amp; Night)
          </p>
        </div>

        {/* City and Date Pickers */}
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

        {/* Current Active Gowri Segment (if viewing today) */}
        {result.currentSegment && (
          <div
            className={`p-5 rounded-2xl mb-8 border text-center ${
              result.currentSegment.isAuspicious
                ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                : 'bg-rose-50 border-rose-200 text-rose-900'
            }`}
          >
            <span className="text-xs uppercase font-extrabold tracking-wider opacity-75 block mb-1">
              தற்போது நடக்கும் கவுரி நேரம் (Active Now)
            </span>
            <span className="text-2xl md:text-3xl font-black block">
              {result.currentSegment.nameTa} ({result.currentSegment.nameEn})
            </span>
            <span className="text-sm font-bold block my-1">
              {result.currentSegment.window.startFormatted} - {result.currentSegment.window.endFormatted}
            </span>
            <p className="text-xs opacity-90 mt-1">{result.currentSegment.meaningTa}</p>
          </div>
        )}

        {/* Tabs: Day vs Night */}
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
              ☀️ பகல் கவுரி நேரம் (Daytime)
            </button>
            <button
              onClick={() => setActiveTab('night')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'night'
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              🌙 இரவு கவுரி நேரம் (Nighttime)
            </button>
          </div>
        </div>

        {/* Segments Table */}
        <div className="overflow-x-auto rounded-2xl border border-gray-100">
          <table className="w-full text-left text-sm">
            <thead className="bg-orange-50 text-orange-950 font-bold border-b border-orange-100">
              <tr>
                <th className="py-3 px-4">பகுதி (Part)</th>
                <th className="py-3 px-4">நேரம் (Time Window)</th>
                <th className="py-3 px-4">கவுரி (Gowri)</th>
                <th className="py-3 px-4 text-center">நிலை (Status)</th>
                <th className="py-3 px-4 hidden md:table-cell">விளக்கம் (Details)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {(activeTab === 'day' ? result.daySegments : result.nightSegments).map(
                (seg: GowriSegment) => (
                  <tr
                    key={seg.segmentIndex}
                    className={`hover:bg-gray-50/50 ${
                      seg.isAuspicious ? 'bg-emerald-50/20' : 'bg-rose-50/20'
                    }`}
                  >
                    <td className="py-3.5 px-4 font-bold text-gray-500">
                      {seg.segmentIndex}-ம் பகுதி
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-gray-900">
                      {seg.window.startFormatted} - {seg.window.endFormatted}
                    </td>
                    <td className="py-3.5 px-4 font-extrabold text-gray-800">
                      {seg.nameTa} <span className="text-xs font-normal text-gray-400">({seg.nameEn})</span>
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-xs font-black ${
                          seg.isAuspicious
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                            : 'bg-rose-100 text-rose-800 border border-rose-200'
                        }`}
                      >
                        {seg.isAuspicious ? '✓ சுபம்' : '✕ அசுபம்'}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-xs text-gray-600 hidden md:table-cell">
                      {seg.meaningTa}
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

        {/* Legend / Guide */}
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
            <h4 className="font-bold text-emerald-900 mb-2 text-sm flex items-center gap-1.5">
              <span>🟢</span> சுபமான கவுரி நேரங்கள் (Best for Auspicious Work):
            </h4>
            <ul className="text-xs text-emerald-800 space-y-1">
              <li><strong>அமிர்தம்:</strong> அனைத்து சுப காரியங்களுக்கும் மிகச் சிறந்தது.</li>
              <li><strong>தனம்:</strong> பணம் சார்ந்த விவகாரங்கள், தொழில் தொடக்கம்.</li>
              <li><strong>உத்தி:</strong> புதிய முயற்சிகள், வேலை விண்ணப்பம்.</li>
              <li><strong>லாபம்:</strong> வர்த்தகம், கொடுக்கல்-வாங்கல், பயணம்.</li>
              <li><strong>சுகம்:</strong> அமைதி, மருந்து உண்ணுதல், திருமணம்.</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-100">
            <h4 className="font-bold text-rose-900 mb-2 text-sm flex items-center gap-1.5">
              <span>🔴</span> தவிர்க்க வேண்டிய கவுரி நேரங்கள் (Inauspicious):
            </h4>
            <ul className="text-xs text-rose-800 space-y-1">
              <li><strong>ரோகம்:</strong> உடல்நலக்குறைவு அல்லது மன அழுத்தம் தரும்.</li>
              <li><strong>விஷம்:</strong> ஆபத்து, நஷ்டம் மற்றும் வம்பு வழக்குகள் ஏற்படும்.</li>
              <li><strong>சோரம்:</strong> திருட்டு, பொருள் இழப்பு அல்லது ஏமாற்றம் தரும்.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <AdsterraBanner format="320x50" />
      </div>

      <RelatedTools currentSlug="gowri-nalla-neram" />
    </div>
  );
}
