import styled from '@emotion/styled'
import { Typography, Box } from '@mui/material'
import React from 'react'
import {
  mobileS,
  mobileM,
  mobileL,
  tablet,
  laptop,
  laptopS,
  laptopM,
  tabletS,
  laptopL,
  desktop,
} from '../../../../styles/mediaQuery/breakPoints'

export const Wrapper = styled(Box)`
  width: 100%;
  min-height: 275px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  gap: 50px;
  @media ${mobileS} {
    padding: 0px 10px 0px 30px;
  }
  @media ${mobileL} {
    padding: 0px 20px 0px 45px;
    min-height: 400px;
  }
  @media ${tabletS} {
    padding: 0px 30px 0px 60px;
  }
  @media ${tablet} {
    padding: 0px 30px 0px 70px;
    min-height: 460px;
  }
  @media ${laptop} {
    padding: 0px 30px 0px 80px;
    margin-top: 40px;
  }
  @media ${laptopS} {
    padding: 0px 60px 0 118px;
    margin-top: 50px;
  }
  @media ${laptopM} {
    padding: 0px 0px 0 150px;
    margin-top: 50px;
  }

  background-image: linear-gradient(
    180deg,
    rgba(102, 59, 203, 0) 0%,
    rgba(102, 59, 203, 0.1) 52.4%,
    rgba(102, 59, 203, 0) 100%
  );
`
export const SubWrapper = styled(Box)`
  /* @media ${laptopS} {
    padding: 0px 0px 0 73px;
  } */
  width: 100%;
  max-width: 1536px;
  @media ${laptopS} {
    padding: 0px 0px 0 0px;
  }
  @media ${laptopM} {
    padding: 0px 0px 0px 55px;
  }

  height: 100%;
`
export const WeeklyContent = styled(Box)`
  display: flex;
  justify-content: start;
  gap: 20px;
  align-items: center;
  width: 100%;
  height: 212px;
  padding-left: 3px;
  @media ${mobileM} {
    height: 315px;
    gap: 30px;
  }

  @media ${tablet} {
    height: 379px;
  }
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
`
export const WeeklyContentCard = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  &:hover {
    border-color: #582ac5;
    transform: scale(1.01, 1.01);
    transition-duration: 0.7s;
  }

  gap: 3px;
  padding: 7px 5px;
  width: 138px;
  height: 193px;
  @media ${mobileM} {
    width: 200px;
    height: 280px;
    gap: 10px;
    padding: 16px 14px;
  }
  @media ${tablet} {
    width: 250px;
    height: 349px;
  }
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  border: 1px solid #ffffff;
`
export const RatingAndFantasySection = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media ${mobileM} {
    gap: 80px;
  }
  align-items: flex-end;
  padding: 0px 5px 0px 5px;
`
export const Fantasy = styled(Box)`
  font-family: 'Roboto';
  font-style: normal;

  font-weight: 400;
  font-size: 7.77468px;
  line-height: 9px;
  @media ${mobileM} {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }

  color: #8d8e99;
`

export const Rating = styled(Box)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  @media ${mobileM} {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  }
`

export const Heading = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 29px;
  @media ${mobileM} {
    font-weight: 600;
    font-size: 25px;
    line-height: 29px;
  }
  color: ${props => props.theme.palette.headingColor.main};
`
export const StoryHeading = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  padding: 5px 5px;
  color: black;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 12.2174px;
  line-height: 14px;
  height: 28px;
  @media ${mobileM} {
    font-size: 16px;
    line-height: 21px;
    height: 60px;
    padding: 16px 5px;
  }
  @media ${tablet} {
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
    height: 63px;
  }
`
export const ImgBox = styled(Box)`
  border-radius: 10px;
  width: 123px;
  height: 121px;

  @media ${mobileM} {
    width: 160px;
    height: 170px;
  }
  @media ${tablet} {
    width: 221px;
    height: 219px;
  }
  position: relative;
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
`
export const AddIcon = styled(Box)`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 8px;
  right: 7px;
  border-radius: 999px;
  z-index: 10;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
