import React, { useState } from 'react'
import DashboardNav from '../components/DashboardNav'
import Coin from '../assets/coin.png'
import Line from '../assets/line.png'
import Cards from '../assets/visa.png'
import MasterCard from '../assets/mastercard.png'
import Add from '../assets/add.png'
import { FaAngleRight } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

const BuyPage = () => {

    const [openModel, setopenModel] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const data = [1, 2, 3, 4, 5]

    return (

        <div className='px-3 sm:px-10 py-4 bg-[#F7F7F7] w-screen h-screen'>
            <DashboardNav />

            <div className='flex justify-center items-start gap-x-7 mt-[2rem] flex-wrap'>

                <div className='w-[25rem] mt-2'>

                    <div className='w-[100%] bg-[#FAF8F8] rounded-3xl shadow-xl border border-[#FFFEFE] py-3 px-5'>

                        <p className='text-lg mt-7'>Buy Credits</p>
                        <p className='text-[#a7a7a7] mt-1 text-sm'><span className='text-black'>Amount</span> - minimum of 1 credit</p>
                        <input type="number" name="" id="" placeholder='0.00' className='h-[2.5rem] rounded-md px-3 mt-4 outline-none bg-white w-[100%]' />
                        <p className='mt-8 text-sm'>Payment Method</p>
                        <div className='relative'> {/* Make this div relative for positioning */}
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

                        <button className='bg-[#0197B2] text-white w-[100%] h-[2.5rem] rounded-md text-sm mt-5'>Confirm</button>


                    </div>

                </div>

                <div className='mt-2 flex justify-center items-center flex-col '>
                    <img src={Cards} alt="" />
                    <img src={Add} alt="" className='mt-3 cursor-pointer' onClick={() => setopenModel(!openModel)} />
                </div>

                <div className='w-[25rem] mt-2'>


                    <div className='w-[100%] bg-[#FAF8F8] rounded-3xl shadow-xl border border-[#FFFEFE] py-3 px-5'>

                        <p className='text-lg mt-7'>Credits</p>

                        <div className='mt-3'>

                            {
                                data?.map((item, index) => (
                                    <div key={item} className='flex justify-between items-start mt-3'>

                                        <div className='flex gap-x-3 items-center'>
                                            <img src={Coin} alt="" className='h-[2rem]' />
                                            <div>
                                                <h1 className='font-medium'>1 Đ - $0.04 - <span className='text-[#a7a7a7] text-sm'>$0.04</span></h1>
                                            </div>
                                        </div>

                                        <div className='flex items-center gap-x-2'>
                                            <img src={Line} alt="" />
                                            <h1 className='text-[#34C759]'>+32%</h1>
                                        </div>

                                    </div>
                                ))
                            }


                        </div>

                    </div>

                </div>



            </div>

            {openModel && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"> {/* z-index for overlay */}
                    <div className="bg-white rounded-2xl p-6 w-[25rem] shadow-lg">
                        <div className="flex justify-between items-center mb-4">
                            <div className='flex items-center gap-x-2'>
                                <h2 className="text-lg font-medium">Add new card</h2>
                                <img src={MasterCard} alt="" />
                            </div>
                            <ImCross onClick={() => setopenModel(false)} className='cursor-pointer' />
                        </div>

                        <input type="text" placeholder="Card name" className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 outline-none" />
                        <input type="text" placeholder="Card number" className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 outline-none" />
                        <div className="flex gap-x-2">
                            <input type="text" placeholder="MM/YY" className="w-1/2 border border-gray-300 rounded-md px-3 py-2 mb-3 outline-none" />
                            <input type="text" placeholder="CVV" className="w-1/2 border border-gray-300 rounded-md px-3 py-2 mb-3 outline-none" />
                        </div>
                        <button className="bg-[#0197B2] text-white w-full h-[2.5rem] rounded-md text-sm mt-2" onClick={() => setopenModel(false)}>Confirm</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default BuyPage