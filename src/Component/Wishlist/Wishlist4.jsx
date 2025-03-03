import React, { useContext } from 'react'

import { IoCartOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { ApiData } from '../Contex/ContextApi';
import { useDispatch, useSelector } from 'react-redux';
import { deleteWishItem, moveAllWishItems } from '../../store/wishSlice';
import { addformCart } from '../../store/CardSlice';

const Wishlist4 = () => {
    const mainApiData = useContext(ApiData)
    // add to wish item....................................
    let wishData = useSelector((state) => state.wishSlice.wishItemSlice
    )
    //   wish item delete.................................
    const dispatch = useDispatch();
    let hendelWishItemDelete = (index) => {
        dispatch(deleteWishItem(index))
    }
    // wish All items Delete................................

    let hendelWishAllProduct = () => {
        dispatch(moveAllWishItems())

    }

//    Add to cart item.....................................
    const hendelAddToCart = (item) => {
        dispatch(addformCart({...item, Qont: 1}) )       
        
    }


    // let filterWish = mainApi.filter((item) => item.id >= 40 && item.id <= 43)


    return (
        <section className='container mx-auto mt-14 px-5'>
            <div className="flex justify-between">
                <p>Wishlist (4) </p>
                <button onClick={hendelWishAllProduct} className='border py-2 px-5 rounded-sm cursor-pointer'>Move All To Bag</button>
            </div>
            <div className="flex flex-wrap justify-between  ">
                {wishData.map((item) => (

                    <div className=" md:w-[300px] w-full mt-7 relative overflow-hidden group md:ml-0  ">

                        <div className="border-2 rounded-t-xl  ">

                            <div className="flex justify-evenly  items-center mt-2 ">
                                <p className='bg-red-500 text-white w-[50px] px-2 rounded-sm absolute -left-1/2 group-hover:left-4 top-2 duration-700 ease-in-out '>-35% </p>
                                <p onClick={() => hendelWishItemDelete(item)} className='text-xl cursor-pointer relative left-[110px] '><RiDeleteBinLine /></p>
                            </div>
                            <img className='md:w-[90%] md:ml-[5%] w-[300px] h-[300px] ' src={item.image} alt="" />


                        </div>
                        <button onClick={ hendelAddToCart} className='flex gap-2 items-center  w-full justify-center py-2 bg-black text-white rounded-b-sm cursor-pointer '><span className='text-xl'><IoCartOutline /> </span> Add to cart</button>

                        <p className='font-bold mt-3 truncate'>{item.title} </p>
                        <p className='text-red-500 font-bold flex gap-4 mt-1'>${item.price} <span className='line-through text-[#11111755] '>$1160</span></p>
                    </div>
                ))

                }
            </div>

        </section>


    )
}

export default Wishlist4
