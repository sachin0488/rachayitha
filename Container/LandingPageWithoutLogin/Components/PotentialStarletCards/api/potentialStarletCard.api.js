import React from "react";
import axios from "axios";
const API_URL = "http://localhost:4000/potential_starlet";
export const fetchPotentialStarletCard = async () => {
  const res = await axios.get(API_URL);

  return res.data;
};
const potentialStarletCardApi = () => {
  return <div></div>;
};

export default potentialStarletCardApi;
