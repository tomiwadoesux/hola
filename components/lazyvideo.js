"use client";

import { useEffect, useRef, useState } from "react";

const LazyVideo = ({ src, poster, ...rest }) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Intersection entry:", entry); // ✅ debug
        if (entry.isIntersecting) {
          console.log("Video is visible:", src); // ✅ debug
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      preload="none"
      poster={poster}
      muted
      autoPlay
      playsInline
      loop
      width="100%"
      className="w-full h-auto rounded shadow"
      {...rest}
    >
      {isVisible && <source src={src} type="video/mp4" />}
      Your browser does not support the video tag.
    </video>
  );
};

export default LazyVideo;
