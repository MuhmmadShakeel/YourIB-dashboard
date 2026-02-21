import React from 'react'
import Faq from '../../component/faq/Faq'
import Profile from '../../component/profile/Profile'

function FaqPage() {
  return (
    <div>
        <div className='w-full lg:w-[76%] lg:ml-76 px-4 md:px-8 mt-0'>
      <Profile title="FAQ" subtitle="Frequently asked questions and support information" />
      </div>
      <Faq/>
    </div>
  )
}

export default FaqPage
