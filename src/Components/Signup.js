import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
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
          navigate("/dashboard");
        }
      }
      
    const { name, phoneNumber, emailAddress, password, companyName, radioButton } = user;
    return (
        <div>
            <form onSubmit={implementSignUp}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={name}
                    onChange={updateUser}
                />
                <input
                    type="text"
                    maxLength="10"
                    placeholder="Enter your phone number"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={updateUser}
                />
                <input
                    type="email"
                    placeholder="Enter your email"
                    name="emailAddress"
                    value={emailAddress}
                    onChange={updateUser}
                />
                <input
                    type="text"
                    placeholder="Enter Password"
                    name="password"
                    value={password}
                    onChange={updateUser}
                />
                <input
                    type="text"
                    placeholder="Enter company name"
                    name="companyName"
                    value={companyName}
                    onChange={updateUser}
                />

                <label>
                    <h1>Are you an Agency?</h1>
                    <input
                        type="radio"
                        name="agency"
                        value="yes"
                        checked={radioButton === "yes"}
                        onChange={updateRadio}
                    /> <label>Yes</label>
                    <input
                        type="radio"
                        name="agency"
                        value="no"
                        checked={radioButton === "no"}
                        onChange={updateRadio}
                    /> <label>No</label>
                </label>

                <button>Create Account</button>
            </form>
        </div>
    );
};

export default SignUp;










