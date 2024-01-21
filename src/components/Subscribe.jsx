// import React from 'react'

const Subscribe = () => {
  return (
    <div>
      {/* <div className="h-[23.5rem] w-[84%] mx-auto rounded-2xl  from-[#242844] to-[#1F2139] to-100% bg-[url('./images/BlueBgImg.jpg')] my-[4rem]"> */}
      <div className="h-[23.5rem] w-[84%] mx-auto rounded-2xl  bg-gradient-to-br from-[#242A44] via-[#242A44] to-[#17192E] mb-[5rem] mt-[9rem]">
        <div className="text-center">
          <h3 className="text-[1.4rem] font-semibold pb-[0.7rem] pt-[3.5rem]">Lets Subscribe</h3>
          <h2 className="text-[2.4rem] font-bold pb-[0.8rem]">Subscribe Our Newsletter</h2>
          <p className="w-[46%] mx-auto mb-9 text-[#979bb1]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis illum quam deleniti, esse sit eius repellendus voluptatem! Nisi, voluptate</p>
          <div className="flex justify-center gap-3">
            <div><input className="py-4 w-[26rem] px-3 rounded-2xl" type="text" placeholder="Your Email" /></div>
            <div><button className="text-base bg-gradient-to-br from-[#1A1D35] from-20% to-[#353D70]  py-4 w-[10rem] rounded-2xl">Subscribe</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe