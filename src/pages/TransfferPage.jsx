import React, { useRef, useState } from 'react'
import DashboardNav from '../components/DashboardNav'
import Coin from '../assets/coin.png'
import Message from '../assets/message.svg'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { FaEye } from 'react-icons/fa'

const TransfferPage = () => {

    const [showMessage, setshowMessage] = useState(false)
    const [showQrCode, setshowQrCode] = useState(false)
    const qrCodeImageRef = useRef(null);

    const showMessageFunc = () => {
        setshowMessage(true)
        setTimeout(() => {
            setshowMessage(false)
        }, 3000);
    }
    const handleDownload = () => {
        if (qrCodeImageRef.current) {
            const link = document.createElement('a');
            link.href = qrCodeImageRef.current.src;
            link.download = 'qrcode.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };


    const randomQrCodeUrl = `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png`; // Replace YOUR_API_KEY

    return (

        <div className='px-3 sm:px-10 py-4 bg-[#F7F7F7] w-screen h-screen'>
            <DashboardNav />

            <div className='flex justify-center items-center flex-col'>

                <div className='w-[100%] md:w-[70%] h-[5rem] rounded-md px-3 bg-[#FAF8F8] border border-[#FFFEFE] mt-10 hidden sm:flex justify-center items-center gap-x-7 flex-wrap'>
                    <div className='sm:mt-0 mt-1'>
                        <p className='text-[#a7a7a7] sm:text-base text-sm'>Total Balance ($USD)</p>
                        <h1 className='text-2xl font-semibold'>$327,591,814,610</h1>
                    </div>
                    <div className='sm:mt-0 mt-1'>
                        <p className='text-[#a7a7a7] sm:text-base text-sm'>Credit Balance (Đ)</p>
                        <div className='flex gap-x-3 items-center'>
                            <img src={Coin} alt="" className='h-[2rem]' />
                            <div>
                                <h1 className='font-medium'>Đ 8,189,795,365,250</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-[100%] bg-[#FAF8F8] rounded-3xl shadow-xl border border-[#FFFEFE] mt-10 py-3 px-5 sm:hidden'>

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


                <div className='w-[100%] sm:w-[30rem] bg-[#FAF8F8] shadow-xl rounded-3xl border border-[#FFFEFE] py-3 px-5 mt-3 sm:mt-10 sm:mb-0 mb-4'>

                    <p className='text-lg mt-7'>Transfer Credits</p>
                    <p className='text-[#000] mt-4 text-sm'>User ID</p>
                    <input type="text" name="" id="" placeholder='ID' className='h-[2.5rem] rounded-md px-3 mt-1 outline-none bg-white w-[100%]' />
                    <p className='text-[#000] mt-4 text-sm'>Amount - <span className=' text-gray-400'>minimum of 1 Dong</span></p>
                    <input type="number" name="" id="" placeholder='0.00' className='h-[2.5rem] rounded-md px-3 mt-1 outline-none bg-white w-[100%]' />

                    <div className='h-[2.8rem] rounded-md px-3 mt-4 outline-none bg-white w-[100%] flex justify-between items-center cursor-pointer' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <input type='text' className='text-[#a7a7a7] bg-transparent flex-1 outline-none' placeholder='Enter Pin'/>
                        {/* <button className='text-white bg-red-600 px-2 py-1 rounded-md text-sm'>Send Code</button> */}
                    </div>
                    <button onClick={showMessageFunc} className='bg-[#0197B2] text-white w-[100%] h-[2.5rem] rounded-md text-sm mt-5'>Confirm</button>

                    <p className='text-lg text-center mt-3 '>OR</p>

                    <button onClick={() => setshowQrCode(true)} className='border border-[#0197B2] text-[#0197B2] w-[100%] h-[2.5rem] rounded-md text-sm mt-2'>Share a QR Code</button>

                </div>

            </div>


            {showMessage &&
                <div className='fixed top-[6rem] right-[30%] '>
                    <img src={Message} alt="" className=' cursor-pointer' onClick={() => setshowMessage(false)} />
                </div>
            }

            {showQrCode && (
                <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg flex flex-col items-center'>
                    <img src={randomQrCodeUrl} alt="Random QR Code" ref={qrCodeImageRef} className='h-[14rem]' />
                    <div className='mt-4 flex gap-x-3'>
                        <button onClick={handleDownload} className="bg-[#0197B2] text-white px-4 py-2 rounded">Download</button>
                        <button onClick={() => setshowQrCode(false)} className="bg-gray-300 px-4 py-2 rounded">Close</button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default TransfferPage