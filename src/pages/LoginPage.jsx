import React from 'react'
import Login from '../assets/login.png'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    return (

        <div className='flex items-center justify-between h-screen'>

            <div className='flex-1 bg-[#F9F9F9] md:block hidden'>
                <img src={Login} alt="" className='h-[100vh]' />
            </div>

            <div className='flex-1 flex justify-center items-center flex-col'>

                <div className='flex justify-center items-center gap-x-3'>
                    <img src={Logo} alt="" className='h-[2rem]' />
                    <p className='text-2xl font-medium'>Dong</p>
                </div>

                <h1 className='text-3xl font-medium mt-7 text-center'>Sign in to your Account</h1>
                <p className='text-[#324b50] mt-2 text-center -ml-6'>Enter your email and password to log In</p>
                <input type="email" name="" id="" placeholder='Email Address' className='border border-[#A7A7A7] w-[22rem] h-[3rem] rounded-md px-3 mt-[2rem] outline-none' />
                <input type="password" name="" id="" placeholder='Password' className='border border-[#A7A7A7] w-[22rem] h-[3rem] rounded-md px-3 mt-2 outline-none' />
                
                <div className='w-[22rem] flex justify-between items-center mt-6'>

                    <div className='flex items-center gap-x-2'>
                        <input type="checkbox" name="" id="" className=' cursor-pointer' />
                        <p className='text-[#324b50] text-sm'>Remember me</p>
                    </div>

                    <p className='text-[#0197B2] cursor-pointer text-sm'>Forgot Password</p>

                </div>

                <Link to={"/home"}>
                    <button className='bg-[#0197B2] text-white w-[22rem] h-[50px] rounded-md text-lg mt-7'>Sign In</button>
                </Link>

            </div>

        </div>

    )
}

export default LoginPage