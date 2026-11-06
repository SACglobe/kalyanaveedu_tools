import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Gowri Nalla Neram - Day and night auspicious timings';

export default function Image() {
  return renderOg('Gowri Nalla Neram', 'Day and night auspicious timings');
}

export const dynamic = 'force-static';
