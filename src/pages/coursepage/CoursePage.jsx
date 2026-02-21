import React from 'react'
import Courses from '../../component/courses/Courses'
import Profile from '../../component/profile/Profile'

function CoursePage() {
  return (
    <div>
        <div className='w-full lg:w-[76%] lg:ml-76 px-4 md:px-8 mt-0'>
      <Profile title="Courses" subtitle="Browse and manage your courses" />
      </div>
      <Courses/>
    </div>
  )
}
export default CoursePage
