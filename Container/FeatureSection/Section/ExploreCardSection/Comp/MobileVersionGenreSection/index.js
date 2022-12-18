import { Box, Button, Drawer, IconButton } from '@mui/material'
import React, { useState } from 'react'
import SortRoundedIcon from '@mui/icons-material/SortRounded'
import styled from '@emotion/styled'

const MobileVersionGenreSection = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <>
      <StyledButton color="primary" endIcon={<SortRoundedIcon />} onClick={() => setIsDrawerOpen(true)}>
        Select Genre
      </StyledButton>

      <StyledDrawer anchor="bottom" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Content p={2} width="100%" height="500px">
          {children}
        </Content>
      </StyledDrawer>
    </>
  )
}

export default MobileVersionGenreSection

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    overflow: hidden;
  }
`

const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  @media (min-width: 430px) {
    &::-webkit-scrollbar {
      width: 7px; /* width of the entire scrollbar */
      height: 7px;
      /* height: px; */
    }

    &::-webkit-scrollbar-track {
      background: #fff; /* color of the tracking area */
      border-radius: 1px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.palette.primary.main}77; /* creates padding around scroll thumb */
      border-radius: 1px;
    }
    &::-webkit-scrollbar-corner {
      background: #1c252e; /* color of the tracking area */
    }
  }
`

const StyledButton = styled(Button)`
  font-weight: 500;
  font-size: 0.87rem;
  padding: 5px 13px 4px;
  background: ${({ theme }) => theme.palette.primary.main}1a;
  border-radius: 8px;
  transition: 0.35s ease-in-out;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  float: right;

  @media (min-width: 500px) {
    padding: 5px 13px 3px;
    font-size: 0.95rem;
  }

  &:hover {
    background: ${({ theme }) => theme.palette.primary.main}2b;
    color: ${({ theme }) => theme.palette.primary.main};
  }

  .MuiButton-label {
    display: flex;
    align-items: center;
  }

  .MuiButton-startIcon {
    margin-right: 4x;
    margin-left: -4px;
  }
  .MuiButton-endIcon {
    margin-right: -4px;
    margin-left: 12px;
  }
`
