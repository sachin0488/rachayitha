import React from "react";
import LandingPageWithoutLoginStyle from "./LandingPageWithoutLoginStyle";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import WeeklyFeaturedCards from "./WeeklyFeaturedCards/WeeklyFeaturedCards";
import PotentialStarletCards from "./PotentialStarletCards/PotentialStarletCards";
import NewArrivalsCards from "./NewArrivalsCards/NewArrivalsCards";
import Footer from "./Footer/Footer";

const LandingPageWithoutLogin = () => {
  const { MainContainer } = LandingPageWithoutLoginStyle();
  return (
    <>
      <MainContainer>
        <Header />
        <Banner />
        <WeeklyFeaturedCards />
        <PotentialStarletCards />
        <NewArrivalsCards />
        <Footer />
      </MainContainer>
    </>
  );
};

export default LandingPageWithoutLogin;
