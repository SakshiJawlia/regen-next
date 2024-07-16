import React from 'react'
import Profile from './Profile'
import Link from 'next/link'
import { navlinks } from './links'

interface Props{
    isClicked:boolean,
    clickHandler:()=>void,
}

const SmallScreenNav = ({isClicked,clickHandler}:Props) => {
  return (
    <div className='2xl:hidden absolute p-4 top-[85%] sm:right-20 right-2 bg-gray-50 rounded-lg shadow-lg  z-50 sm:w-1/4 w-fit flex flex-col gap-6 '>
       <div className='flex sm:flex-row flex-col items-center gap-4 hover:cursor-pointer relative' onClick={clickHandler} >
                    <div className='shadow-[0px_0px_4px_0px_rgba(rgba(0,0,0,0.25)]'>
                        <img src="/images/Navbar/aws.png" alt="" className='shadow-[0px_0px_4px_0px_rgba(rgba(0,0,0,0.25)]' />
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='flex flex-col gap-1 text-nowrap'>
                                <div className='text-[#333333] font-bold text-xl'>Carl Jacobs</div>
                                <div className='text-[#333333]'>Amazon Web Services</div>
                        </div>
                        <div>
                            <img src="/images/Navbar/dropdown.svg" alt="" />
                        </div>
                    </div>
                    {
                    isClicked && <Profile/>
                    }   
        </div>
        <ul className='flex flex-col text-nowrap items-start '>
                    {
                        navlinks.map((link)=>(
                            <li className='hover:bg-[#F2F2F2] hover: rounded-2xl px-5 py-4'>
                                <Link href={link.href} className=''>{link.title}</Link>
                            </li>
                        ))
                    }
        </ul>
        <div className='gap-2 flex flex-col'>
                    <div  className='flex gap-5 items-center bg-[#F2F2F2] py-5 rounded-2xl px-5'>
                        <div>
                            <img src="/images/Navbar/search.svg" alt="" className='text-[#333333]'/>
                        </div>
                        <input type="text" 
                        placeholder='Quick Search...'
                        className='bg-[#F2F2F2] text-[#828282] outline-none'/>
                    </div>
        </div>
    </div>
  )
}

export default SmallScreenNav
