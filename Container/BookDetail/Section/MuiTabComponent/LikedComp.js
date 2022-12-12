import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import RatingStar from '../../../../Components/RatingComp/Rating'
import ProfileImg from '../../../../public/profileImg.png'
import ReplyImg from '../../../../public/reply.png'
import LikeImg from '../../../../public/like.png'
import CommentImg from '../../../../public/comment.png'
import {
  CommentSectionSubWrapper,
  CommentSectionSubWrapperRightSideContent,
  ShareFontSize,
  ReplyLikeAndCommentSection,
  RepliesSection,
  LikeAndCommentSection,
  Months,
  Replies,
  UserName,
} from '../../Common/BookDetailStyle'
import { useRouter } from 'next/router'
import useBookDetail, { useBookComment } from '../../api/bookDetail.hook'
const LikedComp = () => {
  const router = useRouter()
  // const { data } = useBookDetail(router.query.book)
  const { data } = useBookComment(router.query.book)
  // console.log(data.data.data, 'comment data')
  return (
    <>
      {data?.data?.data.map(comment => (
        <CommentSectionSubWrapper key={comment?.id}>
          <Image src={ProfileImg} />
          <CommentSectionSubWrapperRightSideContent>
            <UserName>Guiltythree</UserName> <RatingStar value="5" />
            <ShareFontSize>{comment?.comments}</ShareFontSize>
            <Months>12 months</Months>
            <ReplyLikeAndCommentSection>
              <RepliesSection>
                <Image src={ReplyImg} /> <Replies>32</Replies>
              </RepliesSection>
              <LikeAndCommentSection>
                <Image src={LikeImg} /> <Image src={CommentImg} />
              </LikeAndCommentSection>
            </ReplyLikeAndCommentSection>
          </CommentSectionSubWrapperRightSideContent>
        </CommentSectionSubWrapper>
      ))}
    </>
  )
}

export default LikedComp
