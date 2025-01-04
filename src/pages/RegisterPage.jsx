import React from 'react'
import Login from '../assets/register.png'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
    return (

        <div className='flex items-center justify-between h-screen w-screen'>


            <div className='flex-1 flex justify-center items-center flex-col'>

                <div className='flex justify-center items-center gap-x-3'>
                    <img src={Logo} alt="" className='h-[2rem]' />
                    <p className='text-2xl font-medium'>Dong</p>
                </div>

                <h1 className='text-3xl font-medium mt-7 text-center sm:ml-[-1.6rem]'>Create a new account</h1>
                <p className='text-[#324b50] mt-2 text-start sm:ml-[-2rem]'>Enter your name, email and password to  <br /> create account</p>
                <input type="text" name="" id="" placeholder='Username' className='border border-[#A7A7A7] w-[22rem] h-[3rem] rounded-md px-3 mt-[2rem] outline-none' />
                <input type="email" name="" id="" placeholder='Email Address' className='border border-[#A7A7A7] w-[22rem] h-[3rem] rounded-md px-3 mt-2 outline-none' />
                <input type="number" name="" id="" placeholder='Phone Number' className='border border-[#A7A7A7] w-[22rem] h-[3rem] rounded-md px-3 mt-2 outline-none' />
                <input type="password" name="" id="" placeholder='Password' className='border border-[#A7A7A7] w-[22rem] h-[3rem] rounded-md px-3 mt-2 outline-none' />
                <input type="password" name="" id="" placeholder='Confirm Password' className='border border-[#A7A7A7] w-[22rem] h-[3rem] rounded-md px-3 mt-2 outline-none' />


                <Link to={"/home"}>
                    <button className='bg-[#0197B2] text-white w-[22rem] h-[50px] rounded-md text-lg mt-7'>Create an account</button>
                </Link>

            </div>

            <div className='flex-1 justify-end md:flex hidden'>
                <img src={Login} alt="" className='h-[100vh] flex-1' />
            </div>


        </div>

    )
}

export default RegisterPage