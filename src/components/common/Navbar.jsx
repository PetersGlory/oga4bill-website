import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className="flex flex-wrap gap-10 justify-between items-center max-w-full w-[1240px]">
          <div className="flex gap-3 justify-center items-center self-stretch my-auto w-[150px]">
            <img
                loading="lazy"
                srcSet="/assets/img/logo_white.png"
                className="object-contain self-stretch my-auto aspect-[2.83] w-[150px]"
            />
          </div>
          <div className="flex gap-8 justify-center items-center self-stretch my-auto text-base font-medium text-white min-w-[240px] max-md:max-w-full">
            <div className="self-stretch my-auto">Why Us</div>
            <div className="self-stretch my-auto">Services</div>
            <div className="self-stretch my-auto">Our Process</div>
            <div className="self-stretch my-auto">Payments</div>
            <div className="self-stretch my-auto">FAQs</div>
          </div>
          <div className="gap-2.5 self-stretch px-8 py-3 my-auto text-base font-bold text-green-600 border-2 border-green-600 border-solid rounded-[64px] max-md:px-5">
            Download Now
          </div>
        </div>
    </>
  )
}

export default Navbar