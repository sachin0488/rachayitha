import React from 'react'
import PotentialStartletCardsStyle from './PotentialStartletCardsStyle'
import potentialStartletCardHook from './api/potentialStartletCard.hook'
import Image from 'next/image'
import {
  PotentialStarletContent,
  Heading,
  SubWrapper,
  PotentialStarletContentCard,
  RatingAndFantasySection,
  StoryHeading,
  ImgBox,
  Img,
  Fantasy,
  Rating,
  LeftSideImgContent,
  RightSideImgContent,
  AlignRatingAndFantasySection,
  SmallImg,
} from './PotentialStartletCardsStyle'

const PotentialStarletCards = () => {
  const { data, isLoading, isError, error, isFetching } = potentialStartletCardHook()

  if (isLoading) {
    return <h1>LOADING ... </h1>
  }

  if (isError) {
    return <h1>{error?.message}</h1>
  }
  return (
    <>
      <SubWrapper>
        <Heading>Potential Starlet</Heading>
        <PotentialStarletContent>
          {data?.map(story => (
            <PotentialStarletContentCard key={story.id}>
              <ImgBox>
                {' '}
                <LeftSideImgContent>
                  <Img src={story.img_url} />
                </LeftSideImgContent>
                <RightSideImgContent>
                  <SmallImg src={story?.img_url} />
                  <SmallImg src={story.img_url} />
                  <SmallImg src={story.img_url} />
                </RightSideImgContent>
              </ImgBox>
              <StoryHeading>{story.title}</StoryHeading>
              <AlignRatingAndFantasySection>
                <RatingAndFantasySection>
                  <Fantasy>{story.fantasy}</Fantasy>
                  <Rating>{story.rating}</Rating>
                </RatingAndFantasySection>
              </AlignRatingAndFantasySection>
            </PotentialStarletContentCard>
          ))}
        </PotentialStarletContent>
      </SubWrapper>
    </>
  )
}

export default PotentialStarletCards
