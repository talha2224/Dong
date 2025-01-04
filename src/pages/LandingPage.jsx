import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../assets/banner.png'
import Google from '../assets/google.png'
import Apple from '../assets/apple.png'
import User from '../assets/user.png'
import Ellipse from '../assets/ellipse.png'

import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (

    <div className='flex flex-col h-screen relative'>

      <img src={Ellipse} alt="" className='absolute top-0 left-[17rem] -z-50 lg:block hidden' />

      <Navbar />

      <div className='flex-1 flex justify-between items-start pl-10 mt-[3rem] flex-wrap'>

        <div className='mt-4'>
          <h1 className='text-5xl font-medium'>Securely Buy, Transfer, <br /> and Manage Your Credits <br /> in One Place</h1>
          <p className='text-[#A7A7A7] mt-4'>Experience a seamless and secure platform to purchase, exchange, <br /> and withdraw credits with no fees to buy and full control over your <br /> transactions</p>
          <Link to={"/register"}>
            <button className='bg-[#0197B2] text-white w-[157px] h-[45px] rounded-[50px] text-sm mt-7'> Get Started</button>
          </Link>

          <div className='flex items-center gap-x-6 mt-10'>
            <img src={Google} alt="" className='h-[3rem] cursor-pointer' />
            <img src={Apple} alt="" className='h-[3rem] cursor-pointer' />
          </div>
        </div>

        <div className='relative mt-4'>
          <img src={Banner} alt="" className='h-[80vh]' />
          <img src={User} alt="" className=' absolute top-0 right-6 h-[4rem]' />
        </div>

      </div>


    </div>

  )
}

export default LandingPage