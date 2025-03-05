import React from 'react'
import Sign from './sign-img/sinph.png'
import Google from './sign-img/google.webp'
const Signup = () => {
  return (
   <section className='container mx-auto py-10'>
    <div className="flex gap-16">
        <div className="w-[50%]">
            <img className=' ' src={Sign} alt="" />
        </div>
        <div className="w-[30%] ">
            <h2 className='text-3xl font-bold mt-20 text-[#080413d7] '>Create an account</h2>
            <p className='mt-2 font-bold text-[#080413d7]'>Enter your details below</p>
            <div className="flex flex-col">

            <input className='border-b-2 py-2 mt-5 ' type="text" placeholder='Name' />
            <input className='border-b-2 py-2 mt-2 ' type="text"  placeholder='Email or Phone Number'/>
            <input className='border-b-2 py-2 mt-2 ' type="text" placeholder='Password' />
            </div>
            <button className='mt-4 text-center bg-[#DB4444] py-2  w-full text-white '>Create Account</button>
            <div className="flex gap-2 border w-full items-center mt-4 py-2 justify-center ">
            <img className='w-[30px] ' src={Google} alt="" />
            <button>Sign up with Google</button>
            </div>

            <div className="flex gap-2 justify-center w-full mt-5">
            <p>Already have account?</p>
            <button className='underline text-red-900 hover:text-blue-800'>Log in</button>

            </div>
        </div>
    </div>
   </section>
  )
}

export default Signup
