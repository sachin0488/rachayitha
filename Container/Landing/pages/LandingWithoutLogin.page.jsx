import { RootContainer } from '../common/styles'
import Banner from '../Sections/Banner'
import Header from '../Sections/Header'
import GetStartedSection from '../Sections/GetStartedSection'
import WeeklyFeaturedSliders from 'Container/RecommendationSlider/sliders/WeeklyFeaturedSliders'
import PotentialStarletSliders from 'Container/RecommendationSlider/sliders/PotentialStarletSliders'
import NewArrivalsSliders from 'Container/RecommendationSlider/sliders/NewArrivalsSliders'

const LandingPageWithoutLogin = () => {
  return (
    <RootContainer>
      <Header />
      <GetStartedSection />
      <Banner />
      <WeeklyFeaturedSliders />
      <PotentialStarletSliders />
      <NewArrivalsSliders />
    </RootContainer>
  )
}

export default LandingPageWithoutLogin
