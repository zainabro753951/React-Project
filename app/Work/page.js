import React, { Suspense, lazy } from "react";
const Tabs = lazy(() => import("./Components/Work.jsx"));
const Header = lazy(() => import("../Components/Header"));
const Footer = lazy(() => import("../About/Components/Footer"));

const Work = () => {
  return (
    <>
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
        <div className="flex justify-center pb-20 bg-[#111727] w-full text-white min-h-screen">
          <Tabs />
        </div>
        <Footer />
      </Suspense>
    </>
  );
};

export default Work;
