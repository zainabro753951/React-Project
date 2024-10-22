/** @format */

"use client";
import React, { useEffect } from "react";
import TypedComponent from "./TypedComponent";
import Link from "next/link";
import gsap from "gsap";
import Image from "next/image";
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
    <div className='w-full overflow-x-hidden md:min-h-[179vh] bg-cover bg-no-repeat  bg-[url("/img/hero.webp")]'>
      <div
        className=" md:grid max-w-[1600px] mx-auto px-3 pt-60 pb-16 md:grid-cols-2 relative md:gap-7"
        id="back-Img"
      >
        <div
          id="img-bg"
          className="bg-[#18C6DA] xs:overflow-hidden md:overflow-visible relative rounded-[120px] w-full xs:h-fit md:h-[100vh] lg:h-[120vh]"
        >
          <Image
            className="md:absolute scale-100 mx-auto w-full z-40 -top-32"
            src="/img/HeroSelf/Zain.png"
            alt="Zain Abro img"
            width={1000}
            height={1000}
            loading="lazy"
          />
          <Image
            id="self"
            className="md:absolute xs:hidden md:block -top-60 -right-32"
            src="/img/HeroSelf/tool1`.png"
            alt="img"
            width={200}
            height={200}
            loading="lazy"
          />
          <Image
            id="self"
            className="md:absolute xs:hidden md:block bottom-16 -left-10"
            src="/img/HeroSelf/tool2.png"
            alt="img"
            width={200}
            height={200}
            loading="lazy"
          />
          <Image
            id="self"
            className="md:absolute xs:hidden md:block top-[150px] left-[400px]"
            src="/img/HeroSelf/tool3.png"
            alt="img"
            width={100}
            height={100}
            loading="lazy"
          />
        </div>
        <div
          id="hero"
          className="text-white md:text-start sm:text-center relative z-40 mt-0 "
        >
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
          <h1
            id="hero-h1"
            className="flex gap-1 md:text-6xl xs:justify-center md:justify-start sm:text-5xl xs:text-3xl font-bold items-center"
          >
            Hello!
            <Image
              className="xs:w-[40px] sm:w-[50px] md:w-[100px]"
              id="hand"
              src="/img/hand.svg"
              alt="Hand on"
              width={200}
              height={200}
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
              As a frontend developer, I specialize in creating dynamic and
              visually appealing web applications using a robust skill set.
              Proficient in HTML, CSS, and JavaScript, I leverage these
              foundational technologies to build responsive layouts that enhance
              user experience. My expertise extends to modern frameworks such as
              React.js, which enables me to develop scalable and efficient
              interfaces. Additionally, I utilize Tailwind CSS for streamlined
              styling and GSAP for advanced animation techniques, ensuring that
              my projects are not only functional but also engaging. Committed
              to staying updated with the latest trends in web development, I
              strive to deliver high-quality, performant web solutions that meet
              both client and user needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
