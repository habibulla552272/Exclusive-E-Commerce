import React, { useContext, useEffect, useState } from "react";
import { ApiData } from "../Contex/ContextApi";
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToWish } from "../../store/WishSlice";


const BestSeleProduct = () => {
  const data = useContext(ApiData);
  const [viewall, setViewAll] = useState(true);
  let filterData = data.filter((item) => {
    return item.id <= 4;
  });

  const viewallData = () => {
    setViewAll(!viewall);
  };

  // Add To Wishitem..............................
  const dispatch =useDispatch()
  const hendelAddToWish= (wishData) => {
    dispatch(addToWish({...wishData,Qont: 1}))
  }

  return (
    <section>
      <div className="container mx-auto px-2 md:px-0">
        <div>
          <div className="flex gap-1 md:gap-2 items-center">
            <p className="w-4 h-8 bg-red-600 rounded-2xl "></p>
            <p>This Month</p>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-sl md:text-2xl font-sans font-semibold">
              Best Selling Products
            </h2>
            <button
              onClick={viewallData}
              className="px-6 md:px-8  py-2 rounded-3xl bg-red-600 text-white hover:bg-black "
            >
              View All
            </button>
          </div>
        </div>

        <div>
          {viewall ? (
            <div className="md:flex  justify-between mx-auto ">
              {filterData.map((item, id) => {
                return (
                  <div
                    key={id}
                    className="md:w-[24%] shadow-2xl w-[80%] mx-auto  my-6 group"
                  >
                    <div className=" relative overflow-hidden    h-[195px] md:h-[220]">
                      <img
                        className="h-[190px] md:h-[210px] flex justify-center mx-auto py-5 "
                        src={item.image}
                        alt="image"
                      />
                      <div className=" absolute flex flex-col right-3 gap-3 -bottom-16 group-hover:bottom-24 duration-700  ease-in-out ">
                        <p onClick={()=> hendelAddToWish(item) } className="text-2xl cursor-pointer ">
                          <CiHeart />
                        </p>

                        <p className="text-2xl">
                          <FaEye />
                        </p>
                      </div>
                    </div>

                    <div className="h-[165px] pt-8 px-4 bg-gray-200">
                      <p className=" max-h-[50px] overflow-hidden  font-sans  ">
                        {item.title}
                      </p>
                      <div className="flex items-center gap-2 md:gap-4 py-2 font-sans  font-semibold text-xl">
                        <p className="text-orange-400">
                          ${item.price - item.discount}
                        </p>
                        <p className="line-through text-gray-400">
                          {item.price}
                        </p>
                      </div>
                      <p className="text-xl font-semibold font-mono">
                        <span className="pr-1 text-orange-400">Model:</span>
                        {item.brand}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="md:flex  justify-between  flex-wrap  ">
              {data.map((item, id) => {
                return (
                  <div
                    key={id}
                    className="md:w-[24%] shadow-2xl w-[80%] mx-auto  my-3 group bg-gray-100"
                  >
                    <div className=" relative overflow-hidden    h-[195px] md:h-[220]">
                      <img
                        className="h-[190px] md:h-[210px] flex justify-center mx-auto py-5 "
                        src={item.image}
                        alt="image"
                      />
                      <div className=" absolute flex flex-col right-3 gap-3 -bottom-16 group-hover:bottom-24 duration-700  ease-in-out ">
                        <p onClick={()=> hendelAddToWish(item) } className="text-2xl cursor-pointer">
                          <CiHeart />
                        </p>

                        <p className="text-2xl">
                          <FaEye />
                        </p>
                      </div>
                    </div>

                    <div className="h-[165px] pt-8  bg-gray-200">
                      <p className=" max-h-[50px] overflow-hidden  font-sans  px-4">
                        {item.title}
                      </p>
                      <div className="flex items-center gap-2 md:gap-4 py-2 px-4 font-sans  font-semibold text-xl">
                        <p className="text-orange-400 px-4">
                          ${item.price - item.discount}
                        </p>
                        <p className="line-through text-gray-400 px-4">
                          {item.price}
                        </p>
                      </div>
                      <p className="text-xl font-semibold font-mono px-4">
                        <span className="pr-1 text-orange-400">Model:</span>
                        {item.brand}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BestSeleProduct;
