import React from 'react'
import Button from '../common/Button';
import { Heading } from '../common/Heading';
import { FieldErrors, FieldValues, UseFormClearErrors, UseFormGetValues, UseFormRegister, UseFormSetError, UseFormHandleSubmit } from 'react-hook-form';
import { Input } from '../common/Input';

interface Props{
  register:UseFormRegister<FieldValues>,
  errors:FieldErrors<FieldValues>,
  getValues:UseFormGetValues<FieldValues>,
  setError:UseFormSetError<FieldValues>,
  clearErrors:UseFormClearErrors<FieldValues>,
  successHandler:()=>void,
  handleSubmit:UseFormHandleSubmit<FieldValues, undefined>,
  backHandler:()=>void,
}

export const SignUpStep1 = ({register,errors,getValues,setError,clearErrors,successHandler,handleSubmit,backHandler}:Props) => {

  function submitHandler(e:any){
    e.preventDefault; 
    const {firstName,email,Newpassword,confirmPassword}=getValues();
    if(!firstName){
      setError('firstName',{type: 'custom',message:'first name is required'})
      return
    }
    if(!email){
      setError('password',{type: 'custom',message:'Invalid email'})
      return
    }
    if(!Newpassword || Newpassword.length<8){
      setError('Newpassword',{type: 'custom',message:'Password must be of 8+ characters'})
      return
    }
    if(Newpassword!=confirmPassword){
      setError('confirmPassword',{type:'custom',message:'Passwords do not match'})
      return
    }
    successHandler();
  }
  return (
    <form  onSubmit={handleSubmit(submitHandler)}>
    <div className='bg-white rounded-2xl'>
     <div className='flex gap-10 flex-col px-10 py-14'>
       <Heading text="Buyer Details"/>
       <Input type='text'
               name='firstName'
               label='First Name'
               placeholder='john'
               required
               widthFull
               errors={errors}
               register={register}
               />
         <Input type='text'
                 name='lastName'
                 placeholder='christ'
                 required
                 errors={errors}
                 widthFull
                 register={register}
                 label='Last Name'
                 />
          <Input type='text'
                  name='email'
                  label='Email ID'
                  placeholder='john@1234'
                  required
                  pattern={/^\S+@\S+$/i} 
                  widthFull
                  errors={errors}
                  register={register}
                  />
             <Input type='password'
                    name='Newpassword'
                    placeholder='8+ characters'
                    required
                    errors={errors}
                    minLength={8}
                    widthFull
                    register={register}
                    label='New Password'
                    />
            <Input type='password'
                    name='confirmPassword'
                    placeholder='8+ characters'
                    required
                    errors={errors}
                    minLength={8}
                    widthFull
                    register={register}
                    label='Confirm Password'
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
