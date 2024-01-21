import '../app.css';
import Location from '../images/Location.jpg'

export default function FAQ() {
    return (
        <>
            <div className='w-[84%] mx-auto mt-[6rem] h-[40rem]'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-[1.5rem] from-[#576099] to-[#8994E6] bg-gradient-to-tr bg-clip-text text-transparent font-bold '>
                            Client Questions</h1>
                            <h2 className='text-[2.25rem] py-[1.5rem] font-bold '>Related Questions</h2>
                            <p className='text-[#9397AD] pb-[1.5rem]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium<br/> doloremque laudantium totam rem aperiam eaque ipsa quae illo.</p>
                            <div>
                                <div className='flex w-[100%] from-[#212543] to-[#16192D] bg-gradient-to-br p-[1.5rem] rounded-[0.75rem] font-bold h-[4rem]'>
                                   <div className='mr-[2rem]'>
                                    + 
                                     </div> 
                                    <div>  What are the admission requirements? 

                                    </div>
                                    
                                    </div>
                                    <br/>
                                    <div className=' flex w-[100%] from-[#212543] to-[#16192D] bg-gradient-to-br p-[1.5rem] rounded-[0.75rem] font-bold  h-[4rem]'>
                                   <div className='mr-[2rem]'>
                                    + 
                                     </div> 
                                    <div>  How is the transfer process to take the test?

                                    </div>
                                    
                                    </div>
                                    <br />

                                    <div className='flex w-[100%] from-[#212543] to-[#16192D] bg-gradient-to-br p-[1.5rem] rounded-[0.75rem] font-bold  h-[4rem]'>
                                   <div className='mr-[2rem]'>
                                    + 
                                     </div> 
                                    <div> How do I have to submit the required documents? 

                                    </div>
                                    
                                    </div>
                            </div>

                    </div>
                    <div className=' from-[#212543] to-[#16192D] bg-gradient-to-b rounded-full w-[33rem] h-[33rem] '>
                        <img  className='h-[35rem] z-50 pb-[2rem]' src={Location}/>
                    </div>
                </div>
            </div>
        </>
    )
}3