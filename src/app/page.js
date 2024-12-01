import FAQs from "@/components/common/FAQs";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Testimonial from "@/components/common/Testimonial";
import FirstSection from "@/components/Home/FirstSection";
import Hero from "@/components/Home/Hero";
import SecondSection from "@/components/Home/SecondSection";
import Stats from "@/components/Home/Stats";
import WhatweOffer from "@/components/Home/WhatweOffer";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <AnimatePresence>
      <div className="flex relative flex-col pt-8 w-full rounded-none min-h-full max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/3f6f31338dd2a94cb6c1bb2886409a4d3fa699e12eecd3fdb4764b8b521a449e?apiKey=5fa524da69784606825bdce1461219fa&"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col items-center w-full max-md:max-w-full">
          <Navbar />

          <Hero />

          <Stats />

          <WhatweOffer />
          <FirstSection />
          <SecondSection />

          <Testimonial />

          <FAQs />

          <Footer />
        </div>
      </div>
    </AnimatePresence>
  );
}
