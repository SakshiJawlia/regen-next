import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import data from '../../locationData/data.json'
import { ICountries, Icities} from "../../locationData/typeData"
import { useState } from "react"
  
interface Props{
  handleClick:(countryIndex:number)=>void,
}

export function CountrySelect({handleClick}:Props) {

  return (
    <Select onValueChange={(value)=>handleClick(Number(value))}>
      <SelectTrigger className="w-full outline-none">
        <SelectValue placeholder="Select a country"
        className="text-gray-600" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {
                data.map((country:ICountries,index:number)=>(
                  <>
                    <SelectItem value={index.toString()} className='hover:text-white hover:bg-black p-2'>{country.name}, {country.capital}</SelectItem>
                  </>
                ))
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

