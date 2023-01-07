import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProfile } from "../Api/api";
import LeftNav from "../components/LeftNav";
import ProfileBottom from "../components/ProfileBottom";
import style from "../css/homepage.module.css";
import ProfileDetails from "./ProfileDetails";

const HomePage = () => {
  const [profile, setProfile] = useState([]);
  const [showProfile, setShowProfile] = useState(false)
  const { id } = useParams();

  // ------------ (fetching data with param id)---------
  useEffect(() => {
    getProfile().then((res) => {
      setProfile((res.data.users).filter((el)=> el.id === Number(id)));
    });
  }, [id]);

  return (
    <div>
      <div className={style.HomeMain}>
        {/* ------------ (Left navbar)---------- */}
        <LeftNav />
        {/* ----------- (Right part)------------- */}
        {profile &&
          profile.map((el) => (
            <div style={{ width: "80%" }} className={style.profile_top} key={el.id} >
                  {/* -------- (Profile details component)----- */}
                  <ProfileDetails {...el} showProfile={showProfile} setShowProfile={setShowProfile}/>

                  {/* ---------- top------- */}
                  <div>
                    <h2>Profile</h2>
                    <div onClick={()=> setShowProfile(!showProfile)} className={style.profile}>
                      <img
                        src={el.profilepicture}
                        alt="profile img"
                      />
                      <p>{el.name}</p>
                    </div>
                  </div>
                  <hr />
                  {/* ------------- (bottom)------------- */}
                  <div onClick={()=> setShowProfile(false)}>
                  <ProfileBottom {...el} />
                  </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
