import { FieldErrors, FieldValues, UseFormRegister, UseFormClearErrors } from 'react-hook-form'

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
    hidden?:boolean,
    errors?:FieldErrors<FieldValues>
    clearErrors?:UseFormClearErrors<FieldValues>
}
export const Input = ({name:propName,type,label,placeholder,required,register,pattern,widthFull,className,minLength,title,hidden,errors,clearErrors}:Props) => {
    const {onChange,onBlur,ref,name}=register(propName,{required: required && 'This field is required'})
    const changeHandler = (e:any) => {
        if(clearErrors) clearErrors();
        onChange(e) 
    }
  return (
        <label htmlFor={propName} className='flex flex-col gap-3'>
            <p className='text-[#555555] text-sm font-bold'>{label}</p>
            <input type={type} 
                placeholder={placeholder} 
                name={name} 
                ref={ref}
                onBlur={onBlur}
                onChange={changeHandler}
                className={`p-4 outline-none border border-[#F2F2F2] ${widthFull && 'w-full'} ${className} `}
            />
            {errors && errors[propName] && <span className='text-red-400'>{errors[propName]?.message?.toString()}</span>} 
        </label>
  )
}

