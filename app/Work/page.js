import React from "react";
import Tabs from "./Components/Work.jsx";
import Header from "../Components/Header";
import Footer from "../About/Components/Footer";

const Work = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center pb-20 bg-[#111727] w-full text-white min-h-screen">
        <Tabs />
      </div>
      <Footer/>
    </>
  );
};

export default Work;
