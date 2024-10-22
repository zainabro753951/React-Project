import React, { Suspense, lazy } from "react";
const Header = lazy(() => import("../Components/Header"));
const AboutHero = lazy(() => import("./Components/AboutHero"));
const Education = lazy(() => import("./Components/Education"));
const Footer = lazy(() => import("./Components/Footer"));

const About = () => {
  return (
    <div id="about-main">
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
        <AboutHero />
        <Education />
        <Footer />
      </Suspense>
    </div>
  );
};

export default About;
