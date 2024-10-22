let DashboardData = [
  {
    date: "july 2 2024",
    name: "Web Designing",
    status: "Completed",
    progress: "75%",
    feature: "Gatsby Clone",
  },
  {
    date: "july 2 2024",
    name: "Web Designing",
    status: "Completed",
    progress: "50%",
    feature: "Portfolio ",
  },
  {
    date: "july 2 2024",
    name: "Web Designing",
    status: "Completed",
    progress: "80%",
    feature: "RainFall Protection",
  },
  {
    date: "july 2 2024",
    name: "Web Designing",
    status: "Completed",
    progress: "89%",
    feature: "Agency",
  },
];
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect } from "react";
const Projectdashboard = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("#work", {
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.2
      });
    });

    return () => ctx.revert(); // Clean up the context when the component unmounts
  }, []);

  return (
    <>
      {DashboardData.map((items, index) => {
        return (
          <div
            id={"work"}
            className={`flex flex-col shadow-2xl gap-7 rounded-[50px] ${
              index === 0 ? "bg-white text-black" : ""
            } ${index === 1 ? "bg-[#FEE4CB] text-black" : ""} ${
              index === 2 ? "bg-[#BAF3D2] text-black" : ""
            } ${index === 3 ? "bg-[#FFD3E2] text-black" : ""} p-8`}
          >
            <h1>{items.date}</h1>
            <div className="text-center">
              <h1 className="text-2xl">{items.name}</h1>
              <h1>{items.feature}</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-bold">Progress</h1>
              <div className={`w-full h-[8px] bg-slate-400 rounded-full`}>
                <div
                  className={`${index === 0 ? "w-[75%]" : ""} ${
                    index === 1 ? "w-[50%]" : ""
                  } ${index === 2 ? "w-[80%]" : ""} ${
                    index === 3 ? "w-[89%]" : ""
                  } h-full ${index === 0 ? "bg-blue-600" : ""} ${
                    index === 1 ? "bg-[#FF662A]" : ""
                  } ${index === 2 ? "bg-[#00D050]" : ""} ${
                    index === 3 ? "bg-[#FD73AD]" : ""
                  } rounded-full`}
                ></div>
              </div>
              <h1 className="text-end">
                {index === 0 ? "75%" : ""} {index === 1 ? "50%" : ""}{" "}
                {index === 2 ? "80%" : ""} {index === 3 ? "89%" : ""}
              </h1>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Projectdashboard;
