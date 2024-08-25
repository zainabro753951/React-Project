"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
gsap.registerPlugin(useGSAP, ScrollTrigger);
function Contact() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("#contact1", {
        x: -400,
        duration: 2,
        opacity: 0,
        ease: "power4",
        scrollTrigger: {
          trigger: "#contact1",
          start: "top 80%",
          end: "top bottom 20%",
          toggleActions: "restart none none reverse",
        },
      });
      gsap.from("#input", {
        y: 100,
        duration: 1,
        opacity: 0,
        ease: "power4",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#input",
          start: "top 80%",
          end: "top bottom 20%",
          toggleActions: "restart none none reverse",
        },
      });
      gsap.from("#input2", {
        x: 400,
        opacity: 0,
        duration: 1,
        ease: "power4",
        scrollTrigger: {
          trigger: "#input2",
          start: "top 80%",
          end: "top bottom 20%",
          toggleActions: "restart none none reverse",
        },
      });
    });

    return () => ctx.revert(); // Clean up the context when the component unmounts
  }, []);


  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "18216c05-f5dc-43d4-9cbe-913427def211");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const message = () => {
      toast.success("Your form Submitted Successfully", {
        position: "top-right",
        theme: "dark",
      });
    };
    const message2 = () => {
      toast.warning("Your form can not submited due to some errors or your network issue", {
        position: "top-right",
        theme: "dark",
      });
    }
    const data = await response.json();

    if (data.success) {
      event.target.reset();
      message();
    } else {
      message2();
    }
  };
  return (
    <div
      className="grid overflow-x-hidden md:grid-cols-3 font-Barlow 
    not-italic px-3 gap-3 items-center min-h-screen bg-[#0D1320] text-white"
    >
      <div id="contact1">
        <h1 className="text-3xl font-bold py-4">Contact us</h1>
        <p>
          We value your feedback and inquiries. Whether you have a question, a
          suggestion, or a project idea, we are here to help. Please fill out
          the contact form below, and we will get back to you promptly. Your
          input is important to us, and we look forward to connecting with you!
        </p>
      </div>
      <form
        className="col-span-2 xs:flex flex-col md:grid grid-cols-2 gap-4"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col md:gap-8 xs:gap-4 w-full h-full">
          <input
            type="hidden"
            name="access_key"
            value="18216c05-f5dc-43d4-9cbe-913427def211"
          />
          <input
            id="input"
            className="w-full py-3 px-4 rounded-lg bg-transparent border border-slate-500 focus:border-blue-800 outline-none"
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
          />
          <input
            id="input"
            className="w-full py-3 px-4 rounded-lg bg-transparent border border-slate-500 focus:border-blue-800 outline-none"
            type="email"
            name="email"
            placeholder="Enter your Email"
            required
          />
          <input
            id="input"
            className="w-full py-3 px-4 rounded-lg bg-transparent border border-slate-500 focus:border-blue-800 outline-none"
            type="text"
            placeholder="Enter your Subject"
            name="subject"
            required
          />
        </div>
        <div className="w-full h-full">
          <textarea
            id="input2"
            className="w-full h-full rounded-xl outline-none focus:border-blue-800 p-3 bg-transparent border border-slate-500"
            name="message"
            required
            placeholder="Enter your Message"
          ></textarea>
        </div>
        <button
          className="py-3 px-6 text-white bg-[#3EAEFF] col-span-2 md:text-xl rounded-lg border-transparent border-2 transition-all duration-300 hover:bg-transparent hover:border-[#3EAEFF] hover:tracking-wide"
          type="submit"
        >
          Submit Form
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default Contact;
