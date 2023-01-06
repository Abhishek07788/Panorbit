import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfile } from "../Api/api";
import style from "../css/getprofile.module.css";

const GetProfiles = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // ------------ Getting data from Api -------
  useEffect(() => {
    setLoading(true);
    setError(false);
    getProfile()
      .then((res) => {
        setData(res.data.users);
        setLoading(false);
        setError(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  // -------- loading ---------
  if (loading) {
    return <h3 style={{ color: "teal" }}>Loading....</h3>;
  }

  // --------- error ---------
  if (error) {
    return <h3 style={{ color: "red" }}>server error....</h3>;
  }

  return (
    <div className={style.card_bottom}>
      {/* --------- Data maping ------ */}
      {data &&
        data.map((el) => (
          <div key={el.id}>
            <Link to={`/homepage/${el.id}`}>
              <div className={style.maping_div}>
                <img src={el.profilepicture} alt="profile image" />
                <p>{el.name}</p>
              </div>
            </Link>
              <hr />
          </div>
        ))}
    </div>
  );
};

export default GetProfiles;
