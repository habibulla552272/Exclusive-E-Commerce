import React, { useContext, useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import Phone from '../assets/hero-ph.png'
import Logo from '../assets/home/A-Logo.png'
import Slider from "react-slick";
import "./home/Hero.css"
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { ApiData } from './Contex/ContextApi';
import { RiShoppingCartLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { TbCategoryPlus } from "react-icons/tb";
import { useDispatch } from 'react-redux';
import { addToWish } from '../store/WishSlice';


const Hero = () => {

    const data = useContext(ApiData)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    // Category items style.......................//
    let [category, setCategory] = useState(false)
    const hendelCategoryItems = () => {
        setCategory(!category)

    }
   
   
    // Category Product show & category items filter. ........................
    let [categoryProduct, setCategoryProduct] = useState([])
    const hendelWomansItem = (index) => {
        let filterProduct =data.filter((item) => item.category == index )
        setCategoryProduct(filterProduct)
    };
    
    
    // Category items show .................................
   let [cat, setCat] = useState([])
   useEffect(() => {
    setCat([...new Set(data.map((item) => item.category)) ])

   }, [data]) 
   
//    Add to wish..................
    let dispatch = useDispatch()

    const hendeleAddToWish = (item) => {
        dispatch(addToWish({...item,Qont:1}))
    }


    return (
        <section className='border-t md:px-0 px-2 '>
            <div className=' container mx-auto md:flex justify-between md:flex-row flex flex-col'>

                <div className="md:w-[29%] md:border-r pt-5  ">

                    <div onClick={hendelCategoryItems} className="flex gap-3 items-center cursor-pointer  ">
                        <p className=''><span className='text-2xl font-bold items-center'>#</span> Category Items  </p>
                        <p className='text-2xl mt-2'>{category === true ? <IoMdArrowDropdown /> : <IoMdArrowDropright />} </p>

                    </div>


                    <ul className={`flex flex-col gap-4 mt-4 md:h-[280px] h-[100px] overflow-y-auto ${category ? '' : 'top-[100px] -left-[200px] absolute '}`}>
                        {cat.map((item) => (
                            <li onClick={() => hendelWomansItem(item) } className='cursor-pointer' >{item} </li>
                        ))}
                    </ul>

                </div>


                {categoryProduct.length == 0 ? 

                    <div className="md:w-[68%] ">

                        <Slider {...settings}>
                            <div>
                                <div className=' '>
                                    <div className="md:pb-0 pb-5 mt-5 bg-black text-white pt-4  pl-8 flex items-center">
                                        <div className=" md:w-[30%] ">
                                            <div className="mt-14 flex items-center gap-5">
                                                <img src={Logo} alt="" />
                                                <p className=' '>iPhone 14 Series</p>
                                            </div>

                                            <h1 className='md:text-4xl text-3xl font-bold md:mt-5 mt-2'>Up to 10% <br /><span className='py-4 '>off voucher</span></h1>
                                            <Link to='shop' >
                                                <div className="flex gap-2 items-center md:mt-5 mt-2 cursor-pointer">
                                                    <button className='hover:border-b pb-1 cursor-pointer'>Shop Now</button>
                                                    <p><FaArrowRight /></p>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className="md:w-[70%]">
                                            <img className='' src={Phone} alt="" />
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className=' '>
                                    <div className="md:pb-0 pb-5 mt-5 bg-black text-white pt-4  pl-8 flex items-center">
                                        <div className=" md:w-[30%] ">
                                            <div className="mt-14 flex items-center gap-5">
                                                <img src={Logo} alt="" />
                                                <p className=' '>iPhone 14 Series</p>
                                            </div>

                                            <h1 className='md:text-4xl text-3xl font-bold md:mt-5 mt-2'>Up to 10% <br /><span className='py-4 '>off voucher</span></h1>
                                            <div className="flex gap-2 items-center md:mt-5 mt-2 cursor-pointer">
                                                <button className='hover:border-b pb-1 cursor-pointer'>Shop Now</button>
                                                <p><FaArrowRight /></p>
                                            </div>
                                        </div>

                                        <div className="md:w-[70%]">
                                            <img className='' src={Phone} alt="" />
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className=' '>
                                    <div className="md:pb-0 pb-5 mt-5 bg-black text-white pt-4  pl-8 flex items-center">
                                        <div className=" md:w-[30%] ">
                                            <div className="mt-14 flex items-center gap-5">
                                                <img src={Logo} alt="" />
                                                <p className=' '>iPhone 14 Series</p>
                                            </div>

                                            <h1 className='md:text-4xl text-3xl font-bold md:mt-5 mt-2'>Up to 10% <br /><span className='py-4 '>off voucher</span></h1>
                                            <div className="flex gap-2 items-center md:mt-5 mt-2 cursor-pointer">
                                                <button className='hover:border-b pb-1 cursor-pointer'>Shop Now</button>
                                                <p><FaArrowRight /></p>
                                            </div>
                                        </div>

                                        <div className="md:w-[70%]">
                                            <img className='' src={Phone} alt="" />
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                

                    :

                    
                        <div className="md:w-[140%]  md:px-4 px-2 py-2">

                            <div className="flex gap-2 items-center">
                                <h3 className='font-bold text-2xl text-red-500'>Category By Product</h3>
                                <p className='text-2xl text-green-600'><TbCategoryPlus /></p>
                               
                            </div>
                            <div className="overflow-y-scroll h-[400px] flex flex-wrap md:col-span-4 col-span-2 md:gap-5 gap-2 mt-4 ">

                                {categoryProduct.map(item => {
                                    return (
                                        <div className=" border rounded-t-md md:w-[230px] w-[150px] py-4 relative  shadow-xl group md:mt-0 mt-4">
                                            
                                            <div className="ml-[86%] flex flex-col  absolute mt-3 gap-5 md:text-xl ">
                                                <p onClick={ ()=> hendeleAddToWish(item)}  className='cursor-pointer group-hover:text-green-500 duration-500'><FaRegHeart /></p>
                                                <p className='cursor-pointer '><RiShoppingCartLine /></p>
                                            </div>
                                            <img className='w-full ' src={item.image} alt="" />

                                            <div className="border-t-2 px-2 pt-1 ">
                                            <p className='truncate font-bold group-hover:text-red-500 duration-700'>{item.title} </p>
                                            <p ><span className='text-red-500 font-bold'> Price :</span> ${item.price} </p>
                                            <p className='truncate'> <span className=' font-bold '>Model : </span> {item.model} </p>
                                            </div>


                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                      

                   
                }

            </div>

        </section>

    )
}

export default Hero
