import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import Footer from "../LandingPageWithoutLogin/Footer/Footer";
import LandingPageWithoutLoginStyle from "../LandingPageWithoutLogin/LandingPageWithoutLoginStyle";
import NewArrivalCardMiniComp from "../LandingPageWithoutLogin/NewArrivalsCards/NewArrivalCardMiniComp";
import NewArrivalsCards from "../LandingPageWithoutLogin/NewArrivalsCards/NewArrivalsCards";
import PotentialStarletCards from "../LandingPageWithoutLogin/PotentialStarletCards/PotentialStarletCards";
import WeeklyFeaturedCards from "../LandingPageWithoutLogin/WeeklyFeaturedCards/WeeklyFeaturedCards";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import TopCollection from "./TopCollection/TopCollection";
import TopCollectionStyle from "./TopCollection/TopCollectionStyle";

const LandingPageAfterLogin = () => {
  const { MainContainer } = LandingPageWithoutLoginStyle();
  const { SectionWrapper } = TopCollectionStyle();

  return (
    <>
      <MainContainer>
        <Header />
        <Hero />
        <TopCollection />
        <SectionWrapper>
          {" "}
          <WeeklyFeaturedCards />
        </SectionWrapper>

        <SectionWrapper>
          {" "}
          <PotentialStarletCards />
        </SectionWrapper>
        <SectionWrapper>
          <NewArrivalsCards />
        </SectionWrapper>

        <SectionWrapper sx={{ margin: "-40px 0px 0px 0px" }}>
          <NewArrivalCardMiniComp />
        </SectionWrapper>

        <Footer />
      </MainContainer>
    </>
  );
};

export default LandingPageAfterLogin;
