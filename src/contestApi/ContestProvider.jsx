import React, { useState } from "react";
import { createContext } from "react";
import { getProfile } from "../Api/api";

export const AppContest = createContext();
const ContestProvider = ({ children }) => {
  // --------- profile show hide -------
  const [showProfile, setShowProfile] = useState(false);

  // --------------------
  const [profileData, setProfileData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // ------------ Getting data from Api -------
  const getAllData = () => {
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
  };

  // ------------ (fetching data with param id)---------
  const getFilterData = (id) => {
    getProfile()
      .then((res) => {
        setProfileData(res.data.users.filter((el) => el.id === Number(id)));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <AppContest.Provider
      value={{
        data,
        profileData,
        getFilterData,
        loading,
        error,
        getAllData,
        setShowProfile,
        showProfile,
      }}
    >
      {children}
    </AppContest.Provider>
  );
};

export default ContestProvider;
