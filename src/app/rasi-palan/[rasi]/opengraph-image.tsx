import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';
import { rasiIndexFromSlug, rasiInfo } from '@/lib/rasi-palan';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Rasi Palan today';

export default async function Image({ params }: { params: Promise<{ rasi: string }> }) {
  const { rasi: value } = await params;
  const idx = rasiIndexFromSlug(value);
  const name = idx >= 0 ? rasiInfo(idx).nameEn : 'Rasi';
  return renderOg(`${name} Rasi Palan`, 'Today and the next 7 days');
}
