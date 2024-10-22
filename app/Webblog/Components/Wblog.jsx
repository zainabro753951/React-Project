/** @format */
"use client";
let blogData = [
  {
    img: "/img/Strength/Blogs/Webblog/html.jpg",
    name: "1. How I learn HTML without any course and coaching",
    discription:
      "HTML is essential for creating the structure of a portfolio website. I completed HTML in just 3 days, but since I studied it online, I didn’t cover many advanced concepts and details. The most important thing is having a solid understanding of basic HTML, as it ensures that your portfolio website is well-structured and efficient. I learned HTML from a YouTube channel called 'Apna College,' where Aman Dhatrwal taught it. Although the channel didn’t provide extensive information on advanced HTML techniques, it offered enough to help you build the structure of any website, including a professional portfolio to showcase your skills effectively.",
  },
  {
    img: "/img/Strength/Blogs/Webblog/cssblog.avif",
    name: "How I learn CSS coding",
    discription:
      "We use CSS to design our websites as best as possible. I covered CSS in about 4 or 5 days, learning it from YouTube, specifically from a YouTube channel that only taught the basic CSS used for creating standard websites. It didn't include advanced CSS, but by reading and working on projects related to advanced CSS, I got an idea of how to write more complex CSS code. There are many impressive CSS properties that allow us to create amazing designs, and usually, you can find these properties on MDN's website if you search for them. I'll describe them in more detail in my next blog post.",
  },
  {
    img: "/img/Strength/Blogs/Webblog/jsblog.jpg",
    name: "1. How I learn JavaScript",
    discription:
      "JavaScript provides our website with incredible functionality, acting as the brain and making it dynamic. When I was learning JavaScript, I encountered significant challenges, to the point where I almost gave up, feeling it was too difficult for me. This was largely because, unlike HTML and CSS, where the output is directly visible in the browser, JavaScript's output initially appears in the console. Until I grasped the basic concepts of JavaScript, my interest in it was minimal. However, once I mastered the fundamentals and progressed to intermediate JavaScript, I began to see the amazing functionality JavaScript could add to the browser. This newfound understanding made me appreciate JavaScript's capabilities and how essential it is for creating interactive and dynamic websites.",
  },
  {
    img: "/img/Strength/Blogs/Webblog/react.jpg",
    name: "1. How I learn React with next.js",
    discription:
      "React is a powerful JavaScript library designed for creating dynamic single-page applications. Before diving into React, I made sure to master advanced JavaScript concepts, which are essential for effectively utilizing React's capabilities. If you're not confident in your JavaScript skills, it's crucial to first focus on mastering advanced JavaScript topics like closures, asynchronous programming, and ES6 features.",
  },
  // {
  //   img: "/img/Strength/Blogs/Webblog/html.jpg",
  //   name: "1. How I learn HTML without any course and coaching",
  //   discription:
  //     "HTML is essential for creating the structure of a portfolio website. I completed HTML in just 3 days, but since I studied it online, I didn’t cover many advanced concepts and details. The most important thing is having a solid understanding of basic HTML, as it ensures that your portfolio website is well-structured and efficient. I learned HTML from a YouTube channel called 'Apna College,' where Aman Dhatrwal taught it. Although the channel didn’t provide extensive information on advanced HTML techniques, it offered enough to help you build the structure of any website, including a professional portfolio to showcase your skills effectively.",
  // },
];
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
const Wblog = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("#blog1", {
        x: 150,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: "#blog1",
          start: "top 80%",
          end: "top bottom 20%",
          toggleActions: "restart none none reverse",
        },
      });
      gsap.from("#blog2", {
        x: -150,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: "#blog2",
          start: "top 80%",
          end: "top bottom 20%",
          toggleActions: "restart none none reverse",
        },
      });
      gsap.from("#blog3", {
        x: 150,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: "#blog3",
          start: "top 80%",
          end: "top bottom 20%",
          toggleActions: "restart none none reverse",
        },
      });
      gsap.from("#blog4", {
        x: -150,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: "#blog4",
          start: "top 80%",
          end: "top bottom 20%",
          toggleActions: "restart none none reverse",
        },
      });
    });

    return () => ctx.revert(); // Clean up the context when the component unmounts
  }, []);
  return (
    <div className='w-full bg-[#0E1320]'>
      <div className='max-w-[1600px] mx-auto'>
        <div className='w-[80%] text-gray-400 mx-auto py-24'>
          <h1 className='md:text-3xl text-white font-semibold'>
            My Web Development Journey: From Scratch to Professional Projects.
          </h1>
          <p className='mt-3'>
            Initially, I kept wondering what to do and where to learn, which
            wasted a lot of my time. Then, after exploring various roadmaps and
            YouTube channels related to frontend development, I finally got a
            clear idea of what I needed to do for my portfolio website. If you
            also want to become a frontend developer or build a strong
            portfolio, first search for a good roadmap, then research it and
            start your journey. Following a roadmap will help you gain valuable
            knowledge more efficiently and avoid difficulties along the way,
            ultimately improving your portfolio website and showcasing your
            skills effectively.
          </p>
          {blogData.map((item, index) => {
            return (
              <div
                id={
                  index === 0
                    ? "blog1"
                    : "" || index === 1
                    ? "blog2"
                    : "" || index === 2
                    ? "blog3"
                    : "" || index === 3
                    ? "blog4"
                    : ""
                }
                className='py-10 flex xs:flex-col md:flex-row gap-6 items-center'>
                <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
                  <img
                    className='w-full h-full object-cover object-center'
                    src={item.img}
                    alt='HTML blog'
                  />
                </div>
                <div className='w-full'>
                  <h1 className='text-xl text-green-400 font-bold mb-3'>
                    {item.name}
                  </h1>
                  <p>{item.discription}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Wblog;
