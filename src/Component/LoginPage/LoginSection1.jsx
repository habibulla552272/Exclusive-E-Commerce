import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SignUpImage from '../../assets/Signup/Side Image (1).png'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'


const LoginSection1 = () => {
    const [Name,setName]= useState('')
    const [password,setPassword]= useState('')
    const [email,setEmail]= useState('')
    const [message,setmessage]= useState('')
    const [Emailmessage,setEmailMessage]= useState('')
    const [passwordmessage,setPasswordMessage]= useState('')


    const navigate =useNavigate()

  const HandelFireBase = () => {


    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential,user) => {
        
        // const user = userCredential.user;

        setEmailMessage('')
        
        if(userCredential.user.emailVerified=== false){
            setmessage('Please check your email and verify it ')
        }else if(userCredential.user.emailVerified=== true){
            navigate('/')

        }
       
      })
      .catch((error) => {
        const errorCode = error.code;
        if(errorCode.includes('auth/invalid-credential')){
            setEmailMessage('No Account Please Create Account');
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

              <h2 className='text-xl md:text-3xl font-bold py-3'>Log In to Exclusive</h2>
              <p className='font-semibold text-xs md:text-[18px]'>Enter your Detaills below</p>

              <form className='' action="">

                  <input onChange={(e)=> setEmail(e.target.value)} className=' outline-none border-b-[1px] pb-1 px-2 flex my-3 w-full' type="email" name="password" id="email"  placeholder='Enter your Email' />
                  <p className='text-red-500 font-bold '>{Emailmessage}</p>
                  <input  onChange={(e)=> setPassword(e.target.value)} className=' outline-none border-b-[1px] pb-1 px-2 flex my-3 w-full' type="password" name="password" id="password" placeholder='Password' />
                  <p className='text-red-500 font-bold '>{passwordmessage}</p>
              </form>
              <div className='my-5 flex justify-between'>
                  <button onClick={HandelFireBase} className='bg-orange-600  py-2 rounded-xl text-white px-6 ' type='submit'>Log In</button>
                  <button className='bg-orange-600  py-2 rounded-xl text-white px-6' type='submit'>Forget Password</button>
              </div>
             


          </div>




      </div>

  </div>
 </section>
)
}

export default LoginSection1
