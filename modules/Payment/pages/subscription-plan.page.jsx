import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'
import { Root } from '../common/styles'
import SubscriptionPlan from '../section/SubscriptionPlan'
import useCurrentSubscriptionService from 'modules/Payment/services/CurrentSubscription.service'
import moment from 'moment'

const SubscriptionPlanPage = () => {
  const { validityTill, isSubscribed } = useCurrentSubscriptionService()

  return (
    <Root>
      <Main>
        <TextSection>
          <Heading variant="h3" component="div" color="primary">
            Chose Your Plan
          </Heading>
          <Description variant="subtitle2" color="secondary">
            Chose your plane from available options Global warming, zombies, nuclear war, all at once. Just one tipping point and the world
            itself would crumble.
          </Description>
        </TextSection>
        {validityTill && (
          <SubscribedFlag variant="subtitle2" component="div" color="secondary">
            Your Subscription is valid till <span>{moment(validityTill, 'YYYY-DD-DD').format('DD/MM/YYYY')}</span>
          </SubscribedFlag>
        )}
        <SubscriptionPlan />
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

const SubscribedFlag = styled(Typography)`
  margin-inline: 10px;
  padding: 8px 12px;
  background: ${({ theme }) => theme.palette.primary.main}1a;
  border-radius: 8px;
  span {
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 600;
  }
`

const Heading = styled(Typography)`
  font-weight: 600;
  color: ${({ theme }) => theme.palette.primary.main};
`

const Description = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.main}d9;
  font-size: 1rem;
  line-height: 1.7;
`

export default SubscriptionPlanPage
