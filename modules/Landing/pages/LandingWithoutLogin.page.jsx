import { RootContainer } from '../common/styles'
import Banner from '../Sections/Banner'
import Header from '../Sections/Header'
import GetStartedSection from '../Sections/GetStartedSection'
import WeeklyFeaturedSliders from 'modules/RecommendationSlider/sliders/WeeklyFeaturedSliders'
import PotentialStarletSliders from 'modules/RecommendationSlider/sliders/PotentialStarletSliders'
import NewArrivalsSliders from 'modules/RecommendationSlider/sliders/NewArrivalsSliders'
import PublishContent from '../Sections/PublishContent'
import Hero from '../Sections/Hero'

const LandingPageWithoutLogin = () => {
  return (
    <RootContainer>
      <Header />
      <Hero />
      {/* <GetStartedSection /> */}
      <Banner />
      <WeeklyFeaturedSliders />
      <PotentialStarletSliders />
      <NewArrivalsSliders />
    </RootContainer>
  )
}

export default LandingPageWithoutLogin
