import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Today's Panchangam - Tithi, Nakshatra, Rahu Kalam & Nalla Neram";

export default function Image() {
  return renderOg("Today's Panchangam", 'Tithi, Nakshatra, Rahu Kalam & Nalla Neram');
}
