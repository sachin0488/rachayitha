import React from 'react'
import { Title, ParagraphText, ButtonContainer } from '../../../Common/Common.styles'
import {
  ExploreBannerImg,
  Cards,
  CardsWrapper,
  LeftSideCardPart,
  RightSideCardPart,
  HashtagAndButtonSection,
  ButtonSection,
  ReadButton,
  AddButton,
  RatingContainer,
  RatingGenreAuthorContainer,
  Img,
  HashtagContainer,
  AddButtonText,
  CardRatingText,
  CardGenreText,
} from '../Styles'
import { Typography } from '@mui/material'
import { IoIosAddCircle } from 'react-icons/io'
import { AiOutlineLike } from 'react-icons/ai'

const RankingCard = ({ card, index }) => {
  return (
    <>
      <Cards>
        <LeftSideCardPart>
          <Img src={card?.cover_img} />
        </LeftSideCardPart>
        <RightSideCardPart>
          <HashtagAndButtonSection>
            <ButtonContainer>
              {card.hashtag.map(hash => (
                <HashtagContainer>{hash}</HashtagContainer>
              ))}
            </ButtonContainer>
            <ButtonSection>
              <AddButton>
                <IoIosAddCircle size={24} color="#069CF6" />
                <AddButtonText>Add</AddButtonText>
              </AddButton>
              <ReadButton>Read</ReadButton>
            </ButtonSection>
          </HashtagAndButtonSection>
          <Title>{card?.book_name}</Title>
          <ParagraphText>{card.paragraph}</ParagraphText>
          <RatingGenreAuthorContainer>
            <RatingContainer>
              <AiOutlineLike color="black" />
              <CardRatingText>{card?.rating}</CardRatingText>
            </RatingContainer>
            <CardGenreText>{card.genre}</CardGenreText>
            <CardGenreText>{card.author}</CardGenreText>
          </RatingGenreAuthorContainer>
        </RightSideCardPart>
      </Cards>
    </>
  )
}

export default RankingCard
