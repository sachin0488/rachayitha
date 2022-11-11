import React from "react";
import CreatePageLinkContainer from "./CreatePageLinkContainer";
import { WrapperLeftSideSection } from "./CreateStyle";
import UserProfileImgAndName from "./UserProfileImgAndName";

const CreatePageLeftSection = () => {
  return (
    <>
      <WrapperLeftSideSection>
        <UserProfileImgAndName />
        <CreatePageLinkContainer />
      </WrapperLeftSideSection>
    </>
  );
};

export default CreatePageLeftSection;
