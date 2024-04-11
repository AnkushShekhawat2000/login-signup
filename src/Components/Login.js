import React, { useState} from "react";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        emailAddress: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    function implementLogin(e) {
        e.preventDefault();
        if ( !formData.emailAddress || !formData.password ) {
          alert("all filed are mendiatory");
        } else {
          navigate("/dashboard");
          setFormData({emailAddress:"", password:""});
        }
      }

    return (
        <div className="login-container">
            <h1>Signin to your PopX account</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <form onSubmit={implementLogin}>
               <fieldset>
                <legend>
                <label>Email Address</label>
                </legend>
                <input
                    type="email"
                    placeholder="Enter email address"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                />
               </fieldset>
                <fieldset>
                    <legend>
                    <label>Password</label>
                    </legend>
                <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                />
             </fieldset>
                  
                <button className="login-button" type="submit">Login</button>
            </form>
          
        </div>
    );
};

export default Login;
