import React from 'react'

interface Props{
    text:string,
}

export const Heading = ({text}:Props) => {
  return (
    <div className='text-[#555555] text-2xl font-bold'>{text}</div>
  )
}
