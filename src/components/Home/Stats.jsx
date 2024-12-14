"use client"

import React from "react";
import { useTheme } from '@/context/ThemeContext'; // Import the useTheme hook

const Stats = () => {
  const { isDarkMode } = useTheme(); // Get theme state

  const stats = [
    // {id: 1, title: '16y', desc: 'Experience'},
    // {id: 2, title: '250+', desc: 'Merchant Partner'},
    {id: 3, title: '8+', desc: 'Years Experience'},
    {id: 4, title: '1.2k+', desc: 'Happy users'},
  ]
  return (
    <>
      <div className={`flex flex-wrap items-center justify-around gap-4 py-16 md:mt-32 ${isDarkMode ? 'text-white' : 'text-gray-800'} bg-gray-700 bg-opacity-20 rounded-[32px] max-md:px-5 max-md:mt-10 w-full`}>
        {stats && stats.map((info, index) => (
            <div className="flex flex-col justify-center items-center" key={info.id}>
                <div className="text-5xl font-bold tracking-tight leading-none max-md:text-4xl">
                    {info.title}
                </div>
                <div className="mt-2 text-base font-medium text-green-600">
                {info.desc}
                </div>
            </div>
        ))}
      </div>
    </>
  );
};

export default Stats;
