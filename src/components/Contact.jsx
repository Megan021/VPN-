// import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { RiCustomerService2Fill } from "react-icons/ri";

const Contact = () => {
    return (
        <>
            <div className="w-[84%] mx-auto mt-[6rem]">
                <div className="flex justify-center gap-[4rem]">
                    <div className="h-[42.5rem] rounded-3xl w-[73%] px-[3rem] bg-gradient-to-tl from-[#1A1D35] from-40% to-[#212541] ">
                        <h2 className="text-2xl font-bold pt-[3.5rem] pb-[1rem]">Leave A Message</h2>
                        <p className="pb-5">Lorem ipsum dolor sit amet consectetur adipiscing elit sedeius tempor incididunt dolore magna aliqua.</p>
                        <input className="my-3 py-4 w-[100%] rounded-2xl bg-transparent border-2 border-gray-600 px-3" type="text" placeholder="Your Name" /><br />
                        <input className="my-3 py-4 w-[100%] rounded-2xl bg-transparent border-2 border-gray-600 px-3" type="text" placeholder="Your Email" /><br />
                        <input className="my-3 py-4 w-[100%] rounded-2xl bg-transparent border-2 border-gray-600 px-3" type="text" placeholder="Your Subject" /><br />
                        <textarea className="my-3 py-4 h-[7rem] w-[100%] rounded-2xl bg-transparent border-2 border-gray-600 px-3" type="textarea" placeholder="Your Message" /><br />
                        <button className="mt-1 py-5 w-[100%] bg-gradient-to-br from-[#1A1D35] from-20% to-[#353D70] rounded-2xl">Submit</button>
                    </div>

                    <div className="mt-[4.5rem]">
                        <h3 className="text-[22px] font-semibold from-[#576099]  to-[#8994E6] bg-gradient-to-tr bg-clip-text text-transparent pb-4">Contact Us</h3>
                        <h2 className="text-[38px] font-bold pb-4">Get In Touch</h2>
                        <p className="w-[93%] text-[#979bb1] pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliquat enim adiqua consectetur adipiscing.</p>

                        <div className="">
                            <div className="flex gap-7 py-4">
                                <div><i><CiLocationOn className="h-[4rem] w-[4rem] p-4 bg-gradient-to-br from-[#1A1D35] from-20% to-[#353D70] rounded-full" /></i></div>
                                <div><h2 className="text-[1.5rem] font-bold">Our Office</h2><p className="text-[#979bb1]">Puputan Renon ST. 1190, Bali</p></div>
                            </div>
                            <div className="flex gap-7 py-4">
                                <div><i><AiOutlineMail className="h-[4rem] w-[4rem] p-4 bg-gradient-to-br from-[#1A1D35] from-20% to-[#353D70] rounded-full" /></i></div>
                                <div><h2 className="text-[1.5rem] font-bold">Our Email</h2><p className="text-[#979bb1]">netrik@support.com</p></div>
                            </div>
                            <div className="flex gap-7 py-4">
                                <div><i><FiPhone className="h-[4rem] w-[4rem] p-4 bg-gradient-to-br from-[#1A1D35] from-20% to-[#353D70] rounded-full" /></i></div>
                                <div><h2 className="text-[1.5rem] font-bold">Our Phone</h2><p className="text-[#979bb1]">(+62) 123-321-543</p></div>
                            </div>
                            <div className="flex gap-7 py-4">
                                <div><i><RiCustomerService2Fill className="h-[4rem] w-[4rem] p-4 bg-gradient-to-br from-[#1A1D35] from-20% to-[#353D70] rounded-full" /></i></div>
                                <div><h2 className="text-[1.5rem] font-bold">Our Hotline</h2><p className="text-[#979bb1]">1230-4526</p></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact