import React from 'react'
import WhiteLabel from '../../component/whitelabel/WhiteLabel'
import Profile from '../../component/profile/Profile'

function WhiteLabelPage() {
  return (
    <div>
          <div className='w-full lg:w-[76%] lg:ml-76 px-4 md:px-8 mt-0'>
      <Profile title="White Label" subtitle="Manage your white label branding and customization settings" />
      </div>
      <WhiteLabel/>
    </div>
  )
}

export default WhiteLabelPage
