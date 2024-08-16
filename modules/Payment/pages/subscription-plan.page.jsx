import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'
import { Root } from '../common/styles'
import SubscriptionPlan from '../section/SubscriptionPlan'
import useCurrentSubscriptionService from 'modules/Payment/services/CurrentSubscription.service'
import moment from 'moment'
import { useTranslation } from 'react-i18next'

const SubscriptionPlanPage = () => {
  const { t } = useTranslation();
  const { validityTill, isSubscribed } = useCurrentSubscriptionService()

  return (
    <Root>
      <Main>
        <TextSection>
          <Heading variant="h3" component="div" color="primary">
            {t('chooseYourPlan')}
          </Heading>
          <Description variant="subtitle2" color="secondary">
            {t('chooseYourPlanDescription')}
          </Description>
        </TextSection>
        {validityTill && (
          <SubscribedFlag variant="subtitle2" component="div" color="secondary">
            {t('yourSubscriptionIsValidTill')} <span>{moment(validityTill, 'YYYY-DD-DD').format('DD/MM/YYYY')}</span>
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
