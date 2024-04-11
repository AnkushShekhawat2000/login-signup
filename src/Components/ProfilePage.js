import React from "react";
import ProfilePhoto from "./img/95486188fbf36520e34fc2ec41b4523f.jpg";
import Icon from "./img/pngegg.png"

const ProfilePage = () => {
    return (
        <div className="profile-container">
            <div className="white-container">
              <p>Account Settings</p>
            </div>
            <div className="profile-info">
               <div className="info">
                <img className="profile-img" src={ProfilePhoto} alt="Profile"/>
                <img className="profile-icon" src={Icon} alt="icon"/>
                <div className="details">
                  <h3>Marry Doe</h3>
                  <p>Marry@Gamil.com</p>
                </div>
               </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veritatis nisi aspernatur Dolore magna Diam. 
                </p>  
            </div>
           
            <div className="blank-container">
           
           
            <p>------------------------------------------------------</p>
               
            <p>------------------------------------------------------</p>

          
            </div>

        </div>
    );
};

export default ProfilePage;
