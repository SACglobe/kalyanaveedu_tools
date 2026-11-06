import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Tamil Wedding Guides - Traditions, Schemes & Planning Articles';

export default function Image() {
  return renderOg('Tamil Wedding Guides', 'Traditions, Schemes & Planning Articles');
}

export const dynamic = 'force-static';
