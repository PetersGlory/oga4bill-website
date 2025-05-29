"use client";

import { Menu, X, Moon as MoonIcon, Sun as SunIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext"; // Import the useTheme hook

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme(); // Get theme state and toggle function

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const closeMenu = (e) => {
      if (
        isOpen &&
        !e.target.closest(".nav-menu") &&
        !e.target.closest(".hamburger")
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [isOpen]);
  return (
    <>
      <div
        className={`box-border flex relative flex-col shrink-0 w-full px-4 md:px-6 ${
          isDarkMode ? "text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex flex-wrap gap-10 justify-between items-center max-w-full w-[1240px]">
          <div className="flex gap-3 justify-center items-center self-stretch my-auto w-[150px]">
            <img
              loading="lazy"
              srcSet={`/assets/img/${
                isDarkMode ? "logo_white" : "logo_green"
              }.png`}
              className="object-contain self-stretch my-auto aspect-[2.83] w-[150px]"
            />
          </div>
          <div className="hidden md:flex gap-6">
            <div className="flex gap-8 justify-center items-center self-stretch my-auto text-base font-medium min-w-[240px] max-md:max-w-full">
              <a href="#second" className="self-stretch my-auto toggle-theme">Why Us</a>
              <div className="self-stretch my-auto toggle-theme">Services</div>
              <div className="self-stretch my-auto toggle-theme">
                Our Process
              </div>
              <div className="self-stretch my-auto toggle-theme">Payments</div>
              <div className="self-stretch my-auto toggle-theme">FAQs</div>
              <button onClick={toggleTheme} className="toggle-theme">
                {isDarkMode ? <SunIcon /> : <MoonIcon />}
              </button>
            </div>
            <motion.button>
              <div className="gap-2.5 self-stretch px-8 py-3 my-auto text-base font-bold text-green-600 border-2 border-green-600 border-solid rounded-[64px] max-md:px-5">
                Download Now
              </div>
            </motion.button>
          </div>

          <button
            className="md:hidden hamburger p-2 hover:text-amber-400 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
          >
            <Menu size={24} />
          </button>
        </div>

        <div
          className={`nav-menu fixed top-0 right-0 h-full w-[300px] shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/3f6f31338dd2a94cb6c1bb2886409a4d3fa699e12eecd3fdb4764b8b521a449e?apiKey=5fa524da69784606825bdce1461219fa&"
            className="object-cover absolute inset-1 opacity-1 size-full"
          />
          <div
            className={`flex relative flex-col p-6 ${
              isDarkMode ? "bg-[#0c0c0c]" : "bg-white h-[100vh] text-gray-700"
            } bg-opacity-60`}
          >
            <button
              className="self-end p-2 hover:text-amber-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
            <div className="flex flex-col space-y-6 mt-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left font-medium hover:text-amber-400 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about-us")}
                className="text-left hover:text-amber-400 transition-colors"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left hover:text-amber-400 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left hover:text-amber-400 transition-colors"
              >
                Process
              </button>

              <button
                onClick={() => scrollToSection("faqs")}
                className="text-left hover:text-amber-400 transition-colors"
              >
                FAQs
              </button>

              <motion.button>
                <div className="gap-2.5 text-center self-stretch px-8 py-3 my-auto text-base font-bold text-green-600 border-2 border-green-600 border-solid rounded-[64px] max-md:px-5">
                  Download Now
                </div>
              </motion.button>

              <button onClick={toggleTheme} className="toggle-theme">
                {isDarkMode ? <SunIcon /> : <MoonIcon />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </>
  );
};

export default Navbar;
