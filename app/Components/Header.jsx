/** @format */

"use client";
import MenuIcon from "./HMenu";

const Header = () => {
  return (
    <div className=' max-w-[1600px] mx-auto z-[9999] -translate-x-[50%] left-[50%] fixed w-full'>
      <div className='flex font-Barlow not-italic justify-between items-center md:px-4 md:py-4'>
        <img
          className='md:w-[80px] xs:w-[50px]'
          src='/img/logo2.png'
          alt='Logo'
        />
        <MenuIcon />
      </div>
    </div>
  );
};

export default Header;
