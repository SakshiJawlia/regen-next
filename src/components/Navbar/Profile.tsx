import React from 'react'

const Profile = () => {
  return (
    <div className='absolute bg-[#F2F2F2] top-16 right-0 z-50 rounded-3xl shadow-lg w-[90%] overflow-hidden'>
      <div className='flex flex-col font-bold '>
        <button className='hover:bg-[#E0E0E0] py-4 px-8'>Profile</button>
        <button className='hover:bg-[#E0E0E0] py-4 px-8'>Terms Of Usage</button>
        <button className='hover:bg-[#E0E0E0] py-4 px-8'>Privacy Policy</button>
        <button className='hover:bg-[#E0E0E0] py-4 px-8'>FAQ</button>
      </div>
    </div>
  )
}

export default Profile
