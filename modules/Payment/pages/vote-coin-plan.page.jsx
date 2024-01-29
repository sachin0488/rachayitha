import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'
import { Root } from '../common/styles'
import VoteCoinPlan from '../section/VoteCoinPlan'

const VoteCoinPlanPage = () => {
  return (
    <Root>
      <Main>
        <TextSection>
          <Typography variant="h2" component="div" color="primary" fontWeight={600}>
            Chose Your Plan
          </Typography>
          <Description variant="subtitle1" color="secondary">
            Chose your plane from available options Global warming, zombies, nuclear war, all at once. Just one tipping point and the world
            itself would crumble.
          </Description>
        </TextSection>
        <VoteCoinPlan />
      </Main>
    </Root>
  )
}

const Main = styled.div`
  width: 100%;
  max-width: var(--main-max-width);
  padding-top: 50px;
  display: flex;
  flex-direction: column;
`

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  max-width: var(--main-max-width);
  padding: 20px;
`

const Description = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.main}d9;
  font-size: 1rem;
  line-height: 1.7;
  font-weight: 500;
`

export default VoteCoinPlanPage
