/** @format */

"use client";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const Skills = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "bounce",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".skill",
          start: "top 80%",
          end: "top bottom 20%",
          toggleActions: "restart none none reverse",
        },
      });
      gsap.from("#skill2", {
        x: 400,
        opacity: 0,
        duration: 1,
        ease: "power4",
        scrollTrigger: {
          trigger: "#skill2",
          start: "top 80%",
          end: "top bottom 20%",
          toggleActions: "restart none none reverse",
        },
      });
    });

    return () => ctx.revert(); // Clean up the context when the component unmounts
  }, []);

  return (
    <div className='w-full bg-[#0F182B] border-t border-gray-500 text-white'>
      <div className='max-w-[1600px] py-32 h-full mx-auto overflow-x-hidden font-Barlow not-italic lg:grid xs:flex flex-col-reverse lg:grid-cols-3 gap-5  place-content-center'>
        <div className='col-span-2 grid md:grid-cols-2 px-4 gap-4 auto-rows-min'>
          <div
            id='EduCard'
            className='skill w-full relative py-2 flex gap-5 border border-gray-500 px-3 rounded-lg'>
            <div className='relative z-40'>
              <Image
                className='w-[120px]'
                src='/img/About/Experience/HTML.png'
                alt='HTML logo'
                width={500}
                height={500}
              />
            </div>
            <div className='w-full my-4 relative z-40'>
              <div className='flex mb-5 justify-between items-center w-full'>
                <h1 className='text-xl font-semibold'>HTML</h1>
                <h1 className='px-3 border border-gray-500 rounded-full'>
                  95%
                </h1>
              </div>
              <div
                id='feel1'
                className='w-[100%] relative rounded-full bg-gray-600 h-1'></div>
            </div>
          </div>
          <div
            id='EduCard'
            className='skill w-full py-2 relative flex gap-5 border border-gray-500 px-3 rounded-xl'>
            <div className='relative z-40'>
              <Image
                className='w-[120px]'
                src='/img/About/Experience/CSS.png'
                alt='CSS logo'
                width={500}
                height={500}
              />
            </div>
            <div className='w-full my-4 relative z-40'>
              <div className='flex pb-5 justify-between items-center w-full'>
                <h1 className='text-xl font-semibold'>CSS</h1>
                <h1 className='px-3 border border-gray-500 rounded-full'>
                  80%
                </h1>
              </div>
              <div
                id='feel2'
                className='w-[100%] relative rounded-full bg-gray-600 h-1'></div>
            </div>
          </div>
          <div
            id='EduCard'
            className='skill w-full py-2 relative flex gap-5 border border-gray-500 px-3 rounded-lg'>
            <div className='relative z-40'>
              <Image
                className='w-[120px]'
                src='/img/About/Experience/JavaScript.png'
                alt='JavaScript logo'
                width={500}
                height={500}
              />
            </div>
            <div className='w-full my-4 relative z-40'>
              <div className='flex pb-5 justify-between items-center w-full'>
                <h1 className='text-xl font-semibold'>JavaScript</h1>
                <h1 className='px-3 border border-gray-500 rounded-full'>
                  80%
                </h1>
              </div>
              <div
                id='feel3'
                className='w-[100%] relative rounded-full bg-gray-600 h-1'></div>
            </div>
          </div>
          <div
            id='EduCard'
            className='skill w-full py-2 relative flex gap-5 border border-gray-500 px-3 rounded-lg'>
            <div className='relative z-40'>
              <Image
                className='w-[120px]'
                src='/img/About/Experience/Reactjs.png'
                alt='React js logo'
                width={500}
                height={500}
              />
            </div>
            <div className='w-full my-4 relative z-40'>
              <div className='flex pb-5 justify-between items-center w-full'>
                <h1 className='text-xl font-semibold'>React</h1>
                <h1 className='px-3 border border-gray-500 rounded-full'>
                  68%
                </h1>
              </div>
              <div
                id='feel4'
                className='w-[100%] relative rounded-full bg-gray-600 h-1'></div>
            </div>
          </div>
          <div
            id='EduCard'
            className='skill w-full relative py-2 flex gap-5 border border-gray-500 px-3 rounded-lg'>
            <div className='relative z-40 w-[120px] bg-Skills rounded-full border-[0.5px] border-[#274876] flex items-center justify-center'>
              <Image
                className='w-[65px]'
                src='/img/About/Experience/github.png'
                alt='HTML logo'
                width={500}
                height={500}
              />
            </div>
            <div className='w-full my-4 relative z-40'>
              <div className='flex mb-5 justify-between items-center w-full'>
                <h1 className='text-xl font-semibold'>GitHub</h1>
                <h1 className='px-3 border border-gray-500 rounded-full'>
                  80%
                </h1>
              </div>
              <div
                id='feel1'
                className='w-[100%] relative rounded-full bg-gray-600 h-1'></div>
            </div>
          </div>
          <div
            id='EduCard'
            className='skill w-full relative py-2 flex gap-5 border border-gray-500 px-3 rounded-lg'>
            <div className='relative z-40 w-[120px] bg-Skills rounded-full border-[0.5px] border-[#274876] flex items-center justify-center'>
              <Image
                className='w-[65px]'
                src='/img/About/Experience/gsap.png'
                alt='HTML logo'
                width={500}
                height={500}
              />
            </div>
            <div className='w-full my-4 relative z-40'>
              <div className='flex mb-5 justify-between items-center w-full'>
                <h1 className='text-xl font-semibold'>Gsap</h1>
                <h1 className='px-3 border border-gray-500 rounded-full'>
                  75%
                </h1>
              </div>
              <div
                id='feel6'
                className='w-[100%] relative rounded-full bg-gray-600 h-1'></div>
            </div>
          </div>
        </div>
        <div
          id='skill2'
          className='flex flex-col sm:w-1/2 lg:mx-0 xs:mx-auto lg:w-full justify-center xs:px-3 lg:px-0'>
          <h1
            id='Edu'
            className='md:text-4xl xs:text-3xl font-semibold relative pb-7 text-center'>
            My Skills
          </h1>
          <p className='text-gray-400'>
            As a frontend developer, I have extensive practice in HTML, CSS,
            JavaScript, and React.js, which I utilize to create exceptional and
            dynamic websites with excellent UX and UI, resulting in high user
            satisfaction. Moreover, since most website traffic comes from mobile
            devices, I provide mobile-responsive websites using Tailwind CSS,
            Bootstrap, and Media Queries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
