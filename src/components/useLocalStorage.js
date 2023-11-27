import { useEffect, useState } from "react";

function getSavedValue(key,intialValue){
    const savedvalue=JSON.parse(localStorage.getItem(key))

    if(savedvalue) return savedvalue

    if(intialValue instanceof Function) return intialValue()
    return intialValue
}
export default function useLocalStorage(key,intialValue){
    const [value,setValue]=useState(()=>{
        return getSavedValue(key,intialValue)
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[value])
    return [value,setValue]
}