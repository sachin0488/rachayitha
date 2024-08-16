import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'
import { Root } from '../common/styles'
import PaymentPlan from '../section/PaymentPlan'
import { useTranslation } from 'react-i18next'

const PaymentPlanPage = () => {
  const {t} = useTranslation();
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
        <PaymentPlan />
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

const Heading = styled(Typography)`
  font-weight: 600;
  color: ${({ theme }) => theme.palette.primary.main};
`

const Description = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.main}d9;
  font-size: 1rem;
  line-height: 1.7;
`

export default PaymentPlanPage
