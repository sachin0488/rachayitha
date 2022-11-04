import styled from "@emotion/styled";
import { Box } from "@mui/material";
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
