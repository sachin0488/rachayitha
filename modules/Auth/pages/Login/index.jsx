import styled from '@emotion/styled'
import Link from 'next/link'
import { Box, Button, CircularProgress, Typography, useMediaQuery, useTheme } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'next-i18next'

import StyledPasswordField from 'modules/Auth/components/FormComponents/StyledPasswordField'
import StyledTextField from 'modules/Auth/components/FormComponents/StyledTextField'
import useFormError from 'hooks/useFormError'

import { useLoginService } from 'modules/Auth/service/Login.service'

import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import { useRouter } from 'next/router'
import VerifyEmailModal from '../VerifyEmailModal'
import { useEffect, useState } from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import GoogleIcon from 'components/icons/google_icons'
import { useGoogleSignInService } from 'modules/Auth/service/GoogleSignIn.service'
import SelectLanguage from 'modules/Landing/Sections/Header/components/SelectLanguage'
// import SelectLanguageContainer from 'modules/Auth/components/SelectLanguageContainer'

/**
 * Client Secret
 * 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
 * Client ID
 * 13783589174-81cucueivlm245ag49pq5v3c4f3jqscd.apps.googleusercontent.com
 */

// const s = {
//   access_token:
//     'ya29.a0AXooCgtBNXtJ0GRu5-FA4xXuiK9TxB2h8tjipC1MoVdDBQBhIoomp1VMpB3TBbgxXYfahWBqazI_p-zmxQjY5tKanMaexsIKku982M-tWb1-Z__bgHifBBqAlbsMEH79fmOYhvbOah5y_3N_rBFLUy53y32bFq4DNgaCgYKAYgSARMSFQHGX2MiJprPp0DBmF1MBF-r3sBYMQ0169',
//   token_type: 'Bearer',
//   expires_in: 3599,
//   scope: 'email profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid',
//   authuser: '0',
//   prompt: 'consent',
// }

const LoginPage = () => {
  const { t } = useTranslation('common')
  const { query } = useRouter()
  const theme = useTheme()
  const isTablet = useMediaQuery('(min-width: 700px)')
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false)
  const { handleLogin, isLoading, user, isEmailVerified, checkVerificationStatus, isError } = useLoginService()
  const { handleFormError } = useFormError()

  const { loginWithGoogle, isLoading: isGoogleLoading } = useGoogleSignInService()

  const methods = useForm({
    defaultValues: {
      email: '',
      password: '',
      remember_me: true,
    },
  })

  useEffect(() => {
    if (isError && isEmailVerified === false) {
      setIsVerifyModalOpen(true)
    }
  }, [isError, isEmailVerified])

  return (
    <Root>
      <VerifyEmailModal open={isVerifyModalOpen} checkVerificationStatus={checkVerificationStatus} user={user} />
      <ImageWarper>
        {isTablet ? <Image src="/login_illustration.svg" alt="" /> : <Image src="/login_mobile_illustration.svg" alt="" />}
      </ImageWarper>
      <Main>
        <Body onSubmit={methods.handleSubmit(handleLogin, handleFormError)}>
          <Box sx={{ ml: 'auto' }}>
            <SelectLanguage />
          </Box>
          <FormProvider {...methods}>
            <TextSection>
              <TitleText variant="h3" textAlign="center">
                {t('Login.index.signIn')}
                <hr />
              </TitleText>
            </TextSection>
            <StyledTextField name="email" label={t('email')} placeholder={t('enterYourEmail')} autoComplete="username email" />
            <StyledPasswordField
              name="password"
              label={t('password')}
              placeholder={t('enterYourPassword')}
              autoComplete="current-password"
            />

            <BottomSection>
              {/* <StyledCheckbox name="remember_me" label="Remember me" /> */}
              <Link href={{ pathname: '/forgot-password', query }}>
                <a>
                  <StyledForgotPassword>{t('Login.index.forgotPassword')}</StyledForgotPassword>
                </a>
              </Link>
            </BottomSection>

            <Nav>
              <StyledButton
                disabled={isLoading || isGoogleLoading}
                startIcon={
                  (isLoading || isGoogleLoading) && (
                    <CircularProgress size={14} thickness={5} sx={{ color: theme => theme.palette.grey[500] }} />
                  )
                }
                type="submit"
                onSubmit={methods.handleSubmit(handleLogin, handleFormError)}
                variant="contained">
                {t('Login.index.signIn')}
              </StyledButton>
              <hr />
              <LoginWithGoogleButton
                disabled={isLoading || isGoogleLoading}
                startIcon={<GoogleIcon />}
                endIcon={
                  (isLoading || isGoogleLoading) && (
                    <CircularProgress size={14} thickness={5} sx={{ color: theme => theme.palette.grey[500] }} />
                  )
                }
                type="button"
                onClick={loginWithGoogle}
                variant="contained">
                {t('Login.index.signInWithGoogle')}
              </LoginWithGoogleButton>
            </Nav>

            <Typography
              sx={{
                background: '#ffffff91',
                alignSelf: 'center',
                padding: '2px 10px',
                borderRadius: '6px',
              }}
              textAlign="center"
              fontWeight={500}>
              {t(`Login.index.dontHaveAccount`)}

              <Link href={{ pathname: '/create-account', query }}>
                <a style={{ color: theme.palette.primary.main, fontWeight: 700 }}>{t('signUp')}</a>
              </Link>
            </Typography>
          </FormProvider>
        </Body>
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

  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }
