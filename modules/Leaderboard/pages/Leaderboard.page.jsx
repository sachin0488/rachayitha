import React from 'react'
import BGsvg from '../section/BGsvg'
import EngagementLeaderboard from '../section/EngagementLeaderboard'
import styled from '@emotion/styled'
import StartWriting from '../section/StartWriting'
import RulesAndGuidelines from '../section/Rules&Guidelines'
import Benefits from '../section/BenefitsOfParticipating'
import JoinContest from '../section/JoinContest'
import RecentEntity from '../section/RecentEntity'

function LeaderboardPage() {
  return (
    <Root>
      <BGsvg>
        <EngagementLeaderboard />
      </BGsvg>
      <RecentEntity />
      <StartWriting />
      <JoinContest />
      <RulesAndGuidelines />
      <Benefits />
    </Root>
  )
}

const Root = styled.div`
  --main-max-width: 1400px;
  display: flex;
  flex-direction: column;
`

export default LeaderboardPage
