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
    <>
      <BGsvg>
        <ContentWrapper>
          <EngagementLeaderboard />
        </ContentWrapper>
      </BGsvg>
      <RecentEntity />
      <StartWriting />
      <JoinContest />
      <RulesAndGuidelines />
      <Benefits />
    </>
  )
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
`

export default LeaderboardPage
