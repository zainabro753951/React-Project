/** @format */

"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
const AboutHero = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline();
      gsap.from("#about-imgs", {
        x: -400,
        duration: 2,
        opacity: 0,
        ease: "power4",
      });
      tl.from("#about-hero", {
        x: 400,
        duration: 2,
        opacity: 0,
        ease: "power4",
      });
      tl.from("#hero-about", {
        y: -50,
        opacity: 0,
        duration: 0.5,
        ease: "power4",
      });
    });

    return () => ctx.revert(); // Clean up the context when the component unmounts
  }, []);
  return (
    <div className='w-full overflow-x-hidden border-b border-gray-500 bg-cover bg-no-repeat bg-center text-white relative min-h-screen bg-[url("/img/About/Ahero.webp")]'>
      <div
        id="about"
        className="max-w-[1600px] mx-auto pt-32 pb-16 h-full not-italic font-Barlow md:px-[11%] grid lg:grid-cols-2 xs:grid-cols-1 xs:px-5"
      >
        <div
          id="about-imgs"
          className="md:relative w-full h-full z-[41] md:block"
        >
          <div className="flex relative w-full overflow-hidden h-full bg-[#3EAEFF] justify-center items-center rounded-xl">
            <Image
              className="w-full z-20 lg:absolute scale-125 transition-all duration-500 hover:scale-100 object-cover object-bottom h-full"
              src="/img/About/Me.png"
              alt="Zain Abro Img"
              loading="lazy"
              width={600}
              height={600}
            />
            <Image
              id="self"
              className="left-20 absolute md:block xs:hidden"
              src="/img/HeroSelf/tool2.png"
              loading="lazy"
              alt="design img"
              width={100}
              height={100}
            />
            <Image
              id="self"
              className="left-48 top-20 absolute md:block xs:hidden"
              src="/img/HeroSelf/tool3.png"
              loading="lazy"
              alt="design img"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div id="about-hero" className="z-40 w-full h-full md:mt-0 xs:mt-16">
          <div className="overflow-hidden">
            <h1
              id="hero-about"
              className="md:text-5xl xs:text-3xl mt-10 font-semibold text-center mb-6"
            >
              About Me
            </h1>
          </div>
          <div className="w-full mb-8 bg-white/10 backdrop-blur-md border border-gray-600 xs:rounded-xl md:rounded-r-xl xs:px-4 md:pl-16 py-4">
            <h2 className="md:text-3xl xs:text-xl font-semibold">Who I'm</h2>
            <p className="text-gray-300 text-sm">
              Hi, I'm Zain Abro, a frontend development wizard with a flair for
              crafting extraordinary web experiences. My expertise includes
              HTML, CSS, JavaScript, Tailwind CSS, React.js, and GSAP.
              <br />
              <br />
              I'm a frontend development virtuoso with a passion for building
              web applications that dazzle and delight. With a rock-solid
              foundation in HTML, CSS, and JavaScript, I create fast,
              responsive, and interactive experiences that leave a lasting
              impression.
              <br />
              My mastery of Tailwind CSS enables me to write sleek, modular code
              that's a joy to maintain, while my expertise in React.js allows me
              to build scalable, high-performance applications that exceed
              expectations. And with GSAP, I bring motion design to life,
              crafting animations that mesmerize and engage.
              <br />
              I'm a design-centric developer who thrives on collaboration and
              creative problem-solving. Whether it's a personal project or a
              team effort, I'm always pushing the boundaries of what's possible
              on the web. Let's join forces and create something truly
              remarkable!
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <a
              className="py-2 md:px-6 xs:px-3 md:text-lg xs:text-lg bg-[#F64142] border border-transparent transition-all duration-300 hover:bg-transparent hover:border hover:border-[#F64142] hover:text-[#F64142] hover:tracking-wide rounded-lg"
              href="/CV/Zain Abro CV.pdf"
              target="_blank"
            >
              Download Resume
            </a>
            <Link
              className="py-2 md:px-6 xs:px-3 md:text-lg xs:text-lg bg-[#3EAEFF] border border-transparent transition-all duration-300 hover:bg-transparent hover:border hover:border-[#3EAEFF] hover:text-[#3EAEFF] hover:tracking-wide rounded-lg"
              href="/Contact"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
