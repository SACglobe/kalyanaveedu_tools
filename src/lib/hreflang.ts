import { SITE_CONFIG } from '@/lib/constants';

// Tamil <-> English alternates (hreflang). Tamil is the x-default.
export function langAlternates(taPath: string, enPath: string) {
  return {
    'ta-IN': `${SITE_CONFIG.url}${taPath}`,
    en: `${SITE_CONFIG.url}${enPath}`,
    'x-default': `${SITE_CONFIG.url}${taPath}`,
  };
}
