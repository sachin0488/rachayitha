import axios from "axios";

const URL = "http://localhost:4000/top_collection";

export const fetchTopCollection = async () => {
  const res = await axios.get(URL);

  return res.data;
};
