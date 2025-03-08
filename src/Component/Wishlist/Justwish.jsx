import React, { useContext, useState } from 'react'

import { IoHeartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import { ApiData } from '../Contex/ContextApi';
import { useDispatch } from 'react-redux';
import { addToCardItems } from '../../store/CardSlice';

const Justwish = () => {

  const apiData = useContext(ApiData)

  let filterJustItem = apiData.filter((item) => item.id >= 99 && item.id <= 102)

  // just view All Product..............................
  let [justAll, setJustAll] =useState(true)

  const hendeleJustAllProduct = ()=> {
    setJustAll(!justAll)
  }
  // Add To cart items.......................................
  const dispatch = useDispatch()
 

  return (
    <section className='container mx-auto py-10 mt-10 md:px-0 px-2'>

      <div className="flex justify-between">
        <h4 className='text-2xl font-bold'><span className='w-[100px] h-[60px] bg-red-500 text-red-500 p-1 rounded-md '>.</span> Just For You</h4>
        <button onClick={hendeleJustAllProduct} className='border py-2 px-8 font-bold rounded-sm '>See All</button>
      </div>
      {justAll ? (
      <div className="md:flex  justify-between">

        {filterJustItem.map((item) => (

          <div key={item.id} className="mt-10  md:w-[300px] w-full  group  px-2    ">
            <div className="bg-[#Ffff] rounded-md shadow-2xl  h-[300px] text-center relative overflow-hidden      border pt-2">
              <div className="flex justify-between px-2 ">
                <p className=' w-[50px] h-[30px] bg-red-500 text-white rounded-sm ml-2 '>-40%</p>

                <div className=" flex flex-col gap-3  ">
                  <p  className='text-[23px] cursor-pointer    '><IoHeartOutline  /></p>
                  <p className='text-[23px] cursor-pointer    '><IoEyeOutline /></p>
                </div>
              </div>
              <img className='w-[90%] h-[66%] ml-5  relative  ' src={item.image} alt="" />


              <button onClick={() => hendeleAddToCartItem(item) } className='bg-[#f510eaef] text-white  px-5 py-2 cursor-pointer w-full '>Add To Cart</button>
            </div>
            <h4 className='mt-4 font-bold truncate '>{item.title} </h4>
            <p className='mt-2 font-bold'><span className='text-red-500'>${item.price} </span>  <span className='text-[#8a8a91] ml-4 line-through'>344 </span> </p>
            <p className=' font-bold items-center flex mt-2 '><span className='text-2xl flex text-yellow-400'><IoMdStar /> <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></span> <span className='text-[#8a8a91] ml-5'>({item.id}) </span> </p>
          </div>
        ))}
      </div>
        
      ) 
      :
      (
      <div className="flex md:flex-wrap  justify-between overflow-y-auto h-[500px]  ">

      {apiData.map((item) => (

        <div key={item.id} className="mt-10  md:w-[250px] w-[200px] group px-2    ">
          <div className="bg-[#Ffff] rounded-md shadow-2xl  h-[300px] text-center relative overflow-hidden      border pt-2">
            <div className="flex justify-between px-2 ">
              <p className=' w-[50px] h-[30px] bg-red-500 text-white rounded-sm ml-2 '>-40%</p>

              <div className=" flex flex-col gap-3  ">
                <p className='text-[23px] cursor-pointer    '><IoHeartOutline  /></p>
                <p className='text-[23px] cursor-pointer    '><IoEyeOutline /></p>
              </div>
            </div>
            <img className='w-[90%] h-[66%] ml-5  relative  ' src={item.image} alt="" />


            <button className='bg-[#f510eaef] text-white  px-5 py-2 cursor-pointer w-full '>Add To Cart</button>
          </div>
          <h4 className='mt-4 font-bold truncate '>{item.title}</h4>
          <p className='mt-2 font-bold'><span className='text-red-500'>$222 </span>  <span className='text-[#8a8a91] ml-4 line-through'>344 </span> </p>
          <p className=' font-bold items-center flex mt-2 '><span className='text-2xl flex text-yellow-400'><IoMdStar /> <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></span> <span className='text-[#8a8a91] ml-5'>({item.id}) </span> </p>
        </div>
      ))}
      </div>
      )
    
    }

    </section>
  )
}

export default Justwish
