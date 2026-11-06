import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Wedding Checklist - Organise every wedding task';

export default function Image() {
  return renderOg('Wedding Checklist', 'Organise every wedding task');
}

export const dynamic = 'force-static';
