import FAQs from "@/components/common/FAQs";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Testimonial from "@/components/common/Testimonial";
import Hero from "@/components/Home/Hero";
import WhatweOffer from "@/components/Home/WhatweOffer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex relative flex-col pt-8 w-full rounded-none min-h-full max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/3f6f31338dd2a94cb6c1bb2886409a4d3fa699e12eecd3fdb4764b8b521a449e?apiKey=5fa524da69784606825bdce1461219fa&"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col items-center w-full max-md:max-w-full">
        <Navbar />

        <Hero />

        <div className="flex flex-wrap items-start p-16 mt-32 bg-gray-700 bg-opacity-20 rounded-[32px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col justify-center items-center min-w-[240px] w-[278px]">
            <div className="text-5xl font-bold tracking-tight leading-none text-white max-md:text-4xl">
              16y
            </div>
            <div className="mt-2 text-base font-medium text-green-600">
              Experience{" "}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center min-w-[240px] w-[278px]">
            <div className="text-5xl font-bold tracking-tight leading-none text-white max-md:text-4xl">
              250+
            </div>
            <div className="mt-2 text-base font-medium text-green-600">
              Merchant Partner
            </div>
          </div>
          <div className="flex flex-col justify-center items-center min-w-[240px] w-[278px]">
            <div className="text-5xl font-bold tracking-tight leading-none text-white max-md:text-4xl">
              18+
            </div>
            <div className="mt-2 text-base font-medium text-green-600">
              Years Experience
            </div>
          </div>
          <div className="flex flex-col justify-center items-center min-w-[240px] w-[278px]">
            <div className="text-5xl font-bold tracking-tight leading-none text-white max-md:text-4xl">
              10.2k+
            </div>
            <div className="mt-2 text-base font-medium text-green-600">
              Worldwide Clients
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-10 justify-between items-start mt-32 max-w-full w-[1240px] max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/02596f450dcf2916c4c7409b2a79b71bda95fcd3bf8848f461304f608c328410?apiKey=5fa524da69784606825bdce1461219fa&"
            className="object-contain shrink-0 aspect-[3.31] w-[106px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/e3586d0a8a9604db14271f516917e1e13ad2726d7b93f2ba9f8956e248cc332b?apiKey=5fa524da69784606825bdce1461219fa&"
            className="object-contain shrink-0 aspect-[2.81] w-[90px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/61b545d16f8464dbb86a77de58ae35d02f02f31f2cf383bac62659574c550d61?apiKey=5fa524da69784606825bdce1461219fa&"
            className="object-contain shrink-0 aspect-[3.34] w-[107px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/aba0e7aa03d6e42d44bd76001cea6a4a9c1e1afefd1ba3100447c9bc98edbc40?apiKey=5fa524da69784606825bdce1461219fa&"
            className="object-contain shrink-0 aspect-[7.41] w-[237px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/d31f58822f298d59bddd124c0eee8febdb28286c2511513b80e4a714def72b6f?apiKey=5fa524da69784606825bdce1461219fa&"
            className="object-contain shrink-0 aspect-[3.18] w-[102px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/c7365e011b751b1d288da437683123db75eccac5286a7a148a9626b712ad2c85?apiKey=5fa524da69784606825bdce1461219fa&"
            className="object-contain shrink-0 aspect-[3.15] w-[101px]"
          />
        </div>


        <WhatweOffer />


        <div className="flex flex-col mt-32 max-w-full w-[1240px] max-md:mt-10">
          <div className="pb-7 w-full rounded-none">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto w-full text-base text-white max-md:mt-10 max-md:-mr-4 max-md:max-w-full">
                  <div className="text-4xl font-bold max-md:max-w-full">
                    Streamline your bill payments with our convenient solution.
                  </div>
                  <div className="mt-6 leading-6 text-zinc-400 max-md:max-w-full">
                    Take the hassle out of managing your finances with our innovative solution designed to simplify 
                    your bill payments. Enjoy a seamless experience as you effortlessly track, organize, and pay your 
                    bills all in one place. Say goodbye to late fees and missed payments, and embrace the convenience 
                    of stress-free budgeting today!
                  </div>
                  <div className="flex gap-4 items-center self-start px-8 py-4 mt-6 font-medium bg-green-600 rounded-[64px] max-md:px-5">
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
                <div className="flex smx-auto max-w-full bg-white bg-opacity-10 h-[492px] rounded-[37px] w-[643px]">
                  <img 
                    src="assets/img/welcome.png"
                    classname="w-full md:w-[421px] h-[620px]"
                    alt="welcome"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="flex flex-col mt-32 max-w-full w-[1240px] max-md:mt-10">
          <div className="flex flex-wrap gap-8 justify-center items-center w-full">
            <div className="flex flex-col grow shrink self-stretch px-7 pb-5 my-auto rounded-none min-w-[240px] w-[483px] max-md:px-5 max-md:max-w-full">
              <div className="flex z-10 flex-col items-start px-11 py-8 max-w-full bg-white bg-opacity-10 rounded-[35px] w-[421px] max-md:px-5">
                <div className="flex gap-5 justify-between self-stretch">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/991e0547f7d0910b0f8fd13c442fd360aecc78865700051db5fccd2c96bde716?apiKey=5fa524da69784606825bdce1461219fa&"
                    className="object-contain shrink-0 self-start aspect-[1.65] w-[43px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/2cd799bb32e873dce0c051ca13ff948f0caed2f22e5bee41bcefdc8341f6d992?apiKey=5fa524da69784606825bdce1461219fa&"
                    className="object-contain shrink-0 aspect-[0.71] w-[25px]"
                  />
                </div>
                <div className="mt-7 text-base font-semibold text-gray-200">
                  Credit Card No.
                </div>
                <div className="mt-2.5 text-2xl font-bold leading-tight text-white">
                  1602 0911 2019 2021
                </div>
                <div className="flex gap-8 mt-6">
                  <div className="flex flex-col self-start mt-1.5">
                    <div className="self-start text-base font-semibold text-gray-200">
                      Name
                    </div>
                    <div className="mt-1.5 text-sm font-medium text-white">
                      REHAN RAIHAN
                    </div>
                  </div>
                  <div className="flex flex-col font-semibold whitespace-nowrap">
                    <div className="self-start text-base text-gray-200">
                      Exp.
                    </div>
                    <div className="mt-3 text-sm text-white">09/11</div>
                  </div>
                </div>
              </div>
              <div className="flex z-10 shrink-0 self-end mt-0 max-w-full h-[272px] rotate-[-1.759977387703556rad] w-[255px]" />
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
                possibilities and find the credit card that fits your unique
                goals and aspirations.
              </div>
              <div className="gap-4 self-start px-8 py-4 mt-6 font-medium bg-green-600 rounded-[64px] max-md:px-5">
                Learn More
              </div>
            </div>
          </div>
        </div>

        <Testimonial />

        <FAQs />


        <Footer />
      </div>
    </div>
  );
}
