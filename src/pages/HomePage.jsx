import React from 'react'
import DashboardNav from '../components/DashboardNav'
import { MdOutlineArrowOutward } from "react-icons/md";
import { HiArrowsUpDown } from "react-icons/hi2";
import { FaLongArrowAltDown } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";
import Chart from '../assets/chart.png'
import Pos from '../assets/pos.png'
import Neg from '../assets/neg.png'

import Coin from '../assets/coin.png'
import { FaEye } from "react-icons/fa";
import { BsCash } from 'react-icons/bs';


const HomePage = () => {
    return (

        <div className='px-3 sm:px-10 py-4 bg-[#F7F7F7] w-screen h-screen'>

            <DashboardNav />

            <p className='text-[#000] text-lg block md:hidden my-5 font-medium'>Welcome, Stuart</p>

            <div className='flex items-start gap-x-3 md:mt-[2rem] flex-wrap'>

                <div className='w-[25rem] mt-2'>

                    <div className='w-[100%] bg-[#FAF8F8] rounded-3xl shadow-xl border border-[#FFFEFE] py-3 px-5'>

                        <div className='flex justify-between items-center mt-3 sm:mt-7'>
                            <p className='text-[#a7a7a7] text-lg hidden md:block font-semibold'>Welcome, Stuart</p>
                            <p className='text-[#a7a7a7] text-lg md:hidden block'>Total Balance </p>
                            <MdOutlineArrowOutward className='text-xl' />
                        </div>

                        <div className='flex items-center gap-x-2 md:mt-2'>
                            <h1 className='text-2xl font-semibold '>$327,591,814,610</h1>
                            <FaEye className='pr-1 md:text-black text-[#FF8A65] text-xl'
                            />
                        </div>

                        <p className='text-[#a7a7a7] text-lg hidden md:block'>Total Balance ($USD)</p>

                        <div className='mt-10 sm:my-7'>
                            <p className='text-[#a7a7a7] text-sm'>Credit Balance</p>
                            <div className='flex items-center gap-x-2 mt-1'>
                                <img src={Coin} alt="" className='w-[2rem]' />
                                <h1 className='text-xl font-medium'>Đ 8,189,795,365,250</h1>
                            </div>
                        </div>


                    </div>

                    <div className='w-[100%] bg-[#FAF8F8] rounded-3xl shadow-xl border border-[#FFFEFE] py-3 px-5 mt-4'>

                        <div className='flex justify-between items-center mt-7'>
                            <p className='text-[#a7a7a7] text-lg'>Recent Transactions</p>
                            <MdOutlineArrowOutward className='text-xl' />
                        </div>

                        <div className='flex items-center gap-x-3 mt-2'>
                            <button className='bg-[#0197B2] text-white rounded-3xl py-1 px-2 text-sm'>Successful</button>
                            <button>Failed</button>
                        </div>


                        <div className='mt-3'>

                            <div className='flex justify-between items-start'>

                                <div className='flex gap-x-3 items-center'>
                                    <div className='w-[2rem] h-[2rem] rounded-full bg-[#0197B2] flex justify-center items-center'>
                                        <HiArrowsUpDown className={`text-white`} />
                                    </div>
                                    <div>
                                        <h1 className='font-medium sm:text-base text-sm'>Transfer to Stuart</h1>
                                        <p className='text-[#a7a7a7] text-sm'>Dec 7, 2024 23:26</p>
                                    </div>
                                </div>

                                <div>
                                    <h1 className='text-[#FF9500] text-sm sm:text-base sm:mb-0 mb-1'>-20 credits</h1>
                                    <button className='bg-[#C9FFD6] text-[#34C759] rounded-3xl py-1 px-2 text-xs'>Successful</button>
                                </div>

                            </div>

                            <div className='flex justify-between items-start mt-3'>

                                <div className='flex gap-x-3 items-center'>
                                    <div className='w-[2rem] h-[2rem] rounded-full bg-[#34C759] flex justify-center items-center'>
                                        <FaLongArrowAltDown className={`text-white`} />
                                    </div>
                                    <div>
                                        <h1 className='font-medium sm:text-base text-sm'>Received from Stuart</h1>
                                        <p className='text-[#a7a7a7] text-sm'>Dec 8, 2024 23:26</p>
                                    </div>
                                </div>

                                <div>
                                    <h1 className='text-[#0197B2] text-sm sm:text-base sm:mb-0 mb-1'>+1 credit</h1>
                                    <button className='bg-[#C9FFD6] text-[#34C759] rounded-3xl py-1 px-2 text-xs'>Successful</button>
                                </div>

                            </div>

                            <div className='flex justify-between items-start mt-3'>

                                <div className='flex gap-x-3 items-center'>
                                    <div className='w-[2rem] h-[2rem] rounded-full bg-[#00c7be] flex justify-center items-center'>
                                        <BsCash className={`text-white`} />
                                    </div>
                                    <div>
                                        <h1 className='font-medium sm:text-base text-sm'>Withdrawal</h1>
                                        <p className='text-[#a7a7a7] text-sm'>Dec 9, 2024 23:26</p>
                                    </div>
                                </div>

                                <div>
                                    <h1 className='text-[#FF9500] sm:text-base text-sm sm:mb-0 mb-1'>-1 credit</h1>
                                    <button className='bg-[#C9FFD6] text-[#34C759] rounded-3xl py-1 px-2 text-xs'>Successful</button>
                                </div>

                            </div>



                        </div>

                    </div>

                </div>

                <div className='mt-2 flex-1 '>
                    <div className='w-[100%] bg-[#FAF8F8] rounded-3xl shadow-xl border border-[#FFFEFE] py-3 px-5 h-[17rem] flex justify-center items-center'>
                        <img src={Chart} alt="" className='h-[15rem]' />
                    </div>

                    <div className='w-[100%] bg-[#FAF8F8] rounded-3xl shadow-xl border border-[#FFFEFE] py-3 px-3 sm:px-5 mt-4'>

                        <p className='text-lg  mt-7'>Credit Usage Trends</p>

                        <div className='my-2'>

                            <div className='flex justify-between items-center gap-x-1 sm:gap-x-3 flex-wrap'>

                                <div className='flex justify-between items-center bg-white px-2 sm:px-3 py-1 sm:mt-0 mt-2 sm:py-2 rounded-3xl flex-1'>

                                    <div className='flex gap-x-3 items-center'>
                                        <div className='w-[1.5rem] h-[1.5rem] sm:w-[2rem] sm:h-[2rem] rounded-full bg-[#FF9500] flex justify-center items-center'>
                                            <HiArrowsUpDown className={`text-white`} />
                                        </div>
                                        <div>
                                            <h1 className='font-medium'>1.9m</h1>
                                            <p className='text-[#a7a7a7] text-xs sm:text-sm'>Transfers</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h1 className='text-[#a7a7a7] text-sm sm:text-xl'>36%</h1>
                                    </div>

                                </div>

                                <div className='flex justify-between items-center bg-white px-2 sm:px-3 py-1 sm:mt-0 mt-2 sm:py-2 rounded-3xl flex-1'>

                                    <div className='flex gap-x-3 items-center'>
                                        <div className='w-[1.5rem] h-[1.5rem] sm:w-[2rem] sm:h-[2rem] rounded-full bg-[#735CD8] flex justify-center items-center'>
                                            <CiCreditCard1 className={`text-white`} />
                                        </div>
                                        <div>
                                            <h1 className='font-medium'>1.2m</h1>
                                            <p className='text-[#a7a7a7] text-xs sm:text-sm truncate'>Buying credits</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h1 className='text-[#a7a7a7] text-sm sm:text-xl'>24%</h1>
                                    </div>

                                </div>

                            </div>

                            <div className='flex justify-between gap-x-1 sm:gap-x-3 items-start mt-2 flex-wrap'>

                                <div className='flex justify-between items-center mt-2 sm:mt-0 bg-white px-2 sm:px-3 py-1 sm:py-2 rounded-3xl flex-1'>

                                    <div className='flex gap-x-3 items-center'>
                                        <div className='w-[1.5rem] h-[1.5rem] sm:w-[2rem] sm:h-[2rem] rounded-full bg-[#3478F7] flex justify-center items-center'>
                                            <FaLongArrowAltDown className={`text-white`} />
                                        </div>
                                        <div>
                                            <h1 className='font-medium'>1.0m</h1>
                                            <p className='text-[#a7a7a7] text-xs sm:text-sm'>Received</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h1 className='text-[#a7a7a7] text-sm sm:text-xl'>20%</h1>
                                    </div>

                                </div>

                                <div className='flex justify-between items-center mt-2 sm:mt-0 bg-white px-2 sm:px-3 py-1 sm:py-2 rounded-3xl flex-1'>

                                    <div className='flex gap-x-3 items-center'>
                                        <div className='w-[1.5rem] h-[1.5rem] sm:w-[2rem] sm:h-[2rem] rounded-full bg-[#F94D4D] flex justify-center items-center'>
                                            <BsCash className={`text-white`} />
                                        </div>
                                        <div>
                                            <h1 className='font-medium'>1.0m</h1>
                                            <p className='text-[#a7a7a7] text-xs sm:text-sm'>Withdrawal</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h1 className='text-[#a7a7a7] text-sm sm:text-xl'>20%</h1>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className='w-[25rem] mt-2'>

                    <div className='w-[100%] bg-[#FAF8F8] rounded-3xl shadow-xl border border-[#FFFEFE] py-3 px-5'>

                        <p className='text-lg mt-5'>Buy Credits</p>
                        <p className='text-[#a7a7a7] mt-1 text-sm'><span className='text-black'>Amount</span> - minimum of 1 credit</p>
                        <input type="number" name="" id="" placeholder='0.00' className='h-[2.5rem] rounded-md px-3 mt-2 outline-none bg-white w-[100%]' />
                        <p className='mt-3 text-sm'>Payment Method</p>
                        <div className='h-[2.5rem] rounded-md px-3 mt-2 outline-none bg-white w-[100%] flex justify-between items-center'>
                            <p>Select payment method</p>
                            <FaAngleRight />
                        </div>

                        <button className='bg-[#0197B2] text-white w-[100%] h-[2.5rem] rounded-md text-sm mt-2'>Confirm</button>


                    </div>

                    <div className='w-[100%] bg-[#FAF8F8] rounded-3xl shadow-xl border border-[#FFFEFE] py-3 px-5 mt-4 sm:mb-0 mb-4'>

                        <p className='text-lg mt-7'>Credits</p>

                        <div className='mt-3'>

                            <div className='flex justify-between items-start mt-3'>

                                <div className='flex gap-x-3 items-center'>
                                    <img src={Coin} alt="" className='h-[2rem]' />
                                    <div>
                                        <h1 className='font-medium'>1 Đ - <span className='text-[#a7a7a7] text-sm'>$0.04</span> </h1>
                                    </div>
                                </div>

                                <div className=' flex items-center gap-x-2'>
                                    <img src={Pos} alt="" />
                                    <h1 className='text-[#27c249]'>+32%</h1>
                                </div>

                            </div>

                            <div className='flex justify-between items-start mt-3'>

                                <div className='flex gap-x-3 items-center'>
                                    <img src={Coin} alt="" className='h-[2rem]' />
                                    <div>
                                        <h1 className='font-medium'>12 Đ - <span className='text-[#a7a7a7] text-sm'>$0.48</span> </h1>
                                    </div>
                                </div>

                                <div className=' flex items-center gap-x-2'>
                                    <img src={Neg} alt="" />
                                    <h1 className='text-[#ec3434]'>+0.2%</h1>
                                </div>

                            </div>

                            <div className='flex justify-between items-start mt-3'>

                                <div className='flex gap-x-3 items-center'>
                                    <img src={Coin} alt="" className='h-[2rem]' />
                                    <div>
                                        <h1 className='font-medium'>21 Đ - <span className='text-[#a7a7a7] text-sm'>$0.84</span> </h1>
                                    </div>
                                </div>

                                <div className=' flex items-center gap-x-2'>
                                    <img src={Pos} alt="" />
                                    <h1 className='text-[#27c249]'>+22%</h1>
                                </div>

                            </div>

                            <div className='flex justify-between items-start mt-3'>

                                <div className='flex gap-x-3 items-center'>
                                    <img src={Coin} alt="" className='h-[2rem]' />
                                    <div>
                                        <h1 className='font-medium'>55 Đ - <span className='text-[#a7a7a7] text-sm'>$2.20</span> </h1>
                                    </div>
                                </div>

                                <div className=' flex items-center gap-x-2'>
                                    <img src={Neg} alt="" />
                                    <h1 className='text-[#ec3434]'>-12%</h1>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}

export default HomePage