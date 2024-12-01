import React from "react";

const SecondSection = () => {
  return (
    <>
      <div className="flex flex-col mt-32 max-w-full w-full px-4 max-md:mt-10">
        <div className="flex flex-wrap gap-8 justify-center items-center w-full">
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex smx-auto max-w-full py-4 bg-white items-center justify-center bg-opacity-10 h-[492px] rounded-[37px] w-[643px]">
                <img
                    loading="lazy"
                    src="/assets/img/service.png"
                    className="object-contain h-[492px] w-[419px] transform hover:scale-105 transition-transform duration-700"
                    />
              </div>
            </div>
          <div className="flex flex-col grow shrink self-stretch my-auto text-base text-white min-w-[240px] w-[483px] max-md:max-w-full">
            <div className="text-4xl font-bold max-md:max-w-full">
              Find the Perfect Credit Card for You
            </div>
            <div className="mt-6 leading-6 text-zinc-400 max-md:max-w-full">
              Discover your ideal credit card with ease. Our comprehensive
              selection caters to every financial need and lifestyle. Whether
              you seek cashback rewards, travel perks, or building credit, we
              have the perfect credit card waiting for you. Unleash the
              possibilities and find the credit card that fits your unique goals
              and aspirations.
            </div>
            <div className="gap-4 self-start px-8 py-4 mt-6 font-medium bg-green-600 rounded-[64px] max-md:px-5">
              Learn More
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondSection;