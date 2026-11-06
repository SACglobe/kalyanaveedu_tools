import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Nakshatra Finder - Birth star, pada and rasi';

export default function Image() {
  return renderOg('Nakshatra Finder', 'Birth star, pada and rasi');
}

export const dynamic = 'force-static';
