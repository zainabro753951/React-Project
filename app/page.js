/** @format */

import React, { Suspense, lazy } from "react";
import AboutHero from "./About/Components/AboutHero";
import AboutLink from "./Components/AboutLink";
import Projects from "./Strength/Components/Projects";
import Skills from "./Strength/Components/Skills";
import StrengthLink from "./Components/StrengthLink";
import Map from "./Contact/Components/Map";
import Footer from "./About/Components/Footer";
const Header = lazy(() => import("./Components/Header"));
const Hero = lazy(() => import("./Components/Hero"));
const page = () => {
  return (
    <div>
      <Suspense
        fallback={
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
      </Suspense>
    </div>
  );
};

export default page;
