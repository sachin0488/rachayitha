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
  height: 33%;
  max-width: 1636px;
  @media ${mobileS} {
    padding: 20px 30px;
    flex-direction: column;
    gap: 40px;
  }
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
  min-height: 33%;
  width: 100%;
  max-width: 2300px;
  color: ${props => props.theme.palette.lightColor.main};
`
export const BannerMiddleContentSubWrapper = styled(Box)`
  max-width: 1636px;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  gap: 10px;
  align-items: center;

  @media ${mobileS} {
    padding: 20px 30px;
    flex-direction: column;
    gap: -110px;
  }
  @media ${mobileM} {
    padding: 30px 40px;
    flex-direction: column;
    gap: -110px;
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
    flex-direction: row;
  }
  @media ${laptopS} {
    padding: 22px 125px;
    flex-direction: row;
  }
  @media ${laptopM} {
    padding: 22px 207px;
    flex-direction: row-reverse;
  }
`
export const BannerLowerContent = styled(Box)`
  display: flex;
  justify-content: start;
  gap: 40px;
  align-items: center;
  min-height: 33%;
  max-width: 1636px;
  @media ${mobileS} {
    padding: 18px 30px;
    flex-direction: column;
  }
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
    width: 60%;
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
  @media ${mobileS} {
    font-weight: 600;
    font-size: 36px;
    line-height: 56px;
    text-align: center;
  }
  @media ${mobileM} {
    font-weight: 600;
    font-size: 58px;
    line-height: 68px;

    text-align: center;
  }
  @media ${mobileL} {
    font-weight: 600;
    font-size: 68px;
    line-height: 76px;

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
  padding-right: 20px;
  @media ${mobileS} {
    font-weight: 300;
    font-size: 23px;
    line-height: 24px;

    text-align: center;
    margin-bottom: 30px;
  }
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
  @media ${mobileS} {
    width: 360px;
    height: 310px;
  }
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
  @media ${mobileS} {
    width: 360px;
    height: 290px;
    gap: 10px;
  }
  @media ${mobileL} {
    width: 400px;
    height: 290px;
    gap: 10px;
  }
  /* @media ${tabletS} {
    width: 400px;
    height: 290px;
    gap: 10px;
  } */
  @media ${tablet} {
    width: 340px;
    height: 250px;
  }

  @media ${laptop} {
    width: 375px;
    height: 270px;
  }
  @media ${laptopS} {
    width: 400px;
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
  width: 49%;
  height: 100%;
  display: flex;
  @media ${laptopM} {
    gap: 14px;
  }
  @media ${laptopS} {
    gap: 10px;
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
  width: 302px;
  height: 347px;
  object-fit: cover;
`
