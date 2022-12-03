import React from 'react'
import useNewArrivalApi from './Api/newArrivalCard.hook'
import {
  NewArrivalContent,
  Heading,
  SubWrapper,
  NewArrivalContentCard,
  RatingAndFantasySection,
  StoryHeading,
  Img,
  ImgWrapper,
  Fantasy,
} from './NewArrivalCardsStyle'

import Image from 'next/image'

const NewArrivalCardMiniComp = () => {
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
          <NewArrivalContent>
            {data.data?.data?.map(story => (
              <NewArrivalContentCard key={story.id}>
                <ImgWrapper>
                  {' '}
                  <Img src={story.cover_img} height="331px" width="282px" layout="fixed" />
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

export default NewArrivalCardMiniComp
