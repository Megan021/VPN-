// import React from "react";
import { HiMiniServerStack } from "react-icons/hi2";
import { AiOutlineGlobal } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { LiaUsersSolid } from "react-icons/lia";
import WorldMap from "../images/worldmap.jpg"
import Pic1 from "../images/pic1.jpg"
import Pic2 from "../images/pic2.jpg"
import pic3 from "../images/pic3.jpg"
const Maping = () => {
  return (

    <div>
      <div className="mx-auto w-[100%] px-0 pt-[5rem]">
        <div className="glass1">
          <div className="flex justify-center gap-[7rem]">
            <div>
              <HiMiniServerStack className=" mx-5 mt-9 p-4  text-[5rem]" />
              <h2 className="px-9  text-white font-semibold text-[2rem]">
                278<span className="text-[1.5rem] px-2  text-[#3f4673]">+</span>
              </h2>
              <p className="px-9 text-[#979bb1]">Server Active</p>
            </div>
            <div>
              <AiOutlineGlobal className=" mx-5 mt-9 p-4  text-[5rem]" />
              <h2 className="px-9  text-white font-semibold text-[2rem]">
                11,458
                <span className="text-[1.5rem] px-2  text-[#3f4673]">+</span>
              </h2>
              <p className="px-9 text-[#979bb1]">User Request</p>
            </div>
            <div>
              <RiMoneyDollarCircleLine  className=" mx-5 mt-9 p-4  text-[5rem]" />
              <h2 className="px-9  text-white font-semibold text-[2rem]">
                100<span className="text-[1.5rem] px-2  text-[#3f4673]">%</span>
              </h2>
              <p className="px-9 text-[#979bb1]">Money Back</p>
            </div>
            <div>
              <LiaUsersSolid  className=" mx-5 mt-9 p-4  text-[5rem]" />
              <h2 className="px-9  text-white font-semibold text-[2rem]">
                85<span className="text-[1.5rem] px-2  text-[#3f4673]">+</span>
              </h2>
              <p className="px-9 text-[#979bb1] text-left">Expert Support Team</p>
            </div>
          </div>
        </div>
          <div>
            <img src={WorldMap} className="px-[2rem] opacity-25 mt-[7rem] mx-auto w-[85%]" />
          </div>
      </div>
      <div className="text-center mt-[5rem] mb-[1.5rem] font-bold text-[2.5rem]">
        <h2>
            Over <span className="from-[#576099]  to-[#8994E6] bg-gradient-to-tr bg-clip-text text-transparent">183K+ <br/> </span>Global User Participation
        </h2>
      </div>
      <div className="text-center flex w-[89%] mx-auto">
        <div className="glass3">
            <img src={Pic1} className="mx-auto mt-[3rem] rounded-full object-cover h-[5rem] w-[5rem] "/>
        <h2 className="px-9 mt-[1rem]  text-white font-semibold text-[1.5rem]">
                Jenie Doe 
             </h2>
                  <span className="px-9 mt-4">Marketing<br/></span>
                
                <p className='px-9 text-[#979bb1] mt-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
        </div>
        <div className="glass3">
            <img src={Pic2} className="mx-auto mt-[3rem] rounded-full object-cover object-right-top h-[5rem] w-[5rem] "/>
        <h2 className="px-9 mt-[1rem]  text-white font-semibold text-[1.5rem]">
        Steven Chaw 
             </h2>
                  <span className="px-9 mt-4">Content Creator<br/></span>
                
                <p className='px-9 text-[#979bb1] mt-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
        </div>
        <div className="glass3">
            <img src={pic3} className="mx-auto mt-[3rem] rounded-full object-cover object-top h-[5rem] w-[5rem] "/>
        <h2 className="px-9 mt-[1rem]  text-white font-semibold text-[1.5rem]">
        Clara Jepsen 
             </h2>
                  <span className="px-9 mt-4">Manager<br/></span>
                
                <p className='px-9 text-[#979bb1] mt-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
        </div>
      </div>
    </div>
  );
};

export default Maping;
