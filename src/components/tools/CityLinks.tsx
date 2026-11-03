import Link from 'next/link';
import { TAMIL_CITIES } from '@/lib/astro-core/constants';

// Server-rendered grid of per-city links: gives crawlers (and users) a direct path to every city page
export default function CityLinks({ basePath, title, currentId, english = false }: { basePath: string; title: string; currentId?: string; english?: boolean }) {
  return (
    <section className="max-w-4xl mx-auto px-4 pb-10">
      <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {TAMIL_CITIES.map((c) => (
          <Link
            key={c.id}
            href={`${basePath}/${c.id}`}
            aria-current={c.id === currentId ? 'page' : undefined}
            className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
              c.id === currentId
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-gray-700 border-gray-200 hover:border-orange-300 hover:text-orange-600'
            }`}
          >
            {english ? c.nameEn : c.nameTa}
          </Link>
        ))}
      </div>
    </section>
  );
}
