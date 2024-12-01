import React from 'react'

const Hero = () => {
  return (
    <>
        <div className="flex flex-wrap gap-8 items-center mt-12 max-w-full w-full max-md:mt-10 px-4">
          <div className="flex relative flex-col grow shrink items-start min-w-[240px] w-[43%] max-md:max-w-full">
            <div className="z-0 self-stretch text-6xl font-bold tracking-tighter text-white leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
              Unlocking the unlimited possibilities in bill payments
            </div>
            <div className="z-0 self-stretch mt-8 text-lg leading-6 text-zinc-400 max-md:max-w-full">
              Unlock financial possibilities the best way ever to make bills payment and transfers with ease using Oga4bill.
            </div>
            <div className="flex z-0 gap-4 items-center px-8 py-4 mt-8 text-base font-medium text-white bg-green-600 rounded-[64px] max-md:px-5">
              <div className="self-stretch my-auto">Get Started</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/66e1edd2ed756193d4e684f174cc707562fd88ac435a0dd427d62d07765bf24e?apiKey=5fa524da69784606825bdce1461219fa&"
                className="object-contain shrink-0 self-stretch my-auto aspect-[1.35] w-[23px]"
              />
            </div>
            <div className="flex z-0 gap-4 items-center mt-8">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/8143e83479a57a41ffa03cb754ca2cafa0001e27a46836637c7e29c03650feb3?apiKey=5fa524da69784606825bdce1461219fa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/8143e83479a57a41ffa03cb754ca2cafa0001e27a46836637c7e29c03650feb3?apiKey=5fa524da69784606825bdce1461219fa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/8143e83479a57a41ffa03cb754ca2cafa0001e27a46836637c7e29c03650feb3?apiKey=5fa524da69784606825bdce1461219fa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/8143e83479a57a41ffa03cb754ca2cafa0001e27a46836637c7e29c03650feb3?apiKey=5fa524da69784606825bdce1461219fa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/8143e83479a57a41ffa03cb754ca2cafa0001e27a46836637c7e29c03650feb3?apiKey=5fa524da69784606825bdce1461219fa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/8143e83479a57a41ffa03cb754ca2cafa0001e27a46836637c7e29c03650feb3?apiKey=5fa524da69784606825bdce1461219fa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/8143e83479a57a41ffa03cb754ca2cafa0001e27a46836637c7e29c03650feb3?apiKey=5fa524da69784606825bdce1461219fa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/8143e83479a57a41ffa03cb754ca2cafa0001e27a46836637c7e29c03650feb3?apiKey=5fa524da69784606825bdce1461219fa&"
                className="object-contain shrink-0 gap-0 self-stretch my-auto aspect-[2.5] w-[120px]"
              />
              <div className="flex flex-col self-stretch my-auto w-[177px]">
                <div className="text-base font-bold text-white">10.2k+</div>
                <div className="text-xs leading-4 text-zinc-400">
                  Active users around the wordls
                </div>
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/7c991b7ecdccec44d3cfc6c3c61de2ec820f12043104e9032b8462f374c4f4e5?apiKey=5fa524da69784606825bdce1461219fa&"
              className="object-contain absolute -left-2.5 z-0 max-w-full aspect-[3.58] h-[100px] top-[62px] w-[359px]"
            />
          </div>
          <div className="flex flex-col grow shrink items-start min-w-[240px] w-[483px] max-md:max-w-full">
            <div className="flex flex-col items-end px-20 md:pt-12 max-w-full rounded-none w-[793px] max-md:pl-5">
              <div className="flex shrink-0 max-w-full bg-green-600 rounded-full" />
                <img
                loading="lazy"
                src="/assets/img/home.png"
                className="object-contain h-[492px] w-[419px] transform hover:scale-105 transition-transform duration-700"
                />
            </div>
          </div>
        </div>
    </>
  )
}

export default Hero