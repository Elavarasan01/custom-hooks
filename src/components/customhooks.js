import { useEffect, useState } from "react";
import useCounter from "./useCounter"
import useLocalStorage from "./useLocalStorage";
import useUpdateLogger from "./useUpdateLogger";
import axios from "axios";
import {DeleteOutlined,EditOutlined} from "@ant-design/icons";
import { message } from "antd";

export const CustomHooks=()=>{
    //useCounter
    const [counter,increment,decrement]=useCounter(0);
    //useLocalStorage
    const [name,setName]=useLocalStorage("name","");
    //useUpdateLogger
    useUpdateLogger(name);

    //useInput
    const [firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");

    const baseUrl = 'https://localhost:7197/api/TblDepts';

    const [data,setData]=useState([])

    const saveChanges=(e)=>{
      e.preventDefault();
      alert(`Hello ${firstName} ${lastName}`)
      setFirstName("");
      setLastName("");
    }

    const[headname,setHeadname]=useState("")
    const[headdept,setHeaddept]=useState("")
    const[location,setLocation]=useState("")
    const[isEditClick,setIsEditClick]=useState(false)
    const[editid,setEditid]=useState(null)
    

    const submitValues=(e)=>{
      e.preventDefault();
       let payload={
        "departmentName":headname,
        "departmentHead": headdept,
        "location":location
       }

       axios.post(baseUrl,payload)
       .then((res)=>{
         message.success("New Details Added")
          getCall();
          setHeaddept("");
          setHeadname("");
          setLocation("");
       })
    }

    const editMenu=(info)=>{
      setEditid(info)
      setIsEditClick(true)
      setHeaddept(info.departmentHead);
      setHeadname(info.departmentName);
      setLocation(info.location);
    }

    const editDetails=()=>{
   
       let payload={
          "id": editid.id,
          "departmentName": headname,
          "departmentHead": headdept,
          "location": location,
           "tblDept":[]
      }
      axios.put(baseUrl+`/${editid.id}`,payload)
      .then((res)=>{
        console.log(res)
        message.success("Updated Successfully")
        getCall();
      })
    }
 
     const deleteDetail=(id)=>{
       axios.delete(baseUrl + `/${id}`)
       .then((res)=>{
        message.error("Deleted")
         getCall();
       })
     }
    const getCall=()=>{
        axios.get(baseUrl)
       .then((res)=>setData(res.data))
    }
    useEffect(()=>{ 
    getCall();
    },[])
    return(
        <>
         {/* <h1 style={{textAlign:'center',fontFamily:"monospace",webkitTextStroke : "medium"}}>Custom Hooks</h1>
       
        <div style={{marginLeft:"3rem"}}>
           <h1 style={{color:"green"}}>useCounter()</h1>
            <button onClick={increment} style={{padding:"5px",margin:"2px"}}>Increment</button>
            <button onClick={decrement} style={{padding:"5px",margin:"2px"}}>Decrement</button>
            <p style={{marginLeft:"4rem"}}>{counter}</p>
        </div>
        <hr style={{height:"5px" ,background:"cadetblue"}}/>

      
        <div style={{marginLeft:"25rem",padding:"2rem"}}>
            <h1 style={{color:"lightskyblue"}}>useLocalStorage()</h1>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} style={{padding:"8px"}}/>
        </div>
        <hr style={{height:"5px" ,background:"cadetblue"}}/>
       
        <div style={{textAlign:"center"}}>
            <h1 style={{color:"orange"}}>useInput()</h1>
           <label>firstName:</label> <input value={firstName} onChange={e=>{setFirstName(e.target.value)}} style={{padding:"5px",margin:"5px"}}/><br/>
           <label>lastName:</label> <input value={lastName} onChange={e=>{setLastName(e.target.value)}}  style={{padding:"5px",margin:"5px"}}/><br/>
            <button onClick={saveChanges} style={{padding:"5px",margin:"2px"}}> submit </button>
        </div> */}
        {/* <hr style={{height:"5px" ,background:"cadetblue"}}/> */}
        <div style={{padding:"10px",margin:"10px",textAlign:"center"}}>
            <label>Head</label>
            <input onChange={(e)=>setHeaddept(e.target.value)} value={headdept}/>
            <label>DeptName</label>
            <input onChange={(e)=>setHeadname(e.target.value)} value={headname}/>
            <label>location</label>
            <input onChange={(e)=>setLocation(e.target.value)} value={location}/>
            {
            isEditClick?
              <button onClick={editDetails}>Save Details</button> :
              <button onClick={submitValues}>Add Details</button>
            }
        </div>
        <div className="maindiv"> 
              <table className="maintable">
                <thead>
                  <tr>
                     <td>Id</td>
                     <td>DepartmentHead</td>
                     <td>DepartmentName</td>
                     <td>Location</td>
                     <td>Action</td>
                     </tr>
                </thead>
                <tbody>
                {data.map((info)=>{
            return(
                <tr>
                      <td>{info.id}</td>
                      <td>{info.departmentHead}</td>
                      <td>{info.departmentName}</td>
                      <td>{info.location}</td>
                      <td>
                        <button onClick={()=>deleteDetail(info.id)}><DeleteOutlined  /></button>
                        <button onClick={()=>editMenu(info)}><EditOutlined /></button>
                      </td>
                      </tr>
                      )
                    } )}
                </tbody>
              </table>
        </div>
        </>
    )
}