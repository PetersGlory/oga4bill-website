import FAQs from "@/components/common/FAQs";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/Home/Hero";
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


        <div className="flex flex-col items-center mt-32 max-md:mt-10 max-md:max-w-full">
          <div className="text-4xl font-bold text-white">What do we offer?</div>
          <div className="flex flex-wrap gap-8 items-start mt-16 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-6 items-start min-w-[240px] w-[392px]">
              <div className="flex overflow-hidden gap-2.5 items-center p-4 w-16 h-16 bg-gray-700 rounded-3xl">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/b3a1ef29de6bae20556d810da942273793e347edce2a8829503e3b75c492baef?apiKey=5fa524da69784606825bdce1461219fa&"
                  className="object-contain w-8 aspect-square"
                />
              </div>
              <div className="flex flex-col flex-1 shrink basis-8 min-w-[240px]">
                <div className="text-2xl font-medium text-white">
                  Security Guarantee{" "}
                </div>
                <div className="mt-2 text-base text-zinc-400">
                  Your data and funds will be securely protected.
                </div>
              </div>
            </div>
            <div className="flex gap-6 items-start min-w-[240px] w-[392px]">
              <div className="flex overflow-hidden gap-2.5 items-center p-4 w-16 h-16 bg-gray-700 rounded-3xl">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/c7769bc789b4044ed76c53fee09c186f4a58cf0926cfdd76ece03ddbe0d357a4?apiKey=5fa524da69784606825bdce1461219fa&"
                  className="object-contain w-8 aspect-square"
                />
              </div>
              <div className="flex flex-col flex-1 shrink basis-8 min-w-[240px]">
                <div className="text-2xl font-medium text-white">Investing</div>
                <div className="mt-2 text-base text-zinc-400">
                  Your data and funds will be securely protected.
                </div>
              </div>
            </div>
            <div className="flex gap-6 items-start min-w-[240px] w-[392px]">
              <div className="flex overflow-hidden gap-2.5 items-center p-4 w-16 h-16 bg-gray-700 rounded-3xl">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/ce6cf143b65b665c63059acc2892673fb398323c2774bae62b62977d5d6bd257?apiKey=5fa524da69784606825bdce1461219fa&"
                  className="object-contain w-8 aspect-square"
                />
              </div>
              <div className="flex flex-col flex-1 shrink basis-8 min-w-[240px]">
                <div className="text-2xl font-medium text-white">
                  Multiple Method
                </div>
                <div className="mt-2 text-base text-zinc-400">
                  Your data and funds will be securely protected.
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="flex flex-col mt-32 max-w-full w-[1240px] max-md:mt-10">
          <div className="pb-7 w-full rounded-none">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto w-full text-base text-white max-md:mt-10 max-md:-mr-4 max-md:max-w-full">
                  <div className="text-4xl font-bold max-md:max-w-full">
                    Design your personalized credit card.
                  </div>
                  <div className="mt-6 leading-6 text-zinc-400 max-md:max-w-full">
                    You have the freedom to personalize the design of your
                    credit card, ensuring a truly unique experience that makes
                    you feel extraordinary
                  </div>
                  <div className="flex gap-4 items-center self-start px-8 py-4 mt-6 font-medium bg-green-600 rounded-[64px] max-md:px-5">
                    <div className="self-stretch my-auto">Create New Card</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/66e1edd2ed756193d4e684f174cc707562fd88ac435a0dd427d62d07765bf24e?apiKey=5fa524da69784606825bdce1461219fa&"
                      className="object-contain shrink-0 self-stretch my-auto aspect-[1.35] w-[23px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex shrink-0 mx-auto max-w-full bg-white bg-opacity-10 h-[492px] rounded-[37px] w-[643px]" />
              </div>
            </div>
          </div>
        </div>


        <div className="flex flex-col mt-32 max-w-full w-[1240px] max-md:mt-10">
          <div className="flex flex-wrap gap-8 items-center w-full">
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


        <div className="flex flex-wrap gap-8 justify-center items-start mt-32 max-w-full w-[1240px] max-md:mt-10">
          <div className="flex flex-col grow shrink items-start px-6 py-12 bg-zinc-800 bg-opacity-20 min-w-[240px] rounded-[32px] w-[314px] max-md:px-5">
            <div className="flex gap-2.5 items-center p-4 w-14 h-14 bg-gray-700 rounded-[56px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/79aa8438ba3bae8eaac06f438702c2bdf465c0c54a9e84593d9328f9737dccad?apiKey=5fa524da69784606825bdce1461219fa&"
                className="object-contain w-6 aspect-square"
              />
            </div>
            <div className="self-stretch mt-8 text-base leading-6 text-white">
              &quot;Great session! Dani was super helpful. She shared some
              practical advice on how can lorem ip we go about refining our
              service offerings.&quot;
            </div>
            <div className="flex gap-2 justify-center items-start mt-8">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/e2c77a9f50a01c0f553b3df59a0012a14797563d7b808ffc2af0588314a094b3?apiKey=5fa524da69784606825bdce1461219fa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/e2c77a9f50a01c0f553b3df59a0012a14797563d7b808ffc2af0588314a094b3?apiKey=5fa524da69784606825bdce1461219fa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/e2c77a9f50a01c0f553b3df59a0012a14797563d7b808ffc2af0588314a094b3?apiKey=5fa524da69784606825bdce1461219fa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/e2c77a9f50a01c0f553b3df59a0012a14797563d7b808ffc2af0588314a094b3?apiKey=5fa524da69784606825bdce1461219fa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/e2c77a9f50a01c0f553b3df59a0012a14797563d7b808ffc2af0588314a094b3?apiKey=5fa524da69784606825bdce1461219fa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/e2c77a9f50a01c0f553b3df59a0012a14797563d7b808ffc2af0588314a094b3?apiKey=5fa524da69784606825bdce1461219fa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/e2c77a9f50a01c0f553b3df59a0012a14797563d7b808ffc2af0588314a094b3?apiKey=5fa524da69784606825bdce1461219fa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/e2c77a9f50a01c0f553b3df59a0012a14797563d7b808ffc2af0588314a094b3?apiKey=5fa524da69784606825bdce1461219fa&"
                className="object-contain shrink-0 w-12 rounded-full aspect-square"
              />
              <div className="flex flex-col">
                <div className="text-base font-medium tracking-tight text-white">
                  Hadid Khan
                </div>
                <div className="text-xs leading-loose text-zinc-400">
                  UIUX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col grow shrink items-start px-6 py-12 bg-zinc-800 bg-opacity-20 min-w-[240px] rounded-[32px] w-[314px] max-md:px-5">
            <div className="flex gap-2.5 items-center p-4 w-14 h-14 bg-gray-700 rounded-[56px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/79aa8438ba3bae8eaac06f438702c2bdf465c0c54a9e84593d9328f9737dccad?apiKey=5fa524da69784606825bdce1461219fa&"
                className="object-contain w-6 aspect-square"
              />
            </div>
            <div className="self-stretch mt-8 text-base leading-6 text-white">
              &quot;It's is both attractive and highly adaptable. It's exactly
              what I've been looking forefinitely wo lorem ipsum dolorth the
              investment.&quot;
            </div>
            <div className="flex gap-2 justify-center items-start mt-8">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/d5a6d3ffd80300051e7685ae3f6a4a5cfc36a6097c9d8c224887a435216f2e01?apiKey=5fa524da69784606825bdce1461219fa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/d5a6d3ffd80300051e7685ae3f6a4a5cfc36a6097c9d8c224887a435216f2e01?apiKey=5fa524da69784606825bdce1461219fa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/d5a6d3ffd80300051e7685ae3f6a4a5cfc36a6097c9d8c224887a435216f2e01?apiKey=5fa524da69784606825bdce1461219fa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/d5a6d3ffd80300051e7685ae3f6a4a5cfc36a6097c9d8c224887a435216f2e01?apiKey=5fa524da69784606825bdce1461219fa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/d5a6d3ffd80300051e7685ae3f6a4a5cfc36a6097c9d8c224887a435216f2e01?apiKey=5fa524da69784606825bdce1461219fa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/d5a6d3ffd80300051e7685ae3f6a4a5cfc36a6097c9d8c224887a435216f2e01?apiKey=5fa524da69784606825bdce1461219fa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/d5a6d3ffd80300051e7685ae3f6a4a5cfc36a6097c9d8c224887a435216f2e01?apiKey=5fa524da69784606825bdce1461219fa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/d5a6d3ffd80300051e7685ae3f6a4a5cfc36a6097c9d8c224887a435216f2e01?apiKey=5fa524da69784606825bdce1461219fa&"
                className="object-contain shrink-0 w-12 rounded-full aspect-square"
              />
              <div className="flex flex-col">
                <div className="text-base font-medium tracking-tight text-white">
                  Wade Warren
                </div>
                <div className="text-xs leading-loose text-zinc-400">
                  Web Designer
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col grow shrink items-start px-6 py-12 bg-zinc-800 bg-opacity-20 min-w-[240px] rounded-[32px] w-[314px] max-md:px-5">
            <div className="flex gap-2.5 items-center p-4 w-14 h-14 bg-gray-700 rounded-[56px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/79aa8438ba3bae8eaac06f438702c2bdf465c0c54a9e84593d9328f9737dccad?apiKey=5fa524da69784606825bdce1461219fa&"
                className="object-contain w-6 aspect-square"
              />
            </div>
            <div className="self-stretch mt-8 text-base leading-6 text-white">
              &quot;I am really satisfied with it. I'm good to go. It really
              saves me time and effort. It's is exactly what our business has
              been lacking. &quot;
            </div>
            <div className="flex gap-2 justify-center items-start mt-8">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/7585225c0b9e5c9d9bf683a1c91c9ba9413d639758a5967cdbfef1af78693ff6?apiKey=5fa524da69784606825bdce1461219fa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/7585225c0b9e5c9d9bf683a1c91c9ba9413d639758a5967cdbfef1af78693ff6?apiKey=5fa524da69784606825bdce1461219fa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/7585225c0b9e5c9d9bf683a1c91c9ba9413d639758a5967cdbfef1af78693ff6?apiKey=5fa524da69784606825bdce1461219fa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/7585225c0b9e5c9d9bf683a1c91c9ba9413d639758a5967cdbfef1af78693ff6?apiKey=5fa524da69784606825bdce1461219fa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/7585225c0b9e5c9d9bf683a1c91c9ba9413d639758a5967cdbfef1af78693ff6?apiKey=5fa524da69784606825bdce1461219fa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/7585225c0b9e5c9d9bf683a1c91c9ba9413d639758a5967cdbfef1af78693ff6?apiKey=5fa524da69784606825bdce1461219fa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/7585225c0b9e5c9d9bf683a1c91c9ba9413d639758a5967cdbfef1af78693ff6?apiKey=5fa524da69784606825bdce1461219fa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/7585225c0b9e5c9d9bf683a1c91c9ba9413d639758a5967cdbfef1af78693ff6?apiKey=5fa524da69784606825bdce1461219fa&"
                className="object-contain shrink-0 w-12 rounded-full aspect-square"
              />
              <div className="flex flex-col">
                <div className="text-base font-medium tracking-tight text-white">
                  Jenny Wilson
                </div>
                <div className="text-xs leading-loose text-zinc-400">
                  Trust Administrator
                </div>
              </div>
            </div>
          </div>
        </div>


        <FAQs />


        <Footer />
      </div>
    </div>
  );
}
