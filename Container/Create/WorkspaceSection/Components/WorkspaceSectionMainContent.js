import React from "react";
import MuiTable from "./WorkSpaceMuiTable/MuiTable";
import { FIrstFictionWrapper, WorkSpaceSubWrapper } from "../../CreateStyle";
import { NewChapterMuiTableList } from "../../../../hooks/useMuiTabComp";

const WorkspaceSectionMainContent = () => {
  return (
    <>
      <FIrstFictionWrapper>
        <WorkSpaceSubWrapper>
          <MuiTable tableData={NewChapterMuiTableList} />
        </WorkSpaceSubWrapper>
      </FIrstFictionWrapper>
    </>
  );
};

export default WorkspaceSectionMainContent;
