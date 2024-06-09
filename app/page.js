import React, { Suspense, lazy } from "react";
const Header = lazy(() => import("./Components/Header"));
const Hero = lazy(() => import("./Components/Hero"));
const page = () => {
  return (
    <div>
      <Suspense fallback={<div className="w-full h-screen flex justify-center items-center text-5xl font-Barlow not-italic font-bold bg-[black] text-white"><p>Loading...</p></div>}>
        <Header />
        <Hero />
      </Suspense>
    </div>
  );
};

export default page;
