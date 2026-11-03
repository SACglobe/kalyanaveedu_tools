import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Choghadiya - Day and night muhurat table';

export default function Image() {
  return renderOg('Choghadiya', 'Day and night muhurat table');
}
