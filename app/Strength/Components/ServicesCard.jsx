let serviceCardData = [
  {
    img: "/img/Strength/Services/card1.svg",
    name: "Website Developer",
    discription:
      "I'm an expert web developer proficient in HTML, CSS, Tailwind CSS, and Bootstrap. I also have expertise in JavaScript and the React library, which enables me to create impressive UI and UX designs for websites. I believe that without a good UX, our website can't gain popularity and our business can't grow. I've completed numerous projects, whose links I've shared on my portfolio's My Work page, which you can visit to explore. I write highly efficient and optimized code for my websites.",
  },
  {
    img: "/img/Strength/Services/card2.svg",
    name: "Website Design",
    discription:
      "I'm a beginner web developer with a passion for building dynamic and interactive websites. I'm currently learning the ropes of website development, with a focus on coding and bringing my ideas to life. While I have basic knowledge of design tools like Adobe XD, Figma, and Sketch, my true interest lies in website development. I'm excited to explore the world of web development and learn new skills to create robust and efficient websites.",
  },
  {
    img: "/img/Strength/Services/card3.svg",
    name: "Frontend Frameworks",
    discription:
      "As a proficient frontend developer, I specialize in leveraging powerful frontend frameworks to create dynamic, responsive, and high-performance web applications. My expertise in frameworks like React.js allows me to build modular and scalable applications that enhance user experience and ensure maintainability. I utilize the component-based architecture of React.js to develop reusable components, making the development process efficient and streamlined.",
  },
  {
    img: "/img/Strength/Services/card4.svg",
    name: "Animations and Interactivity",
    discription:
      "As a frontend developer with a passion for creating engaging user experiences, I specialize in incorporating animations to enhance the interactivity and visual appeal of websites. Utilizing advanced animation libraries like GSAP (GreenSock Animation Platform) and CSS animations, I bring static designs to life with smooth, dynamic transitions and effects. My expertise in JavaScript and CSS enables me to create intricate animations that capture user attention and improve overall usability.",
  },
];
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect } from "react";
gsap.registerPlugin(useGSAP);
const ServicesCard = () => {
  const {contextSafe} = useGSAP();
  useEffect(contextSafe(() => {
    gsap.from(".service", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "bounce",
      stagger: 0.3,
    });
  }), [])
  
  return serviceCardData.map((items) => {
    return (
      <div
        id="EduCard"
        className="service bg-ServiceCard relative rounded-xl  py-5 px-2 "
      >
        <div className="flex justify-center relative z-40 text-center items-center flex-col">
          <img className="w-[100px]" src={items.img} />
          <h1 className="md:text-2xl py-2 font-semibold">{items.name}</h1>
          <p className="font-light">{items.discription}</p>
        </div>
      </div>
    );
  });
};

export default ServicesCard;
