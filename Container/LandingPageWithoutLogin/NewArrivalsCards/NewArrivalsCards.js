import React from "react";
import potentialStartletCardHook from "../PotentialStarletCards/api/potentialStartletCard.hook";
import NewArrivalCardsStyle from "./NewArrivalCardsStyle";
import Image from "next/image";

const NewArrivalsCards = () => {
  const {
    Wrapper,
    NewArrivalContent,
    Heading,
    SubWrapper,
    NewArrivalContentCard,
    RatingAndFantasySection,
    StoryHeading,
    Img,
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
      <Wrapper>
        <SubWrapper>
          <Heading>New Arrivals</Heading>
          <NewArrivalContent>
            {data?.map((story) => (
              <NewArrivalContentCard>
                <Img>
                  {" "}
                  <Image
                    src={story.img_url}
                    height="331px"
                    width="282px"
                    layout="fixed"
                  />
                </Img>
                <StoryHeading>{story.title}</StoryHeading>
                <RatingAndFantasySection>
                  <Fantasy>{story.fantasy}</Fantasy>
                </RatingAndFantasySection>
              </NewArrivalContentCard>
            ))}
          </NewArrivalContent>
        </SubWrapper>
      </Wrapper>
    </>
  );
};

export default NewArrivalsCards;
