import React from 'react'
import styled from '@emotion/styled'
import { useRef } from 'react'
import { IconButton } from '@mui/material'

import { mobileM, tablet } from 'styles/mediaQuery/breakPoints'

import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded'

const StyledSlider = ({ List, CardComponent }) => {
  const ref = useRef()

  return (
    <Root ref={ref}>
      {List?.map(item => (
        <CardComponent key={item?.id} item={item} />
      ))}
      <StyledIconButton
        className="next"
        onClick={() => {
          ref.current.scrollBy({
            top: 0,
            left: ref.current.firstChild.offsetWidth * 1.5,
            behavior: 'smooth',
          })
        }}>
        <KeyboardArrowRightRoundedIcon color="primary" />
      </StyledIconButton>
      <StyledIconButton
        className="prev"
        onClick={() => {
          ref.current.scrollBy({
            top: 0,
            left: ref.current.firstChild.offsetWidth * -1.5,
            behavior: 'smooth',
          })
        }}>
        <KeyboardArrowLeftRoundedIcon color="primary" />
      </StyledIconButton>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  align-items: center;
  width: 100%;
  min-height: 232px;
  padding-left: var(--element-left-spacing);

  @media ${mobileM} {
    height: 100%;
    min-height: 315px;

    gap: 30px;
  }

  @media ${tablet} {
    height: 100%;
    min-height: 426px;
  }

  overflow-x: auto;
  padding-bottom: 20px;
  padding-top: 10px;
  @media (min-width: 500px) {
    &::-webkit-scrollbar {
      width: 5px; /* width of the entire scrollbar */
      height: 7px;
      height: 0px;
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

const StyledIconButton = styled(IconButton)`
  top: calc(50% - 22px);
  position: absolute;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  z-index: 2;
  &.next {
    right: 4px;
  }

  &.prev {
    left: 4px;
  }
  background: #fff;
  box-shadow: 2px 2px 20px ${props => props.theme.palette.primary.main}55;
  padding: 5px;
  transition: 0.2s ease-in;
  &:hover {
    background: #fff;
    transform: scale(1.1);
  }
  .MuiSvgIcon-root {
    font-size: 35px;
  }
  @media (max-width: 500px) {
    display: none;
  }
`

export default StyledSlider
