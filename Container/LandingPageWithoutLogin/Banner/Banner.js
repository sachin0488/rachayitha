import React from "react";
import BannerStyle from "./BannerStyle";
import Banner1 from "../../../public/Banner1.svg";
import Banner2 from "../../../public/Banner2.svg";
import BannerContent from "./BannerContent";
import BannerlowerContent from "./BannerlowerContent";
const Banner = () => {
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
      <Wrapper>
        <BannerUpperContent>
          <BannerContent
            heading="Download Books to read Offline"
            subHeading="Save your favourites easily and always have something to read."
            img={Banner1}
            width="80%"
            height="80%"
          />
        </BannerUpperContent>
        <BannerMiddleContent>
          <BannerContent
            heading="Mobile Version is also available in playstore"
            subHeading="Read unlimited stories, poems & shayeris in your phone, tablet, laptop, and TV."
            img={Banner2}
            width="100%"
            height="100%"
          />
        </BannerMiddleContent>
        <BannerLowerContent>
          <BannerlowerContent
            heading="Available for both Male & Female Leads"
            subHeading="Read unlimited stories, poems & shayeris in your phone, tablet, laptop, and TV."
            img={Banner2}
          />
        </BannerLowerContent>
      </Wrapper>
    </>
  );
};

export default Banner;
