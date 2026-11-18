'use client';

import { usePathname } from 'next/navigation';
import AdsterraBanner from '@/components/ads/AdsterraBanner';
import { RailContext } from '@/components/ads/AdRailContext';

/**
 * Calm ad layout (modelled on W3Schools): on wide screens a dedicated right-hand column holds one
 * sticky 300x250 ad. Nothing overlays content, the slot has a fixed size (no layout shift), and on
 * those screens the in-content 300x250 is hidden so a page never shows the same format twice.
 * Below 1280px the column does not exist and the in-content banners behave as before.
 */
// Pages that get the rail: tools and the daily panchangam/rasi/festival pages (Tamil + English).
const RAIL_PREFIXES = ['/tools/', '/panchangam', '/rasi-palan', '/en/panchangam', '/en/rahu-kalam', '/en/rasi-palan', '/en/festivals'];

export function AdRailShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '/';
  const hasRail = RAIL_PREFIXES.some((p) => pathname === p.replace(/\/$/, '') || pathname.startsWith(p));

  if (!hasRail) return <RailContext.Provider value={false}>{children}</RailContext.Provider>;

  return (
    <RailContext.Provider value>
      <div className="mx-auto w-full xl:grid xl:max-w-[1360px] xl:grid-cols-[minmax(0,1fr)_320px] xl:gap-4 xl:px-4">
        <div className="min-w-0">{children}</div>
        <aside aria-label="Advertisement" className="hidden xl:block">
          <div className="sticky top-24 pt-6">
            <AdsterraBanner format="300x250" rail className="!my-0" />
          </div>
        </aside>
      </div>
    </RailContext.Provider>
  );
}
