import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Phone from '../assets/hero-ph.png'
import Logo from '../assets/home/A-Logo.png'
import Slider from "react-slick";



const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <section className='border-t md:px-0 px-2 '>
            <div className=' container mx-auto md:flex justify-between'>
                <div className="md:w-[29%] md:border-r pt-5">
                    <ul className='flex flex-col gap-4'>
                        <li>
                            <select className='items-center' name="Wom" id="Wom">
                                <option value="woman">Woman’s Fashion</option>
                                <option value="woman">Pent Items</option>
                                <option value="woman">Lushon Items</option>
                            </select>

                        </li>
                        <li>
                            <select className='items-center' name="mens" id="mens">
                                <option value="woman">Men’s Fashion</option>
                                <option value="woman">Pent Items</option>
                                <option value="woman">Shart Items</option>
                            </select>
                        </li>
                        <li>Electronics</li>
                        <li>Home & Lifestyle</li>
                        <li>Medicine</li>
                        <li>Sports & Outdoor</li>
                        <li>Baby’s & Toys</li>
                        <li>Groceries & Pets</li>
                        <li>Health & Beauty</li>
                    </ul>
                </div>


                <Slider {...settings} className='md:w-[68%] '>
                    <div className=' '>
                        <div className=" mt-5 bg-black text-white pt-4  pl-8 flex items-center">
                            <div className=" md:w-[30%] ">
                                <div className="mt-14 flex items-center gap-5">
                                    <img src={Logo} alt="" />
                                    <p className=' '>iPhone 14 Series</p>
                                </div>

                                <h1 className='md:text-4xl text-3xl font-bold md:mt-5 mt-2'>Up to 10% <br /><span className='py-4 '>off voucher</span></h1>
                                <div className="flex gap-2 items-center md:mt-5 mt-2">
                                    <button className='hover:border-b pb-1'>Shop Now</button>
                                    <p><FaArrowRight /></p>
                                </div>
                            </div>

                            <div className="md:w-[70%]">
                                <img className='' src={Phone} alt="" />
                            </div>

                        </div>
                    </div>

                    <div className=' '>
                        <div className=" mt-5 bg-black text-white pt-4  pl-8 flex items-center">
                            <div className=" md:w-[30%] ">
                                <div className="mt-14 flex items-center gap-5">
                                    <img src={Logo} alt="" />
                                    <p className=' '>iPhone 14 Series</p>
                                </div>

                                <h1 className='md:text-4xl text-3xl font-bold md:mt-5 mt-2'>Up to 10% <br /><span className='py-4 '>off voucher</span></h1>
                                <div className="flex gap-2 items-center md:mt-5 mt-2">
                                    <button className='hover:border-b pb-1'>Shop Now</button>
                                    <p><FaArrowRight /></p>
                                </div>
                            </div>

                            <div className="md:w-[70%]">
                                <img className='' src={Phone} alt="" />
                            </div>

                        </div>
                    </div>


                    <div className=' '>
                        <div className=" mt-5 bg-black text-white pt-4  pl-8 flex items-center">
                            <div className=" md:w-[30%] ">
                                <div className="mt-14 flex items-center gap-5">
                                    <img src={Logo} alt="" />
                                    <p className=' '>iPhone 14 Series</p>
                                </div>

                                <h1 className='md:text-4xl text-3xl font-bold md:mt-5 mt-2'>Up to 10% <br /><span className='py-4 '>off voucher</span></h1>
                                <div className="flex gap-2 items-center md:mt-5 mt-2">
                                    <button className='hover:border-b pb-1'>Shop Now</button>
                                    <p><FaArrowRight /></p>
                                </div>
                            </div>

                            <div className="md:w-[70%]">
                                <img className='' src={Phone} alt="" />
                            </div>

                        </div>
                    </div>


                    

                    
                    

                                                     

                </Slider>


            </div>
        </section>
    )
}

export default Hero
