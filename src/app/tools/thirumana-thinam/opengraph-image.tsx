import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Wedding Date Planner - Days remaining to your wedding';

export default function Image() {
  return renderOg('Wedding Date Planner', 'Days remaining to your wedding');
}
