import { Avatar, Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import RatingStar from '../../../../../../../Components/RatingComp/Rating'
import ProfileImg from '../../../../../../../public/profileImg.png'
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
  UserName,
} from '../../../../../Common/BookDetailStyle'
import { useRouter } from 'next/router'
import useBookDetail, { useBookComment } from '../../../../../api/bookDetail.hook'
import styled from '@emotion/styled'
const LikedComp = () => {
  const router = useRouter()

  const { data } = useBookComment(router.query.book)

  return (
    <>
      {data?.data?.data.map(comment => (
        <CommentSectionSubWrapper key={comment?.id}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <CommentSectionSubWrapperRightSideContent>
            <UserName>Guiltythree</UserName> <RatingStar value="5" />
            <ShareFontSize>{comment?.comments}</ShareFontSize>
            <Months>12 months</Months>
            <ReplyLikeAndCommentSection>
              <LikedText startIcon={<ReplyIcon />}>23</LikedText>

              <LikeAndCommentSection>
                <LikedText startIcon={<LikeIcon />}>123</LikedText>

                <LikedText startIcon={<CommentIcon />}>123</LikedText>
              </LikeAndCommentSection>
            </ReplyLikeAndCommentSection>
          </CommentSectionSubWrapperRightSideContent>
        </CommentSectionSubWrapper>
      ))}
    </>
  )
}

export default LikedComp

export const LikeIcon = styled(ThumbUpOutlinedIcon)`
  color: #000000;
  &:hover {
    color: #5a2cc6;
    opacity: 1;
    transition-duration: 0.7s;
  }
  & .css-14yccya-MuiSvgIcon-root {
    font-size: 0.5rem;
  }
  opacity: 0.5;
`
export const CommentIcon = styled(CommentBankOutlinedIcon)`
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
export const Wrap = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`
export const LikedText = styled(Button)`
  color: black;
  opacity: 0.7;
`
