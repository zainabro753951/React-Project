/** @format */

"use client";
import React, { useEffect, useRef } from "react";
import EduCard from "./EduCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const Education = () => {
  let Education = useRef(null);
  let EducationCard = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(Education.current, {
        x: -400,
        duration: 2,
        opacity: 0,
        ease: "power4",
        scrollTrigger: {
          trigger: Education.current,
          start: "top 80%",
          end: "top bottom 20%",
          toggleActions: "restart none none reverse",
        },
      });
      gsap.from(EducationCard.current, {
        x: 400,
        duration: 2,
        opacity: 0,
        ease: "power4",
        scrollTrigger: {
          trigger: EducationCard.current,
          start: "top 80%",
          end: "top bottom 20%",
          toggleActions: "restart none none reverse",
        },
      });
    });

    return () => ctx.revert(); // Clean up the context when the component unmounts
  }, []);

  return (
    <div className='w-full bg-[#101727] overflow-x-hidden border-b border-gray-500'>
      <div className='mx-auto max-w-[1600px] h-full grid xs:grid-cols-1 lg:grid-cols-3 place-content-center lg:pr-10 md:gap-3 lg:gap-16 pl-3  text-white not-italic font-Barlow py-24 tracking-wide '>
        <div className='flex justify-center items-center py-10'>
          <div ref={Education} className='w-[400px]'>
            <h1
              id='Edu'
              className='md:text-4xl xs:text-3xl font-semibold relative pb-7 text-center'>
              Education
            </h1>
            <p className='md:text-[15px] xs:text-sm tracking-wider font-light'>
              I am currently pursuing a Software Engineering course at Aptech
              Center, a comprehensive program designed to equip me with
              essential skills and knowledge required in the field of software
              development. The curriculum covers various aspects of software
              engineering, including programming, system analysis, software
              design, and project management.
            </p>
          </div>
        </div>
        <div ref={EducationCard} className='lg:col-span-2 w-full h-full'>
          <EduCard />
        </div>
      </div>
    </div>
  );
};

export default Education;
