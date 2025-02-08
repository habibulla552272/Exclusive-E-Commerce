import React from 'react'
import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="border-b">

        <div className='container mx-auto md:flex align-middle  py-5 items-center px-2 '>
            <h2 className='font-bold text-2xl  py-2 w-[25%] '>Exclusive</h2>

            <div className="md:flex md:flex-row flex flex-col-reverse md:justify-between  w-[75%]">

            <ul className='md:flex gap-10  py-2'>
                <li className='md:hover:border-b '><Link to='/'>Home</Link> </li>
                <li className='md:hover:border-b '>Contact</li>
                <li className='md:hover:border-b '><Link to='/about'>About</Link> </li>
                <li className='md:hover:border-b '>Sign Up</li>

            </ul>
            <div className="flex text-center gap-4">
                <div className="flex px-1 rounded-sm w-[230px] py-2 justify-between bg-[#F5F5F5] ">
                    <input className='outline-none w-[200px]  ' type="search" placeholder='What are you looking for?' />
                    <p className=' text-[22px] '><FiSearch /></p>

                </div>
                <div className="flex py-2 gap-5 text-[22px] ">
                    <p><AiOutlineHeart /></p>
                    <p><AiOutlineShoppingCart /></p>

                </div>

            </div>
            </div>
        </div>
        </div>
    )
}

export default Navbar