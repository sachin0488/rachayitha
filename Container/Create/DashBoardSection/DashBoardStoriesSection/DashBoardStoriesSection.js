import React from "react";
import { WrapperRightSideSection } from "../../CreateStyle";
import DashBoard from "../DashBoardSection";
import DashBoardStoriesMainContent from "./Components/DashBoardStoriesMainContent";

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
