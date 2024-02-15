import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormProvider, useForm } from 'react-hook-form'
import { Button, CircularProgress, Typography } from '@mui/material'

import StyledTextField from 'modules/Auth/components/FormComponents/StyledTextField'
import SuccessCard from './SuccessCard'
import useFormError from 'hooks/useFormError'

import { useSendResetPasswordLinkService } from 'modules/Auth/service/SendResetPassword.service'

import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'

const ForgotPasswordPage = () => {
  const { query } = useRouter()

  const { handleSendLinkByEmail, isLoading } = useSendResetPasswordLinkService()
  const { handleFormError } = useFormError()

  const methods = useForm({
    defaultValues: {
      email: '',
    },
  })

  return (
    <Root>
      <DeignsIcon />
      {query.status === 'success' ? (
        <SuccessCard />
      ) : (
        <Main>
          <Body>
            <FormProvider {...methods}>
              <TextSection>
                <TitleText variant="h4" noWrap>
                  Lost Your{' '}
                  <TitleText variant="h5" component="div">
                    Password?
                  </TitleText>
                </TitleText>
                <DescriptionText variant="subtitle2">
                  Please enter the email associated with your account to reset your password.
                </DescriptionText>
              </TextSection>
              <StyledTextField name="email" label="Email" placeholder="Enter your email ..." />

              <DescriptionText variant="subtitle2">We will send a email to change your password.</DescriptionText>
              <Nav>
                <Link href={{ pathname: '/login', query }}>
                  <a>
                    <StyledButton>Login</StyledButton>
                  </a>
                </Link>
                <StyledButton
                  disabled={isLoading}
                  startIcon={isLoading && <CircularProgress size={14} thickness={5} sx={{ color: theme => theme.palette.grey[500] }} />}
                  variant="contained"
                  onClick={methods.handleSubmit(handleSendLinkByEmail, handleFormError)}>
                  Send
                </StyledButton>
              </Nav>
            </FormProvider>
          </Body>
        </Main>
      )}
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
  }
`

const BackgroundIcon = styled.img`
  position: absolute;
  width: 300px;
  bottom: 0px;
  right: 25px;
  rotate: -25deg;

  @media (max-width: 480px) {
    width: 250px;
    bottom: 0px;
    right: 15px;
    rotate: -25deg;
  }

  /* width: 300px; */
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
  /* margin-left: 4px; */
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
`

const StyledForgotPassword = styled(Button)`
  padding: 2px 7px 2px;
  border-radius: 4px;
`

export default ForgotPasswordPage
