import React from 'react'

// import TestTanStack from '../Component/TanStack/TestTanStack'

import Hero from '../Component/Hero'

import BestSeleProduct from '../Component/Best-SeleProduct/BestSeleProduct'

import Flash from '../Component/home/Flash'

import ExploreProduct from '../Component/Explore-Our-Product/ExploreProduct'
import Music from '../Component/home/Music'
import NewArrival from '../Component/home/New Arivel/NewArrival'
import HomeLastSection from '../Component/home/HomeLastSection/HomeLastSection'





const Home = () => {
  return (
    <div> 

      <Hero/>
     <Flash/>
      <BestSeleProduct />
      <Music/>
      <ExploreProduct />      
      <NewArrival /> 
      <HomeLastSection />



    </div>
  )
}

export default Home
