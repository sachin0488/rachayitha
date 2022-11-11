import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";

export const Wrapper = styled(Box)`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: start;
  align-items: flex-start;
`;

export const WrapperLeftSideSection = styled(Box)`
  width: 18%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  gap: 35px;
  flex-direction: column;
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.1);
`;

export const LinkContainer = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  gap: 13px;
  width: 100%;
  cursor: pointer;
`;

export const IndividualLink = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5px;
  width: 100%;
  padding: 10px 0px 10px 70px;
`;
export const SubSectionIndividualLinkText = styled(Button)`
  font-size: 12px;
  line-height: 15px;
  color: #2f2d5c;
  padding-bottom: 18px;
  font-weight: 500;
`;
export const IndividualLinkText = styled(Typography)`
  font-weight: 600;
  font-size: 19px;
  line-height: 23px;
  color: #424247;
`;

export const WrapperRightSideSection = styled(Box)`
  width: 82%;
  height: 100%;
`;

export const RightSideHeaderSectionWrapper = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  height: 60px;
  padding: 20px 10px 0px 20px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;
export const RightSideHeaderSubSectionWrapper = styled(Box)`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  gap: 40px;
`;

export const UserProfileImgNameWrapper = styled(Box)`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

export const ImgComp = styled.img`
  border: 3px solid #7f5cc7;
  border-radius: 1240px;
`;
