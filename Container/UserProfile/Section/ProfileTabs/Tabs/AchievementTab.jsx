import React from 'react'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'

const AchievementTab = () => {
  return (
    <Root>
      <Typography
        variant="h6"
        component="div"
        sx={{
          color: theme => theme.palette.primary.main + 70,
          fontWeight: 600,
          maxWidth: 500,
          textAlign: 'center',
        }}>
        Unlock exciting rewards as you conquer your reading goals!
      </Typography>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 200px;

  /* @media (max-width: 730px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 13px;
  }

  @media (max-width: 400px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 13px;
  } */
`

export default AchievementTab
