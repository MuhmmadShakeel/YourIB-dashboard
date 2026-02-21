import React from 'react'
import Performancechart from '../../component/dashboard/Performancechart'
import RecentActivity from '../../component/dashboard/RecentActivity'
import DashboardHeader from '../../component/dashboard/DashboardHeader'
import Profile from '../../component/profile/Profile'
function DashboardPage() {
  return (
    <>
     <div className='w-full lg:w-[80%] lg:ml-74 px-4 md:px-8 mt-0'>
      <Profile title="Dashboard" subtitle="Important Updates and platform news" />
      </div>
    <div className="lg:ml-[300px] min-h-screen bg-[#f9fafb]">
      <DashboardHeader/>
      <div className="mt-7">
        <Performancechart/>
        <RecentActivity/>
      </div>
    </div>
    </>
  )
}

export default DashboardPage
