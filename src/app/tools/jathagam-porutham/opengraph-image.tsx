import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Jathagam Porutham - 10 Poruthams across 27 nakshatras';

export default function Image() {
  return renderOg('Jathagam Porutham', '10 Poruthams across 27 nakshatras');
}

export const dynamic = 'force-static';
