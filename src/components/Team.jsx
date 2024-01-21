import React from "react";
import Dipendra from "../images/dipendra1.jpg";
import Megan from "../images/megan.jpg";
import Pranish from "../images/pranish.jpg";
import { FiGithub } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Team = () => {
  return (
    <div>
      <div className="text-center pt-[6rem] ">
        <h3 className="font-semibold pb-2 text-[1.5rem] from-[#576099]  to-[#8994E6] bg-gradient-to-tr bg-clip-text text-transparent ">Netric Team</h3>
        <h2 className="font-bold text-[2.5rem]">Meet Our Expert Team</h2>
        <p className="text-[#979bb1] w-[60%] pt-3 mx-auto pb-[2.2rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
      </div>
      <div className="flex justify-center w-[98%] mx-auto gap-7">
        <div className="relative rounded-3xl overflow-hidden bg-cover bg-no-repeat ">
          <img src={Dipendra} className="rounded-3xl h-[30rem] w-[23rem]" />
          <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-900 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50">
            <div className="-rotate-90 text-lg absolute mt-[3rem]">
            <span className="font-bold">Dipendra</span>
            </div>
            <div className="absolute mt-[23rem] ml-[20rem] text-[1.5rem] ">
            <ul>
              <li className=""><FiGithub className="h-[1.3rem] w-[1.3rem] rounded-lg bg-gradient-to-br from-[#1A1D35] to-[#353D70]"/></li>
              <li className=""><FaFacebookF  className="h-[1.3rem] w-[1.3rem] rounded-lg bg-gradient-to-br from-[#1A1D35] to-[#353D70] my-3"/></li>
              <li className=""><FaLinkedinIn  className="h-[1.3rem] w-[1.3rem] rounded-lg bg-gradient-to-br from-[#1A1D35] to-[#353D70]"/></li>
            </ul>
            </div>
          </div>
        </div>
        <div className="relative rounded-3xl overflow-hidden bg-cover bg-no-repeat ">
          <img src={Megan} className="rounded-3xl h-[30rem] w-[23rem] object-cover" />
          <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-900 bg-fixed opacity-0 transition duration-500 ease-in-out hover:opacity-50">
            <div className="-rotate-90 text-lg absolute mt-[3rem]">
            <span className="font-bold">Megan</span>
            </div>
            <div className="absolute mt-[23rem] ml-[20rem] text-[1.5rem] ">
            <ul>
              <li className=""><FiGithub className="h-[1.3rem] w-[1.3rem] rounded-lg bg-gradient-to-br from-[#1A1D35] to-[#353D70]"/></li>
              <li className=""><FaFacebookF  className="h-[1.3rem] w-[1.3rem] rounded-lg bg-gradient-to-br from-[#1A1D35] to-[#353D70] my-3"/></li>
              <li className=""><FaLinkedinIn  className="h-[1.3rem] w-[1.3rem] rounded-lg bg-gradient-to-br from-[#1A1D35] to-[#353D70]"/></li>
            </ul>
            </div>
          </div>
        </div>
        <div className="relative rounded-3xl overflow-hidden bg-cover bg-no-repeat ">
          <img src={Pranish} className="rounded-3xl h-[30rem] w-[23rem] object-cover" />
          <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-900 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50">
            <div className="-rotate-90 text-lg absolute mt-[3rem]">
            <span className="font-bold">Pranish</span>
            </div>
            <div className="absolute mt-[23rem] ml-[20rem] text-[1.5rem] ">
            <ul>
              <li className=""><FiGithub className="h-[1.3rem] w-[1.3rem] rounded-lg bg-gradient-to-br from-[#1A1D35] to-[#353D70]"/></li>
              <li className=""><FaFacebookF  className="h-[1.3rem] w-[1.3rem] rounded-lg bg-gradient-to-br from-[#1A1D35] to-[#353D70] my-3"/></li>
              <li className=""><FaLinkedinIn  className="h-[1.3rem] w-[1.3rem] rounded-lg bg-gradient-to-br from-[#1A1D35] to-[#353D70]"/></li>
            </ul>
            </div>
          </div>
        </div>


        </div>
      </div>
  );
};

export default Team;
