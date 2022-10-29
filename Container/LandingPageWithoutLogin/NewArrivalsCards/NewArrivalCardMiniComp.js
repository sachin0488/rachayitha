import React from "react";
import potentialStartletCardHook from "../PotentialStarletCards/api/potentialStartletCard.hook";
import NewArrivalCardsStyle from "./NewArrivalCardsStyle";

import Image from "next/image";

const NewArrivalCardMiniComp = () => {
  const {
    NewArrivalContent,
    Heading,
    SubWrapper,
    NewArrivalContentCard,
    RatingAndFantasySection,
    StoryHeading,
    Img,
    ImgWrapper,
    Fantasy,
  } = NewArrivalCardsStyle();

  const { data, isLoading, isError, error, isFetching } =
    potentialStartletCardHook();

  if (isLoading) {
    return <h1>LOADING ... </h1>;
  }

  if (isError) {
    return <h1>{error?.message}</h1>;
  }
  return (
    <>
      <SubWrapper>
        <NewArrivalContent>
          {data?.map((story) => (
            <NewArrivalContentCard>
              <ImgWrapper>
                {" "}
                <Img
                  src={story.img_url}
                  height="331px"
                  width="282px"
                  layout="fixed"
                />
              </ImgWrapper>
              <StoryHeading>{story.title}</StoryHeading>
              <RatingAndFantasySection>
                <Fantasy>{story.fantasy}</Fantasy>
              </RatingAndFantasySection>
            </NewArrivalContentCard>
          ))}
        </NewArrivalContent>
      </SubWrapper>
    </>
  );
};

export default NewArrivalCardMiniComp;
