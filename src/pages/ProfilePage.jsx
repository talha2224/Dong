import React, { useState } from 'react';
import DashboardNav from '../components/DashboardNav';
import { FaMinus, FaPlus, FaSignOutAlt, FaTrashAlt } from 'react-icons/fa';
import { LuSquareUserRound } from "react-icons/lu";
import { MdPrivacyTip, MdMessage } from "react-icons/md";
import { BiSolidMessageRounded } from "react-icons/bi";
import { Link } from 'react-router-dom';

const ProfilePage = () => {
    const [selectedNav, setSelectedNav] = useState('user-information');
    const [is2FAEnabled, setIs2FAEnabled] = useState(false); // State for 2FA toggle
    const [faqOpen, setFaqOpen] = useState({});

    const navigationOptions = [
        { name: 'User Information', icon: <LuSquareUserRound className='text-[#5856D6]' />, value: 'user-information' },
        { name: 'Security Settings', icon: <MdPrivacyTip className='text-[#34C759]' />, value: 'security-settings' },
        { name: 'FAQ', icon: <MdMessage className='text-[#FFCC00]' />, value: 'faq' },
        { name: 'Help & Support', icon: <BiSolidMessageRounded className='text-[#007AFF]' />, value: 'help-support' },
    ];

    const handleNavigationClick = (value) => {
        setSelectedNav(value);
    };

    const handle2FAToggle = () => {
        setIs2FAEnabled(!is2FAEnabled);
    };

    const faqData = [
        {
            question: 'How do I buy credits?',
            answer: 'To buy credits, log in to your account, go to the "Buy Credits" page, enter the amount you want to purchase, and choose your payment method.',
        },
        {
            question: 'Are there any fees for buying credits?',
            answer: 'There might be some processing fees depending on your chosen payment method. These fees will be clearly displayed before you confirm your purchase.',
        },
        {
            question: 'How do I transfer credits to another user?',
            answer: 'Go to the "Transfer Credits" page, enter the recipient\'s username and the amount you wish to transfer.',
        },
        {
            question: 'Is there a fee for transferring credits?',
            answer: 'No, there are currently no fees for transferring credits between users.',
        },
        {
            question: 'How do I withdraw credits to my bank account?',
            answer: 'Navigate to the "Withdrawal" page, enter the amount you want to withdraw, and select your linked bank account.',
        },
        {
            question: 'What fees apply for withdrawals?',
            answer: 'A small percentage-based fee applies to withdrawals. This fee is displayed on the withdrawal page before you confirm the transaction.',
        },
    ];

    const toggleFaq = (index) => {
        setFaqOpen({ ...faqOpen, [index]: !faqOpen[index] });
    };



    return (
        <div className='px-3 md:px-10 py-4 bg-[#F7F7F7] w-screen h-screen'>
            <DashboardNav />

            <div className='mt-0 sm:mt-[5rem] w-[100%] flex justify-center items-center'>
                <div className='w-[100%] md:w-[70%] flex justify-center items-start bg-white rounded-3xl shadow-xl p-8'>
                    {/* Settings Sidebar */}
                    <div className='w-1/4 pr-8 relative'>
                        <h2 className='text-lg font-medium mb-6'>Settings</h2>
                        <div className='space-y-3'>
                            {navigationOptions.map((option) => (
                                <div key={option.value} className={`flex items-center text-gray-600 hover:text-black cursor-pointer ${selectedNav === option.value ? 'font-medium' : ''} ${option.className || ''}`} onClick={() => handleNavigationClick(option.value)}>
                                    {option.icon}
                                    <p className='ml-2 text-nowrap truncate'>{option.name}</p>
                                </div>
                            ))}
                        </div>

                        <Link to={"/"} className={`flex items-center text-gray-600 hover:text-black cursor-pointer mt-4`}>
                            <FaSignOutAlt />
                            <p className='ml-2'>{"Logout"}</p>
                        </Link>
                    </div>

                    <div className='w-3/4 pl-8 border-l border-gray-200'>
                        {selectedNav === 'user-information' && (
                            <>
                                <div className='flex justify-between items-center flex-wrap'>
                                    <h2 className='text-lg font-medium mb-6'>User Information</h2>
                                    <div className='flex gap-x-3'>
                                        <button className='text-red-500 mr-4 flex items-center'>
                                            <FaTrashAlt className='mr-1' />Delete account
                                        </button>
                                        <button className='bg-blue-500 text-white px-4 py-2 rounded'>Save changes</button>
                                    </div>
                                </div>
                                <div className='flex flex-col mb-6'>
                                    <img className='w-24 h-24 rounded-full bg-gray-300 cursor-pointer' src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                                </div>
                                <div className='grid sm:grid-cols-2 gap-6'>
                                    <div>
                                        <p className='text-gray-600'>Username</p>
                                        <p className='mt-2 bg-gray-50 rounded-md p-3'>Stuart</p>
                                    </div>
                                    <div>
                                        <p className='text-gray-600'>Email Address</p>
                                        <p className='mt-2 bg-gray-50 rounded-md p-3'>Stuart@Dong.My</p>
                                    </div>
                                </div>
                            </>
                        )}
                        {selectedNav === 'security-settings' && (
                            <div>
                                <div className='flex justify-between items-center'>
                                    <h2 className='text-2xl'>Security Settings</h2>
                                    <button className='bg-blue-500 text-white px-4 py-2 rounded'>Save changes</button>
                                </div>
                                <h2 className='text-lg font-medium mt-6 mb-4'>Password reset</h2>
                                <div className='space-y-3'>
                                    <div>
                                        <p className='text-gray-600'>Old password</p>
                                        <input type="password" placeholder='Enter old password' className='mt-2 bg-white rounded-md p-3 w-full border border-gray-300' />
                                    </div>
                                    <div>
                                        <p className='text-gray-600'>New password</p>
                                        <input type="password" placeholder='Enter new password' className='mt-2 bg-white rounded-md p-3 w-full border border-gray-300' />
                                    </div>
                                    <div>
                                        <p className='text-gray-600'>Confirm new password</p>
                                        <input type="password" placeholder='Confirm new password' className='mt-2 bg-white rounded-md p-3 w-full border border-gray-300' />
                                    </div>
                                </div>

                                <h2 className='text-lg font-medium mt-6 mb-4'>2FA</h2>
                                <div className='flex gap-x-4 items-center'>
                                    <p>Enable/Disable 2FA</p>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" value="" className="sr-only peer outline-none" checked={is2FAEnabled} onChange={handle2FAToggle} />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>

                        )}
                        {selectedNav === 'faq' && (
                            <div>
                                <h2 className='text-lg font-medium mb-6'>FAQ</h2>
                                <div className='space-y-4'>
                                    {faqData.map((item, index) => (
                                        <div key={index} className='bg-gray-50 rounded-lg p-4'>
                                            <div className='flex justify-between items-center cursor-pointer' onClick={() => toggleFaq(index)}>
                                                <p className='font-medium'>{item.question}</p>
                                                {faqOpen[index] ? <FaPlus /> : <FaMinus />}
                                            </div>
                                            {faqOpen[index] && (
                                                <div className='mt-2 text-gray-600'>
                                                    {item.answer}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {selectedNav === 'help-support' && (
                            <div>
                                <h2 className='text-lg font-medium mb-6'>Help & Support</h2>
                                <h3 className='text-base font-medium mb-4 text-[#0197B2]'>Contact form</h3>
                                <div className='space-y-3'>
                                    <div>
                                        <p className='text-gray-600'>Username</p>
                                        <input type="text" placeholder='Enter username' className='mt-2 bg-white outline-none rounded-md p-3 w-full border border-gray-300' />
                                    </div>
                                    <div>
                                        <p className='text-gray-600'>Email address</p>
                                        <input type="email" placeholder='Enter your email' className='mt-2 bg-white outline-none rounded-md p-3 w-full border border-gray-300' />
                                    </div>
                                    <div>
                                        <p className='text-gray-600'>Message</p>
                                        <textarea placeholder='Message' className='mt-2 bg-white outline-none rounded-md p-3 w-full border border-gray-300 h-24 resize-none'></textarea> {/* Added textarea and resize-none */}
                                    </div>
                                </div>
                                <button className='bg-[#0197B2] text-white px-6 py-3 rounded-md mt-6'>Submit</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;