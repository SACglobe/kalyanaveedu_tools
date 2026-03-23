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
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  themeColor: '#8B1A1A',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.metaDescription,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: 'ta_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.metaDescription,
  },
  other: {
    'google-adsense-account': 'ca-pub-8665355844991273',
  },
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
          <Schema type="Organization" data={{}} />
          <Schema type="WebSite" data={{}} />
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
