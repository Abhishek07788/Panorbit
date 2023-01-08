import React from "react";
import style from "../css/profilebottom.module.css";
import Chat from "./Chat";

const ProfileBottom = (props) => {
  const {
    name,
    profilepicture,
    username,
    email,
    phone,
    website,
    company,
    address,
  } = props;

  return (
    <div className={style.mainDiv}>
      {/* ---------- (left side)----------- */}
      <div className={style.leftSide}>
        <img src={profilepicture} alt="profile img" />
        {/* ------------ (name) ----------- */}
        <p>{name}</p>
        <div className={style.userName}>
          <div>
            <h2 style={{ marginTop: "0px" }}>Username :</h2>
            <h2>e-mail :</h2>
            <h2>Phone :</h2>
            <h2>Website :</h2>
          </div>
          <div>
            <h3 style={{ marginTop: "0px" }}>{username}</h3>
            <h3>{email}</h3>
            <h3>{phone}</h3>
            <h3>{website}</h3>
          </div>
        </div>
        <hr />
        {/* --------------- (company)--------- */}
        <h2>Company</h2>
        <div className={style.company}>
          <div>
            <h2 style={{ marginTop: "0px" }}>Name :</h2>
            <h2>catchphrase :</h2>
            <h2>Bs :</h2>
          </div>
          <div>
            <h3 style={{ paddingTop: "3px" }}>{company.name}</h3>
            <h3>{company.catchPhrase}</h3>
            <h3>{company.bs}</h3>
          </div>
        </div>
      </div>
      {/* -------- (vertical line) ------ */}
      <p className={style.vl}></p>

      {/* -------- (right side)---------- */}
      <div className={style.rightSide}>
        {/* -----------(address)------- */}
        <h2>Address:</h2>
        <div className={style.address}>
          <div>
            <h2 style={{ marginTop: "0px" }}>Street :</h2>
            <h2>Suite :</h2>
            <h2>City :</h2>
            <h2>Zipcode :</h2>
          </div>
          <div>
            <h3 style={{ marginTop: "0px" }}>{address.street}</h3>
            <h3>{address.suite}</h3>
            <h3>{address.city}</h3>
            <h3>{address.zipcode}</h3>
          </div>
        </div>
        {/* ---------- (map)---------- */}
        <iframe
          width="100%"
          height="350"
          className={style.Map}
          src={`https://maps.google.com/maps?q=${address.street},t=&z=13&ie=UTF8&iwloc=&output=embed`}
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
        {/* ---------- (geo)--------- */}
        <div className={style.geo}>
          <p>
            Lat : <span>{address.geo.lat}</span>
          </p>
          <p>
            Lng : <span>{address.geo.lng}</span>
          </p>
        </div>
       {/* ------------- (chat) ---------- */}
       <div>
        <Chat />
      </div>
      </div>
    </div>
  );
};

export default ProfileBottom;
