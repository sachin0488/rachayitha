import { Box, Button, Drawer, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import SortRoundedIcon from '@mui/icons-material/SortRounded'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import StyledCheckButton from './StyledCheckButton'

const DrawerBox = ({ List }) => {
  const { query, pathname } = useRouter()

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const SelectedList = List.find(item => item.contentType.toLowerCase() === query?.content_type?.toLowerCase())

  return (
    <>
      <StyledButton color="primary" endIcon={<SortRoundedIcon />} onClick={() => setIsDrawerOpen(true)}>
        Select Genre
      </StyledButton>

      <StyledDrawer anchor="bottom" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Content>
          <Heading variant="h4">{SelectedList?.contentType === 'book' ? 'Novel' : SelectedList?.contentType}</Heading>
          {SelectedList?.CategoryList?.map((category, idx) => (
            <StyledCheckButton key={idx} category={category} contentType={SelectedList?.contentType?.toLowerCase()} />
          ))}
        </Content>
      </StyledDrawer>
    </>
  )
}

export default DrawerBox

const Heading = styled(Typography)`
  font-weight: 700;
  text-transform: capitalize;
  padding: 0px 14px;
`

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    overflow: hidden;
    padding: 0px;
  }
  padding: 0px;
  .MuiBackdrop-root {
    background: ${({ theme }) => theme.palette.background.paper}00;
    backdrop-filter: blur(8px);
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  gap: 12px;

  padding: 16px 9px 62px;
  padding-right: 0px;
  width: 100%;
  @media (min-width: 430px) {
    &::-webkit-scrollbar {
      width: 7px;
      height: 7px;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.palette.background.paper};
      border-radius: 1px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.palette.primary.main}77;
      border-radius: 1px;
    }
    &::-webkit-scrollbar-corner {
      background: #1c252e;
    }
  }
`

const StyledButton = styled(Button)`
  font-weight: 600;
  font-size: 0.87rem;
  padding: 5px 13px 4px;
  color: ${({ theme }) => theme.palette.secondary.main};
  background: ${({ theme }) => theme.palette.primary.main}11;
  border-radius: 11px;
  transition: 0.35s ease-in-out;
  text-transform: capitalize;
  /* letter-spacing: 0.5px; */
  float: right;
  align-self: flex-end;
  @media (min-width: 500px) {
    padding: 5px 13px 3px;
    font-size: 0.95rem;
  }

  &:hover {
    background: ${({ theme }) => theme.palette.primary.main}1f;
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
