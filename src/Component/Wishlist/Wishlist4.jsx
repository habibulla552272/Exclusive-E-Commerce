import React, { useContext } from 'react'

import { IoCartOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { ApiData } from '../Contex/ContextApi';
import { useSelector } from 'react-redux';

const Wishlist4 = () => {
    const mainApiData = useContext(ApiData)
    // add to wish item....................................
    let wishData = useSelector((state)=> state.wishSlice.wishItemSlice
)
    console.log(wishData);
    
   
    
    // let filterWish = mainApi.filter((item) => item.id >= 40 && item.id <= 43)
   

    return (
        <section className='container mx-auto mt-14'>
            <div className="flex justify-between">
                <p>Wishlist (4) </p>
                <button className='border py-2 px-5 rounded-sm '>Move All To Bag</button>
            </div>
           <div className="flex flex-wrap justify-between">
                {wishData.map((item) => (

                    <div className=" w-[230px]  mt-7 relative overflow-hidden group  ">
                        <div className="  p-3 rounded-md border-2 ">

                            <div className="flex justify-between items-center  ">
                                <p className='bg-red-500 text-white w-[50px] px-2 rounded-sm absolute -left-1/2 group-hover:left-2 top-2 duration-700 ease-in-out '>-35% </p>
                                <p className='text-xl absolute left-[180px] mt-3'><RiDeleteBinLine /></p>
                            </div>
                            <img className='w-[200px] h-[200px] ' src={item.image} alt="" />
                        </div>

                        <button className='flex gap-2 items-center  w-full justify-center py-2 bg-black text-white rounded-b-sm'><span className='text-xl'><IoCartOutline /> </span> Add to cart</button>

                        <p className='font-bold mt-3 truncate'>{item.title} </p>
                        <p className='text-red-500 font-bold flex gap-4 mt-1'>$960 <span className='line-through text-[#11111755] '>$1160</span></p>
                    </div>
                ))

                }
            </div>  

        </section>


    )
}

export default Wishlist4
