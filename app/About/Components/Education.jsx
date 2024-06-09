import React from "react";
import EduCard from "./EduCard";

const Education = () => {
  return (
    <div className="w-full min-h-screen grid xs:grid-cols-1 lg:grid-cols-3 place-content-center lg:pr-10 md:gap-3 lg:gap-16 pl-3 bg-[#101727] text-white not-italic font-Barlow py-24 tracking-wide border-b border-gray-500">
      <div className="flex justify-center items-center py-10">
        <div className="w-[400px]">
          <h1
            id="Edu"
            className="md:text-4xl xs:text-3xl font-semibold relative pb-7 text-center"
          >
            Education
          </h1>
          <p className="md:text-[15px] xs:text-sm tracking-wider font-light">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
      <div className="lg:col-span-2 w-full h-full">
        <EduCard />
      </div>
    </div>
  );
};

export default Education;
