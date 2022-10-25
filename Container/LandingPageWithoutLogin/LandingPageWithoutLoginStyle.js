import styled from "@emotion/styled";
import React from "react";

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: white;
  color: black;
`;

const LandingPageWithoutLoginStyle = () => {
  return { MainContainer };
};

export default LandingPageWithoutLoginStyle;
