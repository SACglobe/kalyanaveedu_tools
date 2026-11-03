'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { usePWA } from '@/components/providers/PWAProvider';

export default function MobileDock() {
  const pathname = usePathname();
  const { showInstallButton, installApp } = usePWA();

  const navItems = [
    { label: 'முகப்பு', en: 'Home', href: '/', icon: '🏠' },
    { label: 'பஞ்சாங்கம்', en: 'Panchangam', href: '/panchangam', icon: '🪔' },
    { label: 'ராகு காலம்', en: 'Rahu Kalam', href: '/tools/rahu-kalam', icon: '⏰' },
    { label: 'ராசி பலன்', en: 'Rasi Palan', href: '/rasi-palan', icon: '♈' },
    { label: 'கருவிகள்', en: 'Tools', href: '/tools', icon: '🧰' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-orange-100 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-2 py-1.5 safe-area-bottom">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href + '/'));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center min-w-[56px] min-h-[46px] rounded-xl px-1.5 py-1 transition-all active:scale-95 ${
                isActive
                  ? 'text-primary font-black bg-primary/10'
                  : 'text-gray-600 hover:text-gray-900 font-medium'
              }`}
            >
              <span className="text-lg leading-none mb-0.5">{item.icon}</span>
              <span className="text-[10px] tracking-tight leading-tight">{item.label}</span>
            </Link>
          );
        })}

        {showInstallButton && (
          <button
            onClick={installApp}
            className="flex flex-col items-center justify-center min-w-[56px] min-h-[46px] rounded-xl px-1.5 py-1 bg-green-50 text-green-700 font-bold active:scale-95 transition-all cursor-pointer"
          >
            <span className="text-lg leading-none mb-0.5">📲</span>
            <span className="text-[10px] tracking-tight leading-tight">Install</span>
          </button>
        )}
      </div>
    </div>
  );
}
