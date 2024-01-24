import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import { Button, CircularProgress, Typography } from '@mui/material'

import StyledTextField from 'Container/Auth/components/FormComponents/StyledTextField'
import StyledPasswordField from 'Container/Auth/components/FormComponents/StyledPasswordField'
import TermsAndPrivacyPolicyCheckbox from './components/TermsAndPrivacyPolicyCheckbox'
import { StyledFieldGroup, StyledFormLabel } from 'Container/Auth/components/FormComponents/StyledRadio'
import { StyledRadioBox, StyledRadioGroup } from 'Container/Auth/components/FormComponents/StyledRadio'

import useFormError from 'hooks/useFormError'

import { useCreateAccountService } from 'Container/Auth/service/CreateUser.service'

import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import StyledDateSelector from 'Container/Auth/components/FormComponents/StyledDateSelector'
import VerifyEmailModal from '../VerifyEmailModal'

const CreateAccountPage = () => {
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false)
  const { handleCreateAccount, isLoading, user, isEmailVerified, isSessionActive, checkVerificationStatus, isSuccess } =
    useCreateAccountService()
  const { handleFormError } = useFormError()

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: '',
      username: '',
      email: (typeof window !== 'undefined' && window.localStorage.getItem('new-email')) || '',
      bio: '',
      password: '',
      agree: false,
    },
  })

  useEffect(() => {
    if (isSuccess && isEmailVerified === false) {
      setIsVerifyModalOpen(true)
    }
  }, [isSuccess, isEmailVerified])

  useEffect(() => {
    if (isSuccess && isSessionActive === false) {
      setIsVerifyModalOpen(false)
    }
  }, [isSuccess, isEmailVerified, isSessionActive])

  return (
    <Root>
      <DeignsIcon />
      <VerifyEmailModal open={isVerifyModalOpen} checkVerificationStatus={checkVerificationStatus} user={user} />
      <Main>
        <Body onSubmit={methods.handleSubmit(handleCreateAccount, handleFormError)}>
          <FormProvider {...methods}>
            <TextSection>
              <TitleText variant="h3">Welcome</TitleText>
              <DescriptionText variant="subtitle2">
                Join us today and start enjoying all the benefits of being a member. Please fill out the form below to create your account.
              </DescriptionText>
            </TextSection>
            <StyledTextField name="fullName" label="Name" placeholder="Enter your name..." />
            <StyledTextField name="username" label="Username" placeholder="Enter your username..." />
            <StyledTextField name="email" label="Email" placeholder="Enter your email ..." />
            <StyledDateSelector name="birthDate" label="Birth Date" />

            <StyledTextField name="bio" label="Bio" placeholder="Enter your bio ..." multiline />
            <StyledFieldGroup as="div">
              <StyledFormLabel>Select Gender</StyledFormLabel>
              <StyledRadioGroup name="gender" row>
                {GenderList.map(({ label, value }) => (
                  <StyledRadioBox key={value} label={label} value={value} />
                ))}
              </StyledRadioGroup>
            </StyledFieldGroup>
            <StyledPasswordField name="password" label="Password" placeholder="Enter your password ..." />
            <StyledPasswordField name="confirmPassword" label="Confirm Password" placeholder="Enter your confirm password ..." />
            <BottomSection>
              <TermsAndPrivacyPolicyCheckbox name="agree" />
            </BottomSection>
            <Nav>
              <Link href="/login">
                <a>
                  <StyledButton disabled={isLoading}>Login</StyledButton>
                </a>
              </Link>
              <StyledButton
                type="submit"
                disabled={!methods.watch('agree') || isLoading}
                startIcon={isLoading && <CircularProgress size={14} thickness={5} sx={{ color: theme => theme.palette.grey[500] }} />}
                variant="contained">
                Create Account
              </StyledButton>
            </Nav>
          </FormProvider>
        </Body>
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

const schema = yup.object().shape({
  fullName: yup.string().required('Name is required'),
  username: yup.string().required('Username is required'),
  birthDate: yup.string().required('birthday is required'),
  bio: yup.string().required('Bio is required'),
  email: yup.string().email().required('Email is required'),
  gender: yup.string().required('Gender is required'),
  password: yup.string().required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Confirm Password should be equal to Password')
    .required('Confirm Password is required'),
})

const Root = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 480px) {
    background: ${({ theme }) => theme.palette.primary.main};
    background: linear-gradient(141deg, rgba(81, 34, 192, 1) 0%, #966afc 100%);
  }
  @media (max-width: 480px) {
    height: fit-content;
    width: 100%;
  }
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 400px;
  @media (min-width: 480px) {
    box-shadow: 10px 10px 20px 1px ${({ theme }) => theme.palette.primary.main}20,
      10px 10px 20px 1px ${({ theme }) => theme.palette.primary.main}10;
    border-radius: 18px;
  }
  @media (min-width: 480px) {
    overflow: hidden;
  }
  @media (max-width: 480px) {
    max-width: 100%;
  }
`

const Body = styled.form`
  padding: 30px 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 17px;

  @media (min-width: 480px) {
    border-radius: 18px;
    background: rgb(255, 255, 255);
    overflow-y: auto;
    max-height: calc(100vh - 20px);
  }
  backdrop-filter: blur(10px);
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
    color: ${({ theme }) => theme.palette.primary.main}37;
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
