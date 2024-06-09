"use client";
import React, { useState } from "react";
import All from "./All";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("content1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="md:pt-40  xs:pt-32 font-Barlow not-italic">
      <div className="sm:flex mb-7 justify-center md:justify-between sm:border border-gray-700 rounded-full cursor-pointer">
        <div
          className={`px-6 py-2 font-light transition-all duration-500 ${
            activeTab === "content1"
              ? "bg-[#3EAEFF] rounded-full font-bold"
              : "border-transparent"
          }`}
          onClick={() => handleTabClick("content1")}
        >
          All
        </div>
        <div
          className={`px-6 py-2 font-light transition-all duration-500 ${
            activeTab === "content2"
              ? "bg-[#3EAEFF] rounded-full font-bold"
              : "border-transparent"
          }`}
          onClick={() => handleTabClick("content2")}
        >
          Website
        </div>
        <div
          className={`px-6 py-2 font-light transition-all duration-5002 ${
            activeTab === "content3"
              ? "bg-[#3EAEFF] rounded-full font-bold"
              : "border-transparent"
          }`}
          onClick={() => handleTabClick("content3")}
        >
          Mobile App
        </div>
        <div
          className={`px-6 py-2 font-light transition-all duration-500 ${
            activeTab === "content4"
              ? "bg-[#3EAEFF] rounded-full font-bold"
              : "border-transparent"
          }`}
          onClick={() => handleTabClick("content4")}
        >
          Dashboard
        </div>
        <div
          className={`px-6 py-2 font-light transition-all duration-500 ${
            activeTab === "content5"
              ? "bg-[#3EAEFF] rounded-full"
              : "border-transparent"
          }`}
          onClick={() => handleTabClick("content5")}
        >
          Creative
        </div>
      </div>

      <div className="p-4 mt-4  transition-all duration-300">
        {activeTab === "content1" && (
          <div id="content1">
            <All />
          </div>
        )}
        {activeTab === "content2" && (
          <div id="content2">
            <All/>
          </div>
        )}
        {activeTab === "content3" && (
          <div id="content3">
            <All/>
          </div>
        )}
        {activeTab === "content4" && (
          <div id="content4">
            <All/>
          </div>
        )}
        {activeTab === "content5" && (
          <div id="content5">
            <All/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
