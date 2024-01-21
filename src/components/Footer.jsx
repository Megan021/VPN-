// import React from 'react'
import Logo from '../images/Logo.jpg'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Subscribe from './Subscribe';

const Footer = () => {
  return (
    <div>
      <div>
        <Subscribe />
        <div className="flex justify-center gap-[15.5rem] py-[3rem] pt-[5rem]  mx-auto">
          <div className="">
            <img src={Logo} className='w-[10rem]' />
          </div>
          <div className="pt-2">
            <ul className="flex gap-10">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='flex gap-3 '>
            <i className='h-[2.5rem] w-[2.5rem] bg-[#202543] rounded-md pl-[9px] pt-[9px] text-[1.3rem]'><FaFacebookF /></i>
            <i className='h-[2.5rem] w-[2.5rem] bg-[#202543] rounded-md pl-[9px] pt-[9px] text-[1.3rem]'><FaGithub /></i>
            <i className='h-[2.5rem] w-[2.5rem] bg-[#202543] rounded-md pl-[9px] pt-[9px] text-[1.3rem]'><FaInstagram /></i>
            <i className='h-[2.5rem] w-[2.5rem] bg-[#202543] rounded-md pl-[9px] pt-[9px] text-[1.3rem]'><FaLinkedinIn /></i>
          </div>
        </div>
        <hr className="h-px bg-gray-200 border-0 w-[84%] mx-auto dark:bg-gray-700" />

        <div className='flex w-[84%] mx-auto gap-[43.4rem] py-8'>
          <div className='flex gap-8'>
            <div><p>Privacy & Policy</p></div>
            <div><p>Terms Condition</p></div>
          </div>
          <div>
            <p>Copyright Netric © 2021. All rights reserved</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Footer