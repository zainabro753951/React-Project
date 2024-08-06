/** @format */

import React from "react";
import Blogs from "./Blogs";

const Blogpage = () => {
  return (
    <div className='w-full min-h-screen bg-[#0D1423] font-Barlow not-italic text-white'>
      <div className='max-w-[1600px] mx-auto py-28'>
        <h1 className='text-center text-4xl pb-3 font-semibold'>My Blogs</h1>
        <p className='md:w-1/2 px-3 text-gray-400 text-center mx-auto'>
          Explore my journey as a Frontend Developer through in-depth blogs
          where I share my expertise in web development, from mastering HTML,
          CSS, and JavaScript to advanced techniques in React and Tailwind CSS.
          Dive into detailed project case studies, learn the latest industry
          trends, and discover valuable tips and tricks that can enhance your
          own development skills. Whether you're a beginner or an experienced
          developer, my blogs offer insights and practical knowledge to help you
          excel in the world of web development."
        </p>
        <div className='w-[85%] py-16 gap-4 mx-auto grid md:grid-cols-3'>
          <Blogs />
        </div>
      </div>
    </div>
  );
};

export default Blogpage;
