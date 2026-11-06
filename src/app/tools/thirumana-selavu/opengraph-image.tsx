import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Wedding Budget Calculator - Plan your wedding expenses';

export default function Image() {
  return renderOg('Wedding Budget Calculator', 'Plan your wedding expenses');
}

export const dynamic = 'force-static';
