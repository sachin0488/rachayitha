import React from "react";
import CreatePageLeftSection from "../../../Container/Create/CreatePageLeftSection";
import { Wrapper } from "../../../Container/Create/CreateStyle";
import DashBoard from "../../../Container/Create/DashBoardSection/DashBoardSection";

const poem = () => {
  return (
    <>
      <Wrapper>
        <CreatePageLeftSection />
        <DashBoard />
      </Wrapper>
    </>
  );
};

export default poem;
