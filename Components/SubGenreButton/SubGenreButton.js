import React from 'react'

import { genreName } from '../../hooks/useGenreButton'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useRef } from 'react'
import { IconButton } from '@mui/material'
import { mobileM, tablet } from 'styles/mediaQuery/breakPoints'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded'
import styled from '@emotion/styled'
import { Buttons } from 'Container/FeatureSection/Common/Common.styles'

const SubGenreButton = () => {
  const router = useRouter()
  const fullSection = router.pathname

  const { genre, content_type } = router.query
  const ref = useRef()
  return (
    <>
      <Root ref={ref}>
        {genreName?.map((button, index) => (
          <Link
            key={index}
            href={`${fullSection}?content_type=${content_type}&genre=${genre}&sub_genre=${button.name}`}>
            <Buttons
              className={
                router.asPath === `${fullSection}?content_type=${content_type}&genre=${genre}&sub_genre=${button.name}`
                  ? 'genre'
                  : ''
              }>
              {button.buttonName}
            </Buttons>
          </Link>
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
    </>
  )
}

export default SubGenreButton

const Root = styled.div`
  display: flex;
  justify-content: start;
  gap: 10px;
  align-items: center;
  width: 97%;
  min-height: 32px;

  @media ${mobileM} {
    height: 100%;
    min-height: 50px;
    padding-left: 16px;
    gap: 10px;
  }

  @media ${tablet} {
    height: 100%;
    min-height: 50px;
    padding-left: 0px;
  }

  overflow-x: auto;
  padding-bottom: 20px;
  padding-top: 10px;
  @media (min-width: 430px) {
    padding-left: 25px;
    padding-right: 25px;
  }
  @media (min-width: 840px) {
    padding-left: 0px;
    padding-right: 0px;
  }
  @media (min-width: 430px) {
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
  position: absolute;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  z-index: 2;
  &.next {
    right: 7px;
  }

  &.prev {
    left: 7px;
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
    font-size: 20px;
  }
  @media (max-width: 430px) {
    display: none;
  }
  display: flex;
  @media (min-width: 840px) {
    display: none;
  }
`
