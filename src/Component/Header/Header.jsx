import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className=" md:flex border bg-[#000000] text-white gap-40 align-middle justify-center p-1 ">
        <p className='text-center text-[#c2bebe] '>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className='text-[#ffffff]'><Link to="/contact">ShopNow</Link></span> </p>
        <select className='text-[#c2bebe] outline-none md:ml-0 ml-[42%] items-center' name="eng" id="eng">
          <option className='text-[#171616]' value="English">English</option>
          <option className='text-[#e413d2]' value="বাংলা">বাংলা</option>
        </select>
      </div>
    </div>
  );
}

export default Header
