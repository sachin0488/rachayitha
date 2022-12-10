import React from 'react'
import { Wrapper, SubWrapper, MainContentWrapper } from '../Common/Common.styles'
import GenreSelectionSection from '../Section/GenreSelectionSection'
import Banner from 'Container/FeatureSection/Section/Banner'
import RankingCardSection from '../Section/RankingCardSection.js'

const Ranking = () => {
  return (
    <Wrapper>
      <SubWrapper>
        <Banner />
        <MainContentWrapper>
          <GenreSelectionSection />
          <RankingCardSection />
        </MainContentWrapper>
      </SubWrapper>
    </Wrapper>
  )
}

export default Ranking
