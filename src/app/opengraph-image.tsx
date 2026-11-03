import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Kalyana Veedu - Tamil Panchangam, Rasi Palan & Wedding Tools';

export default function Image() {
  return renderOg('Kalyana Veedu', 'Tamil Panchangam, Rasi Palan & Wedding Tools');
}
