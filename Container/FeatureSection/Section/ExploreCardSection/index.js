import useExplore from 'Container/FeatureSection/api/explore.hook'
import ExploreLoading from './Comp/ExploreLoading'
import { CardsWrapper, ShowQueryContainer } from 'container/FeatureSection/common/common.styles'
import React from 'react'
import SortBy from './Comp/SortBy'
import ExploreCard from './Comp/ExploreCard'

const ExploreCardSection = () => {
  const { data, isLoading, isError, error } = useExplore({ isReal: true })
  console.log(data, 'explore')
  if (isError) {
    return <h1>{error?.message}</h1>
  }

  const List = [...(data?.data?.resources?.data || [])]

  return (
    <>
      <ShowQueryContainer>
        <SortBy />
        <CardsWrapper>
          {List?.map((card, index) =>
            isLoading ? <ExploreLoading card={card} index={index} /> : <ExploreCard card={card} index={index} />,
          )}
        </CardsWrapper>
      </ShowQueryContainer>
    </>
  )
}

export default ExploreCardSection
