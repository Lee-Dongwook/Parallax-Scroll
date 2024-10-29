"use client";

import scrollTrigger from "@/utils/scrollTrigger";
import { gsap } from "gsap";
import { useEffect } from "react";

interface TriggerElement {
  id: number;
  transform: string;
  color: string;
  duration: number;
}

export default function Home() {
  const triggerElement: TriggerElement[] = [
    { id: 1, transform: "translateX(500px)", color: "#00A1EF", duration: 1.3 },
    { id: 2, transform: "translateX(750px)", color: "#F9C0C1", duration: 1.5 },
    { id: 3, transform: "translateX(1000px)", color: "#8BF461", duration: 1.7 },
    { id: 4, transform: "translateX(1250px)", color: "#FFD76A", duration: 1.9 },
  ];

  useEffect(() => {
    triggerElement.forEach(({ transform, id, duration, color }) => {
      gsap.to(`.title${id}`, {
        transform,
        duration,
        color,
      });
    });

    scrollTrigger(".box1", {
      scrollTrigger: {
        start: "top",
        scrub: true,
      },
      position: "sticky",
    });

    scrollTrigger(".box2", {
      scrollTrigger: {
        trigger: ".box2",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);
}
