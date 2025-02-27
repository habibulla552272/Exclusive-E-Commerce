import React from 'react'
import { useSelector } from 'react-redux'

const CheckoutSection1 = () => {
  const data= useSelector(state => state.cardSlice.cardItem)
  
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

  return (
    <section>
        <div className='container mx-auto px-5 md:px-0'>
            <div>
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
            <div>
              <div>
                {data.map(item=>{
                  return(
                    <div className='flex gap-3 justify-between items-center bg-gray-50 py-2 px-3 md:px-0 my-3' key={item.id}> 
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

            </div>

        </div>
    </section>
  )
}

export default CheckoutSection1
