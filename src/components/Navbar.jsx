// import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/Logo.jpg'

const Navbar = () => {
  return (
    <div className="">
      <div className="flex justify-center gap-[17rem] py-5 bg-[#15172A]">
        <div className="">
          <img src={Logo} className='w-[11rem]' />
        </div>
        <div className="pt-3">
          <ul className="flex gap-12">
            <Link to='/'> <li>Home</li></Link>
            <Link to='/about'> <li>About</li></Link>
            <Link to='/services'> <li>Services</li></Link>
            <Link to='/pricing'> <li>Pricing</li></Link>
            <Link to='/contact'> <li>Contact</li></Link>
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