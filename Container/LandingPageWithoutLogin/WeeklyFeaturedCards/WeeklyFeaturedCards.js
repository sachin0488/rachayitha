import React from "react";
import WeeklyFeaturedCardsStyles from "./WeeklyFeaturedCardsStyles";
import { useStoryApi } from "../../../api/global.hook";
import Image from "next/image";

import { IoIosAddCircle } from "react-icons/io";

const WeeklyFeaturedCards = () => {
  const {
    Wrapper,
    WeeklyContent,
    Heading,
    SubWrapper,
    WeeklyContentCard,
    RatingAndFantasySection,
    StoryHeading,
    Img,
    Fantasy,
    Rating,
    AddIcon,
  } = WeeklyFeaturedCardsStyles();

  const { data, isLoading, isError, error, isFetching } = useStoryApi();

  if (isLoading) {
    return <h1>LOADING ... </h1>;
  }

  if (isError) {
    return <h1>{error?.message}</h1>;
  }
  return (
    <>
      <SubWrapper>
        <Heading>Weekly Featured</Heading>
        <WeeklyContent>
          {data?.map((story) => (
            <WeeklyContentCard>
              <Img>
                {" "}
                <Image
                  src={story.img_url}
                  height="222px"
                  width="222px"
                  sx={{
                    position: "absolute",

                    top: "0",
                    left: "0",
                  }}
                />
                <AddIcon>
                  <IoIosAddCircle size={26} color="#069CF6" />
                </AddIcon>
              </Img>
              <StoryHeading>{story.title}</StoryHeading>
              <RatingAndFantasySection>
                <Fantasy>{story.fantasy}</Fantasy>
                <Rating>{story.rating}</Rating>
              </RatingAndFantasySection>
            </WeeklyContentCard>
          ))}
        </WeeklyContent>
      </SubWrapper>
    </>
  );
};

export default WeeklyFeaturedCards;
