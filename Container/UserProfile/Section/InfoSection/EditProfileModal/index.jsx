import * as yup from 'yup'
import styled from '@emotion/styled'

import { Button, CircularProgress, FormLabel, Typography } from '@mui/material'
import { useCallback, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { StyledModal } from 'Components/StyledModal'
import { StyledRadioBox, StyledRadioGroup } from 'Components/form-components/StyledRadio'

import StyledTextField from 'Components/form-components/StyledTextField'
import StyledDateSelector from 'Components/form-components/StyledDateSelector'
import PhotoUploader from './components/PhotoUploader'

import { useUpdateProfileService } from 'Container/UserProfile/services/UpdateProfile.service'
import { useUserService } from 'Container/Auth/service/User.service'

const schema = yup.object().shape({
  fullName: yup.string().required('Name is required'),
  username: yup.string().required('Username is required'),
  email: yup.string().email().required('Email is required'),
  birthDate: yup.string().required('birthday is required'),
  bio: yup.string().required('Bio is required'),
  gender: yup.string().required('Gender is required'),
})

const EditProfileModal = ({ open, setOpen }) => {
  const { mutate, isLoading, isSuccess } = useUpdateProfileService()

  const { user } = useUserService()

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  useEffect(() => {
    if (isSuccess) {
      handleClose()
    }
  }, [isSuccess, handleClose])

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      profilePic: [user.profilePic],
      fullName: user.fullName,
      username: user.username,
      email: user.email,
      birthDate: user.birthDate,
      gender: user.gender,
      bio: user.bio,
    },
  })

  useEffect(() => {
    if (open)
      methods.reset({
        profilePic: [user.profilePic],
        fullName: user.fullName,
        username: user.username,
        email: user.email,
        birthDate: user.birthDate,
        gender: user.gender,
        bio: user.bio,
      })
  }, [open])

  return (
    <Root maxWidth="30rem" maxHeight="fit-content" open={open} handleClose={handleClose} breakPoint={400}>
      <Main>
        <Title variant="h4" component="div" color="secondary">
          Update Profile
        </Title>
        <FormProvider {...methods}>
          <PhotoUploader name="profilePic" />
          <StyledTextField name="username" label="Username" placeholder="Username here..." disabled />
          <StyledTextField name="email" type="email" label="Email" placeholder="Email here..." disabled />
          <StyledTextField name="fullName" label="Full Name" placeholder="Full here..." />
          <StyledDateSelector name="birthDate" label="Birth Date" placeholder="Chapter name here..." />
          <StyledTextField name="bio" label="Bio" placeholder="Bio here..." multiline />
          <FieldGroup>
            <StyledFormLabel>Select Gender</StyledFormLabel>
            <StyledRadioGroup name="gender" row>
              {GenderList.map(({ label, value }) => (
                <StyledRadioBox key={value} label={label} value={value} />
              ))}
            </StyledRadioGroup>
          </FieldGroup>
        </FormProvider>

        <Bottom>
          <StyledButton variant="outlined" onClick={handleClose}>
            Cancel
          </StyledButton>
          <StyledButton
            disabled={isLoading}
            startIcon={isLoading && <CircularProgress size={14} thickness={5} sx={{ color: theme => theme.palette.grey[500] }} />}
            variant="contained"
            onClick={methods.handleSubmit(mutate)}>
            Save
          </StyledButton>
        </Bottom>
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

const Root = styled(StyledModal)`
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const Title = styled(Typography)`
  font-weight: 600;
`
const Bottom = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`
const StyledButton = styled(Button)`
  font-weight: 600;
`

const FieldGroup = styled.form`
  gap: 0.2em;
  display: flex;
  flex-direction: column;
`

const StyledFormLabel = styled(FormLabel)`
  color: ${({ theme }) => theme.palette?.secondary?.main};
  font-weight: 500;
  font-size: 0.9rem;
`

export default EditProfileModal