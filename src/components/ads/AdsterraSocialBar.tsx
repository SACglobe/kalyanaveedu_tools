'use client';

import { useEffect } from 'react';
import { ADSTERRA_CONFIG } from '@/lib/adsterra';

interface AdsterraSocialBarProps {
  scriptUrl?: string;
}

export default function AdsterraSocialBar({ scriptUrl }: AdsterraSocialBarProps) {
  const activeUrl = scriptUrl || ADSTERRA_CONFIG.units.socialBarScriptUrl;

  useEffect(() => {
    if (!ADSTERRA_CONFIG.enabled || !activeUrl) {
      return;
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = activeUrl;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [activeUrl]);

  return null;
}
