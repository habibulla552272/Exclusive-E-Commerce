import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../../pages/Home'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

const Rootlayout = () => {
  return (
    <>
    <Header />
    <Navbar />
    <Outlet />

    </>
  )
}

export default Rootlayout
