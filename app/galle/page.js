"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Galle() {
  const images = [
    "/images/03.webp",
    "/images/44.webp",
    "/images/16.webp",
    "/images/35.webp",
    "/images/53.webp",
    "/images/07.webp",
    "/images/41.webp",
    "/images/19.webp",
    "/images/46.webp",
    "/images/13.webp",
    "/images/31.webp",
    "/images/56.webp",
    "/images/22.webp",
    "/images/48.webp",
    "/images/05.webp",
    "/images/37.webp",
    "/images/20.webp",
    "/images/57.webp",
    "/images/11.webp",
    "/images/33.webp",
    "/images/47.webp",
    "/images/15.webp",
    "/images/54.webp",
    "/images/36.webp",
    "/images/21.webp",
    "/images/50.webp",
    "/images/38.webp",
    "/images/23.webp",
    "/images/06.webp",
    "/images/45.webp",
    "/images/32.webp",
    "/images/64.webp",
    "/images/18.webp",
    "/images/55.webp",
    "/images/42.webp",
    "/images/51.webp",
    "/images/30.webp",
    "/images/43.webp",
    "/images/39.webp",
    "/images/17.webp",
    "/images/40.webp",
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="px-5 md:px-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 md:gap-x-16 gap-y-20 min-h-screen  relative z-10">
      {images.map((img, index) => (
        <Link
          key={index}
          href={`/carro/${index}`}
          className="block group"
        >
          <div
            className="relative w-full"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={img}
              alt={`Model ${index + 1}`}
              width={800}
              height={800}
              className="block"
            />
            {hoveredIndex !== null && hoveredIndex !== index && (
              <div className="absolute inset-0 bg-black opacity-60 pointer-events-none" />
            )}
          </div>
          <h5 className="self-start z-20 text-xs text-[#343434] mt-2"></h5>
        </Link>
      ))}
    </div>
  );
}
