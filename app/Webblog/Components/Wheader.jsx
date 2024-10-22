/** @format */
"use client";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
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
      <img
        className='w-full h-full object-cover  absolute'
        src='/img/Strength/Blogs/webblog.jpeg'
        alt=''
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
