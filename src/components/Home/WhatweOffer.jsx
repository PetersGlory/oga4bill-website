"use client"

import React from 'react'
import { useTheme } from '@/context/ThemeContext';
// import { useTheme } from '@/context/ThemeContext'; // Import the useTheme hook

const WhatweOffer = () => {
  const { isDarkMode } = useTheme(); // Get theme state

  return (
    <div className={`flex flex-col items-center mt-32 max-md:mt-10 px-4 max-md:max-w-full ${isDarkMode ? 'text-white' : 'bg-white text-gray-800'}`}>
      <div className="text-4xl font-bold ">What do we offer?</div>
      <div className="flex flex-wrap gap-6 items-start mt-16 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-6 items-start w-full md:w-[30%]">
          <div className="flex overflow-hidden gap-2.5 items-center p-4 w-16 h-16 bg-gray-700 rounded-3xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/b3a1ef29de6bae20556d810da942273793e347edce2a8829503e3b75c492baef?apiKey=5fa524da69784606825bdce1461219fa&"
              className="object-contain w-8 aspect-square"
            />
          </div>
          <div className="flex flex-col flex-1 shrink basis-8 min-w-[240px]">
            <div className="text-2xl font-medium ">
              Security Guarantee{" "}
            </div>
            <div className="mt-2 text-base text-zinc-400">
              Your data and funds will be securely protected.
            </div>
          </div>
        </div>
        <div className="flex gap-6 items-start w-full md:w-[30%]">
          <div className="flex overflow-hidden gap-2.5 items-center p-4 w-16 h-16 bg-gray-700 rounded-3xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/c7769bc789b4044ed76c53fee09c186f4a58cf0926cfdd76ece03ddbe0d357a4?apiKey=5fa524da69784606825bdce1461219fa&"
              className="object-contain w-8 aspect-square"
            />
          </div>
          <div className="flex flex-col flex-1 shrink basis-8 min-w-[240px]">
            <div className="text-2xl font-medium ">Swift payments</div>
            <div className="mt-2 text-base text-zinc-400">
              Your data and funds will be securely protected.
            </div>
          </div>
        </div>
        <div className="flex gap-6 items-start w-full md:w-[30%]">
          <div className="flex overflow-hidden gap-2.5 items-center p-4 w-16 h-16 bg-gray-700 rounded-3xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/ce6cf143b65b665c63059acc2892673fb398323c2774bae62b62977d5d6bd257?apiKey=5fa524da69784606825bdce1461219fa&"
              className="object-contain w-8 aspect-square"
            />
          </div>
          <div className="flex flex-col flex-1 shrink basis-8 min-w-[240px]">
            <div className="text-2xl font-medium ">
              Multiple Method
            </div>
            <div className="mt-2 text-base text-zinc-400">
              Your data and funds will be securely protected.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatweOffer