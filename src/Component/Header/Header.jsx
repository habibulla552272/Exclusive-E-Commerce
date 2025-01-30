import React from 'react'
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto flex justify-between px-2 py-3 md:px-0  ">
        <p className="text-xs md:text-[1rem]">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link to="/contact">ShopNow</Link>
        </p>
        <p className="flex gap-1 items-center text-xs md:text-[1rem]">
          English
          <span className="  ">
            <IoIosArrowDown />
          </span>
        </p>
      </div>
    </section>
  );
}

export default Header
