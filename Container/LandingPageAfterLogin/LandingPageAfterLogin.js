import React from "react";
import LandingPageWithoutLoginStyle from "../LandingPageWithoutLogin/LandingPageWithoutLoginStyle";
import Header from "./Header/Header";

const LandingPageAfterLogin = () => {
  const { MainContainer } = LandingPageWithoutLoginStyle();
  return (
    <>
      <MainContainer>
        <Header />
      </MainContainer>
    </>
  );
};

export default LandingPageAfterLogin;
