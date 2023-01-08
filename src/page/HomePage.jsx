import React, { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import LeftNav from "../components/LeftNav";
import ProfileBottom from "../components/ProfileBottom";
import TopNav from "../components/TopNav";
import { AppContest } from "../contestApi/ContestProvider";
import style from "../css/homepage.module.css";

const HomePage = () => {
  const { profileData, getFilterData, setShowProfile, showProfile } =
    useContext(AppContest); // getting data from contest api
  const { id } = useParams();
  sessionStorage.setItem("id", id);

  // ------------ (fetching data with param id)---------
  useEffect(() => {
    let ID = sessionStorage.getItem("id") || 1;
    getFilterData(ID);
  }, [id]);

  return (
    <div>
      <div className={style.HomeMain}>
        {/* ------------ (Left navbar)---------- */}
        <LeftNav />
        {/* ----------- (Right part)------------- */}
        {profileData &&
          profileData.map((el) => (
            <div
              style={{ width: "80%" }}
              className={style.profile_top}
              key={el.id}
            >
              {/* ---------- top nav------- */}
              <div className={style.profile}>
                <h2>Profile</h2>
                <TopNav />
              </div>

              <hr />
              {/* ------------- (bottom)------------- */}
              <div onClick={() => setShowProfile(false)}>
                <ProfileBottom {...el} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
