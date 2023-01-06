import React from "react";
import style from "../css/profilebottom.module.css";

const ProfileBottom = (props) => {
  const {name, profilepicture, username, email, phone, website, company, address } =
    props;

  return (
    <div className={style.mainDiv}>
      {/* ---------- (left side)----------- */}
      <div className={style.leftSide}>
        <img src={profilepicture} alt="profile img" />
        <p>{name}</p>
        <h2>
          Username : <span>{username}</span>
        </h2>
        <h2>
          e-mail : <span>{email}</span>
        </h2>
        <h2>
          Phone : <span>{phone}</span>
        </h2>
        <h2>
          Website : <span>{website}</span>
        </h2>
        <hr />
        <h2>Company</h2>
        <h2>
          Name : <span>{company.name}</span>
        </h2>
        <h2>
          catchphrase : <span>{company.catchPhrase}</span>
        </h2>
        <h2>
          bs : <span>{company.bs}</span>
        </h2>
      </div>
      {/* -------- (vertical line) ------ */}
      <p className={style.vl}></p>

      {/* -------- (right side)---------- */}
      <div className={style.rightSide}>
        <h2>Address:</h2>
        <div className={style.address}>
          <h2>
            Street : <span>{address.street}</span>
          </h2>
          <h2>
            Suite : <span>{address.suite}</span>
          </h2>
          <h2>
            City : <span>{address.city}</span>
          </h2>
          <h2>
            Zipcode : <span>{address.zipcode}</span>
          </h2>
        </div>
        {/* ---------- (map)---------- */}
        <iframe
          width="600"
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
          <p>Lat : <span>{address.geo.lat}</span></p>
          <p>Lng : <span>{address.geo.lng}</span></p>
        </div>
      </div>
    </div>
  );
};

export default ProfileBottom;
