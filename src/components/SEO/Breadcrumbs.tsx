import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

export interface Crumb {
  name: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      ...(c.href ? { item: `${SITE_CONFIG.url}${c.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ol className="flex flex-wrap gap-1 items-center">
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <span className="text-gray-400">/</span>}
            {c.href && i < items.length - 1 ? (
              <Link href={c.href} className="hover:text-orange-600 transition-colors">{c.name}</Link>
            ) : (
              <span className="text-orange-600 font-medium">{c.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
