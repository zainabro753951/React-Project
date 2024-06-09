import React from "react";

const ContactMe = () => {
  return (
    <div className="w-full min-h-[100vh] text-white grid lg:grid-cols-3 gap-4 px-4 place-content-center bg-[#101727] py-28 border-b border-gray-500">
      <div className="flex flex-col justify-center xs:text-center lg:text-start md:w-1/2 lg:w-full sm:w-10/12 sm:mx-auto">
        <h1
          id="Edu"
          className="md:text-4xl xs:text-3xl font-semibold relative pb-7 text-center"
        >
          Contact Us
        </h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
      <div className="col-span-2 grid xs:grid-cols-1 sm:grid-cols-2 gap-4">
        <form className="w-full h-fit flex flex-col gap-10" action="#">
            <input className="w-full border border-gray-600 outline-none transition-all duration-200 focus:border-blue-600 rounded-lg bg-transparent py-3 px-4" type="text" placeholder="Name" />
            <input className="w-full border border-gray-600 outline-none transition-all duration-200 focus:border-blue-600 rounded-lg bg-transparent py-3 px-4" type="email" name="#" id="#" placeholder="Email" />
            <input className="w-full border border-gray-600 outline-none transition-all duration-200 focus:border-blue-600 rounded-lg bg-transparent py-3 px-4" type="text" placeholder="Subject" />
        </form>
        <div className="w-full xs:h-[20vh] md:h-[41vh]">
            <textarea className="w-full overflow-hidden resize-none h-full outline-none bg-transparent border border-gray-600 rounded-lg py-4 px-4 transition-all duration-200 focus:border-blue-600" name="#" id="#" placeholder="Enter a Message"></textarea>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
