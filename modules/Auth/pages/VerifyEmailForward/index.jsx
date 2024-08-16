import * as yup from 'yup'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { Box, Button, CircularProgress, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'

import { useVerifyEmailTokenService } from 'modules/Auth/service/VerifyEmailToken.service'

import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded'
import WarningRoundedIcon from '@mui/icons-material/WarningRounded'
import Link from 'next/link'

import SelectLanguageContainer from 'modules/Auth/components/SelectLanguageContainer' // Import the component

const VerifyEmailForwardPage = () => {
  const { t } = useTranslation("common");
  const { query } = useRouter()

  const { isLoading, isError, isTokenVerified, user } = useVerifyEmailTokenService({ token: query?.token })

  if (isLoading) {
    return (
      <Root>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
          <CircularProgress size={60} thickness={5} />
          <Typography variant="body1" fontWeight={500} color="secondary">
            {t('verifyEmailForward.index.loading')}
          </Typography>
        </Box>
      </Root>
    )
  }

  if (isError) {
    return (
      <Root>
        <Main>
          <IconWarper className="error">
            <WarningRoundedIcon sx={{ fontSize: 72 }} color="error" />
          </IconWarper>
          <Typography marginLeft={1} variant="h5" color="secondary" fontWeight={600}>
           {t('verifyEmailForward.index.serviceDownForMaintenance')}
          </Typography>
          <Description marginLeft={1} variant="body2" marginTop={1} color="secondary">
            {t('verifyEmailForward.index.contactSupport')}{' '}
            <span>{process.env.NEXT_PUBLIC_SUPPORT_EMAIL}</span>
          </Description>
        </Main>
      </Root>
    )
  }

  if (isTokenVerified) {
    return (
      <Root>
        <Main>
          <IconWarper>
            <DoneOutlineRoundedIcon sx={{ fontSize: 72 }} color="primary" />
          </IconWarper>
          <Typography marginLeft={1} variant="h5" color="secondary" fontWeight={600}>
            {t('verifyEmailForward.index.emailVerifiedSuccessfully')}
          </Typography>
          <Description marginLeft={1} variant="body2" marginTop={1} color="secondary">
            {t('verifyEmailForward.index.welcomeAboard')}, <span>{user?.fullName}</span>! {t('verifyEmailForward.index.message1')} <span>{user?.email}</span> {t('verifyEmailForward.index.message2')}
          </Description>
          <Link href="/login">
            <Button variant="contained" color="primary" sx={{ mt: 2 }} disableElevation>
              {t('verifyEmailForward.index.goToLogin')}
            </Button>
          </Link>
        </Main>
      </Root>
    )
  }

  return (
    <Root>
      <Main>
        <IconWarper className="error">
          <WarningRoundedIcon sx={{ fontSize: 72 }} color="error" />
        </IconWarper>
        <Typography marginLeft={1} variant="h5" color="secondary" fontWeight={600}>
          {t('verifyEmailForward.index.emailNotVerified')}
        </Typography>
        <Description marginLeft={1} variant="body2" marginTop={1} color="secondary">
          {t('verifyEmailForward.index.message3')}{' '}
          <span>{process.env.NEXT_PUBLIC_SUPPORT_EMAIL}</span>
        </Description>
        <Link href="/create-account">
          <Button variant="contained" color="primary" sx={{ mt: 2 }} disableElevation>
            {t('verifyEmailForward.index.goToCreateAccountPage')}
          </Button>
        </Link>
      </Main>
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
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`

const Main = styled.div`
  background: ${({ theme }) => theme.palette.primary.main}08;
  border-radius: 12px;
  padding: 10px 18px 18px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
`

const IconWarper = styled.div`
  border-radius: 50%;
  background: ${({ theme }) => theme.palette.primary.main}10;
  &.error {
    background: ${({ theme }) => theme.palette.error.main}10;
  }
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 15px;
`

const Description = styled(Typography)`
  font-weight: 400;
  letter-spacing: 0.45;
  line-height: 1.6;

  span {
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 500;
  }
`

const Message = styled(Typography)`
  background: ${({ theme }) => theme.palette.primary.main}10;
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

export default VerifyEmailForwardPage
