import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

export const ImgBox = styled(Box)`
  width: 100%;
  height: 295px;
  position: relative;
  object-fit: cover;
`;
export const Img = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const UserProfileLowerSection = styled(Box)`
  width: 100%;
  height: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -45px;
`;

export const UserProfileLowerLeftSection = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 11px;
  height: 100%;
  width: 30%;
  background-color: #f6f3ff;
`;

export const MudraContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`;

export const IndividualMudraContainer = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 4px;
`;

export const UserProfileLowerRightSection = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 10px;
  width: 70%;
  height: 100%;
  padding-left: 40px;
`;

export const EditProfileContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-top: 10px;
`;
export const EditProfileButton = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border: 1px solid #5326c2;
  border-radius: 15.5px;
  color: "#5225C2";
  cursor: pointer;
  &:hover {
    background-color: #f6f3ff;
    transition-duration: 300ms;
  }
`;

export const EditProfileModalWrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background-color: white;
  border: 1.5px solid #5225c2;
  box-shadow: 24;
  padding: 16px;
  border-radius: 10px;
`;

export const BadgesWrapper = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: flex-start;
  gap: 23px;
`;

export const BadgesContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  gap: 32px;
`;

export const IndividualBadgeContainer = styled(Box)`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  width: 70px;
  text-align: center;
`;

export const UserProfileHeading = styled(Typography)`
  font-size: 17px;
  font-weight: 400;
  line-height: 16px;
  color: #5225c2;
`;

export const Username = styled(Typography)`
  color: black;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
`;

export const ImgComp = styled.img`
  position: absolute;
  top: 69%;
  left: 10%;
`;
