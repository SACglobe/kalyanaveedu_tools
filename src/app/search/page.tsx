import type { Metadata } from 'next';
import SearchClient, { type SearchItem } from './SearchClient';
import { TOOLS_LIST } from '@/lib/constants';
import { BLOG_POSTS } from '@/lib/blog-data';
import { RASI_SLUGS, rasiInfo } from '@/lib/rasi-palan';
import { VIRATHAM_LIST } from '@/lib/viratham';
import { NAKSHATRAS_LIST, TAMIL_CITIES } from '@/lib/astro-core/constants';
import { nakshatraSlug } from '@/lib/baby-names';
import { FESTIVALS } from '@/lib/festivals';

export const metadata: Metadata = {
  title: 'தேடு | Search',
  description: 'கல்யாண வீடு தளத்தில் கருவிகள், கட்டுரைகள், பஞ்சாங்கம், ராசி பலன் ஆகியவற்றைத் தேடுங்கள்.',
  robots: { index: false, follow: true },
};

export default function SearchPage() {
  const items: SearchItem[] = [
    ...TOOLS_LIST.map((t) => ({ href: t.path, title: t.title, desc: t.description, kind: 'கருவி' })),
    ...RASI_SLUGS.map((s, i) => {
      const r = rasiInfo(i);
      return { href: `/rasi-palan/${s}`, title: `${r.nameTa} ராசி பலன் (${r.nameEn})`, desc: `${r.nameTa} இன்றைய ராசி பலன் rasi palan today`, kind: 'ராசி பலன்' };
    }),
    ...VIRATHAM_LIST.map((v) => ({ href: `/tools/viratham/${v.type}`, title: `${v.titleTa} தேதிகள் (${v.titleEn})`, desc: v.blurbTa, kind: 'விரதம்' })),
    ...FESTIVALS.map((f) => ({ href: `/tools/festivals/${f.slug}`, title: `${f.nameTa} தேதி (${f.nameEn})`, desc: f.blurbTa, kind: 'பண்டிகை' })),
    ...NAKSHATRAS_LIST.map((n) => ({ href: `/tools/baby-names/${nakshatraSlug(n)}`, title: `${n.nameTa} நட்சத்திர குழந்தை பெயர்கள் (${n.nameEn})`, desc: `${n.nameTa} baby names ${n.rasiTa}`, kind: 'பெயர்கள்' })),
    ...TAMIL_CITIES.map((c) => ({ href: `/panchangam/${c.id}`, title: `பஞ்சாங்கம் ${c.nameTa} (${c.nameEn})`, desc: `இன்றைய பஞ்சாங்கம், ராகு காலம் ${c.nameTa} ${c.nameEn} panchangam today`, kind: 'பஞ்சாங்கம்' })),
    ...BLOG_POSTS.map((b) => ({ href: b.slug, title: b.title, desc: b.excerpt, kind: 'கட்டுரை' })),
  ];
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">தேடு (Search)</h1>
      <SearchClient items={items} />
    </div>
  );
}
