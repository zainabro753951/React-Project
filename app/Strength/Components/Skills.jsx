"use client"
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const Skills = () => {
  const {contextSafe} = useGSAP()
  useEffect(contextSafe(() => {
    gsap.from(".skill", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "bounce",
      stagger: 0.2,
      scrollTrigger:  {
        trigger: ".skill",
        start: "top 80%",
        end: "top bottom 20%",
        toggleActions: "restart none none reverse"
      }
    })
    gsap.from("#skill2", {
      x: 400,
      opacity: 0,
      duration: 1,
      ease: "power4",
      scrollTrigger:  {
        trigger: "#skill2",
        start: "top 80%",
        end: "top bottom 20%",
        toggleActions: "restart none none reverse"
      }
    })
  }), [])
  
  return (
    <div className="w-full overflow-x-hidden font-Barlow not-italic min-h-[100vh] lg:grid xs:flex flex-col-reverse lg:grid-cols-3 gap-5 bg-[#0F182B] border-t border-gray-500 text-white place-content-center">
      <div className="col-span-2 grid md:grid-cols-2 px-4 gap-4 auto-rows-min">
        <div id="EduCard" className="skill w-full relative py-2 flex gap-5 border border-gray-500 px-3 rounded-lg">
          <div className="relative z-40">
            <img
              className="w-[120px]"
              src="/img/About/Experience/HTML.png"
              alt=""
            />
          </div>
          <div className="w-full my-4 relative z-40">
            <div className="flex mb-5 justify-between items-center w-full">
              <h1 className="text-xl font-semibold">HTML</h1>
              <h1 className="px-3 border border-gray-500 rounded-full">95%</h1>
            </div>
            <div
              id="feel1"
              className="w-[100%] relative rounded-full bg-gray-600 h-1"
            ></div>
          </div>
        </div>
        <div id="EduCard" className="skill w-full py-2 relative flex gap-5 border border-gray-500 px-3 rounded-xl">
          <div className="relative z-40">
            <img
              className="w-[120px]"
              src="/img/About/Experience/CSS.png"
              alt=""
            />
          </div>
          <div className="w-full my-4 relative z-40">
            <div className="flex pb-5 justify-between items-center w-full">
              <h1 className="text-xl font-semibold">CSS</h1>
              <h1 className="px-3 border border-gray-500 rounded-full">80%</h1>
            </div>
            <div
              id="feel2"
              className="w-[100%] relative rounded-full bg-gray-600 h-1"
            ></div>
          </div>
        </div>
        <div id="EduCard" className="skill w-full py-2 relative flex gap-5 border border-gray-500 px-3 rounded-lg">
          <div className="relative z-40">
            <img
              className="w-[120px]"
              src="/img/About/Experience/JavaScript.png"
              alt=""
            />
          </div>
          <div className="w-full my-4 relative z-40">
            <div className="flex pb-5 justify-between items-center w-full">
              <h1 className="text-xl font-semibold">JavaScript</h1>
              <h1 className="px-3 border border-gray-500 rounded-full">80%</h1>
            </div>
            <div
              id="feel3"
              className="w-[100%] relative rounded-full bg-gray-600 h-1"
            ></div>
          </div>
        </div>
        <div id="EduCard" className="skill w-full py-2 relative flex gap-5 border border-gray-500 px-3 rounded-lg">
          <div className="relative z-40">
            <img
              className="w-[120px]"
              src="/img/About/Experience/Reactjs.png"
              alt=""
            />
          </div>
          <div className="w-full my-4 relative z-40">
            <div className="flex pb-5 justify-between items-center w-full">
              <h1 className="text-xl font-semibold">React</h1>
              <h1 className="px-3 border border-gray-500 rounded-full">68%</h1>
            </div>
            <div
              id="feel4"
              className="w-[100%] relative rounded-full bg-gray-600 h-1"
            ></div>
          </div>
        </div>
      </div>
      <div id="skill2" className="flex flex-col sm:w-1/2 lg:mx-0 xs:mx-auto lg:w-full justify-center xs:px-3 lg:px-0">
        <h1
          id="Edu"
          className="md:text-4xl xs:text-3xl font-semibold relative pb-7 text-center"
        >
          My Skills
        </h1>
        <p className="text-gray-400">
        As a frontend developer, I have extensive practice in HTML, CSS, JavaScript, and React.js, which I utilize to create exceptional and dynamic websites with excellent UX and UI, resulting in high user satisfaction. Moreover, since most website traffic comes from mobile devices, I provide mobile-responsive websites using Tailwind CSS, Bootstrap, and Media Queries.
        </p>
      </div>
    </div>
  );
};

export default Skills;
