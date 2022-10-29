import styled from "@emotion/styled";
import React from "react";

// className=" md:text-base text-sm px-3 border border-white dark:border-[#6F7684] rounded-sm py-2 md:px-5 text-white  md:mr-8 mr-3 hover:text-white top-0 left-0 transition ease-in-out delay-150 translate-y-0.5 sm:hover:-translate-x-1 hover:scale-110  duration-300 ... md:mb-8 mb-3  "

const GenreButtons = styled.button`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  width: 97px;
  font-size: 15px;
  line-height: 18px;
  padding: 8px 12px;
  border-radius: 12px;
  border: none;
  letter-spacing: 0.1em;
  color: black;
`;
const GenreButtonStyle = () => {
  return { GenreButtons };
};

export default GenreButtonStyle;
