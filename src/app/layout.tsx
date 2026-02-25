import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/layout/CookieConsent';
import { SITE_CONFIG } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} - திருமண திட்டமிடல் கருவிகள்`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
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
