import '../app.css'
import { IoEyeOffOutline } from "react-icons/io5";
import { PiUserSwitchLight } from "react-icons/pi";
import { RiInboxLine } from "react-icons/ri";
import { CiLock } from "react-icons/ci";
import { FaHeadphones } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { BsDatabaseFillCheck } from "react-icons/bs";
export default function Services() {
    return (
        <>
            <div className='w-[84%] mx-auto mt-[6rem]'>
                <div className='text-center'>
                    <h1 className='from-[#576099]  to-[#8994E6] bg-gradient-to-tr bg-clip-text text-transparent text-[1.25rem]  font-bold'>Our Services</h1>
                    <p className='text-[2rem] py-[1.5rem] font-bold'>We Offer The Fastest & Simplest VPN</p>
                    <p className='text-[#9397AD]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br />dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>

                <div className='flex gap-8'>
                    <div className='from-[#202441] to-[#191B31] bg-gradient-to-br   w-[23%] rounded-3xl p-[2rem] mt-[2rem] h-[18rem] '>
                        <div className='rounded-3xl'>
                            <div className='w-[4rem]  pt-[1rem] h-[4rem] from-[#1E213E] to-[#353C71] bg-gradient-to-br rounded-full '>
                                <IoEyeOffOutline className='w-[4rem] h-[2rem] ' />
                            </div>
                            <h1 className='font-bold py-[1rem] text-[1.5rem]'>Anonymous Access</h1>
                            <p className='text-[#9397AD]'>Lorem ipsum dolor sit amet,<br /> consect adipiscing elit, sed do<br /> eiusmod tempor.</p>
                        </div>

                    </div>
                    <div className='from-[#202441] to-[#191B31] bg-gradient-to-br  shadow-0 4px 30px rgba(0, 0, 0, 0.1)  w-[23%] rounded-3xl p-[2rem] mt-[2rem] h-[18rem] '>
                        <div className='rounded-3xl'>
                            <div className='w-[4rem]  pt-[1rem] h-[4rem] from-[#1E213E] to-[#353C71] bg-gradient-to-br rounded-full '>
                                <PiUserSwitchLight  className='w-[4rem] h-[2rem] ' />
                            </div>
                            <h1 className='font-bold py-[1rem] text-[1.5rem]'>No Usage Logs</h1>
                            <p className='text-[#9397AD]'>Lorem ipsum dolor sit amet,<br /> consect adipiscing elit, sed do<br /> eiusmod tempor.</p>
                        </div>

                    </div>
                    <div className='from-[#202441] to-[#191B31] bg-gradient-to-br   w-[23%] rounded-3xl p-[2rem] mt-[2rem] h-[18rem] '>
                        <div className='rounded-3xl'>
                            <div className='w-[4rem]  pt-[1rem] h-[4rem] from-[#1E213E] to-[#353C71] bg-gradient-to-br rounded-full '>
                                <RiInboxLine  className='w-[4rem] h-[2rem] ' />
                            </div>
                            <h1 className='font-bold py-[1rem] text-[1.5rem]'>No Usage Limits</h1>
                            <p className='text-[#9397AD]'>Lorem ipsum dolor sit amet,<br /> consect adipiscing elit, sed do<br /> eiusmod tempor.</p>
                        </div>

                    </div>
                    <div className='from-[#202441] to-[#191B31] bg-gradient-to-br   w-[23%] rounded-3xl p-[2rem] mt-[2rem] h-[17rem] '>
                       <div className='rounded-3xl'>
                        <div className='w-[4rem]  pt-[1rem] h-[4rem] from-[#1E213E] to-[#353C71] bg-gradient-to-br rounded-full '>
                        <CiLock className='w-[4rem] h-[2rem] ' />
                        </div>
                        <h1 className='font-bold py-[1rem] text-[1.5rem]'>100% White Listed</h1>
                        <p className='text-[#9397AD]'>Lorem ipsum dolor sit amet,<br/> consect adipiscing elit, sed do<br/> eiusmod tempor.</p>
                        </div>
                        </div>
                    </div>
                    <div className='flex gap-8'>
                    <div className='from-[#202441] to-[#191B31] bg-gradient-to-br   w-[23%] rounded-3xl p-[2rem] mt-[2rem] h-[17rem] '>
                        <div className='rounded-3xl'>
                            <div className='w-[4rem]  pt-[1rem] h-[4rem] from-[#1E213E] to-[#353C71] bg-gradient-to-br rounded-full '>
                                <FaHeadphones   className='w-[4rem] h-[2rem] ' />
                            </div>
                            <h1 className='font-bold py-[1rem] text-[1.5rem]'>24/7 Support</h1>
                            <p className='text-[#9397AD]'>Lorem ipsum dolor sit amet,<br /> consect adipiscing elit, sed do<br /> eiusmod tempor.</p>
                        </div>

                    </div>
                    <div className='from-[#202441] to-[#191B31] bg-gradient-to-br   w-[23%] rounded-3xl p-[2rem] mt-[2rem] h-[17rem] '>
                        <div className='rounded-3xl'>
                            <div className='w-[4rem]  pt-[1rem] h-[4rem] from-[#1E213E] to-[#353C71] bg-gradient-to-br rounded-full '>
                                <CiGlobe   className='w-[4rem] h-[2rem] ' />
                            </div>
                            <h1 className='font-bold py-[1rem] text-[1.5rem]'>Instant Set-Up</h1>
                            <p className='text-[#9397AD]'>Lorem ipsum dolor sit amet,<br /> consect adipiscing elit, sed do<br /> eiusmod tempor.</p>
                        </div>

                    </div>
                    <div className='from-[#202441] to-[#191B31] bg-gradient-to-br   w-[23%] rounded-3xl p-[2rem] mt-[2rem] h-[17rem] '>
                        <div className='rounded-3xl'>
                            <div className='w-[4rem]  pt-[1rem] h-[4rem] from-[#1E213E] to-[#353C71] bg-gradient-to-br rounded-full '>
                                <BsDatabaseFillCheck  className='w-[4rem] h-[2rem] ' />
                            </div>
                            <h1 className='font-bold py-[1rem] text-[1.5rem]'>Cloud Database</h1>
                            <p className='text-[#9397AD]'>Lorem ipsum dolor sit amet,<br /> consect adipiscing elit, sed do<br /> eiusmod tempor.</p>
                        </div>
                        </div>
                        <div className='mt-[2.5rem] pb-[5rem]'>
                        <h1 className='font-bold py-[1rem] text-[1.5rem]'>For Free Services</h1>
                        <p className='text-[#9397AD]'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore<br /> et dolore magna aliqua..</p>
                        <button className=' mt-[1rem] from-[#1C1F3A] to-[#353C71] bg-gradient-to-br font-bold w-[10rem] rounded-lg h-[4rem]'>Learn More</button>



                        </div>
                    </div>
                
            </div>

        </>
    )
}