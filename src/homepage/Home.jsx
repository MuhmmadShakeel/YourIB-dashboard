import React from 'react'
import HomeHeader from '../component/home/HomeHeader'
import Performancechart from '../component/home/Performancechart'
import RecentActivity from '../component/home/RecentActivity'

function Home() {
  return (
    <div className="lg:ml-[300px] min-h-screen bg-[#f9fafb]">
      <HomeHeader />
      <div className="mt-7">
        <Performancechart/>
        <RecentActivity/>
      </div>
    </div>
  )
}

export default Home
