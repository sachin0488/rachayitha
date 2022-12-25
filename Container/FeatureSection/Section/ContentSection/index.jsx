import styled from '@emotion/styled'
import useExplore from 'Container/FeatureSection/api/explore.hook'
import React from 'react'
import ExploreContentCard from './components/ExploreContentCard'
import RankingContentCard from './components/RankingContentCard'

const ContentSection = ({ ranking }) => {
  const { data, isLoading, isError, error } = useExplore({ isReal: true })
  console.log(data, 'explore')
  if (isError) {
    return <h1>{error?.message}</h1>
  }

  const List = [...(data?.data?.resources?.data || [])]

  return (
    <Root>
      {ranking
        ? List?.map((item, index) => <RankingContentCard key={index} item={item} index={index} />)
        : List?.map((item, index) => <ExploreContentCard key={index} item={item} index={index} />)}
    </Root>
  )
}

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 20px 10px;
  width: 100%;
  padding-top: 15px;
  padding-left: 15px;
  padding-bottom: 15px;
  padding-right: 15px;
  padding: 15px;
  @media (max-width: 800px) {
    padding: 0;
  }
`

export default ContentSection
