import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Subha Muhurtham - Auspicious wedding dates';

export default function Image() {
  return renderOg('Subha Muhurtham', 'Auspicious wedding dates');
}

export const dynamic = 'force-static';
