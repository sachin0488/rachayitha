import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { Button, CircularProgress, Typography } from '@mui/material'
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded'
import { Root } from '../common/styles'
import { usePaymentStatusService } from '../services/PaymentStatus.service'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded'
import { useTranslation } from 'react-i18next'

const PaymentStatusPage = () => {
  const {t} = useTranslation();
  const { isLoading, isPaymentSuccess } = usePaymentStatusService()

  if (isLoading) {
    return (
      <Root>
        <Main>
          <CircularProgress color="primary" thickness={5} size={49} />
          <Heading variant="h6" component="div" marginTop={2}>
            {t('pleaseWaitLoading')}
          </Heading>
        </Main>
      </Root>
    )
  }

  return (
    <Root>
      <Main>
        {isPaymentSuccess ? (
          <DoneAllRoundedIcon color="primary" sx={{ fontSize: 150 }} />
        ) : (
          <CancelRoundedIcon color="error" sx={{ fontSize: 150 }} />
        )}
        <Heading variant="h5" component="div">
        {t('payment')} {isPaymentSuccess ? t('successful') : t('failed')}

        </Heading>
        <ParagraphText variant="h6" component="div">
          {isPaymentSuccess
            ? t('nowYouCanCheckoutPaidChapters')
            : t('unableToVerify')}
        </ParagraphText>

        <Link href={`/`}>
          <ReturnHomeButton variant="outlined">{t('backToHome')}</ReturnHomeButton>
        </Link>
      </Main>
    </Root>
  )
}

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
  padding: 15px;
  max-width: 400px;
  height: 600px;
`

const ReturnHomeButton = styled(Button)`
  font-size: 1rem;
  margin-top: 20px;
  font-weight: 600;
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  :hover {
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.background.paper};
  }
`

const ParagraphText = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-weight: 500;
  text-align: center;
  @media (max-width: 450px) {
    font-size: 17px;
    line-height: 1.9;
  }
  margin-top: 20px;
`

const Heading = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.main}7a;
  font-weight: 500;
  text-align: center;
`

export default PaymentStatusPage
