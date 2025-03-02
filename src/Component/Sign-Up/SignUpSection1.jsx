import React, { useState } from 'react'
import SignUpImage from '../../assets/Signup/Side Image (1).png'
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUpSection1 = () => {
      const [Name,setName]= useState('')
      const [password,setPassword]= useState('')
      const [email,setEmail]= useState('')


    const HandelFireBase=()=>{


const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    console.log('success fully handelit');
    
    // ...
  })
  .catch((error) => {
     console.log(error);
     
    // ..
  });


    }

  return (
   <section>
    <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row md:items-center gap-4 md:justify-between'>
            <div className='md:w-[45%] w-[80%] mx-auto'>
                <img src={SignUpImage} alt="" />

            </div>

            <div className='w-[70%] mx-auto md:w-[45%]'>

                <h2 className='text-xl md:text-3xl font-bold py-3'>Create an Account</h2>
                <p className='font-semibold text-xs md:text-[18px]'>Enter your Detaills below</p>

                <form className='' action="">

                    <input onChange={(e)=> setName(e.target.value)} className=' outline-none border-b-[1px] pb-1 px-2 flex my-3 w-full' type="text" name="" id=""  placeholder='Name..'/>
                    <input onChange={(e)=> setEmail(e.target.value)} className=' outline-none border-b-[1px] pb-1 px-2 flex my-3 w-full' type="email" name="" id=""  placeholder='Enter your Email' />
                    <input  onChange={(e)=> setPassword(e.target.value)} className=' outline-none border-b-[1px] pb-1 px-2 flex my-3 w-full' type="password" name="" id="" placeholder='Password' />

                </form>
                <div className='my-3'>
                    <button onClick={HandelFireBase} className='bg-orange-600 w-full py-2 rounded-xl text-white' type='submit'>Create Account</button>
                    
                </div>
                <div className='text-center'>
                    <p>Already have account ? <Link className='hover:border-b-[1px] hover:text-green-500' >Login</Link> </p>
                </div>


            </div>




        </div>

    </div>
   </section>
  )
}

export default SignUpSection1
