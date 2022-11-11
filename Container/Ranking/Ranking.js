import React from "react";
import {
  Wrapper,
  SubWrapper,
  ExploreBannerImageContainer,
  ExploreBannerContainer,
  MainContentWrapper,
  GenreAccordionContainer,
  ShowQueryContainer,
  SortByHeading,
  HorizontalRule,
} from "../Explore/ExploreStyle";

import { ExploreBannerImg, CardsWrapper } from "./RankingStyle";
import Header from "../LandingPageAfterLogin/Header/Header";
import { useRanking } from "./api/ranking.hook";
import Footer from "../LandingPageWithoutLogin/Footer/Footer";
import RankingLoading from "./RankingLoading";
import RankingCard from "./RankingCard";
import RankingAccordionContainer, {
  RankingTextAndNestedRoute,
} from "./RankingAccordionContainer";
import { RankingLinkList } from "./RankingLinksContainer";
import GenreMenuBarComp from "../../Components/GenreMenuBarComp/GenreMenuBarComp";

const ItemDetails = () => {
  const { data, isLoading, isError, error, isFetching } = useRanking();

  return (
    <>
      <Wrapper>
        <Header />
        <SubWrapper>
          <ExploreBannerContainer>
            <ExploreBannerImageContainer>
              <ExploreBannerImg src="https://res.cloudinary.com/dk6twrko6/image/upload/v1667386473/Rectangle_219_1_ylt2yp.png" />
              <h1 style={{ position: "absolute", color: "#2F2D5C" }}>
                Hot Ranking
              </h1>
            </ExploreBannerImageContainer>
            <GenreMenuBarComp sectionName={RankingLinkList} />
          </ExploreBannerContainer>
          <MainContentWrapper>
            <GenreAccordionContainer>
              {RankingTextAndNestedRoute.map((comp) => (
                <RankingAccordionContainer
                  text={comp.text}
                  explore={comp.explore}
                  section={comp.section}
                />
              ))}
            </GenreAccordionContainer>
            <ShowQueryContainer>
              <SortByHeading>Power Ranking</SortByHeading>
              <HorizontalRule style={{ width: "100%" }} />
              <CardsWrapper>
                {data?.map((card, index) =>
                  isLoading ? (
                    <RankingLoading card={card} index={index} />
                  ) : (
                    <RankingCard card={card} index={index} />
                  )
                )}
              </CardsWrapper>
            </ShowQueryContainer>
          </MainContentWrapper>
        </SubWrapper>
        <Footer />
      </Wrapper>
    </>
  );
};

export default ItemDetails;
