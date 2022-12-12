import styles from '../Section/MuiTabComponent/MuiTabStyles'
import { useRouter } from 'next/router'
import React from 'react'
import { GrFormView } from 'react-icons/gr'
import Chapter from '../../../public/chapter.png'
import useBookDetail, { useAddToLibraryAPI } from '../api/bookDetail.hook'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'
import {
  Wrapper,
  SubWrapper,
  BookDetailCard,
  BookDetailCardLeftSection,
  BookDetailCardRightSection,
  TitleFantasyViewSection,
  Title,
  FantasyAndViewSection,
  Text,
  Img,
  AuthorText,
  ReadButton,
  AddToLibraryButton,
  RecommendedCardsHeading,
  RatingSectionComp,
  StarText,
  Author,
  MuiTabWrapper,
} from '../Common/BookDetailStyle'
import Image from 'next/image'
import RatingStar from '../../../Components/RatingComp/Rating'
import { Typography } from '@mui/material'
import RecommendedCards from '../Section/RecommendedCard'
import ReviewSectionCom from '../Section/ReviewSectionCom'
import MuiTabs from '../../../Components/MuiTabs/MuiTabs'
import { bookAboutAndContentDetailMuiTabList } from '../../../hooks/useMuiTabComp'
import { img_url } from '../Section/RecommendedCard'
import styled from '@emotion/styled'

const BookDetail = () => {
  const router = useRouter()
  const { data, isLoading, isError, error, isFetching } = useBookDetail(router.query.book)
  const { handleAddToLibrary } = useAddToLibraryAPI()
  if (isLoading) {
    return <h1>LOADING ... </h1>
  }

  if (isError) {
    return <h1>{error?.message}</h1>
  }

  const handleClick = () => {
    console.log(router.query.book, 'id')
    handleAddToLibrary(router.query.book)
  }

  return (
    <>
      {data?.data?.data.map((book, index) => (
        <Wrapper>
          <SubWrapper>
            <BookDetailCard key={index}>
              <BookDetailCardLeftSection>
                <Img src={img_url} />
              </BookDetailCardLeftSection>
              <BookDetailCardRightSection>
                <TitleFantasyViewSection>
                  <Title>{book?.book_name}</Title>
                  <FantasyAndViewSection>
                    {book?.category?.map(category => (
                      <Text>{category?.name}</Text>
                    ))}

                    <Text>
                      <Image src={Chapter} /> {book?.chapter_count} Chapters
                    </Text>
                    <Text>
                      <GrFormView /> 2.1 M Views
                    </Text>
                  </FantasyAndViewSection>
                </TitleFantasyViewSection>
                <TitleFantasyViewSection>
                  <FantasyAndViewSection>
                    <Author>Author :</Author>
                    <AuthorText>Fruit of Chaos</AuthorText>
                  </FantasyAndViewSection>
                  <FantasyAndViewSection>
                    <RatingStar value={book?.rating?.rate__avg} size="large" />
                    <StarText>{book?.rating?.rate__avg}</StarText>
                    <RatingSectionComp>(300 rating)</RatingSectionComp>
                  </FantasyAndViewSection>
                </TitleFantasyViewSection>

                <FantasyAndViewSection>
                  <ReadButton>READ</ReadButton>
                  <AddToLibraryButton onClick={handleClick} startIcon={<AddCircleOutlinedIcon style={IconStyle} />}>
                    ADD TO LIBRARY
                  </AddToLibraryButton>
                </FantasyAndViewSection>
                <MuiTabWrapper>
                  <MuiTabs muiTab={bookAboutAndContentDetailMuiTabList} styles={styles} />
                </MuiTabWrapper>
              </BookDetailCardRightSection>
            </BookDetailCard>

            <RecommendedCards />
            <FantasyAndViewSection>
              <RecommendedCardsHeading>139 Reviews</RecommendedCardsHeading>
              <RatingStar value="4" />
              <Typography sx={{ color: 'black' }}>4.0</Typography>
            </FantasyAndViewSection>
            <ReviewSectionCom />
          </SubWrapper>
        </Wrapper>
      ))}
    </>
  )
}

export default BookDetail

const IconStyle = {
  color: '#5b2ec7',
  fontSize: '24px',
  // '@media (min-width:600px)': {
  //   fontSize: '27px',
  // },
}

const Form = styled.form`
  width: 100%;
  height: 100%;
`
