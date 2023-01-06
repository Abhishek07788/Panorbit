import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProfile } from "../Api/api";
import LeftNav from "../components/LeftNav";
import ProfileBottom from "../components/ProfileBottom";
import style from "../css/homepage.module.css";

const HomePage = () => {
  const [profile, setProfile] = useState([]);
  const { id } = useParams();

  // ------------ (fetching data with param id)---------
  useEffect(() => {
    getProfile().then((res) => {
      setProfile((res.data.users).filter((el)=> el.id === Number(id)));
    });
  }, []);

  return (
    <div>
      <div className={style.HomeMain}>
        {/* ------------ (Left navbar)---------- */}
        <LeftNav />
        {/* ----------- (Right part)------------- */}
        {profile &&
          profile.map((el) => (
                <div style={{ width: "80%" }} className={style.profile_top} key={el.id}>
                  {/* ---------- top------- */}
                  <div>
                    <h2>Profile</h2>
                    <div className={style.profile}>
                      <img
                        src={el.profilepicture}
                        alt="profile img"
                      />
                      <p>{el.name}</p>
                    </div>
                  </div>
                  <hr />
                  {/* ------------- (bottom)------------- */}
                  <ProfileBottom {...el}/>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
