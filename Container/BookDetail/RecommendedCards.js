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
  CardRatingText,
} from "./BookDetailStyle";
import { useExplore } from "../Explore/api/explore.hook";
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
                <CardRatingText>{card.rating}</CardRatingText>
              </RatingSection>
            </IndividualRecommendedCardContainer>
          ))}
        </RecommendedCardsContainer>
      </RecommendedCardsWrapper>
    </>
  );
};

export default RecommendedCards;
