import React from 'react'

const Footer = () => {
  return (
    <>
        <div className="flex flex-col mt-32 w-full max-md:mt-10 max-md:max-w-full">
          <div className="self-center w-full max-w-[1240px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                <div className="flex gap-4 items-start self-stretch my-auto mr-0 rounded-[48px] max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col min-w-[240px] w-[605px]">
                    <div className="flex flex-col items-start pr-20 w-full rounded-none max-md:pr-5">
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
                  srcSet="https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/30ce41667d1b3343bc61be069d3d8ddedd142fd98207f5da468f2e64a7dfd6f2?apiKey=5fa524da69784606825bdce1461219fa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/30ce41667d1b3343bc61be069d3d8ddedd142fd98207f5da468f2e64a7dfd6f2?apiKey=5fa524da69784606825bdce1461219fa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/30ce41667d1b3343bc61be069d3d8ddedd142fd98207f5da468f2e64a7dfd6f2?apiKey=5fa524da69784606825bdce1461219fa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/30ce41667d1b3343bc61be069d3d8ddedd142fd98207f5da468f2e64a7dfd6f2?apiKey=5fa524da69784606825bdce1461219fa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/30ce41667d1b3343bc61be069d3d8ddedd142fd98207f5da468f2e64a7dfd6f2?apiKey=5fa524da69784606825bdce1461219fa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/30ce41667d1b3343bc61be069d3d8ddedd142fd98207f5da468f2e64a7dfd6f2?apiKey=5fa524da69784606825bdce1461219fa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/30ce41667d1b3343bc61be069d3d8ddedd142fd98207f5da468f2e64a7dfd6f2?apiKey=5fa524da69784606825bdce1461219fa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/5fa524da69784606825bdce1461219fa/30ce41667d1b3343bc61be069d3d8ddedd142fd98207f5da468f2e64a7dfd6f2?apiKey=5fa524da69784606825bdce1461219fa&"
                  className="object-contain grow w-full aspect-[1.28] max-md:max-w-full"
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
                    <div className="font-bold text-white">Products</div>
                    <div className="flex flex-col mt-4 w-full text-zinc-400">
                      <div>Credits Cards</div>
                      <div className="mt-2">Gift Cards</div>
                      <div className="mt-2">Savings accounts</div>
                      <div className="mt-2">NFT</div>
                    </div>
                  </div>
                  <div className="flex flex-col w-[180px]">
                    <div className="font-bold text-white">Useful Links</div>
                    <div className="flex flex-col mt-4 w-full text-zinc-400">
                      <div>Free rewards</div>
                      <div className="mt-2">Documentation</div>
                      <div className="mt-2">Affiliate program</div>
                    </div>
                  </div>
                  <div className="flex flex-col w-[180px]">
                    <div className="font-bold text-white">Social</div>
                    <div className="flex flex-col mt-4 w-full text-zinc-400">
                      <div>Changelog</div>
                      <div className="mt-2">License</div>
                      <div className="mt-2">Site Maps</div>
                      <div className="mt-2">News</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-10 justify-between items-center mt-20 w-full text-xs leading-loose max-w-[1240px] text-zinc-400 max-md:mt-10 max-md:max-w-full">
                <div className="self-stretch my-auto">
                  copyright 2023 DoraDesign All Rights Reserved
                </div>
                <div className="flex self-stretch my-auto min-w-[240px] w-[289px]">
                  <div className="flex-auto mr-0">
                    This page uses cookies. See cookies details here{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Footer