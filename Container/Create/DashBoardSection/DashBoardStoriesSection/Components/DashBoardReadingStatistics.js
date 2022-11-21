import React from 'react'
import { BsArrowUp } from 'react-icons/bs';
import MuiTabs from '../../../../../Components/MuiTabs/MuiTabs';
import { DashBoardReadingMuiTabList } from '../../../../../hooks/useMuiTabComp';
import { CollectionDataTextSize, DashBoardReadingMuiTabStyled, DashBoardReadingRightSecSubContent, DashBoardReadingRightSection, DashBoardReadingStatSubWrapper, DashBoardReadingStatWrapper, PercentageIncreaseData, PercentageIncreaseDataWrapper, ReleaseStatisticsIconTextWrapper, ReleaseStatisticsText, WordCountText } from '../../../CreateStyle'

const DashBoardReadingStatistics = () => {
    const releaseStatIcon =
    "https://res.cloudinary.com/dk6twrko6/image/upload/v1668427518/stats_1_pzjlez.png";
  return (
   <>
     <DashBoardReadingStatWrapper>
         <ReleaseStatisticsIconTextWrapper>
               <img src={releaseStatIcon} />
                <ReleaseStatisticsText>Reading Statistics</ReleaseStatisticsText>
         </ReleaseStatisticsIconTextWrapper>
        <DashBoardReadingStatSubWrapper>
          <MuiTabs muiTab={DashBoardReadingMuiTabList} styles={DashBoardReadingMuiTabStyled} />
          <DashBoardReadingRightSection>
            <DashBoardReadingRightSecSubContent>
            <WordCountText>AVERAGE COLLECTIONS</WordCountText>
          <CollectionDataTextSize>1</CollectionDataTextSize>
          <PercentageIncreaseDataWrapper>
            <BsArrowUp color="#673CCB" />
            <PercentageIncreaseData>0.0%</PercentageIncreaseData>
          </PercentageIncreaseDataWrapper>
          <WordCountText>Than last period</WordCountText>
            </DashBoardReadingRightSecSubContent>
            <DashBoardReadingRightSecSubContent>
            <WordCountText>AVERAGE COLLECTIONS</WordCountText>
          <CollectionDataTextSize>20</CollectionDataTextSize>
          <PercentageIncreaseDataWrapper>
        
            <PercentageIncreaseData>05 Jul,2018</PercentageIncreaseData>
          </PercentageIncreaseDataWrapper>
          <WordCountText>(by single chapter)</WordCountText>
            </DashBoardReadingRightSecSubContent>
          </DashBoardReadingRightSection>
        </DashBoardReadingStatSubWrapper>
     </DashBoardReadingStatWrapper>
   </>
  )
}

export default DashBoardReadingStatistics
