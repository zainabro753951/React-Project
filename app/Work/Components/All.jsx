import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useEffect } from "react";

const All = () => {
  const {contextSafe} = useGSAP()
  useEffect(contextSafe(() => {
    gsap.from("#work", {
      scale: 0,
      opacity: 0,
      duration: 1,
      stagger: 0.2
    })
  }), [])
  
  return (
    <>
      <div className="md:grid xs:flex flex-col grid-cols-2 gap-5">
        <div id="work" className="w-full h-full relative">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="/img/My Work/Shopo.jpg"
            alt=""
          />
          <div
            id="hoverable"
            className="absolute w-full overflow-hidden left-0 transition-all duration-300 ease-in-out md:leading-[2rem] h-[0%] bg-WorkLinear rounded-xl flex items-end bottom-0"
          >
            <div className="md:py-11 md:px-5 xs:px-2">
              <h1 className="md:text-2xl xs:text-lg font-semibold">Shopo Website</h1>
              <Link href="https://github.com/zainabro753951/Shopo-Website" target="_blank" className="text-md font-light duration-200 hover:text-violet-300">See more</Link>
            </div>
          </div>
        </div>
        <div id="work" className="w-full h-full relative">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="/img/My Work/Edusty.jpg"
            alt=""
          />
          <div
            id="hoverable"
            className="absolute w-full overflow-hidden left-0 transition-all duration-300 ease-in-out md:leading-[2rem] h-[0%] bg-WorkLinear rounded-xl flex items-end bottom-0"
          >
            <div className="md:py-11 md:px-5 xs:px-2">
              <h1 className="md:text-2xl xs:text-lg font-semibold">Edusty Website</h1>
              <Link href="https://github.com/zainabro753951/Edusty-Education" target="_blank" className="text-md font-light duration-200 hover:text-violet-300">See more</Link>
            </div>
          </div>
        </div>
        <div id="work" className="col-span-2 w-full h-full relative">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="/img/My Work/Gatsby.jpg"
            alt=""
          />
          <div
            id="hoverable"
            className="absolute w-full overflow-hidden left-0 transition-all duration-300 ease-in-out leading-[2rem] h-[0%] bg-WorkLinear rounded-xl flex items-end bottom-0"
          >
            <div className="md:py-11 md:px-5 xs:px-2">
              <h1 className="md:text-2xl xs:text-lg font-semibold">Gatsby Website</h1>
              <Link href="https://github.com/zainabro753951/Gatsby-Clone" target="_blank" className="text-md font-light duration-200 hover:text-violet-300">See more</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 xs:grid-cols-1 gap-5 mt-5">
        <div id="work" className="row-span-2 w-full h-full relative">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="/img/My Work/Business Website.jpg"
            alt=""
          />
          <div
            id="hoverable"
            className="absolute w-full overflow-hidden left-0 transition-all duration-300 ease-in-out leading-[2rem] h-[0%] bg-WorkLinear rounded-xl flex items-end bottom-0"
          >
            <div className="md:py-11 md:px-5 xs:px-2">
              <h1 className="md:text-2xl font-semibold">Agency Website</h1>
              <Link href="https://github.com/zainabro753951/Agency-Website" target="_blank" className="text-md font-light duration-200 hover:text-violet-300">See more</Link>
            </div>
          </div>
        </div>
        <div id="work" className="w-full h-full relative">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="/img/My Work/Agency Website.jpg"
            alt=""
          />
          <div
            id="hoverable"
            className="absolute w-full overflow-hidden left-0 transition-all duration-300 ease-in-out md:leading-[2rem] h-[0%] bg-WorkLinear rounded-xl flex items-end bottom-0"
          >
            <div className="md:py-11 md:px-5 xs:px-2">
              <h1 className="md:text-2xl font-semibold">Business Website</h1>
              <Link href="https://github.com/zainabro753951/Business-Website" target="_blank" className="text-md font-light duration-200 hover:text-violet-300">See more</Link>
            </div>
          </div>
        </div>
        <div id="work" className="w-full h-full relative">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="/img/My Work/Restaurent Website.jpg"
            alt=""
          />
          <div
            id="hoverable"
            className="absolute w-full overflow-hidden left-0 transition-all duration-300 ease-in-out md:leading-[2rem] h-[0%] bg-WorkLinear rounded-xl flex items-end bottom-0"
          >
            <div className="md:py-11 md:px-5 xs:px-2">
              <h1 className="md:text-2xl font-semibold">Restaurant Website</h1>
              <Link href="https://github.com/zainabro753951/Resturant-Website" target="_blank" className="text-md font-light duration-200 hover:text-violet-300">See more</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default All;
