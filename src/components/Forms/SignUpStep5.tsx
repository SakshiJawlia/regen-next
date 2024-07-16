import React from 'react'
import Button from '../common/Button';
import { Heading } from '../common/Heading';
import { Input } from '../common/Input';
import { FieldErrors, FieldValues, UseFormClearErrors, UseFormGetValues, UseFormRegister, UseFormSetError, UseFormHandleSubmit } from 'react-hook-form';
import { InputFile } from '../common/InputFile';


interface Props{
  register:UseFormRegister<FieldValues>,
  errors:FieldErrors<FieldValues>,
  getValues:UseFormGetValues<FieldValues>,
  setError:UseFormSetError<FieldValues>,
  clearErrors:UseFormClearErrors<FieldValues>,
  backHandler:()=>void,
  handleSubmit:UseFormHandleSubmit<FieldValues, undefined>,
  successHandler:()=>void,
}

const SignUpStep5 = ({register,errors,getValues,setError,clearErrors,backHandler,handleSubmit,successHandler}:Props) => {
  function submitHandler(e:any){
    e.preventDefault; 
    const {comanyReg,businessno,fercreg,credHis,incorDoc}=getValues();
    if(!comanyReg){
      setError('companyName',{type: 'custom',message:'This document is required'})
      return
    }
    if(!businessno){
      setError('businessno',{type: 'custom',message:'This document is required'})
      return
    }
    if(!fercreg){
      setError('fercreg',{type: 'custom',message:'This document is required'})
      return
    }
    if(!credHis){
      setError('contactInfo',{type: 'custom',message:'This document is required'})
      return
    }
    if(!incorDoc){
      setError('incorDoc',{type: 'custom',message:'This document is required'})
      return
    }
    successHandler();
  }
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
    <div className='bg-white rounded-2xl'>
     <div className='flex gap-10 flex-col px-10 pt-14 pb-10'>
      <div className='flex flex-col gap-3'>
        <Heading text="Document Upload"/>
        <p className='text-sm'>Company registration documents</p>
      </div>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-5'>
          <div className='flex gap-2 items-center'>
            <InputFile type='file'
                name='comanyReg'
                label='Company Registration'
                placeholder='Please upload desired file'
                required
                errors={errors}
                register={register}
                />
          </div>  
        </div>
        <div className='flex flex-col gap-5'>
          <div className='flex gap-2 items-center'>
            <InputFile type='file'
                name='businessno'
                label='Business License No.'
                placeholder='Please upload desired file'
                required
                errors={errors}
                register={register}
                />
          </div>  
        </div>
        <div className='flex flex-col gap-5'>
          <div className='flex gap-2 items-center'>
            <InputFile type='file'
                name='fercreg'
                label='FERC/DOE Registration'
                placeholder='Please upload desired file'
                required
                errors={errors}
                register={register}
                />
          </div>  
        </div>
        <div className='flex flex-col gap-5'>
          <div className='flex gap-2 items-center'>
            <InputFile type='file'
                name='credHis'
                label='Credit History/Company Solvancy'
                placeholder='Please upload desired file'
                required
                errors={errors}
                register={register}
                />
          </div>  
        </div>
        <div className='flex flex-col gap-5'>
          <div className='flex gap-2 items-center'>
            <InputFile type='file'
                name='incorDoc'
                label='Company Incorporation Document'
                placeholder='Please upload desired file'
                required
                errors={errors}
                register={register}
                />
          </div>  
        </div>
        <div className='flex flex-col gap-5'>
          <div className='flex gap-2 items-center'>
            <Input type='text'
                name='comanyReg'
                label='Rating'
                placeholder='Please rate us from 1-10'
                errors={errors}
                register={register}
                widthFull
                />
          </div>  
        </div>
      </div>
       
          <div className='flex gap-5 items-center justify-center'>
           <Button text="Back"
                 bg="bg-[#F2F2F2]"
                 type="button"
                 textColor="black"
                 onClick={backHandler}/>
           <Button text="Sign Up as Buyer"
                 bg="bg-[#023047]"
                 type="submit"
                 textColor="white"
                />
      </div>
     </div>
   </div>
 </form>
  )
}

export default SignUpStep5