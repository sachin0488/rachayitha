import React from "react";
import BannerContent from "./BannerContent";
import BannerlowerContent from "./BannerlowerContent";
import {
  Wrapper,
  BannerUpperContent,
  BannerMiddleContent,
  BannerLowerContent,
  BannerMiddleContentSubWrapper,
} from "./BannerStyle";
const Banner = () => {
  const banner1 =
    "https://res.cloudinary.com/dk6twrko6/image/upload/v1668677637/Banner1_wcazjy.svg";
  const banner2 =
    "https://res.cloudinary.com/dk6twrko6/image/upload/v1668677838/Banner2_bymfre.svg";
  return (
    <>
      <Wrapper>
        <BannerUpperContent>
          <BannerContent
            heading="Download Books to read Offline"
            subHeading="Save your favourites easily and always have something to read."
            img={banner1}
            width="80%"
            height="80%"
          />
        </BannerUpperContent>
      </Wrapper>
      <Wrapper>
        <BannerMiddleContent>
          <BannerMiddleContentSubWrapper>
            <BannerContent
              heading="Mobile Version is also available in playstore"
              subHeading="Read unlimited stories, poems & shayeris in your phone, tablet, laptop, and TV."
              img={banner2}
              width="100%"
              height="100%"
            />
          </BannerMiddleContentSubWrapper>
        </BannerMiddleContent>
      </Wrapper>
      <Wrapper>
        <BannerLowerContent>
          <BannerlowerContent
            heading="Available for both Male & Female Leads"
            subHeading="Read unlimited stories, poems & shayeris in your phone, tablet, laptop, and TV."
            img={banner2}
          />
        </BannerLowerContent>
      </Wrapper>
    </>
  );
};

export default Banner;
