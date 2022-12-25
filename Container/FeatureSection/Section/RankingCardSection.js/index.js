import { useRanking } from 'Container/FeatureSection/api/ranking.hook'
import { HorizontalRule, ShowQueryContainer, SortByHeading } from 'container/FeatureSection/Common/common.styles'

import React from 'react'
import RankingCard from './Components/RankingCard'
import RankingLoading from './Components/RankingLoading'
import SelectGenre from './Components/SelectGenre'
import { CardsWrapper } from './Styles'

const RankingCardSection = () => {
  const { data, isLoading, isError, error, isFetching } = useRanking()
  return (
    <>
      <ShowQueryContainer>
        <SelectGenre />
        <HorizontalRule style={{ width: '100%' }} />
        <CardsWrapper>
          {data?.map((card, index) =>
            isLoading ? <RankingLoading card={card} index={index} /> : <RankingCard card={card} index={index} />,
          )}
        </CardsWrapper>
      </ShowQueryContainer>
    </>
  )
}

export default RankingCardSection
