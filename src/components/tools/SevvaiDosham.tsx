'use client';

import { useState } from 'react';
import Link from 'next/link';
import { RASIS_LIST } from '@/lib/astro-core/constants';
import { calculateSevvaiDosham, type SevvaiDoshamResult } from '@/lib/astro-core/dosha';
import AdsterraBanner from '@/components/ads/AdsterraBanner';
import RelatedTools from '@/components/tools/RelatedTools';

export default function SevvaiDosham() {
  const [marsFromLagna, setMarsFromLagna] = useState<number>(1);
  const [marsFromMoon, setMarsFromMoon] = useState<number>(1);
  const [marsFromVenus, setMarsFromVenus] = useState<number>(1);
  const [marsRasiIndex, setMarsRasiIndex] = useState<number>(0);
  const [guruAspect, setGuruAspect] = useState<boolean>(false);

  const [result, setResult] = useState<SevvaiDoshamResult | null>(null);
  const [hasCalculated, setHasCalculated] = useState<boolean>(false);

  const handleCalculate = () => {
    const res = calculateSevvaiDosham(
      marsFromLagna,
      marsFromMoon,
      marsFromVenus,
      marsRasiIndex,
      guruAspect
    );
    setResult(res);
    setHasCalculated(true);

    setTimeout(() => {
      document.getElementById('sevvai-result')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10 mb-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-3xl mx-auto mb-3">
            🛡️
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-1">
            செவ்வாய் தோஷம் கணிப்பான்
          </h2>
          <p className="text-sm md:text-base text-gray-500">
            Tamil Sevvai (Mangal / Kuja) Dosha Calculator with Exemption Rules
          </p>
        </div>

        {/* Inputs */}
        <div className="max-w-2xl mx-auto space-y-4 bg-orange-50/50 p-6 rounded-3xl border border-orange-100/60 mb-8">
          <p className="text-xs text-gray-600 bg-white p-3 rounded-xl border border-orange-200/80">
            💡 உங்கள் ஜாதகக் கட்டத்தில் செவ்வாய் (Mars) உள்ள இடங்களை கீழே தேர்வு செய்யவும்:
          </p>

          <div className="grid md:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5">
                லக்னத்திலிருந்து செவ்வாய் (From Lagna)
              </label>
              <select
                value={marsFromLagna}
                onChange={(e) => setMarsFromLagna(Number(e.target.value))}
                className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-sm font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}-ம் வீடு (House {i + 1})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5">
                சந்திரனிலிருந்து செவ்வாய் (From Moon)
              </label>
              <select
                value={marsFromMoon}
                onChange={(e) => setMarsFromMoon(Number(e.target.value))}
                className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-sm font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}-ம் வீடு (House {i + 1})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5">
                சுக்கிரனிலிருந்து செவ்வாய் (From Venus)
              </label>
              <select
                value={marsFromVenus}
                onChange={(e) => setMarsFromVenus(Number(e.target.value))}
                className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-sm font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}-ம் வீடு (House {i + 1})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5">
              செவ்வாய் அமர்ந்துள்ள ராசி (Mars Zodiac Sign)
            </label>
            <select
              value={marsRasiIndex}
              onChange={(e) => setMarsRasiIndex(Number(e.target.value))}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {RASIS_LIST.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.symbol} {r.nameTa} ({r.nameEn})
                </option>
              ))}
            </select>
          </div>

          <div className="pt-2">
            <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-800 font-medium">
              <input
                type="checkbox"
                checked={guruAspect}
                onChange={(e) => setGuruAspect(e.target.checked)}
                className="w-4 h-4 rounded text-orange-600 focus:ring-orange-500 border-gray-300"
              />
              <span>செவ்வாய்க்கு குரு பார்வை அல்லது குரு சேர்க்கை உள்ளதா? (Jupiter Aspect)</span>
            </label>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full mt-4 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-rose-600 to-red-600 text-white font-extrabold text-base hover:from-rose-700 hover:to-red-700 shadow-md transition-all active:scale-[0.99]"
          >
            செவ்வாய் தோஷம் கணக்கிட (Check Dosha)
          </button>
        </div>

        {/* Results */}
        {hasCalculated && result && (
          <div id="sevvai-result" className="space-y-6 pt-4 border-t border-gray-100">
            <div
              className={`text-white rounded-3xl p-6 md:p-8 text-center shadow-lg ${
                result.hasDosha
                  ? 'bg-gradient-to-br from-red-600 to-rose-700'
                  : result.isCancelled
                  ? 'bg-gradient-to-br from-amber-600 to-yellow-600'
                  : 'bg-gradient-to-br from-emerald-600 to-teal-700'
              }`}
            >
              <span className="text-xs uppercase font-extrabold tracking-widest text-white/80 block mb-1">
                தோஷ மதிப்பீடு (Evaluation)
              </span>
              <h3 className="text-2xl md:text-4xl font-black mb-2">{result.severityTa}</h3>
              <p className="text-xs md:text-sm text-white/90 max-w-lg mx-auto mb-4">
                {result.explanationTa}
              </p>

              <div className="grid grid-cols-3 gap-2 max-w-md mx-auto pt-4 border-t border-white/20 text-xs">
                <div className="bg-white/10 rounded-xl p-2.5">
                  <span className="opacity-75 block text-[11px]">லக்னம் வழி</span>
                  <strong className="text-white text-sm">{result.pointsFromLagna ? 'தோஷம்' : 'இல்லை'}</strong>
                </div>
                <div className="bg-white/10 rounded-xl p-2.5">
                  <span className="opacity-75 block text-[11px]">சந்திரன் வழி</span>
                  <strong className="text-white text-sm">{result.pointsFromMoon ? 'தோஷம்' : 'இல்லை'}</strong>
                </div>
                <div className="bg-white/10 rounded-xl p-2.5">
                  <span className="opacity-75 block text-[11px]">சுக்கிரன் வழி</span>
                  <strong className="text-white text-sm">{result.pointsFromVenus ? 'தோஷம்' : 'இல்லை'}</strong>
                </div>
              </div>
            </div>

            {/* Cancellation reasons if any */}
            {result.cancellationReasons.length > 0 && (
              <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200">
                <h4 className="font-extrabold text-amber-950 text-sm mb-2 flex items-center gap-2">
                  <span>✨</span>
                  <span>தோஷ நிவர்த்தி / விலக்கு காரணங்கள் (Cancellation Rules):</span>
                </h4>
                <ul className="text-xs text-amber-900 space-y-1.5 list-disc list-inside">
                  {result.cancellationReasons.map((reason, idx) => (
                    <li key={idx}>{reason}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Remedies */}
            <div className="bg-orange-50/60 rounded-2xl p-5 border border-orange-200/60">
              <h4 className="font-extrabold text-orange-950 text-sm mb-1.5 flex items-center gap-2">
                <span>🛕</span>
                <span>திருமண வழிகாட்டல் &amp; பரிகாரம் (Marriage Remedy):</span>
              </h4>
              <p className="text-xs text-gray-700 leading-relaxed">{result.remedyTa}</p>
            </div>

            {/* CTA */}
            <div className="text-center pt-2">
              <Link
                href="/tools/jathagam-porutham"
                className="inline-block py-3 px-6 rounded-xl bg-orange-600 text-white font-bold text-sm hover:bg-orange-700 shadow-md transition-colors"
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

      <RelatedTools currentSlug="sevvai-dosham" />
    </div>
  );
}
