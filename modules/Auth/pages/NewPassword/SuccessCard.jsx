import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'next-i18next'
import { Button, Typography } from '@mui/material'
import SelectLanguageContainer from 'modules/Auth/components/SelectLanguageContainer' 

const SuccessCard = () => {
  const { t } = useTranslation("common");
  return (
    <Main>
      <Body>
        <TitleText variant="h4" component="div" noWrap>
          {t('NewPassword.SuccessCard.passwordUpdated')}
          <TitleText variant="h5" component="div">
            {t('NewPassword.SuccessCard.sucessfully')}
          </TitleText>
        </TitleText>

        <DescriptionText variant="body1" component="div" color="secondary">
          {t('NewPassword.SuccessCard.successMessage')}
        </DescriptionText>

        <Nav>
        <SelectLanguageContainer />
          <Link href="/login">
            <StyledButton>{t('NewPassword.SuccessCard.goToLogin')}</StyledButton>
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
  justify-content: center;
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

export default SuccessCard