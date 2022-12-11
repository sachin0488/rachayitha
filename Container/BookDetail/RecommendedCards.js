import React from 'react'
import RatingStar from '../../Components/RatingComp/Rating'
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
} from './BookDetailStyle'
import useExplore from '../Explore/api/explore.hook'

export const img_url = 'https://res.cloudinary.com/dk6twrko6/image/upload/v1666521938/Rectangle_137_mmfqe3.png'
const RecommendedCards = () => {
  const { data } = useExplore()
  const List = [
    ...(data?.data?.resources?.data || []),
    ...(data?.data?.resources?.data || []),
    ...(data?.data?.resources?.data || []),
    ...(data?.data?.resources?.data || []),
  ]

  return (
    <>
      <RecommendedCardsWrapper>
        <RecommendedCardsHeading>You may also Like</RecommendedCardsHeading>
        <RecommendedCardsContainer>
          {List?.map((card, index) => (
            <IndividualRecommendedCardContainer key={index}>
              <CardImg src={img_url} />
              <IndividualRecommendedCardTitle>{card.book_name}</IndividualRecommendedCardTitle>
              <Fantasy>{card.genre}</Fantasy>
              <RatingSection>
                <RatingStar value="3" size="small" />
                <CardRatingText>{card.rating?.rate__avg}</CardRatingText>
              </RatingSection>
            </IndividualRecommendedCardContainer>
          ))}
        </RecommendedCardsContainer>
      </RecommendedCardsWrapper>
    </>
  )
}

export default RecommendedCards
