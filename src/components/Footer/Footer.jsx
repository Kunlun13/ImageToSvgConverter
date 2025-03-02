import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-purple-950 text-purple-200 text-center'>
      © {new Date().getFullYear()} PiXsvg Creator. All rights reserved | {" "}
      <NavLink to="PrivacyPolicy">Privacy Policy</NavLink>
    </div>
  )
}

export default Footer