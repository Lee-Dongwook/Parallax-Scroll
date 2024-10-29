/* eslint-disable @next/next/no-img-element */
"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const firstGroup = [
  "/img/Section.png",
  "/img/Section2.png",
  "/img/Section3.png",
];

const secondGroup = [
  "/img/Section4.png",
  "/img/Section5.png",
  "/img/Section6.png",
  "/img/Section7.png",
];

const GsapAnimation = () => {
  const firstGroupRef = useRef<(HTMLDivElement | null)[]>([]);
  const secondGroupRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const firstGroupPanels = firstGroupRef.current.filter(
      Boolean
    ) as HTMLDivElement[];
    firstGroupPanels.forEach((panel) => {
      gsap.fromTo(
        panel,
        { opacity: 1, scale: 1 },
        {
          opacity: 1,
          scale: 1,
          ease: "power2.inOut",
          duration: 10,
          scrollTrigger: {
            trigger: panel,
            start: "top top",
            end: "+=100%",
            pin: true,
            pinSpacing: false,
            scrub: true,
            onEnter: () => {
              gsap.to(panel, { opacity: 1, scale: 1, duration: 1.5 });
            },
            onLeave: () => {
              gsap.to(panel, { opacity: 0, scale: 1, duration: 1.5 });
            },
            onEnterBack: () => {
              gsap.to(panel, { opacity: 1, scale: 1, duration: 1.5 });
            },
            onLeaveBack: () => {
              gsap.to(panel, { opacity: 0, scale: 1, duration: 1.5 });
            },
          },
        }
      );
    });

    const secondGroupPanels = secondGroupRef.current.filter(
      Boolean
    ) as HTMLDivElement[];
    secondGroupPanels.forEach((panel) => {
      gsap.fromTo(
        panel,
        { opacity: 1, scale: 1 },
        {
          opacity: 1,
          scale: 1,
          ease: "power2.inOut",
          duration: 10,
          scrollTrigger: {
            trigger: panel,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
            scrub: 2,
          },
        }
      );
    });
  }, []);

  return (
    <div className="flex flex-col">
      {firstGroup.map((image, idx) => (
        <div
          key={idx}
          ref={(e) => {
            firstGroupRef.current[idx] = e;
          }}
          className="relative w-screen h-screen overflow-hidden"
        >
          <img
            src={image}
            alt={`First Group Image ${idx + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      {secondGroup.map((image, idx) => (
        <div
          key={idx}
          ref={(e) => {
            secondGroupRef.current[idx] = e;
          }}
          className="sticky top-0 w-screen h-screen overflow-hidden"
        >
          <img
            src={image}
            alt={`Second Group Image ${idx + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="end"></div>
    </div>
  );
};

export default GsapAnimation;
