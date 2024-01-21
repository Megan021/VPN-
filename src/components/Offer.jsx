import '../app.css';
import phone from '../images/phone.jpg';

export default function Offer() {
  return (
    <>
      <div className='w-[84%] mx-auto  '>
        <div className='flex  gap-14 justify-center'>
        <div className='w-[55%]'>
          <h1 className='text-[1.5rem] from-[#576099] to-[#8994E6] bg-gradient-to-tr bg-clip-text text-transparent font-bold '>
            What We Offer you
          </h1>
          <p className='text-[2.25rem] leading-10 font-bold py-[1.3rem]'>Your RoadMap To Freedom<br /> Information On The Internet</p>
          <p className='text-[#9397AD] pb-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
          </p>
          <div className='flex gap-[5rem]'>
            <div className='py-[1.3rem]'>
              <div className="relative w-[8rem] h-[8rem]">
                <div className="absolute inset-0 border-full border-gray-300 border-solid rounded-full"></div>
                <div className="absolute inset-0 border-b-4 border-r-4 border-[#666FB0] border-solid rounded-full border-full transform rotate-0">
                  <span className=' text-[1.75rem] p-10  absolute mt-[0.25rem]'>75%</span>
                </div>
              </div>
              <h1 className='font-bold text-[1.5rem] py-[1rem]'>VPN For All Devices</h1>
              <p className='text-[#9397AD]'>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.</p>
            </div>
            <div className='py-[1.3rem]'>
            <div className="relative w-[8rem] h-[8rem]">
                <div className="absolute inset-0 border-full border-gray-300 border-solid rounded-full"></div>
                <div className="absolute inset-0 border-b-4 border-r-4 border-[#666FB0] border-solid rounded-full border-full transform rotate-0">
                  <span className=' text-[1.75rem] p-10  absolute mt-[0.25rem]'>75%</span>
                </div>
              </div>
              <h1 className='font-bold text-[1.5rem] py-[1rem]'>Block Malicious</h1>
              <p className='text-[#9397AD]'>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.</p>
            </div>
          </div>
          <button className=' mt-[1rem] from-[#1C1F3A] to-[#353C71] bg-gradient-to-br font-bold w-[9rem] h-[3rem] rounded-lg'>Get Free Trial</button>
        </div>
        
        <div>
          <img src={phone} className='rounded-3xl w-[64rem] h-[35rem] -mr-[15rem] object-cover' alt="Phone" />
        </div>
        </div>
        </div>
     
    </>
  );
}
