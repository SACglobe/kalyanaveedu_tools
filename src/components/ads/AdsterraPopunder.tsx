'use client';

import { useEffect } from 'react';
import { ADSTERRA_CONFIG } from '@/lib/adsterra';

interface AdsterraPopunderProps {
  scriptUrl?: string;
}

export default function AdsterraPopunder({ scriptUrl }: AdsterraPopunderProps) {
  const activeUrl = scriptUrl || ADSTERRA_CONFIG.units.popunder.scriptUrl;

  useEffect(() => {
    if (!ADSTERRA_CONFIG.enabled || !activeUrl) {
      return;
    }

    // Frequency cap: one popunder per browser session keeps return visits and session depth healthy
    try {
      if (sessionStorage.getItem('kv_popunder_shown')) return;
      sessionStorage.setItem('kv_popunder_shown', '1');
    } catch {
      // storage unavailable: fall through and load normally
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = activeUrl;
    script.setAttribute('data-cfasync', 'false');
    script.async = true;
    script.onerror = () => {
      // Gracefully handle ad-blocker without crashing
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [activeUrl]);

  return null;
}
