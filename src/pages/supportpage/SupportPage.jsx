import React from 'react'
import Support from '../../component/support/support'
import Profile from '../../component/profile/Profile'

function SupportPage() {
  return (
    <div>
        <div className='w-full lg:w-[76%] lg:ml-76 px-4 md:px-8 mt-0'>
      <Profile title="Support" subtitle="Get help and support for your account" />
      </div>
      <Support/>
    </div>
  )
}

export default SupportPage
