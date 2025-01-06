import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import Img from '../assets/img.jpg';
import Hamburger from '../assets/hamburger.png';
import { Link, useLocation } from 'react-router-dom';
import { VscBellDot } from "react-icons/vsc";
import { MdDashboard } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { BiTransfer } from "react-icons/bi";
import { PiHandWithdraw } from "react-icons/pi";
import { RiHistoryFill } from "react-icons/ri";
import { FaUser } from 'react-icons/fa'; // Import user icon

const DashboardNav = () => {
    const location = useLocation().pathname.split("/")[1];
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    return (
        <div className='flex justify-between items-center relative'> {/* Added relative positioning */}
            <div className='flex items-center gap-x-2'>
                <img src={Logo} alt="" className='h-[2rem]' />
                <p className='text-2xl font-medium'>Dong</p>
            </div>

            {/* Desktop Navigation (Hidden on smaller screens) */}
            <div className='hidden lg:flex items-center gap-x-4 bg-white px-4 py-2 rounded-[4rem]'>
               {/* ... (Desktop Links - same as before) */}
               <Link to={"/home"} className={`flex items-center gap-x-2 py-2 px-4 rounded-3xl ${location === "home" ? "bg-black" : ""}`} >
                    <MdDashboard className={`${location === "home" ? "text-[#ffff]" : "text-[#000]"}`} />
                    <p className={` ${location === "home" ? "text-[#ffff]" : "text-[#000]"}`}>Dashboard</p>
                </Link>

                <Link to={"/buy"} className={`flex items-center gap-x-2 py-2 px-4 rounded-3xl ${location === "buy" ? "bg-black" : ""}`} >
                    <CiCreditCard1 className={`${location === "buy" ? "text-[#ffff]" : "text-[#000]"}`} />
                    <p className={` ${location === "buy" ? "text-[#ffff]" : "text-[#000]"}`}>Buy Credits</p>
                </Link>
                <Link to={"/transfer"} className={`flex items-center gap-x-2 py-2 px-4 rounded-3xl ${location === "transfer" ? "bg-black" : ""}`} >
                    <BiTransfer className={`${location === "transfer" ? "text-[#ffff]" : "text-[#000]"}`} />
                    <p className={` ${location === "transfer" ? "text-[#ffff]" : "text-[#000]"}`}>Transfer Credits</p>
                </Link>
                <Link to={"/withdraw"} className={`flex items-center gap-x-2 py-2 px-4 rounded-3xl ${location === "withdraw" ? "bg-black" : ""}`} >
                    <PiHandWithdraw className={`${location === "withdraw" ? "text-[#ffff]" : "text-[#000]"}`} />
                    <p className={` ${location === "withdraw" ? "text-[#ffff]" : "text-[#000]"}`}>Withdrawal</p>
                </Link>
                <Link to={"/history"} className={`flex items-center gap-x-2 py-2 px-4 rounded-3xl ${location === "history" ? "bg-black" : ""}`} >
                    <RiHistoryFill className={`${location === "history" ? "text-[#ffff]" : "text-[#000]"}`} />
                    <p className={` ${location === "history" ? "text-[#ffff]" : "text-[#000]"}`}>Transaction History</p>
                </Link>
            </div>

            <div className='hidden lg:flex items-center gap-x-4'>
                {/* ... (Notification and profile icon - same as before) */}
                <Link to={"/profile"} className='w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center bg-white cursor-pointer'>
                    <VscBellDot className='text-xl' />
                </Link>

                <Link to={"/profile"}>
                    <img className='w-[2.5rem] h-[2.5rem] rounded-full bg-center ' src={Img} alt="" />
                </Link>
            </div>

            {/* Mobile Navigation (Visible on smaller screens) */}
            <div className='lg:hidden block relative'> {/* Added relative positioning */}
                <img src={Hamburger} alt="" className='cursor-pointer' onClick={toggleMobileNav} />

                {isMobileNavOpen && (
                    <div className='absolute top-full right-0 bg-white rounded-lg shadow-lg mt-2 w-48 z-10'> {/* Dropdown container */}
                        <Link to="/home" className='block px-4 py-2 hover:bg-gray-100' onClick={toggleMobileNav}>
                            <div className='flex items-center'><MdDashboard className='mr-2'/>Home</div>
                        </Link>
                        <Link to="/buy" className='block px-4 py-2 hover:bg-gray-100' onClick={toggleMobileNav}>
                            <div className='flex items-center'><CiCreditCard1 className='mr-2'/>Buy Credits</div>
                        </Link>
                        <Link to="/transfer" className='block px-4 py-2 hover:bg-gray-100' onClick={toggleMobileNav}>
                            <div className='flex items-center'><BiTransfer className='mr-2'/>Transfer Credits</div>
                        </Link>
                        <Link to="/withdraw" className='block px-4 py-2 hover:bg-gray-100' onClick={toggleMobileNav}>
                            <div className='flex items-center'><PiHandWithdraw className='mr-2'/>Withdrawal</div>
                        </Link>
                        <Link to="/history" className='block px-4 py-2 hover:bg-gray-100' onClick={toggleMobileNav}>
                           <div className='flex items-center'><RiHistoryFill className='mr-2'/>Transactions</div>
                        </Link>
                        <Link to="/profile" className='block px-4 py-2 hover:bg-gray-100' onClick={toggleMobileNav}>
                            <div className='flex items-center'><VscBellDot className='mr-2'/>Notifications</div>
                        </Link>
                        <Link to="/profile" className='block px-4 py-2 hover:bg-gray-100 rounded-b-lg' onClick={toggleMobileNav}>
                        <div className='flex items-center'><FaUser className='mr-2'/>Profile</div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardNav;