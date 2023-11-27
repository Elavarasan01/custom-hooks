import { useState } from "react"

export default function useCounter(intialValue){
    const [value,setValue]=useState(intialValue);
    const increment=()=>{
        return setValue(value+1)
    }
    const decrement=()=>{
        return setValue(value-1)
    }
  return [value,increment,decrement];
}