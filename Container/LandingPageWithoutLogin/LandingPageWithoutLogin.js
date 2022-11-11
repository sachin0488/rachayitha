import React from "react";
import LandingPageWithoutLoginStyle, {
  MainContainer,
} from "./LandingPageWithoutLoginStyle";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import WeeklyFeaturedCards from "./WeeklyFeaturedCards/WeeklyFeaturedCards";
import PotentialStarletCards from "./PotentialStarletCards/PotentialStarletCards";
import NewArrivalsCards from "./NewArrivalsCards/NewArrivalsCards";
import Footer from "./Footer/Footer";
import WeeklyFeaturedCardsStyles from "./WeeklyFeaturedCards/WeeklyFeaturedCardsStyles";
import NewArrivalCardsStyle from "./NewArrivalsCards/NewArrivalCardsStyle";
import PotentialStartletCardsStyle from "./PotentialStarletCards/PotentialStartletCardsStyle";

const LandingPageWithoutLogin = () => {
  const { Wrapper } = WeeklyFeaturedCardsStyles();
  const { ArrivalCardWrapper } = NewArrivalCardsStyle();
  const { PotentialCardWrapper } = PotentialStartletCardsStyle();

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
