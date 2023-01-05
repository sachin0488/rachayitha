import React from 'react'
import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'

import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import StyledTextField from './components/StyledTextField'
import StyledCheckbox from './components/StyledCheckbox'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import { useCreateAccountAPI } from 'Container/Auth/api/auth.hook'
import Link from 'next/link'

const CreateAccountPage = () => {
  const methods = useForm()
  const { handleCreateAccount, isLoading, isSuccess } = useCreateAccountAPI()

  return (
    <Root>
      <DeignsIcon />

      <Main>
        <Body>
          <FormProvider {...methods}>
            <TextSection>
              <TitleText variant="h4">Welcome</TitleText>
              <DescriptionText variant="subtitle2">Welcome back ! Please Enter Your details</DescriptionText>
            </TextSection>
            <StyledTextField name="full_name" label="Name" placeholder="Enter your name..." />
            <StyledTextField name="username" label="Username" placeholder="Enter your username..." />
            <StyledTextField name="email" label="Email" placeholder="Enter your email ..." />
            <StyledTextField name="bio" label="Bio" placeholder="Enter your email ..." multiline />
            <StyledTextField
              name="password"
              label="Password"
              Icon={LockOutlinedIcon}
              placeholder="Enter your email ..."
            />
            <BottomSection>
              <StyledCheckbox label="I agree to the Terms of Service and Privacy Policy !" name="agree" />
            </BottomSection>
            <Nav>
              <Link href="/login">
                <a>
                  <StyledButton>Login</StyledButton>
                </a>
              </Link>
              <StyledButton
                variant="contained"
                onClick={methods.handleSubmit(handleCreateAccount)}
                disabled={isLoading}>
                Create Account
              </StyledButton>
            </Nav>
          </FormProvider>
        </Body>
      </Main>
    </Root>
  )
}

const Root = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
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
  gap: 17px;
`

const DeignsIcon = styled(MenuBookOutlinedIcon)`
  color: ${({ theme }) => theme.palette.primary.main}11;
  color: #ffffff11;
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

export default CreateAccountPage