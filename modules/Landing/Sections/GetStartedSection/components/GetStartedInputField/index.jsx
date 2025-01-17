import React, { useCallback } from 'react'
import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

const GetStartedInputField = () => {
  const { register, handleSubmit } = useForm()
  const { push } = useRouter()
  const { t } = useTranslation('getStartedInputField')

  const handleRedirectToLoginPage = useCallback(
    data => {
      const { email } = data
      localStorage.setItem('new-email', email)
      push('/create-account')
    },
    [push],
  )

  return (
    <Root>
      <InputField
        type="email"
        placeholder={t('placeholder')}
        {...register('email')}
      />
      <GetStartedButton
        color="primary"
        variant="contained"
        onClick={handleSubmit(handleRedirectToLoginPage)}
      >
        {t('buttonLabel')}
      </GetStartedButton>
    </Root>
  )
}

export const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  padding-left: 5px;
  gap: 0px;
  width: 85vw;
  max-width: 700px;
  @media (max-width: 800px) {
    height: 50px;
    max-width: 520px;
  }
  @media (max-width: 650px) {
    height: 47px;
  }
  @media (max-width: 580px) {
    padding-left: 0px;
  }
  @media (max-width: 380px) {
    height: 40px;
  }
  @media (max-width: 380px) {
    width: 87vw;
  }
  margin-top: 10px;
`

export const InputField = styled.input`
  flex: 1;
  align-self: center;
  padding: 8px 15px;
  font-weight: 600;
  height: 100%;
  border: 0px;
  background-color: transparent;
  font-size: 1.3em;
  color: ${({ theme }) => theme.palette.secondary.main};
  outline: 0;
  width: fit-content;
  @media (max-width: 510px) {
    font-size: 1.7em;
  }
  @media (max-width: 390px) {
    padding: 3px 10px 3px;
    font-size: 0.87rem;
    max-width: 64%;
  }
  @media (max-width: 350px) {
    font-size: 0.87rem;
  }
  ::placeholder {
    color: ${({ theme }) => theme.palette.secondary.light};
    opacity: 0.8;
  }
`

export const GetStartedButton = styled(Button)`
  height: 100%;
  white-space: nowrap;
  font-size: 1.3em;
  padding-top: 10px;
  padding-bottom: 8px;
  font-weight: 500;
  width: fit-content;
  padding-inline: 20px;
  border-radius: 0px 9.8px 9.8px 0px;
  @media (max-width: 510px) {
    font-size: 1.6em;
  }
  @media (max-width: 390px) {
    font-size: 0.82rem;
  }
  @media (max-width: 350px) {
    font-size: 0.8rem;
    padding-inline: 20px;
  }
`

export default GetStartedInputField
