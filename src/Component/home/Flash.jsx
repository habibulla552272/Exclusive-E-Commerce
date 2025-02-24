import React, { useContext } from 'react'
// import Remut from '../home/H-img/remut.png'
import { IoHeartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import { ApiData } from '../Contex/ContextApi';
import Slider from "react-slick";
import  "./Flash.css"



const Flash = () => {
    const data = useContext(ApiData);
    let filterFlash = data.filter((item) => item.id >= 92 && item.id <= 120)


    var settings = {
        dots: false,
        infinite:true ,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className='container mx-auto  pb-16  mt-16 md:px-0 px-2 '>
            <div className="items-center">
                <div className="flex text-red-500 gap-3 items-center">
                    <p className=' font-bold w-3 h-8 bg-red-500 rounded-sm'>.</p>
                    <p >Today's</p>
                </div>

                <div className="flex mt-4 md:gap-16 gap-5 items-center">
                    <div className="">
                        <h2 className='font-bold md:text-3xl text-2xl '>Flash Sales</h2>
                    </div>
                    <div className="flex md:gap-4">
                        <p> <span className='text-[12px] '>Days</span>  <br /> <span className='font-bold md:text-3xl text-2xl '>03 <span className='md:pl-2 pr-1 text-red-500 text-xl '>:</span></span> </p>
                        <p> <span className='text-[12px] '>Hours</span>  <br /> <span className='font-bold md:text-3xl text-2xl '>23 <span className='md:pl-2 pr-1 text-red-500 text-xl '>:</span></span> </p>
                        <p> <span className='text-[12px] '>Minutes,</span>  <br /> <span className='font-bold md:text-3xl text-2xl '>19 <span className='md:pl-2 pr-1 text-red-500 text-xl '>:</span></span> </p>
                        <p> <span className='text-[12px] '>secounds</span>  <br /> <span className='font-bold md:text-3xl text-2xl '>56 </span> </p>

                    </div>

                </div>
            </div>



            <div className=" ">

                <Slider {...settings} className=''>

                    {filterFlash.map(item => {
                        return (

                            <div className="">

                            <div className="mt-10  md:w-[250px] w-full  group  px-2 ">
                                <div className="bg-[#Ffff] p-4 rounded-md shadow-2xl  h-[300px] text-center relative overflow-hidden ">
                                    <p className='border w-[50px] bg-red-500 text-white rounded-sm ml-2'>-40%</p>
                                    <img className='w-[70%] ml-5 relative md:top-10 ' src={item.image} alt="" />

                                    <div className="md:ml-46 ml-[250px] relative md:bottom-40 bottom-[200px] flex flex-col gap-3 ">
                                        <p className='text-[23px] cursor-pointer    '><IoHeartOutline className='   ' /></p>
                                        <p className='text-[23px] cursor-pointer    '><IoEyeOutline className='   ' /></p>
                                    </div>

                                    <button className='bg-[#10f577ef] text-white  px-5 py-2 cursor-pointer absolute -bottom-16  left-1/2 -translate-x-1/2  duration-700 ease-in-out group-hover:bottom-0 w-full '>Add To Cart</button>
                                </div>
                                <h4 className='mt-4 font-bold truncate '>{item.title}</h4>
                                <p className='mt-2 font-bold'><span className='text-red-500'>${item.price} </span>  <span className='text-[#8a8a91] ml-4 line-through'>344 </span> </p>
                                <p className=' font-bold items-center flex mt-2 '><span className='text-2xl flex text-yellow-400'><IoMdStar /> <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></span> <span className='text-[#8a8a91] ml-5'>(88) </span> </p>
                            </div>
                            </div>

                        )
                    })}

                </Slider>
                <div className="text-center mt-10">

                <button className='bg-[#DB4444] text-white py-2 px-5 rounded-xl hover:bg-black'>View All Products</button>
                </div>


            </div>



        </section>
    )
}

export default Flash
