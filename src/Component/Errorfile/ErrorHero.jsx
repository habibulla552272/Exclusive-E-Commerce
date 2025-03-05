import React from 'react'
import { Link } from 'react-router-dom'

const ErrorHero = () => {
  return (
    <section>
    <div className='container mx-auto px-5 md:px-0'>

        <div className='py-10'>
            <h2 className='text-sm md:text-xl  '>
                <Link className="hover:bg-green-400 hover:text-white rounded-2xl hover:border-b-2 border-b-blue-500 px-2 py-2 hover:mx-1">Account</Link>
                 <span>/</span>
                  <Link className="hover:bg-green-400 hover:text-white rounded-2xl hover:border-b-2 border-b-blue-500 px-2 py-2 hover:mx-1">My Account</Link> 
                  <span>/</span> 
                  <Link className="hover:bg-green-400 hover:text-white rounded-2xl hover:border-b-2 border-b-blue-500 px-2 py-2 hover:mx-1">Product</Link> 
                  <span>/</span>
                   <Link className="hover:bg-green-400 hover:text-white rounded-2xl hover:border-b-2 border-b-blue-500 px-2 py-2 hover:mx-1">View</Link>
                    <span>/</span> 
                    <Link className="hover:bg-green-400 hover:text-white rounded-2xl hover:border-b-2 border-b-blue-500 px-2 py-2 hover:mx-1">Checkout</Link>

            </h2>
        </div>

    </div>
   </section>
  )
}

export default ErrorHero
