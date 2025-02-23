import React from 'react'
import Spk from './H-img/Frame.png'

const Music = () => {
    return (
        <>
            <div className="container mx-auto bg-black md:mt-20 mt-10 md:flex md:flex-row flex flex-col-reverse p-10 text-white">
                <div className="md:w-[50%]  ">

                    <h6 className='text-green-500'>Catagories</h6>
                    <h2 className='md:text-5xl text-3xl font-bold mt-7'>Enhance Your <br /> Music Experience</h2>
                    <div className="flex md:gap-5 gap-2 md:mt-10 mt-5 text-black">
                        <div className="border rounded-full p-2 md:w-[70px] w-[60px] h-[60px] md:h-[70px] bg-white text-center ">
                            <h4 className='md:text-xl '>23</h4>
                            <p className='text-[12px] '>Hours</p>
                        </div>
                        <div className="border rounded-full p-2 md:w-[70px] w-[60px] h-[60px] md:h-[70px] bg-white text-center ">
                            <h4 className='md:text-xl'>05</h4>
                            <p className='text-[12px] '>Days</p>
                        </div>
                        <div className="border rounded-full p-2 md:w-[70px] w-[60px] h-[60px] md:h-[70px] bg-white text-center ">
                            <h4 className='md:text-xl'>59</h4>
                            <p className='text-[12px] '>Minutes</p>
                        </div>
                        <div className="border rounded-full p-2 md:w-[70px] w-[60px] h-[60px] md:h-[70px] bg-white text-center ">
                            <h4 className='md:text-xl'>35</h4>
                            <p className='text-[12px] '>Seconds</p>
                        </div>
                    </div>
                    <button className='py-3 px-12 bg-[#00FF66] md:mt-10 mt-5 rounded-sm  '>Buy Now!</button>
                </div>
                <div className="md:w-[50%] ">
                    <img src={Spk} alt="" />
                </div>

            </div>
        </>
    )
}

export default Music
