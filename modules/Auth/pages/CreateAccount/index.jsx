import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import { Box, Button, CircularProgress, MobileStepper, Paper, Typography, useMediaQuery } from '@mui/material'

import StyledTextField from 'modules/Auth/components/FormComponents/StyledTextField'
import StyledPasswordField from 'modules/Auth/components/FormComponents/StyledPasswordField'
import TermsAndPrivacyPolicyCheckbox from './components/TermsAndPrivacyPolicyCheckbox'
import { StyledFieldGroup, StyledFormLabel } from 'modules/Auth/components/FormComponents/StyledRadio'
import { StyledRadioBox, StyledRadioGroup } from 'modules/Auth/components/FormComponents/StyledRadio'

import useFormError from 'hooks/useFormError'

import { useCreateAccountService } from 'modules/Auth/service/CreateUser.service'

import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import StyledDateSelector from 'modules/Auth/components/FormComponents/StyledDateSelector'
import VerifyEmailModal from '../VerifyEmailModal'
import { useRouter } from 'next/router'
import GoogleIcon from 'components/icons/google_icons'
import { useTheme } from '@emotion/react'
import { useGoogleLogin } from '@react-oauth/google'

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'

const CreateAccountPage = () => {
  const steps = [
    {
      label: 'Personal Information',
      description: (
        <>
          <StyledTextField name="fullName" label="Name" placeholder="Enter your name..." />
          <StyledTextField name="username" label="Username" placeholder="Enter your username..." />
        </>
      ),
    },
    {
      label: 'Account Information',
      description: (
        <>
          <StyledTextField name="email" label="Email" placeholder="Enter your email ..." />
          <StyledDateSelector name="birthDate" label="Birth Date" />
        </>
      ),
    },
    {
      label: 'Bio Information',
      description: (
        <>
          <StyledTextField name="bio" label="Bio (Optional)" placeholder="Enter your bio ..." multiline />
          <StyledFieldGroup as="div">
            <StyledFormLabel>Select Gender</StyledFormLabel>
            <StyledRadioGroup name="gender" row>
              {GenderList.map(({ label, value }) => (
                <StyledRadioBox key={value} label={label} value={value} />
              ))}
            </StyledRadioGroup>
          </StyledFieldGroup>
        </>
      ),
    },
    {
      label: 'Account Security',
      description: (
        <>
          <StyledPasswordField name="password" label="Password" placeholder="Enter your password ..." autoComplete="new-password" />
          <StyledPasswordField
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Enter your confirm password ..."
            autoComplete="new-password"
          />
        </>
      ),
    },
    {
      label: 'Account Security',
      description: (
        <BottomSection>
          <TermsAndPrivacyPolicyCheckbox name="agree" />
        </BottomSection>
      ),
    },
  ]
  const { query } = useRouter()
  const theme = useTheme()
  const isTablet = useMediaQuery('(min-width: 700px)')
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false)
  const { handleCreateAccount, isLoading, user, isEmailVerified, checkVerificationStatus, isSuccess } = useCreateAccountService()
  const { handleFormError } = useFormError()
  const isMobile = useMediaQuery('(max-width: 621px)')
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = steps.length

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const loginWithGoogle = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
    onError: error => console.error(error),
  })

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

  return (
    <Root>
      {/* <DeignsIcon /> */}
      <VerifyEmailModal open={isVerifyModalOpen} checkVerificationStatus={checkVerificationStatus} user={user} />

      <ImageWarper>
        {isTablet ? <Image src="/login_illustration.svg" alt="" /> : <Image src="/login_mobile_illustration.svg" alt="" />}
      </ImageWarper>

      <Main>
        <Body onSubmit={methods.handleSubmit(handleCreateAccount, handleFormError)}>
          <FormProvider {...methods}>
            <TextSection>
              <TitleText variant="h3" textAlign="center">
                Sign Up
                <hr />
              </TitleText>
              {/* <DescriptionText variant="subtitle2">
                Join us today and start enjoying all the benefits of being a member. Please fill out the form below to create your account.
              </DescriptionText> */}
            </TextSection>
            {/* {isMobile ? (
              <>
                <StyledTextField name="fullName" label="Name" placeholder="Enter your name..." />
                <StyledTextField name="username" label="Username" placeholder="Enter your username..." />
                <StyledTextField name="email" label="Email" placeholder="Enter your email ..." />
                <StyledDateSelector name="birthDate" label="Birth Date" />
                <StyledTextField name="bio" label="Bio (Optional)" placeholder="Enter your bio ..." multiline />
                <StyledFieldGroup as="div">
                  <StyledFormLabel>Select Gender</StyledFormLabel>
                  <StyledRadioGroup name="gender" row>
                    {GenderList.map(({ label, value }) => (
                      <StyledRadioBox key={value} label={label} value={value} />
                    ))}
                  </StyledRadioGroup>
                </StyledFieldGroup>
                <StyledPasswordField name="password" label="Password" placeholder="Enter your password ..." autoComplete="new-password" />
                <StyledPasswordField
                  name="confirmPassword"
                  label="Confirm Password"
                  placeholder="Enter your confirm password ..."
                  autoComplete="new-password"
                />
              </>
            ) : (
              <div className="main-form">
                <div className="left">
                  <StyledTextField name="fullName" label="Name" placeholder="Enter your name..." />
                  <StyledTextField name="email" label="Email" placeholder="Enter your email ..." />
                  <div className="hight-box">
                    <StyledTextField name="bio" label="Bio (Optional)" placeholder="Enter your bio ..." multiline rows={2} />
                  </div>
                  <StyledPasswordField name="password" label="Password" placeholder="Enter your password ..." autoComplete="new-password" />
                </div>
                <div className="right">
                  <StyledTextField name="username" label="Username" placeholder="Enter your username..." />
                  <StyledDateSelector name="birthDate" label="Birth Date" />
                  <div className="hight-box">
                    <StyledFieldGroup as="div">
                      <StyledFormLabel>Select Gender</StyledFormLabel>
                      <StyledRadioGroup name="gender" row>
                        {GenderList.map(({ label, value }) => (
                          <StyledRadioBox key={value} label={label} value={value} />
                        ))}
                      </StyledRadioGroup>
                    </StyledFieldGroup>
                  </div>
                  <StyledPasswordField
                    name="confirmPassword"
                    label="Confirm Password"
                    placeholder="Enter your confirm password ..."
                    autoComplete="new-password"
                  />
                </div>
              </div>
            )} */}

            {/* <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}></Box>
              <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>{steps[activeStep].description}</Box>
              <MobileStepper
                variant="text"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                  <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                    Next
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                  </Button>
                }
                backButton={
                  <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Back
                  </Button>
                }
              />
            </Box> */}

            {steps[activeStep].description}

            <Nav>
              <NavButtonContainer>
                {activeStep === 0 ? (
                  <></>
                ) : (
                  <StyledBackButton onClick={handleBack} disabled={isLoading} variant="text">
                    <ArrowBackRoundedIcon />
                  </StyledBackButton>
                )}
                <StyledButton
                  disabled={isLoading}
                  startIcon={isLoading && <CircularProgress size={14} thickness={5} sx={{ color: theme => theme.palette.grey[500] }} />}
                  // type="submit"
                  type="button"
                  onClick={activeStep === steps.length - 1 ? methods.handleSubmit(handleCreateAccount, handleFormError) : handleNext}
                  variant="contained">
                  {activeStep === steps.length - 1 ? 'Sign in' : 'Next'}
                </StyledButton>
              </NavButtonContainer>
              <hr />
              {/* <LoginWithGoogleButton
                disabled={isLoading}
                startIcon={<GoogleIcon />}
                endIcon={isLoading && <CircularProgress size={14} thickness={5} sx={{ color: theme => theme.palette.grey[500] }} />}
                type="button"
                onClick={loginWithGoogle}
                variant="contained">
                Sign up with Google
              </LoginWithGoogleButton> */}
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
              {`Already have an account? `}

              <Link href={{ pathname: '/login', query }}>
                <a style={{ color: theme.palette.primary.main, fontWeight: 700 }}>Sign in</a>
              </Link>
            </Typography>
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
  fullName: yup.string().min(3, 'Name must be 3 charters long').required('Name is required'),
  username: yup.string().min(3, 'Username must be 3 charters long').required('Username is required'),
  birthDate: yup.string().required('birthday is required'),
  bio: yup.string(),
  email: yup.string().email().required('Email is required'),
  gender: yup.string().required('Gender is required'),
  password: yup.string().required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Confirm Password should be equal to Password')
    .required('Confirm Password is required'),
})

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
  margin-top: 15px;
  margin-bottom: 15px;
  height: 130px;
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

const NavButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`

const StyledButton = styled(Button)`
  /* min-width: 80px; */
  box-shadow: none;
  font-size: 0.95rem;
  font-weight: 600;
  &.MuiButton-text {
    background: ${({ theme }) => theme.palette.primary.main}09;
  }
  flex: 1;
`
const StyledBackButton = styled(Button)`
  box-shadow: none;
  font-size: 0.95rem;
  font-weight: 600;
  min-width: 45px;
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

export default CreateAccountPage
