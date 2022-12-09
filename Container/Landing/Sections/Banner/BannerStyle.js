import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
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
} from '../../../../styles/mediaQuery/breakPoints'

export const Wrapper = styled.div`
  width: 100%;

  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 80px;
`

export const BannerUpperContent = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1636px;
  padding: 20px 30px;
  flex-direction: column;
  gap: 40px;

  @media ${mobileM} {
    padding: 30px 40px;
    flex-direction: column;
    gap: 50px;
  }
  @media ${mobileL} {
    padding: 40px 70px;
    flex-direction: column;
    gap: 50px;
  }
  @media ${tabletS} {
    padding: 50px 80px;
    flex-direction: column;
    gap: 50px;
  }
  @media ${tablet} {
    padding: 18px 80px;
    flex-direction: row;
  }
  @media ${laptop} {
    padding: 22px 90px;
    flex-direction: row;
  }
  @media ${laptopS} {
    padding: 22px 125px;
    flex-direction: row;
  }
  @media ${laptopM} {
    padding: 22px 207px;
    flex-direction: row;
  }

  color: ${props => props.theme.palette.headingColor.main};
`

export const BannerMiddleContent = styled(Box)`
  background-color: ${props => props.theme.palette.secondary.main};
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 2300px;
  color: ${props => props.theme.palette.lightColor.main};
  @media ${mobileL} {
    height: 100%;
    min-height: 200px;
  }
`
export const BannerMiddleContentSubWrapper = styled(Box)`
  max-width: 1636px;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  gap: 10px;
  align-items: center;

  padding: 20px 30px;
  flex-direction: column;
  gap: -110px;

  @media ${mobileM} {
    padding: 30px 40px;
    flex-direction: column;
  }
  @media ${mobileL} {
    padding: 40px 70px;
    flex-direction: column;
    gap: -110px;
  }
  @media ${tabletS} {
    padding: 50px 80px;
    flex-direction: column;
  }
  @media ${tablet} {
    padding: 18px 80px;
    flex-direction: row;
  }
  @media ${laptop} {
    padding: 22px 90px;
    flex-direction: row-reverse;
  }
  @media ${laptopS} {
    padding: 22px 125px;
  }
  @media ${laptopM} {
    padding: 22px 207px;
  }
`
export const BannerLowerContent = styled(Box)`
  display: flex;
  justify-content: start;
  gap: 40px;
  align-items: center;
  min-height: 33%;
  max-width: 1636px;

  padding: 18px 0px;
  flex-direction: column;
  @media ${mobileM} {
    padding: 18px 40px;
    flex-direction: column;
  }
  @media ${mobileL} {
    padding: 20px 70px;
    flex-direction: column;
  }
  @media ${tabletS} {
    padding: 18px 80px;
    flex-direction: column;
  }
  @media ${tablet} {
    padding: 18px 0px 18px 80px;
    flex-direction: row;
  }
  @media ${laptop} {
    padding: 22px 20px 22px 90px;
    flex-direction: row;
  }
  @media ${laptopS} {
    padding: 22px 125px;
    flex-direction: row;
  }
  @media ${laptopM} {
    padding: 22px 207px;
    flex-direction: row;
  }
  color: ${props => props.theme.palette.headingColor.main};
