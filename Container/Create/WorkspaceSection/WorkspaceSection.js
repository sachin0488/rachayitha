import React from "react";
import {
  RightSideHeaderSectionWrapper,
  UserGuide,
  WrapperRightSideSection,
} from "../CreateStyle";
import CreatePageRightSideHeader from "../Components/CreatePageRightSideHeader";
import WorkspaceSectionMainContent from "./Components/WorkspaceSectionMainContent";

const WorkspaceSection = () => {
  return (
    <>
      <WrapperRightSideSection>
        <RightSideHeaderSectionWrapper>
          <CreatePageRightSideHeader section="workspace" />
          <UserGuide>Create</UserGuide>
        </RightSideHeaderSectionWrapper>
        <WorkspaceSectionMainContent />
      </WrapperRightSideSection>
    </>
  );
};

export default WorkspaceSection;