"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function Polaroids() {
  const [rotatedImageIndex, setRotatedImageIndex] = useState(null);

  const toggleScroll = (disable) => {
    const smoothScrollContainer =
      document.querySelector("[data-scroll-container]") ||
      document.querySelector(".smooth-scroll") ||
      window;

    if (disable) {
      const scrollY =
        (smoothScrollContainer === window
          ? window.pageYOffset
          : smoothScrollContainer.scrollTop) || 0;

      document.body.setAttribute("data-scroll-y", scrollY);

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100vw";
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = parseInt(
        document.body.getAttribute("data-scroll-y") || "0",
        10
      );

      [
        "position",
        "top",
        "left",
        "right",
        "width",
        "height",
        "overflow",
      ].forEach((style) => {
        document.body.style[style] = "";
      });

      if (smoothScrollContainer === window) {
        window.scrollTo(0, scrollY);
      } else {
        smoothScrollContainer.scrollTop = scrollY; // ✅ FIXED
      }

      document.body.removeAttribute("data-scroll-y");
    }
  };

  const handleImageClick = (index, event) => {
    event.stopPropagation();
    const imageElement = event.currentTarget;

    if (rotatedImageIndex === index) {
      // Reset other images
      const allPolaroids = document.querySelectorAll("[data-image-index]");
      allPolaroids.forEach((polaroid, idx) => {
        if (idx !== index) {
          gsap.to(polaroid, {
            duration: 0.6,
            filter: "blur(0px)",
            ease: "power2.inOut",
            onComplete: () => {
              polaroid.style.pointerEvents = "auto";
            },
          });
        }
      });

      // Animate back
      gsap.to(imageElement, {
        duration: 0.6,
        rotationY: 0,
        scale: 1,
        x: 0,
        y: 0,
        zIndex: 1,
        ease: "power2.inOut",
        onComplete: () => {
          setRotatedImageIndex(null);
          toggleScroll(false);
        },
      });
    } else {
      const rect = imageElement.getBoundingClientRect();
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const translateX = centerX - rect.left - rect.width / 2;
      const translateY = centerY - rect.top - rect.height / 2;

      toggleScroll(true);

      const allPolaroids = document.querySelectorAll("[data-image-index]");
      allPolaroids.forEach((polaroid, idx) => {
        if (idx !== index) {
          polaroid.style.pointerEvents = "none";
          gsap.to(polaroid, {
            duration: 0.6,
            filter: "blur(8px)",
            ease: "power2.inOut",
          });
        }
      });

      // Determine scale based on device width
      const isMobile = window.innerWidth <= 768; // You can adjust the breakpoint as needed
      const scaleValue = isMobile ? 1.5 : 1.3;

      gsap.to(imageElement, {
        duration: 0.6,
        rotationY: 360,
        scale: scaleValue,
        x: translateX,
        y: translateY,
        zIndex: 9999,
        ease: "power2.inOut",
        onComplete: () => {
          setRotatedImageIndex(index);
        },
      });
    }
  };

  const handleBackgroundClick = () => {
    if (rotatedImageIndex !== null) {
      const rotatedImage = document.querySelector(
        `[data-image-index="${rotatedImageIndex}"]`
      );
      if (rotatedImage) {
        handleImageClick(rotatedImageIndex, {
          stopPropagation: () => {},
          currentTarget: rotatedImage,
        });
      }
    }
  };

  useEffect(() => {
    return () => {
      toggleScroll(false);
    };
  }, []);

  return (
    <section onClick={handleBackgroundClick}>
      <div className="relative z-20 px-5 md:px-12 lg:px-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-y-24 lg:gap-y-36 gap-x-5 md:gap-x-12 lg:gap-x-14">
        {[23, 25, 61, 27, 29, 63, 26, 62].map((num, i) => (
          <div
            key={i}
            className="cursor-pointer"
            onClick={(e) => handleImageClick(i, e)}
            data-image-index={i}
          >
            <Image
              src={`/images/${num}.webp`}
              alt={`Polaroid ${i}`}
              width={800}
              height={600}
              className="bg-[#F2F2F2]  shadow-xs px-3 md:px-5 pt-3 md:pt-6 pb-10 md:pb-18"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
