// import React from 'react'
import { MdNoAccounts } from "react-icons/md";
import { BiHide } from "react-icons/bi";
import { GrSecure } from "react-icons/gr";
import { MdStorage } from "react-icons/md";
import Team from "./Team";

const About = () => {
  return (
    <div>
        <div className='text-center text-[#7F89D6] mt-[6rem] '>
            <h1> ABOUT VPN</h1>
            <h2>
            <span className="font-bold text-white text-[2.5rem]">Why Should Use Netric VPN? </span>
            </h2>
              </div>
                <div className='flex justify-center gap-5 mt-[2rem] w-[87%] mx-auto' >
                <div className='glass'>
                < BiHide  className=" mx-9 mt-8 rounded-full bg-[#353C71] text-white p-4 h-[4rem] w-[4rem] bg-gradient-to-br from-[#202342] to-[#353C71]"/>
                <h2 className="px-9 mt-4 text-white font-semibold text-[1.5rem]">
                  <span>Anonymous <br/>Access</span>
                </h2>
                <p className='px-9 text-[#979bb1] mt-4'>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div className='glass'>
                < MdNoAccounts className="mx-9 mt-8 rounded-full bg-[#353C71] text-white p-4 h-[4rem] w-[4rem] bg-gradient-to-br from-[#202342] to-[#353C71]"/>
                <h2 className="px-9 mt-4 text-white font-semibold text-[1.5rem]">
                  <span>No Usage Logs <br/></span>
                </h2>
                <p className='px-9 text-[#979bb1] mt-4'>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div className='glass'>
                < MdStorage  className="mx-9 mt-8 rounded-full bg-[#353C71] text-white p-4 h-[4rem] w-[4rem] bg-gradient-to-br from-[#202342] to-[#353C71]"/>
                <h2 className="px-9 mt-4 text-white font-semibold text-[1.5rem]">
                  <span>No Usage Limits</span>
                </h2>
                <p className='px-9 text-[#979bb1] mt-4'>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div className='glass'>
                < GrSecure  className="mx-9 mt-8 rounded-full bg-[#353C71] text-white p-4 h-[4rem] w-[4rem] bg-gradient-to-br from-[#202342] to-[#353C71]"/>
                <h2 className="px-9 mt-4 text-white font-semibold text-[1.5rem]">
                  <span>No Usage Limits</span>
                </h2>
                <p className='px-9 text-[#979bb1] mt-4'>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                </div>
                <Team />
    </div>
  )
}

export default About