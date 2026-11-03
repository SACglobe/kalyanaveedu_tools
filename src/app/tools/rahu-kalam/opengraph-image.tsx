import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Rahu Kalam Today - City-based timings';

export default function Image() {
  return renderOg('Rahu Kalam Today', 'City-based timings');
}