`

const ImageWarper = styled.div`
  max-width: 80%;

  @media (max-width: 1288px) {
    max-width: 75%;
  }
  @media (max-width: 980px) {
    max-width: 75%;
  }
  @media (max-width: 700px) {
    max-width: 100%;
    position: fixed;
    bottom: 0px;
    right: 0px;
    left: 0px;
  }
`

const Image = styled.img`
  height: 100%;
  z-index: -1;
  @media (min-height: 700px) {
    margin-left: -10%;
  }

  @media (max-height: 650px) and (max-width: 1600px) {
    margin-left: -20%;
  }
  @media (min-height: 850px) and (max-width: 1600px) {
    margin-left: -15%;
  }
  @media (min-height: 930px) and (max-width: 1600px) {
    margin-left: -20%;
  }
  @media (min-height: 1080px) and (max-width: 1600px) {
    margin-left: -25%;
  }
  @media (min-height: 1150px) and (max-width: 1600px) {
    margin-left: -30%;
  }

  @media (max-width: 700px) {
    height: auto;
    width: 110%;
    margin-bottom: -40px;
    margin-left: -5%;
  }
`

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 400px;
  margin-left: -20%;
  z-index: 1;
  @media (min-width: 480px) {
    /* box-shadow: 10px 10px 20px 1px ${({ theme }) => theme.palette.primary.main}20,
      10px 10px 20px 1px ${({ theme }) => theme.palette.primary.main}10; */
    border-radius: 10px;
  }
  @media (min-width: 700px) and (max-width: 930px) {
    margin-left: -43%;
  }
  @media (max-width: 700px) {
    align-self: center;
    min-width: auto;
    margin-left: 0;
    margin-bottom: auto;
  }
`

const Body = styled.form`
  @media (min-width: 700px) {
    background: rgba(255, 255, 255, 0.756);
    backdrop-filter: blur(40px);
    /* box-shadow: 0px 0px 25px 1px #00000021; */
  }
  padding: 30px 25px;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  gap: 20px;
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
    filter: blur(11px);
  }
`

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  margin-bottom: 0px;
  hr {
    border: 0px;
    height: 3px;
    width: 85%;
    background: ${({ theme }) => theme.palette.primary.main};
  }
`

const TitleText = styled(Typography)`
  font-weight: 700;
  color: ${({ theme }) => theme.palette.primary.main};
  @media (max-width: 450px) {
    /* font-size: 2.7rem; */
  }
`

const DescriptionText = styled(Typography)`
  font-weight: 500;
  color: ${({ theme }) => theme.palette.secondary.main}a2;
`

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
  justify-content: flex-end;
`

const Nav = styled.div`
  margin-top: 0px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 15px;
  hr {
    border: 0px;
    height: 2px;
    width: 95%;
    background: ${({ theme }) => theme.palette?.secondary?.main}35;
  }
`

const StyledButton = styled(Button)`
  /* min-width: 80px; */
  width: 100%;
  box-shadow: none;
  font-size: 0.95rem;
  font-weight: 600;
  &.MuiButton-text {
    background: ${({ theme }) => theme.palette.primary.main}09;
  }
`

const LoginWithGoogleButton = styled(Button)`
  /* min-width: 80px; */
  width: 100%;
  box-shadow: none;
  font-size: 0.95rem;
  font-weight: 600;
  gap: 5px;
  background: #333333;
  :hover {
    background: #272727;
  }
  &.MuiButton-text {
  }
`

const StyledForgotPassword = styled(Button)`
  padding: 2px 7px 2px;
  border-radius: 4px;
`

const SignupLanguageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 700px) {
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
`

export default LoginPage
