import React from 'react'
import {
  Cards,
  CardsSubWrapper,
  CardLeftSideContent,
  CardRightSideContent,
  Img,
  Title,
  ParagraphText,
  ButtonContainer,
  HashTagComp,
} from '../../../Common/common.styles'
import Link from 'next/link'
import { cloudinary } from 'Container/Landing/Sections/NewArrivalsCards/components/ContentCard'

const ExploreCard = ({ card, index }) => {
  return (
    <>
      <Link href={`/book/${card.id}`}>
        <CardsSubWrapper key={index}>
          <Cards>
            <CardLeftSideContent>
              <Img src={cloudinary} />
            </CardLeftSideContent>
            <CardRightSideContent>
              <ButtonContainer>
                {/* {card.hashtag.map(hash => (
                  <HashTagComp>{hash}</HashTagComp>
                ))} */}
                <HashTagComp> #Adventure #Action</HashTagComp>
              </ButtonContainer>
              <Title>{card?.book_name}</Title>
              <ParagraphText>The human Race is at war with the Vicious Dalki and when they needed...</ParagraphText>
            </CardRightSideContent>
          </Cards>
        </CardsSubWrapper>
      </Link>
    </>
  )
}

export default ExploreCard
