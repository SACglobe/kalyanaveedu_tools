import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Tamil Panchangam, Rasi Palan and Festivals';

export default function Image() {
  return renderOg('Tamil Panchangam', 'Daily timings, rasi palan & festival dates');
}
