import React from "react";
import RatingStar from "../../Components/RatingComp/Rating";
import {
  RecommendedCardsWrapper,
  RecommendedCardsHeading,
  RatingSection,
  Fantasy,
  IndividualRecommendedCardContainer,
  IndividualRecommendedCardTitle,
  RecommendedCardsContainer,
  CardImg,
} from "./BookDetailStyle";
import { useExplore } from "../Explore/api/explore.hook";
import { Typography } from "@mui/material";
const RecommendedCards = () => {
  const { data } = useExplore();
  return (
    <>
      <RecommendedCardsWrapper>
        <RecommendedCardsHeading>You may also Like</RecommendedCardsHeading>
        <RecommendedCardsContainer>
          {data?.map((card) => (
            <IndividualRecommendedCardContainer>
              <CardImg src={card.img} />
              <IndividualRecommendedCardTitle>
                {card.title}
              </IndividualRecommendedCardTitle>
              <Fantasy>{card.genre}</Fantasy>
              <RatingSection>
                <RatingStar value={card.rating} size="small" />
                <Typography style={{ color: "#4F4F4F" }}>
                  {card.rating}
                </Typography>
              </RatingSection>
            </IndividualRecommendedCardContainer>
          ))}
        </RecommendedCardsContainer>
      </RecommendedCardsWrapper>
    </>
  );
};

export default RecommendedCards;
