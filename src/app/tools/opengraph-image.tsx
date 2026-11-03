import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Free Tamil Tools - Panchangam, Muhurtham & Wedding Planning';

export default function Image() {
  return renderOg('Free Tamil Tools', 'Panchangam, Muhurtham & Wedding Planning');
}
