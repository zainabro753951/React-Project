import React from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <div className="w-full font-Barlow not-italic min-h-screen grid lg:grid-cols-3 xs:grid-cols-1 gap-5 bg-[#111727] bg-cover bg-no-repeat bg-center bg-[url(/img/About/Experience/exp_bg.webp)] text-white py-28 borde-gray-500 border-b  px-3">
      <div className="flex flex-col items-center w-full">
        <div className="sm:w-1/2 lg:w-full">
        <h1
          id="Edu"
          className="md:text-4xl xs:text-3xl font-semibold relative pb-7 text-center"
        >
          What I Do
        </h1>
        <p className="text-gray-400">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
          <img className="mt-10" src="/img/Strength/do_img.webp" alt="" />
        </div>
      </div>
      <div className="col-span-2 grid md:grid-cols-2 gap-3">
        <ServicesCard/>
      </div>
    </div>
  );
};

export default Services;
