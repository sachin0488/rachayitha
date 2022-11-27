import styled from '@emotion/styled'
import { Typography, Box } from '@mui/material'

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

export const ArrivalCardWrapper = styled(Box)`
  width: 100%;
  height: 430px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  gap: 50px;
  margin: 50px 0px;
  @media ${mobileS} {
    padding: 0px 10px 0px 30px;
  }
  @media ${mobileL} {
    padding: 0px 20px 0px 45px;
  }
  @media ${tabletS} {
    padding: 0px 30px 0px 60px;
    height: 520px;
  }
  @media ${tablet} {
    padding: 0px 30px 0px 70px;
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

  background-image: linear-gradient(
    180deg,
    rgba(102, 59, 203, 0) 0%,
    rgba(102, 59, 203, 0.1) 52.4%,
    rgba(102, 59, 203, 0) 100%
  );
`
export const SubWrapper = styled(Box)`
  @media ${laptopS} {
    padding: 0px 0px 0 18px;
  }
  @media ${laptopM} {
    padding: 0px 0px 0 103px;
  }

  width: 95%;
  height: 100%;
`
export const NewArrivalContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  width: 100%;
  height: 95%;
  @media ${laptopM} {
    height: 475px;
  }
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
`
export const NewArrivalContentCard = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  &:hover {
    border-color: #582ac5;
  }
  gap: 10px;
  padding: 16px 6px;
  min-width: 265px;
  @media ${tablet} {
    padding: 16px 14px;
    min-width: 312px;
  }
  height: 98%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  border: 1px solid #ffffff;
`
export const RatingAndFantasySection = styled(Box)`
  display: flex;
  width: 100%;
  align-items: flex-end;
  padding: 0px 5px 0px 5px;
`
export const Fantasy = styled(Box)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  color: #8d8e99;
`

export const Heading = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 29px;
  color: ${props => props.theme.palette.headingColor.main};
`
export const StoryHeading = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 29px;

  color: #000000;
  width: 100%;
  padding: 5px 5px;
`
export const ImgWrapper = styled(Box)`
  border-radius: 10px;
  width: 235px;
  height: 285px;
  @media ${tablet} {
    width: 282px;
    height: 331px;
  }
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
