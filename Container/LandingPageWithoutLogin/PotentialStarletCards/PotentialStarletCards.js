import React from "react";
import PotentialStartletCardsStyle from "./PotentialStartletCardsStyle";
import potentialStartletCardHook from "./api/potentialStartletCard.hook";
import Image from "next/image";

const PotentialStarletCards = () => {
  const {
    Wrapper,
    PotentialStarletContent,
    Heading,
    SubWrapper,
    PotentialStarletContentCard,
    RatingAndFantasySection,
    StoryHeading,
    Img,
    Fantasy,
    Rating,
    LeftSideImgContent,
    RightSideImgContent,
    AlignRatingAndFantasySection,
  } = PotentialStartletCardsStyle();
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
          <Heading>Potential Starlet</Heading>
          <PotentialStarletContent>
            {data?.map((story) => (
              <PotentialStarletContentCard>
                <Img>
                  {" "}
                  <LeftSideImgContent>
                    <Image
                      src={story.img_url}
                      height="305px"
                      width="255px"
                      layout="fixed"
                    />
                  </LeftSideImgContent>
                  <RightSideImgContent>
                    <Image src={story?.img_url} height="95px" width="101px" />
                    <Image src={story.img_url} height="95px" width="101px" />
                    <Image src={story.img_url} height="95px" width="101px" />
                  </RightSideImgContent>
                </Img>
                <StoryHeading>{story.title}</StoryHeading>
                <AlignRatingAndFantasySection>
                  <RatingAndFantasySection>
                    <Fantasy>{story.fantasy}</Fantasy>
                    <Rating>{story.rating}</Rating>
                  </RatingAndFantasySection>
                </AlignRatingAndFantasySection>
              </PotentialStarletContentCard>
            ))}
          </PotentialStarletContent>
        </SubWrapper>
      </Wrapper>
    </>
  );
};

export default PotentialStarletCards;
