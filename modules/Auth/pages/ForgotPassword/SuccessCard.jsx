import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import { Button, Typography } from '@mui/material'
import SelectLanguageContainer from 'modules/Auth/components/SelectLanguageContainer' // Import the component

const SuccessCard = () => {
  const { t } = useTranslation()
  return (
    <Main>
      <Body>
        <TitleText variant="h4" component="div" noWrap>
          {t('forgotPassword.SuccessCard.passwordReset')}
          <TitleText variant="h5" component="div">
            {t('linkSent')}
          </TitleText>
        </TitleText>

        <DescriptionText variant="body1" component="div" color="secondary">
          {t('forgotPassword.SuccessCard.successfulReset')}
        </DescriptionText>

        <Nav>
          <SigninLanguageContainer>
            <Link href="/login">
              <a>
                <StyledButton>{t('forgotPassword.SuccessCard.goToLogin')}</StyledButton>
              </a>
            </Link>
            <SelectLanguageContainer /> 
          </SigninLanguageContainer>
          <Link href="/forgot-password">
            <a>
              <StyledButton variant="outlined">{t('forgotPassword.SuccessCard.changeEmail')}</StyledButton>
            </a>
          </Link>
        </Nav>
      </Body>
      
    </Main>
  )
}

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
  && {
    text-transform: unset;
  }
`

const SigninLanguageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;


export default SuccessCard
