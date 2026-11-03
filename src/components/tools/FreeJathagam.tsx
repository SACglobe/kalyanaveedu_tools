'use client';

import { useMemo, useState } from 'react';
import { TAMIL_CITIES } from '@/lib/astro-core/constants';
import { computeKundli, RASI_NAMES_TA, type KundliResult } from '@/lib/astro-core/kundli';
import RasiChart from '@/components/tools/RasiChart';
import AdsterraBanner from '@/components/ads/AdsterraBanner';
import RelatedTools from '@/components/tools/RelatedTools';

const fmtDeg = (d: number) => `${Math.floor(d)}° ${String(Math.floor((d % 1) * 60)).padStart(2, '0')}′`;
const fmtDate = (d: Date) => `${d.getUTCDate()}-${d.getUTCMonth() + 1}-${d.getUTCFullYear()}`;

export default function FreeJathagam() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('06:00');
  const [cityId, setCityId] = useState('chennai');
  const [result, setResult] = useState<KundliResult | null>(null);
  const [error, setError] = useState('');

  const city = useMemo(() => TAMIL_CITIES.find((c) => c.id === cityId) || TAMIL_CITIES[0], [cityId]);

  const calculate = () => {
    const d = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
    const t = /^(\d{2}):(\d{2})$/.exec(time);
    if (!d || !t) {
      setError('பிறந்த தேதி மற்றும் நேரத்தை உள்ளிடவும்.');
      return;
    }
    setError('');
    setResult(computeKundli(Number(d[1]), Number(d[2]), Number(d[3]), Number(t[1]), Number(t[2]), city));
    setTimeout(() => document.getElementById('jathagam-result')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const rasiPlaced: Record<number, string[]> = {};
  const navPlaced: Record<number, string[]> = {};
  if (result) {
    for (const p of result.planets) {
      const label = p.shortTa + (p.retrograde && p.key !== 'rahu' && p.key !== 'ketu' ? '(வ)' : '');
      (rasiPlaced[p.rasiIndex] ||= []).push(label);
      (navPlaced[p.navamsaRasi] ||= []).push(p.shortTa);
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10 mb-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-3xl mx-auto mb-3">📜</div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-1">இலவச ஜாதகம் கணிப்பு</h2>
          <p className="text-sm md:text-base text-gray-500">Free Tamil Jathagam / Kundli – Rasi, Navamsa & Dasha</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto bg-orange-50/50 p-5 rounded-2xl border border-orange-100/60">
          <label className="block md:col-span-2">
            <span className="block text-xs font-bold text-gray-700 mb-1.5">பெயர் (விருப்பம்)</span>
            <input value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm" placeholder="Name" />
          </label>
          <label className="block">
            <span className="block text-xs font-bold text-gray-700 mb-1.5">பிறந்த தேதி (Date of birth)</span>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm" />
          </label>
          <label className="block">
            <span className="block text-xs font-bold text-gray-700 mb-1.5">பிறந்த நேரம் (Time of birth)</span>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm" />
          </label>
          <label className="block md:col-span-2">
            <span className="block text-xs font-bold text-gray-700 mb-1.5">பிறந்த ஊர் (Birth place)</span>
            <select value={cityId} onChange={(e) => setCityId(e.target.value)} className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm">
              {TAMIL_CITIES.map((c) => (
                <option key={c.id} value={c.id}>{c.nameTa} ({c.nameEn})</option>
              ))}
            </select>
          </label>
          {error && <p className="md:col-span-2 text-sm text-rose-600 font-bold">{error}</p>}
          <button onClick={calculate} className="md:col-span-2 bg-primary hover:bg-accent text-white font-black py-3.5 rounded-xl transition-colors cursor-pointer">
            ஜாதகம் கணிக்க (Generate Jathagam)
          </button>
        </div>
      </div>

      {result && (
        <div id="jathagam-result" className="space-y-6">
          <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-xl font-black text-gray-900 mb-4">{name ? `${name} – ` : ''}ஜாதக சுருக்கம்</h3>
            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <div className="flex justify-between"><dt className="text-gray-500 font-bold">லக்னம்</dt><dd className="font-black">{RASI_NAMES_TA[result.lagnaRasi]} ({fmtDeg(result.lagnaDeg)})</dd></div>
              <div className="flex justify-between"><dt className="text-gray-500 font-bold">ராசி</dt><dd className="font-black">{RASI_NAMES_TA[result.moonRasi]}</dd></div>
              <div className="flex justify-between"><dt className="text-gray-500 font-bold">நட்சத்திரம்</dt><dd className="font-black">{result.moonNakshatraTa} – பாதம் {result.moonPada}</dd></div>
              <div className="flex justify-between"><dt className="text-gray-500 font-bold">திதி</dt><dd className="font-black">{result.tithiTa}</dd></div>
              <div className="flex justify-between"><dt className="text-gray-500 font-bold">தசா இருப்பு</dt><dd className="font-black">{result.dasha.firstLordTa} {result.dasha.balanceYears}ஆ {result.dasha.balanceMonths}மா {result.dasha.balanceDays}நா</dd></div>
              <div className="flex justify-between"><dt className="text-gray-500 font-bold">அயனாம்சம்</dt><dd className="font-black">{fmtDeg(result.ayanamsa)} (லாகிரி)</dd></div>
            </dl>
          </section>

          <section className="grid md:grid-cols-2 gap-6 bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
            <RasiChart title="ராசி கட்டம்" rasiNames={RASI_NAMES_TA} placed={rasiPlaced} lagnaRasi={result.lagnaRasi} />
            <RasiChart title="நவாம்சம்" rasiNames={RASI_NAMES_TA} placed={navPlaced} />
            <p className="md:col-span-2 text-xs text-gray-500 text-center">ல = லக்னம் · (வ) = வக்ரம் · சூ சூரியன், சந் சந்திரன், செ செவ்வாய், பு புதன், கு குரு, சு சுக்கிரன், சனி, ரா ராகு, கே கேது</p>
          </section>

          <AdsterraBanner format="300x250" />

          <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 overflow-x-auto">
            <h3 className="text-xl font-black text-gray-900 mb-4">கிரக நிலைகள்</h3>
            <table className="w-full text-sm min-w-[520px]">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-100">
                  <th className="py-2">கிரகம்</th><th>ராசி</th><th>பாகை</th><th>நட்சத்திரம்</th><th>பாவம்</th>
                </tr>
              </thead>
              <tbody>
                {[{ nameTa: 'லக்னம்', rasi: result.lagnaRasi, deg: result.lagnaDeg, nak: result.lagnaNakshatraTa, pada: 0, house: 1, retro: false }, ...result.planets.map((p) => ({ nameTa: p.nameTa, rasi: p.rasiIndex, deg: p.degInRasi, nak: p.nakshatraTa, pada: p.pada, house: p.house, retro: p.retrograde && p.key !== 'rahu' && p.key !== 'ketu' }))].map((r) => (
                  <tr key={r.nameTa} className="border-b border-gray-50 last:border-0">
                    <td className="py-2 font-bold">{r.nameTa}{r.retro ? ' (வ)' : ''}</td>
                    <td>{RASI_NAMES_TA[r.rasi]}</td>
                    <td>{fmtDeg(r.deg)}</td>
                    <td>{r.nak}{r.pada ? ` ${r.pada}` : ''}</td>
                    <td>{r.house}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-xl font-black text-gray-900 mb-4">விம்சோத்தரி தசை</h3>
            {result.dasha.currentMahadasha && (
              <p className="mb-4 bg-orange-50 border border-orange-100 rounded-xl p-3 text-sm font-bold text-gray-800">
                நடப்பு தசை: {result.dasha.currentMahadasha.lordTa}
                {result.dasha.currentAntardasha ? ` – புக்தி: ${result.dasha.currentAntardasha.lordTa}` : ''}
                {' '}(முடிவு: {fmtDate(result.dasha.currentMahadasha.endDate)})
              </p>
            )}
            <ul className="grid sm:grid-cols-2 gap-x-8 text-sm divide-y sm:divide-y-0 divide-gray-100">
              {result.dasha.timeline.map((m) => (
                <li key={m.lord} className={`py-2 flex justify-between ${m.isCurrent ? 'font-black text-primary' : ''}`}>
                  <span>{m.lordTa} தசை</span>
                  <span className="text-gray-500">{fmtDate(m.startDate)} → {fmtDate(m.endDate)}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="grid md:grid-cols-2 gap-4">
            <div className={`rounded-2xl border p-5 ${result.sevvai.hasDosha && !result.sevvai.isCancelled ? 'bg-rose-50 border-rose-100' : 'bg-emerald-50 border-emerald-100'}`}>
              <h3 className="font-black text-gray-900 mb-1">செவ்வாய் தோஷம்</h3>
              <p className="text-sm font-bold mb-1">{result.sevvai.severityTa}</p>
              <p className="text-sm text-gray-700 leading-relaxed">{result.sevvai.explanationTa}</p>
            </div>
            <div className={`rounded-2xl border p-5 ${result.kaalSarp.hasDosha ? 'bg-rose-50 border-rose-100' : 'bg-emerald-50 border-emerald-100'}`}>
              <h3 className="font-black text-gray-900 mb-1">கால சர்ப தோஷம்</h3>
              <p className="text-sm font-bold mb-1">{result.kaalSarp.typeNameTa}</p>
              <p className="text-sm text-gray-700 leading-relaxed">{result.kaalSarp.impactAreaTa}</p>
            </div>
          </section>

          <p className="text-xs text-gray-400">
            கணிப்புகள் லாகிரி அயனாம்சம், முழு ராசி (Whole-sign) பாவ முறையில் தரப்பட்டவை; கிரக நிலைகள் சில ஆர்க்-நிமிட துல்லியம் கொண்டவை. பிறந்த நேரத்தில் சில நிமிட வேறுபாடு லக்னத்தை மாற்றக்கூடும். திருமண, முக்கிய முடிவுகளுக்கு குடும்ப ஜோதிடரிடம் உறுதி செய்யவும்.
          </p>
        </div>
      )}

      <RelatedTools currentSlug="free-jathagam" />
    </div>
  );
}
