import React from "react"
import {useNavigate} from "react-router-dom"

const Home = () =>{

    const navigate = useNavigate();

    function reDirectToSignUp(){
       navigate("/signup");
    }

    function reDirectToLogin(){
        navigate("/login");
    }

    return(
        <div>
          <div>
            <h5>Welcome to PopX</h5>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veritatis nisi aspernatur. Facere, hic voluptatum expedita omnis illum ipsum quos qui eos exercitationem facilis aut animi! Exercitationem rem doloribus ducimus.</h1>
          </div>
          <button onClick={reDirectToSignUp}>Create Account</button>
          <button onClick={reDirectToLogin}>Already Registered? Login</button>
        </div>
    )
}

export default Home
