import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Viratham Calendar - Amavasai, Pournami, Ekadashi & Sashti dates';

export default function Image() {
  return renderOg('Viratham Calendar', 'Amavasai, Pournami, Ekadashi & Sashti dates');
}
