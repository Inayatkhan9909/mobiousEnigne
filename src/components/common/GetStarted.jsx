import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const GetStarted = ({ bgColor, textColor }) => {
  return (
    <div className="font-dm-sans">
      <button
        className={`flex justify-center items-center gap-2 px-4 py-2 rounded-rounded-corners  ${bgColor} ${textColor} hover:text-custom-white hover:bg-secondary `}
      >
        <span>Get Started</span>
        <span>
          <FaArrowRightLong />
        </span>
      </button>
    </div>
  );
};

export default GetStarted;
