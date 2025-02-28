import React from 'react'
import Qr from './H-img/Qr Code.png'
import Pl from './H-img/play-store.png'
import Apple from './H-img/AppStore.png'
import { RiFacebookFill } from "react-icons/ri";
import { LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiArrowRightThick } from "react-icons/ti";

const Footer = () => {
  return (
    
      <section className=' pt-20 px-20 pb-8 bg-black text-white mt-10 '>
        <div className="md:flex  justify-between">

        <div className="flex flex-col gap-3 ">
            <h2 className="text-2xl font-bold" >Exclusive</h2>
            <h3 className='text-xl font-bold mt-2'>Subscribe</h3>
            <p>Get 10% off your first order</p>
            <div className="flex border items-center w-[160px] p-2">
            <input className=' w-[130px] ' type="text" placeholder='Enter your email' />
            <p><TiArrowRightThick /></p>
            </div>
        </div>

        <div className="flex flex-col gap-3 ">
            <h3 className="text-xl font-bold md:mt-0 mt-5 " >Support</h3>
            <p className='mt-2'>111 Bijoy sarani, Dhaka,<br />  DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-80724723</p>
        </div>

        <div className="flex flex-col gap-3 ">
            <h3 className="text-xl font-bold md:mt-0 mt-5 " >Account</h3>
            <p className='mt-2'>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>

        </div>

        <div className="flex flex-col gap-3 ">
            <h3 className="text-xl font-bold md:mt-0 mt-5 " >Quick Link</h3>
            <p className='mt-2'>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
        </div>

        <div className="flex flex-col gap-3 ">
            <h3 className="text-xl font-bold md:mt-0 mt-5 " >Download App</h3>
            <p className='mt-2 text-[13px] '>Save $3 with App New User Only</p>
            <div className="flex gap-2 ">
                <img src={Qr} alt="" />
                <div className="flex flex-col gap-2">                    
                    <img className=' ' src={Pl} alt="" />                                     
                    <img className=' bg-green-700' src={Apple} alt="" />
                </div>
            </div>
            <div className="flex gap-6 text-xl">
                <p><RiFacebookFill /></p>
                <p><LuTwitter /></p>
                <p><FaInstagram /></p>
                <p><TiSocialLinkedin /></p>
            </div>
        </div>
        </div>
        <p className='text-center mt-16 text-[#c6c4cb55] '>||-two best friend 'Anas & Habibull--</p>

      </section>
    
  )
}

export default Footer
