import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import {
  laptop,
  laptopM,
  laptopS,
  mobileL,
  mobileM,
  tablet,
  tabletS,
} from "../../styles/mediaQuery/breakPoints";

export const Wrapper = styled(Box)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: white;
`;

export const SubWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  padding: 30px 40px;
  @media ${laptopS} {
    padding: 30px 60px;
  }
  @media ${laptopS} {
    padding: 30px 40px;
  }
  @media ${laptopS} {
    padding: 40px 80px;
  }
  @media ${laptopM} {
    padding: 40px 106px;
  }
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  gap: 42px;
`;

export const ExploreBannerContainer = styled(Box)`
  position: relative;
  width: 100%;
  height: 271px;
  display: flex;
  justify-content: center;
`;

export const ExploreBannerImageContainer = styled.div`
  width: 100%;
  min-height: 271px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export const ExploreBannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

export const GenreMenuBar = styled(Box)`
  height: 75px;
  background-color: #673ccc;
  border: 2px solid #673ccc;
  border-radius: 37.5px;
  position: absolute;
  bottom: -28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 49px;
  width: 95%;
  @media ${mobileM} {
    width: 87%;
  }
  @media ${laptopS} {
    width: 85%;
  }
`;

export const LeftSideGenreMenuBar = styled(Box)`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  @media ${laptopM} {
    width: 40%;
  }
`;
export const RightSideGenreMenuBar = styled(Box)`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 35px;
  align-items: center;
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  gap: 2px;
  align-items: center;
  cursor: pointer;
  display: none;
  @media ${tabletS} {
    display: block;
    display: flex;
  }
`;

export const GenreTitle = styled(Typography)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
`;

export const FilterText = styled(Typography)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 22px;

  color: #ffffff;
`;
export const ContentType = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1px;
`;
export const ContentTypeText = styled(Typography)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
`;

export const MainContentWrapper = styled(Box)`
  margin: 40px 0px;
  width: 100%;
  min-height: 800px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 45px;
  @media ${laptopS} {
    gap: 60px;
  }
  @media ${laptopM} {
    gap: 88px;
  }
`;

export const GenreAccordionContainer = styled(Box)`
  width: 22%;
  height: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17px;
  justify-content: start;
  display: none;
  @media ${laptop} {
    display: block;
    display: flex;
  }
`;
export const MaleAndFemaleLeadContainer = styled(Box)`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-between;
  padding: 0px 2px;
  @media ${laptop} {
    padding: 0px 9px;
  }
  @media ${laptopS} {
    padding: 0px 18px;
  }

  align-items: center;
  background-color: #edefff;
`;

export const GenderBox = styled(Box)`
  width: 40%;
  height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #673ccc;
  border-radius: 3px;
  color: #5426c3;
`;

export const ShowQueryContainer = styled(Box)`
  height: 100%;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: flex-start;
  gap: 27px;
  width: 100%;
  @media ${laptop} {
    width: 72%;
  }
`;

export const SortByHeading = styled(Typography)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 0.1em;
  color: #717174;
`;
export const HorizontalRule = styled.div`
  border-top: 1px solid #e7e7e7;
`;
export const CardsWrapper = styled(Box)`
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  @media ${mobileL} {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

export const CardsSubWrapper = styled(Box)`
  height: 130px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 16px 0px;
  @media ${mobileL} {
    width: 50%;
  }
  @media ${laptopM} {
    margin: 16px 0px;
  }
  cursor: pointer;
`;
export const Cards = styled(Box)`
  height: 100%;
  gap: 20px;

  @media ${mobileL} {
    gap: 30px;
    width: 93%;
  }

  @media ${tabletS} {
    width: 83%;
  }
  @media ${tablet} {
    width: 82%;
  }

  @media ${laptopS} {
    width: 75%;
  }
  @media ${laptopM} {
    width: 65%;
  }
  display: flex;
  justify-content: start;
  align-items: center;
`;
export const CardLeftSideContent = styled(Box)`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 16px;
  @media ${mobileM} {
    width: 20%;
  }
  @media ${mobileL} {
    width: 30%;
  }
`;
export const CardRightSideContent = styled(Box)`
  height: 100%;
  width: 70%;
  @media ${mobileL} {
    width: 55%;
  }
  @media ${mobileL} {
    width: 70%;
  }
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 10px;
`;

export const Img = styled.img`
  width: 91.9px;
  height: 128px;
  object-fit: cover;
  border-radius: 5px;
`;

export const Title = styled(Typography)`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;

  color: #fc9404;
`;
export const ButtonContainer = styled(Box)`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 13px;
  flex-wrap: wrap;
`;

export const ParagraphText = styled(Typography)`
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.1em;
  color: #000000;
`;
export const Button = styled.button`
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;
  border-radius: 16px;
  padding: 5px 12px;
  color: #000000;
  background-color: transparent;
  border: 1px solid #e7e7e7;
`;
