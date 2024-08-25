/** @format */

import Link from "next/link";
import React from "react";
const ContactLink = () => {
  return (
    <div className='bg-[#0F182B] flex items-center justify-center w-full py-5'>
      <Link
        className='mx-auto py-2 px-6 bg-[#3EAEFF] text-white font-semibold rounded-lg text-lg transition-all duration-300 hover:bg-transparent border border-[#3EAEFF] hover:tracking-wide'
        href='/Strength'>
        View More
      </Link>
    </div>
  );
};

export default ContactLink;
