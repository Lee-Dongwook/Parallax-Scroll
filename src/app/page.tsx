/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {}, []);

  return (
    <main className="relative">
      <section className="flex flex-col items-center w-full h-full">
        <div className="w-full h-full overflow-hidden">
          <Image
            src="/img/Section.png"
            alt=""
            className="w-full h-full"
            width={1000}
            height={1000}
          />
        </div>
      </section>
      <section className="flex flex-col items-center w-full h-full">
        <div className="w-full h-full overflow-hidden">
          <Image
            src="/img/Section2.png"
            alt=""
            className="w-full h-full"
            width={1000}
            height={1000}
          />
        </div>
      </section>
      <section className="flex flex-col items-center w-full h-full">
        <div className="w-full h-full overflow-hidden">
          <Image
            src="/img/Section3.png"
            alt=""
            className="w-full h-full"
            width={1000}
            height={1000}
          />
        </div>
      </section>

      <section className="flex flex-col items-center w-full h-full">
        <div className="w-full h-full overflow-hidden">
          <Image
            src="/img/Section4.png"
            alt=""
            className="w-full h-full"
            width={1000}
            height={1000}
          />
        </div>
      </section>
      <section className="flex flex-col items-center w-full h-full">
        <div className="w-full h-full overflow-hidden">
          <Image
            src="/img/Section5.png"
            alt=""
            className="w-full h-full"
            width={1000}
            height={1000}
          />
        </div>
      </section>
      <section className="flex flex-col items-center w-full h-full">
        <div className="w-full h-full overflow-hidden">
          <Image
            src="/img/Section6.png"
            alt=""
            className="w-full h-full"
            width={1000}
            height={1000}
          />
        </div>
      </section>
      <section className="flex flex-col items-center w-full h-full">
        <div className="w-full h-full overflow-hidden">
          <Image
            src="/img/Section7.png"
            alt=""
            className="w-full h-full"
            width={1000}
            height={1000}
          />
        </div>
      </section>
    </main>
  );
}
