'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TAMIL_CITIES } from '@/lib/astro-core/constants';
import { findNakshatraByBirthDetails, type NakshatraFinderResult } from '@/lib/astro-core/nakshatra';
import AdsterraBanner from '@/components/ads/AdsterraBanner';
import RelatedTools from '@/components/tools/RelatedTools';

export default function NakshatraFinder() {
  const [dob, setDob] = useState<string>('2000-01-01');
  const [birthHour, setBirthHour] = useState<string>('06');
  const [birthMinute, setBirthMinute] = useState<string>('30');
  const [birthAmPm, setBirthAmPm] = useState<'AM' | 'PM'>('AM');
  const [cityId, setCityId] = useState<string>('chennai');

  const [result, setResult] = useState<NakshatraFinderResult | null>(null);
  const [hasCalculated, setHasCalculated] = useState<boolean>(false);

  const handleCalculate = () => {
    if (!dob) return;
    const [y, m, d] = dob.split('-').map(Number);
    let hour = parseInt(birthHour, 10);
    const minute = parseInt(birthMinute, 10);

    if (birthAmPm === 'PM' && hour < 12) hour += 12;
    if (birthAmPm === 'AM' && hour === 12) hour = 0;

    const res = findNakshatraByBirthDetails(y, m, d, hour, minute);
    setResult(res);
    setHasCalculated(true);

    setTimeout(() => {
      document.getElementById('nakshatra-result')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10 mb-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-3xl mx-auto mb-3">
            🌟
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-1">
            பிறந்த தேதி வைத்து நட்சத்திரம் &amp; ராசி கண்டறியவும்
          </h2>
          <p className="text-sm md:text-base text-gray-500">
            Birth Star (Janma Nakshatra), Pada &amp; Rasi Calculator
          </p>
        </div>

        {/* Form Inputs */}
        <div className="max-w-2xl mx-auto space-y-4 bg-orange-50/50 p-6 rounded-3xl border border-orange-100/60 mb-8">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5">
              பிறந்த தேதி (Date of Birth)
            </label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5">
              பிறந்த நேரம் (Birth Time)
            </label>
            <div className="grid grid-cols-3 gap-2">
              <select
                value={birthHour}
                onChange={(e) => setBirthHour(e.target.value)}
                className="bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {Array.from({ length: 12 }, (_, i) => {
                  const val = (i + 1).toString().padStart(2, '0');
                  return (
                    <option key={val} value={val}>
                      {val} மணி
                    </option>
                  );
                })}
              </select>

              <select
                value={birthMinute}
                onChange={(e) => setBirthMinute(e.target.value)}
                className="bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {Array.from({ length: 60 }, (_, i) => {
                  const val = i.toString().padStart(2, '0');
                  return (
                    <option key={val} value={val}>
                      {val} நிமிடம்
                    </option>
                  );
                })}
              </select>

              <select
                value={birthAmPm}
                onChange={(e) => setBirthAmPm(e.target.value as 'AM' | 'PM')}
                className="bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="AM">AM (காலை)</option>
                <option value="PM">PM (மாலை/இரவு)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5">
              பிறந்த ஊர் / நகரம் (Birth Place)
            </label>
            <select
              value={cityId}
              onChange={(e) => setCityId(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {TAMIL_CITIES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.nameTa} ({c.nameEn})
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full mt-4 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-600 text-white font-extrabold text-base hover:from-orange-600 hover:to-amber-700 shadow-md hover:shadow-lg transition-all active:scale-[0.99]"
          >
            நட்சத்திரம் &amp; ராசி கணக்கிட (Calculate)
          </button>
        </div>

        {/* Results Card */}
        {hasCalculated && result && (
          <div id="nakshatra-result" className="space-y-6 pt-4 border-t border-gray-100">
            {/* Main Result Banner */}
            <div className="bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 text-white rounded-3xl p-6 md:p-8 text-center shadow-lg">
              <span className="text-xs uppercase font-extrabold tracking-widest text-amber-100 block mb-1">
                கணக்கீட்டு முடிவு (Result)
              </span>
              <h3 className="text-3xl md:text-5xl font-black mb-1">
                {result.nakshatra.nameTa} ({result.nakshatra.nameEn})
              </h3>
              <p className="text-lg md:text-xl font-bold text-amber-100 mb-4">
                பாதம் {result.pada} | {result.rasi.nameTa} ({result.rasi.nameEn})
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-xl mx-auto pt-4 border-t border-white/20 text-xs text-amber-100">
                <div className="bg-white/10 rounded-xl p-2.5">
                  <span className="opacity-75 block">ராசி அதிபதி</span>
                  <strong className="text-white text-sm">{result.rasi.lordTa}</strong>
                </div>
                <div className="bg-white/10 rounded-xl p-2.5">
                  <span className="opacity-75 block">தசா நாதன்</span>
                  <strong className="text-white text-sm">{result.nakshatra.dashaLordTa}</strong>
                </div>
                <div className="bg-white/10 rounded-xl p-2.5">
                  <span className="opacity-75 block">கணம்</span>
                  <strong className="text-white text-sm">{result.nakshatra.ganaTa}</strong>
                </div>
                <div className="bg-white/10 rounded-xl p-2.5">
                  <span className="opacity-75 block">ரஜ்ஜு</span>
                  <strong className="text-white text-sm">{result.nakshatra.rajjuTa}</strong>
                </div>
              </div>
            </div>

            {/* Baby Name Aksharam Card */}
            <div className="bg-orange-50/60 rounded-2xl p-6 border border-orange-200/60">
              <h4 className="font-extrabold text-orange-950 text-base mb-2 flex items-center gap-2">
                <span>👶</span>
                <span>குழந்தை பெயர் வைக்க உகந்த தொடக்க எழுத்துக்கள் (Nama Aksharas)</span>
              </h4>
              <p className="text-xs text-gray-600 mb-4">
                உங்கள் நட்சத்திர பாதம் <strong>{result.pada}</strong>-க்கு உரிய முதன்மை ஒலி:{' '}
                <span className="text-base font-black text-orange-600 bg-white px-3 py-1 rounded-lg border border-orange-200">
                  {result.suggestedNameSyllable}
                </span>
              </p>

              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                {result.allSyllables.map((syl, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border ${
                      idx + 1 === result.pada
                        ? 'bg-orange-500 text-white font-extrabold border-orange-600 shadow-sm'
                        : 'bg-white text-gray-700 border-gray-200 font-medium'
                    }`}
                  >
                    <span className="block opacity-75 text-[10px]">பாதம் {idx + 1}</span>
                    <strong className="text-sm">{syl}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA: Go to Marriage Compatibility */}
            <div className="p-6 bg-rose-50 rounded-2xl border border-rose-100 text-center space-y-3">
              <h4 className="font-black text-rose-950 text-lg">
                திருமண பொருத்தம் பார்க்க விரும்புகிறீர்களா?
              </h4>
              <p className="text-xs text-gray-600 max-w-md mx-auto">
                இப்போது உங்கள் நட்சத்திரம் <strong>{result.nakshatra.nameTa}</strong> என அறிந்துவிட்டீர்கள். மணமகன் / மணமகளின் நட்சத்திரத்துடன் 10 பொருத்தங்களை உடனே சரிபார்க்கவும்!
              </p>
              <Link
                href="/tools/jathagam-porutham"
                className="inline-block py-3 px-8 rounded-xl bg-rose-600 text-white font-bold text-sm hover:bg-rose-700 shadow-md transition-colors"
              >
                10 திருமண பொருத்தம் பார்க்க (Check Compatibility) 💍
              </Link>
            </div>
          </div>
        )}

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

      <RelatedTools currentSlug="nakshatra-finder" />
    </div>
  );
}
