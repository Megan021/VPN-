// import React from 'react'
import NewsImg1 from '../images/NewsImg1.jpg';
import NewsImg2 from '../images/NewsImg2.jpg';
import NewsImg3 from '../images/NewsImg3.jpg';

const News = () => {
    return (
        <>
            <div className="mt-[6.6rem] w-[84%] mx-auto pb-5">
                <div>
                    <h2 className="text-[22px] font-semibold pb-5 from-[#576099]  to-[#8994E6] bg-gradient-to-tr bg-clip-text text-transparent">Our News</h2>
                </div>
                <div className="flex justify-between">
                    <div><h2 className="text-[2.4rem] font-bold">Latest News</h2></div>
                    <div><button className="text-base bg-gradient-to-br from-[#1A1D35] from-20% to-[#353D70]  py-5 w-[9rem] rounded-2xl">All News</button></div>
                </div>

                <div className="flex gap-6">
                    <div className='w-[75%] leading-14 py-7'>
                        <img src={NewsImg1} className='rounded-2xl pb-8 w-[100%] h-[17rem]' />
                        <h2 className='text-[1.4rem] font-bold'>Professional Secutiry Always There To Keep Safe</h2>
                        <p className='text-[#979BB1] py-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui sunt maxime quibusdam suscipit corrupti distinctio dolore cum expedita provident id.</p>
                        <p className='font-bold'>Read More</p>
                    </div>
                    <div className='w-[75%] leading-14 py-7'>
                        <img src={NewsImg2} className='rounded-2xl pb-8 w-[100%] h-[17rem]' />
                        <h2 className='text-[1.4rem] font-bold'>Cloud Network Detection & Response On VPN</h2>
                        <p className='text-[#979BB1] py-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui sunt maxime quibusdam suscipit corrupti distinctio dolore cum expedita provident id.</p>
                        <p className='font-bold'>Read More</p>
                    </div>
                    <div className='w-[75%] leading-14 py-7'>
                        <img src={NewsImg3} className='rounded-2xl pb-8 w-[100%] h-[17rem]' />
                        <h2 className='text-[1.4rem] font-bold'>The Essence Of The Newest Cloud Service Solution</h2>
                        <p className='text-[#979BB1] py-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui sunt maxime quibusdam suscipit corrupti distinctio dolore cum expedita provident id.</p>
                        <p className='font-bold'>Read More</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default News