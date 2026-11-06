import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Thirumana Muhurtham - Wedding dates list';

export default function Image() {
  return renderOg('Thirumana Muhurtham', 'Wedding dates list');
}

export const dynamic = 'force-static';
