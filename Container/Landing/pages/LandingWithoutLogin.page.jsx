import React from 'react'

import Banner from '../Sections/Banner/Banner'

import { RootContainer } from '../common/common.styles'
import WeeklyFeatured from '../Sections/WeeklyFeatured'
import PotentialStarletCards from '../Sections/PotentialStarletCards'
import NewArrivalsCards from '../Sections/NewArrivalsCards'
import Header from '../Sections/Header/Header'

const LandingPageWithoutLogin = () => {
  return (
    <RootContainer sx={{ gap: '50px' }}>
      <Header />
      <Banner />
      <WeeklyFeatured />
      <PotentialStarletCards />
      <NewArrivalsCards />
      {/* <Wrapper padding="100px 0px 0px 0px">
        <WeeklyFeaturedCards />
      </Wrapper>
      <SubMainContainer>
        <PotentialCardWrapper>
          <PotentialStarletCards />
        </PotentialCardWrapper>
        <ArrivalCardWrapper>
          <NewArrivalsCards />
        </ArrivalCardWrapper>
      </SubMainContainer> */}
    </RootContainer>
  )
}

export default LandingPageWithoutLogin
