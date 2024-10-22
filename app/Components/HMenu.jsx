/** @format */

// MenuIcon.js
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const MenuIcon = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      {/* Menu Icon */}
      <div
        className='relative right-6 z-[60] flex flex-col justify-between md:w-8 md:h-6 xs:w-6 xs:h-5 cursor-pointer'
        onClick={toggleMenu}>
        <div
          className={`md:h-1 xs:h-0.5 rounded-full bg-white transform transition-transform duration-300 ease-in-out ${
            isActive ? "rotate-45 translate-y-[10px]" : ""
          }`}></div>
        <div
          className={`md:h-1 xs:h-0.5 rounded-full bg-white transition-opacity duration-300 ease-in-out ${
            isActive ? "opacity-0" : ""
          }`}></div>
        <div
          className={`md:h-1 xs:h-0.5 rounded-full bg-white transform transition-transform duration-300 ease-in-out ${
            isActive ? "-rotate-45 -translate-y-[10px]" : ""
          }`}></div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed w-full h-screen bg-black/70 z-50 backdrop-blur-md overflow-hidden transition-all duration-700 ${
          isActive ? "top-0 right-0" : "-top-[100%] -right-[100%]"
        }`}>
        <div className='grid md:grid-cols-2 place-content-center'>
          <div className='flex flex-col items-center justify-around font-extrabold text-white transition-all duration-300 xs:h-[50vh] md:h-screen xs:text-xl sm:text-3xl md:text-5xl'>
            <Link
              href='/'
              className='transition-all duration-300 hover:text-blue-700'>
              Home
            </Link>
            <Link
              href='/About'
              className='transition-all duration-300 hover:text-blue-700'>
              About
            </Link>
            <Link
              href='/Work'
              className='transition-all duration-300 hover:text-blue-700'>
              My Work
            </Link>
            <Link
              href='/Strength'
              className='transition-all duration-300 hover:text-blue-700'>
              Strength
            </Link>
            <Link
              href='/Contact'
              className='transition-all duration-300 hover:text-blue-700'>
              Contact
            </Link>
          </div>
          <div className='h-full md:flex justify-end items-end xs:p-7 md:p-16'>
            <div className='md:w-[80%] p-4 border-l-2 border-blue-800 md:h-[40%]'>
              <h1 className='xs:text-xl sm:text-3xl md:text-4xl mb-9 font-semibold text-white'>
                Follow Me
              </h1>
              <div className='flex gap-5'>
                <a
                  href='https://web.facebook.com/profile.php?id=61554257380915'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <Image
                    className='md:w-[60px] xs:w-[50px]'
                    src='/img/Headerlinks/fb.svg'
                    alt='Facebook icon'
                    width={500}
                    height={500}
                  />
                </a>
                <a
                  href='https://www.linkedin.com/in/zain-abro-449399308/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <Image
                    className='md:w-[60px] xs:w-[50px]'
                    src='/img/Headerlinks/in.svg'
                    alt='Linkedin icon'
                    width={500}
                    height={500}
                  />
                </a>
                <a
                  href='https://github.com/zainabro753951'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <Image
                    className='md:w-[60px] xs:w-[50px] rounded-full'
                    src='/img/About/Experience/github2.jpg'
                    alt='GitHub Icon'
                    width={500}
                    height={500}
                  />
                </a>
                <a
                  href='https://www.instagram.com/zain_abro886/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <Image
                    className='md:w-[60px] xs:w-[50px]'
                    src='/img/Headerlinks/Instagram.webp'
                    alt='Instagram icon'
                    width={500}
                    height={500}
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
