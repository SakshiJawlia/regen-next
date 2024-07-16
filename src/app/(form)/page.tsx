"use client"
import SignUpLeft from '@/components/Forms/SignUpLeft'
import { SignUpStep0 } from '@/components/Forms/SignUpStep0'
import { SignUpStep1 } from '@/components/Forms/SignUpStep1'
import { SignUpStep2 } from '@/components/Forms/SignUpStep2'
import SignUpStep3 from '@/components/Forms/SignUpStep3'
import SignUpStep4 from '@/components/Forms/SignUpStep4'
import SignUpStep5 from '@/components/Forms/SignUpStep5'
import React from 'react'
import { useForm, FieldValues } from 'react-hook-form';
import { useState } from 'react'
import { useRouter } from 'next/navigation';

const page = () => {

    const [step, setStep] = useState(0)
    const router = useRouter();
    const handleFinalSubmit = () => {
        router.push('/fuelTrading');
      };

    const{register,formState:{errors},getValues,setError,clearErrors,watch,handleSubmit}=useForm<FieldValues>({
        defaultValues:{
            email:'',
            newPassword:'',
            firstName:'',
            lastName:'',
            confirmPassword:'',
            otp:'',
            companyName:'',
            companyAddress:'',
            bussinessReg:'',
            contactInfo:"",
            city:'',
            state:'',
            country:'',
        }
    })
    

  return (
    <div className=''>
        <div className='flex h-lvh '>
            <section className='w-[70%] pt-14'>
                <SignUpLeft/>
            </section>
            <section className='bg-blue-100 w-[30%] flex justify-center items-center'>
                    {
                        step === 0 && <SignUpStep0 
                        register={register}
                        errors={errors}
                        getValues={getValues}
                        setError={setError}
                        clearErrors={clearErrors}
                        handleSubmit={handleSubmit}
                        successHandler={()=>setStep(1)}/>
                    }
                    {
                        step === 1 && <SignUpStep1 successHandler={()=>setStep(2)}
                        backHandler={()=>setStep(0)}
                        register={register}
                        errors={errors}
                        getValues={getValues}
                        setError={setError}
                        clearErrors={clearErrors}
                        handleSubmit={handleSubmit}/>
                    }
                    {
                        step === 2 && <SignUpStep2 successHandler={()=>setStep(3)}
                        backHandler={()=>setStep(1)}
                        register={register}
                        errors={errors}
                        getValues={getValues}
                        setError={setError}
                        clearErrors={clearErrors}
                        handleSubmit={handleSubmit}/>
                    }
                    {
                        step === 3 && <SignUpStep3 successHandler={()=>setStep(4)}
                        backHandler={()=>setStep(2)}
                        register={register}
                        errors={errors}
                        getValues={getValues}
                        setError={setError}
                        clearErrors={clearErrors}
                        handleSubmit={handleSubmit}/>
                    }
                    {
                        step === 4 && <SignUpStep4 successHandler={()=>setStep(5)}
                        backHandler={()=>setStep(3)}
                        register={register}
                        errors={errors}
                        getValues={getValues}
                        setError={setError}
                        clearErrors={clearErrors}
                        handleSubmit={handleSubmit}/>
                    }
                    {
                        step === 5 && <SignUpStep5 successHandler={handleFinalSubmit}
                        backHandler={()=>setStep(4)}
                        register={register}
                        errors={errors}
                        getValues={getValues}
                        setError={setError}
                        clearErrors={clearErrors}
                        handleSubmit={handleSubmit}/>
                    }
            </section>
        </div>
    </div>
  )
}

export default page
