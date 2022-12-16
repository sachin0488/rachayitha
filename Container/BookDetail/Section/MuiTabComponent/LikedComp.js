import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import RatingStar from '../../../../Components/RatingComp/Rating'
import ProfileImg from '../../../../public/profileImg.png'
import QuickreplyOutlinedIcon from '@mui/icons-material/QuickreplyOutlined'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import CommentBankOutlinedIcon from '@mui/icons-material/CommentBankOutlined'
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
import styled from '@emotion/styled'
const LikedComp = () => {
  const router = useRouter()

  const { data } = useBookComment(router.query.book)

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
                <ReplyIcon />
                <LikedText>23</LikedText>
              </RepliesSection>
              <LikeAndCommentSection>
                <Wrap>
                  {' '}
                  <LikeIcon />
                  <LikedText>123</LikedText>
                </Wrap>
                <Wrap>
                  <CommentIcon /> <LikedText>123</LikedText>
                </Wrap>
              </LikeAndCommentSection>
            </ReplyLikeAndCommentSection>
          </CommentSectionSubWrapperRightSideContent>
        </CommentSectionSubWrapper>
      ))}
    </>
  )
}

export default LikedComp

const LikeIcon = styled(ThumbUpOutlinedIcon)`
  color: #000000;
  &:hover {
    color: #5a2cc6;
    opacity: 1;
    transition-duration: 0.7s;
  }
  opacity: 0.5;
`
const CommentIcon = styled(CommentBankOutlinedIcon)`
  color: #000000;
  &:hover {
    color: #5a2cc6;
    opacity: 1;
    transition-duration: 0.7s;
  }
  opacity: 0.5;
`
const ReplyIcon = styled(QuickreplyOutlinedIcon)`
  color: #000000;
  &:hover {
    color: #5a2cc6;
    opacity: 1;
    transition-duration: 0.7s;
  }
  opacity: 0.5;
`
const Wrap = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`
const LikedText = styled(Typography)`
  color: black;
  opacity: 0.5;
`
