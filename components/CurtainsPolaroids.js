"use client";
import { useEffect, useState, useRef } from "react";
import { Curtains, Plane, RenderTarget, Vec2 } from "curtainsjs";
import Image from "next/image";

export default function CurtainsPolaroids() {
  const images = [
 
    "/images/23.webp",
    "/images/63.webp",
    "/images/61.webp",
    "/images/62.webp",

  ].map((img) => ({ img }));

  const [curtainsError, setCurtainsError] = useState(null);
  const canvasRef = useRef(null); // <-- Add this line

  useEffect(() => {
    if (!canvasRef.current) return;
    console.log("Starting Curtains.js initialization");

    try {
      const curtains = new Curtains({
        container: canvasRef.current,
        pixelRatio: Math.min(1.5, window.devicePixelRatio),
        premultipliedAlpha: true,
      });

      const vs = `
        precision mediump float;
        attribute vec3 aVertexPosition;
        attribute vec2 aTextureCoord;
        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;
        uniform mat4 planeTextureMatrix;
        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;
        varying vec2 vPlaneTextureCoord;
        void main() {
          gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
          vVertexPosition = aVertexPosition;
          vTextureCoord = aTextureCoord;
          vPlaneTextureCoord = (planeTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
        }
      `;

      const fs = `
        precision mediump float;
        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;
        varying vec2 vPlaneTextureCoord;
        uniform sampler2D planeTexture;
        uniform sampler2D titleTexture;
        void main() {
          vec4 image = texture2D(planeTexture, vPlaneTextureCoord);
          vec4 title = texture2D(titleTexture, vTextureCoord);
          gl_FragColor = mix(image, title, title.a);
        }
      `;

      const planeEls = document.querySelectorAll(".plane");

      const renderTarget = new RenderTarget(curtains);

      const writeTitle = (plane) => {
        if (plane.textures.length > 1) {
          const canvas = plane.textures[1].source;
          const ctx = canvas.getContext("2d");
          const planeBoundinRect = plane.getBoundingRect();
          const htmlPlaneWidth = planeBoundinRect.width;
          const htmlPlaneHeight = planeBoundinRect.height;

          canvas.width = htmlPlaneWidth;
          canvas.height = htmlPlaneHeight;
          ctx.width = htmlPlaneWidth;
          ctx.height = htmlPlaneHeight;

          const title = plane.htmlElement.querySelector("h2");
          const style = window.getComputedStyle(title);
          const fontSize = parseFloat(style.fontSize) * curtains.pixelRatio;

          ctx.fillStyle = style.color;
          ctx.font = `${style.fontWeight} ${fontSize}px ${style.fontFamily}`;
          ctx.textAlign = "center";
          ctx.textBaseline = "center";
          ctx.strokeStyle = "#ffffff";
          ctx.lineWidth = 3;
          ctx.strokeText(title.innerText, canvas.width / 2, canvas.height / 2);
          ctx.fillText(title.innerText, canvas.width / 2, canvas.height / 2);

          plane.textures[1].needUpdate();
        }
      };

      planeEls.forEach((planeEl) => {
        const plane = new Plane(curtains, planeEl, {
          vertexShader: vs,
          fragmentShader: fs,
        });

        const canvas = document.createElement("canvas");
        canvas.setAttribute("data-sampler", "titleTexture");
        plane.loadCanvas(canvas);

        plane
          .onLoading((texture) => {
            if (texture.sourceType === "canvas") {
              texture.shouldUpdate = false;
              writeTitle(plane);
            }
          })
          .onAfterResize(() => {
            writeTitle(plane);
          });

        plane.setRenderTarget(renderTarget);
      });

      let dividers = 9;
      const definition = 5;
      const vertices = (dividers * 2 - 1) * definition;
      dividers = parseInt(dividers);

      const perspectiveVs = `
        #ifdef GL_ES
        precision mediump float;
        #endif
        attribute vec3 aVertexPosition;
        attribute vec2 aTextureCoord;
        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;
        uniform mat4 uTextureMatrix0;
        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;
        uniform float uDepth;
        uniform vec2 uScrollPosition;
        uniform float uStrength;
        uniform float uNbDividers;
        void main() {
          vec3 vertexPosition = aVertexPosition;
          vec2 perspVertices = vec2(0.0);
          for(int i = 0; i < ${dividers}; i++) {
            float index = float(i);
            float step = index / uNbDividers;
            float position = index / (uNbDividers - 1.0);
            if(abs(vertexPosition.y) >= step) {
              perspVertices.y = position;
            }
          }
          perspVertices = 1.0 - perspVertices;
          float perspective = min(perspVertices.x, perspVertices.y);
          vertexPosition.z = uStrength * perspective * -uDepth;
          vertexPosition.x += uStrength * uScrollPosition.x * vertexPosition.z / (uDepth * 5.0);
          vertexPosition.y += uStrength * uScrollPosition.y * vertexPosition.z / (uDepth * 5.0);
          gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);
          vTextureCoord = aTextureCoord;
          vVertexPosition = vertexPosition;
        }
      `;

      const perspectiveFs = `
        #ifdef GL_ES
        precision mediump float;
        #endif
        uniform float uDepth;
        uniform vec2 uScrollPosition;
        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;
        uniform sampler2D sceneTexture;
        void main() {
          vec4 finalColor = texture2D(sceneTexture, vTextureCoord);
          vec3 normal = vec3(0.0, 0.0, 1.0);
          vec3 lightDir = vec3(1.0, 1.0, -vVertexPosition.z);
          float intensity = dot(normal, lightDir) * 0.5;
          finalColor.rgb -= intensity;
          finalColor = vec4(finalColor.rgb * finalColor.a, finalColor.a);
          gl_FragColor = finalColor;
        }
      `;

      const perspectivePlane = new Plane(curtains, curtains.container, {
        vertexShader: perspectiveVs,
        fragmentShader: perspectiveFs,
        widthSegments: vertices,
        heightSegments: vertices,
        watchScroll: false,
        autoloadSources: false,
        uniforms: {
          depth: { name: "uDepth", type: "1f", value: 0.25 },
          scrollPosition: {
            name: "uScrollPosition",
            type: "2f",
            value: new Vec2(),
          },
          nbDividers: { name: "uNbDividers", type: "1f", value: dividers },
          strength: { name: "uStrength", type: "1f", value: 0 },
        },
      });

      perspectivePlane.createTexture({
        sampler: "sceneTexture",
        fromTexture: renderTarget.getTexture(),
      });

      let scrollStrength = 0;
      let scrollEnded;

      perspectivePlane.onRender(() => {
        const strength = curtains.lerp(
          perspectivePlane.uniforms.strength.value,
          scrollStrength,
          0.1
        );
        perspectivePlane.uniforms.strength.value = strength;
      });

      curtains.onScroll(() => {
        const deltas = curtains.getScrollDeltas();
        scrollStrength = Math.max(-0.5, Math.min(deltas.y / 40, 0.5));
        if (scrollEnded) {
          clearTimeout(scrollEnded);
        }
        scrollEnded = setTimeout(() => {
          scrollStrength = 0;
        }, 30);
      });

      // Initialize scroll position
      perspectivePlane.uniforms.scrollPosition.value.set(
        curtains.getScrollDeltas().x,
        curtains.getScrollDeltas().y
      );

      // Trigger resize on init
      curtains.resize();
      console.log("Curtains.js initialized successfully");

      setTimeout(() => {
        curtains.resize();
      }, 0);

      // Add resize listener
      const handleResize = () => {
        curtains.resize();
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        curtains.dispose();
      };
    } catch (error) {
      console.error("Curtains.js initialization failed:", error);
      setCurtainsError(error.message);
    }
  }, [canvasRef]);

  return (
    <section  className="relative ">
      <div
        ref={canvasRef}
        id="canvas"
        className="curtains-canvas relative top-20 left-0 w-full h-full z-20 pointer-events-none"
        style={{
          background: curtainsError ? "rgba(255, 0, 0, 0.2)" : "transparent",
        }}
      ></div>
      <div id="planes">
        <div className="px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 min-h-screen relative z-10">
          {images.map((item, index) => (
            <div key={index} className="plane aspect-[2/3] relative w-full">
              <h2 className="absolute inset-0 flex justify-center items-center m-0 text-4xl md:text-[3.25vw] font-bold opacity-0 text-gray-800">
                {/* Title content */}
              </h2>
              <Image
                src={item.img}
                alt={`Model ${index + 1}`}
                data-sampler="planeTexture"
                className={curtainsError ? "block" : "hidden"} // Show images if Curtains fails
                width={800}
                height={600}
                priority={index < 4}
                onError={() =>
                  console.error(`Failed to load image: ${item.img}`)
                }
              />
            </div>
          ))}
        </div>
        {curtainsError && (
          <div className="fixed top-10 left-10 bg-red-500 text-white p-4 z-30">
            Error: {curtainsError}
          </div>
        )}
      </div>
    </section>
  );
}
