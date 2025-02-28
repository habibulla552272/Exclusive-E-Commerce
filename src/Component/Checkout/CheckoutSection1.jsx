import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import bkash from './CheckoutImage/Bkash.png'
import  visa from "./CheckoutImage/Visa.png"
import mastercard from './CheckoutImage/Mastercard.png'
import noagod from './CheckoutImage/image 33.png'
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { MdOutlineRadioButtonChecked } from "react-icons/md";


const CheckoutSection1 = () => {
  const data= useSelector(state => state.cardSlice.cardItem)
  const [firstCheck,setFirstCheck] = useState(false)
  const [lastCheck,setLastCheck] = useState(false)

    
   // all subtotal 
   let sum = 0 ;
   data.forEach(item=>{
     return sum += item.price*item.Qont ;
   })
   
   let shippingSum =0;
   data.forEach(item=>{
     return shippingSum += 1 ;
   })

   let totalsum=0;
   data.forEach(item=>{
     return totalsum += sum + shippingSum ;
   })
  // all total cost end

  //chek unchek
  const firstCheckHandel =()=>{
     if(firstCheck){
      setFirstCheck(false)
     }else{
      setFirstCheck(true)
     }

     setLastCheck(false)
  }
  const lastCheckHandel =()=>{
    if(lastCheck == true){
      setLastCheck(false)
    }else{
      setLastCheck(true)
   
      
    }
    setFirstCheck(false)
    
  }

  return (
    <section>
        <div className='container mx-auto px-5 md:px-0'>
          <div className=' md:flex justify-between'>
            <div className='md:w-[46%]'>
                <h2 className='text-2xl font-bold  font-sans'>Billing Details</h2>

                <form action="chekout">
                  <div className=' flex flex-col gap-1 my-3'>
                    <label className='text-xl font-serif font-thin pl-1' htmlFor="Firs Name">First Name</label>
                    <input className='bg-gray-100 outline-none  px-3 py-2 rounded-xl' type="text" name="name" id="name" />
                  </div>
                  <div className=' flex flex-col gap-1 my-3'>
                    <label className='text-xl font-serif font-thin pl-1' htmlFor="Firs Name">
                      company Name
                    </label>
                    <input className='bg-gray-100 outline-none  px-3 py-2 rounded-xl' type="" name="name" id="name" />
                  </div>
                  <div className=' flex flex-col gap-1 my-3'>
                    <label className='text-xl font-serif font-thin pl-1' htmlFor="Firs Name">
                      street Address
                    </label>
                    <input className='bg-gray-100 outline-none  px-3 py-2 rounded-xl' type="text" name="name" id="name" />
                  </div>
                  <div className=' flex flex-col gap-1 my-3'>
                    <label className='text-xl font-serif font-thin pl-1' htmlFor="Firs Name">Apartment,Floor,etc,(optional)</label>
                    <input className='bg-gray-100 outline-none  px-3 py-2 rounded-xl' type="text" name="name" id="name" />
                  </div>

                  <div className=' flex flex-col gap-1 my-3'>
                    <label className='text-xl font-serif font-thin pl-1' htmlFor="Firs Name">
                      
                      Town/City*
                    </label>
                    <input className='bg-gray-100 outline-none  px-3 py-2 rounded-xl' type="text" name="name" id="name" />
                  </div>
                  <div className=' flex flex-col gap-1 my-3'>
                    <label className='text-xl font-serif font-thin pl-1' htmlFor="Firs Name">
                       Phone Number 
                      </label>
                    <input className='bg-gray-100 outline-none  px-3 py-2 rounded-xl' type='number' name="name" id="name" />
                  </div>
                  <div className=' flex flex-col gap-1 my-3'>
                    <label className='text-xl font-serif font-thin pl-1' htmlFor="Firs Name">
                      Email Address *
                      </label>
                    <input className='bg-gray-100 outline-none  px-3 py-2 rounded-xl' type="email" name="name" id="name" />
                  </div>
                  <div className=' flex  gap-1 my-3'>
                    <input className=' md:text-xl bg-green-700' type="checkbox" name="name" id="name" />
                    <label className='text-sm md:text-xl font-serif font-thin pl-1' htmlFor="Firs Name">
                      
                      Save this information for faster Check-out next time
    
                    </label>
                  </div>
                </form>

            </div>
            <div className='md:w-[42%]'>
              <div>
                {data.map(item=>{
                  return(
                    <div className='flex gap-3 justify-between items-center bg-gray-50 py-2 px-3 md:px-0 my-3 shadow-2xl' key={item.id}> 
                      <img className='w-[30%] ' src={item.image} alt="image" />
                      <p className='text-xl font-thin font-serif'>{item.brand}</p>
                      <p className='text-xl font-semibold'>${item.price}</p>
                    </div>
                  )
                })

                }
                
              </div>
              <div className='flex justify-between px-3 md:px-0 border-b-2 border-gray-200 pb-3'>
                <h2 className='text-xl font-thin font-serif'>Subtotal:</h2>
                <p>${sum}</p>
              </div>
              <div className='flex justify-between px-3 md:px-0 border-b-2 border-gray-200 pb-3'>
                <h2 className='text-xl font-thin font-serif'>Shipping:</h2>
                <p>${shippingSum}</p>
              </div>
              <div className='flex justify-between px-3 md:px-0 '>
                <h2 className='text-xl font-thin font-serif'>total:</h2>
                <p>${totalsum}</p>
              </div>

               <div className=' px-3 md:px-0 my-4'>
              <div className='flex justify-between '>
                <div className='flex gap-3 items-center'>
                   <button onClick={firstCheckHandel}>
                       {firstCheck ? <MdOutlineRadioButtonChecked /> : <MdOutlineRadioButtonUnchecked />}
                   </button>
                   <p className='text-xl font-thin font-semibold'>Bank</p>
                
                </div>
                <div className='flex gap-2'>
                  <button><img src={bkash} alt="" /></button>
                  <button>
                    <img src={visa} alt="" />
                  </button>
                  <button>
                    <img src={mastercard} alt="" />
                  </button>
                  <button>
                    <img src={noagod} alt="" />
                  </button>
                </div>
              </div>
              <div className='flex gap-3 items-center py-3'>
                <button onClick={lastCheckHandel}>
                {lastCheck ? <MdOutlineRadioButtonChecked /> : <MdOutlineRadioButtonUnchecked />}
                   
                </button>
                <p className='text-xl font-thin font-semibold'>Cash on Delivery</p>
              </div>
              <div className='flex justify-between'>
                <div className='border-2 border-gray-400'>
                   <input className='px-3 py-2 outline-none' type="text" name="" id="" placeholder='coupon Code' />
                </div>

                <div>
                  <button className=' px-2 py-2 bg-rose-500 rounded-xl'>Apply Coupon</button>
                </div>
              </div>
              <div className='my-4'>
                <button className=' px-2 py-2 bg-rose-500 rounded-xl'>Place Order</button>
              </div>
               </div>
            </div>

          </div>

        </div>
    </section>
  )
}

export default CheckoutSection1
