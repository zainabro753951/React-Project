"use client"
import React, { Suspense, lazy } from "react";
import MenuIcon from "./HMenu";

const Header = () => {
    
  return (
    <div className="flex z-50 fixed xs:justify-around md:justify-between px-4 py-4">
      <img className="md:w-[150px] xs:w-[100px]" src="/img/logo.png" alt="" />
      <MenuIcon/>
    </div>
  );
};

export default Header;
