import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Marriage Age Checker - Legal marriage age eligibility';

export default function Image() {
  return renderOg('Marriage Age Checker', 'Legal marriage age eligibility');
}
