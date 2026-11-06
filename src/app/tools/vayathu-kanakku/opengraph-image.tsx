import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Age Calculator - Exact age in years, months and days';

export default function Image() {
  return renderOg('Age Calculator', 'Exact age in years, months and days');
}

export const dynamic = 'force-static';
