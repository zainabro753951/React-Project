/** @format */

// components/BlogPostTimer.js

import React, { useState, useEffect } from "react";

const Projecttimer = ({ uploadDate }) => {
  const [timeSinceUpload, setTimeSinceUpload] = useState("");

  useEffect(() => {
    const calculateTimeSinceUpload = () => {
      const now = new Date();
      const timeDifference = now - new Date(uploadDate);

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      return `${days} days ago`;
    };

    const updateTimer = () => {
      setTimeSinceUpload(calculateTimeSinceUpload());
    };

    const intervalId = setInterval(updateTimer, 1000);

    return () => clearInterval(intervalId);
  }, [uploadDate]);

  return (
    <p className='font-semibold text-gray-800'>
      <span className='font-bold text-blue-600'>{timeSinceUpload}</span>
    </p>
  );
};

export default Projecttimer;
