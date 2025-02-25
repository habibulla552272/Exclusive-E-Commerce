import React from 'react'

// import TestTanStack from '../Component/TanStack/TestTanStack'

import Hero from '../Component/Hero'

import BestSeleProduct from '../Component/Best-SeleProduct/BestSeleProduct'

import Flash from '../Component/home/Flash'

import ExploreProduct from '../Component/Explore-Our-Product/ExploreProduct'
import NewArrival from '../Component/home/New Arivel/NewArrival'





const Home = () => {
  return (
    <div> 

      <Hero/>
     <Flash/>
      <BestSeleProduct />
      <ExploreProduct />
      <NewArrival /> 


    </div>
  )
}

export default Home
