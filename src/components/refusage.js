import { useRef, useState } from "react"

export const RefUsage=()=>{
    const userDetails=useRef();
    const [data,setData]=useState("");

    const changingInput=()=>{
     setData(userDetails.current.value)
    }

    return(
        <div style={{marginLeft:"5rem"}}>
         <h1>useRef()</h1>
         <input ref={userDetails} onChange={changingInput}/>
         <p>{data}</p>
        </div>
    )
}