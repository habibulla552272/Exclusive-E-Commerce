import React from 'react'
import { Link } from 'react-router-dom'
import image1 from './DetailsImage/Frame 895.png' 
import image2 from './DetailsImage/Frame 896.png'  
import image3 from './DetailsImage/Frame 894.png'  

import { FaStar } from "react-icons/fa6";

import { FaRegCircleDot } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { GrDeliver } from "react-icons/gr";
import { LuRefreshCcw } from "react-icons/lu";



const DetailSection1 = () => {
  return (
    <section>
        <div className='container mx-auto'>
        <div className='py-10'>
               <h3>
               <Link className='hover:bg-gray-200 hover:border-b-2 rounded-2xl py-2 px-2 border-b-blue-400'  to='/'>Home</Link>
               <span className='px-3'>/</span>
               <Link className='hover:bg-gray-200 hover:border-b-2 rounded-2xl py-2 px-2 border-b-blue-400' to='/card'>Cart </Link>

               <span className='px-3'>/</span>
               <Link className='hover:bg-gray-200 hover:border-b-2 rounded-2xl py-2 px-2 border-b-blue-400'>Havic HV G-92 Gamepad</Link>
               </h3>
            </div>

            {/* middle div  */}
            <div className='md:flex md:gap-5'>
                <div className='flex gap-3'>
                    <div className='flex flex-col gap-2'>
                        <img  src={image1} alt='havic-hv-g-92-gamepad' className=''/> 
                        <img src={image2} alt='havic-hv-g-92-gamepad' className=''/> 

                    </div>
                    <div>
                        <img src={image3} alt="img" />
                    </div>
                </div>
                <div>

                    <h2 className='text-2xl font-extrabold font-mono '>sub tetails</h2>
                    <div className='flex  items-center py-2'>
                        <div className='flex gap-1 text-yellow-200'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                        </div>
                        <p className='px-2'> (Review 150)</p>
                        <p className='text-green-400 border-l-2 px-4'>In Stock</p>
                    </div>
                    <div className='border-b-2 pb-3 py-2 border-gray-200'>
                        <p>$49</p>
                        <p className='py-2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eligendi iusto illum.
                        </p>
                    </div>
                    <div className='flex items-center gap-3 py-2'>
                        <p className='pr-1'>Colours:</p>
                        <div className='flex gap-1'>

                        <p className='text-green-300'><FaRegCircleDot />
                        </p>
                        <p className='text-orange-400'><FaCircle /></p>
                        </div>

                    </div>
                    <div className='flex gap-2 py-2' >
                        <h2>Size:</h2>
                        <div className='flex gap-2'>
                            <p className=' border-2 px-1 py-1 w-[38px] h-[35px] rounded-md text-center hover:bg-green-300 '>S</p>
                            <p className=' border-2 px-1 py-1 w-[38px] h-[35px] rounded-md text-center hover:bg-green-300 '>M</p>

                            <p className=' border-2 px-1 py-1 w-[38px] h-[35px] rounded-md text-center hover:bg-green-300 '>L</p>
                            <p className=' border-2 px-1 py-1 w-[38px] h-[35px] rounded-md text-center hover:bg-green-300 '>XL</p>
                            <p className=' border-2 px-1 py-1 w-[38px] h-[35px] rounded-md text-center hover:bg-green-300  '>2XL</p>



                        </div> 
                    </div>
                    <div className='flex justify-between items-center py-3'>
                        <div className='flex justify-between items-center border-2 border-gray-200 w-[38%]'>
                            <p className='w-[30%] text-center cursor-pointer'>-</p>
                            <p  className='border-l-2 border-r-2 border-gray-200 w-[40%] text-center cursor-pointer'>02</p>
                            <p className='w-[30%] text-center cursor-pointer'>+</p>

                        </div>
                        <div className='w-[39%] flex justify-center items-center rounded-xl bg-rose-500 hover:bg-green-300'>
                            <button>Buy Now</button>

                        </div>
                        <div className='w-[10%] text-2xl border-2 border-gray-200 hover:bg-green-300 flex justify-center items-center'>
                            <CiHeart />
                        </div>
                    </div>
                    <div className='border-2 py-3 pl-3 pr-4 border-gray-200'>
                        <div className='flex gap-3 items-center border-b-2 border-gray-200 pb-2'>
                            <p className='text-6xl'> < GrDeliver />


                            </p>
                            <div >
                            <h3 className='text-xl font-extrabold'>Free Delivery</h3>
                            <p className='border-b-2 border-gray-100'>Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <div className='flex gap-3 items-center '>
                        <p className='text-6xl'> < LuRefreshCcw />


                           </p>
                           <div >
                                  <h3 className='text-xl font-extrabold'>Retirn Delivery</h3>
                                     <p className="">Free 30 Days Delivery Returns. <Link>Details</Link></p>
                                       </div>

                        </div>
                    </div>
                </div>




            </div>

        </div>
    </section>
  )
}

export default DetailSection1
