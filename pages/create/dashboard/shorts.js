import React from "react";
import CreatePageLeftSection from "../../../Container/Create/Components/CreatePageLeftSection";
import { Wrapper } from "../../../Container/Create/CreateStyle";
import DashBoardShortSection from "../../../Container/Create/DashBoardSection/DashBoardShortSection/DashBoardShortSection";

const shorts = () => {
  return (
    <>
      <Wrapper>
        <CreatePageLeftSection />
        <DashBoardShortSection />
      </Wrapper>
    </>
  );
};

export default shorts;
