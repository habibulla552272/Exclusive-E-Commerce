import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../../pages/Home'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../home/Footer'

const Rootlayout = () => {
  return (
    <>
    <Header />
    <Navbar />
    <Outlet />
    <Footer />

    </>
  )
}

export default Rootlayout
