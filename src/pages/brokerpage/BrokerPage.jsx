import React from 'react'
import Broker from '../../component/broker/Broker'
import Profile from '../../component/profile/Profile'

function BrokerPage() {
  return (
    <div>
        <div className='w-full lg:w-[76%] lg:ml-76 px-4 md:px-8 mt-0'>
      <Profile title="Brokers" subtitle="Browse and manage your broker accounts" />
      </div>
      <Broker/>
    </div>
  )
}

export default BrokerPage
