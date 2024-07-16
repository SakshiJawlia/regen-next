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
import {Icities} from "../../locationData/typeData"
import { useState } from "react"

  
interface Props{
    countryIndex:number|null,
    stateIndex:number|null,
}

export function CitySelect({countryIndex,stateIndex}:Props) {
    
  return (
    <Select>
      <SelectTrigger className="w-full outline-none">
        <SelectValue placeholder="Select a state"
        className="text-gray-600" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
        {
            countryIndex && stateIndex!==null &&
            data[countryIndex].states[stateIndex].cities.map((city:Icities,cindex:number)=>(
                <SelectItem value={city.name} className='hover:text-white hover:bg-black p-2'>{city.name}</SelectItem>
            ))
        }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}


