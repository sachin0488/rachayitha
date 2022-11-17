import React from "react";
import CreatePageLeftSection from "../../../../Container/Create/CreatePageLeftSection";
import { Wrapper } from "../../../../Container/Create/CreateStyle";
import DashBoardPoemSection from "../../../../Container/Create/DashBoardSection/DashBoardPoemSection/DashBoardPoemSection";

const index = () => {
  return (
    <>
      <Wrapper>
        <CreatePageLeftSection />
        <DashBoardPoemSection />
      </Wrapper>
    </>
  );
};

export default index;
