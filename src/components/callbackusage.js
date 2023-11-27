import { useCallback, useState } from "react"
import List from "./listofarry"

export const CallbackUsage=()=>{
    const [number,setNumber]=useState(1)
    const [dark,setDark]=useState(false)

    const getItems = useCallback(() =>{
        return [number,number+1,number+2]
    },[number])

    const theme={
        backgroundColor:dark ? "#333" : "#FFF",
        color : dark ? "#FFF" : "#333",
        height:100,
        width:100,
        textAlign:"center"
    }
    return(
        <div style={{marginLeft:"2rem"}}>
         <h1>useCallback()</h1>
         <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>
         <button onClick={()=>setDark(prevDark=>!prevDark)}>Change mood</button>
         <p style={theme}>
         <List getItems={getItems}/>
         </p>
        </div>
    )
}