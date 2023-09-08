import React from 'react'
import { RootContainer } from '../common/styles'

import Hero from '../Sections/Hero'
import ImageCarousel from '../Sections/ImageCarousel'
import InfoSection from '../Sections/InfoSection'
import WelcomeSection from '../Sections/WelcomeSection'
import OurPeople from '../Sections/OurPeople'

const LandingPage = () => {
  return (
    <RootContainer>
      <Hero />
      <WelcomeSection />
      <ImageCarousel />
      <InfoSection />
      <OurPeople />
    </RootContainer>
  )
}

export default LandingPage
