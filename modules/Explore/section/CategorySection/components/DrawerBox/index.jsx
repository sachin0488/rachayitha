import { Button, Drawer, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SortRoundedIcon from '@mui/icons-material/SortRounded'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import StyledCheckButton from './StyledCheckButton'
import { useDebounce } from '@uidotdev/usehooks'
import clsx from 'clsx'

const DrawerBox = ({ List }) => {
  const { query } = useRouter()

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const isDrawerOpenDebounced = useDebounce(isDrawerOpen, 300)

  const SelectedList = List.find(item => item.contentType.toLowerCase() === query?.content_type?.toLowerCase())

  useEffect(() => {
    const handlePopstate = event => {
      if (isDrawerOpen) {
        history.go(1)
        setIsDrawerOpen(false)
      }
    }

    window.addEventListener('popstate', handlePopstate)

    return () => {
      window.removeEventListener('popstate', handlePopstate)
    }
  }, [isDrawerOpen, query.content_type])

  return (
    <>
      <StyledButton variant="text" color="primary" endIcon={<SortRoundedIcon />} onClick={() => setIsDrawerOpen(true)}>
        Genres
      </StyledButton>

      <StyledDrawer
        className={clsx({
          'drawer-open': isDrawerOpenDebounced,
          'drawer-closed': !isDrawerOpenDebounced,
        })}
        anchor="bottom"
        open={isDrawerOpen && isDrawerOpenDebounced}
        onClose={() => setIsDrawerOpen(false)}>
        <Content>
          <Heading variant="h4">{SelectedList?.contentType === 'book' ? 'Novel' : SelectedList?.contentType}</Heading>
          <StyledCheckButton
            category={{
              categoryId: 0,
              categoryName: 'All Categories',
            }}
            contentType={SelectedList?.contentType?.toLowerCase()}
          />
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
  /* padding: 0px 14px; */
  margin-bottom: 7px;
`

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    overflow: hidden;
    padding: 0px;
  }
  padding-top: 10px;
  .MuiBackdrop-root {
    background: ${({ theme }) => theme.palette.background.paper}00;
    backdrop-filter: blur(8px);
  }
  &.drawer-closed {
    display: none;
    .MuiBackdrop-root {
      display: none;
    }
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  gap: 13px;
  max-height: 70vh;

  padding: 23px 20px 62px;
  /* padding-right: 20px; */
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
  padding: 10px 13px 10px;
  color: ${({ theme }) => theme.palette.secondary.main};
  /* border: 1px solid ${({ theme }) => theme.palette.primary.main}29; */
  background: ${({ theme }) => theme.palette.primary.main}0f;
  display: flex;
  align-items: center;
  line-height: 1.2;
  /* background: ${({ theme }) => theme.palette.primary.main}11; */
  border-radius: 9px;
  transition: 0.35s ease-in-out;
  text-transform: capitalize;
  /* letter-spacing: 0.5px; */
  float: right;
  align-self: flex-end;
  @media (min-width: 500px) {
    padding: 7px 13px 7px;
    font-size: 0.95rem;
  }
  border-radius: 12px;

  &:hover {
    background: ${({ theme }) => theme.palette.primary.main}19;
  }

  .MuiButton-label {
    display: flex;
    align-items: center;
  }

  .MuiButton-startIcon {
    margin-right: 4px;
    margin-left: -4px;
    color: ${({ theme }) => theme.palette.primary.main};
  }
  .MuiButton-endIcon {
    margin-right: -4px;
    margin-left: 12px;
    color: ${({ theme }) => theme.palette.primary.main};
  }
`
