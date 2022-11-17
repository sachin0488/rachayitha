import React from "react";
import potentialStartletCardHook from "../PotentialStarletCards/api/potentialStartletCard.hook";
import {
  NewArrivalContent,
  Heading,
  SubWrapper,
  NewArrivalContentCard,
  RatingAndFantasySection,
  StoryHeading,
  ImgWrapper,
  Img,
  Fantasy,
} from "./NewArrivalCardsStyle";
import Image from "next/image";

const NewArrivalsCards = () => {
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
        <Heading>New Arrivals</Heading>
        <NewArrivalContent>
          {data?.map((story) => (
            <NewArrivalContentCard>
              <ImgWrapper>
                {" "}
                <Img src={story.img_url} />
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

export default NewArrivalsCards;
