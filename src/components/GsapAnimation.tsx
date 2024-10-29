"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image, { type StaticImageData } from "next/image";
import img from "../../public/img/Section.png";
import img2 from "../../public/img/Section2.png";
import img3 from "../../public/img/Section3.png";
import img4 from "../../public/img/Section4.png";
import img5 from "../../public/img/Section5.png";
import img6 from "../../public/img/Section6.png";
import img7 from "../../public/img/Section7.png";

gsap.registerPlugin(ScrollTrigger);

const imageUrls: StaticImageData[] = [img, img2, img3, img4, img5, img6, img7];

const GsapAnimation = () => {
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const images = imagesRef.current.filter(Boolean) as HTMLDivElement[]; // null 필터링

    images.forEach((panel, idx) => {
      let scale = 1;

      if (idx !== images.length - 1) {
        scale = 0.9 + 0.025 * idx;
      }

      gsap.to(panel, {
        scale: scale,
        ease: "none",
        scrollTrigger: {
          trigger: panel,
          start: "top " + (70 + 40 * idx),
          end: "bottom +=650px",
          endTrigger: ".end",
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className="flex flex-col gap-12 mx-auto max-w-2xl py-12">
      {imageUrls.map((image, idx) => (
        <div
          key={idx}
          ref={(e) => {
            imagesRef.current[idx] = e;
          }}
          className=""
        >
          <Image
            src={image}
            alt={`Image ${idx + 1}`}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            layout="fill"
          />
        </div>
      ))}
      <div className="end"></div>
    </div>
  );
};

export default GsapAnimation;
