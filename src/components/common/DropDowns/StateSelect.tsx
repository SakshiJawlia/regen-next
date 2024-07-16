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
import {Istates} from "../../locationData/typeData"
import { useState } from "react"

  
interface Props{
    countryIndex:number|null,
  handleStateClick:(stateIndex:number)=>void,
}

export function StateSelect({countryIndex,handleStateClick}:Props) {
    
  return (
    <Select  onValueChange={(value)=>handleStateClick(Number(value))}>
      <SelectTrigger className="w-full outline-none">
        <SelectValue placeholder="Select a state"
        className="text-gray-600" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
        {
            countryIndex!==null &&
            data[countryIndex].states.map((state:Istates,sindex:number)=>(
                <SelectItem value={sindex.toString()} className='hover:text-white hover:bg-black p-2' onClick={()=>handleStateClick(sindex)}>{state.name}</SelectItem>
            ))
        }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}


