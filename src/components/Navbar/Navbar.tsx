"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import Profile from './Profile'
import { GiHamburgerMenu } from 'react-icons/gi'
import SmallScreenNav from './SmallScreenNav'
import { RxCross2 } from 'react-icons/rx'
import { navlinks } from './links'

const Navbar = () => {

    const [isClicked, setisClicked] = useState(false)
    function clickHandler(){
        setisClicked(!isClicked);
    }
    const [isOpen, setisOpen] = useState(false)
    function openHandler(){
        setisOpen(!isOpen);
    }

  return (
    <div className='relative'>
        <div className='container mx-auto py-2 flex justify-between'>
            <div className='flex items-center'>
                <div className='flex items-center'>
                    <div>
                        <img src="/images/Navbar/logo/logo1.png" alt="" />
                    </div>
                    <div>
                        <img src="/images/Navbar/logo/logo2.png" alt="" />
                    </div>
                </div>
                <ul className='items-center text-nowrap xl:flex hidden'>
                    {
                        navlinks.map((link)=>(
                            <li className='hover:bg-[#F2F2F2] hover: rounded-2xl px-5 py-4'>
                                <Link href={link.href} className=''>{link.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='flex gap-6 items-center'>
                <div className='gap-2 sm:flex hidden'>
                    <div  className='flex gap-5 items-center bg-[#F2F2F2] py-5 rounded-2xl px-5'>
                        <div>
                            <img src="/images/Navbar/search.svg" alt="" className='text-[#333333]'/>
                        </div>
                        <input type="text" 
                        placeholder='Quick Search...'
                        className='bg-[#F2F2F2] text-[#828282] outline-none'/>
                    </div>
                    <div className='bg-[#023047] p-5 rounded-2xl hover:cursor-pointer hover:bg-gray-600'>
                            <img src="/images/Navbar/message.svg" alt=""/>
                    </div>
                    <div className='bg-[#023047] p-5 rounded-2xl hover:cursor-pointer hover:bg-gray-600'>
                            <img src="/images/Navbar/doc.svg" alt="" />
                    </div>
                </div>
                <div className='2xl:flex hidden items-center gap-4 hover:cursor-pointer relative' onClick={clickHandler} >
                    <div className='shadow-[0px_0px_4px_0px_rgba(rgba(0,0,0,0.25)]'>
                        <img src="/images/Navbar/aws.png" alt="" className='shadow-[0px_0px_4px_0px_rgba(rgba(0,0,0,0.25)]' />
                    </div>
                    <div className='flex flex-col gap-1'>
                            <div className='text-[#333333] font-bold text-xl'>Carl Jacobs</div>
                            <div className='text-[#333333]'>Amazon Web Services</div>
                    </div>
                    <div>
                        <img src="/images/Navbar/dropdown.svg" alt="" />
                    </div>
                    {
                    isClicked && <Profile/>
                    }   
                </div>
                <div className='border-2 sm:p-3 p-1 border-gray-300 2xl:hidden block' onClick={openHandler}>
                    {
                        isOpen ? <RxCross2 className='text-3xl font-bold'/>: <GiHamburgerMenu className='text-3xl '/>
                    }
                </div>
            </div>
            {
                isOpen && <SmallScreenNav isClicked={isClicked}
                                            clickHandler={clickHandler}/>
            }
        </div>
    </div>
  )
}

export default Navbar


