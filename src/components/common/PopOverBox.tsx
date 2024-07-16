import React from 'react'
import Button from './Button'

interface Props{
    successHandler:()=>void,
}

export const PopOverBox = ({successHandler}:Props) => {
  return (
    <div className='absolute bg-white shadow-[0px_4px_4px_0px,rgba(rgba(0,0,0,0.25))] rounded-2xl right-[50%] bottom-[40%]'>
        <div className='flex flex-col gap-10 px-20 py-14 items-start'>
            <h1 className='font-bold text-2xl text-[#555555]'>SignUp As</h1>
            <div className='flex gap-5'>
                <Button text="Buyer"
                bg="bg-[#0077B6]"
                type="button"
                textColor="white"
                onClick={successHandler}
                />
                <Button text="Supplier"
                 bg="bg-[#023047]"
                 type="button"
                 textColor="white"/>
            </div>
        </div>
    </div>
  )
}
