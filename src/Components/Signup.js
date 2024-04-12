import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = ({ onSignup }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        phoneNumber: "",
        emailAddress: "",
        password: "",
        companyName: "",
        radioButton: null
    });

    function updateUser(e) {
        let key = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [key]: value });
    }

    function updateRadio(e) {
        setUser({ ...user, radioButton: e.target.value });
    }
    function implementSignUp(e) {
        e.preventDefault();
        if (!user.name || !user.phoneNumber || !user.emailAddress || !user.password || !user.radioButton) {
          alert("Please fill all required fields");
        } else {
            onSignup(user);
          navigate("/profilePage");
        }
      }
      
    const { name, phoneNumber, emailAddress, password, companyName, radioButton } = user;
    return (
        <div className="singupPage-container">
          <div>
            <h1>Create your PopX account</h1>  
            <form className="form-container" onSubmit={implementSignUp}>
          
                <fieldset>
                <legend>
                    <label>Full Name<span>*</span></label>
                </legend>
                <input
                type="text"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={updateUser}
            />
                </fieldset>
        
               <fieldset>
                <legend>
                    <label>Phone Number<span>*</span></label>
                </legend>
               
               <input
                type="text"
                maxLength="10"
                placeholder="Enter your phone number"
                name="phoneNumber"
                value={phoneNumber}
                onChange={updateUser}
                />
               </fieldset>

                <fieldset>
                    <legend>
                    <label>Email Address<span>*</span></label>
                    </legend>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        name="emailAddress"
                        value={emailAddress}
                        onChange={updateUser}
                    />
                </fieldset>
                
                <fieldset>
                <legend>
                    <label>Password<span>*</span></label>
                </legend>
                <input
                type="text"
                placeholder="Enter Password"
                name="password"
                value={password}
                onChange={updateUser}
                />
                </fieldset>  
                    
                <fieldset>
                <legend>
                    <label>Company name</label>
                </legend>
                <input
                type="text"
                placeholder="Enter company name"
                name="companyName"
                value={companyName}
                onChange={updateUser}
                    />
                </fieldset>   
            
                <div className="radiobutton-container">
                    <div className="agency-container">
                    <p>Are you an Agency?</p> <span className="red-star">*</span>
                    </div>
            
                    <div className="radio-buttons">
                    <div className="radioButton1">
                        <input className="radio-input1"
                        type="radio"
                        name="agency"
                        value="yes"
                        checked={radioButton === "yes"}
                        onChange={updateRadio}
                        id="yes"
                        /> 
                        <label htmlFor="yes">Yes</label>
                    </div>
                    
                    <div className="radioButton2">
                        <input className="radio-input2"
                        type="radio"
                        name="agency"
                        id="no"
                        value="no"
                        checked={radioButton === "no"}
                        onChange={updateRadio}
                        /> 
                        <label htmlFor="no">No</label>
                    </div>
                    
                    </div>
                </div>
          

                <button className="signup-button">Create Account</button>
          
            </form>
         </div>
        </div>
    );
};

export default SignUp;










