"use client"

import React from "react";
import { useTheme } from '@/context/ThemeContext'; // Import the useTheme hook

const SecondSection = () => {
  const { isDarkMode } = useTheme(); // Get theme state

  return (
    <div id="second" className={`flex flex-col mt-32 max-w-full w-full px-4 max-md:mt-10 ${isDarkMode ? 'text-white' : 'bg-white text-gray-900'}`}>
      <div className="flex flex-wrap gap-8 justify-center items-center w-full">
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className={`flex smx-auto max-w-full py-4 ${isDarkMode ? "bg-white" : "bg-green-600"} items-center justify-center bg-opacity-10 h-[492px] rounded-[37px] w-[643px]`}>
            <img
              loading="lazy"
              src="/assets/img/send.png"
              className="md:object-fill object-cover h-[492px] rounded-[37px] w-full transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
        <div className="flex flex-col grow shrink self-stretch my-auto text-base min-w-[240px] w-[483px] max-md:max-w-full">
          <div className="text-4xl font-bold max-md:max-w-full">
            Send and receive payments on OGA4BILL
          </div>
          <div className="mt-6 leading-6 text-zinc-400 max-md:max-w-full">
            You can send and recieve payments from anywhere in Nigeria, to
            your Oga4bill account with ease, and it's swift and easy.
          </div>
          <div className="gap-4 self-start px-8 py-4 mt-6 font-medium text-white bg-green-600 rounded-[64px] max-md:px-5">
            Learn More
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
