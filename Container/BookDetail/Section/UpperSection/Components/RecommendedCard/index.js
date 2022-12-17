import React from 'react'
import RatingStar from '../../../../../../Components/RatingComp/Rating'
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
} from '../../../../Common/BookDetailStyle'
import useExplore from 'Container/FeatureSection/api/explore.hook'
import { AddIcon } from 'Container/Landing/Sections/WeeklyFeatured/components/ContentCard'
import { useAddToLibraryAPI } from 'Container/BookDetail/api/bookDetail.hook'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import Link from 'next/link'

export const img_url = 'https://res.cloudinary.com/dk6twrko6/image/upload/v1666521938/Rectangle_137_mmfqe3.png'
const RecommendedCards = () => {
  const { handleAddToLibrary } = useAddToLibraryAPI()
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
            <Link href={`/book/${card.id}`}>
              <IndividualRecommendedCardContainer key={index}>
                <AddIcon color="primary" variant="contained" onClick={() => handleAddToLibrary(card.id)}>
                  <AddOutlinedIcon />
                </AddIcon>
                <CardImg src={img_url} />
                <IndividualRecommendedCardTitle>{card.book_name}</IndividualRecommendedCardTitle>
                <Fantasy>{card.genre}</Fantasy>
                <RatingSection>
                  <RatingStar value="3" size="small" />
                  <CardRatingText>{card.rating?.rate__avg}</CardRatingText>
                </RatingSection>
              </IndividualRecommendedCardContainer>
            </Link>
          ))}
        </RecommendedCardsContainer>
      </RecommendedCardsWrapper>
    </>
  )
}

export default RecommendedCards
