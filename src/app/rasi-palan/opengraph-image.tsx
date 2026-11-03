import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Today Rasi Palan - Daily Tamil Horoscope for all 12 Rasis';

export default function Image() {
  return renderOg('Today Rasi Palan', 'Daily Tamil Horoscope for all 12 Rasis');
}
