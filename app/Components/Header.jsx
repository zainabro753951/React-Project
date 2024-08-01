/** @format */

"use client";
import MenuIcon from "./HMenu";

const Header = () => {
  return (
    <div className=' max-w-[1600px] mx-auto z-[9999] -translate-x-[50%] left-[50%] fixed w-full'>
      <div className='flex font-Barlow not-italic xs:justify-around md:justify-between px-4 py-4'>
        <img className='md:w-[150px] xs:w-[100px]' src='/img/logo.png' alt='' />
        <MenuIcon />
      </div>
    </div>
  );
};

export default Header;
