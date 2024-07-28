"use client"
import React, { useEffect } from "react";
import ServicesCard from "./ServicesCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Services = () => {
  const {contextSafe} = useGSAP()
  useEffect(contextSafe(() => {
    let tl = gsap.timeline();
    gsap.from("#service1", {
      x: -400,
      duration: 2,
      opacity: 0,
      ease: "power4",
    })
  }), [])
  
  return (
    <div className="w-full font-Barlow not-italic min-h-screen grid lg:grid-cols-3 xs:grid-cols-1 gap-5 bg-[#111727] bg-cover bg-no-repeat bg-center bg-[url(/img/About/Experience/exp_bg.webp)] text-white py-28 borde-gray-500 border-b  px-3">
      <div id="service1" className="flex flex-col items-center justify-center w-full">
        <div className="sm:w-1/2 lg:w-full">
          <h1
            id="Edu"
            className="md:text-4xl xs:text-3xl font-semibold relative pb-7 text-center"
          >
            What I Do
          </h1>
          <p className="text-gray-400">
          I am a passionate and skilled Frontend Developer with a strong foundation in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React.js. With a keen eye for detail and a commitment to delivering high-quality web applications, I specialize in creating responsive, user-friendly, and visually appealing websites. My expertise extends to implementing dynamic and interactive features that enhance user experience, using tools like GSAP for smooth animations.
          </p>
          <img className="mt-10" src="/img/Strength/do_img.webp" alt="" />
        </div>
      </div>
      <div className="col-span-2 grid md:grid-cols-2 gap-7">
        <ServicesCard />
      </div>
    </div>
  );
};

export default Services;
