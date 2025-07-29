"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import AnimatedText from "@/components/AnimatedText";
import CurtainsGallery from "@/components/CurtainsGallery";
import SmoothScroll from "@/components/SmoothScroll";
import CurtainsPolaroids from "@/components/CurtainsPolaroids";
import { useEffect, useState, useRef } from "react";
import Photos from "@/components/Photos";
import Hero from "@/components/Hero";
import LetsTalk from "@/components/lets-talk";
import Ayotomcs from "@/components/ayotomcs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const LazyVideo = dynamic(() => import("../components/lazyvideo"), {
    ssr: false,
  });

  // Refs for the polaroids animation
  const polaroidsTextRef = useRef(null);
  const polaroidsContainerRef = useRef(null);
  const imagesTextRef = useRef(null);
  const imagesContainerRef = useRef(null);
  const polaroidsGridRef = useRef(null);
  const imagesGridRef = useRef(null);

  // Example video list
  const videoList = [
    { src: "/videos/03.mov", poster: "/images/22.web" },
    { src: "/videos/04.mov", poster: "/images/22.web" },
    { src: "/videos/07.mov", poster: "/images/22.web" },
    { src: "/videos/08.mov", poster: "/images/22.web" },
    { src: "/videos/10.mov", poster: "/images/22.web" },
    { src: "/videos/09.mov", poster: "/images/22.web" },

  ];

  // Polaroids scroll effect
  useEffect(() => {
    const polaroidsText = polaroidsTextRef.current;
    const polaroidsContainer = polaroidsContainerRef.current;
    const imagesText = imagesTextRef.current;
    const imagesContainer = imagesContainerRef.current;
    const polaroidsGrid = polaroidsGridRef.current;
    const imagesGrid = imagesGridRef.current;

    if (!imagesText || !imagesContainer || !imagesGrid) return;
    if (!polaroidsText || !polaroidsContainer || !polaroidsGrid) return;

    // Set initial state - start at 1.4 scale
    gsap.set(polaroidsText, {
      scale: 1.0,
      opacity: 1,
    });

    gsap.set(imagesText, {
      scale: 1.0,
      opacity: 1,
    });

    // Create the main scroll trigger for scaling and pinning
    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: polaroidsContainer,
        start: "top 40%",
        end: () => `+=${polaroidsGrid.offsetHeight}`,
        scrub: 1,
        pin: polaroidsText,
        pinSpacing: false,
        anticipatePin: 1,
      },
      scrollTrigger: {
        trigger: imagesContainer,
        start: "top 40%",
        end: () => `+=${imagesGrid.offsetHeight}`,
        scrub: 1,
        pin: imagesText,
        pinSpacing: false,
        anticipatePin: 1,
      },
    });

    // Scale down animation
    mainTimeline
      .to(polaroidsText, {
        scale: 0.8,
        opacity: 1,
        duration: 0.1,
        ease: "power1.Out",
      })
      // Keep it scaled and pinned
      .to(polaroidsText, {
        scale: 0.8,
        opacity: 1,
        duration: 0.1,
        ease: "power1.In",
      })
      .to(imagesText, {
        scale: 0.8,
        opacity: 1,
        duration: 0.1,
        ease: "power1.Out",
      })
      // Keep it scaled and pinned
      .to(imagesText, {
        scale: 0.8,
        opacity: 1,
        duration: 0.1,
        ease: "power1.In",
      });

    // Unpin when approaching photos section
    ScrollTrigger.create({
      trigger: polaroidsContainer,
      start: "bottom-40% center",
      onEnter: () => {
        // Just unpin and let it scroll naturally
        gsap.set(polaroidsText, {
          clearProps: "all",
        });
      },
      // onLeaveBack: () => {
      //   // Return to pinned state when scrolling back up
      //   gsap.to(polaroidsText, {
      //     opacity: 1,
      //     scale: 0.9,
      //     y: 0,
      //     duration: 0.8,
      //     ease: "power2.inOut"
      //   });
      // }
    });

    ScrollTrigger.create({
      trigger: imagesContainer,
      start: "bottom-40% center",
      onEnter: () => {
        // Just unpin and let it scroll naturally
        gsap.set(imagesText, {
          clearProps: "all",
        });
      },
      // onLeaveBack: () => {
      //   // Return to pinned state when scrolling back up
      //   gsap.to(polaroidsText, {
      //     opacity: 1,
      //     scale: 0.9,
      //     y: 0,
      //     duration: 0.8,
      //     ease: "power2.inOut"
      //   });
      // }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <SmoothScroll>
      <section className="">
        <Hero />

        {/* Polaroids Section with Animation */}
        <div id="Polaroids" ref={polaroidsContainerRef} className="relative">
          {/* Pinned/Fixed Text */}
          <div className="relative z-10 flex justify-center">
            <AnimatedText
              text="POLAROIDS"
              className="self-center text-[#343434] py-11 text-center text-4xl md:text-6xl lg:text-6xl"
            />
          </div>

          {/* Scrolling Images Grid */}
          <div
            ref={polaroidsGridRef}
            className="relative z-20 px-5 md:px-12 lg:px-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-y-24 lg:gap-y-36 gap-x-5 md:gap-x-12 lg:gap-x-14"
          >
            <div className="">
              <Image
                src="/images/23.webp"
                alt="Model"
                width={800}
                height={600}
                className="bg-[#F2F2F2] shadow-xs px-3 md:px-5 pt-3 md:pt-6 pb-10 md:pb-20"
              />
            </div>
            <div className="">
              <Image
                src="/images/25.webp"
                alt="01"
                height={700}
                width={900}
                className="bg-[#F2F2F2] shadow-sm px-3 md:px-5 pt-3 md:pt-6 pb-10 md:pb-20"
              />
            </div>
            <div className="">
              <Image
                src="/images/61.webp"
                alt="01"
                height={700}
                width={900}
                className="bg-[#F2F2F2] shadow-sm px-3 md:px-5 pt-3 md:pt-6 pb-10 md:pb-20"
              />
            </div>
            <div className="">
              <Image
                src="/images/27.webp"
                alt="01"
                height={700}
                width={900}
                className="bg-[#F2F2F2] shadow-sm px-3 md:px-5 pt-3 md:pt-6 pb-10 md:pb-20"
              />
            </div>
            <div className="">
              <Image
                src="/images/29.webp"
                alt="01"
                height={700}
                width={900}
                className="bg-[#F2F2F2] shadow-sm px-3 md:px-5 pt-3 md:pt-6 pb-10 md:pb-20"
              />
            </div>
            <div className="">
              <Image
                src="/images/63.webp"
                alt="01"
                height={700}
                width={900}
                className="bg-[#F2F2F2] shadow-sm px-3 md:px-5 pt-3 md:pt-6 pb-10 md:pb-20"
              />
            </div>
            <div className="">
              <Image
                src="/images/26.webp"
                alt="01"
                height={700}
                width={900}
                className="bg-[#F2F2F2] shadow-sm px-3 md:px-5 pt-3 md:pt-6 pb-10 md:pb-20"
              />
            </div>
            <div className="">
              <Image
                src="/images/62.webp"
                alt="01"
                height={700}
                width={900}
                className="bg-[#F2F2F2] shadow-sm px-3 md:px-5 pt-3 md:pt-6 pb-10 md:pb-20"
              />
            </div>
          </div>
        </div>

        {/* Photos Section */}
        <div
          ref={imagesContainerRef}
          id="photos"
          className="flex h-full w-full flex-col relative z-30"
        >
          <AnimatedText
            text="PHOTOS"
            className="self-center text-[#343434] py-11 text-center text-4xl md:text-6xl lg:text-6xl"
          />
          <div ref={imagesGridRef}>
            <Photos />
          </div>
        </div>

        {/* Videos Section */}
        <div id="videos" className="flex pt-11 flex-col">
          <AnimatedText
            text="VIDEOS"
            className="self-center text-[#343434] py-11 text-center text-4xl md:text-6xl lg:text-6xl"
          />
        </div>
        <div className="gap-3 pb-8 flex-col flex">
          <div className="px-5 md:px-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-5 md:gap-x-16 gap-y-20 min-h-screen relative z-10">
            {videoList.map((video, idx) => (
              <LazyVideo
                key={idx}
                src={video.src}
                poster={video.poster}
                muted
                width="100%"
                className="w-full h-auto"
              />
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col pt-10 pb-4 gap-1 md:gap-5 px-5 md:px-16">
          <div className="flex pb-0 lg:pb-2 self-end md:self-start">
            <a href="mailto:Olaoluwaakinwale89@gmail.com">
              <h5 className="text-xs md:text-sm text-[#343434] underline underline-offset-3">
                Olaoluwaakinwale89@gmail.com
              </h5>
            </a>
          </div>
          <LetsTalk />
          <div className="flex pt-2 md:pt-0 self-start md:self-end">
            <div>
              <Ayotomcs />
            </div>
          </div>
        </div>
      </section>
    </SmoothScroll>
  );
}
