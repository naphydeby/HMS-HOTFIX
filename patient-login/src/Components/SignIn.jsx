import React from 'react'
import { Link } from 'react-router-dom';

const SignIn = ({username, password}) => {
  return (
    <>
    <div className='w-24 h-10  rounded-lg bg-[#0073cf] text-center'>
    <Link className=' text-white  text-[13px] font-semibold leading-9' to={`/`}>Sign in</Link>

    </div>
    </>
  )
}

export default SignIn;