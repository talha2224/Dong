import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import Img from '../assets/img.jpg';
import HamburgerOff from '../assets/off.svg';
import HamburgerOn from '../assets/on.svg';
import { Link, useLocation } from 'react-router-dom';
import { VscBellDot } from "react-icons/vsc";
import { MdDashboard } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { BiTransfer } from "react-icons/bi";
import { PiHandWithdraw } from "react-icons/pi";
import { RiHistoryFill, RiHomeLine } from "react-icons/ri";
import { FaRegUser, FaUser } from 'react-icons/fa'; // Import user icon

const DashboardNav = () => {
    const location = useLocation().pathname.split("/")[1];
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    const activeColor = "#000";
    const inactiveColor = "#808080";
    const iconColors = {
        home: "#FFA500", // Orange
        buy: "#8A2BE2", // BlueViolet
        transfer: "#FFA500", // Green
        withdraw: "#DC143C", // Crimson
        history: "#008B8B", // DarkCyan
        notifications: "#FF0000", // Red
        profile: "#34C759" // Purple
    };
    return (
        <div className='flex justify-between items-center relative'> {/* Added relative positioning */}
            <Link to={"/home"} className='flex items-center gap-x-2 cursor-pointer'>
                <img src={Logo} alt="" className='h-[2rem]' />
                <p className='text-2xl font-medium'>Dong</p>
            </Link>

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
                <Link to={"/notification"} className='w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center bg-white cursor-pointer'>
                    <VscBellDot className='text-xl' />
                </Link>

                <Link to={"/profile"}>
                    <img className='w-[2.5rem] h-[2.5rem] rounded-full bg-center ' src={Img} alt="" />
                </Link>
            </div>

            {/* Mobile Navigation (Visible on smaller screens) */}
            <div className='lg:hidden block relative'>

                <div className={`${!isMobileNavOpen && "bg-white rounded-full"} p-2 `}>
                    <img src={isMobileNavOpen ? HamburgerOn : HamburgerOff} alt="" className={`cursor-pointer ${isMobileNavOpen && "w-[1.8rem] "}`} onClick={toggleMobileNav} />
                </div>

                {isMobileNavOpen && (
                    <div className='absolute top-4 right-0 bg-[#E2E5E6] rounded-lg shadow-lg mt-10 w-[14rem] z-10'>
                        {[
                            { to: "/home", icon: <RiHomeLine />, text: "Home", color: iconColors.home },
                            { to: "/buy", icon: <CiCreditCard1 />, text: "Buy Credits", color: iconColors.buy },
                            { to: "/transfer", icon: <BiTransfer />, text: "Transfer Credits", color: iconColors.transfer },
                            { to: "/withdraw", icon: <PiHandWithdraw />, text: "Withdraw", color: iconColors.withdraw },
                            { to: "/history", icon: <RiHistoryFill />, text: "Transactions", color: iconColors.history },
                            { to: "/notification", icon: <VscBellDot />, text: "Notifications", color: iconColors.notifications },
                            { to: "/profile", icon: <FaRegUser className='' />, text: "Profile", color: iconColors.profile },
                        ].map((link, index) => (
                            <Link key={index} to={link.to} className={`px-4 py-2 ${link.to.includes(location) && "bg-[#fff] m-1 rounded-xl"} flex items-center`}>
                                <div className="flex items-center w-full"> {/* Added w-full here */}
                                    {React.cloneElement(link.icon, { className: `mr-2 text-xl`, style: { color: link.color } })}
                                    <span>{link.text}</span> {/* Use a span for the text */}
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardNav;