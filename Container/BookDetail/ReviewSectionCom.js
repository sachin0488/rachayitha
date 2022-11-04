import React from "react";
import { FaRegCommentDots } from "react-icons/fa";
import RatingStar from "../../Components/RatingComp/Rating";
import {
  AllCategoryRatingSection,
  AllCategoryRatingLeftSection,
  AllCategoryRatingLeftSectionFirstPart,
  AllCategoryRatingFont,
  AllCategoryRatingRightSection,
  ShareFontSize,
  AddToLibraryButton,
  CommentSectionWrapper,
} from "./BookDetailStyle";
import LikedComp from "./LikedComp";
import MuiTab from "./MuiTab";

const ReviewSectionCom = () => {
  return (
    <>
      <AllCategoryRatingSection>
        <AllCategoryRatingLeftSection>
          <AllCategoryRatingLeftSectionFirstPart
            alignItems="flex-start"
            gap="15px"
            paddingTop="3px"
            justifyContent="start"
            sx={{
              "@media (min-width: 625px)": {
                gap: "12px",
                paddingTop: "0px",
              },
            }}
          >
            <AllCategoryRatingFont>Writing Quality</AllCategoryRatingFont>
            <AllCategoryRatingFont>Stability of Updates</AllCategoryRatingFont>
            <AllCategoryRatingFont>Story Development</AllCategoryRatingFont>
            <AllCategoryRatingFont>Character Design</AllCategoryRatingFont>
            <AllCategoryRatingFont>World Background</AllCategoryRatingFont>
          </AllCategoryRatingLeftSectionFirstPart>
          <AllCategoryRatingLeftSectionFirstPart
            justifyContent="start"
            alignItems="center"
            gap="5px"
          >
            <RatingStar value="2" />
            <RatingStar value="2" />
            <RatingStar value="2" />
            <RatingStar value="2" />
            <RatingStar value="2" />
          </AllCategoryRatingLeftSectionFirstPart>
        </AllCategoryRatingLeftSection>
        <AllCategoryRatingRightSection>
          <AllCategoryRatingLeftSectionFirstPart
            justifyContent="center"
            alignItems="center"
            gap="5px"
            width="100%"
          >
            <ShareFontSize>Share your thoughts with others</ShareFontSize>
            <AddToLibraryButton
              style={{ color: "white", backgroundColor: "#5b2ec7" }}
            >
              <FaRegCommentDots size="25" />
              WRITE A REVIEW
            </AddToLibraryButton>
          </AllCategoryRatingLeftSectionFirstPart>
        </AllCategoryRatingRightSection>
      </AllCategoryRatingSection>
      <CommentSectionWrapper>
        <MuiTab
          label1="LIKED"
          label2="NEWEST"
          comp1={<LikedComp />}
          comp2={<LikedComp />}
        />
      </CommentSectionWrapper>
    </>
  );
};

export default ReviewSectionCom;
