'use client';

import React, { useEffect, useRef } from 'react';
import { ADSTERRA_CONFIG } from '@/lib/adsterra';

type BannerFormat = '728x90' | '300x250' | '320x50';

interface AdsterraBannerProps {
  format?: BannerFormat;
  adKey?: string;
  className?: string;
}

const FORMAT_MAP: Record<BannerFormat, { width: number; height: number; defaultKey: string }> = {
  '728x90': {
    width: 728,
    height: 90,
    defaultKey: ADSTERRA_CONFIG.units.leaderboard_728x90.key,
  },
  '300x250': {
    width: 300,
    height: 250,
    defaultKey: ADSTERRA_CONFIG.units.rectangle_300x250.key,
  },
  '320x50': {
    width: 320,
    height: 50,
    defaultKey: ADSTERRA_CONFIG.units.banner_320x50.key,
  },
};

export default function AdsterraBanner({
  format = '300x250',
  adKey,
  className = '',
}: AdsterraBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const info = FORMAT_MAP[format] || FORMAT_MAP['300x250'];
  const activeKey = adKey || info.defaultKey;

  useEffect(() => {
    if (!ADSTERRA_CONFIG.enabled || !activeKey || activeKey.startsWith('default_')) {
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    // Clear any previous ad script
    container.innerHTML = '';

    // Create an iframe to safely isolate Adsterra globals (atOptions) and avoid collisions
    const iframe = document.createElement('iframe');
    iframe.width = String(info.width);
    iframe.height = String(info.height);
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';
    iframe.scrolling = 'no';
    iframe.title = 'Advertisement';

    container.appendChild(iframe);

    const doc = iframe.contentWindow?.document || iframe.contentDocument;
    if (doc) {
      doc.open();
      doc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <base target="_blank">
            <style>
              body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; background: transparent; overflow: hidden; }
            </style>
          </head>
          <body>
            <script type="text/javascript">
              atOptions = {
                'key': '${activeKey}',
                'format': 'iframe',
                'height': ${info.height},
                'width': ${info.width},
                'params': {}
              };
            </script>
            <script type="text/javascript" src="//www.highperformanceformat.com/${activeKey}/invoke.js"></script>
          </body>
        </html>
      `);
      doc.close();
    }

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [activeKey, info.height, info.width]);

  // If in development/default key mode, render a clean subtle placeholder in dev/preview
  const isPlaceholder = !ADSTERRA_CONFIG.enabled || !activeKey || activeKey.startsWith('default_');

  return (
    <div
      className={`my-6 flex flex-col items-center justify-center overflow-hidden transition-all ${className}`}
      style={{ minHeight: `${info.height}px` }}
    >
      <div
        ref={containerRef}
        style={{
          width: '100%',
          maxWidth: `${info.width}px`,
          height: `${info.height}px`,
        }}
        className="flex items-center justify-center bg-gray-50/50 rounded-lg overflow-hidden"
      >
        {isPlaceholder && (
          <div className="flex flex-col items-center justify-center w-full h-full border border-dashed border-gray-200 rounded-lg text-xs text-gray-400 p-2 text-center">
            <span className="font-semibold text-gray-500 uppercase tracking-wider mb-1">Advertisement</span>
            <span>Adsterra Banner ({info.width}x{info.height})</span>
          </div>
        )}
      </div>
      <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">விளம்பரம்</span>
    </div>
  );
}
