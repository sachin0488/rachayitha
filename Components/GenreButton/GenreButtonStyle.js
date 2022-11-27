import styled from '@emotion/styled'
import { Box, Button } from '@mui/material'
import React from 'react'

export const GenreButtons = styled(Button)`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  padding: 8px 12px;
  border-radius: 12px;
  border: none;
  letter-spacing: 0.1em;
  &.genre {
    background-color: #673ccb;
    color: white;
  }

  &.genre:hover {
    background-color: #673ccb;
  }
`
export const GenreButtonWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
`
