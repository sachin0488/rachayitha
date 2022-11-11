import React from "react";
import {
  RightSideHeaderSectionWrapper,
  WrapperRightSideSection,
} from "../CreateStyle";
import CreatePageRightSideHeader from "../CreatePageRightSideHeader";

const WorkspaceSection = () => {
  return (
    <>
      <WrapperRightSideSection>
        <RightSideHeaderSectionWrapper>
          <CreatePageRightSideHeader section="workspace" />
        </RightSideHeaderSectionWrapper>
      </WrapperRightSideSection>
    </>
  );
};

export default WorkspaceSection;
