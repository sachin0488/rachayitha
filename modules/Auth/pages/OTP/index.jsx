import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { Button, CircularProgress, Typography } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'next-i18next'
import StyledTextField from './components/StyledTextField'
import StyledCheckbox from './components/StyledCheckbox'
import useFormError from 'hooks/useFormError'
import { useLoginService } from 'modules/Auth/service/Login.service'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import SelectLanguageContainer from 'modules/Auth/components/SelectLanguageContainer' // Import the component

const OTPPage = () => {
  const { t } = useTranslation("common");
  const methods = useForm()
  const { handleLogin, isLoading } = useLoginService()
  const { handleFormError } = useFormError()

  return (
    <Root>
      <DeignsIcon />

      <Main>
        <Body>
          <FormProvider {...methods}>
            <TextSection>
              <TitleText variant="h4" component="div">
                {t('OTP.index.welcome')}
              </TitleText>
              <DescriptionText variant="subtitle2">{t('OTP.index.welcomeBackPleaseEnterYOurDetails')}</DescriptionText>
            </TextSection>

            <StyledTextField name="otp" label="OTP" placeholder="Enter your otp ..." />

            <BottomSection>
              <StyledCheckbox name="remember_me" label="Remember me" />
              <Link href="/forgot-password">
                <StyledForgotPassword>{t('OTP.index.forgotPassword')}!</StyledForgotPassword>
              </Link>
            </BottomSection>

            <Nav>
              <Link href="/create-account">
                <StyledButton>{t('OTP.index.back')}</StyledButton>
              </Link>

              <StyledButton
                disabled={isLoading}
                sx={{ ml: 'auto' }}
                startIcon={isLoading && <CircularProgress size={14} thickness={5} sx={{ color: theme => theme.palette.grey[500] }} />}
                variant="contained"
                onClick={methods.handleSubmit(handleLogin, handleFormError)}>
                {t('OTP.index.verify')}
              </StyledButton>
            </Nav>
          </FormProvider>
        </Body>
        <SelectLanguageContainer /> {/* Add the component here */}
      </Main>
    </Root>
  )
}

const Root = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 480px) {
    background: ${({ theme }) => theme.palette.primary.main};
    background: linear-gradient(141deg, rgba(81, 34, 192, 1) 0%, #966afc 100%);
  }
`

const Main = styled.div`
  display: grid;
  width: 100%;
  max-width: 400px;
  @media (min-width: 480px) {
    box-shadow: 10px 10px 20px 1px ${({ theme }) => theme.palette.primary.main}20,
      10px 10px 20px 1px ${({ theme }) => theme.palette.primary.main}10;
    border-radius: 10px;
  }
`

const Body = styled.div`
  background: rgb(255, 255, 255);
  padding: 30px 25px;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const DeignsIcon = styled(MenuBookOutlinedIcon)`
  color: ${({ theme }) => theme.palette.background.accent}11;
  font-size: 400px;
  position: absolute;
  top: -50px;
  right: -40px;
  transform: rotate(-45deg);
  @media (max-width: 480px) {
    font-size: 280px;
    color: ${({ theme }) => theme.palette.primary.main}1f;
  }
`

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 0px;
`

const TitleText = styled(Typography)`
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main};
  @media (max-width: 450px) {
    font-size: 2.7rem;
  }
`

const DescriptionText = styled(Typography)`
  font-weight: 500;
  margin-left: 4px;
  color: ${({ theme }) => theme.palette.secondary.main}a2;
`

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
`

const Nav = styled.div`
  margin-top: 0px;
  display: flex;
  justify-content: space-between;
`

const StyledButton = styled(Button)`
  min-width: 80px;
  box-shadow: none;
  font-size: 0.95rem;
  font-weight: 600;
`

const StyledForgotPassword = styled(Button)`
  padding: 2px 7px 2px;
  border-radius: 4px;
`

export default OTPPage
