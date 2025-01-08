import React from 'react';
import DashboardNav from '../components/DashboardNav';
import { FaArrowDown, FaArrowUp, FaExchangeAlt, FaCheckCircle, FaLongArrowAltDown } from 'react-icons/fa'; // Import icons
import { FaDeleteLeft } from "react-icons/fa6";
import { BsCash } from 'react-icons/bs';
import { HiArrowsUpDown } from 'react-icons/hi2';

const HistoryPage = () => {
    const transactions = [
        { type: 'Withdrawal', amount: '-1 credit', date: 'Dec 8, 2024 07:32', status: 'Success' },
        { type: 'Received from Diiiiiirrr...', amount: '+1 credit', date: 'Dec 8, 2024 23:26', status: 'Success' },
        { type: 'Transfer to 00cb4yrrm...', amount: '-20 credit', date: 'Dec 7, 2024 23:26', status: 'Success' },
    ];

    return (
        <div className='px-3 sm:px-10 py-4 bg-[#F7F7F7] w-screen h-screen'>
            <DashboardNav />

            <div className='flex justify-center items-center'>

                <div className='mt-[6rem] bg-white rounded-3xl shadow-xl p-2 sm:p-6 lg:w-[55%]'>

                    <div className='flex justify-between items-center flex-wrap gap-x-3'>
                        <h2 className='text-lg font-medium mt-2'>Recent transactions</h2>
                        <div className='flex items-center gap-x-3 mt-2'>
                            <button className='bg-[#0197B2] text-white rounded-3xl py-1 px-2 text-sm'>Successful</button>
                            <button>Failed</button>
                        </div>
                    </div>

                    <div className='mt-6'>
                        {transactions.map((transaction, index) => (
                            <div key={index} className='flex items-center justify-between mt-3'>
                                <div className='flex items-center'>
                                    {transaction.type === 'Withdrawal' && <div className='w-[1.9rem] h-[1.9rem] mr-2 rounded-full bg-[#00c7be] flex justify-center items-center'>
                                        <BsCash className={`text-white`} />
                                    </div>}
                                    {transaction.type === 'Received from Diiiiiirrr...' && <div className='w-[1.9rem] h-[1.9rem] mr-2 rounded-full bg-[#34C759] flex justify-center items-center'>
                                        <FaLongArrowAltDown className={`text-white`} />
                                    </div>}
                                    {transaction.type === 'Transfer to 00cb4yrrm...' && <div className='w-[1.9rem] h-[1.9rem] mr-2  rounded-full bg-[#0197B2] flex justify-center items-center'>
                                        <HiArrowsUpDown className={`text-white`} />
                                    </div>}
                                    <div>
                                        <p className='text-sm font-medium text-nowrap truncate'>{transaction.type}</p>
                                        <p className='text-xs text-gray-400'>{transaction.date}</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-x-1 sm:gap-x-2'>
                                    <div>
                                        <p className={`text-sm mr-2 ${transaction.amount.startsWith('+') ? 'text-[#00c7be]' : 'text-[#ff9500]'}`}>{transaction.amount}</p>
                                        <button className='bg-[#C9FFD6] text-[#34C759] rounded-3xl py-[2px] px-2 text-xs'>Successful</button>
                                    </div>
                                    <FaDeleteLeft className='text-red-500' />
                                    <div className='text-gray-400'>&gt;</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    );
};

export default HistoryPage;