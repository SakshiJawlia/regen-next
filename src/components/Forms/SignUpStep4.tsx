import React from 'react'
import Button from '../common/Button';
import { Heading } from '../common/Heading';
import { Input } from '../common/Input';
import { FieldErrors, FieldValues, UseFormClearErrors, UseFormGetValues, UseFormRegister, UseFormSetError, UseFormHandleSubmit } from 'react-hook-form';
import data from '../locationData/data.json'
import { CitySelect } from '../common/DropDowns/CityDD';
import { useState } from 'react';
import { StateSelect } from '../common/DropDowns/StateSelect';
import { CountrySelect } from '../common/DropDowns/CountrySelect';

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

const SignUpStep4 = ({register,errors,getValues,setError,clearErrors,successHandler,backHandler,handleSubmit}:Props) => {
  
const [countryIndex, setcountryIndex] = useState<number|null>(null)
function handleClick(index:number){
  setcountryIndex(index)
}

const [stateIndex, setstateIndex] = useState<number|null>(null)
function handleStateClick(sindex:number){
  setstateIndex(sindex)
}

const [cityIndex,setCityIndex]=useState<number|null>(null)
function handleCityClick(cindex:number){
  setCityIndex(cindex)
}

function submitHandler(e:any){
  e.preventDefault; 
  successHandler();
}

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
    <div className='bg-white rounded-2xl'>
     <div className='flex gap-10 flex-col px-10 py-14'>
      <div className='flex flex-col gap-3'>
        <Heading text="Document Upload"/>
        <p className='text-sm'>Company registration documents</p>
      </div>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-3'>
            <div className='text-[#555555] text-sm font-bold'>City</div>
            <CitySelect countryIndex={countryIndex}
                        stateIndex={stateIndex}
                        />
          </div>
          <div className='flex flex-col gap-3'>
            <div className='text-[#555555] text-sm font-bold'>State</div>
            <StateSelect countryIndex={countryIndex}
                          handleStateClick={handleStateClick}
                          />
          </div>
          <div className='flex flex-col gap-3'>
            <div className='text-[#555555] text-sm font-bold'>Country</div>
            <CountrySelect 
                         handleClick={handleClick}/>
          </div>
        </div>
          <div className='flex gap-5'>
           <Button text="Back"
                 bg="bg-[#F2F2F2]"
                 type="button"
                 textColor="black"
                 onClick={backHandler}/>
           <Button text="Next"
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

export default SignUpStep4