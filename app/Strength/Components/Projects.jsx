import React from "react";

const Projects = () => {
  return (
    <div className="w-full flex flex-col min-h-screen bg-[#0D1423] text-white py-32">
      <div className="sm:w-1/2 px-3 mx-auto text-center">
        <h1 className="text-4xl pb-3">Latest Projects</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2">
        <div className="mx-auto">
          <div>
            <img className="w-[95%] relative z-40 h-full mx-auto" src="/img/Strength/Projects/proj-1.webp" alt="" />
          </div>
          <div className="bg-ServiceCard pb-2 rounded-lg w-full h-[25vh] flex flex-col justify-end relative -top-16">
            <div className="flex w-full justify-between px-4 text-sm py-1">
              <h1>Web Development</h1>
              <h1>1 Month Ago</h1>
            </div>
            <h1 className="px-4">Best Wireframe Tools For Web Designers. </h1>
          </div>
        </div>
        <div className="mx-auto">
          <div>
            <img className="w-[95%] relative z-40 h-full mx-auto" src="/img/Strength/Projects/proj-2.webp" alt="" />
          </div>
          <div className="bg-ServiceCard pb-2 rounded-lg w-full h-[25vh] flex flex-col justify-end relative -top-16">
            <div className="flex w-full justify-between px-4 text-sm py-1">
              <h1>Web Development</h1>
              <h1>1 Month Ago</h1>
            </div>
            <h1 className="px-4">Best Wireframe Tools For Web Designers. </h1>
          </div>
        </div>
        <div className="mx-auto lg:col-span-1 md:col-span-2">
          <div>
            <img className="w-[95%] relative z-40 h-full mx-auto" src="/img/Strength/Projects/proj-3.webp" alt="" />
          </div>
          <div className="bg-ServiceCard pb-2 rounded-lg w-full h-[25vh] flex flex-col justify-end relative -top-16">
            <div className="flex w-full justify-between px-4 text-sm py-1">
              <h1>Web Development</h1>
              <h1>1 Month Ago</h1>
            </div>
            <h1 className="px-4">Best Wireframe Tools For Web Designers. </h1>
          </div>
        </div>
      </div>
      <button className="mx-auto py-2 px-6 bg-[#3EAEFF] text-white font-semibold rounded-lg text-lg transition-all duration-300 hover:bg-transparent border border-[#3EAEFF] hover:tracking-wide">View More</button>
    </div>
  );
};

export default Projects;
