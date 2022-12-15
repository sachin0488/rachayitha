import styled from '@emotion/styled'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextareaAutosize, TextField, Box, RadioGroup, InputLabel, Typography, Button } from '@mui/material'
import StyledTextField from 'components/form-components/StyledTextField'
import RadioGroupMui from 'Components/RadioGroup/RadioGroupMui'
import { ProfileImg } from 'Container/UserProfile/Pages/UserProfile'
import useFormError from 'hooks/useFormError'
import Image from 'next/image'
import React, { useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { selectUser } from 'store/slices/global/user.slice'
import { mobileL, mobileM, tabletS } from 'styles/mediaQuery/breakPoints'
import { generateUserName } from 'utility/generateUserName'
import Schema from './UserProfileSchema'

const ModelInsideContent = () => {
  const user = useSelector(selectUser)

  const methods = useForm({
    resolver: yupResolver(Schema),
  })

  const { handleFormError } = useFormError()

  const handleClick = useCallback(() => {

  }, [])

  return (
    <>
      <Form onSubmit={methods.handleSubmit(handleClick, handleFormError)}>
        <FormProvider {...methods}>
          <InputFieldWrapper>
            <ProfileImage src={ProfileImg} width />

            <Heading>Hi, {generateUserName(user.data.username)}</Heading>
          </InputFieldWrapper>

          <InputFieldWrapper>
            <Label>Username</Label>
            <StyledTextField label="Username here..." name="username" required />
          </InputFieldWrapper>

          <InputFieldWrapper>
            <Label>Email</Label>
            <StyledTextField type="email" label="Email here..." name="email" required />
          </InputFieldWrapper>

          <InputFieldWrapper>
            <Label>Gender</Label>
            <RadioGroupMui />
          </InputFieldWrapper>

          <InputFieldWrapper>
            <Label>Bio</Label>
            <StyledTextField multiline label="Your Bio here..." name="about" required />
          </InputFieldWrapper>

          <SaveChanges type="submit" variant="contained">
            Save Changes
          </SaveChanges>
        </FormProvider>
      </Form>
    </>
  )
}

export default ModelInsideContent

const Form = styled.form`
  padding: 15px 0px;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  height: 100%;
  @media ${mobileM} {
    padding: 0px 10px;
    gap: 7px;
  }
  @media ${mobileL} {
    padding: 10px 15px;
    gap: 15px;
  }
  @media ${tabletS} {
    padding: 20px 40px;
    gap: 25px;
  }
`
const InputFieldWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 10px 10px;
  padding: 10px 0px;
  /* width: 70%; */
  width: 100%;
  @media (max-width: 600px) {
    grid-template-columns: 0.7fr 1.3fr;
  }
`
const ProfileImage = styled.img`
  object-fit: cover;
  width: 100px;
`
{
  /* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */
}
const Heading = styled(Typography)`
  font-size: 26px;
  font-weight: 500;
  align-self: center;
`
const InputField = styled(TextField)`
  width: 180px;
  @media ${tabletS} {
    width: 280px;
    height: 56px;
  }
`
const Label = styled(InputLabel)`
  padding-top: 7px;
  font-size: 16px;
  font-weight: 500;
  @media ${tabletS} {
    font-size: 18px;
    font-weight: 500;
  }
`
const TextArea = styled(TextareaAutosize)`
  background-color: transparent;
  width: 200px;
  @media ${tabletS} {
    width: 280px;
  }
  height: 55px;
  outline: none;
  border-radius: 12px;
  padding: 12px 0px 0px 6px;
  font-size: 14px;
  font-family: 'Roboto';
`
const RadioGroupWrapper = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
`

const ButtonWrapper = styled(Box)`
  display: flex;
  justify-content: end;
  align-items: flex-end;
  padding-right: 10px;
  padding-top: 15px;
  width: 100%;
`
const SaveChanges = styled(Button)`
  text-transform: capitalize;
  padding: 10px 17px;
  font-size: 15px;
  align-self: flex-end;
`
