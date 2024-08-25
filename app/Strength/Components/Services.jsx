/** @format */

"use client";
import React, { useEffect } from "react";
import ServicesCard from "./ServicesCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const Services = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline();
      tl.from("#service1", {
        x: -400,
        duration: 2,
        opacity: 0,
        ease: "power4",
      });
    });

    return () => ctx.revert(); // Clean up the context when the component unmounts
  }, []);

  return (
    <div className='w-full bg-[#111727] bg-cover bg-no-repeat bg-center bg-[url(/img/About/Experience/exp_bg.webp)] borde-gray-500 border-b'>
      <div className='max-w-[1600px] mx-auto font-Barlow not-italic min-h-screen grid lg:grid-cols-3 xs:grid-cols-1 gap-5 text-white py-28  px-3'>
        <div
          id='service1'
          className='flex flex-col items-center justify-center w-full'>
          <div className='sm:w-1/2 lg:w-full'>
            <h1
              id='Edu'
              className='md:text-4xl xs:text-3xl font-semibold relative pb-7 text-center'>
              What I Do
            </h1>
            <p className='text-gray-400'>
              As a Frontend Developer and Freelance Web Developer, I create
              engaging websites that meet your business needs. With skills in
              HTML, CSS, JavaScript, Tailwind CSS, GSAP, and React.js, I offer
              dynamic website design services tailored for modern users. If
              you’re looking for website developers near me, I'm here to help
              you build a responsive and visually appealing website at an
              affordable website design cost. I also specialize as a Shopify Web
              Developer, crafting eCommerce solutions that drive sales.
            </p>
            <Image
              className='mt-10'
              width={500}
              height={500}
              src='/img/Strength/do_img.webp'
              alt=''
            />
          </div>
        </div>
        <div className='col-span-2 grid md:grid-cols-2 gap-7'>
          <ServicesCard />
        </div>
      </div>
    </div>
  );
};

export default Services;
