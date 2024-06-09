import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";
const AboutHero = () => {
  return (
    <div
      id="about"
      className="w-full text-white relative pt-32 pb-16 border-b border-gray-500 min-h-screen not-italic font-Barlow bg-cover bg-no-repeat bg-center md:px-[11%] bg-[url('/img/About/Ahero.webp')] grid lg:grid-cols-2 xs:grid-cols-1 xs:px-5"
    >
      <div className="md:relative z-[41] md:block">
        <div className="flex justify-center">
          <img
            className="md:w-full md:h-full"
            src="/img/About/Ame.webp"
            alt=""
          />
        </div>
        <div className="flex w-full justify-center gap-4 mt-3">
          <div className="flex items-center gap-2 md:absolute top-[150px] bg-[#AD00FF] xs:py-1 md:py-3 xs:px-2 md:px-6 xs:rounded-lg md:rounded-xl -left-[50px]">
            <h1 className="xs:text-3xl md:text-5xl font-semibold">12</h1>
            <p className="leading-[1.2rem] xs:text-sm md:text-xl font-medium">
              Years
              <br />
              of Experince
            </p>
          </div>
          <div className="md:py-2 flex flex-col justify-center md:px-7 xs:px-2 md:absolute xs:rounded-lg md:rounded-xl top-[250px] -right-10 bg-[#FF7A00]">
            <div className="flex gap-1 items-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <p className="md:text-xl xs:text-sm">4.9</p>
            </div>
            <p className="md:text-xl xs:text-sm font-medium">
              7000+ Clients Reviews
            </p>
          </div>
        </div>
      </div>
      <div className="z-40">
        <h1 className="md:text-5xl xs:text-3xl mt-10 font-semibold text-center mb-6">
          About Me
        </h1>
        <div className="w-full mb-8 bg-white/10 backdrop-blur-md border border-gray-600 xs:rounded-xl md:rounded-r-xl xs:px-4 md:pl-16 py-4">
          <h2 className="md:text-3xl xs:text-xl font-semibold">Who I'm</h2>
          <p className="text-gray-300 text-sm">
            Hello! I'm Zain Ul Abbas, a passionate and innovative frontend
            developer with a zeal for crafting exceptional user experiences.
            With a solid foundation in HTML, CSS, JavaScript, and React, I build
            responsive, interactive, and user-friendly interfaces that delight
            and inspire. My expertise in GSAP and Tailwind CSS enables me to
            create dynamic animations and sleek designs that elevate user
            engagement.
            <br />
            <br />
            As a Git and GitHub proficient developer, I manage version control
            and collaborate seamlessly with teams to deliver high-quality
            solutions. With a strong focus on performance optimization,
            accessibility, and cross-browser compatibility, I ensure that my
            applications are robust, efficient, and scalable. I'm constantly
            exploring new technologies and techniques to stay ahead of the curve
            and deliver cutting-edge results. Let's connect and build amazing
            web applications together!
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <a
            className="py-2 md:px-6 xs:px-3 md:text-lg xs:text-lg bg-[#F64142] border border-transparent transition-all duration-300 hover:bg-transparent hover:border hover:border-[#F64142] hover:text-[#F64142] hover:tracking-wide rounded-lg"
            href="#"
          >
            Download Resume
          </a>
          <Link
            className="py-2 md:px-6 xs:px-3 md:text-lg xs:text-lg bg-[#3EAEFF] border border-transparent transition-all duration-300 hover:bg-transparent hover:border hover:border-[#3EAEFF] hover:text-[#3EAEFF] hover:tracking-wide rounded-lg"
            href="/Contact"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
