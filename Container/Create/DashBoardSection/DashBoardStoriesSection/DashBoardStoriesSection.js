import React from "react";
import { WrapperRightSideSection } from "../../CreateStyle";
import DashBoard from "../DashBoardSection";
import DashBoardStoriesMainContent from "./DashBoardStoriesMainContent";

const DashBoardStoriesSection = () => {
  return (
    <>
      <WrapperRightSideSection>
        <DashBoard />
        <DashBoardStoriesMainContent />
      </WrapperRightSideSection>
    </>
  );
};

export default DashBoardStoriesSection;
