import React from 'react'
import {
  LoginWrapper,
  SubWrapper,
  Heading,
  HighlightedHeading,
  LoginProviderCard,
  LoginProviderName,
  LoginProviderWrapper,
  RegisterContainer,
  RegisterButton,
} from './LoginPageStyle'
import { ImFacebook } from 'react-icons/im'
import { FcGoogle } from 'react-icons/fc'
import LoginForm from './Components/LoginForm'
import Link from 'next/link'

const LoginCard = () => {
  return (
    <>
      <LoginWrapper>
        <SubWrapper>
          <Heading>
            Welcome to <HighlightedHeading>E-BOOK</HighlightedHeading>
          </Heading>
          <LoginProviderWrapper>
            <LoginProviderCard>
              <FcGoogle size={35} />
              <LoginProviderName sx={{ color: '#2f2f2f' }}>Login with Google</LoginProviderName>
            </LoginProviderCard>
            <LoginProviderCard>
              <ImFacebook color="#3B5999" size={35} />
              <LoginProviderName sx={{ color: '#2f2f2f' }}>Login with Facebook</LoginProviderName>
            </LoginProviderCard>
          </LoginProviderWrapper>
          <LoginForm />
          <LoginProviderWrapper>
            <RegisterContainer>
              <h1
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: '400',
                  fontSize: '16px',
                  color: 'black',
                }}>
                Don’t have an account?{' '}
              </h1>
              <Link href={`/create-account`}>
                <RegisterButton>Register</RegisterButton>
              </Link>
            </RegisterContainer>
          </LoginProviderWrapper>
        </SubWrapper>
      </LoginWrapper>
    </>
  )
}

export default LoginCard
