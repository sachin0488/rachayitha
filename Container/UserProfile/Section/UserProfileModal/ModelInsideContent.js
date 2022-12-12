import styled from '@emotion/styled'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextareaAutosize, TextField, Box, RadioGroup, InputLabel, Typography, Button } from '@mui/material'
import RadioGroupMui from 'Components/RadioGroup/RadioGroupMui'
import { ProfileImg } from 'Container/UserProfile/Pages/UserProfile'
import useFormError from 'hooks/useFormError'
import Image from 'next/image'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { mobileL, mobileM, tabletS } from 'styles/mediaQuery/breakPoints'
import Schema from './UserProfileSchema'

const ModelInsideContent = () => {
  const methods = useForm({
    resolver: yupResolver(Schema),
  })
  //   const { handleLogin, isLoading } = useLoginAPI()
  const { handleFormError } = useFormError()
  const handleClick = () => {}
  return (
    <>
      <Form onSubmit={methods.handleSubmit(handleClick, handleFormError)}>
        <FormProvider {...methods}>
          <InputFieldWrapper>
            <ProfileImage src={ProfileImg} width />
            <RadioGroupWrapper>
              <Heading>Hi...</Heading>
            </RadioGroupWrapper>
          </InputFieldWrapper>
          <InputFieldWrapper>
            <Label>Username</Label>
            <RadioGroupWrapper>
              <InputField
                type="text"
                name="username"
                {...methods.register('username')}
                required
                id="outlined-basic"
                label="Add Username"
                variant="outlined"></InputField>
            </RadioGroupWrapper>
          </InputFieldWrapper>
          <InputFieldWrapper>
            <Label>Email</Label>
            <RadioGroupWrapper>
              <InputField
                type="email"
                name="email"
                {...methods.register('email')}
                required
                id="outlined-basic"
                label="Add Username"
                variant="outlined"></InputField>
            </RadioGroupWrapper>
          </InputFieldWrapper>
          <InputFieldWrapper>
            <Label>Gender</Label>
            <RadioGroupWrapper>
              <RadioGroupMui />
            </RadioGroupWrapper>
          </InputFieldWrapper>
          <InputFieldWrapper>
            <Label>About</Label>
            <RadioGroupWrapper>
              <TextArea
                type="text"
                name="about"
                {...methods.register('about')}
                required
                style={{ height: '70px' }}
                variant="outlined"></TextArea>
            </RadioGroupWrapper>
          </InputFieldWrapper>
          <ButtonWrapper>
            <SaveChanges type="submit" variant="contained">
              Save Changes
            </SaveChanges>
          </ButtonWrapper>
        </FormProvider>
      </Form>
    </>
  )
}

export default ModelInsideContent

const Form = styled.form`
  padding: 10px 15px;
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
const InputFieldWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media ${tabletS} {
    width: 70%;
  }

  padding: 10px 0px;
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
  width: 240px;
  @media ${mobileL} {
    width: 280px;
  }
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
`
