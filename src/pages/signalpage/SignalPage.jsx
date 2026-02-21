import React from 'react'
import Signal from '../../component/signal/Signal'
import Profile from '../../component/profile/Profile'

function SignalPage() {
  return (
    <div>
        <div className='w-full lg:w-[76%] lg:ml-76 px-4 md:px-8 mt-0'>
      <Profile title="Signals" subtitle="View and manage your trading signals" />
      </div>
      <Signal/>
    </div>
  )
}

export default SignalPage
