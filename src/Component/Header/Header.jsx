import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-[#000000]'>
      <div className=" container mx-auto md:flex  text-white  align-middle justify-between p-1 ">
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
