import React from 'react'
import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import {
  mobileS,
  mobileM,
  mobileL,
  tabletS,
  tablet,
  laptop,
  laptopS,
  laptopM,
  laptopL,
  desktop,
} from '../../../../styles/mediaQuery/breakPoints'

export const PotentialCardWrapper = styled(Box)`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  @media ${mobileS} {
    padding: 0px 10px 0px 30px;
    margin-top: 20px;
  }
  @media ${mobileM} {
    height: 470px;
  }
  @media ${mobileL} {
    padding: 0px 20px 0px 45px;
    height: 470px;
  }
  @media ${tabletS} {
    padding: 0px 30px 0px 60px;
  }
  @media ${tablet} {
    padding: 0px 30px 0px 70px;
    min-height: 540px;
  }
  @media ${laptop} {
    padding: 0px 30px 0px 70px;
  }
  @media ${laptopS} {
    padding: 0px 60px 0 90px;
  }
  @media ${laptopM} {
    padding: 0px 0px 0px 100px;
  }
`
export const SubWrapper = styled(Box)`
  @media ${laptopS} {
    padding: 0px 0px 0 23px;
  }
  @media ${laptopM} {
    padding: 0px 0px 0 102px;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  gap: 10px;
  width: 95%;
  height: 100%;
`
export const PotentialStarletContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 0px 5px;
  margin-left: -10px;
  align-items: center;
  width: 100%;
  height: 258px;
  @media ${mobileM} {
    height: 464px;
    padding: 0px 10px;
  }
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
`
export const PotentialStarletContentCard = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  &:hover {
    border-color: #582ac5;
    transform: scale(1.03, 1.03);
    transition-duration: 0.7s;
  }
  gap: 8px;
  min-height: 233px;
  min-width: 221px;
  padding: 6px 7px;
  @media ${mobileM} {
    gap: 10px;
    padding: 10px 8px;
    min-width: 335px;

    align-items: center;
  }
  @media ${tablet} {
    min-width: 410px;
    padding: 10px 19px;

    align-items: center;
  }

  height: 95%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  border: 1px solid #ffffff;
`
export const AlignRatingAndFantasySection = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const RatingAndFantasySection = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 70%;
  gap: 90px;
  align-items: flex-start;
  padding: 0px 5px 0px 5px;
`
export const Fantasy = styled(Box)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;

  font-size: 7.03182px;
  line-height: 8px;
  @media ${mobileM} {
    line-height: 18px;
    font-size: 14.03182px;
  }

  color: #8d8e99;
`

export const Rating = styled(Box)`
  color: #5225c2;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;

  font-size: 9.04091px;
  line-height: 11px;
  @media ${mobileM} {
    font-size: 18px;
    line-height: 21px;
  }
`

export const Heading = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 29px;
  color: #18144a;
`
export const StoryHeading = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 600;
  font-size: 12.0545px;
  line-height: 14px;
  @media ${mobileM} {
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    padding: 0px 6px 4px 6px;
  }
  color: #000000;

  width: 100%;
  padding: 0px 6px 0px 6px;
`
export const ImgBox = styled(Box)`
  border-radius: 10px;
  min-height: 170px;
  min-width: 210px;
  padding-bottom: 5px;
  @media ${mobileM} {
    height: 270px;
    width: 270px;
  }
  @media ${tablet} {
    height: 330px;
    width: 100%;
    gap: 10px;
  }
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
`
export const LeftSideImgContent = styled(Box)`
  border-radius: 10px;
  width: 140px;
  height: 170px;
  @media ${mobileM} {
    width: 200px;
    height: 255px;
  }
  @media ${tablet} {
    width: 258px;
    height: 95%;
  }
`

export const RightSideImgContent = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  @media ${mobileM} {
    gap: 10px;
  }
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
`
export const SmallImg = styled.img`
  width: 65px;
  height: 55px;
  @media ${mobileM} {
    width: 85px;
    height: 79px;
  }
  @media ${tablet} {
    width: 101px;
    height: 95px;
  }
`
