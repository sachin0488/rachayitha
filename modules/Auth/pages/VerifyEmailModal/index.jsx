import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useTranslation } from 'next-i18next'

import { Box, Button, Typography } from '@mui/material'

import { StyledModal } from 'components/StyledModal'
import { useResendVerificationService } from 'modules/Auth/service/ResendVerification.service'

import SelectLanguageContainer from 'modules/Auth/components/SelectLanguageContainer' // Import the component

const VerifyEmailModal = ({ open, user, checkVerificationStatus }) => {
  const { t } = useTranslation("common");
  const [isCheckStatusButtonDisabled, setIsCheckStatusButtonDisabled] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(0)
  const { mutate: resendEmail, isLoading: isEmailResending } = useResendVerificationService()

  return (
    <Root maxWidth="39rem" maxHeight="fit-content" open={open} breakPoint={400}>
      <Main className={'email-verification'}>
        <Box
          sx={{
            margin: '0px 16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '16px',
            maxWidth: 600,
            '@media (max-width: 400px)': {
              margin: 'auto 10px',
            },
          }}>
          <LogoImage src="/rachayitha_logo_500.svg" />
          <Box
            sx={{
              background: theme => theme.palette.primary.main + '08',
              borderRadius: '12px',
              padding: '10px 16px',
            }}>
            <Typography variant="h6" color="secondary">
              {t('verifyEmailModal.index.verifyEmail')}
            </Typography>
            <Description variant="subtitle2" fontWeight={400} marginTop={1} color="secondary">
              {t('verifyEmailModal.index.welcomeAboard')}, <span>{user?.fullName}</span>! {t('verifyEmailModal.index.message1')}  <span>{user?.email}</span> {t('verifyEmailModal.index.message2')}!
            </Description>
          </Box>
          {isCheckStatusButtonDisabled && (
            <Typography variant="subtitle2" color="secondary.light" marginLeft={1}>
              {t('verifyEmailModal.index.message3')} {secondsLeft} {t('verifyEmailModal.index.second')}
            </Typography>
          )}
          <Bottom>
            <Button
              disabled={isCheckStatusButtonDisabled}
              variant="contained"
              disableElevation
              onClick={() => {
                setIsCheckStatusButtonDisabled(true)
                setSecondsLeft(10)
                const intr = setInterval(() => {
                  setSecondsLeft(pre => pre - 1)
                }, 1000)
                setTimeout(() => {
                  setIsCheckStatusButtonDisabled(false)
                  clearInterval(intr)
                }, 10000)
                resendEmail({ email: user?.email })
              }}>
              {t('verifyEmailModal.index.resendEmail')}
            </Button>
            <Button
              disabled={isCheckStatusButtonDisabled}
              variant="contained"
              disableElevation
              onClick={() => {
                setIsCheckStatusButtonDisabled(true)
                setSecondsLeft(10)
                const intr = setInterval(() => {
                  setSecondsLeft(pre => pre - 1)
                }, 1000)
                setTimeout(() => {
                  setIsCheckStatusButtonDisabled(false)
                  clearInterval(intr)
                }, 10000)
                checkVerificationStatus()
              }}>
              {t('verifyEmailModal.index.checkVerificationStatus')}
            </Button>
          </Bottom>
        </Box>
        <SelectLanguageContainer /> {/* Add the component here */}
      </Main>
    </Root>
  )
}

const GenderList = [
  {
    label: 'Male',
    value: 'male',
  },
  {
    label: 'Female',
    value: 'female',
  },
  {
    label: 'Others',
    value: 'others',
  },
]

const Root = styled(StyledModal)`
  padding: 20px 6px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media (max-width: 400px) {
    padding: 20px 6px;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex: 1;
  display: none;
  &.display {
    opacity: 1;
    display: flex;
  }
  &.email-verification {
    opacity: 1;
    display: flex;
  }
  @media (max-width: 400px) {
    margin-top: auto;
    margin-bottom: auto;
    height: 100%;
  }
`

const Bottom = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  width: 100%;
`

const LogoImage = styled.img`
  height: auto;
  width: 250px;
  max-width: 70%;
  margin-bottom: 4px;
  margin-left: 14px;
  user-select: none;
`

const Description = styled(Typography)`
  span {
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 500;
  }
`
export default VerifyEmailModal
