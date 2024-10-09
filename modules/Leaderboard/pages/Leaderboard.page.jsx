import React, { useCallback, useState } from 'react'
import BGsvg from '../section/BGsvg'
import EngagementLeaderboard from '../section/EngagementLeaderboard'
import styled from '@emotion/styled'
import StartWriting from '../section/StartWriting'
import RulesAndGuidelines from '../section/Rules&Guidelines'
import Benefits from '../section/BenefitsOfParticipating'
import JoinContest from '../section/JoinContest'
import RecentEntity from '../section/RecentEntity'
import { useRouter } from 'next/router'

function LeaderboardPage() {
  // const [contestID, setContestID] = useState(null)
  const router = useRouter()
  const contest_id = Number(router?.query?.contest_id || 1)

  const setContestID = useCallback(
    contestId => {
      if (typeof window !== 'undefined') {
        router?.push(`/leaderboard?contest_id=${contestId}`)
      }
    },
    [router],
  )

  return (
    <Root>
      <BGsvg>
        <EngagementLeaderboard contestID={contest_id} setContestID={setContestID} />
      </BGsvg>
      <RecentEntity contestID={contest_id} />
      <StartWriting />
      <JoinContest />
      <RulesAndGuidelines contestID={contest_id} />
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
