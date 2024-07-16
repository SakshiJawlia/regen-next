"use client"
import React from 'react'
// import Navbar from '@/components/Navbar'
// import MyWatchList from '@/components/FuelTrading/Watchlist/MyWatchList'
import InifiteScroll from '@/components/FuelTrading/InfiniteScroll/InifiteScroll'
import App from '@/components/Marketing/Marketing'
import MyWatchList from '@/components/FuelTrading/Watchlist/MyWatchList'
import CreateAuction from '@/components/FuelTrading/Auctions/create-auction'
import Tables from '@/components/FuelTrading/Tables/Tables'
import { useState } from 'react'
import Marketing from '@/components/Marketing/Marketing'

const page = () => {

  // const [isClicked, setisClicked] = useState(false)
  // const clickHandler=(()=>{
  //   setisClicked(!isClicked)
  // })

  return (
    <div className='bg-blue-100 py-5 z-20 relative overflow-hidden'>
      <InifiteScroll/>
      <MyWatchList name="My Watchlist"
                    isNew={false}/>
     <MyWatchList name="My Auctions"
                    isNew={true}/>
    <MyWatchList name="Live Auctions"
                    isNew={false}/>
    <Tables/>
    <MyWatchList name="Past Auctions"
                    isNew={false}/>
    {/* <div className='fixed top-1/2 right-0 z-50 flex flex-row translate-x-40 gap-5 rotate-90 '>
      <button className='bg-[#023047] text-[white] p-5 rounded-b-2xl' onClick={clickHandler}>Marketing Analytics</button>
      <button className='bg-[#FB8A2E] border-b-4 border-x-4 border-white text-[white] p-5 rounded-b-2xl' onClick={clickHandler}>Recent Updates</button>
    </div> */}
    {/* {
      isClicked && <Marketing/>
    } */}
    <Marketing/>
    </div>
  )
}

export default page
