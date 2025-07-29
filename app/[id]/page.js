"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { imgs } from "../../data/imgs";
import { gsap } from "gsap";
import SmoothScroll from "@/components/SmoothScroll";

export default function ProjectId({ params }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const modalRef = useRef(null);
  const clickedImageRef = useRef(null);

  const openModal = (index, event) => {
    setSelectedIndex(index);
    setModalOpen(true);

    // Store reference to clicked image
    clickedImageRef.current = event.currentTarget;
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedIndex(null);
  };

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

  // Get the project by id (params.id is string, imgs ids are string)
  const project = imgs.find((item) => item.id === params.id);
  if (!project) {
    return <div>Project not found</div>;
  }
  // Combine coverImage and images for display
  const allImages = [project.coverImage, ...(project.images || [])];

  return (
    <SmoothScroll>
    <section className="pb-20 pt-28 md:pt-36 px-5 md:px-14">
      <div className="absolute pt-4 lg:bottom-5 z-10 top-6 -z-10 left-5 md:left-14  text-[#343434] text-xs ">
        <h1 className=" text-2xl md:text-4xl  text-left  ">{project.for}</h1>
        <div className="flex flex-row ">
          {project.shout && (
            <a
              href={`${project.shoutLink}`}
              className="text-sm hover:opacity-70 transition-opacity underline-offset-2 underline block mt-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h5 className="text-xs md:text-sm">{project.shout}</h5>
            </a>
          )}
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="self-center scale-75 md:scale-90 lg:scale-100"
          >
            <path
              d="M4.22904 12.271L11.7715 4.72854M11.7715 4.72854H5.17185M11.7715 4.72854V11.3282"
              stroke="#343434"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      {/* <div className="absolute top-14  -z-10 right-14 text-right text-[#343434] text-xs fixed">
       <h3 className="italic"> ({project.id})</h3>
      </div> */}
      <div>
        {/* Main image */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-12  lg:gap-y-24 gap-x-5 md:gap-x-14">
          {allImages.map((img, index) => (
            <div
              key={index}
              className={`flex ${
                index % 2 === 0
                  ? "self-start justify-start"
                  : "self-end justify-end"
              }`}
              onClick={() => openModal(index)}
              style={{ cursor: "pointer" }}
            >
              <Image
                src={img}
                alt={project.alt || `Model ${index + 1}`}
                width={800}
                height={800}
                // className="w-[100%] block"
              />
            </div>
          ))}
        </div>
        {modalOpen && selectedIndex !== null && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <div
              className="relative max-w-4xl max-h-[90vh] p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col items-center">
                <Image
                  src={allImages[selectedIndex]}
                  alt={project.alt || `Model ${selectedIndex + 1}`}
                  width={800}
                  height={800}
                  className="rounded w-full max-h-[80vh] object-contain"
                />
              </div>
            </div>
          </div>
          )}
        </div>
      </section>
    </SmoothScroll>
  );
}
