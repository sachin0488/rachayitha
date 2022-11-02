import axios from "axios";

const URL = "http://localhost:4000/ranking";

export const fetchRankingSection = async () => {
  const res = await axios.get(URL);

  return res.data;
};
