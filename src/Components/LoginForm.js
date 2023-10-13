import React, { useState } from "react";

import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast'


const LoginForm=({setIsLoggedIn})=>{
    const [formData,setFormData]=useState(
        {
            email:"",password:""
        }
    )

    const navigate=useNavigate();

    const [showPassword,setshowPassword]=useState(false);

    function changeHandler(event){

        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))

    }
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");



    }
    return (
        <form onSubmit={submitHandler}
        className="flex flex-col w-full gap-y-4 mt-6 ">
             <label className="w-full ">
                <p className="text[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Email Address<sup className="text-pink-200">*</sup>
                </p>
                <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder="Enter Email Id"
                    name="email"
                    className="bg-richblack-800 rounded-[0.5rem] border-b border-b-blue-100 text-richblack-5 w-full p-[8px]"
                />
             </label>

             <label className="relative">
                <p className="text[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Password<sup className="text-pink-200" >*</sup>
                </p>
                <input
                    required
                    type={showPassword ?("text"):("password")}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder="Enter Password"
                    name="password"
                    className="bg-richblack-800 rounded-[0.5rem] border-b border-b-blue-100 focus: text-richblack-5 w-full p-[8px]"
                />
                <span className="absolute right-3 top-[38px] cursor-pointer" onClick={()=>setshowPassword((prev)=>!prev)}>
                    {showPassword?(<AiOutlineEye className="font-[24px] text-[#AFB2BF]"/>):(<AiOutlineEyeInvisible className="font-[20px] text-[#AFB2BF]"/>)}
                </span>

                <Link to="#">
                    <p className="text-xs mt-1 text-blue-100 w-fit ml-auto">
                        Forgot Password
                    </p>
                </Link>
             </label>

             <button className="w-full mt-5 bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]">
                    Sign In
             </button>
        </form>
    )
}

export default LoginForm