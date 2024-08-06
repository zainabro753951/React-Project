/** @format */
"use client";
let BlogsData = [
  {
    img: "/img/Strength/Blogs/web development journey.jpg",
    title: "My Journey of Web Development",
    shortDiscription:
      "In this blog, I have shared my entire web development journey fromstart to finish, how I learned everything on my own, and how I mastered all the technologies.",
    btn: "Explore More",
  },
  {
    img: "/img/Strength/Blogs/Tailwind-CSS.jpg",
    title: "Complete Journey of Tailwind CSS ",
    shortDiscription:
      "Here are some tips and tricks that can help you in Tailwind CSS.”",
    btn: "Explore More",
  },
  {
    img: "/img/Strength/Blogs/GSAP.webp",
    title: "GSAP Animations (Complete guide for Beginners)",
    shortDiscription:
      "In this blog, I will destructure GSAP animations and explain in detail how GSAP helps in creating animations and how they work. I will break down the process of creating animations with GSAP and explain how they function.",
    btn: "Explore More",
  },
];
import React, { useEffect, useState } from "react";
import Projecttimer from "./Projecttimer";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const Blogs = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("#blog", {
        y: -150,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: "#blog",
          start: "top 80%",
          end: "top bottom 20%",
          toggleActions: "restart none none reverse",
        },
      });
    });

    return () => ctx.revert(); // Clean up the context when the component unmounts
  }, []);
  const blog1 = "2024-08-01T12:00:00";
  const blog2 = "2024-08-01T12:00:00";
  const blog3 = "2024-08-01T12:00:00";
  return (
    <>
      {BlogsData.map((items, index) => {
        return (
          <div
            id='blog'
            className='w-full bg-ServiceCard flex flex-col h-full relative rounded-xl'>
            <Image
              className='w-full h-[40%] object-cover rounded-t-xl'
              src={items.img}
              alt='Web Development Blog img'
              width={500}
              height={500}
            />
            <div className='p-3 flex flex-col justify-between gap-1 w-full h-full'>
              <div>
                {index === 0 ? (
                  <Projecttimer uploadDate={blog1} />
                ) : (
                  <p className='text-[#3763EB] font-semibold'>
                    Comming Soon...
                  </p>
                )}
                <h1 className='text-2xl font-bold'>{items.title}</h1>
                <p>{items.shortDiscription}</p>
              </div>
              <div className='flex pb-8 w-full justify-center'>
                <Link
                  className='py-2 px-6 bg-[#3EAEFF] text-white font-semibold rounded-lg text-lg transition-all duration-300 hover:bg-transparent border border-[#3EAEFF] hover:tracking-wide'
                  href={index === 0 ? "/Webblog" : ""}>
                  {items.btn}
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Blogs;
