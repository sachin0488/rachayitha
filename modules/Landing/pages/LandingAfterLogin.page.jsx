import React from 'react'
import { RootContainer } from '../common/styles'

import Hero from '../Sections/Hero'
import TopCollection from '../Sections/TopCollection'
import WeeklyFeaturedSliders from 'modules/RecommendationSlider/sliders/WeeklyFeaturedSliders'
import ContinueReadingSliders from 'modules/RecommendationSlider/sliders/ContinueReadingSliders'
import NewArrivalsSliders from 'modules/RecommendationSlider/sliders/NewArrivalsSliders'
import PotentialStarletSliders from 'modules/RecommendationSlider/sliders/PotentialStarletSliders'

const LandingPageAfterLogin = () => {
  return (
    <RootContainer>
      <Hero />
      <TopCollection />
      <WeeklyFeaturedSliders />
      <PotentialStarletSliders />
      <NewArrivalsSliders />
      <ContinueReadingSliders />
    </RootContainer>
  )
}

export default LandingPageAfterLogin
