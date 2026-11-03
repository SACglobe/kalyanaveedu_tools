import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Sevvai Dosham - Mangal dosha check';

export default function Image() {
  return renderOg('Sevvai Dosham', 'Mangal dosha check');
}
