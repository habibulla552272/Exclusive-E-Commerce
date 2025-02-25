import React, { useContext, useState } from 'react'
import { FaArrowLeft, FaEye } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { ApiData } from '../Contex/ContextApi';
import { CiHeart } from 'react-icons/ci';
import TestTanStack from '../TanStack/TestTanStack';
import { useQuery } from '@tanstack/react-query';
import { tanStackData } from '../TanStack/TanStackQuery';
import { useDispatch } from 'react-redux';
import { addtoCard } from '../../store/CardSlice';

const ExploreProduct = () => {


  const datas=useContext(ApiData)

  let filterData = datas.filter((item) => {
    return item.id <= 8;
  });




//tanStack started here

 const {data}= useQuery({
    queryKey:['application'],
    queryFn: tanStackData,
  })

  const products = Array.isArray(data) ? data : data?.products || []
  
  
// tanStack End here 
// paginations are started here 
  const [currentpage,setcurrentpage]= useState(1)
  const [perpage,setperpage] = useState(8)

  const lastindex= currentpage * perpage;
  
  
  const firstindex = lastindex - perpage;
  

  const perpageProduct= products.slice(firstindex,lastindex)
 

  const handelLeft=()=>{
    if(currentpage > 1){
      setcurrentpage(currentpage-1);
    }
  }
  
  const handelRight =()=>{
    if(currentpage !== Math.ceil(products.length / perpage)){

      setcurrentpage(currentpage + 1)
     
      
      
    }
  }

// pagination End Hrre 

// add to card 

const dispatch= useDispatch()

const addtoCardHandel =(cardData)=>{
  dispatch(addtoCard({...cardData,Qont:1}))
}

// add to  card end



  
  return (
  <section>

    <div className='container mx-auto px-2 md:px-0'>
    <div className='my-2'>
          <div className="flex gap-1 md:gap-2 items-center my-3">
            <p className="w-4 h-8 bg-red-600 rounded-2xl"></p>
            <p >This Month</p>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-sl md:text-2xl font-sans font-semibold className='py-1'">
              Explore Our  Products
            </h2>
           <div className='flex gap-3 pr-5'>
            <p onClick={handelLeft} className='rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-300'><FaArrowLeft   /></p>
           <p onClick={handelRight} className='rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-300'> <FaArrowRight /></p>
            
           </div>
          </div>
    </div>
    <div>
      <div className="md:flex  justify-between  flex-wrap   ">
                    { perpageProduct.map((item, id) => {
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
                              <button onClick={()=> addtoCardHandel(item)} className='bg-black w-full rounded-xl text-white text-xs md:text-xl py-2 font-mono'>Add to Card</button>
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
   

    </div>
  </section>


  )
}

export default ExploreProduct
