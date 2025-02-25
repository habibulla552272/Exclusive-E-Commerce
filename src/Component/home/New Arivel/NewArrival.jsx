import React from 'react'
import image1 from './newArival Image/Image1.png' 
import image2 from './newArival Image/Image2.png' 
import image3 from './newArival Image/Image3.png' 
import image4 from './newArival Image/Image4.png' 



import { Link } from 'react-router-dom'

const NewArrival = () => {
  return (
   <section>
    <div className='container mx-auto'>
        <div>
            <div  className='my-10'>
                <div className='flex gap-3 items-center'>
                <p className='w-3 h-6 bg-rose-500 rounded-xl'></p>
                <p className='text-rose-500'>Featured</p>

                </div>
                <h2 className='font-extralight text-3xl '>New Arrival</h2>
            </div>
            <div className='md:flex md:gap-6'>
                {/* div1 */}
                <div className='bg-black relative text-white'>
                    <div>
                         <img src={image1} alt="" />
                    </div>
                    <div className='absolute bottom-10 left-5 '>
                        <h2 className='text-2xl'>PlayStation </h2>
                        <p className='text-sm  font-thin py-3'>Black and white Version of the PS5 <br/> Comming out on sale.</p>
                        <button><Link className='border-b-[1px] border-b-white hover:text-green-400'> Shop Now</Link></button>
                    </div>
                    

                </div>
                {/* div 2 */}
                <div className='flex flex-col gap-6 mt-4 md:mt-0'>
                    {/* div 2 1 */}
                    <div className='relative bg-black text-white'>
                        <div>
                            <img src={image2} alt="Image2" />

                        </div>
                        <div className=' absolute left-5 bottom-10'>
                            <h2 className='text-2xl font-bold'>Women&apos;s Collections</h2>
                            <p className='text-sm font-thin py-3'>Featured woman collections that <br /> five you another vibe.</p>
                            <button className='hover:text-green-400'><Link className='border-b-[1px] border-white '>Shop Now</Link></button>

                        </div>

                    </div>

                    {/* div 2 2 */}
                    <div className='flex gap-6'>
                        <div className=' relative bg-black text-white w-[46%] mx-auto'>
                            <div>
                                <img src={image3} alt="" />
                            </div>
                            <div className=' absolute bottom-5 left-4'>
                                <h2 className='text-2xl font-bold'>Speakers</h2>
                                <p className='text-sm font-thin py-1'>Amazon wireless speakers</p>
                                <button><Link className='border-b-[1px] hover:text-green-400'>Shop Now</Link></button>

                            </div>

                        </div>
                        <div className=' bg-black relative text-white w-[46%] mx-auto'>
                            <div>
                                <img src={image4} alt="" />
                            </div>
                            <div className=' absolute left-5 bottom-5'>
                                <h2 className='text-2xl font-bold'>Perfume</h2>
                                <p className='text-[18px] font-thin py-1'>GUCCI INTENSE OUD EDP</p>
                                <button><Link className='border-b-[1px]'>Shop Now</Link></button>

                            </div>

                        </div>

                    </div>

                </div>

                


            </div>

        </div>




    </div>
   </section>
  )
}

export default NewArrival
