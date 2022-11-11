import React from "react";
import {
  RightSideHeaderSectionWrapper,
  WrapperRightSideSection,
} from "../CreateStyle";
import CreatePageRightSideHeader from "../CreatePageRightSideHeader";

const DashBoard = () => {
  return (
    <>
      <WrapperRightSideSection>
        <RightSideHeaderSectionWrapper>
          <CreatePageRightSideHeader section="dashboard" />
        </RightSideHeaderSectionWrapper>
      </WrapperRightSideSection>
    </>
  );
};

export default DashBoard;
