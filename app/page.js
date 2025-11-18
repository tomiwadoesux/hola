"use client"
import Image from "next/image"

import dynamic from "next/dynamic"
import AnimatedText from "@/components/AnimatedText"
import SmoothScroll from "@/components/SmoothScroll"
import { useEffect, useState, useRef } from "react"
import Photos from "@/components/Photos"
import Hero2 from "@/components/Hero2"
import LetsTalk from "@/components/lets-talk"
import Ayotomcs from "@/components/ayotomcs"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Polaroids from "@/components/Polaroids"

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const LazyVideo = dynamic(() => import("../components/lazyvideo"), {
    ssr: false,
  })

  // Refs for the polaroids animation
  const polaroidsTextRef = useRef(null)
  const polaroidsContainerRef = useRef(null)
  const imagesTextRef = useRef(null)
  const imagesContainerRef = useRef(null)
  const polaroidsGridRef = useRef(null)
  const imagesGridRef = useRef(null)

  // Add useRef for the videos container
  const videosContainerRef = useRef(null)
  const videosSectionRef = useRef(null)

  // State to track if videos should start loading
  const [shouldLoadVideos, setShouldLoadVideos] = useState(false)

  const [rotatedImageIndex, setRotatedImageIndex] = useState(null)

  const allImages = [
    "/images/23.webp",
    "/images/25.webp",
    "/images/61.webp",
    "/images/27.webp",
    "/images/29.webp",
    "/images/63.webp",
    "/images/26.webp",
    "/images/62.webp",
  ]

  const toggleScroll = (disable) => {
    if (disable) {
      const scrollY = window.pageYOffset; // Native position
      document.body.setAttribute("data-scroll-y", scrollY);
  
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100vw";
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = parseInt(document.body.getAttribute("data-scroll-y") || "0", 10);
  
      // Restore FIRST while fixed
      window.scrollTo(0, scrollY);
  
      // THEN clear styles
      ["position", "top", "left", "right", "width", "height", "overflow"].forEach(
        (style) => {
          document.body.style[style] = "";
        }
      );
  
      document.body.removeAttribute("data-scroll-y");
    }
  };

  const handleImageClick = (index, event) => {
    event.stopPropagation()
    const imageElement = event.currentTarget

    if (rotatedImageIndex === index) {
      const allPolaroids = document.querySelectorAll("[data-image-index]")
      allPolaroids.forEach((polaroid, idx) => {
        if (idx !== index) {
          gsap.to(polaroid, {
            duration: 0.6,
            filter: "blur(0px)",
            ease: "power2.inOut",
            onComplete: () => {
              polaroid.style.pointerEvents = "auto"
            },
          })
        }
      })

      gsap.to(imageElement, {
        duration: 0.6,
        rotationY: 0,
        scale: 1,
        x: 0,
        y: 0,
        zIndex: 1,
        ease: "power2.inOut",
        onComplete: () => {
          setRotatedImageIndex(null)
          toggleScroll(false) // Enable scroll
        },
      })
    } else {
      // Get image position and window center
      const rect = imageElement.getBoundingClientRect()
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2

      // Calculate translate values to center the image
      const translateX = centerX - rect.left - rect.width / 2
      const translateY = centerY - rect.top - rect.height / 2

      toggleScroll(true)

      const allPolaroids = document.querySelectorAll("[data-image-index]")
      allPolaroids.forEach((polaroid, idx) => {
        if (idx !== index) {
          polaroid.style.pointerEvents = "none"
          gsap.to(polaroid, {
            duration: 0.6,
            filter: "blur(8px)",
            ease: "power2.inOut",
          })
        }
      })

      // Rotate and center image
      gsap.to(imageElement, {
        duration: 0.6,
        rotationY: 360,
        scale: 1.3,
        x: translateX,
        y: translateY,
        zIndex: 9999,
        ease: "power2.inOut",
        onComplete: () => {
          setRotatedImageIndex(index)
        },
      })
    }
  }

  const handleBackgroundClick = () => {
    if (rotatedImageIndex !== null) {
      // Find the rotated image and flip it back
      const rotatedImage = document.querySelector(`[data-image-index="${rotatedImageIndex}"]`)
      if (rotatedImage) {
        handleImageClick(rotatedImageIndex, {
          stopPropagation: () => {},
          currentTarget: rotatedImage,
        })
      }
    }
  }

  // Clean up scroll lock on component unmount or when rotatedImageIndex changes
  useEffect(() => {
    return () => {
      toggleScroll(false) // Ensure scroll is enabled on cleanup
    }
  }, [])

  useEffect(() => {
    if (rotatedImageIndex === null) {
      toggleScroll(false)
    }
  }, [rotatedImageIndex])

  // Polaroids scroll effect
  useEffect(() => {
    const polaroidsText = polaroidsTextRef.current
    const polaroidsContainer = polaroidsContainerRef.current
    const imagesText = imagesTextRef.current
    const imagesContainer = imagesContainerRef.current
    const polaroidsGrid = polaroidsGridRef.current
    const imagesGrid = imagesGridRef.current

    if (!imagesText || !imagesContainer || !imagesGrid) return
    if (!polaroidsText || !polaroidsContainer || !polaroidsGrid) return

    // Set initial state - start at 1.4 scale
    gsap.set(polaroidsText, {
      scale: 1.0,
      opacity: 1,
    })

    gsap.set(imagesText, {
      scale: 1.0,
      opacity: 1,
    })

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
    })

    const imagesTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: imagesContainer,
        start: "top 40%",
        end: () => `+=${imagesGrid.offsetHeight}`,
        scrub: 1,
        pin: imagesText,
        pinSpacing: false,
        anticipatePin: 1,
      },
    })

    // Scale down animation
    mainTimeline
      .to(polaroidsText, {
        scale: 0.8,
        opacity: 1,
        duration: 0.1,
        ease: "power1.Out",
      })
      .to(polaroidsText, {
        scale: 0.8,
        opacity: 1,
        duration: 0.1,
        ease: "power1.In",
      })

    imagesTimeline
      .to(imagesText, {
        scale: 0.8,
        opacity: 1,
        duration: 0.1,
        ease: "power1.Out",
      })
      .to(imagesText, {
        scale: 0.8,
        opacity: 1,
        duration: 0.1,
        ease: "power1.In",
      })

    // Unpin when approaching photos section
    ScrollTrigger.create({
      trigger: 
      Container,
      start: "bottom-40% center",
      onEnter: () => {
        gsap.set(polaroidsText, {
          clearProps: "all",
        })
      },
    })

    ScrollTrigger.create({
      trigger: imagesContainer,
      start: "bottom-40% center",
      onEnter: () => {
        gsap.set(imagesText, {
          clearProps: "all",
        })
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  // Enhanced video preloading system
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "300px 0px 300px 0px", // Start loading 300px before the videos section
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Videos section approaching - starting to load videos")
          setShouldLoadVideos(true)
          observer.unobserve(entry.target)
        }
      })
    }, options)

    if (videosSectionRef.current) {
      observer.observe(videosSectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

// Example video list - move it ABOVE the effect
const videoList = [
  { src: "/videos/03.mov", poster: "/icons/video-player.svg" },
  { src: "/videos/04.mov", poster: "/icons/video-player.svg" },
  { src: "/videos/11.mp4", poster: "/icons/video-player.svg" },

  { src: "/videos/07.mov", poster: "/icons/video-player.svg" },
  { src: "/videos/08.mov", poster: "/icons/video-player.svg" },
  { src: "/videos/12.mp4", poster: "/icons/video-player.svg" },

  { src: "/videos/10.mov", poster: "/icons/video-player.svg" },
  { src: "/videos/09.mov", poster: "/icons/video-player.svg" },
  { src: "/videos/13.mp4", poster: "/icons/video-player.svg" },

]

// Enhanced video preloading system
useEffect(() => {
  if (!shouldLoadVideos) return

  console.log("Preloading videos...")
  videoList.forEach((video, index) => {
    const videoElement = document.createElement("video")
    videoElement.preload = "metadata"
    videoElement.src = video.src

    videoElement.addEventListener("loadedmetadata", () => {
      console.log(`Video ${index + 1} metadata loaded`)
    })

    videoElement.addEventListener("canplaythrough", () => {
      console.log(`Video ${index + 1} can play through`)
    })
  })
}, [shouldLoadVideos, videoList])


  return (
    <SmoothScroll>
      <section className="" onClick={handleBackgroundClick}>
        <div className="">
          <Hero2 />
        </div>

        {/* Polaroids Section with Animation */}
        <div id="Polaroids" ref={polaroidsContainerRef} className="relative">
          {/* Pinned/Fixed Text */}
          <div className="relative z-10 flex justify-center">
            <AnimatedText
              ref={polaroidsTextRef}
              text="POLAROIDS"
              className="self-center text-[#343434] py-11 text-center text-4xl md:text-6xl lg:text-6xl"
            />
          </div>

          {/* Scrolling Images Grid */}
          {/* <div
            ref={polaroidsGridRef}
            className="relative z-20 px-5 md:px-12 lg:px-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-y-24 lg:gap-y-36 gap-x-5 md:gap-x-12 lg:gap-x-14"
          >
            <div className="cursor-pointer" onClick={(e) => handleImageClick(0, e)} data-image-index="0">
              <Image
                src="/images/23.webp"
                alt="Model"
                width={800}
                height={600}
                className="bg-[#F2F2F2] shadow-xs px-3 md:px-5 pt-3 md:pt-6 pb-10 md:pb-20"
              />
            </div>
            <div className="cursor-pointer" onClick={(e) => handleImageClick(1, e)} data-image-index="1">
              <Image
                src="/images/25.webp"
                alt="01"
                height={700}
                width={900}
                className="bg-[#F2F2F2] shadow-sm px-3 md:px-5 pt-3 md:pt-6 pb-10 md:pb-20"
              />
            </div>
            <div className="cursor-pointer" onClick={(e) => handleImageClick(2, e)} data-image-index="2">
              <Image
                src="/images/61.webp"
                alt="01"
                height={700}
                width={900}
                className="bg-[#F2F2F2] shadow-sm px-3 md:px-5 pt-3 md:pt-6 pb-10 md:pb-20"
              />
            </div>
            <div className="cursor-pointer" onClick={(e) => handleImageClick(3, e)} data-image-index="3">
              <Image
                src="/images/27.webp"
                alt="01"
                height={700}
                width={900}
                className="bg-[#F2F2F2] shadow-sm px-3 md:px-5 pt-3 md:pt-6 pb-10 md:pb-20"
              />
            </div>
            <div className="cursor-pointer" onClick={(e) => handleImageClick(4, e)} data-image-index="4">
              <Image
                src="/images/29.webp"
                alt="01"
                height={700}
                width={900}
                className="bg-[#F2F2F2] shadow-sm px-3 md:px-5 pt-3 md:pt-6 pb-10 md:pb-20"
              />
            </div>
            <div className="cursor-pointer" onClick={(e) => handleImageClick(5, e)} data-image-index="5">
              <Image
                src="/images/63.webp"
                alt="01"
                height={700}
                width={900}
                className="bg-[#F2F2F2] shadow-sm px-3 md:px-5 pt-3 md:pt-6 pb-10 md:pb-20"
              />
            </div>
            <div className="cursor-pointer" onClick={(e) => handleImageClick(6, e)} data-image-index="6">
              <Image
                src="/images/26.webp"
                alt="01"
                height={700}
                width={900}
                className="bg-[#F2F2F2] shadow-sm px-3 md:px-5 pt-3 md:pt-6 pb-10 md:pb-20"
              />
            </div>
            <div className="cursor-pointer" onClick={(e) => handleImageClick(7, e)} data-image-index="7">
              <Image
                src="/images/62.webp"
                alt="01"
                height={700}
                width={900}
                className="bg-[#F2F2F2] shadow-sm px-3 md:px-5 pt-3 md:pt-6 pb-10 md:pb-20"
              />
            </div>
          </div> */}
          <Polaroids/>
        </div>

        {/* Photos Section */}
        <div ref={imagesContainerRef} id="photos" className="flex h-full pt-2 w-full flex-col relative z-30">
          <AnimatedText
            ref={imagesTextRef}
            text="PHOTOS"
            className="self-center text-[#343434] py-7 md:py-11 text-center text-4xl md:text-6xl lg:text-6xl"
          />
          <div ref={imagesGridRef}>
            <Photos />
          </div>
        </div>

        {/* Videos Section */}
        <div ref={videosSectionRef} id="videos" className="flex pt-11 flex-col">
          <AnimatedText
            text="VIDEOS"
            className="self-center text-[#343434] py-11 text-center text-4xl md:text-6xl lg:text-6xl"
          />

          <div className="gap-3 pb-8 flex-col flex">
            <div
              ref={videosContainerRef}
              className="px-5 md:px-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-5 md:gap-x-16 gap-y-20 min-h-screen relative z-10"
            >
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
        </div>

        {/* Contact Section */}
        <div className="flex flex-col pt-10 pb-4 gap-1 md:gap-5 px-5 md:px-16">
          <div className="flex pb-0 lg:pb-2 self-end md:self-start">
            <a href="mailto:Olaoluwaakinwale89@gmail.com" className="group">
              <h5 className="text-xs md:text-sm text-[#343434]">
                <span
                  className="
        relative
        after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full
        after:bg-[#343434] after:origin-left after:scale-x-0
        group-hover:after:scale-x-100 after:transition-transform after:duration-300
      "
                >
                  Olaoluwaakinwale89@gmail.com
                </span>
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
  )
}
