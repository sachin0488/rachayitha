import React, { useState } from 'react'
import BGsvg from '../section/BGsvg'
import EngagementLeaderboard from '../section/EngagementLeaderboard'
import styled from '@emotion/styled'
import StartWriting from '../section/StartWriting'
import RulesAndGuidelines from '../section/Rules&Guidelines'
import Benefits from '../section/BenefitsOfParticipating'
import JoinContest from '../section/JoinContest'
import RecentEntity from '../section/RecentEntity'
function LeaderboardPage() {
  const [contestID, setContestID] = useState(null)
  return (
    <Root>
      <BGsvg>
        <EngagementLeaderboard contestID={contestID} setContestID={setContestID} />
      </BGsvg>
      <RecentEntity contestID={contestID} />
      <StartWriting />
      <JoinContest />
      <RulesAndGuidelines contestID={contestID} />
      <Benefits />
    </Root>
  )
}

const Root = styled.div`
  --main-max-width: 1400px;
  --main-side-spacing: 40px;

  @media (max-width: 768px) {
    --main-side-spacing: 20px;
  }
  display: flex;
  flex-direction: column;
`

export default LeaderboardPage
