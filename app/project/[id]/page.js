"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { imgs } from "../../../data/imgs";

export default function ProjectId({ params }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => {
    setSelectedIndex(index);
    setModalOpen(true);
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
    <section className="pb-20 pt-40 md:pt-48 px-5 md:px-14">
      <div className="absolute lg:bottom-5 top-14 -z-10 left-5 md:left-14 inset-0 text-[#343434] text-xs fixed">
        <h1 className="text-sm md:text-xl lg:text-2xl w-48 md:w-100 text-left">
          {project.description}
        </h1>
        <h5 className=" underline text-xs md:text-sm underline-offset-2 text-left pt-2 ">
          {project.shout}
        </h5>
      </div>
      <div className="absolute top-14  -z-10 right-14 text-right text-[#343434] text-xs fixed">
        <h3 className="italic"> ({project.id})</h3>
      </div>
      <div>
        {/* Main image */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-20  lg:gap-y-40 gap-x-5 md:gap-x-14">
          {allImages.map((img, index) => (
            <div
              key={index}
              className={`flex ${index % 2 === 0 ? "self-start justify-start" : "self-end justify-end"}`}
              onClick={() => openModal(index)}
              style={{ cursor: "pointer" }}
            >
              <Image
                src={img}
                alt={project.alt || `Model ${index + 1}`}
                width={800}
                height={800}
                className="w-[100%] block"
              />
            </div>
          ))}
        </div>
        {modalOpen && selectedIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 "
            onClick={closeModal}
          >
            <div
              className=" shadow-lg p-6 w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col items-center">
                <Image
                  src={allImages[selectedIndex]}
                  alt={project.alt || `Model ${selectedIndex + 1}`}
                  width={800}
                  height={800}
                  className="mb-4 rounded max-w-full max-h-[80vh] object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

