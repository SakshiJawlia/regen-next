import { useSearchParams } from 'next/navigation';
import { FieldValues, UseFormRegister, FieldErrors, UseFormClearErrors } from 'react-hook-form'
import { useState } from 'react';

interface Props{
    name:string,
    type:string,
    label:string,
    placeholder:string,
    required?:boolean,
    register: UseFormRegister<FieldValues>;
    pattern?:any,
    widthFull?:boolean,
    className?:string,
    minLength?:number,
    title?:string, 
    errors?:FieldErrors<FieldValues>
    clearErrors?:UseFormClearErrors<FieldValues>
}

export const InputFile = ({name:propName,type,label,placeholder,required,register,errors,pattern,widthFull,className,minLength,title,clearErrors}:Props) => {

  const {onChange,onBlur,ref,name}=register(propName,{required: required && 'This field is required'})
  const [placeholderText, setplaceholderText] = useState(placeholder) 
  const changeHandler = (e:any) => {
    if(clearErrors) clearErrors();
    onChange(e) 
    setplaceholderText(e.target.files[0].name)
}

  return (
    <div className='flex flex-col gap-3 w-[406px]'>
        <label htmlFor={name}
        className='flex flex-col gap-3'
        >
        <p  className='text-[#555555] text-sm font-bold'>{label}</p>
        <input type='file'
                      name={name}
                      className='hidden'
                      id={name}
                      placeholder={placeholder}
                      onChange={changeHandler}
                      ref={ref}
                      onBlur={onBlur}                      
                      />
                      {errors && errors[propName] && <span className='text-red-400'>{errors[propName]?.message?.toString()}</span>} 
          <div className='flex gap-3 w-full'>
            <div className='border border-gray-100 py-4 w-full px-4 text-gray-500' onClick={(e)=>e.stopPropagation()}>{placeholderText}</div>
            <div className='text-white bg-[#0077B6] px-5 py-2 flex items-center rounded-lg'>
              <img src="/images/form/IconSet.svg" alt="" />
            </div>
          </div>
        </label>
    </div>
  )
}