import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CartSection1 = () => {
    const cardData = useSelector(state=> state.cardSlice.cardItem)
  return (
    <section>
        <div className='container mx-auto'>
            <div className='py-10'>
               <h3>
               <Link className='hover:bg-gray-200 hover:border-b-2 rounded-2xl py-2 px-2 border-b-blue-400'  to='/'>Home</Link>
               <span className='px-3'>/</span>
               <Link to='/card'>Cart </Link>
               </h3>
            </div>

            {/* //item show */}
            <div>
                <div>
                    <ul className='flex justify-between items-center'>
                    <li className='w-[25%] flex justify-center items-center'>
                        Product
                        </li>
                        <li className='w-[25%] flex justify-center items-center'>Price</li>
                        <li className='w-[25%] flex justify-center items-center'>Quantity</li>
                        <li className='w-[25%] flex justify-center items-center'>SubTototal</li>
                    </ul>

                </div>
                <div>
                    {cardData.map(item=>(
                        <ul key={item.id} className='flex justify-between items-center'>

                            <li className='w-[25%] flex justify-center items-center'>
                               <img src= {item.image} alt="" />
                            </li>
                            <li className='w-[25%] flex justify-center items-center'>
                                {item.price}
                            </li>
                            <li className='w-[25%] flex justify-center items-center'>
                                <p>
                                {item.Qont}
                                </p>
                                <p></p>
                            </li>
                            <li className='w-[25%] flex justify-center items-center'>{item.price}</li>
                        </ul>
                    ))
                        
                    }
                </div>


            </div>

        </div>
    </section>
  )
}

export default CartSection1
