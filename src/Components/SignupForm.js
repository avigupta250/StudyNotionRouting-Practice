import React, { useState } from "react";
import { toast } from "react-hot-toast";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import {  useNavigate } from "react-router-dom";


const SignupForm=({setIsLoggedIn})=>{
    // const setIsLoggedIn=props.setIsLoggedIn;

    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmPassword:"",
        accountType:"student"


    })
    const [showPassword1,setshowPassword1]=useState(false);
    const [showPassword,setshowPassword]=useState(false);
    const [accountType,setaccountType]=useState("student");

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
        if(formData.password!=formData.confirmPassword)
        {
            toast.error("Password Do not Match")
        }
       else{
         
        setIsLoggedIn(true);
        toast.success("Account Created");
        navigate("/dashboard");

        const finalData={
            ...formData,accountType
        }
      
        console.log(finalData);
       }

        
    }
    return (
        <div className=" my-4 w-full  ">
            <div  className=" flex p-1 gap-x-1 bg-richblack-800 my-6 border rounded-full max-w-max ">
                <button onClick={()=>setaccountType("student")}
                 className={`${accountType==="student" ?"bg-richblack-900 rounded-full text-richblack-5":"bg-transparent text-richblack-200 "} py-2 px-5 rounded-full transition-all duration-200`}>
                    Student
                </button>

                <button  onClick={()=>setaccountType("instructor")}
                 className={`${accountType==="instructor" ?"bg-richblack-900 rounded-full text-richblack-5":"bg-transparent text-richblack-200"}  py-2 px-5 rounded-full transition-all duration-200`}
                 >
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
               <div className="flex gap-1  my-1 w-full justify-between">
                      <label>
                           <p className="text[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name<sup className="text-pink-200">*</sup></p>
                           <input
                           className="bg-richblack-800   w-full rounded-[0.5rem] border-b border-b-blue-100 text-richblack-5  p-[8px]"
                               required
                               type="text"
                               name="firstname"
                               onChange={changeHandler}
                               placeholder="Enter First  Name"
                               value={formData.firstname}
                               />
                       </label>
       
                       <label>
                           <p className="text[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name<sup className="text-pink-200">*</sup></p>
                           <input
                            className="bg-richblack-800   w-full rounded-[0.5rem] border-b border-b-blue-100 text-richblack-5  p-[8px]"
                               required
                               type="text"
                               name="lastname"
                               onChange={changeHandler}
                               placeholder="Enter last  Name"
                               value={formData.lastname}
                               />
                       </label>
               </div>

         

               <label className="">
                <p className="text[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Email Address<sup className="text-pink-200">*</sup>
                </p>
                <input
                 className="bg-richblack-800 my-1 rounded-[0.5rem] border-b border-b-blue-100 text-richblack-5 w-full p-[8px]"
                    required
                    type="email"
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder="Enter email"
                    name="email"
                />
             </label>

             {/* create and confirm pasword */}

             <div className="flex  my-1 justify-between" >
             <label className="relative">
                <p className="text[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Create Password<sup className="text-pink-200">*</sup>
                </p>
                <input
                 className="bg-richblack-800 my-1  w-full rounded-[0.5rem] border-b border-b-blue-100 text-richblack-5  p-[8px]"
                    required
                    type={showPassword1 ?("text"):("password")}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder="Enter password"
                    name="password"
                />
                <span className="absolute right-3 top-[40px] cursor-pointer"
                 onClick={()=>setshowPassword1((pre)=>!pre)}>
                    {showPassword1?(<AiOutlineEye  className="font-[24px] text-[#AFB2BF]"/>):(<AiOutlineEyeInvisible  className="font-[24px] text-[#AFB2BF]"/>)}
                </span>
             </label>

             <label className="relative">
                <p className="text[0.875rem]  text-richblack-5 mb-1 leading-[1.375rem]">
                    Confirm Password<sup className="text-pink-200">*</sup>
                </p>
                <input

                 className="bg-richblack-800 my-1   w-full rounded-[0.5rem] border-b border-b-blue-100 text-richblack-5  p-[8px]"
                    required
                    type={showPassword ?("text"):("password")}
                    value={formData.confirmPassword}
                    onChange={changeHandler}
                    placeholder="Confirm password"
                    name="confirmPassword"
                />
                <span className="absolute right-3 top-[40px] cursor-pointer"
                onClick={()=>setshowPassword((prev)=>!prev)}>
                    {showPassword?(<AiOutlineEye className="font-[24px] text-[#AFB2BF]"/>):(<AiOutlineEyeInvisible className="font-[24px] text-[#AFB2BF]"/>)}
                </span>
             </label>
        </div>
           <button className="w-full mt-2 bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]">
            Create Account
           </button>

            </form>
        </div>
        
    )
    
}


export default SignupForm