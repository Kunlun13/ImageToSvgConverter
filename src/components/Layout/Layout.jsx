import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Layout() {
  return (
    <>
    <Header/>
  {

    <div className='flex justify-center flex-wrap p-3'>
      <div>Left</div>
      <Outlet />
      <div>right</div>

  </div>
  }
    <Footer />
    </>
  )
}

export default Layout