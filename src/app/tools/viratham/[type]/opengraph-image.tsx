import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';
import { getVirathamMeta } from '@/lib/viratham';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Viratham dates';

export default async function Image({ params }: { params: Promise<{ type: string }> }) {
  const { type: value } = await params;
  const m = getVirathamMeta(value);
  return renderOg(`${m?.titleEn ?? 'Viratham'} Dates`, 'Upcoming dates with Tamil date and weekday');
}

export const dynamic = 'force-static';
export { generateStaticParams } from './page';
