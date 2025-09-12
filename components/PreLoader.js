"use client";

import { useEffect, useState } from "react";

export default function PreLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loader after hydration + small delay
    const timer = setTimeout(() => setIsVisible(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transition-opacity duration-500">
      {/* Loader bar */}
      <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full w-full bg-black animate-[loader_1s_ease-in-out_infinite]" />
      </div>
      <p className="mt-3 text-sm font-medium text-black tracking-wide">
        Loading…
      </p>
    </div>
  );
}
