/** @format */

"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const Map = () => {
  const getInTouchRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(getInTouchRef.current, {
        x: 400,
        duration: 2,
        opacity: 0,
        ease: "power4",
      });
    });

    return () => ctx.revert(); // Clean up the context when the component unmounts
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='w-full overflow-x-hidden h-screen font-Barlow not-italic grid lg:grid-cols-3 gap-4 px-4 place-items-center text-white py-24 bg-[#0D1320] border-b border-gray-500 bg-[url("/img/hero.webp")] bg-cover bg-center'>
      <div className='relative col-span-2 w-full h-full'>
        {isLoading && (
          <div className='absolute inset-0 flex items-center justify-center bg-gray-100'>
            <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-500'></div>
          </div>
        )}
        {/* Your map component */}
        {!isLoading && (
          <div className='w-full h-full'>
            {/* Replace this with your actual map component */}
            <iframe
              className='w-full h-full'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28898.192348043136!2d68.51749242197744!3d25.126424331458196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c3f781c0ce35d%3A0xf89f5be8e83b69bd!2sTando%20Muhammad%20Khan%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1721301932811!5m2!1sen!2s'
              loading='lazy'
              allowfullscreen=''
              referrerpolicy='no-referrer-when-downgrade'></iframe>
          </div>
        )}
      </div>
      <div ref={getInTouchRef}>
        <h1 className='md:text-3xl xs:text-xl font-bold'>Get in Touch</h1>
        <p>
          Hi everyone, I'm excited to connect with you all! If you have any
          questions, need help with a project, need any services from me, want
          to hire me, or just want to say hi, please don't hesitate to reach out
          to me. I'm looking forward to hearing from you!
        </p>
      </div>
    </div>
  );
};

export default Map;
