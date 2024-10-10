import React from 'react'
import Form from './Form'
import {Link, NavLink} from "react-router-dom"



const Home = () => {
  const homeItems=[
    {
      title:"Sign Up",
      path:"/"
    }
  ]
  return (
    <>
    <form className=' ml-24 mt-9  w-[1100px] h-[650px] bg-slate-100 rounded-3xl flex flex-row justify-between'>
        <div className='flex flex-col px-28 '>
        
            <div>

                 <img src="src/assets/Images/Animation - 1728548578534.gif" alt="" className='py-4' />

           </div>
           <div className='mt-[15px]'>
  
                 <h1 className='text-[40px] font-bold'>Holla,
                 </h1>
                 <h1 className='text-[40px] font-bold mt-[-15px]'>Welcome Back
                 </h1>
                 <h1 className='text-[12px] text-gray-400'>Hey, welcome back to your special place</h1>
                </div>


                
                <Form/>
              
              

        </div>

        <div className=''>
          <img src="src/assets/Images/patient.jpeg" alt="" className='rounded-lg h-[600px] w-[500px]' />
        </div>
    </form>
    
    
    </>
  )
}

export default Home
