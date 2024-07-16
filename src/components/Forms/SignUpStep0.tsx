import React from 'react'
import Button from '../common/Button';
import { Heading } from '../common/Heading';
import { FieldErrors, FieldValues, UseFormClearErrors, UseFormGetValues, UseFormRegister, UseFormSetError , UseFormHandleSubmit} from 'react-hook-form';
import { Input } from '../common/Input';
import { DialogDemo } from '../common/PopOver';
import { Popover } from '@radix-ui/react-popover';
import { useState } from 'react';
import { PopOverBox } from '../common/PopOverBox';
import { error } from 'console';

interface Props{
  register:UseFormRegister<FieldValues>,
  errors:FieldErrors<FieldValues>,
  getValues:UseFormGetValues<FieldValues>,
  setError:UseFormSetError<FieldValues>,
  clearErrors:UseFormClearErrors<FieldValues>,
  successHandler:()=>void,
  handleSubmit:UseFormHandleSubmit<FieldValues, undefined>,
}

export const SignUpStep0 = ({register,errors,getValues,setError,clearErrors,successHandler,handleSubmit}:Props) => {  

  const [openPopOver, setopenPopOver] = useState(false);
  function openPopHandler(){
    const {email,password}=getValues();
    if(!email){
      setError('email',{type: 'custom',message:'Invalid email'})
      return
    } 
    if(password.length<8){
      setError('password',{type: 'custom',message:'Password must be of 8+ chracters'}) 
      return
    }
    setopenPopOver(!openPopOver);
  }

  return (
    <form>
       <div className='bg-white rounded-2xl'>
        <div className='flex gap-10 flex-col px-10 py-14'>
          <Heading text="Login Now"/>
          <Input type='text'
                  name='email'
                  label='Email ID'
                  placeholder='john@1234'
                  required
                  pattern={/^\S+@\S+$/i} 
                  widthFull
                  errors={errors}
                  register={register}
                  clearErrors={clearErrors}
                  />
            <Input type='password'
                    name='password'
                    placeholder='8+ characters'
                    required
                    errors={errors}
                    minLength={8}
                    widthFull
                    register={register}
                    label='Password'
                    clearErrors={clearErrors}
                    />
            <div className='text-sm font-medium'>Forgot Password?</div>

            <div className='flex gap-5'>
              <Button text="Sign Up"
                    bg="bg-[#0077B6]"
                    type="button"
                    textColor="white"
                    onClick={openPopHandler}/>
                    {
                      openPopOver && <PopOverBox successHandler={successHandler}/>
                    }
                    
              <Button text="Log In"
                    bg="bg-[#023047]"
                    type="button"
                    textColor="white"/>
            </div>

        </div>
      </div>
    </form>

  )
}
