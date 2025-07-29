"use client"
import { useRef, useState, useEffect } from "react";
import Head from "next/head";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [fade, setFade] = useState(false);
  const starterRef = useRef(null);

  useEffect(() => {
    starterRef.current?.focus();
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleShow();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line
  }, []);

  function handleShow() {
    if (opened) return;
    setOpened(true);
    setFade(true);
    setTimeout(() => {
      if (starterRef.current) starterRef.current.style.display = "none";
    }, 1000);
  }

  return (
    <>
      <Head>
        <title>Curtain Animation</title>
        <meta name="viewport" content="width=1200, initial-scale=1" />
      </Head>
      <div className="relative w-screen h-screen bg-black flex items-center justify-center overflow-hidden">
        {/* Starter */}
        <button
          id="starter"
          ref={starterRef}
          tabIndex={0}
          className={`z-10 absolute top-1/2 left-1/2 w-[300px] h-[50px] -mt-[25px] -ml-[150px] text-center text-2xl font-bold font-['Roboto_Condensed'] text-white bg-transparent cursor-pointer outline-none transition-all duration-500 ${
            fade ? "fade-out" : ""
          }`}
          onClick={handleShow}
        >
          Press Enter
        </button>

        {/* Scene */}
        <div
          id="scene"
          className={`fixed top-1/2 left-1/2 w-[1200px] h-[600px] -mt-[300px] -ml-[600px] bg-black shadow-inner shadow-white overflow-hidden transition-all duration-[2500ms] ease-in-out ${
            opened
              ? "w-[140vw] left-[-20vw] top-0 h-screen mt-0 ml-0 bg-neutral-900 shadow-none"
              : ""
          }`}
        >
          {/* Curtain */}
          <div
            id="curtain"
            className={`absolute inset-0 w-full h-full bg-transparent pointer-events-none ${
              opened ? "curtain-open" : ""
            }`}
          >
            <div
              className={`curtain-left absolute top-0 left-0 w-1/2 h-full`}
              style={{
                transformOrigin: "top right",
                transitionProperty: "filter, transform",
              }}
            />
            <div
              className={`curtain-right absolute top-0 left-1/2 w-1/2 h-full`}
              style={{
                transformOrigin: "top left",
                transitionProperty: "filter, transform",
              }}
            />
          </div>

          {/* TADA! */}
          <h1
            className={`absolute left-1/2 top-1/2 w-[500px] h-[150px] -mt-[90px] -ml-[250px] text-center font-['Open_Sans'] text-[10em] text-white select-none pointer-events-none ${
              opened ? "tada-animate" : "opacity-0 scale-75"
            }`}
          >
            TADA!
          </h1>

          {/* Ground */}
          <div
            className={`ground absolute left-1/2 w-[10000px] h-[10000px] -ml-[5000px] rounded-full shadow-[0_0_100px_100px_white] ${
              opened ? "ground-animate" : ""
            }`}
            style={{
              top: opened ? "105%" : "133%",
            }}
          />
        </div>
      </div>
    </>
  );
}
