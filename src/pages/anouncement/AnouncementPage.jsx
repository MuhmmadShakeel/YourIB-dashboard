import React from 'react'
import Anoucement from '../../component/anouncement/Anoucement'
import Profile from '../../component/profile/Profile'

function AnouncementPage() {
  return (
    <div>
      <div className='w-full lg:w-[76%] lg:ml-76 px-4 md:px-8 mt-0'>
      <Profile title="Announcements" subtitle="Important Updates and plateform news" />
      </div>
      <Anoucement/>
    </div>
  )
}

export default AnouncementPage
