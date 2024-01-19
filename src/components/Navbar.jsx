// import React from 'react'
import Logo from '../images/Logo.jpg'

const Navbar = () => {
  return (
    <div className="container">
      <div className="flex justify-center gap-[17rem] py-5">
        <div className="">
          <img src={Logo} className='w-[11rem]' />
        </div>
        <div className="pt-3">
          <ul className="flex gap-12">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <button className="bg-gradient-to-br from-[#1A1D35] from-20% to-[#353D70]  py-3 w-[8rem] rounded-2xl">Sign Up</button>
        </div>
      </div>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  )
}

export default Navbar