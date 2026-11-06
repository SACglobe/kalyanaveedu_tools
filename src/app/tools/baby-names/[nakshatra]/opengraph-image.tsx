import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';
import { getNakshatraBySlug } from '@/lib/baby-names';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Baby names by nakshatra';

export default async function Image({ params }: { params: Promise<{ nakshatra: string }> }) {
  const { nakshatra: value } = await params;
  const n = getNakshatraBySlug(value);
  return renderOg(`${n?.nameEn ?? 'Nakshatra'} Baby Names`, 'Naming letters by pada');
}

export const dynamic = 'force-static';
export { generateStaticParams } from './page';
