import React from "react";
import TypedComponent from "./TypedComponent";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className='w-full md:min-h-[179vh] bg-[url("/img/hero.webp")] md:grid px-3 pt-60 pb-16 md:grid-cols-2 bg-cover bg-no-repeat relative md:gap-7'
      id="back-Img"
    >
      <div className="bg-[#18C6DA] xs:overflow-hidden md:overflow-visible relative rounded-[120px] w-full xs:h-fit md:h-[100vh] lg:h-[120vh]">
        <img
          className="md:absolute mx-auto z-40 -top-16"
          src="/img/HeroSelf/boy.webp"
          alt=""
        />
        <img
          id="self"
          className="md:absolute xs:hidden md:block -top-60 -right-32"
          src="/img/HeroSelf/tool1`.png"
          alt=""
        />
        <img
          id="self"
          className="md:absolute xs:hidden md:block bottom-16 -left-10"
          src="/img/HeroSelf/tool2.png"
          alt=""
        />
        <img
          id="self"
          className="md:absolute xs:hidden md:block top-[150px] left-[400px]"
          src="/img/HeroSelf/tool3.png"
          alt=""
        />
      </div>
      <div className="text-white md:text-start sm:text-center relative z-40 mt-0 ">
        <h3 className="py-1 xs:px-1 text-center xs:mx-auto md:mx-0 md:px-6 bg-[#D252FF] xs:w-[49%] md:w-[50%] lg:w-[40%] md:text-lg xs:text-md font-semibold rounded-full my-8">
          Frontend Developer
        </h3>
        <h1 className="flex gap-1 md:text-6xl xs:justify-center md:justify-start sm:text-5xl xs:text-3xl font-bold items-center">
          Hello!{" "}
          <img
            className="xs:w-[40px] sm:w-[50px] md:w-[100px]"
            id="hand"
            src="/img/hand.svg"
            alt=""
          />{" "}
          I am
        </h1>
        <TypedComponent />
        <div className="xs:flex md:block justify-center">
        <Link
          className="py-2 px-6 bg-[#3EAEFF] transition-all duration-300 border border-transparent hover:border rounded-md hover:bg-transparent hover:tracking-wide hover:border-[#3EAEFF] box-border"
          href="/Contact"
        >
          Hire Me
        </Link>
        </div>
        <div className="w-full text-start h-auto bg-white/10 backdrop-blur-md rounded-xl mt-10 xs:p-4 md:p-9">
          <h1 className="md:text-xl xs:text-md font-semibold pb-3 font-Barlow not-italic">
            Freelance Web & Mobile UI/UX Designer
          </h1>
          <p className="text-gray-200 md:text-md xs:text-sm font-Barlow not-italic">
          As a masterful frontend developer, I craft mesmerizing, interactive, and user-centric experiences with HTML, CSS, JavaScript, and React. With wizardry in GSAP and Tailwind CSS, I conjure dynamic animations and sleek designs that enchant users. A Git and GitHub guru, I orchestrate version control and collaborate harmoniously with teams. My JavaScript prowess enables me to build robust, efficient, and scalable applications that amaze. With a solid foundation in HTML and CSS, I ensure semantic mastery, accessibility, and cross-browser symphony. I harness React to build reusable components, manage state changes with finesse, and optimize performance with flair. Committed to staying ahead of the curve, I continually enhance my skills to deliver revolutionary solutions. Let's collaborate to build lightning-fast, responsive, and captivating web applications that leave users spellbound!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
