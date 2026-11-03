import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';
import { getCityById } from '@/lib/astro-core/constants';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Yamakandam by city';

export default async function Image({ params }: { params: Promise<{ city: string }> }) {
  const { city: value } = await params;
  const city = getCityById(value);
  return renderOg(`Yamakandam ${city?.nameEn ?? ''}`, 'Exact timings for today');
}
