import React from "react";
import CreatePageLeftSection from "../../../Container/Create/CreatePageLeftSection";
import { Wrapper } from "../../../Container/Create/CreateStyle";
import WorkspaceSection from "../../../Container/Create/WorkspaceSection/WorkspaceSection";

const stories = () => {
  return (
    <>
      <Wrapper>
        <CreatePageLeftSection />
        <WorkspaceSection />
      </Wrapper>
    </>
  );
};

export default stories;
