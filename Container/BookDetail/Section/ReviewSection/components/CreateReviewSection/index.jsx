import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'
import React from 'react'

const CreateReviewSection = () => {
  return (
    <Root>
      <InfoText variant="subtitle1">Share your thoughts with others</InfoText>
      <Button variant="contained">Write a review</Button>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 20px;
  padding: 10px;
`

const InfoText = styled(Typography)`
  font-weight: 500;
  color: ${({ theme }) => theme.palette.secondary.main};
`

export default CreateReviewSection
