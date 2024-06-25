import React from "react";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="w-full relative md:min-h-screen background">
      <div className="grid md:grid-cols-1 place-content-center lg:grid-cols-3 gap-4 px-2 py-12 w-full md:min-h-screen relative z-40">
        <div className="lg:col-span-2 flex justify-center flex-col xs:gap-2 md:gap-6">
          <ExperienceCard />
        </div>
        <div className="flex justify-center xs:items-start md:items-center w-full h-full sm:mt-10 lg:mt-0 lg:justify-normal">
          <div className=" lg:w-full sm:w-[400px] h-fit">
            <h1
              id="Edu"
              className="md:text-4xl xs:text-3xl font-semibold relative pb-7 text-center text-white"
            >
              Experience
            </h1>
            <p className="xs:text-sm md:text-md text-white">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className="flex gap-3 mt-10">
              <a href="#">
                <img
                  className="transition-all w-[80px] border-t-2 border-l-2 border-r-2 border-[#284059] rounded-full duration-500 hover:rotate-[360deg]"
                  src="/img/About/Experience/HTML.png"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="transition-all w-[80px] border-t-2 border-l-2 border-r-2 border-[#284059] rounded-full duration-500 hover:rotate-[360deg]"
                  src="/img/About/Experience/CSS.png"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="transition-all w-[80px] border-t-2 border-l-2 border-r-2 border-[#284059] rounded-full duration-500 hover:rotate-[360deg]"
                  src="/img/About/Experience/JavaScript.png"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="transition-all w-[80px] border-t-2 border-l-2 border-r-2 border-[#284059] rounded-full duration-500 hover:rotate-[360deg]"
                  src="/img/About/Experience/Reactjs.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
