// MenuIcon.js
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import React, { useState } from "react";

const MenuIcon = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
      <div
        className="flex flex-col fixed right-6 z-50 justify-between md:w-8 md:h-6 xs:w-6 xs:h-5 cursor-pointer"
        onClick={toggleMenu}
      >
        <div
          className={`md:h-1 xs:h-0.5 rounded-full bg-white transform transition-transform duration-300 ease-in-out ${
            isActive ? "rotate-45 translate-y-[10px]" : ""
          }`}
        ></div>
        <div
          className={`md:h-1 xs:h-0.5 rounded-full bg-white transition-opacity duration-300 ease-in-out ${
            isActive ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`md:h-1 xs:h-0.5 rounded-full bg-white transform transition-transform duration-300 ease-in-out ${
            isActive ? "-rotate-45 -translate-y-[10px]" : ""
          }`}
        ></div>
      </div>
      <div
        className={` fixed transition-all duration-700 w-full h-screen  overflow-hidden backdrop-blur-md bg-black/70 ${
          isActive
            ? "top-0 right-0"
            : "-top-[100%] -right-[100%]"
        }`}
      >
        <div className={` grid md:grid-cols-2 place-content-center`}>
          <div className="flex flex-col items-center justify-around font-extrabold text-white transition-all duration-300 xs:h-[50vh] md:h-screen xs:text-xl sm:text-3xl md:text-5xl">
            <Link
              className={`transition-all duration-300 hover:text-blue-700`}
              href="/"
            >
              Home
            </Link>
            <Link
              className="transition-all duration-300 hover:text-blue-700"
              href="/About"
            >
              About
            </Link>
            <Link
              className="transition-all duration-300 hover:text-blue-700"
              href="/Work"
            >
              My Work
            </Link>
            <Link
              className="transition-all duration-300 hover:text-blue-700"
              href="/Strength"
            >
              Strength
            </Link>
            <Link
              className="transition-all duration-300 hover:text-blue-700"
              href="/Contact"
            >
              Contact
            </Link>
          </div>
          <div className="h-full md:flex justify-end items-end xs:p-7 md:p-16">
            <div className="md:w-[80%] p-4 border-l-2 border-blue-800 md:h-[40%]">
              <h1 className="xs:text-xl sm:text-3xl md:text-4xl mb-9 font-semibold text-white">
                Follow Me
              </h1>
              <div className="flex gap-5">
                <a href="https://web.facebook.com/profile.php?id=61554257380915" target="_blank">
                  <img
                    className="md:w-[60px] xs:w-[50px]"
                    src="/img/Headerlinks/fb.svg"
                    alt="Facebook"
                  />
                </a>
                <a href="https://www.linkedin.com/in/zain-abro-449399308/" target="_blank">
                  <img
                    className="md:w-[60px] xs:w-[50px]"
                    src="/img/Headerlinks/in.svg"
                    alt="Linkedin"
                  />
                </a>
                <a href="https://www.fiverr.com/zain_abro159357?public_mode=true" target="_blank">
                  <img
                    className="md:w-[75px] xs:w-[50px] rounded-full"
                    src="/img/Headerlinks/fiverr.png"
                    alt="Pinterest"
                  />
                </a>
                <a href="https://www.instagram.com/zain_abro886/" target="_blank">
                  <img
                    className="md:w-[60px] xs:w-[50px]"
                    src="/img/Headerlinks/Instagram.webp"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuIcon;
