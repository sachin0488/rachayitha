import styled from '@emotion/styled'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { laptop, laptopM, laptopS, mobileL, mobileM, tablet, tabletS } from '../../../../styles/mediaQuery/breakPoints'

export const ExploreBannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`
export const CardsWrapper = styled(Box)`
  width: 100%;
  min-height: 800px;

  gap: 40px;
  @media ${mobileM} {
    padding: 10px;
    gap: 20px;
  }
  @media ${tabletS} {
    padding: 0px;
  }
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
`
export const Cards = styled(Box)`
  width: 100%;
  height: 145px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  @media ${mobileL} {
    gap: 30px;
  }
`
export const LeftSideCardPart = styled(Box)`
  width: 18%;
  @media (min-width: 450px) {
    width: 16%;
  }

  @media ${tablet} {
    width: 10%;
  }
  @media ${laptop} {
    width: 14%;
  }
  @media ${laptopS} {
    width: 15%;
  }
  @media ${laptopM} {
    width: 10%;
  }

  display: flex;
  justify-content: start;
  align-items: flex-start;
  height: 100%;
`

export const RightSideCardPart = styled(Box)`
  gap: 5px;
  width: 84%;
  @media ${tabletS} {
    width: 85%;
    gap: 10px;
  }
  @media ${laptopM} {
    width: 80%;
  }

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  height: 100%;
`
export const HashtagAndButtonSection = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ButtonSection = styled(Box)`
  width: 50%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 9px;
  @media ${tabletS} {
    gap: 12px;
  }
`
export const AddButton = styled(Button)`
  font-weight: 500;
  font-size: 0.81rem;
  padding: 5px 9px;
  color: #069cf6;
  text-transform: capitalize;
  float: right;
  @media (min-width: 500px) {
    font-size: 1.2rem;
    padding: 5px 13px;
  }
  & .css-gcc2o7-MuiButton-startIcon > *:nth-of-type(1) {
    font-size: 1rem;
    @media (min-width: 500px) {
      font-size: 1.2rem;
    }
  }
  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
  .MuiButton-startIcon {
    margin-right: 0x;
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
export const ReadButton = styled(Button)`
  padding: 2px 10px;
  background-color: #069cf6;
  border-radius: 13px;
  text-transform: capitalize;
  color: white;
  border: none;
  font-size: small;
  &:hover {
    background-color: #069cf6;
  }
`
export const RatingGenreAuthorContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 13px;
  @media ${mobileL} {
    gap: 21px;
  }
`
export const RatingContainer = styled(Box)`
  display: flex;
  justify-content: start;
  height: 30px;
  align-items: center;
  gap: 3px;
`

export const Img = styled.img`
  width: 100%;
  height: 55%;
  @media ${mobileM} {
    width: 100%;
    height: 70%;
  }
  @media ${tabletS} {
    width: 100%;
    height: 80%;
  }
  @media ${laptop} {
    width: 100%;
    height: 90%;
  }
  object-fit: cover;
  border-radius: 5px;
`

export const HashtagContainer = styled(Typography)`
  color: #673ccc;
  font-size: 9px;

  @media ${tabletS} {
    font-size: 16px;
  }
`

export const AddButtonText = styled(Typography)`
  color: #069cf6;
  font-weight: 400;
  @media ${tabletS} {
    font-weight: 600;
  }
`

export const CardRatingText = styled(Typography)`
  color: black;

  font-size: 14px;
  @media ${tabletS} {
    font-size: 16px;
  }
`

export const CardGenreText = styled(Typography)`
  color: black;
  font-size: 12px;
  @media ${tabletS} {
    font-size: 16px;
  }
`
