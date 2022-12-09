import React from 'react'
import potentialStartletCardHook from '../PotentialStarletCards/api/potentialStartletCard.hook'
import {
  NewArrivalContent,
  Heading,
  SubWrapper,
  NewArrivalContentCard,
  RatingAndFantasySection,
  StoryHeading,
  ImgWrapper,
  Img,
  Fantasy,
} from './NewArrivalCardsStyle'
import Image from 'next/image'
import useNewArrivalApi from './Api/newArrivalCard.hook'

const NewArrivalsCards = () => {
  const { data, isLoading, isError, error, isFetching } = useNewArrivalApi()

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
          <Heading>New Arrivals</Heading>
          <NewArrivalContent>
            {data.data?.data?.map(story => (
              <NewArrivalContentCard>
                <ImgWrapper>
                  {' '}
                  <Img src={story.cover_img} />
                </ImgWrapper>
                <StoryHeading>{story.book_name}</StoryHeading>
                <RatingAndFantasySection>
                  {story?.category.map(category => (
                    <Fantasy>{category.name}</Fantasy>
                  ))}
                </RatingAndFantasySection>
              </NewArrivalContentCard>
            ))}
          </NewArrivalContent>
        </SubWrapper>
      </>
    )
}

export default NewArrivalsCards
