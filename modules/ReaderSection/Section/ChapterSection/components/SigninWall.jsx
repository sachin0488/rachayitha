import { Button, Typography } from '@mui/material'
import React from 'react'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const SigninWall = ({ contentType }) => {
  const { t } = useTranslation();
  return (
    <Root>
      <Main>
        <Typography variant="h5" fontWeight={500} marginBottom={1} component="div" color="secondary" textAlign="center">
          {t('youCanReadThis')} {contentType} {t('bySigning')}
        </Typography>
        <Typography
          variant="subtitle2"
          fontWeight={500}
          component="div"
          color="secondary.light"
          textAlign="center"
          marginTop={-0.2}
          marginBottom={0.8}>
          {`Need an account? `}
          <Link href="/create-account">
            <a>
              <Typography as="span" variant="subtitle2" fontWeight={500} component="div" color="primary" textAlign="center">
                {t('createOne')}
              </Typography>
            </a>
          </Link>
        </Typography>
        <Link
          href={{
            pathname: '/login',
            query: {
              from: encodeURIComponent(window.location.pathname),
            },
          }}>
          <a>
            <StyledButton disableElevation variant="contained" endIcon={<LoginRoundedIcon />} sx={{ marginTop: 2 }}>
              {t('signIn')}
            </StyledButton>
          </a>
        </Link>
      </Main>
    </Root>
  )
}

const Root = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.palette.primary.main}1a;
  border: 1px solid ${({ theme }) => theme.palette.primary.main}1a;
  box-shadow: 0px 0px 50px 10px ${({ theme }) => theme.palette.primary.main}17;
  border-radius: 13px;
  padding: 23px 10px 20px;
  margin-top: auto;
  margin-bottom: auto;
  width: 70%;
  align-self: center;
  @media (max-width: 630px) {
    width: 95%;
  }
`

const PaymentButtons = styled.div`
  display: flex;
  gap: 10px;
`

const StyledButton = styled(Button)`
  span.price {
    margin-left: 5px;
    background: #ffffff30;
    line-height: 1;
    padding: 4px 5px;
    border-radius: 5px;
    display: flex;
  }
`

export default SigninWall
