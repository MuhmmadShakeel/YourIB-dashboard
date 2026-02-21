import React from 'react'
import LotCalculater from '../../component/lotcalculater/LotCalculater'
import Profile from '../../component/profile/Profile'

function LotCalculaterPage() {
  return (
    <div>
        <div className='w-full lg:w-[76%] lg:ml-76 px-4 md:px-8 mt-0'>
      <Profile title="Lot Calculator" subtitle="Calculate lot sizes for your trading accounts" />
      </div>
      <LotCalculater/>
    </div>
  )
}

export default LotCalculaterPage
