/** @format */

// components/BlogPostTimer.js

import React, { useState, useEffect } from "react";

const Projecttimer = ({ uploadDate }) => {
  const [timeSinceUpload, setTimeSinceUpload] = useState("");

  useEffect(() => {
    const calculateTimeSinceUpload = () => {
      const now = new Date();
      const timeDifference = now - new Date(uploadDate);

      const years = Math.floor(
        timeDifference / (1000 * 60 * 60 * 24 * 30.44 * 12)
      );
      const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30.44));
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      if (minutes <= 60) {
        return `${minutes} minutes ago`;
      } else if (hours <= 60) {
        return `${hours} hours ago`;
      } else if (days <= 30.44) {
        return `${days} days ago`;
      } else if (months <= 12) {
        return `${months} months ago`;
      } else {
        return `${years} years ago`;
      }
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
