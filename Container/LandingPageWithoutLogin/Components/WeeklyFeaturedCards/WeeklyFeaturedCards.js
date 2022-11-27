import React, { useEffect } from 'react'
import WeeklyFeaturedCardsStyles from './WeeklyFeaturedCardsStyles'
import Image from 'next/image'
import {
  Wrapper,
  WeeklyContent,
  Heading,
  SubWrapper,
  WeeklyContentCard,
  RatingAndFantasySection,
  StoryHeading,
  ImgBox,
  Fantasy,
  Rating,
  AddIcon,
  Img,
} from './WeeklyFeaturedCardsStyles'

import { IoIosAddCircle } from 'react-icons/io'
import useWeeklyApi from './api/WeeklyCard.hook'

const WeeklyFeaturedCards = () => {
  const { data, isLoading, isError, error } = useWeeklyApi()
  // console.log(data, 'madharchode')

  // const url_img = 'https://res.cloudinary.com/dk6twrko6/image/upload/v1666323902/Rectangle_232_ke4tmd.png'

  if (isLoading) {
    return <h1>LOADING ... </h1>
  }

  if (isError) {
    return <h1>{error?.message}</h1>
  }

  if (data)
    return (
      <>
        <SubWrapper>
          <Heading>Weekly Featured</Heading>
          <WeeklyContent>
            {data.data.data?.map(book => (
              <WeeklyContentCard key={book.id}>
                <ImgBox>
                  {' '}
                  <Img
                    src={book.cover_img}
                    width="full"
                    style={{
                      position: 'absolute',
                      objectFit: 'cover',
                      top: '0',
                      left: '0',
                    }}
                  />
                  <AddIcon>
                    <IoIosAddCircle size={26} color="#069CF6" />
                  </AddIcon>
                </ImgBox>
                <StoryHeading>{book.book_name}</StoryHeading>
                <RatingAndFantasySection>
                  {book.category.map(category => (
                    <>
                      <Fantasy>{category.name}</Fantasy>
                      <Rating>{category.id}</Rating>
                    </>
                  ))}
                </RatingAndFantasySection>
              </WeeklyContentCard>
            ))}
          </WeeklyContent>
        </SubWrapper>
      </>
    )

  return <></>
}

export default WeeklyFeaturedCards
