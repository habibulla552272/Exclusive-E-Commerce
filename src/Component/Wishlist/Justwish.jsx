import React, { useContext } from 'react'
import Just from './wish-img/bag.png'
import { IoHeartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import { ApiData } from '../Contex/ContextApi';

const Justwish = () => {

  const apiData = useContext(ApiData)

  let filterJustItem = apiData.filter((item) => item.id >= 99 && item.id <= 102 )
  


  return (
    <section className='container mx-auto py-10 mt-10'>

      <div className="flex justify-between">
        <h4 className='text-2xl font-bold'><span className='w-[100px] h-[60px] bg-red-500 text-red-500 p-1 rounded-md '>.</span> Just For You</h4>
        <button className='border py-2 px-8 font-bold rounded-sm '>See All</button>
      </div>
      <div className="flex justify-between">

    {filterJustItem.map((item) => (

      <div className="mt-10  md:w-[250px] w-full  group  px-2    ">
        <div className="bg-[#Ffff] rounded-md shadow-2xl  h-[300px] text-center relative overflow-hidden border pt-2">
          <p className='border w-[50px] bg-red-500 text-white rounded-sm ml-2 '>-40%</p>
          <img className='w-[70%] h-[60%] ml-5 relative md:top-10 border' src={item.image} alt="" />

          <div className="md:ml-46 ml-[250px] relative md:bottom-44 bottom-[200px] flex flex-col gap-3 ">
            <p  className='text-[23px] cursor-pointer    '><IoHeartOutline className='   ' /></p>
            <p className='text-[23px] cursor-pointer    '><IoEyeOutline className='   ' /></p>
          </div>

          <button className='bg-[#f510eaef] text-white  px-5 py-2 cursor-pointer w-full '>Add To Cart</button>
        </div>
        <h4 className='mt-4 font-bold truncate '>ASUS FHD Gaming Laptop</h4>
        <p className='mt-2 font-bold'><span className='text-red-500'>$222 </span>  <span className='text-[#8a8a91] ml-4 line-through'>344 </span> </p>
        <p className=' font-bold items-center flex mt-2 '><span className='text-2xl flex text-yellow-400'><IoMdStar /> <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></span> <span className='text-[#8a8a91] ml-5'>({item.id}) </span> </p>
      </div>
    )) }
      </div>

    </section>
  )
}

export default Justwish
