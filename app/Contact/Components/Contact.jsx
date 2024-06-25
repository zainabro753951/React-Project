"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const ContactMe = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");
  let flashMessage = () => {
    toast.success('Thank you for your message.', {theme: "dark"});
  };
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
        <form className="w-full h-fit flex flex-col gap-10">
          <input
            className="w-full border border-gray-600 outline-none transition-all duration-200 focus:border-blue-600 rounded-lg bg-transparent py-3 px-4"
            type="text"
            placeholder="Name*"
            required
            value={Name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            className="w-full border border-gray-600 outline-none transition-all duration-200 focus:border-blue-600 rounded-lg bg-transparent py-3 px-4"
            type="email"
            placeholder="Email*"
            required
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="w-full border border-gray-600 outline-none transition-all duration-200 focus:border-blue-600 rounded-lg bg-transparent py-3 px-4"
            type="text"
            placeholder="Subject*"
            required
            value={Subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
        </form>
        <div className="w-full xs:h-[20vh] md:h-[41vh]">
          <textarea
            className="w-full overflow-hidden resize-none h-full outline-none bg-transparent border border-gray-600 rounded-lg py-4 px-4 transition-all duration-200 focus:border-blue-600"
            name="#"
            id="#"
            placeholder="Enter a Message*"
            required
            value={Message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="w-full flex justify-center col-span-2">
          <button
           type="submit"
           name="submit"
            onClick={flashMessage}
            className="py-2 px-10 transition-all duration-300 hover:bg-transparent hover:border-[#3EAEFF] hover:tracking-wide bg-[#3EAEFF] border border-transparent rounded-md text-xl"
          >
            Submit
          </button>
          <ToastContainer/>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
