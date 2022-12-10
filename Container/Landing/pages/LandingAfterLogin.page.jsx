import React from 'react'
import { RootContainer } from '../common/common.styles'

import Hero from '../Sections/Hero'
import NewArrivalsCards from '../Sections/NewArrivalsCards'
import PotentialStarletCards from '../Sections/PotentialStarletCards'
import TopCollection from '../Sections/TopCollection'
import WeeklyFeatured from '../Sections/WeeklyFeatured'

const LandingPageAfterLogin = () => {
  return (
    <RootContainer>
      <Hero />
      <TopCollection />
      <WeeklyFeatured />
      <PotentialStarletCards />
      <NewArrivalsCards />
    </RootContainer>
  )
}

export default LandingPageAfterLogin
