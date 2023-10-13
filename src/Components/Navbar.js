import React from 'react'
import logo from "../assets/Logo.svg"
import { Link, NavLink } from 'react-router-dom'
import { toast } from 'react-hot-toast'
// import Home from "./Page/Home"


const Navbar=(props)=>{

    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;

    return (
        <div className='flex justify-between items-center w-11/12 max-w-[1160px]  py-4 mx-auto'>
            <Link to="/">
                <img src={logo} alt="logo" className='bg-black' width={160} height={32} loading='lazy'/>
            </Link>

            <nav >
                <ul className='flex gap-x-6 text-white '>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Contact</NavLink>
                    </li>
                </ul>
            </nav>

             <div className='flex items-center gap-x-4 '>

                 {!isLoggedIn && 
                   <Link to="/login">
                       <button className='bg-richblack-800 py-[8px] px-[12px] text-white rounded-md border border-richblack-700'>
                           Login
                       </button>
                   </Link>
                }    


               {!isLoggedIn && 
                   <Link to="/signup">
                        <button className='bg-richblack-800 py-[8px] px-[12px] text-white rounded-md border border-richblack-700'>
                            Sign Up
                        </button>
                   </Link>
               }

                {isLoggedIn &&
                    <Link to="/">
                       <button className='bg-richblack-800 py-[8px] px-[12px] text-white rounded-md border border-richblack-700'
                        onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success("Logged Out")
                       }}>
                           Logout
                       </button>
                    </Link>
                }

                {isLoggedIn &&

                    <Link to="/dashboard">
                       <button className='bg-richblack-800 py-[8px] px-[12px] text-white rounded-md border border-richblack-700'
                       >
                           Dashboard
                       </button>
                    </Link>
                }
             </div>
            
        </div>
    )
}

export default Navbar;