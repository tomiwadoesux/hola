"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { imgs } from "../data/imgs";

export default function Photos() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [shuffledImgs, setShuffledImgs] = useState([]);

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const openModal = (index) => {
    setSelectedIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedIndex(null);
  };

  // Shuffle images on component mount
  useEffect(() => {
    setShuffledImgs(shuffleArray(imgs));
  }, []);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Clean up in case the component unmounts while modal is open
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  return (
    <div className="px-5 md:px-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-5 md:gap-x-16 gap-y-20 min-h-screen relative z-10 content-end">
      {shuffledImgs.map((project, index) => (
        <Link key={index} href={`/${project.id}`} className="block group">
          <div
            className="relative   w-full"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => openModal(index)}
            style={{ cursor: "pointer" }}
          >
            <Image
              src={project.coverImage}
              alt={project.alt || `Model ${index + 1}`}
              width={800}
              height={800}
              className={`w-[100%]  block  ${
                hoveredIndex !== null && hoveredIndex !== index
                  ? "grayscale"
                  : ""
              }`}
            />
          </div>
          {/* <h5 className="self-start z-20 text-xs text-[#464646] mt-2 underline underline-offset-2"> {project.for}</h5> */}
          <h5 className="text-xs pt-2 text-[#343434]">
            <span
              className=" underline underline-offset-4 lg:no-underline
        relative
        after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full
        after:bg-[#343434] after:origin-left after:scale-x-0 text-xs text-[#464646]
        group-hover:after:scale-x-100 after:transition-transform after:duration-300
      "
            >
              {project.for}
            </span>
          </h5>
        </Link>
      ))}
    </div>
  );
}
