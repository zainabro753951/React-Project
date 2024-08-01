/** @format */

"use client";
let addressData = [
  {
    img: "/img/Contact/add-1.svg",
    name: "Phone",
    number_1: "+92 3032150993",
    number_2: "+92 3177114293",
  },
  {
    img: "/img/Contact/add-2.svg",
    name: "Email",
    number_1: "zainabro866@gmail.com",
    number_2: "zainulabbasabro@gmail.com",
  },
  {
    img: "/img/Contact/add-3.svg",
    name: "Address",
    number_1: "Behrani Muhallah Tando Muhammad Khan",
    number_2: "Sindh Pakistan",
  },
];

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
const Address = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".address", {
        y: -150,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".address",
          start: "top 80%",
          end: "top bottom 20%",
          toggleActions: "restart none none reverse",
        },
      });
    });

    return () => ctx.revert(); // Clean up the context when the component unmounts
  }, []);

  return (
    <div className='w-full lg:min-h-[50vh] grid border-b py-28 border-gray-500 md:grid-cols-2 lg:grid-cols-3 place-content-center md:px-16 gap-5 bg-[#0D1320] text-white'>
      {addressData.map((items, index) => {
        return (
          <div
            id='EduCard'
            className={`address bg-ServiceCard relative px-4 w-full h-fit flex gap-6 py-7 rounded-xl ${
              index === 2 ? "md:col-span-2 lg:col-span-1" : ""
            }`}>
            <div className='relative z-40'>
              <img src={items.img} alt='' />
            </div>
            <div className='relative z-40'>
              <h1 className='md:text-2xl font-semibold'>{items.name}</h1>
              <p className='md:text-md xs:text-sm'>{items.number_1}</p>
              <p className='md:text-md xs:text-sm'>{items.number_2}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Address;
