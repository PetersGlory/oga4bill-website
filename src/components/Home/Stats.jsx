"use client"

import React, {useState} from "react";

const Stats = () => {
    const stats = [
        {id: 1, title: '16y', desc: 'Experience'},
        {id: 2, title: '250+', desc: 'Merchant Partner'},
        {id: 3, title: '18+', desc: 'Years Experience'},
        {id: 4, title: '10.2k+', desc: 'Happy users'},
    ]
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-4 py-16 md:mt-32 bg-gray-700 bg-opacity-20 rounded-[32px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        {stats && stats.map((info, index) => (
            <div className="flex flex-col justify-center items-center" key={info.id}>
                <div className="text-5xl font-bold tracking-tight leading-none text-white max-md:text-4xl">
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
