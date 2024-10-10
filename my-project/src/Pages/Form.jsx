import React from 'react'
import { useState } from 'react'
import Input from '../Components/Input'
import Button from "../Components/Button"



const Form = () => {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  return (
    <>
     <form className='mt-[20px] flex flex-col gap-3 '>
       <input type="text" style={{borderWidth: "none", borderColor:"white", width:"300px", height:"40px", borderColor:"black", borderRadius:"5px"}}placeholder='Username' value={username} onChange={(e)=>{setUsername(e.target.value)
       }}/> 

       <input type="text" style={{borderWidth: 2, borderColor:"black",width:"400px"}}placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)  
       }}/> <br /> 
      

       <Button password={password} username={username}/>

       
     </form>
    
    
    
    </>
   
  )
}

export default Form;