import React from "react";

const Clients = () => {
  return (
    <div className="w-full min-h-screen grid lg:grid-cols-3 bg-[#101727] border-t border-gray-500 text-white py-20">
      <div className="sm:w-1/2 sm:mx-auto xs:pb-10 sm:text-center lg:w-full px-3 lg:mx-0 lg:text-start flex items-center">
        <div>
          <h1
            id="Edu"
            className="md:text-4xl xs:text-3xl font-semibold relative pb-7 text-center">
            What I Do
          </h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
      <div className="col-span-2 grid xs:grid-cols-1 sm:grid-cols-3">
        <div className="w-full h-full xs:py-10 lg:py-0 border-r border-b border-gray-600 flex justify-center items-center">
            <img className="opacity-50 transition-all duration-300 hover:opacity-100" src="/img/Strength/Our Clients/client-1.png" alt="" />
        </div>
        <div className="w-full h-full xs:py-10 border-b border-gray-600 flex justify-center items-center">
            <img className="opacity-50 transition-all duration-300 hover:opacity-100" src="/img/Strength/Our Clients/client-2.png" alt="" />
        </div>
        <div className="w-full h-full xs:py-10 border-b border-l border-gray-600 flex justify-center items-center">
            <img className="opacity-50 transition-all duration-300 hover:opacity-100" src="/img/Strength/Our Clients/client-3.png" alt="" />
        </div>
        <div className="w-full h-full xs:py-10 xs:border-b sm:border-b-0 sm:border-r border-gray-600 flex justify-center items-center">
            <img className="opacity-50 transition-all duration-300 hover:opacity-100" src="/img/Strength/Our Clients/client-4.png" alt="" />
        </div>
        <div className="w-full h-full xs:py-10 xs:border-b sm:border-b-0 sm:border-r border-gray-600 flex justify-center items-center">
            <img className="opacity-50 transition-all duration-300 hover:opacity-100" src="/img/Strength/Our Clients/client-5.png" alt="" />
        </div>
        <div className="w-full h-full flex xs:py-10 lg:py-0 justify-center items-center">
            <img className="opacity-50 transition-all duration-300 hover:opacity-100" src="/img/Strength/Our Clients/client-6.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
