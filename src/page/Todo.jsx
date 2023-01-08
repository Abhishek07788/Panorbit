import React, { useContext } from "react";
import LeftNav from "../components/LeftNav";
import TopNav from "../components/TopNav";
import { AppContest } from "../contestApi/ContestProvider";
import style from "../css/comingsoonpage.module.css"

const ToDo = () => {
  const { setShowProfile } = useContext(AppContest); // getting data from contest api

  return (
    <div className={style.mainDiv}>
      {/* --------- Left Navbar -------- */}
      <LeftNav />

      {/* ---------- Profile --------- */}
      <div className={style.topDiv}>
        <div className={style.profile}>
          <h2>ToDo</h2>
          <TopNav />
        </div>

        <hr style ={{ color: "grey", width: "100%" }} />

        {/* ---------- Screen ------- */}
        <div className={style.screen} onClick={() => setShowProfile(false)}>
          <h1 className={style.ComingSoon}>Coming Soon</h1>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
