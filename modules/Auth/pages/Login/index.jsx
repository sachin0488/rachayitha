import styled from '@emotion/styled'
import Link from 'next/link'
import { Button, CircularProgress, Typography } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'

import StyledPasswordField from 'modules/Auth/components/FormComponents/StyledPasswordField'
import StyledTextField from 'modules/Auth/components/FormComponents/StyledTextField'
import useFormError from 'hooks/useFormError'

import { useLoginService } from 'modules/Auth/service/Login.service'

import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import { useRouter } from 'next/router'
import VerifyEmailModal from '../VerifyEmailModal'
import { useEffect, useState } from 'react'

const LoginPage = () => {
  const { query } = useRouter()
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false)
  const { handleLogin, isLoading, user, isEmailVerified, checkVerificationStatus, isError } = useLoginService()
  const { handleFormError } = useFormError()

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
      <DeignsIcon />
      <VerifyEmailModal open={isVerifyModalOpen} checkVerificationStatus={checkVerificationStatus} user={user} />
      <Main>
        <Body onSubmit={methods.handleSubmit(handleLogin, handleFormError)}>
          <FormProvider {...methods}>
            <TextSection>
              <TitleText variant="h4">Welcome Back</TitleText>
              <DescriptionText variant="subtitle2">Please enter your credentials below to log in and access your account.</DescriptionText>
            </TextSection>
            <StyledTextField name="email" label="Email" placeholder="Enter your email ..." autoComplete="username email" />
            <StyledPasswordField name="password" label="Password" placeholder="Enter your password ..." autoComplete="current-password" />

            <BottomSection>
              {/* <StyledCheckbox name="remember_me" label="Remember me" /> */}
              <Link href={{ pathname: '/forgot-password', query }}>
                <a>
                  <StyledForgotPassword>Forgot Password !</StyledForgotPassword>
                </a>
              </Link>
            </BottomSection>

            <Nav>
              <Link href={{ pathname: '/create-account', query }}>
                <a>
                  <StyledButton>Create Account</StyledButton>
                </a>
              </Link>
              <StyledButton
                disabled={isLoading}
                startIcon={isLoading && <CircularProgress size={14} thickness={5} sx={{ color: theme => theme.palette.grey[500] }} />}
                type="submit"
                onSubmit={methods.handleSubmit(handleLogin, handleFormError)}
                variant="contained">
                Login
              </StyledButton>
            </Nav>
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

const Body = styled.form`
  background: rgb(255, 255, 255);
  padding: 30px 25px;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
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
`

const StyledButton = styled(Button)`
  min-width: 80px;
  box-shadow: none;
  font-size: 0.95rem;
  font-weight: 600;
  &.MuiButton-text {
    background: ${({ theme }) => theme.palette.primary.main}09;
  }
`

const StyledForgotPassword = styled(Button)`
  padding: 2px 7px 2px;
  border-radius: 4px;
`

export default LoginPage
