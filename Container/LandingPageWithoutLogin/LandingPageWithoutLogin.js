import React from "react";
import LandingPageWithoutLoginStyle from "./LandingPageWithoutLoginStyle";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import WeeklyFeaturedCards from "./WeeklyFeaturedCards/WeeklyFeaturedCards";

const LandingPageWithoutLogin = () => {
  const { MainContainer } = LandingPageWithoutLoginStyle();
  return (
    <>
      <MainContainer>
        <Header />
        <Banner />
        <WeeklyFeaturedCards />
      </MainContainer>
    </>
  );
};

export default LandingPageWithoutLogin;
