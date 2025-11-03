'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function ScrollManager() {
  // Disable automatic scroll restoration (refresh/back-forward)
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  // Always start at top on route changes (and on first mount)
  const pathname = usePathname();
  const search = useSearchParams();
  useEffect(() => {
    // instant jump to top
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
}
