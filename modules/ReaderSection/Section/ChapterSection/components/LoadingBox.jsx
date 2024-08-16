import styled from '@emotion/styled'
import React from 'react'
import { LinearProgress, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const LoadingBox = () => {
  const {t}=useTranslation();
  return (
    <Loader>
      <main>
        <Typography variant="h2" fontWeight={500} paddingInline={1} paddingBottom={0.25}>
          {t('loading')}
        </Typography>
        <StyledLinearProgress />
      </main>
    </Loader>
  )
}

const StyledLinearProgress = styled(LinearProgress)`
  /* width: 100%; */
  /* width: 200px; */
  /* max-width: 75%; */
  border-radius: 4px;
  height: 6px;
`
const Loader = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  /* min-height: calc(100vh - 100px); */
  flex: 1;
  overflow-x: hidden;
  padding-bottom: 70px;
  align-items: center;
  justify-content: center;
  background: #ffffff;

  padding-top: 20%;
  main {
    background: #ffffff;
    padding: 15px 20px 26px;
    /* padding: 26px 20px 26px; */
    border-radius: 13px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.palette.primary.main}1a;
    box-shadow: 0px 0px 50px 10px ${({ theme }) => theme.palette.primary.main}08;
    /* min-width: 200px; */
  }
`

export default LoadingBox
