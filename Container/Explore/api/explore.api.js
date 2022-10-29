import axios from "axios";

const URL = "http://localhost:4000/explore";

export const fetchExploreSection = async () => {
  const res = await axios.get(URL);

  return res.data;
};
