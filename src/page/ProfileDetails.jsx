import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GetProfiles from "../components/GetProfiles";
import { AppContest } from "../contestApi/ContestProvider";
import style from "../css/profiledetails.module.css";

const ProfileDetails = () => {
  const { profileData, setShowProfile, showProfile } = useContext(AppContest); // getting data from contest api

  const handleClick = () => {
    setShowProfile(false);
    sessionStorage.clear("id");
  };

  return (
    <div
      className={style.MainDiv}
      style={{ display: showProfile ? "block" : "none" }}
    >
      <div className={style.profile}>
        <img src={profileData[0]?.profilepicture} alt="profile" />
        <p>{profileData[0]?.name}</p>
        <p>{profileData[0]?.email}</p>
      </div>
      <hr />
      {/* ------- get profile ---- */}
      <div className={style.getProfile} onClick={() => setShowProfile(false)}>
        <GetProfiles />
      </div>

      {/* -------(LogOut)------ */}
      <Link to="/">
        <button onClick={handleClick} className={style.signout_button}>
          Sign out
        </button>
      </Link>
    </div>
  );
};

export default ProfileDetails;
