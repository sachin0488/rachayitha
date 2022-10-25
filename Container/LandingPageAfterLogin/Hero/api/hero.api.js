import axios from "axios";

const URL = "http://localhost:4000/landing_banner_page_section";
const URL1 = "http://localhost:4000/landing_banner_page_section1";

export const fetchBannerSectionImg = async () => {
  const res = await axios.get(URL);

  return res.data;
};

export const fetchBannerSectionImg1 = async () => {
  const res = await axios.get(URL1);

  return res.data;
};
