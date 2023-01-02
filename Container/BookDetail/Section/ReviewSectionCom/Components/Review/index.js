import RatingStar from 'Components/RatingComp/Rating'
import {
  AllCategoryRatingFont,
  AllCategoryRatingLeftSection,
  AllCategoryRatingLeftSectionFirstPart,
  AllCategoryRatingLeftSectionSecondPart,
  AllCategoryRatingLeftSectionThirdPart,
  AllCategoryRatingRightSection,
  AllCategoryRatingSection,
  ShareFontSize,
} from 'container/BookDetail/common/common.styles'
import React from 'react'
import WriteReviewModal from '../WriteReviewModal'

const Review = () => {
  return (
    <>
      <AllCategoryRatingSection>
        <AllCategoryRatingLeftSection>
          <AllCategoryRatingLeftSectionFirstPart>
            <AllCategoryRatingFont>Writing Quality</AllCategoryRatingFont>
            <AllCategoryRatingFont>Stability of Updates</AllCategoryRatingFont>
            <AllCategoryRatingFont>Story Development</AllCategoryRatingFont>
            <AllCategoryRatingFont>Character Design</AllCategoryRatingFont>
            <AllCategoryRatingFont>World Background</AllCategoryRatingFont>
          </AllCategoryRatingLeftSectionFirstPart>
          <AllCategoryRatingLeftSectionSecondPart>
            <RatingStar value="2" />
            <RatingStar value="2" />
            <RatingStar value="2" />
            <RatingStar value="2" />
            <RatingStar value="2" />
          </AllCategoryRatingLeftSectionSecondPart>
        </AllCategoryRatingLeftSection>

        <AllCategoryRatingRightSection>
          <AllCategoryRatingLeftSectionThirdPart>
            <ShareFontSize>Share your thoughts with others</ShareFontSize>
            <WriteReviewModal comment={true} />
          </AllCategoryRatingLeftSectionThirdPart>
        </AllCategoryRatingRightSection>
      </AllCategoryRatingSection>
    </>
  )
}

export default Review
