import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Layout() {
  return (
    <div className='h-lvh bg-purple-950' style={{fontFamily:"Sour Gummy"}}>
    <Header/>
  {

    <div className='flex justify-center flex-wrap p-3 bg-purple-200'>
      <Outlet />

  </div>
  }

    <Footer />
    </div>
  )
}

export default Layout