/** @format */

import React, { Suspense, lazy } from "react";
<<<<<<< HEAD
import AboutHero from "./About/Components/AboutHero";
import AboutLink from "./Components/AboutLink";
import Projects from "./Strength/Components/Projects";
import Skills from "./Strength/Components/Skills";
import StrengthLink from "./Components/StrengthLink";
import Map from "./Contact/Components/Map";
import Footer from "./About/Components/Footer";
=======
>>>>>>> 699f0447ad56cefb7b985bda99fa15097be21b62
const Header = lazy(() => import("./Components/Header"));
const Hero = lazy(() => import("./Components/Hero"));
const page = () => {
  return (
    <div>
      <Suspense
        fallback={
<<<<<<< HEAD
          <div className="w-full h-screen flex justify-center items-center text-5xl font-Barlow not-italic font-bold bg-[#1b1d21] text-white">
            <img
              className=" animate-spin w-[500px] h-[200px] object-cover"
              src="/img/reloader.gif"
            />
          </div>
        }
      >
        <Header />
        <Hero />
        <AboutHero />
        <AboutLink />
        <Projects />
        <Skills />
        <StrengthLink />
        <Map />
        <Footer />
=======
          <div className='w-full h-screen flex justify-center items-center text-5xl font-Barlow not-italic font-bold bg-[#1b1d21] text-white'>
            <img
              className=' animate-spin w-[500px] h-[200px] object-cover'
              src='/img/reloader.gif'
            />
          </div>
        }>
        <Header />
        <Hero />
>>>>>>> 699f0447ad56cefb7b985bda99fa15097be21b62
      </Suspense>
    </div>
  );
};

export default page;
