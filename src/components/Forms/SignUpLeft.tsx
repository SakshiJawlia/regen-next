import React from 'react'
import Button from '../common/Button'

const SignUpLeft = () => {
  return (
      <div className='container mx-auto flex flex-col gap-40'>
        <div className='flex items-center'>
          <div>
            <img src="/images/Navbar/logo/logo1.png" alt="" />
          </div>
          <div>
            <img src="/images/Navbar/logo/logo2.png" alt="" />
          </div>
        </div>
        <div className='flex gap-3 items-center text-[#555555]'>
                  <div className='border-t border-black w-10'></div>
                  <div className='font-bold'>Trading</div>
        </div>
        <div className='flex flex-col gap-9'>
                    <h2 className='text-6xl font-bold text-[#555555]'>Your Trading Desk for the New Fuel Economy</h2>
                    <button className='flex items-center gap-2 bg-[#023047] px-5 py-3 w-fit  rounded-lg hover:bg-gray-600 duration-300'>
                      <div className='text-[white] font-bold'>Learn Now</div>
                      <div className='border-t border-white w-10'></div>
                    </button>
        </div>
      </div>
  )
}

export default SignUpLeft
