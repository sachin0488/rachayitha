// import styled from '@emotion/styled'
// import { Box } from '@mui/material'
import React from 'react'
import NavLayout from '../../../Components/Layouts/NavLayout'
// import NewArrivalCardMiniComp from '../LandingPageWithoutLogin/Components/NewArrivalsCards/NewArrivalCardMiniComp'
// import NewArrivalsCards from '../LandingPageWithoutLogin/Components/NewArrivalsCards/NewArrivalsCards'
// import PotentialStarletCards from '../LandingPageWithoutLogin/Components/PotentialStarletCards/PotentialStarletCards'
// import WeeklyFeaturedCards from '../LandingPageWithoutLogin/Components/WeeklyFeaturedCards/WeeklyFeaturedCards'

// import TopCollection from './TopCollection/TopCollection'
// import { SectionWrapper, WeeklyCardSectionWrapper } from './TopCollection/TopCollectionStyle'
import { RootContainer } from '../common/common.styles'
import Hero from '../Sections/Hero'
import TopCollection from '../Sections/TopCollection'
import WeeklyFeatured from '../Sections/WeeklyFeatured'

const LandingPageAfterLogin = () => {
  return (
    <NavLayout>
      <RootContainer>
        <Hero />

        <TopCollection />
        <WeeklyFeatured />
        {/* 
          

        <WeeklyCardSectionWrapper>
          <WeeklyFeaturedCards />
        </WeeklyCardSectionWrapper>

        <SectionWrapper>
          <PotentialStarletCards />
        </SectionWrapper>

        <SectionWrapper>
          <NewArrivalsCards />
        </SectionWrapper>

        <SectionWrapper sx={{ margin: '-40px 0px 0px 0px' }}>
          <NewArrivalCardMiniComp />
        </SectionWrapper> */}
      </RootContainer>
    </NavLayout>
  )
}

export default LandingPageAfterLogin
