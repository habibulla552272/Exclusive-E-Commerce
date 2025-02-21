import React, { useContext, useState } from 'react'
import { FaArrowLeft, FaEye } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { ApiData } from '../Contex/ContextApi';
import { CiHeart } from 'react-icons/ci';
import TestTanStack from '../TanStack/TestTanStack';
import { useQuery } from '@tanstack/react-query';
import { tanStackData } from '../TanStack/TanStackQuery';

const ExploreProduct = () => {

    const [viewall, setViewAll] = useState(false);
  const datas=useContext(ApiData)

  let filterData = datas.filter((item) => {
    return item.id <= 8;
  });

  const viewallData = () => {
    setViewAll(!viewall);
  };


//tanStack started here

 const {data}= useQuery({
    queryKey:['application'],
    queryFn: tanStackData,
  })

  const products = Array.isArray(data) ? data : data?.products || []
  console.log(products);
  
// tanStack End here 
// paginations are started here 
  const [currentpage,setcurrentpage]= useState(1)

  const lastpage= Math.ceil()

 

// pagination End Hrre 

  
  return (
  <section>

    <div className='container mx-auto px-2 md:px-0'>
    <div>
          <div className="flex gap-1 md:gap-2 items-center">
            <p className="w-4 h-8 bg-red-600 rounded-2xl"></p>
            <p >This Month</p>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-sl md:text-2xl font-sans font-semibold className='py-1'">
              Explore Our  Products
            </h2>
           <div className='flex gap-3'>
            <FaArrowLeft />
            <FaArrowRight />
            
           </div>
          </div>
    </div>
    <div>
      <div className="md:flex  justify-between  flex-wrap  h-96 overflow-y-scroll ">
                    { viewall ? datas.map((item, id) => {
                      return (
                        <div
                          key={id}
                          className="md:w-[24%]  w-[80%] mx-auto shadow-custom  my-3 group"
                        >
                          <div className=" relative overflow-hidden bg-gray-100   h-[220px] md:h-[260px]">
                            <img
                              className="h-[220px] md:h-[260px] md:w-full bg-gray-100 flex justify-center mx-auto "
                              src={item.image}
                              alt="image"
                            />
                            <div className=" absolute flex flex-col right-3 gap-3 -bottom-16 group-hover:bottom-24 duration-700  ease-in-out ">
                              <p className="text-2xl ">
                                <CiHeart />
                              </p>
      
                              <p className="text-2xl">
                                <FaEye />
                              </p>
                            </div>
                            <div className=' absolute w-full  text-center -bottom-14 group-hover:bottom-0 duration-700 ease-in-out rounded-2xl'>
                              <h4 className='bg-black text-white text-xs md:text-xl py-2 font-mono'>Add to Card</h4>
                            </div>
                          </div>
      
                          <div className="h-[165px] pt-8  bg-gray-200">
                            <p className=" max-h-[50px] overflow-hidden  font-sans  px-4">
                              {item.title}
                            </p>
                            <div className="flex items-center gap-2 md:gap-4 py-2 px-4 font-sans  font-semibold text-xl">
                              <p className="text-orange-400 ">
                                ${item.price - item.discount}
                              </p>
                              <p className="line-through text-gray-400 ">
                                {item.price}
                              </p>
                            </div>
                            <p className="text-xl font-semibold font-mono px-4 max-h-[25px] overflow-hidden ">
                              <span className="pr-1 text-orange-400">Model:</span>
                              {item.brand}
                            </p>
                          </div>
                        </div>
                      );
                    }): filterData.map((item, id) => {
                      return (
                        <div
                          key={id}
                          className="md:w-[24%]  w-[80%] mx-auto shadow-custom  my-3 group "
                        >
                          <div className=" relative overflow-hidden bg-gray-100   h-[220px] md:h-[260px]">
                            <img
                              className="h-[220px] md:h-[260px] md:w-full bg-gray-100 flex justify-center mx-auto "
                              src={item.image}
                              alt="image"
                            />
                            <div className=" absolute flex flex-col right-3 gap-3 -bottom-16 group-hover:bottom-24 duration-700  ease-in-out ">
                              <p className="text-2xl ">
                                <CiHeart />
                              </p>
      
                              <p className="text-2xl">
                                <FaEye />
                              </p>
                            </div>
                            <div className=' absolute w-full  text-center -bottom-14 group-hover:bottom-0 duration-700 ease-in-out rounded-2xl'>
                              <h4 className='bg-black text-white text-xs md:text-xl py-2 font-mono'>Add to Card</h4>
                            </div>
                          </div>
      
                          <div className="h-[165px] pt-8  bg-gray-200">
                            <p className=" max-h-[50px] overflow-hidden  font-sans  px-4">
                              {item.title}
                            </p>
                            <div className="flex items-center gap-2 md:gap-4 py-2 px-4 font-sans  font-semibold text-xl">
                              <p className="text-orange-400 ">
                                ${item.price - item.discount}
                              </p>
                              <p className="line-through text-gray-400 ">
                                {item.price}
                              </p>
                            </div>
                            <p className="text-xl font-semibold font-mono px-4 max-h-[25px] overflow-hidden ">
                              <span className="pr-1 text-orange-400">Model:</span>
                              {item.brand}
                            </p>
                          </div>
                        </div>
                      );
                    })   }
                  </div>

    </div>
    <div className=' flex justify-center'>
    <button
              onClick={viewallData}
              className="px-6 md:px-8  py-2 rounded-3xl bg-red-600 text-white hover:bg-black "
            >
              View All
            </button>
    </div>
    <TestTanStack />

    </div>
  </section>


  )
}

export default ExploreProduct
