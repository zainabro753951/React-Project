/** @format */

"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import React, { useEffect } from "react";
import Projecttimer from "./Projecttimer";
import Image from "next/image";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const Projects = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("#pro", {
        y: -150,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: "#pro",
          start: "top 80%",
          end: "top bottom 20%",
          toggleActions: "restart none none reverse",
        },
      });
    });

    return () => ctx.revert(); // Clean up the context when the component unmounts
  }, []);
  const project1 = "2024-07-01T12:00:00";
  const project2 = "2024-07-19T12:00:00";
  const project3 = "2024-07-10T12:00:00";
  return (
    <div className='w-full bg-[#0D1423]'>
      <div
        id='slider'
        className='max-w-[1600px] mx-auto font-Barlow not-italic flex relative flex-col h-full overflow-hidden text-white py-16'>
        <div className='sm:w-1/2 px-3 mx-auto text-center'>
          <h1 className='text-4xl pb-3 font-semibold'>Latest Projects</h1>
          <p className='text-gray-400'>
            Because I'm a highly skilled frontend developer, I've practiced
            extensively in this field by working on numerous projects.
            Typically, people say that creating just three projects is enough to
            satisfy clients and interviewers, but I believe that the more
            projects you create, the more use cases you'll encounter, and the
            more skills you'll develop. Moreover, I've learned many things by
            working on projects that aren't taught in schools, institutes, or
            colleges - they can only be learned through practice and reading.
          </p>
        </div>
        <div className='mt-16 grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-10 px-7'>
          <div id='pro' className='mx-auto'>
            <div>
              <Image
                className='md:w-[95%] rounded-lg md:relative z-40 h-full mx-auto'
                src='/img/My Work/Gatsby.jpg'
                alt='Gatsby Clone project img'
                width={700}
                height={700}
              />
            </div>
            <div className='bg-ServiceCard pb-2 rounded-lg w-full md:h-[25vh] flex flex-col justify-end md:relative -top-16'>
              <div className='flex w-full justify-between px-4 text-sm py-1'>
                <h1>Web Development</h1>
                <Projecttimer uploadDate={project1} />
              </div>
              <h1 className='px-4'>Developed by React.js </h1>
            </div>
          </div>
          <div id='pro' className='mx-auto'>
            <div>
              <img
                className='md:w-[95%] /img/My Work/Gatsby.jpg md:relative rounded-lg z-40 h-full mx-auto'
                src='/img/My Work/protect harvest.png'
                alt='Shopo website project img'
                width={500}
                height={500}
              />
            </div>
            <div className='bg-ServiceCard pb-2 rounded-lg w-full md:h-[25vh] flex flex-col justify-end md:relative -top-16'>
              <div className='flex w-full justify-between px-4 text-sm py-1'>
                <h1>Web Development</h1>
                <Projecttimer uploadDate={project2} />
              </div>
              <h1 className='px-4'>Best Wireframe Tools For Web Designers. </h1>
            </div>
          </div>
          <div id='pro' className='mx-auto mb-6 lg:col-span-1 md:col-span-2'>
            <div>
              <Image
                className='md:w-[95%] md:relative rounded-lg z-40 h-full mx-auto'
                src='/img/My Work/Edusty.jpg'
                alt='Edusty website project img'
                width={500}
                height={500}
              />
            </div>
            <div className='bg-ServiceCard pb-2 rounded-lg w-full md:h-[25vh] flex flex-col justify-end md:relative -top-16'>
              <div className='flex w-full justify-between px-4 text-sm py-1'>
                <h1>Web Development</h1>
                <Projecttimer uploadDate={project3} />
              </div>
              <h1 className='px-4'>Developed by React.js and Tailwind css </h1>
            </div>
          </div>
        </div>
        <Link
          href={"/Work"}
          className='mx-auto absolute bottom-5 left-1/2 -translate-x-1/2 py-2 px-6 bg-[#3EAEFF] text-white font-semibold rounded-lg text-lg transition-all duration-300 hover:bg-transparent border border-[#3EAEFF] hover:tracking-wide'>
          View More
        </Link>
      </div>
    </div>
  );
};

export default Projects;
