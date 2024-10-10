import IconSets from '../components/IconSets'
import Prizepool from '../components/PrizePool'
import About from '../components/AboutUs'
import Rules from '../components/Rules'
import Schedule from '../components/Schedule'
import Hero from '../components/Hero'
import ThemesListSection from '../components/ThemesListSection'
import OngoingEvents from '../components/OngoingEvents'
import { useSpecificContestService } from '../service/Schedule.service'
import Leaderboard from '../components/Leaderboard'

const SpirityMain = () => {
  const { data: contestDetail, isLoading } = useSpecificContestService()

  return (
    <>
      <IconSets />
      <Hero />
      <Prizepool contestDetail={contestDetail} />
      <Schedule contestDetail={contestDetail} isLoading={isLoading} />
      <Leaderboard contestDetail={contestDetail}/>
      <ThemesListSection />
      <OngoingEvents />
      <Rules />
      <About />
    </>
  )
}

export default SpirityMain
