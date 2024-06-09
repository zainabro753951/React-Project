import React from "react";

const All = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <div id="work" className="w-full h-full relative">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="/img/My Work/img1.webp"
            alt=""
          />
          <div
            id="hoverable"
            className="absolute w-full overflow-hidden left-0 transition-all duration-300 ease-in-out leading-[2rem] h-[0%] bg-WorkLinear rounded-xl flex items-end bottom-0"
          >
            <div className="py-11 px-5">
              <h1 className="text-md font-light">Website</h1>
              <h1 className="text-2xl font-semibold">Creative Website</h1>
            </div>
          </div>
        </div>
        <div id="work" className="w-full h-full relative">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="/img/My Work/img2.webp"
            alt=""
          />
          <div
            id="hoverable"
            className="absolute w-full overflow-hidden left-0 transition-all duration-300 ease-in-out leading-[2rem] h-[0%] bg-WorkLinear rounded-xl flex items-end bottom-0"
          >
            <div className="py-11 px-5">
              <h1 className="text-md font-light">Website</h1>
              <h1 className="text-2xl">Creative Website</h1>
            </div>
          </div>
        </div>
        <div id="work" className="col-span-2 w-full h-full relative">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="/img/My Work/img3.webp"
            alt=""
          />
          <div
            id="hoverable"
            className="absolute w-full overflow-hidden left-0 transition-all duration-300 ease-in-out leading-[2rem] h-[0%] bg-WorkLinear rounded-xl flex items-end bottom-0"
          >
            <div className="py-11 px-5">
              <h1 className="text-md font-light">Website</h1>
              <h1 className="text-2xl">Creative Website</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <div id="work" className="row-span-2 w-full h-full relative">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="/img/My Work/img4.webp"
            alt=""
          />
          <div
            id="hoverable"
            className="absolute w-full overflow-hidden left-0 transition-all duration-300 ease-in-out leading-[2rem] h-[0%] bg-WorkLinear rounded-xl flex items-end bottom-0"
          >
            <div className="py-11 px-5">
              <h1 className="text-md font-light">Website</h1>
              <h1 className="text-2xl">Creative Website</h1>
            </div>
          </div>
        </div>
        <div id="work" className="w-full h-full relative">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="/img/My Work/img5.webp"
            alt=""
          />
          <div
            id="hoverable"
            className="absolute w-full overflow-hidden left-0 transition-all duration-300 ease-in-out leading-[2rem] h-[0%] bg-WorkLinear rounded-xl flex items-end bottom-0"
          >
            <div className="py-11 px-5">
              <h1 className="text-md font-light">Website</h1>
              <h1 className="text-2xl">Creative Website</h1>
            </div>
          </div>
        </div>
        <div id="work" className="w-full h-full relative">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="/img/My Work/img6.webp"
            alt=""
          />
          <div
            id="hoverable"
            className="absolute w-full overflow-hidden left-0 transition-all duration-300 ease-in-out leading-[2rem] h-[0%] bg-WorkLinear rounded-xl flex items-end bottom-0"
          >
            <div className="py-11 px-5">
              <h1 className="text-md font-light">Website</h1>
              <h1 className="text-2xl">Creative Website</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default All;
