import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";

export const ExploreBannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;
export const CardsWrapper = styled(Box)`
  width: 100%;
  min-height: 800px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 20px;
`;
export const Cards = styled(Box)`
  width: 100%;
  height: 145px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 30px;
`;
export const LeftSideCardPart = styled(Box)`
  width: 10%;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  height: 100%;
`;

export const RightSideCardPart = styled(Box)`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  height: 100%;
  gap: 10px;
`;
export const HashtagAndButtonSection = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonSection = styled(Box)`
  width: 50%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 12px;
`;
export const AddButton = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 3px;
  align-items: center;
`;
export const ReadButton = styled.button`
  padding: 5px 11px;
  background-color: #069cf6;
  border-radius: 13px;
  color: white;
  border: none;
`;
export const RatingGenreAuthorContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 21px;
`;
export const RatingContainer = styled(Box)`
  display: flex;
  justify-content: start;
  height: 30px;
  align-items: center;
  gap: 3px;
`;
