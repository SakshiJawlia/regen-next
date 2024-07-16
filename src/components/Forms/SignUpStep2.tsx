import React from 'react'
import Button from '../common/Button';
import { Heading } from '../common/Heading';
import { FieldErrors, FieldValues, UseFormClearErrors, UseFormGetValues, UseFormHandleSubmit, UseFormRegister, UseFormSetError} from 'react-hook-form';
import { Input } from '../common/Input';
import { InputOTPDemo } from '../common/OTP';


interface Props{
  register:UseFormRegister<FieldValues>,
  errors:FieldErrors<FieldValues>,
  getValues:UseFormGetValues<FieldValues>,
  setError:UseFormSetError<FieldValues>,
  clearErrors:UseFormClearErrors<FieldValues>,
  successHandler:()=>void,
  backHandler:()=>void,
  handleSubmit:UseFormHandleSubmit<FieldValues, undefined>,
}

export const SignUpStep2 = ({register,errors,getValues,setError,clearErrors,successHandler,backHandler,handleSubmit}:Props) => {

  function submitHandler(e:any){
    e.preventDefault; 
    const {otp}=getValues();
    if(!otp){
      setError('otp',{type: 'custom',message:'Please fill the correct details'})
      return
    }
  }

  return (
    <form  onSubmit={handleSubmit(submitHandler)}>
      <div className='bg-white rounded-2xl'>
        <div className='flex flex-col justify-center py-14 items-center'>
          <div className='flex flex-col gap-3 w-[80%]'>
            <Heading text="OTP Verification"/>
            <p className='text-sm text-[#555555]'>You will receive a mail with otp to verify your email address :: xyz@gmail.com</p>
            <button className='text-sm text-[#555555] border-b border-black w-fit font-medium'>Resend OTP</button>
          </div>
          <div className='py-10'>
            <InputOTPDemo/>
          </div>
          <div className='flex gap-5'>
           <Button text="Back"
                 bg="bg-[#F2F2F2]"
                 type="button"
                 textColor="black"
                 onClick={backHandler}/>
           <Button text="Submit"
                 bg="bg-[#023047]"
                 type="button"
                 textColor="white"
                 onClick={successHandler}/>
          </div>
        </div>s
      </div>
    </form>
  )
}
