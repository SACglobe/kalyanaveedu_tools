import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';
import { getFestival } from '@/lib/festivals';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Tamil festival date';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const f = getFestival(slug);
  return renderOg(f?.nameEn ?? 'Tamil Festival', 'Date, day and Tamil date');
}

export const dynamic = 'force-static';
export { generateStaticParams } from './page';
