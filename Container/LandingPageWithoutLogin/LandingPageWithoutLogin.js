import React from "react";
import { Wrapper } from "./WeeklyFeaturedCards/WeeklyFeaturedCardsStyles";
import { PotentialCardWrapper } from "./PotentialStarletCards/PotentialStartletCardsStyle";
import LandingPageWithoutLoginStyle, {
  MainContainer,
} from "./LandingPageWithoutLoginStyle";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import WeeklyFeaturedCards from "./WeeklyFeaturedCards/WeeklyFeaturedCards";
import PotentialStarletCards from "./PotentialStarletCards/PotentialStarletCards";
import NewArrivalsCards from "./NewArrivalsCards/NewArrivalsCards";
import { ArrivalCardWrapper } from "./NewArrivalsCards/NewArrivalCardsStyle";
import Footer from "./Footer/Footer";
import WeeklyFeaturedCardsStyles from "./WeeklyFeaturedCards/WeeklyFeaturedCardsStyles";
import NewArrivalCardsStyle from "./NewArrivalsCards/NewArrivalCardsStyle";
import PotentialStartletCardsStyle from "./PotentialStarletCards/PotentialStartletCardsStyle";

const LandingPageWithoutLogin = () => {
  return (
    <>
      <MainContainer sx={{ gap: "50px" }}>
        <Header />
        <Banner />
        <Wrapper padding="100px 0px 0px 0px">
          <WeeklyFeaturedCards />
        </Wrapper>
        <PotentialCardWrapper>
          <PotentialStarletCards />
        </PotentialCardWrapper>
        <ArrivalCardWrapper>
          <NewArrivalsCards />
        </ArrivalCardWrapper>
        <Footer />
      </MainContainer>
    </>
  );
};

export default LandingPageWithoutLogin;
