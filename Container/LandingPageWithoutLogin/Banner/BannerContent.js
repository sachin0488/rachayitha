import React from "react";
import BannerStyle from "./BannerStyle";

import Image from "next/image";
const BannerContent = ({ heading, img, subHeading, width, height }) => {
  const {
    Wrapper,
    BannerUpperContent,
    BannerMiddleContent,
    BannerLowerContent,
    SubHeading,
    Heading,
    Card,
    LeftSideContent,
    RightSideContent,
  } = BannerStyle();
  return (
    <>
      <LeftSideContent>
        <Heading>{heading}</Heading>
        <SubHeading>{subHeading}</SubHeading>
      </LeftSideContent>
      <RightSideContent>
        <Card>
          <Image src={img} sx={{ width: { width }, height: { height } }} />
        </Card>
      </RightSideContent>
    </>
  );
};

export default BannerContent;
