import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Tamil Baby Names - By Nakshatra and Pada';

export default function Image() {
  return renderOg('Tamil Baby Names', 'By Nakshatra and Pada');
}

export const dynamic = 'force-static';
