/**
 * Adsterra Ad Unit Configurations
 * Website ID: 6134012 (kalyanaveedu.in)
 */

export const ADSTERRA_CONFIG = {
  websiteId: '6134012',
  enabled: process.env.NEXT_PUBLIC_DISABLE_ADS !== 'true',
  units: {
    // 320x50 Mobile Banner (Iframe Sync)
    banner_320x50: {
      key: process.env.NEXT_PUBLIC_ADSTERRA_BANNER_320x50 || '3bf2bc9001770eb66f3e485c9d52e9bf',
      format: 'iframe' as const,
      height: 50,
      width: 320,
    },
    // Native Banner (4 items)
    nativeBanner: {
      scriptUrl: process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_BANNER_URL || 'https://bauval.org/21/adff98e2f4dc389dbdb03558fb1c2b13',
      containerId: 'container-adff98e2f4dc389dbdb03558fb1c2b13',
    },
    // Popunder (JS Sync)
    popunder: {
      scriptUrl: process.env.NEXT_PUBLIC_ADSTERRA_POPUNDER_URL || 'https://abscloud.org/1/97bab138f3b4f7748f46de8e670c73c6',
    },
    // Smartlink Direct URL
    smartlink: {
      url: process.env.NEXT_PUBLIC_ADSTERRA_SMARTLINK_URL || 'https://araplhn.org/4/59590aa0b46c1756feaaa45407baf0cc',
    },
    // Social Bar (In-page Push JS Sync)
    socialBar: {
      scriptUrl: process.env.NEXT_PUBLIC_ADSTERRA_SOCIAL_BAR_URL || 'https://bauval.org/14/d6cee5d5365ad58530959a05c1498c78',
    },
    // Fallback keys for desktop leaderboard and rectangle
    leaderboard_728x90: {
      key: process.env.NEXT_PUBLIC_ADSTERRA_BANNER_728x90 || '',
      format: 'iframe' as const,
      height: 90,
      width: 728,
    },
    rectangle_300x250: {
      key: process.env.NEXT_PUBLIC_ADSTERRA_BANNER_300x250 || '',
      format: 'iframe' as const,
      height: 250,
      width: 300,
    },
  },
};
