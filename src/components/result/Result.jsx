import React, { useState, useEffect } from "react";
import Loader from "../loader/Loader";
import MathsImg from "../../assets/maths.svg";
import LearningPath from "../learningPath/LearningPath";
export default function Result() {
  const [showLoader, setShowLoader] = useState(true);
  const pathArr = [
    {
      heading: "Foundational Math",
      subHeading:
        "Build your foundational skills in algebra,geometry,and probability.",
      img: MathsImg,
      popular: true,
    },
    {
      heading: "Mathematical Thinking",
      subHeading:
        "Build your foundational skills in algebra,geometry,and probability.",
      img: MathsImg,
      popular: false,
    },
  ];
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center ">
      {showLoader ? (
        <Loader />
      ) : (
        <div className="h-screen w-screen flex flex-col justify-center p-2 items-center gap-5">
          <h1 className="text-3xl font-bold">
            Learning paths based on your answers
          </h1>
          <p className="text-sm text-gray-500">
            Choose one to get started. You can switch anytime.
          </p>
          <div className="flex flex-col  md:flex-row gap-2">
            {pathArr.map((item, index) => {
              return (
                <LearningPath
                  heading={item.heading}
                  subHeading={item.subHeading}
                  img={item.img}
                  popular={item.popular}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
