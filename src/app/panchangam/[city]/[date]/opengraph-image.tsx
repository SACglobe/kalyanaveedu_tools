import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';
import { getCityById } from '@/lib/astro-core/constants';
import { formatDateEn, isSupportedDate } from '@/lib/date-format';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Tamil Panchangam by date';

export default async function Image({ params }: { params: Promise<{ city: string; date: string }> }) {
  const { city: id, date } = await params;
  const city = getCityById(id);
  return renderOg(`Panchangam ${city?.nameEn ?? ''}`, isSupportedDate(date) ? formatDateEn(date) : 'Tamil Panchangam');
}
