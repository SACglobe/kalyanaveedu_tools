'use client';

import { useEffect, useRef } from 'react';
import { ADSTERRA_CONFIG } from '@/lib/adsterra';

interface AdsterraNativeBannerProps {
  scriptUrl?: string;
  containerId?: string;
  className?: string;
}

export default function AdsterraNativeBanner({
  scriptUrl,
  containerId,
  className = '',
}: AdsterraNativeBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeScript = scriptUrl || ADSTERRA_CONFIG.units.nativeBanner.scriptUrl;
  const activeContainerId = containerId || ADSTERRA_CONFIG.units.nativeBanner.containerId;

  useEffect(() => {
    if (!ADSTERRA_CONFIG.enabled || !activeScript || !activeContainerId) {
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    // Load Adsterra Native Async script
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = activeScript;
    container.appendChild(script);

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [activeScript, activeContainerId]);

  if (!ADSTERRA_CONFIG.enabled) return null;

  return (
    <div className={`my-8 flex flex-col items-center justify-center ${className}`}>
      <div ref={containerRef} className="w-full max-w-4xl min-h-[120px]">
        <div id={activeContainerId}></div>
      </div>
      <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">விளம்பரங்கள் (Sponsored)</span>
    </div>
  );
}
