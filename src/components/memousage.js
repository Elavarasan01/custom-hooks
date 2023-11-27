import { useState,useMemo } from "react"
export const MemoUsage=()=>{
    const[counter,setCounter]=useState(1)
    const[name,setName]=useState("")
    const result=useMemo(()=>{
        return factorial(counter)
    },[counter])
  
    return(
        <div style={{textAlign:"center"}}>
            <h1>useMemo()</h1>
            <p>Fibonacci value of : {counter} is = {result}</p>
            <div >
           <button onClick={()=>setCounter(counter+1)}>Inc+</button> 
           <button onClick={()=>setCounter(counter-1)}>Dec-</button>
           </div>
         <div style={{marginTop:"10px"}}>
           <input value={name} onChange={(e)=>setName(e.target.value)}/> 
           <p>{name}</p>
           </div>
        </div>
    )
}

function factorial(n){
    let i=0;
    while(i<200000000) i++;
    if(n<0){
        return -1;
    }
    if(n===0){
        return 1;
    }
    return n*factorial(n-1);
}