import React from 'react'
import Header from '../Component/Header/Header'
import { useSelector } from 'react-redux'
import CartSection1 from '../Component/Cart/CartSection1'

const Card = () => {

    const cardData = useSelector(state=>{
        return state.cardSlice.cardItem

    })

    
  return (
  <>
  <CartSection1 />

 
  
  </>
  )
}

export default Card
