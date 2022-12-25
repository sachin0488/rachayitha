import styled from '@emotion/styled'
import { Skeleton, Typography } from '@mui/material'
import React from 'react'
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded'
import { mainMaxWidth } from 'container/Landing/common/common.styles'

export const NotAvailableBar = () => {
  return (
    <Root>
      <Icon variant="h2">N/A</Icon>
      <Text variant="h5">Content Not Available</Text>
    </Root>
  )
}

export const ErrorBar = () => {
  return (
    <Root>
      <ErrorOutlineRoundedIcon style={{ fontSize: 70 }} />
      <Text variant="h5">Something went wrong</Text>
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
  gap: 15px;
  height: 350px;
`

const Icon = styled(Typography)`
  font-weight: 600;
`
const Text = styled(Typography)``
