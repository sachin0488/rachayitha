import * as yup from 'yup'
import styled from '@emotion/styled'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import { Button, CircularProgress, Typography } from '@mui/material'

import SuccessCard from './SuccessCard'
import StyledPasswordField from 'modules/Auth/components/FormComponents/StyledPasswordField'
import useFormError from 'hooks/useFormError'

import { useResetPasswordService } from 'modules/Auth/service/ResetPassword.service'

import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import SelectLanguageContainer from 'modules/Auth/components/SelectLanguageContainer'
import { useTranslation } from 'next-i18next';

const NewPasswordPage = () => {
  const { query } = useRouter()
  const { t } = useTranslation("common");
  const { handleFormError } = useFormError()
  const { handleResetPasswordByToken, isLoading } = useResetPasswordService()

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      password: '',
      token: query?.token || 'ff8b90f37ebea1',
    },
  })

  useEffect(() => {
    if (query?.token) {
      methods.setValue('token', query?.token)
    }
  }, [methods, query?.token])

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
                <TitleText variant="h4" component="div" noWrap>
                 {t('NewPassword.index.chooseANewPassword') }
                  {/* <TitleText variant="h5" component="div">
                    Password?
                  </TitleText> */}
                </TitleText>
                <DescriptionText variant="subtitle2">
                  {t('NewPassword.index.enterPassword') }
                </DescriptionText>
              </TextSection>
              <StyledPasswordField name="password" label={t('password')} placeholder={t('enterYourPassword')} />
              <StyledPasswordField name="confirmPassword" label={t('confirmPassword')} placeholder={t('enterYourConfirmPassword')} />

              <Nav>
              <SelectLanguageContainer />
                <StyledButton
                  disabled={isLoading}
                  sx={{ ml: 'auto' }}
                  startIcon={isLoading && <CircularProgress size={14} thickness={5} sx={{ color: theme => theme.palette.grey[500] }} />}
                  variant="contained"
                  onClick={methods.handleSubmit(
                    data => handleResetPasswordByToken({ ...data, confirmPassword: undefined }),
                    handleFormError,
                  )}>
                  {t('NewPassword.index.save') }
                </StyledButton>
              </Nav>
            </FormProvider>
          </Body>
        </Main>
      )}
    </Root>
  )
}

const schema = yup.object().shape({
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
  justify-content: flex-end;
`

const Nav = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
`

const StyledButton = styled(Button)`
  min-width: 80px;
  box-shadow: none;
  font-size: 0.95rem;
  font-weight: 600;
`

export default NewPasswordPage
