import React from 'react'
import { Link } from 'react-router-dom'

const SignUpHero = () => {
  return (
   <section>
      <div className='container mx-auto py-10'>

        <h2 className='text-sm md:text-xl w-[80%] mx-auto  md:w-full '>
          <Link className="hover:bg-green-400 hover:text-white rounded-2xl hover:border-b-2 border-b-blue-500 px-2 py-2 hover:mx-1">Home</Link>
          <span>/</span>
          <Link className="hover:bg-green-400 hover:text-white rounded-2xl hover:border-b-2 border-b-blue-500 px-2 py-2 hover:mx-1">Shop</Link>
          <span>/</span>
          <Link className="hover:bg-green-400 hover:text-white rounded-2xl hover:border-b-2 border-b-blue-500 px-2 py-2 hover:mx-1">Wish List</Link>
        </h2>

      </div>
   </section>
  )
}

export default SignUpHero

