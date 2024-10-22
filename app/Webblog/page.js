/** @format */

import React, { Suspense, lazy } from "react";
const Footer = lazy(() => import("../About/Components/Footer"));
const Wblog = lazy(() => import("./Components/Wblog"));
const Wheader = lazy(() => import("./Components/Wheader"));
const Header = lazy(() => import("../Components/Header"));

const Webblog = () => {
  return (
    <div className=' overflow-x-hidden'>
      <Suspense
        fallback={
          <div className='w-full h-screen flex justify-center items-center text-5xl font-Barlow not-italic font-bold bg-[#1b1d21] text-white'>
            <img
              className=' animate-spin w-[500px] h-[200px] object-cover'
              src='/img/reloader.gif'
            />
          </div>
        }>
        <Header />
        <Wheader />
        <Wblog />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Webblog;
