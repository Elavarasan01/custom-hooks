import { useContext } from "react";
import { data } from "../App";

export const ContextDemo=()=>{
    const {userName,userNumber}=useContext(data)
    return(
        <div style={{textAlign:"center"}}>
        <h1>useContext()</h1>
        <p>Name: {userName}</p>
        <p>Phone: {userNumber}</p>
        </div>
    )
}