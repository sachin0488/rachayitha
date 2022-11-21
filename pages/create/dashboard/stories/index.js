import React from "react";
import CreatePageLeftSection from "../../../../Container/Create/Components/CreatePageLeftSection";
import { Wrapper } from "../../../../Container/Create/CreateStyle";
import DashBoardStoriesSection from "../../../../Container/Create/DashBoardSection/DashBoardStoriesSection/DashBoardStoriesSection";

const index = () => {
  return (
    <>
      <Wrapper>
        <CreatePageLeftSection />
        <DashBoardStoriesSection />
      </Wrapper>
    </>
  );
};

export default index;
