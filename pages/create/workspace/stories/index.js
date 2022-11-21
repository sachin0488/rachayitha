import React from "react";
import CreatePageLeftSection from "../../../../Container/Create/Components/CreatePageLeftSection";
import { Wrapper } from "../../../../Container/Create/CreateStyle";
import WorkspaceSection from "../../../../Container/Create/WorkspaceSection/WorkspaceSection";

const index = () => {
  return (
    <>
      <Wrapper>
        <CreatePageLeftSection />
        <WorkspaceSection />
      </Wrapper>
    </>
  );
};

export default index;