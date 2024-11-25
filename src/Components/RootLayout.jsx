import React from 'react'
import Nabvar from './Nabvar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const RootLayout = () => {
  return (
    <>
    <Nabvar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout