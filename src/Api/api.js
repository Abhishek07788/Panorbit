import axios from "axios";

// ---------- get profile ---------
export const getProfile = () => {
  return axios.get("https://panorbit.in/api/users.json");
};


