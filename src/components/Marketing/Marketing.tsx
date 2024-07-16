import React from 'react'
import { Data } from './items'
import { useState } from 'react'


const Marketing = () => {

  const [isClicked, setisClicked] = useState(true)
  function clickHandler(){
    setisClicked(!isClicked);
  }

  return (
    <div className=''>
       <div className={`absolute bg-[#F2F2F2] top-5 z-50 flex flex-col sm:w-[30%] w-[90%] rounded-xl ${isClicked?"sm:right-[-30%] right-[-90%]" :"right-0"} duration-700`}>
        <Data/>
        <Data/>
        <Data/>
        <Data/>
        <Data/>
        <Data/>
        <div className='absolute top-1/2 -translate-x-[58%] z-50 flex flex-row gap-5 rotate-90 '>
          <button className='bg-[#023047] text-[white] px-5 py-3 rounded-b-2xl text-nowrap' onClick={clickHandler}>Marketing Analytics</button>
          <button className='bg-[#FB8A2E] border-b-4 border-x-4 border-white text-[white] px-5 py-3 rounded-b-2xl text-nowrap' onClick={clickHandler}>Recent Updates</button>
      </div>
      </div>
    </div>
  )
}

export default Marketing
