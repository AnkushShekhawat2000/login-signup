import React from "react"
import {useNavigate} from "react-router-dom"

const LandingPage = () =>{

    const navigate = useNavigate();

    function reDirectToSignUp(){
       navigate("/signup");
    }

    function reDirectToLogin(){
        navigate("/login");
    }

    return(
        <div className="landingPage-container container">
         <div className="content-div">
           <div className="text-container">
            <h1>Welcome to PopX</h1>
            <p>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,</p>
           </div>
          <div className="buttons-container">
            <button className="ldp-button1" onClick={reDirectToSignUp}>Create Account</button>
            <button className="ldp-button2" onClick={reDirectToLogin}>Already Registered? Login</button>
          </div>
         </div>
        </div>
    )
}

export default LandingPage