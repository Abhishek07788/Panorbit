import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import style from "../css/homepage.module.css";

const LeftNav = () => {
  const [id, setId] = useState("1");

  useEffect(() => {
    setId(sessionStorage.getItem("id") || 1);
  }, []);

  return (
    <div className={style.mainDiv}>
      <NavLink
        to={`/homepage/${id}`}
        className={({ isActive }) =>
          isActive ? style.active : style.notActive
        }
      >
        <p>Profile</p>
      </NavLink>

      <hr />
      
      <NavLink
        to="/post"
        className={({ isActive }) =>
          isActive ? style.active : style.notActive
        }
      >
        <p>Posts</p>
      </NavLink>
     
      <hr />
     
      <NavLink
        to="/gallery"
        className={({ isActive }) =>
          isActive ? style.active : style.notActive
        }
      >
        <p>Gallery</p>
      </NavLink>
     
      <hr />
    
      <NavLink
        to="/todo"
        className={({ isActive }) =>
          isActive ? style.active : style.notActive
        }
      >
        <p>ToDo</p>
      </NavLink>
    </div>
  );
};

export default LeftNav;
