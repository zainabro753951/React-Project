import React from "react";

const Skills = () => {
  return (
    <div className="w-full font-Barlow not-italic min-h-[100vh] grid xs:grid-cols-1 lg:grid-cols-3 gap-5 bg-[#0F182B] border-t border-gray-500 text-white place-content-center">
      <div className="col-span-2 grid xs:grid-cols-1 md:grid-cols-2 px-4 gap-4 auto-rows-min">
        <div id="EduCard" className="w-full relative flex gap-5 border border-gray-500 px-3 rounded-lg">
          <div className="relative z-40">
            <img
              className="w-full h-full"
              src="/img/Strength/Skills/skill-1.svg"
              alt=""
            />
          </div>
          <div className="w-full my-4 relative z-40">
            <div className="flex mb-5 justify-between items-center w-full">
              <h1 className="text-xl font-semibold">Photoshop</h1>
              <h1 className="px-3 border border-gray-500 rounded-full">95%</h1>
            </div>
            <div
              id="feel"
              className="w-[95%] relative rounded-full bg-gray-600 h-1"
            ></div>
          </div>
        </div>
        <div id="EduCard" className="w-full relative flex gap-5 border border-gray-500 px-3 rounded-xl">
          <div className="relative z-40">
            <img
              className="w-full h-full"
              src="/img/Strength/Skills/skill-2.svg"
              alt=""
            />
          </div>
          <div className="w-full my-4 relative z-40">
            <div className="flex pb-5 justify-between items-center w-full">
              <h1 className="text-xl font-semibold">Photoshop</h1>
              <h1 className="px-3 border border-gray-500 rounded-full">95%</h1>
            </div>
            <div
              id="feel"
              className="w-[95%] relative rounded-full bg-gray-600 h-1"
            ></div>
          </div>
        </div>
        <div id="EduCard" className="w-full relative flex gap-5 border border-gray-500 px-3 rounded-lg">
          <div className="relative z-40">
            <img
              className="w-full h-full"
              src="/img/Strength/Skills/skill-3.svg"
              alt=""
            />
          </div>
          <div className="w-full my-4 relative z-40">
            <div className="flex pb-5 justify-between items-center w-full">
              <h1 className="text-xl font-semibold">Photoshop</h1>
              <h1 className="px-3 border border-gray-500 rounded-full">95%</h1>
            </div>
            <div
              id="feel"
              className="w-[95%] relative rounded-full bg-gray-600 h-1"
            ></div>
          </div>
        </div>
        <div id="EduCard" className="w-full relative flex gap-5 border border-gray-500 px-3 rounded-lg">
          <div className="relative z-40">
            <img
              className="w-full h-full"
              src="/img/Strength/Skills/skill-4.svg"
              alt=""
            />
          </div>
          <div className="w-full my-4 relative z-40">
            <div className="flex pb-5 justify-between items-center w-full">
              <h1 className="text-xl font-semibold">Photoshop</h1>
              <h1 className="px-3 border border-gray-500 rounded-full">95%</h1>
            </div>
            <div
              id="feel"
              className="w-[95%] relative rounded-full bg-gray-600 h-1"
            ></div>
          </div>
        </div>
        <div id="EduCard" className="w-full relative flex gap-5 border border-gray-500 px-3 rounded-lg">
          <div className="relative z-40">
            <img
              className="w-full h-full"
              src="/img/Strength/Skills/skill-5.svg"
              alt=""
            />
          </div>
          <div className="w-full my-4 relative z-40">
            <div className="flex pb-5 justify-between items-center w-full">
              <h1 className="text-xl font-semibold">Photoshop</h1>
              <h1 className="px-3 border border-gray-500 rounded-full">95%</h1>
            </div>
            <div
              id="feel"
              className="w-[95%] relative rounded-full bg-gray-600 h-1"
            ></div>
          </div>
        </div>
        <div id="EduCard" className="w-full relative flex gap-5 border border-gray-500 px-3 rounded-lg">
          <div className="relative z-40">
            <img
              className="w-full h-full"
              src="/img/Strength/Skills/skill-6.svg"
              alt=""
            />
          </div>
          <div className="w-full my-4 relative z-40">
            <div className="flex pb-5 justify-between items-center w-full">
              <h1 className="text-xl font-semibold">Photoshop</h1>
              <h1 className="px-3 border border-gray-500 rounded-full">95%</h1>
            </div>
            <div
              id="feel"
              className="w-[95%] relative rounded-full bg-gray-600 h-1"
            ></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:w-1/2 lg:mx-0 xs:mx-auto lg:w-full justify-center xs:px-3 lg:px-0">
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
      </div>
    </div>
  );
};

export default Skills;
