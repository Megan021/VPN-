import vpn from '../images/vpn.jpg'
import '../app.css'
export default function Welcome() {
    return (
        <>
   
            <div className="flex bg-[#15172A] p-[9rem] justify-center">
                <div  ><img  src={vpn} className='mt-[4rem]'></img>
                </div>
                <div className='ml-[5rem] w-[42%] '>
                    <h1 className='from-[#576099]  to-[#8994E6] bg-gradient-to-tr bg-clip-text text-transparent text-[1.5rem] pb-[1.5rem] font-bold'>Welcome to Netric</h1>
                    <h2 className='text-[38px] font-semibold pb-[1.5rem] leading-[2.7rem] w-[104%]'> Worlds Best VPN Services <br/> That Provide Own DNS System </h2>
                    <p className='text-[#7E8197]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  <div className='leading-3'>
                   <div className='flex justify-between py-[1.1rem] text-[1.25rem] mt-[1rem] font-semibold'>
                    <div className=''>
                        <p>Fast VPN</p>
                   </div>
                   <div>
                    <p>95%</p>
                    </div> </div>
                    <div className='flex'>
                    <div className='w-[47rem] h-[0.2rem] bg-gradient-to-r from-[#383F75]  to-[#97A3FD]'>
                    </div>
                    <div className='w-[3rem] h-[0.2rem] bg-[#232746] '>

                    </div>
                    </div>

                    <div className='flex justify-between py-[1.1rem] text-[1.25rem] mt-[1rem] font-semibold'>
                    <div className=''>
                        <p>Malware Detection</p>
                   </div>
                   <div>
                    <p>78%</p>
                    </div> </div>
                    <div className='flex'>
                    <div className='w-[35rem] h-[0.2rem] bg-gradient-to-r from-[#383F75]  to-[#97A3FD]'>
                    </div>
                    <div className='w-[15rem] h-[0.2rem] bg-[#232746]'></div>
                    </div>

                    <div className='flex justify-between py-[1.1rem] text-[1.25rem] mt-[1rem] font-semibold'>
                    <div className=''>
                        <p>Total Security</p>
                   </div>
                   <div>
                    <p>90%</p>
                    </div> </div>
                    <div className='flex'>
                    <div className='w-[45rem] h-[0.2rem] bg-gradient-to-r from-[#383F75]  to-[#97A3FD]'>
                    </div>
                    <div className='w-[05rem] h-[0.2rem] bg-[#232746]'></div>
                    </div>

                    <div className='flex justify-between py-[1.1rem] text-[1.25rem] mt-[1rem] font-semibold'>
                    <div className=''>
                        <p>Absolute Privacy</p>
                   </div>
                   <div>
                    <p>85%</p>
                    </div> </div>
                    <div className='flex'>
                    <div className='w-[40rem] h-[0.2rem] bg-gradient-to-r from-[#383F75]  to-[#97A3FD]'>
                    </div>
                    <div className='w-[10rem] h-[0.2rem] bg-[#232746]'></div>
                    </div>
                    </div>

                </div>
            </div>
        </>
    )
}