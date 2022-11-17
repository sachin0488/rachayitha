import React from "react";
import {
  CollectionDataTextSize,
  DashBoardSectionWrapper,
  DashBoardStoriesReleaseStatSubWrapper,
  DashBoardStoriesReleaseStatSubWrapperCard,
  DashBoardStoriesReleaseStatWrapper,
  DashBoardSubWrapper,
  PercentageIncreaseData,
  PercentageIncreaseDataWrapper,
  ReleaseStatCardLeftSectionWrapper,
  ReleaseStatCardRightSectionWrapper,
  ReleaseStatisticsIconTextWrapper,
  ReleaseStatisticsText,
  WordCountData,
  WordCountText,
} from "../../CreateStyle";
import { BsArrowUp } from "react-icons/bs";
import { Typography } from "@mui/material";

const ReleaseStatCard = ({ heading, count }) => {
  return (
    <>
      <DashBoardStoriesReleaseStatSubWrapperCard>
        <ReleaseStatCardLeftSectionWrapper>
          <WordCountText>{heading}</WordCountText>
          <CollectionDataTextSize>{count}</CollectionDataTextSize>
          <PercentageIncreaseDataWrapper>
            <BsArrowUp color="#673CCB" />
            <PercentageIncreaseData>0.0%</PercentageIncreaseData>
          </PercentageIncreaseDataWrapper>
          <WordCountText>Than last period</WordCountText>
        </ReleaseStatCardLeftSectionWrapper>
        <ReleaseStatCardRightSectionWrapper>
          <Typography color="red" fontSize="14px">
            YESTERDAY
          </Typography>
        </ReleaseStatCardRightSectionWrapper>
      </DashBoardStoriesReleaseStatSubWrapperCard>
    </>
  );
};

export default ReleaseStatCard;
