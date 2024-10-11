import React from "react";
import { Link } from "react-router-dom";



const SignUp = ({username, password}) => {
  return (
    <>
    <div className="flex mt-6 gap-1">
     <h1 className="text-[12px]">Don't have an account?</h1>
    <Link className="text-[#0073cf] font-semibold text-[12px]" to={`/`}>Sign up</Link>

    </div>

    </>
  )
}
export default SignUp;