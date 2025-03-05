import React from 'react'
import { Link } from 'react-router-dom'

const ErrorSection1 = () => {
  return (
    <section>
        <div className='container mx-auto'>
                <div className='text-center'>
                    <h2 className="font-bold text-4xl md:text-7xl">404 Not Found</h2>
                    <p className='text-xs md:text-xl my-8'>Your visited page not found,You may go home page</p>

                    <Link className='px-3 py-2 bg-[#DB4444] rounded-xl text-white' to='/'>
                        <button>
                            Back to Home Page
                        </button>
                    </Link>
                </div>
        </div>
    </section>
  )
}

export default ErrorSection1
