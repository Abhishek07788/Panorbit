import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "../css/homepage.module.css";

const LeftNav = () => {
  const [id, setId] = useState("1")

  useEffect(()=>{
    setId(sessionStorage.getItem("id") || 1)
  },[])

  return (
    <div className={style.mainDiv}>
      <p>
        <Link to={`/homepage/${id}`}>Profile</Link>
      </p>
      <hr />
      <p>
        <Link to="/post">Posts</Link>
      </p>
      <hr />
      <p>
        <Link to="/gallery"> Gallery </Link>
      </p>
      <hr />
      <p>
        <Link to="/todo"> ToDo </Link>
      </p>
    </div>
  );
};

export default LeftNav;
