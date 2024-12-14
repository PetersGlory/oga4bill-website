"use client";

import React from "react";
import { useTheme } from '@/context/ThemeContext'; // Import the useTheme hook

const FirstSection = () => {
  const { isDarkMode } = useTheme(); // Get theme state

  return (
    <div className={`flex flex-col mt-32 max-w-full w-full px-4 md:px-6 max-md:mt-10 ${isDarkMode ? 'text-white' : 'bg-white text-gray-900'}`}>
      <div className="pb-7 w-full rounded-none">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto w-full text-base max-md:mt-10 max-md:-mr-4 max-md:max-w-full">
              <div className="text-4xl font-bold max-md:max-w-full">
                Streamline your bill payments with our convenient solution.
              </div>
              <div className="mt-6 leading-6 text-zinc-400 max-md:max-w-full">
                Take the hassle out of managing your finances with our
                innovative solution designed to simplify your bill payments.
                Enjoy a seamless experience as you effortlessly track,
                organize, and pay your bills all in one place. Say goodbye to
                late fees and missed payments, and embrace the convenience of
                stress-free budgeting today!
              </div>
              <div className="flex gap-4 items-center text-white self-start px-8 py-4 mt-6 font-medium bg-green-600 rounded-[64px] max-md:px-5">
                <div className="self-stretch my-auto">Get The App</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/66e1edd2ed756193d4e684f174cc707562fd88ac435a0dd427d62d07765bf24e?apiKey=5fa524da69784606825bdce1461219fa&"
                  className="object-contain shrink-0 self-stretch my-auto aspect-[1.35] w-[23px]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className={`flex smx-auto max-w-full ${isDarkMode ? "bg-white" : "bg-green-600"} items-center justify-center bg-opacity-10 h-[492px] rounded-[37px] w-[643px]`}>
              <img
                  loading="lazy"
                  src="/assets/img/stream.png"
                  className="md:object-fill object-cover h-[492px] rounded-[37px] w-full transform hover:scale-105 transition-transform duration-700"
                  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
