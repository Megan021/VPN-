// import React from 'react'
import HeroImg from '../images/HeroImg.jpg'
import { IoMdPlay } from "react-icons/io";
import { TypeAnimation } from 'react-type-animation';
import Welcome from './Welcome';
import Offer from './Offer';
import Maping from './Maping';
// #576099
const Hero = () => {
    return (
        <div>
            <div className='flex w-[84%] mx-auto pt-[8rem]'>
                <div className='pt-[4rem]'>
                    <h1 className='text-[3.5rem] font-bold'>Explore The World Wide<br />
                        <span className='from-[#576099]  to-[#8994E6] bg-gradient-to-tr bg-clip-text text-transparent'> <TypeAnimation
                            sequence={[
                                'Fast',
                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Safely',
                                2000,
                                'Easy',
                                2000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '56px' }}
                            repeat={Infinity}
                        /></span>
                        With Netric VPN</h1>
                    <p className='text-lg text-[#979bb1] w-[90%] py-3 mb-8'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <div className="flex gap-8">
                        <div><button className='text-lg py-4 w-[10.5rem] bg-gradient-to-br from-[#1A1D35] from-20% to-[#353D70] rounded-2xl'>Get Started</button></div>
                        <div><i><IoMdPlay className='text-[4rem] text-white rounded-full border-2 p-4 pr-3' /></i></div>
                        <div><p className='text-lg font-semibold pt-4'>Learn More</p></div>
                    </div>
                </div>
                <div>
                    <img src={HeroImg} className='w-[80rem]' />
                </div>
            </div>
            <Welcome />
            <Offer />
            <Maping />
        </div>
    )
}

export default Hero