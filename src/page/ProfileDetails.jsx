import React from "react";
import { Link } from "react-router-dom";
import GetProfiles from "../components/GetProfiles";
import style from "../css/profiledetails.module.css";

const ProfileDetails = (props) => {
  const { name, profilepicture, email, setShowProfile, showProfile } = props;
  return (
    <div
      className={style.MainDiv}
      style={{ display: showProfile ? "block" : "none" }}
    >
      <div className={style.profile}>
        <img src={profilepicture} alt="profile" />
        <p>{name}</p>
        <p>{email}</p>
      </div>
      <hr />
      {/* ------- get profile ---- */}
      <div className={style.getProfile} onClick={()=> setShowProfile(false)}>
        <GetProfiles />
      </div>

      {/* -------(LogOut)------ */}
      <Link to="/">
        <button
          onClick={() => setShowProfile(false)}
          className={style.signout_button}
        >
          Sign out
        </button>
      </Link>
    </div>
  );
};

export default ProfileDetails;
