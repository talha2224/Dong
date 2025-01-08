import React from 'react'
import Logo from '../assets/logo.png'

import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-4 px-4 md:px-10'>

            <div className='flex items-center gap-x-2'>
                <img src={Logo} alt="" className='h-[2rem]' />
                <p className='text-2xl font-medium'>Dong</p>
            </div>

            <div className='flex items-center gap-x-2 sm:gap-x-10'>
                <Link to={"/login"}>
                    <button className='text-lg'>Login</button>
                </Link>
                <Link to={"/register"}>
                    <button className='bg-[#0197B2] text-white w-[100px] sm:w-[127px] h-[35px] sm:h-[50px] rounded-[50px] text-sm sm:text-lg'>Sign Up</button>
                </Link>

            </div>

        </div>
    )
}

export default Navbar