'use client';

import { useRouter } from 'next/navigation';
import { TAMIL_CITIES } from '@/lib/astro-core/constants';

export default function CitySelect({ basePath, currentId, suffix = '', english = false }: { basePath: string; currentId: string; suffix?: string; english?: boolean }) {
  const router = useRouter();
  return (
    <label className="block">
      <span className="block text-xs font-bold text-gray-700 mb-1.5">{english ? 'City' : 'நகரம் / ஊர் (City)'}</span>
      <select
        value={currentId}
        onChange={(e) => router.push(`${basePath}/${e.target.value}${suffix}`)}
        className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        {TAMIL_CITIES.map((c) => (
          <option key={c.id} value={c.id}>
            {english ? c.nameEn : `${c.nameTa} (${c.nameEn})`}
          </option>
        ))}
      </select>
    </label>
  );
}
