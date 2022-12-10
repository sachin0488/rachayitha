import { HorizontalRule, ShowQueryContainer, SortByHeading } from 'Container/FeatureSection/Common/Common.styles'
import { useRanking } from 'Container/Ranking/api/ranking.hook'

import React from 'react'
import RankingCard from './Components/RankingCard'
import RankingLoading from './Components/RankingLoading'
import { CardsWrapper } from './Styles'

const RankingCardSection = () => {
  const { data, isLoading, isError, error, isFetching } = useRanking()
  return (
    <>
      <ShowQueryContainer>
        <SortByHeading>Power Ranking</SortByHeading>
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
