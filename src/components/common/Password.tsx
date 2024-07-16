import React from 'react'

interface Props{
    placeholder:string,
}

export const Password = ({placeholder}:Props) => {
  return (
    <label htmlFor="">
        <input type="password" 
                placeholder={placeholder}/>
    </label>
  )
}
