import React from 'react'
import { Wrapper } from './Components/WeeklyFeaturedCards/WeeklyFeaturedCardsStyles'
import { PotentialCardWrapper } from './Components/PotentialStarletCards/PotentialStartletCardsStyle'
import LandingPageWithoutLoginStyle, { MainContainer } from './LandingPageWithoutLoginStyle'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import WeeklyFeaturedCards from './Components/WeeklyFeaturedCards/WeeklyFeaturedCards'
import PotentialStarletCards from './Components/PotentialStarletCards/PotentialStarletCards'
import NewArrivalsCards from './Components/NewArrivalsCards/NewArrivalsCards'
import { ArrivalCardWrapper } from './Components/NewArrivalsCards/NewArrivalCardsStyle'

import { SubMainContainer } from '../LandingPageAfterLogin/LandingPageAfterLoginStyled'
import { RootContainer } from '../common/common.styles'

const LandingPageWithoutLogin = () => {
  return (
    <RootContainer sx={{ gap: '50px' }}>
      <Header />
      <Banner />

      <Wrapper padding="100px 0px 0px 0px">
        <WeeklyFeaturedCards />
      </Wrapper>
      <SubMainContainer>
        <PotentialCardWrapper>
          <PotentialStarletCards />
        </PotentialCardWrapper>
        <ArrivalCardWrapper>
          <NewArrivalsCards />
        </ArrivalCardWrapper>
      </SubMainContainer>
    </RootContainer>
  )
}

export default LandingPageWithoutLogin
