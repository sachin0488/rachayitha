import React from "react";
import { RightSideHeaderSectionWrapper, UserGuide } from "../CreateStyle";
import CreatePageRightSideHeader from "../Components/CreatePageRightSideHeader";

const DashBoard = () => {
  return (
    <>
      <RightSideHeaderSectionWrapper>
        <CreatePageRightSideHeader section="dashboard" />
        <UserGuide>user guide</UserGuide>
      </RightSideHeaderSectionWrapper>
    </>
  );
};

export default DashBoard;
