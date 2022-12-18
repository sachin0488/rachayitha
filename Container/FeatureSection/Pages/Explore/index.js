import React from 'react'
import { Wrapper, SubWrapper, MainContentWrapper } from '../../Common/Common.styles'
import GenreSelectionSection from 'Container/FeatureSection/Section/GenreSelectionSection'
import ExploreCardSection from 'Container/FeatureSection/Section/ExploreCardSection'
import Banner from 'Container/FeatureSection/Section/Banner'

const Explore = () => {
  return (
    <Wrapper>
      <SubWrapper>
        <Banner />
        <MainContentWrapper>
          <GenreSelectionSection />
          <ExploreCardSection />
        </MainContentWrapper>
      </SubWrapper>
    </Wrapper>
  )
}

export default Explore
