"use client";

import React, { useEffect, useState } from "react";

const TestiTool = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count < 500) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 10); // Increment every 100 milliseconds
      return () => clearInterval(interval);
    }
  }, [count]);

  return (
    <h1 className="text-4xl font-bold py-2 text-[#3EAEFF]">
        <span>+</span>
        { count }
    </h1>
  );
};

const TestiTool_1 = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count < 200) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 10); // Increment every 100 milliseconds
      return () => clearInterval(interval);
    }
  }, [count]);

  return (
    <h1 className="text-4xl font-bold py-2 text-[#3EAEFF]">
        <span>+</span>
        { count }
    </h1>
  );
};

const TestiTool_2 = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count < 1000) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 10); // Increment every 100 milliseconds
      return () => clearInterval(interval);
    }
  }, [count]);

  return (
    <h1 className="text-4xl font-bold py-2 text-[#3EAEFF]">
        <span>+</span>
        { count }
    </h1>
  );
};

export { TestiTool, TestiTool_1, TestiTool_2 };
