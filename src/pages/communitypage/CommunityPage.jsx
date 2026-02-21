import React from 'react'
import Community from '../../component/community/Community'
import Profile from '../../component/profile/Profile'

function CommunityPage() {
  return (
    <div>
        <div className='w-full lg:w-[76%] lg:ml-76 px-4 md:px-8 mt-0'>
      <Profile title="Community" subtitle="Connect with other traders and share insights" />
      </div>
      <Community/>
    </div>
  )
}

export default CommunityPage
