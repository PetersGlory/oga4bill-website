"use client"

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import React from "react";
import { useTheme } from '@/context/ThemeContext'; // Import the useTheme hook

const Footer = () => {
  const { isDarkMode } = useTheme(); // Get theme state

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/",
      label: "Facebook",
    },
    {
      icon: Twitter,
      href: "https://x.com/",
      label: "Twitter",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/oga4bill/",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://ng.linkedin.com/company/oga4bill",
      label: "LinkedIn",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com",
      label: "YouTube",
    },
  ];
  return (
    <>
      <div className={`flex flex-col mt-32 w-full max-md:mt-10 max-md:max-w-full ${isDarkMode ? 'text-white' : 'bg-gray-900 bg-opacity-80 text-black'}`}>
        <div className="self-center w-full max-w-[1240px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
              <div className="flex gap-4 items-start self-stretch my-auto mr-0 rounded-[48px] max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col min-w-[240px] w-[605px] px-4">
                  <div className="flex flex-col items-start w-full rounded-none max-md:pr-5">
                    <div className="text-5xl font-bold tracking-tight text-white leading-[56px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
                      Easy Way to manage your finances
                    </div>
                    <div className="mt-5 text-lg tracking-tight leading-none text-zinc-400 max-md:max-w-full">
                      Easy to use mobile app that support on android and ios.
                    </div>
                  </div>
                  <div className="flex gap-6 items-start self-start mt-8">
                    <div className="flex flex-col justify-center p-4 bg-gray-700 rounded-2xl w-[155px]">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/529152a06978075070ede34ab400e3af0a09f80a52b982cc0313be44d9bad8e5?apiKey=5fa524da69784606825bdce1461219fa&"
                        className="object-contain max-w-full aspect-[3.85] w-[123px]"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-4 bg-gray-700 rounded-2xl w-[170px]">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/36b39a7bee48aa071645516d1e95b3f271738b59a781f2887a18c2071804dff2?apiKey=5fa524da69784606825bdce1461219fa&"
                        className="object-contain max-w-full aspect-[4.31] w-[138px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="./assets/img/Home.png"
                className="object-contain grow w-full aspect-[1.28] max-md:max-w-full transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col px-20 pt-16 pb-9 w-full bg-zinc-800 bg-opacity-20 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <div className="flex flex-wrap gap-8 items-center max-md:max-w-full">
              <div className="flex flex-col self-stretch my-auto min-h-[176px] min-w-[240px] w-[392px]">
                <div className="flex gap-3 justify-center items-center self-start text-xl font-bold tracking-tight leading-tight text-white whitespace-nowrap">
                  <img
                    loading="lazy"
                    srcSet="/assets/img/logo_white.png"
                    className="object-contain self-stretch my-auto aspect-[2.83] w-[150px]"
                  />
                </div>
                <div className="mt-2.5 text-base tracking-tight leading-6 text-zinc-400">
                  Discover the power of our secure and rewarding credit cards
                </div>
              </div>
              <div className="flex flex-wrap gap-8 items-start self-stretch my-auto text-base min-w-[240px] w-[816px] max-md:max-w-full">
                <div className="flex flex-col w-[180px]">
                  <div className="font-bold text-white">About us</div>
                  <div className="flex flex-col mt-4 w-full text-zinc-400">
                    <div>Investors</div>
                    <div className="mt-2">Features</div>
                    <div className="mt-2">Book a demo</div>
                    <div className="mt-2">Security </div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 shrink basis-0">
                  <div className="font-bold text-white">Useful Links</div>
                  <div className="flex flex-col mt-4 w-full text-zinc-400">
                    <div>Free rewards</div>
                    <div className="mt-2">Documentation</div>
                    <div className="mt-2">Affiliate program</div>
                  </div>
                </div>
                <div className="flex flex-col w-[180px]">
                  <div className="font-bold text-white">Social</div>
                  <div className="flex flex-row items-center gap-4 mt-4 w-full text-zinc-400">
                    {socialLinks.map((social) => (
                      <Link
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="text-white hover:text-amber-500 transition-colors duration-200"
                      >
                        <social.icon className="w-5 h-5" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-10 justify-between items-center mt-20 w-full text-xs leading-loose text-zinc-400 max-md:mt-10 max-md:max-w-full">
              <div className="self-stretch w-full text-center my-auto">
                Copyright © {new Date().getFullYear()} -{" "}
                <b className="text-white">OGA4BILL</b> All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
