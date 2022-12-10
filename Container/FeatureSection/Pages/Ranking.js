import React from 'react'
import NavLayout from 'Components/Layouts/NavLayout'
import { Wrapper, SubWrapper, MainContentWrapper } from '../Common/Common.styles'
import GenreSelectionSection from '../Section/GenreSelectionSection'

import RankingAccordionContainer, { ExploreTextAndNestedRoute } from 'Container/Ranking/RankingAccordionContainer'
import ExploreCardSection from 'Container/FeatureSection/Section/ExploreCardSection'
import Banner from 'Container/FeatureSection/Section/Banner'
import RankingCardSection from '../Section/RankingCardSection.js'

const Ranking = () => {
  return (
    <>
      <NavLayout>
        <Wrapper>
          <SubWrapper>
            <Banner />
            <MainContentWrapper>
              <GenreSelectionSection />
              <RankingCardSection />
            </MainContentWrapper>
          </SubWrapper>
        </Wrapper>
      </NavLayout>
    </>
  )
}

export default Ranking
