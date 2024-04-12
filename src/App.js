import React,{useState} from "react";
import LandingPage from "./Components/LandingPage"
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import ProfilePage from "./Components/ProfilePage";
import "./App.css"
import "./Components/Style/landingPage.css"
import "./Components/Style/signup.css"
import "./Components/Style/login.css"
import "./Components/Style/profilePage.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  const [userData, setUserData] = useState(null);

  function handleSignup(data){
    setUserData(data);
  }

  function HandleLogin(data){
    setUserData(data);
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/landingPage" element={<LandingPage/>}/>
          <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
          <Route path="/login" element={<Login onLogin={HandleLogin}/>} />
          <Route path="/profilePage" element={<ProfilePage user={userData}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;


