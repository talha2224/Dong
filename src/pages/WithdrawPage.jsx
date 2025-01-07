import React, { useState } from 'react'
import DashboardNav from '../components/DashboardNav'
import Coin from '../assets/coin.png'
import Loader from '../assets/loader.png'
import MasterCard from '../assets/mastercard.png'
import Transffered from '../assets/transferred.png'

import { FaAngleRight } from 'react-icons/fa6'
import { ImCross } from 'react-icons/im'

const WithdrawPage = () => {

    const [showDetails, setshowDetails] = useState(false)
    const [openProcessing, setopenProcessing] = useState(false)
    const [showTransffer, setshowTransffer] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (

        <div className='px-3 sm:px-10 py-4 bg-[#F7F7F7] w-screen h-screen'>
            <DashboardNav />
            <div className='flex justify-center items-center flex-col'>

                <div className='w-[100%] md:w-[70%] h-[5rem] rounded-md px-3 bg-[#FAF8F8] border border-[#FFFEFE] mt-10 flex justify-center items-center gap-x-7 flex-wrap'>
                    <div>
                        <h1 className='text-2xl font-semibold'>$327,591,814,610</h1>
                        <p className='text-[#a7a7a7]'>Total Balance ($USD)</p>
                    </div>
                    <div>
                        <div className='flex gap-x-3 items-center'>
                            <img src={Coin} alt="" className='h-[2rem]' />
                            <div>
                                <h1 className='font-medium'>Đ 8,189,795,365,250</h1>
                            </div>
                        </div>
                        <p className='text-[#a7a7a7]'>Credit Balance (Đ)</p>
                    </div>
                </div>


                <div className='w-[100%] sm:w-[30rem] bg-[#FAF8F8] rounded-3xl shadow-xl border border-[#FFFEFE] py-3 px-5 mt-10'>

                    <p className='text-xl mt-7'>Withdraw Funds</p>
                    <p className='text-[#FF8A65]'>A small fee of 1% or $5 applies when converting credits back to your currency</p>
                    <p className='text-[#000] mt-4 text-sm'>Amount</p>
                    <input type="number" name="" id="" placeholder='Enter Amount To Withdraw' className='h-[2.5rem] rounded-md px-3 mt-1 outline-none bg-white w-[100%]' />
                    <input type="number" name="" id="" placeholder='Đ 0' className='h-[2.5rem] rounded-md px-3 mt-5 outline-none bg-white w-[100%]' />

                    <p className='mt-8 text-sm'>Payment Method</p>
                    <div className='relative'>
                        <div className='h-[2.5rem] rounded-md px-3 mt-2 outline-none bg-white w-[100%] flex justify-between items-center cursor-pointer' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                            <p>Select payment method</p>
                            <FaAngleRight className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-90' : ''}`} /> {/* Rotate icon */}
                        </div>

                        {isDropdownOpen && (
                            <div className='absolute top-full left-0 w-full bg-white rounded-md shadow-lg mt-1 z-10'> {/* Dropdown content */}
                                <div onClick={() => { setIsDropdownOpen(!isDropdownOpen) }} className='px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-x-2'>
                                    <p>Card</p>
                                    <img src={MasterCard} alt="" />
                                </div>
                                <div onClick={() => { setIsDropdownOpen(!isDropdownOpen) }} className='px-3 py-2 hover:bg-gray-100 cursor-pointer'>Bank transfer</div>
                            </div>
                        )}
                    </div>
                    <button onClick={() => setshowDetails(true)} className='bg-[#0197B2] text-white w-[100%] h-[2.5rem] rounded-md text-sm mt-5'>Confirm</button>


                </div>

            </div>


            {
                showDetails && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"> {/* Modal Overlay */}
                        <div className="bg-white rounded-3xl p-6 w-[30rem] shadow-lg relative"> {/* Modal Content */}
                            <h2 className="text-lg font-medium text-center mb-4">Withdrawal to Bank</h2>

                            <div className="flex justify-center items-center gap-x-2 mb-6">
                                <div className="w-8 h-8 rounded-full bg-yellow-400 flex justify-center items-center">
                                    {/* You can replace with your actual icon */}
                                    <span className="text-white">W</span>
                                </div>
                                <div className='w-[2rem] h-[1px] bg-[#34C759] '></div>
                                <div className="w-8 h-8 rounded-full bg-yellow-400 flex justify-center items-center">
                                    <span className="text-white">P</span>
                                </div>
                                <div className='w-[2rem] h-[1px] bg-[#34C759]'></div>
                                <div className="w-8 h-8 rounded-full bg-green-400 flex justify-center items-center">
                                    <span className="text-white">R</span>
                                </div>
                            </div>
                            <div className="flex justify-center gap-x-1 text-xs text-gray-400 mb-4">
                                <span className='tex-xs'>Withdraw</span>
                                <span className='tex-xs'>Processing</span>
                                <span className='tex-xs'>Received</span>
                            </div>

                            <div className="bg-gray-100 p-4 rounded-lg mb-4"> {/* Details Section */}
                                <div className="flex justify-between mb-2">
                                    <span>Amount</span>
                                    <span>$2.00</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Fee</span>
                                    <span>0.8% $0.016</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Dong</span>
                                    <span>2</span>
                                </div>
                            </div>

                            <div className="bg-gray-100 p-4 rounded-lg"> {/* Transaction Details Section */}
                                <h3 className="text-base font-medium mb-2">Transaction details</h3>
                                <div className="flex justify-between mb-1 text-sm">
                                    <span>Type</span>
                                    <span>Bank</span>
                                </div>
                                <div className="flex justify-between mb-1 text-sm">
                                    <span>Trans No.</span>
                                    <span>439434353539573957</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Trans date.</span>
                                    <span>Dec 09, 2024 07:52</span>
                                </div>
                            </div>
                            <button onClick={() => { setshowDetails(false); setopenProcessing(true) }} className="bg-[#0197B2] text-white w-[100%] h-[2.5rem] rounded-md text-sm block my-3">Confirm</button>
                            <button onClick={() => setshowDetails(false)} className="border border-gray-400 text-gray-600 w-[100%] h-[2.5rem] rounded-md text-sm">Cancel</button>
                        </div>
                    </div>
                )
            }

            {
                openProcessing && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white rounded-3xl p-6 w-[30rem] shadow-lg relative">
                            <div className='flex justify-end items-end'><ImCross className='text-[#FFA800] cursor-pointer' onClick={() => setopenProcessing(false)} /></div>
                            <div className='flex justify-center items-center mt-4 flex-col'>
                                <img src={Loader} alt="" />
                                <h1 className='mt-2 text-xl text-[#FFA800]'>Processing...</h1>
                            </div>
                            <button onClick={() => { setshowTransffer(true); setopenProcessing(false) }} className="bg-[#0197B2] text-white w-[100%] h-[2.5rem] rounded-md text-sm block my-3">Confirm</button>
                        </div>
                    </div>
                )
            }

            {
                openProcessing && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white rounded-3xl p-6 w-[30rem] shadow-lg relative">
                            <div className='flex justify-end items-end'><ImCross className='text-[#FFA800] cursor-pointer' onClick={() => setopenProcessing(false)} /></div>
                            <div className='flex justify-center items-center mt-4 flex-col'>
                                <img src={Loader} alt="" />
                                <h1 className='mt-2 text-xl text-[#FFA800]'>Processing...</h1>
                            </div>
                            <button onClick={() => { setshowTransffer(true); setopenProcessing(false) }} className="bg-[#0197B2] text-white w-[100%] h-[2.5rem] rounded-md text-sm block my-3">Confirm</button>
                        </div>
                    </div>
                )
            }


            {
                showTransffer && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white rounded-3xl p-6 w-[30rem] shadow-lg relative">
                            <div className='flex justify-end items-end'><ImCross className='text-[#FFA800] cursor-pointer' onClick={() => setshowTransffer(false)} /></div>
                            <div className='flex justify-center items-center mt-4 flex-col'>
                                <img src={Transffered} alt="" />
                                <h1 className='mt-2 text-xl text-center'>Your withdrawal was <br />successful!</h1>
                                <p className='mt-2 text-sm text-[#a7a7a7]'>The funds will be processed shortly.</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default WithdrawPage
