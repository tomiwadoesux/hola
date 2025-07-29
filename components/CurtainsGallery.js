"use client";
import { useEffect, useRef } from "react";

export default function CurtainsGallery() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Basic initialization for Curtains.js
    if (typeof window !== "undefined" && window.Curtains) {
      const curtains = new window.Curtains({
        container: containerRef.current,
        pixelRatio: Math.min(1.5, window.devicePixelRatio),
      });

      // Cleanup
      return () => {
        if (curtains) {
          curtains.dispose();
        }
      };
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full h-screen">
      <div className="flex items-center justify-center h-full">
        <h1 className="text-2xl font-bold text-gray-800">Nil</h1>
      </div>
    </div>
  );
}
