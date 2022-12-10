import { useQuery } from '@tanstack/react-query'
import { styles } from './MuiTabStyles'
import { useRouter } from 'next/router'
import React from 'react'
import { Wrapper, SubWrapper } from '../Explore/ExploreStyle'
import { GrFormView } from 'react-icons/gr'
import Chapter from '../../public/chapter.png'
import useBookDetail from './api/bookDetail.hook'
import {
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
} from './BookDetailStyle'
import Image from 'next/image'
import { IoIosAddCircle } from 'react-icons/io'
import RatingStar from '../../Components/RatingComp/Rating'
import {  Typography } from '@mui/material'
import RecommendedCards from './RecommendedCards'
import ReviewSectionCom from './ReviewSectionCom'
import MuiTabs from '../../Components/MuiTabs/MuiTabs'
import { bookAboutAndContentDetailMuiTabList } from '../../hooks/useMuiTabComp'

const BookDetail = () => {
  const router = useRouter()
  const { data, isLoading, isError, error, isFetching } = useBookDetail(router.query.book)

  if (isLoading) {
    return <h1>LOADING ... </h1>
  }

  if (isError) {
    return <h1>{error?.message}</h1>
  }

  return (
    <>
      {data?.data?.data.map(book => (
        <Wrapper>
          <SubWrapper>
            <BookDetailCard>
              <BookDetailCardLeftSection>
                <Img src={book?.cover_img} />
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
                  <AddToLibraryButton>
                    <IoIosAddCircle size="30" />
                    ADD TO LIBRARY
                  </AddToLibraryButton>
                </FantasyAndViewSection>
                <MuiTabWrapper>
                  <MuiTabs muiTab={bookAboutAndContentDetailMuiTabList} styles={styles} />
                </MuiTabWrapper>
              </BookDetailCardRightSection>
            </BookDetailCard>
          </SubWrapper>
          <RecommendedCards />
          <SubWrapper>
            <FantasyAndViewSection>
              <RecommendedCardsHeading>139 Reviews</RecommendedCardsHeading>
              <RatingStar value="4" />
              <Typography sx={{ color: 'black' }}>4.0</Typography>
            </FantasyAndViewSection>
            <ReviewSectionCom book={book} />
          </SubWrapper>
        </Wrapper>
      ))}
    </>
  )
}

export default BookDetail
