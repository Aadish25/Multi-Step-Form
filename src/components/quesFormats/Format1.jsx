import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
export default function Format1({ value, optionsArr, heading, subHeading,next }) {
  const [isClick, setIsClick] = useState(-1);
  const options = optionsArr.map((item, index) => {
    return (
      <div
        className={`flex items-center w-full lg:w-1/2 border-2 ${
          isClick == index
            ? " border-2 border-black"
            : "border-2 border-gray-200"
        } rounded-sm p-2 gap-5 hover:cursor-pointer`}
        onClick={() => setIsClick(index)}
        key={index}
      >
        <img className="h-12 w-16" src={item.icon} alt={item.heading} />
        <p className="text-md">
          <span className="font-bold">{item.heading}</span>{" "}
          <span className="text-gray-500">{item.subHeading}</span>
        </p>
      </div>
    );
  });
  return (
    <div className="py-8 px-12 md:px-24  ">
      <div className="flex items-center gap-2">
        {value === 20 ? (
          ""
        ) : (
          <Link to={`/ques-${next-2}`}><i
          className="fa-solid fa-chevron-left cursor-pointer"
          onClick={() => setIsClick(-1)}
        ></i></Link>
        )}
        <progress
          className="progress progress-success h-1 w-full"
          value={value}
          max="100"
        ></progress>
      </div>
      <div className="flex flex-col items-center mt-5 gap-5">
        <h1 className="text-3xl font-bold">{heading}</h1>
        <p className="text-sm text-gray-600">{subHeading}</p>
        <div className="flex flex-col items-center gap-2 w-full">{options}</div>
        <Link to={`/ques-${next}`}><button
          className={`btn bg-black text-white hover:bg-green-400 ${
            isClick == -1 ? "btn-disabled" : "btn"
          }`}
          onClick={() =>setIsClick(-1)}
        >
          Continue
        </button></Link>
      </div>
    </div>
  );
}