`
export const LeftSideContent = styled(Box)`
  width: 100%;
  height: 100%;
  @media ${tablet} {
    width: 55%;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 17px;
`

export const RightSideContent = styled(Box)`
  width: 100%;
  height: 100%;
  @media ${tablet} {
    width: 30%;
  }
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`
export const Heading = styled(Typography)`
  font-style: normal;
  line-height: 105%;
  font-weight: 600;
  font-size: 36px;

  text-align: center;

  @media ${mobileM} {
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;

    text-align: center;
  }
  @media ${mobileL} {
    font-weight: 600;
    font-size: 58px;
    /* line-height: 76px; */

    text-align: center;
  }

  @media ${tabletS} {
    font-weight: 600;
    font-size: 74px;
    line-height: 81px;

    text-align: center;
  }
  @media ${tablet} {
    font-weight: 600;
    font-size: 51px;
    line-height: 70px;

    text-align: start;
  }
  @media ${laptop} {
    font-weight: 600;
    font-size: 65px;
    line-height: 74px;

    text-align: start;
  }
  @media ${laptopS} {
    font-weight: 700;
    font-size: 67px;
    line-height: 76px;

    text-align: start;
  }
  @media ${laptopM} {
    font-weight: 700;
    font-size: 74px;
    line-height: 81px;

    text-align: start;
  }
`

export const SubHeading = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 23px;
  line-height: 24px;

  text-align: center;
  margin-bottom: 30px;

  @media ${mobileM} {
    font-weight: 300;
    font-size: 30px;
    line-height: 36px;

    text-align: center;
  }

  @media ${mobileL} {
    font-weight: 300;
    font-size: 30px;
    line-height: 36px;

    text-align: center;
  }

  @media ${tabletS} {
    font-weight: 300;
    font-size: 33px;
    line-height: 39px;

    text-align: center;
  }

  @media ${tablet} {
    font-weight: 300;
    font-size: 26px;
    line-height: 31px;
    text-align: start;
  }
  @media ${laptop} {
    font-weight: 300;
    font-size: 28px;
    line-height: 33px;
    text-align: start;
  }
  @media ${laptopS} {
    font-weight: 300;
    font-size: 30px;
    line-height: 36px;

    text-align: start;
  }
  @media ${laptopM} {
    font-weight: 300;
    font-size: 33px;
    line-height: 39px;

    text-align: start;
  }
`
export const Card = styled(Box)`
  width: 360px;
  height: 310px;

  @media ${mobileM} {
    width: 410px;
    height: 350px;
  }
  @media ${mobileL} {
    width: 430px;
    height: 370px;
  }
  @media ${tabletS} {
    width: 450px;
    height: 390px;
  }
  @media ${tablet} {
    width: 380px;
    height: 330px;
  }
  @media ${laptop} {
    width: 400px;
    height: 350px;
  }
  @media ${laptopS} {
    width: 450px;
    height: 400px;
  }
  @media ${laptopM} {
    width: 550px;
    height: 500px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`
export const LowerCardContent = styled(Box)`
  width: 300px;
  height: 230px;

  @media ${mobileS} {
    width: 355px;
    gap: 10px;
  }
  @media ${mobileM} {
    width: 400px;
    height: 290px;
    gap: 25px;
  }
  @media ${mobileL} {
    width: 400px;
    height: 290px;
    gap: 20px;
  }

  @media ${tablet} {
    width: 370px;
    height: 250px;
    margin-left: 60px;
  }

  @media ${laptop} {
    width: 395px;
    height: 270px;
  }
  @media ${laptopS} {
    width: 420px;
    height: 290px;
  }
  @media ${laptopM} {
    width: 440px;
    height: 325px;
  }

  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
`
export const LowerSubCardContent = styled(Box)`
  height: 100%;
  display: flex;
  width: 40%;

  @media ${tabletS} {
    width: 41%;
    gap: 14px;
  }
  @media ${laptop} {
    width: 40%;
    gap: 14px;
  }
  @media ${laptopS} {
    width: 45%;
    gap: 14px;
  }

  @media ${laptopL} {
    width: 49%;
    gap: 14px;
  }

  gap: 8px;
  flex-direction: column;
  justify-content: start;

  align-items: center;
`
export const GenderLeadBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 53px;
  border: 3px solid;
  border-radius: 10px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  @media ${laptopM} {
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
  }
`
export const Img = styled.img`
  margin-top: ${({ selectMargin }) => selectMargin};
  height: 310px;
  width: 250px;
  @media ${mobileM} {
    height: ${({ imgHeight }) => imgHeight};
    width: ${({ imgWidth }) => imgWidth};
  }

  @media ${mobileL} {
    margin-top: ${({ selectMargin }) => selectMargin};
  }
  object-fit: cover;
`
export const LeadImage = styled.div`
  width: 100%;
  height: 190px;
  @media ${tabletS} {
    height: 190px;
  }
  @media ${laptopS} {
    height: 220px;
  }
  position: relative;
`
