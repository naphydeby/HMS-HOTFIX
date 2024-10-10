import React from 'react'

const Navbar = () => {
  return (
    <div>
         <nav className="bg-white w-full h-20 fixed  px-10 flex items-center border-b-[1px] ml-4 border-stone-200">
                    <div className="flex justify-between w-72 ">
                        <button  className="w-11 h-11 bg-violet-500 rounded-lg"></button>
                        <input type="text" placeholder="Search" className="bg-violet-50 w-60 outline-none rounded-lg px-5"/>
                    </div>
                    <div>

                    </div>
            </nav>
    </div>
  )
}

export default Navbar