import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Yamakandam & Kuligai - Daily inauspicious timings';

export default function Image() {
  return renderOg('Yamakandam & Kuligai', 'Daily inauspicious timings');
}

export const dynamic = 'force-static';
