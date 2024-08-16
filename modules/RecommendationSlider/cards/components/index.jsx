import styled from '@emotion/styled'
import { Skeleton, Typography } from '@mui/material'
import React from 'react'
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded'
import { mainMaxWidth } from 'modules/Landing/common/styles'
import { useTranslation } from 'react-i18next'

export const NotAvailableBar = ({ Icon, text }) => {
  const {t} = useTranslation();
  return (
    <Root>
      {Icon ? (
        <Icon sx={{ fontSize: 90, color: theme => theme.palette.primary.main + '37' }} />
      ) : (
        <IconCr variant="h2" fontSize={60} component="div" color="primary">
          {t('notAvailable')}
        </IconCr>
      )}
      <Text variant="h5" component="div" textAlign="center" fontWeight={600} color="secondary.light">
        {text ? text : 'Content Not Available'}
      </Text>
    </Root>
  )
}

export const ErrorBar = () => {
  const {t} = useTranslation();
  return (
    <Root>
      <ErrorOutlineRoundedIcon style={{ fontSize: 70 }} />
      <Text variant="h5" component="div" textAlign="center">
        {t('something_went_wrong')}
      </Text>
    </Root>
  )
}

export const LoadingBar = () => {
  return (
    <LoadingBarRoot>
      <main>
        <Skeleton variant="rounded" width={246} height={300} />
        <Skeleton variant="rounded" width={246} height={300} />
        <Skeleton variant="rounded" width={246} height={300} />
        <Skeleton variant="rounded" width={246} height={300} />
        <Skeleton variant="rounded" width={246} height={300} />
        <Skeleton variant="rounded" width={246} height={300} />
      </main>
    </LoadingBarRoot>
  )
}

const LoadingBarRoot = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  main {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 35px;
  }

  height: 370px;
  --element-left-spacing: calc((100vw - var(--main-max-width)) / 2 + var(--main-side-spacing));
  @media (max-width: ${mainMaxWidth}px) {
    --element-left-spacing: var(--main-side-spacing);
  }
  padding: var(--element-left-spacing);
  /* align-self: center; */
`

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 350px;
  max-width: 250px;
  margin: 0 auto;
`

const IconCr = styled(Typography)`
  font-weight: 600;
  padding: 0.5rem;
`
const Text = styled(Typography)``
