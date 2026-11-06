import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';
import { getCityById } from '@/lib/astro-core/constants';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Today's Panchangam by city";

export default async function Image({ params }: { params: Promise<{ city: string }> }) {
  const { city: value } = await params;
  const city = getCityById(value);
  return renderOg(`Panchangam ${city?.nameEn ?? ''}`, 'Tithi, Nakshatra, Rahu Kalam & Nalla Neram');
}

export const dynamic = 'force-static';
export { generateStaticParams } from './page';
