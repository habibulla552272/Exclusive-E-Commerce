import React from 'react'
import Remut from '../home/H-img/remut.png'
import { IoHeartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";


const Flash = () => {
    return (
        <section className='container mx-auto  py-10 mt-16'>
            <div className="items-center">
                <div className="flex text-red-500 gap-3">
                    <p className=' font-bold w-3 h-8 bg-red-500 rounded-sm'>.</p>
                    <p>Today's</p>
                </div>

                <div className="flex mt-4 gap-16 items-center">
                    <div className="">
                        <h2 className='font-bold text-3xl '>Flash Sales</h2>
                    </div>
                    <div className="flex gap-4">
                        <p> <span className='text-[12px] '>Days</span>  <br /> <span className='font-bold text-3xl '>03 <span className='pl-2 text-red-500 text-xl '>:</span></span> </p>
                        <p> <span className='text-[12px] '>Hours</span>  <br /> <span className='font-bold text-3xl '>23 <span className='pl-2 text-red-500 text-xl '>:</span></span> </p>
                        <p> <span className='text-[12px] '>Minutes</span>  <br /> <span className='font-bold text-3xl '>19 <span className='pl-2 text-red-500 text-xl '>:</span></span> </p>
                        <p> <span className='text-[12px] '>secounds</span>  <br /> <span className='font-bold text-3xl '>56 <span className='pl-2 text-red-500 text-xl '>:</span></span> </p>

                    </div>

                </div>
            </div>

            <div className="mt-10">
                <div className=" w-[250px] ">
                    <div className="bg-[#F5F5F5] p-4 rounded-md">
                        <p className='border w-[50px] bg-red-500 text-white rounded-sm ml-2'>-40%</p>
                        <img className='w-[70%] ml-5 relative top-10 ' src={Remut} alt="" />

                        <div className="ml-46 relative bottom-40 flex flex-col gap-3 ">
                        <p className='text-[20px]  p-1 font-bold bg-white rounded-full '><IoHeartOutline  className='   ' /></p>
                        <p className='text-[20px]  p-1 font-bold bg-white rounded-full  '><IoEyeOutline  className='   ' /></p>
                        </div>
                    </div>
                    <h4 className='mt-4 font-bold'>HAVIT HV-G92 Gamepad</h4>
                    <p className='mt-2 font-bold'><span className='text-red-500'>$120</span>  <span className='text-[#8a8a91] ml-4 '>$160</span> </p>
                    <p className=' font-bold items-center flex mt-2 '><span className='text-2xl flex text-yellow-400'><IoMdStar /> <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></span> <span className='text-[#8a8a91] ml-5'>(88) </span> </p>
                </div>
            </div>
        </section>
    )
}

export default Flash
