'use client';

import { useState } from 'react';
import {
  NAKSHATRAS,
  NakshatraId,
  calculateJathagamPorutham,
  type JathagamResult,
} from '@/lib/jathagam-porutham';
import AdsterraBanner from '@/components/ads/AdsterraBanner';

export default function JathagamPorutham() {
  const [boyStar, setBoystar] = useState<NakshatraId | ''>('');
  const [girlStar, setGirlstar] = useState<NakshatraId | ''>('');
  const [result, setResult] = useState<JathagamResult | null>(null);
  const [calculated, setCalculated] = useState(false);

  const handleCalculate = () => {
    if (boyStar === '' || girlStar === '') return;
    const res = calculateJathagamPorutham(boyStar as NakshatraId, girlStar as NakshatraId);
    setResult(res);
    setCalculated(true);
    setTimeout(() => {
      document.getElementById('porutham-result')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleReset = () => {
    setBoystar('');
    setGirlstar('');
    setResult(null);
    setCalculated(false);
  };

  const verdictColors = {
    excellent: 'from-green-500 to-emerald-600',
    good:      'from-blue-500 to-cyan-600',
    average:   'from-yellow-500 to-orange-500',
    poor:      'from-red-500 to-rose-600',
  };

  const verdictBg = {
    excellent: 'bg-green-50 border-green-200',
    good:      'bg-blue-50 border-blue-200',
    average:   'bg-yellow-50 border-yellow-200',
    poor:      'bg-red-50 border-red-200',
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Input Card */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10 mb-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Boy */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl">🤵</div>
              <div>
                <p className="font-black text-gray-900 text-lg">மணமகன் நட்சத்திரம்</p>
                <p className="text-sm text-gray-500">Groom&apos;s Birth Star</p>
              </div>
            </div>
            <select
              value={boyStar}
              onChange={e => setBoystar(e.target.value === '' ? '' : Number(e.target.value) as NakshatraId)}
              className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 text-gray-900 focus:border-primary focus:outline-none transition-colors text-base appearance-none bg-white cursor-pointer"
            >
              <option value="">நட்சத்திரம் தேர்ந்தெடுக்கவும்</option>
              {NAKSHATRAS.map((n) => (
                <option key={n.id} value={n.id}>
                  {n.id + 1}. {n.tamil} ({n.english})
                </option>
              ))}
            </select>
          </div>

          {/* Girl */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-xl">👰</div>
              <div>
                <p className="font-black text-gray-900 text-lg">மணமகள் நட்சத்திரம்</p>
                <p className="text-sm text-gray-500">Bride&apos;s Birth Star</p>
              </div>
            </div>
            <select
              value={girlStar}
              onChange={e => setGirlstar(e.target.value === '' ? '' : Number(e.target.value) as NakshatraId)}
              className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 text-gray-900 focus:border-pink-400 focus:outline-none transition-colors text-base appearance-none bg-white cursor-pointer"
            >
              <option value="">நட்சத்திரம் தேர்ந்தெடுக்கவும்</option>
              {NAKSHATRAS.map((n) => (
                <option key={n.id} value={n.id}>
                  {n.id + 1}. {n.tamil} ({n.english})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={handleCalculate}
            disabled={boyStar === '' || girlStar === ''}
            className="flex-1 bg-primary hover:bg-accent disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-black py-4 px-6 rounded-2xl transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-primary/20 text-base flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>⭐</span> பொருத்தம் கணக்கிடு
          </button>
          {calculated && (
            <button
              onClick={handleReset}
              className="px-6 py-4 border-2 border-gray-200 rounded-2xl text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-all font-bold cursor-pointer"
            >
              மீட்டமை
            </button>
          )}
        </div>
      </div>

      {/* Result */}
      {result && (
        <div id="porutham-result" className="space-y-6">
          {/* Summary Card */}
          <div className={`rounded-3xl border-2 p-6 md:p-10 ${verdictBg[result.verdict]}`}>
            {/* Stars */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 text-center sm:text-left">
              <div className="bg-white rounded-2xl px-5 py-3 shadow-sm border border-gray-100 text-center flex-1">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">மணமகன்</p>
                <p className="text-xl font-black text-gray-900">{result.boyNakshatra.tamil}</p>
                <p className="text-sm text-gray-500">{result.boyNakshatra.english}</p>
              </div>
              <div className="text-3xl">💍</div>
              <div className="bg-white rounded-2xl px-5 py-3 shadow-sm border border-gray-100 text-center flex-1">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">மணமகள்</p>
                <p className="text-xl font-black text-gray-900">{result.girlNakshatra.tamil}</p>
                <p className="text-sm text-gray-500">{result.girlNakshatra.english}</p>
              </div>
            </div>

            {/* Score Ring */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-44 h-44 flex-shrink-0">
                <svg className="w-44 h-44 -rotate-90" viewBox="0 0 144 144">
                  <circle cx="72" cy="72" r="60" fill="none" stroke="#e5e7eb" strokeWidth="12" />
                  <circle
                    cx="72" cy="72" r="60" fill="none"
                    stroke={result.verdict === 'excellent' ? '#16a34a' : result.verdict === 'good' ? '#2563eb' : result.verdict === 'average' ? '#d97706' : '#dc2626'}
                    strokeWidth="12"
                    strokeDasharray={`${2 * Math.PI * 60}`}
                    strokeDashoffset={`${2 * Math.PI * 60 * (1 - result.percentage / 100)}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-black text-gray-900">{result.percentage}%</span>
                  <span className="text-sm text-gray-600 font-semibold">{result.totalPoints}/{result.maxPoints}</span>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="text-2xl md:text-3xl font-black text-gray-900 mb-3 leading-tight">
                  {result.verdictTamil}
                </div>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-white rounded-full text-sm font-bold border border-gray-200">
                    ✅ {result.matchedCount}/11 பொருத்தம்
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-white rounded-full text-sm font-bold border border-gray-200">
                    🌟 {result.totalPoints} புள்ளிகள்
                  </span>
                </div>

                {result.hasCriticalFault && (
                  <div className="bg-red-100 border border-red-200 rounded-2xl p-4">
                    <p className="font-bold text-red-800 mb-1">⚠️ முக்கிய தோஷங்கள்:</p>
                    {result.criticalFaults.map(f => (
                      <p key={f} className="text-red-700 text-sm">• {f}</p>
                    ))}
                    <p className="text-red-600 text-xs mt-2">* ஜோதிஷர் ஆலோசனை மேற்கொள்ளவும்.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Ad Banner */}
          <div className="flex justify-center">
            <div className="hidden md:block"><AdsterraBanner format="728x90" /></div>
            <div className="block md:hidden"><AdsterraBanner format="300x250" /></div>
          </div>

          {/* Detailed Poruthams Table */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-black text-gray-900">விரிவான பொருத்தம் அட்டவணை</h3>
              <p className="text-sm text-gray-500 mt-1">10 பொருத்தங்களின் விரிவான முடிவு</p>
            </div>
            <div className="divide-y divide-gray-50">
              {result.poruthams.map((p, i) => (
                <div key={i} className={`p-4 md:p-6 flex items-start gap-4 ${p.critical ? 'bg-red-50' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 ${p.pass ? 'bg-green-100' : 'bg-red-100'}`}>
                    {p.pass ? '✅' : '❌'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div>
                        <span className="font-black text-gray-900">{p.nameTa}</span>
                        <span className="ml-2 text-xs text-gray-400 font-medium">{p.name}</span>
                        {p.critical && (
                          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-700">முக்கியம்!</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          {Array.from({ length: p.maxPoints }).map((_, j) => (
                            <div
                              key={j}
                              className={`w-3 h-3 rounded-full ${j < p.points ? 'bg-primary' : 'bg-gray-200'}`}
                            />
                          ))}
                        </div>
                        <span className={`text-sm font-black ${p.pass ? 'text-green-600' : 'text-red-500'}`}>
                          {p.points}/{p.maxPoints}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">{p.info}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Total row */}
            <div className="p-6 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
              <span className="font-black text-gray-900 text-lg">மொத்த புள்ளிகள்</span>
              <span className="font-black text-2xl text-primary">{result.totalPoints} / {result.maxPoints}</span>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-sm text-amber-800">
            <p className="font-bold mb-1">📌 குறிப்பு (Disclaimer)</p>
            <p>இந்த கணிப்பு பாரம்பரிய தமிழ் பஞ்சாங்க முறையின் படி கணக்கிடப்பட்டுள்ளது. இது ஒரு வழிகாட்டுதல் மட்டுமே. இறுதி முடிவுக்கு அனுபவமிக்க ஜோதிஷர் அல்லது திருமண ஆலோசகரை நேரில் சந்திக்கவும். &apos;ராஜு தோஷம்&apos; மற்றும் &apos;நாடி தோஷம்&apos; போன்ற முக்கிய தோஷங்களுக்கு பரிகாரங்கள் உள்ளன.</p>
          </div>

          {/* Second Ad */}
          <div className="flex justify-center">
            <AdsterraBanner format="320x50" />
          </div>
        </div>
      )}
    </div>
  );
}
