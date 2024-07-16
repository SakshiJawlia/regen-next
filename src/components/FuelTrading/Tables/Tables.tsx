import React from 'react'
import { Progress} from './Progress'
import { Completed } from './Completed'

const Tables = () => {
  return (
    <div className='container mx-auto flex sm:flex-row flex-col gap-6 w-full'>
        <div className='flex flex-col gap-4 sm:w-1/2 w-full'>
            <div className="flex justify-between">
                <h3 className='font-bold text-xl'>Orders in Progress</h3>
                <h3 className='text-[#0077B6] font-bold'>View all</h3>
            </div>
            <Progress/>
        </div>
        <div className='flex flex-col gap-4 sm:w-1/2 w-full'>
            <div className="flex justify-between">
                <h3 className='font-bold text-xl'>Completed Orders</h3>
                <h3 className='text-[#0077B6] font-bold'>View all</h3>
            </div>
            <Completed/>
        </div>
    </div>
  )
}

export default Tables
