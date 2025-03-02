import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='w-full' style={{fontFamily:"cursive"}}>
    <div className='text-center bg-purple-500 p-8' style={{fontFamily:'cursive',fontSize:'50px'}}>Pi<span className='text-pink-400'>X</span>svg Creator</div>
    <header>
        <nav className='flex flex-wrap gap-2 justify-around bg-purple-900 p-1'>
            <div className='border border-black bg-red-300 hover:bg-red-200 rounded-md font-bold'>
                <NavLink className={({isActive})=>{
                    let x = isActive?`text-red-700`:""
                    return x
                }} 
                to='' style={{padding:"10px"}}>
                    Home
                    </NavLink>   
            </div>
            <div className='border border-black bg-red-300 hover:bg-red-200 rounded-md font-bold'>
                <NavLink className={({isActive})=>{
                    const x = isActive?`text-red-700`:""
                    return x
                }} 
                to='AboutUs' style={{padding:"10px"}}>
                    About Us
                    </NavLink>   
            </div>
            <div className='border border-black bg-red-300 hover:bg-red-200 rounded-md font-bold'>
                <NavLink className={({isActive})=>{
                    const x = isActive?`text-red-700`:""
                    return x
                }} 
                to='ContactUs' style={{padding:"10px"}}>
                    Contact Us
                    </NavLink>   
            </div>
        </nav>
    </header>
    </div>
  )
}

export default Header