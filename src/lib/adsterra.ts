/**
 * Adsterra Ad Unit Configurations
 * Website ID: 6143610 (kalyanaveedu.in)
 */

export const ADSTERRA_CONFIG = {
  websiteId: '6143610',
  enabled: process.env.NEXT_PUBLIC_DISABLE_ADS !== 'true',
  units: {
    // 320x50 Mobile Banner (Iframe Sync)
    banner_320x50: {
      key: process.env.NEXT_PUBLIC_ADSTERRA_BANNER_320x50 || '063314ca000add0f3b5f0ec9b0d4e4ae',
      format: 'iframe' as const,
      height: 50,
      width: 320,
    },
    // 300x250 Medium Rectangle (Iframe Sync)
    rectangle_300x250: {
      key: process.env.NEXT_PUBLIC_ADSTERRA_BANNER_300x250 || '8c4809ba49768069391f94dad46043f5',
      format: 'iframe' as const,
      height: 250,
      width: 300,
    },
    // 728x90 Leaderboard (Iframe Sync)
    leaderboard_728x90: {
      key: process.env.NEXT_PUBLIC_ADSTERRA_BANNER_728x90 || 'bc667c6c5e49d0a5e09f0f4dddf0e1b3',
      format: 'iframe' as const,
      height: 90,
      width: 728,
    },
    // 468x60 Banner (Iframe Sync)
    banner_468x60: {
      key: process.env.NEXT_PUBLIC_ADSTERRA_BANNER_468x60 || 'cf7dad8e4e256fd1c7e300d01cb484da',
      format: 'iframe' as const,
      height: 60,
      width: 468,
    },
    // 160x300 Skyscraper (Iframe Sync)
    skyscraper_160x300: {
      key: process.env.NEXT_PUBLIC_ADSTERRA_BANNER_160x300 || '7e0cf8a72c4893684e662904af1fba8d',
      format: 'iframe' as const,
      height: 300,
      width: 160,
    },
    // 160x600 Wide Skyscraper (Iframe Sync)
    skyscraper_160x600: {
      key: process.env.NEXT_PUBLIC_ADSTERRA_BANNER_160x600 || 'bcc9b6ce21fc16a9ba5089aaf8f3ac31',
      format: 'iframe' as const,
      height: 600,
      width: 160,
    },
    // Native Banner (4 items async)
    nativeBanner: {
      scriptUrl: process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_BANNER_URL || 'https://bauval.org/21/e9169a30e2101d3bdf737a4a276e9d79',
      containerId: 'container-e9169a30e2101d3bdf737a4a276e9d79',
    },
    // Popunder (JS Sync)
    popunder: {
      scriptUrl: process.env.NEXT_PUBLIC_ADSTERRA_POPUNDER_URL || 'https://abscloud.org/1/941cfbfc47699ece2bf1590d28fc816e',
    },
    // Smartlink Direct URL
    smartlink: {
      url: process.env.NEXT_PUBLIC_ADSTERRA_SMARTLINK_URL || 'https://arapflhn.org/4/b70bfecca4f8cc9efe55d6ed488620bb',
    },
    // Social Bar (In-page Push JS Sync)
    socialBar: {
      scriptUrl: process.env.NEXT_PUBLIC_ADSTERRA_SOCIAL_BAR_URL || 'https://bauval.org/14/91af823bf4101a37ba76834b73db7c58',
    },
  },
};
