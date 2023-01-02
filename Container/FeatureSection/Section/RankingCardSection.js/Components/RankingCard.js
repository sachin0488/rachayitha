import React from 'react'
import { Title, ParagraphText, ButtonContainer } from '../../../common/common.styles'
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
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'
import { AiOutlineLike } from 'react-icons/ai'
import Link from 'next/link'
import { useAddToLibraryAPI } from 'Container/BookDetail/api/bookDetail.hook'
import {
  LikeIcon,
  Wrap,
  LikedText,
} from 'Container/BookDetail/Section/ReviewSectionCom/Components/Comment/MuiTabComponent/LikedComp'

const RankingCard = ({ card, index }) => {
  const { handleAddToLibrary } = useAddToLibraryAPI()
  return (
    <>
      <Link href={`/book/1`}>
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
                <AddButton startIcon={<AddCircleOutlinedIcon />} onClick={() => handleAddToLibrary(1)}>
                  Add
                </AddButton>
                <ReadButton>Read</ReadButton>
              </ButtonSection>
            </HashtagAndButtonSection>
            <Title>{card?.book_name}</Title>
            <ParagraphText>{card.paragraph}</ParagraphText>
            <RatingGenreAuthorContainer>
              <LikedText startIcon={<LikeIcon />}>123</LikedText>

              <CardGenreText>{card.genre}</CardGenreText>
              <CardGenreText>{card.author}</CardGenreText>
            </RatingGenreAuthorContainer>
          </RightSideCardPart>
        </Cards>
      </Link>
    </>
  )
}

export default RankingCard
