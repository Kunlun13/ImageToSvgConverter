import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='w-full'>
    <div className='text-center bg-emerald-500 p-8' style={{fontFamily:'cursive',fontSize:'50px'}}>Svg Generator</div>
    <header>
        <nav className='flex justify-around bg-green-800 p-1'>
            <div className='border border-black p-4 bg-emerald-300 font-bold'>
                <NavLink className={({isActive})=>{
                    const x = isActive?`text-red-900`:""
                    return x
                }} 
                to=''>
                    Pixel Drawing
                    </NavLink>   
            </div>
        </nav>
        <div className="advertisements">
            haha
        </div>
        <div className="advertisements">
            haha
        </div>
    </header>
    </div>
  )
}

export default Header