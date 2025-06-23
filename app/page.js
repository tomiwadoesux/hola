"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import AnimatedText from "@/components/AnimatedText";
import CurtainsGallery from "@/components/CurtainsGallery";
import SmoothScroll from "@/components/SmoothScroll";
import CurtainsPolaroids from "@/components/CurtainsPolaroids";

export default function Home() {
  const LazyVideo = dynamic(() => import("../components/lazyvideo"), {
    ssr: false,
  });

  // Example video list
  const videoList = [
    { src: "/videos/02.mov", poster: "/images/22.webp" },
    { src: "/videos/09.mov", poster: "/images/22.web" },
    { src: "/videos/04.mov", poster: "/images/22.web" },
    { src: "/videos/05.mov", poster: "/images/22.web" },
    { src: "/videos/07.mov", poster: "/images/22.web" },
    { src: "/videos/06.mov", poster: "/images/22.web" },
    { src: "/videos/08.mov", poster: "/images/22.web" },
    { src: "/videos/10.mov", poster: "/images/22.web" },
    { src: "/videos/03.mov", poster: "/images/22.web" },
  ];

  return (
    <SmoothScroll>
      <section className="">
        <div className="h-[100vh] bg-image  ">
          <div className="absolute inset-0 "></div>
          <div className="flex min-h-screen -top-9 items-center gap-10 justify-center flex-col">
            <h1 className="self-center  text-center text-4xl md:text-6xl lg:text-8xl">
              AKINWALE OLAOLUWA
            </h1>
            <a
              href="mailto:Olaoluwaakinwale89@gmail.com"
              className="rounded-3xl border px-4 text-base py-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300 text-center"
            >
              {`Let's Connect`}
            </a>
          </div>
          <div className=" px-8 fixed flex flex-col gap-2 md:flex-row justify-between z-50 bottom-11 ">
            <h5 className="text-[10px] text-center md:text-xs">
              Based in Manchester, United Kingdom
            </h5>
            <h5 className="text-[10px] text-center md:text-xs">
              ® 2025 All Rights Reserved
            </h5>
          </div>
        </div>
        <div className="flex flex-col h-[200vh] lg:flex-row lg:h-[100vh]">
          <div className="bg-image2  w-full h-[100vh] lg:w-1/2 lg:h-full ">
            <div className="items-center min-h-screen justify-center flex flex-col gap-4">
              <h4 className="self-center text-2xl  text-center">
                {`Height: 182.88cm / 6'0"`}
              </h4>
              <h4 className="self-center text-2xl  text-center">
                Waist: 82.5cm
              </h4>
              <h4 className="self-center text-2xl  text-center">
                Chest: 91.4cm
              </h4>
              <h4 className="self-center text-2xl  text-center">
                Leg: 83.82cm
              </h4>
            </div>
          </div>
          <div className="bg-image3  w-full h-[100vh] lg:w-1/2 lg:h-full ">
            <div className="items-center min-h-screen justify-center flex flex-col gap-4">
              <a
                href="#polaroids"
                className="cursor-pointer hover:opacity-50 transition-opacity duration-300"
              >
                <div className="flex flex-row gap-2">
                  <h1 className="self-center text-5xl underline text-center">
                    POLAROIDS
                  </h1>
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="self-end"
                  >
                    <path
                      d="M8.00008 3.16634L8.00008 13.833M8.00008 13.833L12.6667 9.16634M8.00008 13.833L3.33341 9.16634"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
              <a
                href="https://www.instagram.com/olaoluwa.ak/"
                className="cursor-pointer target:blank  hover:opacity-50 transition-opacity duration-300"
                target="_blank"
              >
                <div className="flex flex-row">
                  <h1 className=" pt-5 self-center text-5xl underline  text-center">
                    INSTAGRAM
                  </h1>
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="self-end"
                  >
                    <path
                      d="M4.22904 12.2711L11.7715 4.7286M11.7715 4.7286H5.17185M11.7715 4.7286V11.3283"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-[200vh] lg:flex-row lg:h-[100vh]">
          <div className="bg-image4  w-full h-[100vh] lg:w-1/2 lg:h-full ">
            <div className="items-center min-h-screen justify-center flex flex-col gap-4">
              <a
                href="#photos"
                className="cursor-pointer hover:opacity-50 transition-opacity duration-300"
              >
                <div className="flex flex-row gap-2">
                  <h1 className="self-center text-5xl underline text-center">
                    PHOTOS
                  </h1>
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="self-end"
                  >
                    <path
                      d="M8.00008 3.16634L8.00008 13.833M8.00008 13.833L12.6667 9.16634M8.00008 13.833L3.33341 9.16634"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-image1  w-full h-[100vh] lg:w-1/2 lg:h-full ">
            <div className="items-center min-h-screen justify-center flex flex-col gap-4">
              <a
                href="#videos"
                className="cursor-pointer hover:opacity-50 transition-opacity duration-300"
              >
                <div className="flex flex-row gap-2">
                  <h1 className="self-center text-5xl underline text-center">
                    VIDEOS
                  </h1>
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="self-end"
                  >
                    <path
                      d="M8.00008 3.16634L8.00008 13.833M8.00008 13.833L12.6667 9.16634M8.00008 13.833L3.33341 9.16634"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className=" h-[9`0vh]  ">
          <div className="absolute inset-0 bg-black/30"></div>
          <div id="polaroids" className="flex py-11  flex-col">
            <AnimatedText
              text="POLAROIDS"
              className="self-center text-black py-11   text-center text-4xl md:text-6xl lg:text-6xl"
            />
          </div>

          <div className=" px-6  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="">
              <Image
                src="/images/23.webp"
                alt="Model"
                width={800}
                height={600}
                loading="eager" // disables lazy loading
              />
            </div>
            <div className="">
              {" "}
              <Image
                src="/images/25.webp"
                alt="01"
                height={700}
                width={900}
                loading="eager" // disables lazy loading
              />
            </div>
            <div className=" ">
              {" "}
              <Image
                src="/images/61.webp"
                alt="01"
                height={700}
                width={900}
                loading="eager" // disables lazy loading
              />
            </div>
             <div className=" ">
              {" "}
              <Image
                src="/images/27.webp"
                alt="01"
                height={700}
                width={900}
                loading="eager" // disables lazy loading
              />
            </div>
             <div className=" ">
              {" "}
              <Image
                src="/images/29.webp"
                alt="01"
                height={700}
                width={900}
                loading="eager" // disables lazy loading
              />
            </div>
             <div className=" ">
              {" "}
              <Image
                src="/images/63.webp"
                alt="01"
                height={700}
                width={900}
                loading="eager" // disables lazy loading
              />
            </div>
             <div className=" ">
              {" "}
              <Image
                src="/images/26.webp"
                alt="01"
                height={700}
                width={900}
                loading="eager" // disables lazy loading
              />
            </div>
            <div className=" ">
              {" "}
              <Image
                src="/images/62.webp"
                alt="01"
                height={700}
                width={900}
                loading="eager" // disables lazy loading
              />
            </div>
          </div>
          {/* <CurtainsPolaroids /> */}
        </div>
        <div></div>
        <div id="photos" className="flex  h-full w-full flex-col">
          <AnimatedText
            text="PHOTOS"
            className="self-center text-black py-11   text-center text-4xl md:text-6xl lg:text-6xl"
          />
        </div>
        <div>
          <CurtainsGallery />
        </div>

        {/* <div className=" px-6  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="">
            <Image src="/images/03.webp" alt="01" height={700} width={900} />
          </div>
          <div className="">
            {" "}
            <Image src="/images/05.webp" alt="01" height={700} width={900} />
          </div>
          <div className=" ">
            {" "}
            <Image src="/images/06.webp" alt="01" height={700} width={900} />
          </div>
          <div className=" ">
            {" "}
            <Image src="/images/07.webp" alt="01" height={700} width={900} />
          </div>

          <div className="">
            <Image src="/images/11.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/12.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/13.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/14.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/15.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/16.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/17.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/18.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/19.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/20.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/21.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/22.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/23.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/43.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/44.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/45.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/46.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/47.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/29.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/30.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/31.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/32.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/33.webp" alt="Model" width={800} height={600} />
          </div>

          <div className="">
            <Image src="/images/35.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/36.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/37.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/38.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/39.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/40.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/41.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/42.webp" alt="Model" width={800} height={600} />
          </div>

          <div className="">
            <Image src="/images/45.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/46.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/64.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/48.webp" alt="Model" width={800} height={600} />
          </div>

          <div className="">
            <Image src="/images/50.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/51.webp" alt="Model" width={800} height={600} />
          </div>

          <div className="">
            <Image src="/images/53.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/54.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/55.webp" alt="Model" width={800} height={600} />
          </div>
          <div className="">
            <Image src="/images/56.webp" alt="Model" width={800} height={600} />
          </div>

          <div className="">
            <Image src="/images/58.webp" alt="Model" width={800} height={600} />
          </div>
        </div> */}

        <div id="videos" className="flex pt-11  flex-col">
          {/* <h1 className="self-center text-black py-11   text-center text-4xl md:text-6xl lg:text-6xl">
          VIDEOS
        </h1> */}
          <AnimatedText
            text="VIDEOS"
            className="self-center text-black py-11   text-center text-4xl md:text-6xl lg:text-6xl"
          />
        </div>
        <div className="gap-3 pb-8 flex-col flex">
          <div className="px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {videoList.map((video, idx) => (
              <LazyVideo
                key={idx}
                src={video.src}
                poster={video.poster}
                muted
                width="100%" // Let Tailwind handle sizing
                className="w-full h-auto rounded-md shadow"
              />
            ))}
          </div>
        </div>
        <div className="h-[100vh] bg-image6  ">
          <div className="flex min-h-screen -top-9 items-center gap-10 justify-center flex-col">
            <h1 className="self-center  text-center text-4xl md:text-6xl lg:text-8xl">
              Get In Touch
            </h1>
            <div></div>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.instagram.com/olaoluwa.ak/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl border px-4 text-base py-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300 text-center"
              >
                Instagram: @olaoluwa.ak
              </a>

              <a
                href="mailto:Olaoluwaakinwale89@gmail.com"
                className="rounded-3xl border px-4 text-base py-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300 text-center"
              >
                E-Mail
              </a>
            </div>
          </div>
          <div className=" px-8 fixed flex flex-col gap-2 md:flex-row justify-between z-50 bottom-11 ">
            <h5 className="text-[10px] text-center md:text-xs"></h5>
            <a
              href="https://ayotomcs.me/"
              target="_blank"
              className="cursor-pointer  hover:opacity-50 transition-opacity duration-300"
            >
              <h5 className="text-[10px] text-center md:text-xs">
                Designed by: Ayotomcs
              </h5>
            </a>
          </div>
        </div>
      </section>
    </SmoothScroll>
  );
}
