import React from 'react'
import { useState } from 'react'
import Input from '../Components/Input'
import Button from "../Components/Button"
import Tickbox from './Tickbox'
import SignUp from '../Components/SignUp'




const Form = () => {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  return (
    <>
     <form className='mt-[20px] flex flex-col gap-3 text-[12px] '>
       <input type="text" style={{borderWidth: "none",borderColor:"black", width:"300px",padding:"5px", borderRadius:"9px"}}placeholder='Username' value={username} onChange={(e)=>{setUsername(e.target.value)
       }}/> 

       <input type="text" style={{borderWidth: "none", borderColor:"black",width:"300px", padding:"5px",borderRadius:"9px"}}placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)  
       }}/> <br /> 
      
      <Tickbox/>
       <Button password={password} username={username}/>
       <SignUp/>
      

       
     </form>
    
    
    
    </>
   
  )
}

export default Form;