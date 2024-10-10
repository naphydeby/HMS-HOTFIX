import React, {useState} from 'react'
import logo from '../assets/images/logo.png'
import custom from '../assets/images/custom-17.svg'
import '../App.css'
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { TbScan } from "react-icons/tb";
import { PiDiamondsFourFill } from "react-icons/pi";
import { IoIosSwitch } from "react-icons/io";
import { TbDeviceAnalytics } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";

const SideBar = () => {

    const [showPatientsDropdown, setShowPatientsDropdown] = useState(false);
  const [showDoctorsDropdown, setShowDoctorsDropdown] = useState(false);
  const [featuresdropdown, setfeaturesdropdown] = useState(false);
  const [appsdropdown, setappsdropdown] = useState(false);
  const [formsdropdown, setformsdropdown] = useState(false);
  const [authdropdown, setauthdropdown] = useState(false);
  const [miscdropdown, setmiscdropdown] = useState(false);

  // Function to toggle the Dashboard dropdown
  const misc =()=>{
    setmiscdropdown((prev) => !prev)
  }
  const auth =()=>{
    setauthdropdown((prev) => !prev)
  }
  const forms =()=>{
    setformsdropdown((prev) => !prev)
  }
  const apps =()=>{
    setappsdropdown((prev) => !prev)
  }
  const features =()=>{
    setfeaturesdropdown((prev) => !prev)
  }
  
  // Function to toggle the Patients dropdown
  const togglePatientsDropdown = () => {
    setShowPatientsDropdown((prev) => !prev);
  };

  // Function to toggle the Doctors dropdown
  const toggleDoctorsDropdown = () => {
    setShowDoctorsDropdown((prev) => !prev);
  };
  return (
    <div className="grid grid-cols-[16rem_1fr]" >
        <aside className="w-[270px] h-screen bg-violet-50 fixed top-0 left-0 ">
                <div className="w-[270px] h-20 fixed flex items-center justify-center ">
                    <img src={logo} alt="logo" />
                </div>
                <div className="mt-20">
                    <div className="max-h-[100%] overflow-x-auto  no-scrollbar flex flex-col w-[270px] h-screen px-7">
                        <div className="flex flex-col gap-y-7 mt-8">
                            <div className="flex justify-between w-28 items-center ">
                                <TbLayoutDashboardFilled  className="text-xl"/> 
                                <a href="#"  className="hover:text-blue-400">Dashboard</a>
                            </div>
                            <div className="flex justify-between w-32 items-center">
                                <TbScan className="text-xl"/>
                                <a href="#" className="hover:text-blue-400">Appointments</a>
                            </div>    

                            <div>
                                <div className="flex justify-between w-60 items-center flex-row" onClick={togglePatientsDropdown}>
                                    <div className="flex justify-between w-20 items-center">
                                        <PiDiamondsFourFill className="text-xl"/>
                                        <a href="#"  className="hover:text-blue-400">Patients</a>
                                    </div>
                                    <RiArrowDropDownLine className="text-xl" />
                                </div>
                                
                                {showPatientsDropdown && (
                                <div className="flex flex-col items-center justify-center my-4 text-start">
                                    <ul className="space-y-4">
                                        <li className="list-disc hover:text-blue-400"> <a href="#">Patient</a></li>
                                        <li className="list-disc hover:text-blue-400"> <a href="#">Patient Details</a></li>
                                    </ul>
                                </div>
                                )}
                            </div>

                            <div >
                                <div className="flex justify-between w-60 items-center flex-row" onClick={toggleDoctorsDropdown}>
                                    <div className="flex justify-between w-20 items-center">
                                        <TbDeviceAnalytics className="text-xl"/>
                                        <a href="#"  className="hover:text-blue-400"> Doctors </a>
                                    </div>
                                    <RiArrowDropDownLine className="text-xl" />
                                </div>
                                {showDoctorsDropdown && (
                                <div className="flex flex-col items-center justify-center my-4 text-start">
                                    <ul className="space-y-4">
                                        <li className="list-disc hover:text-blue-400"> <a href="#">Doctor Item 1</a></li>
                                        <li className="list-disc hover:text-blue-400"> <a href="#">Doctor Item 2</a></li>
                                    </ul>
                                </div>
                                )}
                            </div>
                            
                            <div className="flex justify-between w-20 items-center">
                                <IoIosSwitch className="text-xl"/>
                                <a href="#" className="hover:text-blue-400">Nurse</a>
                            </div>

                            <div className="flex justify-between w-28 items-center">
                                <FaUsers className="text-xl" />
                                <a href="#" className="hover:text-blue-400">Other staffs</a>
                            </div>

                        </div>


                        <div className="flex flex-col gap-y-7 mt-8 ">
                            <p className="text-[12px] text-blue-800 ">COMPONENTS</p>
                            <div className="flex flex-col gap-y-7 mt-2">
                                {/* <div className="" onClick={features}> */}
                                    <div onClick={features}>
                                        <div className="flex w-60 justify-between flex-row">
                                            <div className="flex justify-between w-24 items-center">
                                                <CgMenuLeft className="text-xl"/>
                                                <a href="#" >Features</a>
                                            </div>
                                            <RiArrowDropDownLine className="text-xl" />

                                        </div>
                                       
                                        {featuresdropdown && (
                                        <div className="flex flex-col items-center justify-center my-4 text-start">
                                            <ul className="space-y-4">
                                                <li className="list-disc"><a href="#">Card</a></li>
                                                <li className="list-disc"><a href="#">BS UI</a></li>
                                                <li className="list-disc"><a href="#">Icons</a></li>
                                                <li className="list-disc"><a href="#">Custom UI</a></li>
                                                <li className="list-disc"><a href="#">Components</a></li>
                                            </ul>
                                        </div>
                                        )}
                                    {/* </div> */}
                                </div>
                                

                                <div >
                                    <a href="#" onClick={forms} className="hover:text-blue-400">Forms, Tables & Charts</a>
                                    {formsdropdown && (
                                    <div className="flex flex-col items-center justify-center my-4 text-start">
                                        <ul className="space-y-4">
                                            <li className="list-disc hover:text-blue-400"><a href="#">Forms</a></li>
                                            <li className="list-disc hover:text-blue-400"><a href="#">Tables</a></li>
                                            <li className="list-disc hover:text-blue-400"><a href="#">Charts</a></li>
                                        </ul>
                                    </div>
                                    )}
                                </div>

                                <div >
                                    <a href="#" onClick={apps} className="hover:text-blue-400">Apps $ Widgets</a>
                                    {appsdropdown && (
                                    <div className="flex flex-col items-center justify-center my-4 text-start">
                                        <ul className="space-y-4">
                                            <li className="list-disc hover:text-blue-400"><a href="#">Apps</a></li>
                                            <li className="list-disc hover:text-blue-400"><a href="#">Widgets</a></li>
                                            <li className="list-disc hover:text-blue-400"><a href="#">Ecommerce</a></li>
                                            <li className="list-disc hover:text-blue-400"><a href="#">Sample Pages</a></li>
                                        </ul>
                                    </div>
                                    )}
                                </div>

                                <div>
                                    <a href="#" onClick={auth} className="hover:text-blue-400">Authentication</a>
                                    {authdropdown && (
                                    <div className="flex flex-col items-center justify-center my-4 text-start">
                                        <ul className="space-y-4">
                                            <li className="list-disc hover:text-blue-400"><a href="#">Apps</a></li>
                                            <li className="list-disc hover:text-blue-400"><a href="#">Widgets</a></li>
                                            <li className="list-disc hover:text-blue-400"><a href="#">Ecommerce</a></li>
                                            <li className="list-disc hover:text-blue-400"><a href="#">Sample Pages</a></li>
                                        </ul>
                                    </div>
                                    )}
                                </div>

                                <div >
                                    <a href="#" onClick={misc} className="hover:text-blue-400">Miscellaneous</a>
                                    {miscdropdown && (
                                    <div className="flex flex-col items-center justify-center my-4 text-start">
                                        <ul className="space-y-4">
                                            <li className="list-disc hover:text-blue-400"><a href="#">Error 404</a></li>
                                            <li className="list-disc hover:text-blue-400"><a href="#">Error 500</a></li>
                                            <li className="list-disc hover:text-blue-400"><a href="#">Maintenance</a></li>
                                        </ul>
                                    </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="pb-10 flex flex-col items-center "> 
                            <img src={custom} className="relative top-12" />
                            <div className="w-52 h-36 bg-indigo-300 rounded-2xl pt-16">
                                <h1 className="text-lg text-center">Make an Appointments</h1>
                                <p className="text-center">Best Health Care here</p>
                            </div>
                        </div>
                        <div className="pb-24 flex flex-col items-center ">
                            <h1 className="font-bold">Doclinc dashboard</h1>
                            <p>© 2024 All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </aside>
    </div>
  )
}

export default SideBar