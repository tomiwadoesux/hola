"use client";

import { useEffect, useRef, useState } from "react";

const LazyVideo = ({ src, poster, ...rest }) => {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("Loading video:", src);
          setShouldLoad(true);
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [src]);

  // If not ready to load, show poster
  if (!shouldLoad) {
    return (
      <div
        ref={videoRef}
        className="w-full h-auto rounded shadow bg-gray-100 flex items-center justify-center"
        style={{
          backgroundImage: poster ? `url(${poster})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          aspectRatio: "16/9", // Adjust based on your video aspect ratio
        }}
      >
        {!poster && (
          <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
        )}
      </div>
    );
  }

  // Once ready to load, render actual video
  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      autoPlay
      playsInline
      loop
      width="100%"
      className="w-full h-auto rounded shadow"
      onError={(e) => console.error("Video error:", src, e)}
      onLoadStart={() => console.log("Video loading started:", src)}
      onCanPlay={() => console.log("Video can play:", src)}
      {...rest}
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default LazyVideo;
