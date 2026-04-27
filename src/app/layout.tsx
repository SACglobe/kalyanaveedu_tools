import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/layout/CookieConsent';
import { SITE_CONFIG } from '@/lib/constants';
import Schema from '@/components/SEO/Schema';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} - திருமண திட்டமிடல் கருவிகள் (Wedding Planning Tools)`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.metaDescription,
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon-32.png',
    shortcut: '/favicon-32.png',
    apple: '/icon-192.png',
  },
  other: {
    'google-adsense-account': 'ca-pub-8665355844991273',
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.metaDescription,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: 'ta_IN',
    type: 'website',
    images: [
      {
        url: '/logo-v2.png',
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.metaDescription,
    images: ['/logo-v2.png'],
  },
};

export const viewport = {
  themeColor: '#8B1A1A',
};

import PWAProvider from '@/components/providers/PWAProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ta" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`} suppressHydrationWarning>
        <PWAProvider>
          <Schema 
            type="Organization" 
            data={{
              name: SITE_CONFIG.name,
              url: SITE_CONFIG.url,
              logo: `${SITE_CONFIG.url}/icon-v2.png`,
              sameAs: Object.values(SITE_CONFIG.social || {})
            }} 
          />
          <Schema 
            type="WebSite" 
            data={{
              name: SITE_CONFIG.name,
              url: SITE_CONFIG.url
            }} 
          />
          <Schema 
            type="Person" 
            data={{
              name: SITE_CONFIG.founder.name,
              url: SITE_CONFIG.founder.url,
              jobTitle: SITE_CONFIG.founder.title,
              sameAs: [
                SITE_CONFIG.founder.linkedin,
                SITE_CONFIG.founder.twitter
              ]
            }} 
          />
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <CookieConsent />
          <Footer />
        </PWAProvider>
      </body>
    </html>
  );
}
