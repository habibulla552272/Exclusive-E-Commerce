import React, { useState } from 'react'
import SignUpImage from '../../assets/Signup/Side Image (1).png'
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { sendSignInLinkToEmail } from "firebase/auth";
const SignUpSection1 = () => {
      const [Name,setName]= useState('')
      const [password,setPassword]= useState('')
      const [email,setEmail]= useState('')
      const [message,setmessage]= useState('')
      const [Emailmessage,setEmailMessage]= useState('')
      const [passwordmessage,setPasswordMessage]= useState('')






    const HandelFireBase = () => {


        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setEmailMessage('')
                setPasswordMessage('')
                
                setmessage('Congratulation Brother')
                sendEmailVerification(auth.currentUser)
                .then(() => {
                  
                })
                .catch((error)=>{
                    setEmailMessage("Enter The Currect Email")
                })

            })
            .catch((error) => {
                const err= error.code
                if (err.includes("auth/missing-password")){
                    setPasswordMessage('')
                    setPasswordMessage('Enter your password')
                }else if(err.includes("auth/email-already-in-use")){
                    setEmailMessage('')
                    setPasswordMessage('')
                    setmessage("This Account AllReady  Exist")
                }else{
                    setPasswordMessage('')
                    setEmailMessage('Enter your Currect Email')

                }
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
                <h2 className='text-xl md:text-2xl font-bold text-green-400'>{message}</h2>

                <h2 className='text-xl md:text-3xl font-bold py-3'>Create an Account</h2>
                <p className='font-semibold text-xs md:text-[18px]'>Enter your Detaills below</p>

                <form className='' action="">

                    <input onChange={(e)=> setName(e.target.value)} className=' outline-none border-b-[1px] pb-1 px-2 flex my-3 w-full' type="text" name="password" id="name"  placeholder='Name..'/>
                    <input onChange={(e)=> setEmail(e.target.value)} className=' outline-none border-b-[1px] pb-1 px-2 flex my-3 w-full' type="email" name="password" id="email"  placeholder='Enter your Email' />
                    <p className='text-red-500 font-bold '>{Emailmessage}</p>
                    <input  onChange={(e)=> setPassword(e.target.value)} className=' outline-none border-b-[1px] pb-1 px-2 flex my-3 w-full' type="password" name="password" id="password" placeholder='Password' />
                    <p className='text-red-500 font-bold '>{passwordmessage}</p>
                </form>
                <div className='my-3'>
                    <button onClick={HandelFireBase} className='bg-orange-600 w-full py-2 rounded-xl text-white' type='submit'>Create Account</button>
                    
                </div>
                <div className='text-center'>
                    <p>Already have account ? <Link to='/login' className='hover:border-b-[1px] hover:text-green-500' >Login</Link> </p>
                </div>


            </div>




        </div>

    </div>
   </section>
  )
}

export default SignUpSection1
