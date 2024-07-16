import React from 'react'

interface Props{
    text:string,
    onClick?:()=>void,
    bg?:string,
    type?:'button' | 'submit' | 'reset',
    textColor:string,
}

const Button = ({text,onClick,bg,type,textColor}:Props) => {

  return (
    <button className={`${bg} px-16 py-3 text-${textColor} font-bold rounded-lg`} 
    onClick={onClick}
    type={type || 'button'}>
      {text}
    </button>
  )
}

export default Button
