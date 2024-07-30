"use client";
import React, { useEffect } from "react";
import TypedComponent from "./TypedComponent";
import Link from "next/link";
import gsap from "gsap";
const Hero = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline();
      
      gsap.from("#img-bg", {
        x: -400,
        duration: 2,
        opacity: 0,
        ease: "power4",
      });

      tl.from("#hero", {
        x: 400,
        duration: 2,
        opacity: 0,
        ease: "power4",
      });

      tl.from("#front-letter", {
        rotateX: 360,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
      });
    });

    return () => ctx.revert(); // Clean up the context when the component unmounts
  }, []);
  
  let heroFront = "FrontendDeveloper";
  return (
    <div 
      className='w-full overflow-x-hidden md:min-h-[179vh] bg-[url("/img/hero.webp")] md:grid px-3 pt-60 pb-16 md:grid-cols-2 bg-cover bg-no-repeat relative md:gap-7'
      id="back-Img"
    >
      <div
        id="img-bg"
        className="bg-[#18C6DA] xs:overflow-hidden md:overflow-visible relative rounded-[120px] w-full xs:h-fit md:h-[100vh] lg:h-[120vh]"
      >
        <img
          className="md:absolute scale-110 mx-auto w-full z-40 -top-48"
          src="/img/HeroSelf/Zain.png"
          alt=""
        />
        <img
          id="self"
          className="md:absolute xs:hidden md:block -top-60 -right-32"
          src="/img/HeroSelf/tool1`.png"
          alt=""
        />
        <img
          id="self"
          className="md:absolute xs:hidden md:block bottom-16 -left-10"
          src="/img/HeroSelf/tool2.png"
          alt=""
        />
        <img
          id="self"
          className="md:absolute xs:hidden md:block top-[150px] left-[400px]"
          src="/img/HeroSelf/tool3.png"
          alt=""
        />
      </div>
      <div id="hero" className="text-white md:text-start sm:text-center relative z-40 mt-0 ">
        <div
          id="hero-front"
          className="py-1 xs:px-1 text-center xs:mx-auto md:mx-0 md:px-6 bg-[#D252FF] xs:w-[49%] md:w-[50%] lg:w-[40%] md:text-lg xs:text-md font-semibold flex justify-center rounded-full my-8"
        >
          {heroFront.split("").map((items, index) => {
            return (
              <span key={index} id="front-letter">
                {items}
              </span>
            );
          })}
        </div>
        <h1 id="hero-h1" className="flex gap-1 md:text-6xl xs:justify-center md:justify-start sm:text-5xl xs:text-3xl font-bold items-center">
          Hello!
          <img
            className="xs:w-[40px] sm:w-[50px] md:w-[100px]"
            id="hand"
            src="/img/hand.svg"
            alt=""
          />
          I am
        </h1>
        <TypedComponent />
        <div className="xs:flex md:block justify-center">
          <Link
            className="py-2 px-6 bg-[#3EAEFF] transition-all duration-300 border border-transparent hover:border rounded-md hover:bg-transparent hover:tracking-wide hover:border-[#3EAEFF] box-border"
            href="/Contact"
          >
            Hire Me
          </Link>
        </div>
        <div className="w-full text-start h-auto bg-white/10 backdrop-blur-md rounded-xl mt-10 xs:p-4 md:p-9">
          <h1 className="md:text-xl xs:text-md font-semibold pb-3 font-Barlow not-italic">
            Frontend Developer Mobile Responsive Websites
          </h1>
          <p className="text-gray-200 md:text-md xs:text-sm font-Barlow not-italic">
          As a dedicated frontend developer, I specialize in creating captivating and mobile responsive websites that blend cutting-edge design with seamless functionality. With Expertise HTML, CSS, Tailwind CSS, JavaScript, React.js, and Gsap the popular liberary of animations.
          <br />
          <strong>HTML and CSS:</strong> Proficient in crafting pixel-perfect layouts using HTML5 and CSS3, ensuring compatibility across all devices and browsers.
          <br />
          <strong>Tailwind CSS Expertise:</strong> Harnessing the power of Tailwind CSS, I streamline development workflows to deliver responsive and visually stunning interfaces efficiently.
          <br />
          <strong>JavaScript Proficiency:</strong> Leveraging ES6+ standards and libraries like React.js, I enhance user experiences with dynamic and interactive elements, optimizing performance for mobile devices.
          <br />
          <strong>GSAP Animation Skills:</strong> I bring websites to life with fluid animations and smooth transitions using GSAP, elevating user engagement and interface interactivity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
