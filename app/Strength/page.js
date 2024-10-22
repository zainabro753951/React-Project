/** @format */

import React, { Suspense, lazy } from "react";
import Blogpage from "./Components/Blogpage";
const Header = lazy(() => import("../Components/Header"));
const Services = lazy(() => import("./Components/Services"));
const Skills = lazy(() => import("./Components/Skills"));
const Projects = lazy(() => import("./Components/Projects"));
const Footer = lazy(() => import("../About/Components/Footer"));

const Strength = () => {
  return (
    <div>
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
        <Services />
        <Skills />
        <Projects />
        <Blogpage />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Strength;
