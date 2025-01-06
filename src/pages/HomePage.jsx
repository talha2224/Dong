import React from 'react'
import DashboardNav from '../components/DashboardNav'
import { MdOutlineArrowOutward } from "react-icons/md";
import { HiArrowsUpDown } from "react-icons/hi2";
import { FaLongArrowAltDown } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";
import Chart from '../assets/chart.png'
import Coin from '../assets/coin.png'
import Line from '../assets/line.png'
import { HiArrowSmUp } from 'react-icons/hi';


const HomePage = () => {
    return (

        <div className='px-3 sm:px-10 py-4 bg-[#F7F7F7] w-screen h-screen'>

            <DashboardNav />

            <div className='flex items-start gap-x-3 mt-[2rem] flex-wrap'>

                <div className='w-[25rem] mt-2'>

                    <div className='w-[100%] bg-[#FAF8F8] rounded-3xl shadow-xl border border-[#FFFEFE] py-3 px-5'>

                        <div className='flex justify-between items-center mt-7'>
                            <p className='text-[#a7a7a7] text-lg'>Welcome, Stuart</p>
                            <MdOutlineArrowOutward className='text-xl' />
                        </div>

                        <h1 className='text-2xl font-semibold mt-2'>$327,591,814,610</h1>
                        <p className='text-[#a7a7a7] text-lg'>Total Balance ($USD)</p>

                        <div className='my-7'>
                            <p className='text-[#a7a7a7] text-lg'>Credit Balance (Đ)</p>
                            <h1 className='text-2xl font-medium'>Đ 8,189,795,365,250</h1>
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
                                        <h1 className='font-medium'>Tranffer to Stuart</h1>
                                        <p className='text-[#a7a7a7] text-sm'>Dec 7, 2024</p>
                                    </div>
                                </div>

                                <div>
                                    <h1 className='text-[#FF9500]'>-20 credits</h1>
                                    <button className='bg-[#C9FFD6] text-[#34C759] rounded-3xl py-1 px-2 text-sm'>Successful</button>
                                </div>

                            </div>

                            <div className='flex justify-between items-start mt-3'>

                                <div className='flex gap-x-3 items-center'>
                                    <div className='w-[2rem] h-[2rem] rounded-full bg-[#34C759] flex justify-center items-center'>
                                        <FaLongArrowAltDown className={`text-white`} />
                                    </div>
                                    <div>
                                        <h1 className='font-medium'>Recieved from Stuart</h1>
                                        <p className='text-[#a7a7a7] text-sm'>Dec 7, 2024</p>
                                    </div>
                                </div>

                                <div>
                                    <h1 className='text-[#FF9500]'>+20 credits</h1>
                                    <button className='bg-[#C9FFD6] text-[#34C759] rounded-3xl py-1 px-2 text-sm'>Successful</button>
                                </div>

                            </div>

                            <div className='flex justify-between items-start mt-3'>

                                <div className='flex gap-x-3 items-center'>
                                    <div className='w-[2rem] h-[2rem] rounded-full bg-[#0197B2] flex justify-center items-center'>
                                        <HiArrowsUpDown className={`text-white`} />
                                    </div>
                                    <div>
                                        <h1 className='font-medium'>Tranffer to Stuart</h1>
                                        <p className='text-[#a7a7a7] text-sm'>Dec 7, 2024</p>
                                    </div>
                                </div>

                                <div>
                                    <h1 className='text-[#FF9500]'>-20 credits</h1>
                                    <button className='bg-[#C9FFD6] text-[#34C759] rounded-3xl py-1 px-2 text-sm'>Successful</button>
                                </div>

                            </div>



                        </div>

                    </div>

                </div>

                <div className='mt-2 flex-1 '>
                    <div className='w-[100%] bg-[#FAF8F8] rounded-3xl shadow-xl border border-[#FFFEFE] py-3 px-5 h-[17rem] flex justify-center items-center'>
                        <img src={Chart} alt="" className='h-[15rem]' />
                    </div>

                    <div className='w-[100%] bg-[#FAF8F8] rounded-3xl shadow-xl border border-[#FFFEFE] py-3 px-5 mt-4'>

                        <p className='text-lg  mt-7'>Credit Usage Trend</p>

                        <div className='my-2'>
                            <div className='flex justify-between items-center gap-x-3 flex-wrap'>

                                <div className='flex justify-between items-center bg-white px-3 py-2 rounded-3xl flex-1'>

                                    <div className='flex gap-x-3 items-center'>
                                        <div className='w-[2rem] h-[2rem] rounded-full bg-[#FF9500] flex justify-center items-center'>
                                            <HiArrowsUpDown className={`text-white`} />
                                        </div>
                                        <div>
                                            <h1 className='font-medium'>1.9m</h1>
                                            <p className='text-[#a7a7a7] text-sm'>transfer</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h1 className='text-[#a7a7a7] text-xl'>36%</h1>
                                    </div>

                                </div>

                                <div className='flex justify-between items-center bg-white px-3 py-2 rounded-3xl flex-1'>

                                    <div className='flex gap-x-3 items-center'>
                                        <div className='w-[2rem] h-[2rem] rounded-full bg-[#735CD8] flex justify-center items-center'>
                                            <CiCreditCard1 className={`text-white`} />
                                        </div>
                                        <div>
                                            <h1 className='font-medium'>1.9m</h1>
                                            <p className='text-[#a7a7a7] text-sm'>buying request</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h1 className='text-[#a7a7a7] text-xl'>36%</h1>
                                    </div>

                                </div>

                            </div>
                            <div className='flex justify-between items-start mt-3 flex-wrap'>

                                <div className='flex justify-between items-center bg-white px-3 py-2 rounded-3xl flex-1'>

                                    <div className='flex gap-x-3 items-center'>
                                        <div className='w-[2rem] h-[2rem] rounded-full bg-[#FF9500] flex justify-center items-center'>
                                            <HiArrowsUpDown className={`text-white`} />
                                        </div>
                                        <div>
                                            <h1 className='font-medium'>1.9m</h1>
                                            <p className='text-[#a7a7a7] text-sm'>transfer</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h1 className='text-[#a7a7a7] text-xl'>36%</h1>
                                    </div>

                                </div>

                                <div className='flex justify-between items-center bg-white px-3 py-2 rounded-3xl flex-1'>

                                    <div className='flex gap-x-3 items-center'>
                                        <div className='w-[2rem] h-[2rem] rounded-full bg-[#735CD8] flex justify-center items-center'>
                                            <CiCreditCard1 className={`text-white`} />
                                        </div>
                                        <div>
                                            <h1 className='font-medium'>1.9m</h1>
                                            <p className='text-[#a7a7a7] text-sm'>buying request</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h1 className='text-[#a7a7a7] text-xl'>36%</h1>
                                    </div>

                                </div>


                            </div>
                            <div className='flex justify-between items-start mt-3 flex-wrap'>

                                <div className='flex justify-between items-center bg-white px-3 py-2 rounded-3xl flex-1'>

                                    <div className='flex gap-x-3 items-center'>
                                        <div className='w-[2rem] h-[2rem] rounded-full bg-[#34C759] flex justify-center items-center'>
                                            <FaLongArrowAltDown className={`text-white`} />
                                        </div>
                                        <div>
                                            <h1 className='font-medium'>1.9m</h1>
                                            <p className='text-[#a7a7a7] text-sm'>withdraws</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h1 className='text-[#a7a7a7] text-xl'>36%</h1>
                                    </div>

                                </div>

                                <div className='flex justify-between items-center bg-white px-3 py-2 rounded-3xl flex-1'>

                                    <div className='flex gap-x-3 items-center'>
                                        <div className='w-[2rem] h-[2rem] rounded-full bg-[#0197B2] flex justify-center items-center'>
                                            <HiArrowSmUp className={`text-white`} />
                                        </div>
                                        <div>
                                            <h1 className='font-medium'>1.9m</h1>
                                            <p className='text-[#a7a7a7] text-sm'>received</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h1 className='text-[#a7a7a7] text-xl'>36%</h1>
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

                    <div className='w-[100%] bg-[#FAF8F8] rounded-3xl shadow-xl border border-[#FFFEFE] py-3 px-5 mt-4'>

                        <p className='text-lg mt-7'>Credits</p>

                        <div className='mt-3'>

                            <div className='flex justify-between items-start mt-3'>

                                <div className='flex gap-x-3 items-center'>
                                    <img src={Coin} alt="" className='h-[2rem]' />
                                    <div>
                                        <h1 className='font-medium'>Tranffer to Stuart</h1>
                                        <p className='text-[#a7a7a7] text-sm'>Dec 7, 2024</p>
                                    </div>
                                </div>

                                <div>
                                    <img src={Line} alt="" />
                                    <h1 className='text-[#FF9500]'>-20 coin</h1>
                                </div>

                            </div>

                            <div className='flex justify-between items-start mt-3'>

                                <div className='flex gap-x-3 items-center'>
                                    <img src={Coin} alt="" className='h-[2rem]' />
                                    <div>
                                        <h1 className='font-medium'>Tranffer to Stuart</h1>
                                        <p className='text-[#a7a7a7] text-sm'>Dec 7, 2024</p>
                                    </div>
                                </div>

                                <div>
                                    <img src={Line} alt="" />
                                    <h1 className='text-[#FF9500]'>-20 coin</h1>
                                </div>

                            </div>

                            <div className='flex justify-between items-start mt-3'>

                                <div className='flex gap-x-3 items-center'>
                                    <img src={Coin} alt="" className='h-[2rem]' />
                                    <div>
                                        <h1 className='font-medium'>Tranffer to Stuart</h1>
                                        <p className='text-[#a7a7a7] text-sm'>Dec 7, 2024</p>
                                    </div>
                                </div>

                                <div>
                                    <img src={Line} alt="" />
                                    <h1 className='text-[#FF9500]'>-20 coin</h1>
                                </div>

                            </div>

                            <div className='flex justify-between items-start mt-3'>

                                <div className='flex gap-x-3 items-center'>
                                    <img src={Coin} alt="" className='h-[2rem]' />
                                    <div>
                                        <h1 className='font-medium'>Tranffer to Stuart</h1>
                                        <p className='text-[#a7a7a7] text-sm'>Dec 7, 2024</p>
                                    </div>
                                </div>

                                <div>
                                    <img src={Line} alt="" />
                                    <h1 className='text-[#FF9500]'>-20 coin</h1>
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