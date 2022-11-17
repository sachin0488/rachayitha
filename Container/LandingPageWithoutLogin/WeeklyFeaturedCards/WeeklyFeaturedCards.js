import React from "react";
import WeeklyFeaturedCardsStyles from "./WeeklyFeaturedCardsStyles";
import { useStoryApi } from "../../../api/global.hook";
import Image from "next/image";
import {
  Wrapper,
  WeeklyContent,
  Heading,
  SubWrapper,
  WeeklyContentCard,
  RatingAndFantasySection,
  StoryHeading,
  ImgBox,
  Fantasy,
  Rating,
  AddIcon,
  Img,
} from "./WeeklyFeaturedCardsStyles";

import { IoIosAddCircle } from "react-icons/io";

const WeeklyFeaturedCards = () => {
  const { data, isLoading, isError, error, isFetching } = useStoryApi();

  const url_img =
    "https://res.cloudinary.com/dk6twrko6/image/upload/v1666323902/Rectangle_232_ke4tmd.png";

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
              <ImgBox>
                {" "}
                <Img
                  src={story.img_url}
                  width="full"
                  style={{
                    position: "absolute",
                    objectFit: "cover",
                    top: "0",
                    left: "0",
                  }}
                />
                <AddIcon>
                  <IoIosAddCircle size={26} color="#069CF6" />
                </AddIcon>
              </ImgBox>
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
