'use client';

import { useState, useEffect } from 'react';

const DISMISS_KEY = 'kv_adblock_notice_dismissed';

// Soft, dismissible notice. Never blocks the page: a false positive (Brave, DNS blockers,
// a flaky request) must not lock a visitor out of a free tool.
export default function AdBlockDetector() {
  const [adBlockDetected, setAdBlockDetected] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(DISMISS_KEY)) return;
    } catch {
      // storage unavailable; fall through and still run the check
    }

    const timer = setTimeout(() => {
      // Bait element with standard ad classes that cosmetic filters hide
      const bait = document.createElement('div');
      bait.innerHTML = '&nbsp;';
      bait.className = 'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links ad-banner ad_banner advertisement adsbox';
      bait.setAttribute(
        'style',
        'width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;'
      );
      document.body.appendChild(bait);

      window.setTimeout(() => {
        const style = window.getComputedStyle(bait);
        const hidden =
          bait.offsetHeight === 0 ||
          bait.clientHeight === 0 ||
          style.display === 'none' ||
          style.visibility === 'hidden';
        bait.remove();
        setAdBlockDetected(hidden);
      }, 150);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    try {
      sessionStorage.setItem(DISMISS_KEY, '1');
    } catch {
      // ignore
    }
    setAdBlockDetected(false);
  };

  if (!adBlockDetected) return null;

  return (
    <div
      role="status"
      className="fixed left-3 right-3 bottom-20 md:bottom-4 md:left-auto md:right-4 md:max-w-sm z-[60] bg-white rounded-2xl shadow-xl border border-orange-100 p-4"
    >
      <p className="text-sm text-gray-700 leading-relaxed">
        <strong>கல்யாண வீடு</strong> கருவிகள் இலவசம். சிறிய விளம்பரங்களே தளத்தை நடத்த உதவுகின்றன —
        முடிந்தால் Ad Blocker-ஐ இந்த தளத்திற்கு மட்டும் முடக்கவும். நன்றி 🙏
      </p>
      <button
        onClick={dismiss}
        className="mt-3 w-full bg-primary text-white font-bold text-sm py-2.5 rounded-xl cursor-pointer"
      >
        சரி, தொடரவும் (Continue)
      </button>
    </div>
  );
}
