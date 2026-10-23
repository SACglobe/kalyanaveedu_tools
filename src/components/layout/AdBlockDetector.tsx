'use client';

import { useState, useEffect } from 'react';

export default function AdBlockDetector() {
  const [adBlockDetected, setAdBlockDetected] = useState(false);

  const checkAdBlock = async () => {
    let isBlocked = false;

    // Test 1: Fetch known common ad script & network URLs that all ad-blockers block
    try {
      const adUrls = [
        'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        'https://bauval.org/22/063314ca000add0f3b5f0ec9b0d4e4ae',
        'https://abscloud.org/1/941cfbfc47699ece2bf1590d28fc816e',
      ];

      for (const url of adUrls) {
        try {
          await fetch(url, { method: 'HEAD', mode: 'no-cors', cache: 'no-store' });
        } catch {
          isBlocked = true;
          break;
        }
      }

      if (isBlocked) {
        setAdBlockDetected(true);
        return;
      }
    } catch {
      isBlocked = true;
    }

    // Test 2: Create a bait element with standard ad classes/IDs that uBlock/AdBlock hides
    const bait = document.createElement('div');
    bait.innerHTML = '&nbsp;';
    bait.className = 'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links ad-banner ad_banner advertisement adsbox';
    bait.setAttribute(
      'style',
      'width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;'
    );
    document.body.appendChild(bait);

    // Wait a brief tick for blocker filters to process styles
    window.setTimeout(() => {
      const isHidden =
        bait.offsetParent === null ||
        bait.offsetHeight === 0 ||
        bait.offsetLeft === 0 ||
        bait.offsetTop === 0 ||
        bait.offsetWidth === 0 ||
        bait.clientHeight === 0 ||
        bait.clientWidth === 0 ||
        window.getComputedStyle(bait).display === 'none' ||
        window.getComputedStyle(bait).visibility === 'hidden';

      bait.remove();

      if (isHidden || isBlocked) {
        setAdBlockDetected(true);
      } else {
        setAdBlockDetected(false);
      }
    }, 150);
  };

  useEffect(() => {
    // Initial check after mounting
    const timer = setTimeout(() => {
      checkAdBlock();
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!adBlockDetected) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-gray-900/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-8 md:p-10 text-center shadow-2xl border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
        <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-inner">
          🛡️
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 tracking-tight">
          விளம்பர தடுப்பானை முடக்கவும்
        </h2>
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
          Ad Blocker Detected
        </p>

        <p className="text-gray-600 leading-relaxed mb-4 text-base">
          எங்கள் இணையதளத்தில் உள்ள அனைத்து கல்யாண கருவிகள் மற்றும் சேவைகளும் முற்றிலும் <strong>இலவசமாக</strong> வழங்கப்படுகின்றன.
        </p>

        <p className="text-gray-500 text-sm leading-relaxed mb-8 bg-gray-50 p-4 rounded-xl border border-gray-100">
          தளத்தின் பராமரிப்பு மற்றும் சர்வர் செலவுகளை ஈடுகட்ட சிறிய விளம்பரங்கள் உதவுகின்றன. தொடர்ந்து தளத்தைப் பயன்படுத்த உங்கள் பிரவுசரில் உள்ள <strong>Ad Blocker-ஐ முடக்கிவிட்டு (Disable)</strong> பக்கத்தை புதுப்பிக்கவும்.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="w-full bg-primary hover:bg-accent text-white font-bold py-4 px-6 rounded-2xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/25 text-base flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>🔄</span> பக்கத்தை புதுப்பிக்கவும் (Refresh Page)
        </button>

        <div className="mt-6 text-xs text-gray-400">
          Ad Blocker-ஐ முடக்கிய பின் இந்த பட்டனை கிளிக் செய்யவும்.
        </div>
      </div>
    </div>
  );
}
