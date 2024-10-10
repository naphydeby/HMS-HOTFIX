import React from 'react'
import Form from './Form'

const Home = () => {
  return (
    <>
    <form className=' ml-24 mt-9  w-[1100px] h-[650px] bg-slate-100 rounded-3xl flex flex-row justify-between'>
        <div className='flex flex-col px-28 '>
        
            <div>

                 <h1 className='from-neutral-600 font-bold tracking-tighter text-[13px] py-20 '>Finnger</h1>

           </div>
           <div className='mt-[-25px]'>
  
                 <h1 className='text-[40px] font-bold'>Holla,
                 </h1>
                 <h1 className='text-[40px] font-bold mt-[-15px]'>Welcome Back
                 </h1>
                 <h1 className='text-[12px] text-gray-400'>Hey, welcome back to your special place</h1>
                </div>


                
                <Form/>
        


        </div>

        <div className='w-[400px] h-[560px] bg-red-500'></div>
    </form>
    
    
    </>
  )
}

export default Home
