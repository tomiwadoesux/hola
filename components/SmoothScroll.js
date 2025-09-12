'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      // Add these for better modal handling (prevents some event issues)
      prevent: true, // Auto-prevents default on certain gestures
      infinite: false,
    });

    // Expose globally for access in other components
    window.lenis = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      delete window.lenis; // Cleanup
    };
  }, []);

  return <>{children}</>;
}