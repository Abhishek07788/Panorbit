import React, { useEffect, useState } from "react";
import style from "../css/chat.module.css";
import { BsChatRight } from "react-icons/bs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { getProfile } from "../Api/api";

const Chat = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hide, setHide] = useState(false);

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
    <div
      className={style.mainDiv}
      style={{ marginTop: hide ? "-270px" : "20px" }}
    >
      <div onClick={() => setHide(!hide)} className={style.chat}>
        <div>
          <BsChatRight />
          <p>Chat</p>
        </div>
        {hide ? <FiChevronDown /> : <FiChevronUp />}
      </div>
      {hide ? (
        <div className={style.profiles}>
          {/* --------- Data maping ------ */}
          {data &&
            data.map((el) => (
              <div key={el.id}>
                <div className={style.maping_div}>
                  <img src={el.profilepicture} alt="profile image" />
                  <p>{el.name}</p>
                </div>
                <hr />
              </div>
            ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Chat;
