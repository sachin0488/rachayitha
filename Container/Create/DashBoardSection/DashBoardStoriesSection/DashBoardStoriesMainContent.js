import React from "react";

import MuiAccordionDashBoard from "../../../../Components/MuiAccordion/MuiAccordionDashBoard";
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
import AccordionDetailNovelComp from "./AccordionDetailNovelComp";
import Image from "next/image";
import { Typography } from "@mui/material";
import ReleaseStatCard from "./ReleaseStatCard";

const DashBoardStoriesMainContent = () => {
  const releaseStatIcon =
    "https://res.cloudinary.com/dk6twrko6/image/upload/v1668427518/stats_1_pzjlez.png";
  return (
    <>
      <DashBoardSectionWrapper>
        <DashBoardSubWrapper>
          <MuiAccordionDashBoard
            text="Against the world"
            high="350px"
            children={<AccordionDetailNovelComp />}
          />
          <DashBoardStoriesReleaseStatWrapper>
            <ReleaseStatisticsIconTextWrapper>
              <img src={releaseStatIcon} />
              <ReleaseStatisticsText>Release Statistics</ReleaseStatisticsText>
            </ReleaseStatisticsIconTextWrapper>

            <DashBoardStoriesReleaseStatSubWrapper>
              <ReleaseStatCard heading="WORD COUNT" count="0" />
              <ReleaseStatCard heading="CHAPTERS RELEASED" count="0" />
              <ReleaseStatCard heading="RELEASE DATE" count="0" />
              <ReleaseStatCard heading="AVERAGE WORDS / CH" count="744" />
            </DashBoardStoriesReleaseStatSubWrapper>
          </DashBoardStoriesReleaseStatWrapper>
        </DashBoardSubWrapper>
      </DashBoardSectionWrapper>
    </>
  );
};

export default DashBoardStoriesMainContent;
