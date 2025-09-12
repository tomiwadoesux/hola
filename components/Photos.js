"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { imgs } from "../data/imgs";
import gsap from "gsap";

export default function Photos() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [shuffledImgs, setShuffledImgs] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();

  const borderBoxRef = useRef(null);
  const underlineRefs = useRef([]);

  // shuffle
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // detect device
  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: none) and (pointer: coarse)");
    setIsMobile(mediaQuery.matches);

    const handleChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // shuffle on mount
  useEffect(() => {
    setShuffledImgs(shuffleArray(imgs));
  }, []);

  // handle navigation with blur
  const handleClick = (id) => {
    setIsNavigating(true);
    router.push(`/${id}`);
  };

  // Animate border reveal
  useEffect(() => {
    if (borderBoxRef.current) {
      gsap.fromTo(
        borderBoxRef.current,
        { clipPath: "inset(0 0 0 100%)" }, // hidden from right
        { clipPath: "inset(0 0 0 0%)", duration: 1.2, ease: "power2.out" }
      );
    }
  }, []);

  // Animate underline (mobile only, continuous loop)
  useEffect(() => {
    if (isMobile && underlineRefs.current.length > 0) {
      underlineRefs.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { scaleX: 0, transformOrigin: "left" },
          {
            scaleX: 1,
            duration: 2,
            repeat: -1,
            yoyo: true,
            repeatDelay: 2,
            ease: "power2.inOut",
          }
        );
      });
    }
  }, [isMobile, shuffledImgs]);

  // Animate underline on hover (desktop only)
  useEffect(() => {
    if (!isMobile && hoveredIndex !== null) {
      const el = underlineRefs.current[hoveredIndex];
      if (el) {
        gsap.fromTo(
          el,
          { scaleX: 0, transformOrigin: "left" },
          { scaleX: 1, duration: 0.5, ease: "power2.out" }
        );
      }
    }
  }, [hoveredIndex, isMobile]);

  return (
    <div className={`relative z-10 min-h-screen ${isNavigating ? "blur-sm" : ""}`}>
      {/* Images */}
      <div className="px-5 md:px-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-5 md:gap-x-16 md:gap-y-16 gap-y-5 content-end mt-10">
        {shuffledImgs.map((project, index) => (
          <div
            key={index}
            className="block group cursor-pointer"
            onMouseEnter={() => !isMobile && setHoveredIndex(index)}
            onMouseLeave={() => !isMobile && setHoveredIndex(null)}
            onClick={() => handleClick(project.id)}
          >
            <Image
              src={project.coverImage}
              alt={project.alt || `Model ${index + 1}`}
              width={800}
              height={800}
              className={`w-full block ${
                !isMobile && hoveredIndex !== null && hoveredIndex !== index
                  ? "grayscale"
                  : ""
              }`}
            />
            <h5 className="text-[9px] md:text-xs pt-2 text-[#343434]">
              <span className="relative block w-fit text-xs text-[#464646]">
                {project.for}
                {/* underline */}
                <span
                  ref={(el) => (underlineRefs.current[index] = el)}
                  className="absolute left-0 bottom-0 h-[1px] w-full bg-[#343434] scale-x-0"
                />
              </span>
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}
