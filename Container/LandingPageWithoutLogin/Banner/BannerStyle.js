import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const Wrapper = styled.div`
  width: 100%;
  min-height: 1800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 80px;
`;

const BannerUpperContent = styled(Box)`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  min-height: 33%;
  max-width: 100%;
  padding: 22px 207px;
  color: ${(props) => props.theme.palette.headingColor.main};
`;

const BannerMiddleContent = styled(Box)`
  background-color: ${(props) => props.theme.palette.secondary.main};
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  gap: 20px;
  min-height: 33%;
  padding: 22px 207px;
  width: 100%;
  color: ${(props) => props.theme.palette.lightColor.main};
`;
const BannerLowerContent = styled(Box)`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  align-items: center;
  min-height: 33%;
  max-width: 100%;
  padding: 22px 207px;
  color: ${(props) => props.theme.palette.headingColor.main};
`;
const LeftSideContent = styled(Box)`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 17px;
`;

const RightSideContent = styled(Box)`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Heading = styled(Typography)`
  font-style: normal;
  font-weight: 700;
  font-size: 74px;
  line-height: 81px;
  text-align: start;

  max-width: 700px;
`;

const SubHeading = styled(Typography)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 33px;
  line-height: 39px;
  max-width: 678px;
`;
const Card = styled(Box)`
  width: 650px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LowerCardContent = styled(Box)`
  width: 440px;
  height: 325px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;
const LowerSubCardContent = styled(Box)`
  width: 49%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 14px;
  align-items: center;
`;
const GenderLeadBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 53px;
  border: 3px solid;
  border-radius: 10px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
`;
const BannerStyle = () => {
  return {
    Wrapper,
    BannerUpperContent,
    BannerMiddleContent,
    BannerLowerContent,
    LeftSideContent,
    RightSideContent,
    SubHeading,
    Heading,
    Card,
    LowerCardContent,
    LowerSubCardContent,
    GenderLeadBox,
  };
};

export default BannerStyle;
