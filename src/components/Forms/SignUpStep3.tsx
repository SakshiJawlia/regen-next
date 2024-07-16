import React from 'react'
import Button from '../common/Button';
import { Heading } from '../common/Heading';
import { Input } from '../common/Input';
import { FieldErrors, FieldValues, UseFormClearErrors, UseFormGetValues, UseFormRegister, UseFormSetError,UseFormHandleSubmit } from 'react-hook-form';


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



const SignUpStep3 = ({register,errors,getValues,setError,clearErrors,successHandler,backHandler,handleSubmit}:Props)  => {

  function submitHandler(e:any){
    e.preventDefault; 
    const {companyName,businessReg,contactInfo,comapnyNo}=getValues();
    if(!companyName){
      setError('companyName',{type: 'custom',message:'Please fill the correct details'})
      return
    }
    if(!comapnyNo || comapnyNo.length<10){
      setError('comapnyNo',{type: 'custom',message:'Contact no. must of 10 characters'})
      return
    }
    if(!businessReg){
      setError('businessReg',{type: 'custom',message:'Please fill the correct details'})
      return
    }
    if(!contactInfo || contactInfo.length<10){
      setError('contactInfo',{type: 'custom',message:'Contact no. must of 10 characters'})
      return
    }
    successHandler();
  }

  return (
    <form  onSubmit={handleSubmit(submitHandler)}>
    <div className='bg-white rounded-2xl'>
     <div className='flex gap-10 flex-col px-10 py-14'>
       <Heading text="Account Setup"/>
       <Input type='text'
               name='companyName'
               label='Company Name'
               placeholder='nextfly technologies'
               required
               widthFull
               errors={errors}
               register={register}
               />
         <Input type='text'
                 name='comapnyNo'
                 placeholder='+9999999999'
                 minLength={10}
                 required
                 errors={errors}
                 widthFull
                 register={register}
                 label='Company No.'
                 />
          <Input type='text'
                  name='companyAddress'
                  label='Company Address'
                  placeholder='malibu town'
                  required
                  widthFull
                  errors={errors}
                  register={register}
                  />
             <Input type='text'
                    name='businessReg'
                    placeholder="haryana@122001"
                    required
                    errors={errors}
                    widthFull
                    register={register}
                    label='Business Registration (State Level)'
                    />
            <Input type='text'
                    name='contactInfo'
                    placeholder='+91-9786345212'
                    required
                    errors={errors}
                    minLength={10}
                    widthFull
                    register={register}
                    label='Contact Info'
                    />
          <div className='flex gap-5'>
           <Button text="Cancel"
                 bg="bg-[#F2F2F2]"
                 type="button"
                 textColor="black"
                 onClick={backHandler}/>
           <Button text="Verify Now"
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

export default SignUpStep3
