import * as yup from 'yup'
import styled from '@emotion/styled'

import { Button, CircularProgress, FormLabel, Typography } from '@mui/material'
import { useCallback, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslation } from 'next-i18next'

import { StyledModal } from 'components/StyledModal'
import { StyledRadioBox, StyledRadioGroup } from 'components/form-components/StyledRadio'

import StyledTextField from 'components/form-components/StyledTextField'
import StyledDateSelector from 'components/form-components/StyledDateSelector'
import PhotoUploader from './components/PhotoUploader'

import { useUpdateProfileService } from 'modules/UserProfile/services/UpdateProfile.service'
import { useUserService } from 'modules/Auth/service/User.service'

const EditProfileModal = ({ open, setOpen }) => {
  const { t } = useTranslation("common")
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

  const schema = yup.object().shape({
    fullName: yup.string().min(3).required(t('nameRequired')),
    username: yup.string().min(3).required(t('usernameRequired')),
    email: yup.string().email().required(t('emailRequired')),
    birthDate: yup.string().required(t('birthdateRequired')),
    bio: yup.string(),
    gender: yup.string().required(t('genderRequired')),
  })

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
          {t('updateProfile')}
        </Title>
        <FormProvider {...methods}>
          <PhotoUploader name="profilePic" />
          <StyledTextField name="username" label={t('username')} placeholder={t('usernamePlaceholder')} disabled />
          <StyledTextField name="email" type="email" label={t('email')} placeholder={t('emailPlaceholder')} disabled />
          <StyledTextField name="fullName" label={t('fullName')} placeholder={t('fullNamePlaceholder')} />
          <StyledDateSelector name="birthDate" label={t('birthDate')} placeholder={t('birthDatePlaceholder')} />
          <StyledTextField name="bio" label={t('bio')} placeholder={t('bioPlaceholder')} multiline />
          <FieldGroup>
            <StyledFormLabel>{t('selectGender')}</StyledFormLabel>
            <StyledRadioGroup name="gender" row>
              {GenderList.map(({ label, value }) => (
                <StyledRadioBox key={value} label={t(label)} value={value} />
              ))}
            </StyledRadioGroup>
          </FieldGroup>
        </FormProvider>

        <Bottom>
          <StyledButton variant="outlined" onClick={handleClose}>
            {t('cancel')}
          </StyledButton>
          <StyledButton
            disabled={isLoading}
            startIcon={
              isLoading && (
                <CircularProgress
                  size={14}
                  thickness={5}
                  sx={{ color: theme => theme.palette.grey[500] }}
                />
              )
            }
            variant="contained"
            onClick={methods.handleSubmit(mutate)}
          >
            {t('save')}
          </StyledButton>
        </Bottom>
      </Main>
    </Root>
  )
}

const GenderList = [
  {
    label: 'male',
    value: 'male',
  },
  {
    label: 'female',
    value: 'female',
  },
  {
    label: 'others',
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
