import { Box, Button, Drawer, IconButton } from '@mui/material'
import React, { useState } from 'react'
import SortRoundedIcon from '@mui/icons-material/SortRounded'
import styled from '@emotion/styled'

const MobileVersionGenreSection = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <>
      <StyledButton endIcon={<SortRoundedIcon />} onClick={() => setIsDrawerOpen(true)}>
        Select Genre
      </StyledButton>

      <Drawer anchor="bottom" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Box p={2} width="100%" height="500px">
          {children}
        </Box>
      </Drawer>
    </>
  )
}

export default MobileVersionGenreSection

const StyledButton = styled(Button)`
  font-weight: 500;
  font-size: 1.2rem;
  padding: 5px 13px;
  color: #000000cb;
  border-radius: 8px;
  transition: box-shadow 0.35s ease-in-out;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  &:hover {
    background: ${({ theme }) => theme.palette.primary.main}01;
    color: ${({ theme }) => theme.palette.primary.main};
    box-shadow: 3px 3px 12px 0px ${({ theme }) => theme.palette.primary.main}59;
  }
  .MuiButton-startIcon {
    margin-right: 4x;
    margin-left: -4px;
  }
  .MuiButton-endIcon {
    margin-right: -4px;
    margin-left: 12px;
  }
  &.selected {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`
