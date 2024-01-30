import { RootContainer } from '../common/styles'
import Banner from '../Sections/Banner'
import Header from '../Sections/Header'
import GetStartedSection from '../Sections/GetStartedSection'
import WeeklyFeaturedSliders from 'modules/RecommendationSlider/sliders/WeeklyFeaturedSliders'
import PotentialStarletSliders from 'modules/RecommendationSlider/sliders/PotentialStarletSliders'
import NewArrivalsSliders from 'modules/RecommendationSlider/sliders/NewArrivalsSliders'

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