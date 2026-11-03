'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

export interface SearchItem {
  href: string;
  title: string;
  desc: string;
  kind: string;
}

export default function SearchClient({ items }: { items: SearchItem[] }) {
  const [q, setQ] = useState('');
  const results = useMemo(() => {
    const terms = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    return items
      .map((it) => {
        const hay = `${it.title} ${it.desc}`.toLowerCase();
        const titleHay = it.title.toLowerCase();
        if (!terms.every((t) => hay.includes(t))) return null;
        return { it, score: terms.reduce((s, t) => s + (titleHay.includes(t) ? 2 : 1), 0) };
      })
      .filter((x): x is { it: SearchItem; score: number } => x !== null)
      .sort((a, b) => b.score - a.score)
      .slice(0, 40)
      .map((x) => x.it);
  }, [q, items]);

  return (
    <div>
      <input
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="தேடுங்கள்: ராகு காலம், rasi palan, அமாவாசை…"
        aria-label="தேடு"
        autoFocus
        className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <ul className="mt-4 space-y-2">
        {results.map((r) => (
          <li key={r.href}>
            <Link href={r.href} className="block bg-white rounded-xl border border-gray-100 p-4 hover:border-orange-300">
              <span className="text-[11px] font-bold text-primary uppercase tracking-wider">{r.kind}</span>
              <span className="block font-bold text-gray-900">{r.title}</span>
              <span className="block text-sm text-gray-500 line-clamp-2">{r.desc}</span>
            </Link>
          </li>
        ))}
        {q.trim() && results.length === 0 && <li className="text-gray-500 text-sm p-4">முடிவுகள் இல்லை. வேறு சொல்லில் தேடிப் பாருங்கள்.</li>}
      </ul>
    </div>
  );
}
