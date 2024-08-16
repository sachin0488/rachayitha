import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'
import { Root } from '../common/styles'
import VoteCoinPlan from '../section/VoteCoinPlan'
import { useTranslation } from 'react-i18next'

const VoteCoinPlanPage = () => {
  const { t } = useTranslation();
  return (
    <Root>
      <Main>
        <TextSection>
          <Typography variant="h2" component="div" color="primary" fontWeight={600}>
           {t('chooseYourPlan')}
          </Typography>
          <Description variant="subtitle1" color="secondary">
           {t('chooseYourPlanDescription')}
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
