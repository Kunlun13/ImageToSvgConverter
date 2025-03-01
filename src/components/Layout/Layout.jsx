import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Layout() {
  return (
    <>
    <Header/>
  
  {<div className='flex justify-center'>
  <Outlet />
  </div>}

    <Footer />
    </>
  )
}

export default Layout