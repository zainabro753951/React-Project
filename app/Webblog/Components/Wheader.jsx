/** @format */
"use client";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
<<<<<<< HEAD
import Image from "next/image";
=======
>>>>>>> 699f0447ad56cefb7b985bda99fa15097be21b62
gsap.registerPlugin(useGSAP, ScrollTrigger);
const Wheader = () => {
  const blog_h1 = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".h1", {
        scale: 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
      });
    });

    return () => ctx.revert(); // Clean up the context when the component unmounts
  }, []);
  const [name, setname] = useState("My Journey of Web Development Blog");
  return (
    <div className='w-full h-[60vh] relative font-Barlow not-italic'>
<<<<<<< HEAD
      <Image
      width={500}
      height={500}
        className='w-full h-full object-cover  absolute'
        src='/img/Strength/Blogs/webblog.jpeg'
        alt='HTMl CSS and JavaScript blog header image'
=======
      <img
        className='w-full h-full object-cover  absolute'
        src='/img/Strength/Blogs/webblog.jpeg'
        alt=''
>>>>>>> 699f0447ad56cefb7b985bda99fa15097be21b62
      />
      <div className='absolute text-white bg-Blog w-full flex items-center md:px-20 h-full top-0 left-0'>
        <h1 className='md:text-5xl xs:text-3xl font-bold md:w-[60%] text-center'>
          {name.split("").map((item) => {
            return <span className='h1'>{item}</span>;
          })}
        </h1>
      </div>
    </div>
  );
};

export default Wheader;
