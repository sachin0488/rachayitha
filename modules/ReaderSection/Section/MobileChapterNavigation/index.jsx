import styled from '@emotion/styled'
import React from 'react'
import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded'
import { Button } from '@mui/material'
import { useState } from 'react'

const MobileChapterNavigation = ({
  handleOpenChapterModal,
  handleNavigateToNextChapter,
  handleNavigateToPreviousChapter,
  isFirstChapter,
  isLastChapter,
  isVisible,
}) => {
  const [isDisabled, setIsDisabled] = useState(false)
  return (
    <Root
      style={{
        transition: 'all 0.35s ease-in-out',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
      }}>
      <Main>
        <Button
          disabled={isFirstChapter || isDisabled}
          // onClick={handleNavigateToPreviousChapter}
          variant="outlined"
          sx={{
            flex: 1,
            color: '#ffffff',
            borderColor: '#ffffff4b',
            '&.Mui-disabled': {
              borderColor: '#ffffff1a',
              color: '#ffffff57',
            },
          }}
          onClick={() => {
            setIsDisabled(true)
            handleNavigateToPreviousChapter()
            setTimeout(() => {
              setIsDisabled(false)
            }, 500)
          }}>
          {isFirstChapter ? 'The First' : 'Previous'}
        </Button>
        <Button
          disabled={isLastChapter || isDisabled}
          // onClick={handleNavigateToNextChapter}
          variant="outlined"
          sx={{
            flex: 1,
            color: '#ffffff',
            borderColor: '#ffffff4b',
            '&.Mui-disabled': {
              borderColor: '#ffffff1a',
              color: '#ffffff57',
            },
          }}
          onClick={() => {
            setIsDisabled(true)
            handleNavigateToNextChapter()
            setTimeout(() => {
              setIsDisabled(false)
            }, 500)
          }}>
          {isLastChapter ? 'The End' : 'Next'}
        </Button>
      </Main>
      <Button variant="contained" disableElevation onClick={handleOpenChapterModal}>
        <FormatListNumberedRoundedIcon
          sx={{ fontSize: 20, bac: '#ffffff', boxShadow: theme => '4px 4px 15px 2px' + theme.palette.primary.main + '98' }}
        />
      </Button>
    </Root>
  )
}

const Root = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border: 1px solid ${({ theme }) => theme.palette.primary.main}1a;
  padding: 20px 15px;
  box-shadow: 0px 0px 50px 10px ${({ theme }) => theme.palette.primary.main}17;
  display: flex;
  gap: 10px;
  background-color: ${({ theme }) => theme.palette.secondary.dark};
`

const Main = styled.div`
  flex: 1;
  display: flex;
  gap: 10px;
`
export default MobileChapterNavigation
