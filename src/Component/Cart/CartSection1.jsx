import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { addformCart, removefromCart } from '../../store/CardSlice';

const CartSection1 = () => {
    const cardData = useSelector(state=> state.cardSlice.cardItem)
    const dispatch = useDispatch()
     const DicrementHandel =  (index)=>{
        dispatch(removefromCart(index))
     }
     const IncrementHandel = (index)=>{
        dispatch(addformCart(index))
     }


     // all subtotal 
     let sum = 0 ;
      cardData.forEach(item=>{
        return sum += item.price*item.Qont ;
      })
      
      let shippingSum =0;
      cardData.forEach(item=>{
        return shippingSum += 1 ;
      })

      let totalsum=0;
      cardData.forEach(item=>{
        return totalsum += sum + shippingSum ;
      })
     // all total cost end

     // Handel Checkout page


  return (
    <section>
        <div className='container mx-auto'>
            <div className='py-10'>
               <h3>
               <Link className='hover:bg-gray-200 hover:border-b-2 rounded-2xl py-2 px-2 border-b-blue-400'  to='/'>Home</Link>
               <span className='px-3'>/</span>
               <Link className='hover:bg-gray-200 hover:border-b-2 rounded-2xl py-2 px-2 border-b-blue-400' to='/card'>Cart </Link>
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
                    {cardData.map((item,index)=>(
                        <ul key={item.id} className='flex justify-between items-center h-32 md:h-56 bg-gray-200 my-5 '>

                            <li className='w-[25%] flex justify-center items-center  '>
                               <img className=' w-[95%] h-[95%] mx-auto my-auto ' src= {item.image} alt="Image" />
                            </li>
                            <li className='w-[25%] flex justify-center items-center'>
                                {item.price}$
                            </li>
                            <li className='w-[25%] md:flex justify-center '>
                                <div className='md:w-[46%] flex justify-between px-3 md:py-1 items-center border-2 border-gray-400 rounded-2xl'>


                                <p>
                                {item.Qont}
                                </p>
                                <p className='flex flex-col gap-3 '>
                                    <span onClick={()=> IncrementHandel(index)} className='text-2xl hover:bg-green-200 rounded-full'>

                                        <IoIosArrowUp />

                                    </span>
                                    <span onClick={()=> DicrementHandel(index)} className='text-2xl hover:bg-green-200 rounded-full'>
                                        <IoIosArrowDown />
                                    </span>
                                </p>
                                </div>
                            </li>
                            <li className='w-[25%] flex justify-center items-center'>{item.price * item.Qont}$</li>
                        </ul>
                    ))
                        
                    }
                </div>


            </div>


            {/* return to shop and add to cart  */}
            <div className='flex justify-between'>
                <button className='border-2 border-gray-300 rounded-xl px-3 py-2 hover:bg-green-300 hover:text-white'><Link>Return to Shop</Link></button>
                <button className='border-2 border-gray-300 rounded-xl px-3 py-2 hover:bg-green-300 hover:text-white'><Link>Update Cart</Link></button>

            </div>

            {/* bottom section */}
            <div className='py-9 md:flex md:justify-between '>
                <div className='flex justify-center md:justify-start gap-3 md:w-[40%]'>
                    <input className='border-2 border-gray-200 outline-none py-2 px-3 rounded-xl h-10' type="text"  />
                    <button className='px-3 py-2 rounded-xl bg-pink-600 hover:bg-green-300 hover:text-white h-10'>Apply Coupon</button>
                </div>
                <div className='md:w-[50%] border-2 px-3 py-3'>
                    <h2 className='py-2 text-2xl font-extrabold'>Cart Total</h2>
                    <div className='flex justify-between '>
                        <p>SubTotal</p>
                        <p>{sum}$</p>
                    </div>
                    <div className='flex justify-between py-2'>

                        <p>Shipping</p>
                        <p>{shippingSum}$</p>
                    </div>
                    <div className='flex justify-between py-2'>
                        <p>Total</p>
                        <p>{totalsum}$</p>
                    </div>
                    <button  className='px-3 py-2  rounded-xl bg-rose-500  hover:bg-green-300 hover:text-white'>

                        <Link to='/checkout'>Proceed to Checkout</Link>
                        
                    </button>
                </div>
            </div>

        </div>
    </section>
  )
}

export default CartSection1
