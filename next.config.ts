import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/terms-conditions',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/terms-of-service',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/service-disclaimer',
        destination: '/disclaimer',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
