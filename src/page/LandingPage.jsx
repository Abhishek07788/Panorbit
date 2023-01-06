import React from "react";
import style from "../css/landing.module.css";
import GetProfiles from "../components/GetProfiles";

const LandingPage = () => {
  return (
    <div className={style.landingMain}>
      <div className={style.card}>
        <h1 className={style.card_top}>Select an account</h1>
        <GetProfiles />
      </div>
    </div>
  );
};

export default LandingPage;
