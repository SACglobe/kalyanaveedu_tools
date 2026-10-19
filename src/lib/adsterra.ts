/**
 * Adsterra Ad Unit Configurations
 * Website ID: 6134012 (kalyanaveedu.in)
 * 
 * You can configure specific ad unit IDs via environment variables:
 * NEXT_PUBLIC_ADSTERRA_BANNER_728x90
 * NEXT_PUBLIC_ADSTERRA_BANNER_300x250
 * NEXT_PUBLIC_ADSTERRA_BANNER_320x50
 * NEXT_PUBLIC_ADSTERRA_BANNER_468x60
 * NEXT_PUBLIC_ADSTERRA_SOCIAL_BAR
 * NEXT_PUBLIC_ADSTERRA_NATIVE_BANNER
 */

export interface AdsterraUnitConfig {
  key: string;
  format: 'iframe';
  height: number;
  width: number;
  params?: Record<string, unknown>;
}

export const ADSTERRA_CONFIG = {
  websiteId: '6134012',
  enabled: process.env.NEXT_PUBLIC_DISABLE_ADS !== 'true',
  units: {
    leaderboard_728x90: {
      key: process.env.NEXT_PUBLIC_ADSTERRA_BANNER_728x90 || 'default_728x90_key',
      format: 'iframe' as const,
      height: 90,
      width: 728,
    },
    rectangle_300x250: {
      key: process.env.NEXT_PUBLIC_ADSTERRA_BANNER_300x250 || 'default_300x250_key',
      format: 'iframe' as const,
      height: 250,
      width: 300,
    },
    mobile_320x50: {
      key: process.env.NEXT_PUBLIC_ADSTERRA_BANNER_320x50 || 'default_320x50_key',
      format: 'iframe' as const,
      height: 50,
      width: 320,
    },
    socialBarScriptUrl: process.env.NEXT_PUBLIC_ADSTERRA_SOCIAL_BAR_URL || '',
    nativeBannerScriptUrl: process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_BANNER_URL || '',
  },
};
