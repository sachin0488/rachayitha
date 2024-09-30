import IconSets from "../components/IconSets";
import Prizepool from "../components/PrizePool";
import About from "../components/AboutUs";
import Rules from "../components/Rules";
import Schedule from "../components/Schedule";
import Section from "../components/Section";
import Adventure from "../components/Themes_Adventure";
import Romance from "../components/Themes_Romance";
import OngoingEvents from "../components/OngoingEvents";
import { useContestDetailService } from "../service/Schedule.service";
const SpirityMain = () => {
    const {data: contestDetail,isLoading} = useContestDetailService();
    return (
        <>
            <IconSets />
            <Section contestDetail={contestDetail} />
            <Prizepool contestDetail={contestDetail} />
            <Schedule contestDetail={contestDetail} isLoading={isLoading} />
            <Adventure />
            
            {/* <Romance /> */}
            <OngoingEvents />
            <Rules />
            <About />

        </>
    )
}

export default SpirityMain