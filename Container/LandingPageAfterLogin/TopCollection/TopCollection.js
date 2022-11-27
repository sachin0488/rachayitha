import Image from 'next/image'
import React from 'react'
import {
  TopCollectionWrapper,
  CollectionName,
  TopCollectionList,
  IndividualCollection,
  Heading,
  HighlightedHeading,
  Rating,
  Title,
  Fantasy,
  IndividualCard,
  IndividualCardLeftSection,
  IndividualCardRightSection,
} from './TopCollectionStyle'
import { useTopCollection } from './api/topCollection.hook'

const TopCollection = () => {
  const { data, isLoading, isError, error, isFetching } = useTopCollection()
  return (
    <>
      <TopCollectionWrapper>
        <Heading>
          Top collection over <HighlightedHeading>last 7 days</HighlightedHeading>{' '}
        </Heading>
        <TopCollectionList>
          <IndividualCollection>
            <CollectionName>Novel</CollectionName>
            {data?.map(card => (
              <IndividualCard>
                <IndividualCardLeftSection>
                  <Image src={card.img} width="90px" height="115px" />
                </IndividualCardLeftSection>
                <IndividualCardRightSection>
                  <Title>{card.title}</Title>
                  <Fantasy>{card.fantasy}</Fantasy>
                  <Rating>{card.rating}</Rating>
                </IndividualCardRightSection>
              </IndividualCard>
            ))}
          </IndividualCollection>
          <IndividualCollection>
            <CollectionName>Poems</CollectionName>
            {data?.map(card => (
              <IndividualCard>
                <IndividualCardLeftSection>
                  <Image src={card.img} width="90px" height="115px" />
                </IndividualCardLeftSection>
                <IndividualCardRightSection>
                  <Title>{card.title}</Title>
                  <Fantasy>{card.fantasy}</Fantasy>
                  <Rating>{card.rating}</Rating>
                </IndividualCardRightSection>
              </IndividualCard>
            ))}
          </IndividualCollection>
          <IndividualCollection>
            <CollectionName>Shorts</CollectionName>
            {data?.map(card => (
              <IndividualCard>
                <IndividualCardLeftSection>
                  <Image src={card.img} width="90px" height="115px" />
                </IndividualCardLeftSection>
                <IndividualCardRightSection>
                  <Title>{card.title}</Title>
                  <Fantasy>{card.fantasy}</Fantasy>
                  <Rating>{card.rating}</Rating>
                </IndividualCardRightSection>
              </IndividualCard>
            ))}
          </IndividualCollection>
        </TopCollectionList>
      </TopCollectionWrapper>
    </>
  )
}

export default TopCollection
