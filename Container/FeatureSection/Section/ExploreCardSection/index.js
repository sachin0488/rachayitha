import useExplore from 'Container/FeatureSection/api/explore.hook'
import ExploreLoading from './Comp/ExploreLoading'
import { CardsWrapper, ShowQueryContainer } from 'Container/FeatureSection/Common/Common.styles'
import React from 'react'
import SortBy from './Comp/SortBy'
import ExploreCard from './Comp/ExploreCard'

const ExploreCardSection = () => {
  const { data, isLoading, isError, error } = useExplore()
  if (isError) {
    return <h1>{error?.message}</h1>
  }
  return (
    <>
      <ShowQueryContainer>
        <SortBy />
        <CardsWrapper>
          {data?.data?.resources?.data?.map((card, index) =>
            isLoading ? <ExploreLoading card={card} index={index} /> : <ExploreCard card={card} index={index} />,
          )}
        </CardsWrapper>
      </ShowQueryContainer>
    </>
  )
}

export default ExploreCardSection
