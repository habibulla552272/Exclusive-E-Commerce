import React, { useContext, useEffect, useState } from "react";
import { ApiData } from "../Contex/ContextApi";

const BestSeleProduct = () => {
  const data = useContext(ApiData);

  return (
    <section>
      <div className="container mx-auto px-2 md:px-0">
        <div>
          <div className="flex items-center">
            <p className="w-4 h-8 bg-red-600"></p>
            <p>This Month</p>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-sl md:text-2xl font-sans font-semibold">
              Best Selling Products
            </h2>
            <button className="px-6 md:px-8  py-2 rounded-3xl bg-red-600 text-white hover:bg-black ">
              View All
            </button>
          </div>
        </div>
        <div>
          {/* {filterData.map((item, id) => {
            return (
              <div key={id}>
                <div>
                  <img src={item.image} alt="image" />
                </div>
              </div>
            );
          })} */}
        </div>
      </div>
    </section>
  );
};

export default BestSeleProduct;
