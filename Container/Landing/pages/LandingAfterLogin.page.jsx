import React from 'react'
import { RootContainer } from '../common/styles'

import Hero from '../Sections/Hero'
import TopCollection from '../Sections/TopCollection'
import WeeklyFeaturedSliders from 'Container/RecommendationSlider/sliders/WeeklyFeaturedSliders'
import ContinueReadingSliders from 'Container/RecommendationSlider/sliders/ContinueReadingSliders'
import NewArrivalsSliders from 'Container/RecommendationSlider/sliders/NewArrivalsSliders'
import PotentialStarletSliders from 'Container/RecommendationSlider/sliders/PotentialStarletSliders'

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
