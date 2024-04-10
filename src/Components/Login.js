import React, { useState} from "react";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    function implementLogin(e) {
       
        if ( !formData.email || !formData.password ) {
          alert("all filed are mendiatory");
        } else {
          navigate("/dashboard");
        }
      }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={implementLogin}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="submit">Login</button>
            </form>
          
        </div>
    );
};

export default Login;
