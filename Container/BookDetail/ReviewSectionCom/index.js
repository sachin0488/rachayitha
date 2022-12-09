import React from 'react'
import { FaRegCommentDots } from 'react-icons/fa'
import MuiTabs from '../../../Components/MuiTabs/MuiTabs'
import RatingStar from '../../../Components/RatingComp/Rating'
import { bookLikedAndNewReviewDetailMuiTabList } from '../../../hooks/useMuiTabComp'
import { styles } from '../MuiTabStyles'
import {
  AllCategoryRatingSection,
  AllCategoryRatingLeftSection,
  AllCategoryRatingLeftSectionFirstPart,
  AllCategoryRatingLeftSectionSecondPart,
  AllCategoryRatingLeftSectionThirdPart,
  AllCategoryRatingFont,
  AllCategoryRatingRightSection,
  ShareFontSize,
  ReviewSectionAddToLibraryButton,
  CommentSectionWrapper,
} from '../BookDetailStyle'

import WriteReviewModal from './Components/WriteReviewModal'

const ReviewSectionCom = ({ book }) => {
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
            <WriteReviewModal />
          </AllCategoryRatingLeftSectionThirdPart>
        </AllCategoryRatingRightSection>
      </AllCategoryRatingSection>
      <CommentSectionWrapper>
        <MuiTabs muiTabsProp={book} muiTab={bookLikedAndNewReviewDetailMuiTabList} styles={styles} />
      </CommentSectionWrapper>
    </>
  )
}

export default ReviewSectionCom
