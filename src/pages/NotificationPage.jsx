import React from 'react'
import DashboardNav from '../components/DashboardNav'

const NotificationPage = () => {
    return (
        <div className='px-3 sm:px-10 py-4 bg-[#F7F7F7] w-screen h-screen'>
            <DashboardNav />
            <div className='flex justify-center items-center flex-col mt-10'>
                <div className='w-[100%] md:w-[50%] rounded-2xl sm:rounded-md px-3 sm:bg-[#fff] bg-[#E2E5E6] mt-10 p-5 sm:p-3'>
                    <h1 className='text-xl'>Notification</h1>
                    <p className='text-[#A7A7A7] text-sm mt-2'>No notifcation</p>
                </div>
            </div>
        </div>
    )
}

export default NotificationPage
