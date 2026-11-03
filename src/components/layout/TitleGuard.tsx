'use client';

import { useEffect } from 'react';

// Third-party ad scripts (e.g. Adsterra social bar) sometimes rewrite the tab title to "(1) New Message!".
// Restore the page's real title whenever that happens; legitimate title changes (route navigation) are left alone.
const SPAM_TITLE = /^\(\d+\)|new message|you have \d+|notification|message!/i;

export default function TitleGuard() {
  useEffect(() => {
    let lastGood = document.title;
    let restoring = false;

    const check = () => {
      if (restoring) return;
      const t = document.title;
      if (SPAM_TITLE.test(t)) {
        restoring = true;
        document.title = lastGood;
        restoring = false;
      } else {
        lastGood = t;
      }
    };

    const observer = new MutationObserver(check);
    observer.observe(document.head, { childList: true, subtree: true, characterData: true });
    check();
    return () => observer.disconnect();
  }, []);

  return null;
}
