import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Tamil Festival Calendar';

export default function Image() {
  return renderOg('Tamil Festivals', 'Pongal, Deepavali, Navaratri & more');
}
