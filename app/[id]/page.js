"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import SmoothScroll from "@/components/SmoothScroll";

import { imgs } from "@/data/imgs";

export default function ProjectId({ params }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [project, setProject] = useState(null);
  const modalRef = useRef(null);
  const router = useRouter();
  const clickedImageRef = useRef(null);
  const { id } = React.use(params); // Unwrap the params Promise

  useEffect(() => {
    if (id) {
      const projectData = imgs.find((item) => item.id === id);
      setProject(projectData);
    }
  }, [id]);

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

  const handleNameClick = () => {
    router.push("/#photos");
  
    // Wait for navigation, then scroll
    setTimeout(() => {
      const photosSection = document.getElementById("photos"); // ✅ no #
      if (photosSection) {
        photosSection.scrollIntoView({
          behavior: "smooth",
          block: "center", // or "start"
        });
      }
    }, 300); // give enough time for navigation + rendering
  };
  
  const pathname = usePathname();

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem("scroll-" + pathname, window.scrollY.toString());
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      sessionStorage.setItem("scroll-" + pathname, window.scrollY.toString());
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [pathname]);

  useEffect(() => {
    const saved = sessionStorage.getItem("scroll-" + pathname);
    if (saved) {
      window.scrollTo(0, parseInt(saved, 10));
    }
  }, [pathname]);

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

  // Add loading state
  if (!project) {
    return <div>Loading...</div>;
  }

  // Combine coverImage and images for display
  const allImages = [project.coverImage, ...(project.images || [])];

  return (
    <SmoothScroll>
      <section className="pb-20 pt-48 md:pt-48 lg:pt-48 px-5 md:px-14 relative">
        <div
          className="absolute pt-4 lg:bottom-5 z-10 top-6 text-nowrap sm:hidden md:block left-5 md:left-14 lg:left-14 text-[#000] opacity-60 md:text-2xl lg:text-2xl cursor-pointer hover:opacity-80 transition-opacity"
          onClick={handleNameClick}
        >
          <h1 className="pl-3 text-2xl md:text-4xl lg:text-3xl">ÀKÍNWÁLÉ</h1>
          <h1 className="text-2xl md:text-4xl lg:text-3xl">ỌLÀÓLÚWÀ</h1>
        </div>

        <div className="absolute pt-4 px-5 md:px-12 w-100 lg:bottom-5 pointer-events-none z-10 top-6 sm:right-5 md:right-3 text-[#343434] text-xs">
          <div className="flex gap-2 items-end flex-col">
            <div className="w-50 md:w-100">
              <h1 className="text-xl md:text-3xl text-right">{project.for}</h1>
            </div>
            <div className="justify-items-end flex flex-col gap-1.5 lg:gap-0 text-right pointer-events-auto w-full">
              {/* Brand section */}
              {project.brand && (
                <div className="flex justify-end flex-row">
                  <a
                    href={project.brandLink || "#"}
                    className="text-sm transition-opacity block mt-0 group text-right"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h5 className="text-xs md:text-sm flex flex-row justify-end gap-1">
                      <span className="whitespace-nowrap">Brand: </span>
                      <span className="underline-offset-2 underline lg:no-underline relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:bg-[#343434] after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                        {project.brand}
                      </span>
                    </h5>
                  </a>
                </div>
              )}

              {/* Stylist section */}
              {project.stylist && (
                <div className="flex justify-end flex-row">
                  <a
                    href={project.stylistLink || "#"}
                    className="text-sm transition-opacity block mt-0 group text-right"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h5 className="text-xs md:text-sm flex flex-row justify-end gap-1">
                      <span className="whitespace-nowrap">Stylist: </span>
                      <span className="underline-offset-2 underline lg:no-underline relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:bg-[#343434] after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                        {project.stylist}
                      </span>
                    </h5>
                  </a>
                </div>
              )}

              {/* Photographer section */}
              {project.photographer && (
                <div className="flex justify-end flex-row">
                  <a
                    href={project.photographerLink || "#"}
                    className="text-sm transition-opacity block mt-0 group text-right"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h5 className="text-xs md:text-sm flex flex-row justify-end gap-1">
                      <span className="whitespace-nowrap">Photographer: </span>
                      <span className="underline-offset-2 underline lg:no-underline relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:bg-[#343434] after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                        {project.photographer}
                      </span>
                    </h5>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          {/* Main image gallery */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-5 md:gap-y-14 lg:gap-y-14 gap-x-5 md:gap-x-14">
            {allImages.map((img, index) => (
              <div
                key={index}
                className={`flex ${
                  index % 2 === 0
                    ? "self-start justify-start"
                    : "self-end justify-end"
                }`}
                onClick={(event) => openModal(index, event)}
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={img}
                  alt={project.alt || `Model ${index + 1}`}
                  width={800}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>

          {/* Modal */}
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