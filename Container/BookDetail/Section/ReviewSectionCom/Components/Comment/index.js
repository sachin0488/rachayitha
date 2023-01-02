import MuiTabs from 'Components/MuiTabs/MuiTabs'
import { CommentSectionWrapper } from 'container/BookDetail/common/common.styles'
import { styles } from 'Container/BookDetail/Section/UpperSection/Components/UpperTopSection/MuiTabComponent/MuiTabStyles'
import { bookLikedAndNewReviewDetailMuiTabList } from 'hooks/useMuiTabComp'
import React from 'react'

const Comment = () => {
  return (
    <>
      <CommentSectionWrapper>
        <MuiTabs muiTab={bookLikedAndNewReviewDetailMuiTabList} styles={styles} />
      </CommentSectionWrapper>
    </>
  )
}

export default Comment
