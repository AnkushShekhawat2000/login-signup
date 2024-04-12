import React from "react";
import ProfilePhoto from "./img/95486188fbf36520e34fc2ec41b4523f.jpg";
import Icon from "./img/pngegg.png"

const ProfilePage = ({user}) => {
  const name = user.name;
  const emailAddress = user.emailAddress;

  if (!user) {
    // Handle case when user data is not available yet
    return <div>Loading...</div>;
  }
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
                  <h3>{name}</h3>
                  <p>{emailAddress}</p>
                </div>
               </div>
                <p className="lorem-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veritatis nisi aspernatur Dolore magna Diam. 
                </p>  
            </div>
           
            <div className="blank-container">
              <div>
                <hr/>
              </div>
              <div>
                <hr/>
              </div>      
            </div>

        </div>
    );
};

export default ProfilePage;
