import React from "react";
import Template from "../Components/Template";
import signupImg from "../assets/signup.png"


const Signup=({setIsLoggedIn})=>{
    return(
        <Template
        
        title="Join the millions learning to code with StudyNotion for free"
        desc1="Build skills for today, tommorrow,and beyond"
        desc2="Education to future-proof your career."
        Image={signupImg}
        formType="signup"
        setIsLoggedIn={setIsLoggedIn}
    

        />
    )
}

export default Signup;