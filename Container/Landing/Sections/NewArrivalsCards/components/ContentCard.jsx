import React from 'react'
import {
  NewArrivalContentCard,
  RatingAndFantasySection,
  StoryHeading,
  ImgWrapper,
  Img,
  Fantasy,
} from '../NewArrivalCardsStyle'

const ContentCard = ({ item }) => {
  return (
    <>
      <NewArrivalContentCard>
        <ImgWrapper>
          {' '}
          <Img src={item?.cover_img} />
        </ImgWrapper>
        <StoryHeading>{item?.book_name}</StoryHeading>
        <RatingAndFantasySection>
          {item?.category.map(category => (
            <Fantasy>{category.name}</Fantasy>
          ))}
        </RatingAndFantasySection>
      </NewArrivalContentCard>
    </>
  )
}

export default ContentCard
