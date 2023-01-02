import styled from '@emotion/styled'
import { Avatar, Typography } from '@mui/material'
import RatingStar from 'Components/RatingComp/Rating'
import { useBookComment } from 'Container/BookDetail/api/bookDetail.hook'
import {
  CommentSectionSubWrapperRightSideContent,
  Months,
  ReplyLikeAndCommentSection,
  ShareFontSize,
  UserName,
} from 'container/BookDetail/common/common.styles'
import { useRouter } from 'next/router'
import React from 'react'
import { CommentIcon, LikedText, LikeIcon, Wrap } from '../LikedComp'
import ReplyAccordion from './Components/ReplyAccordion'

const ReplySection = () => {
  const router = useRouter()
  const { data } = useBookComment(router.query.book)
  return (
    <>
      <ReplyAccordion>
        {data?.data?.data
          .filter(comment => comment?.parent_comment_id === comment?.id)
          .map(filteredComment => (
            <Root key={filteredComment.id}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <CommentSectionSubWrapperRightSideContent>
                <UserName>Guiltythree</UserName> <RatingStar value="5" />
                <ShareFont>{filteredComment?.comments}</ShareFont>
                <Wrap>
                  <Months>12 months</Months>
                </Wrap>
                <LikeAndComment>
                  <LikedText startIcon={<LikeIcon />}>123</LikedText>

                  <LikedText startIcon={<CommentIcon />}>123</LikedText>
                </LikeAndComment>
              </CommentSectionSubWrapperRightSideContent>
            </Root>
          ))}
      </ReplyAccordion>
    </>
  )
}

export default ReplySection

const Root = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  gap: 3px;
  padding: 10px 0px;
  width: 100%;
`
const LikeAndComment = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 3px;
`
const ShareFont = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  text-align: start;

  color: #000000;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-word;
  /* width: 100%;
  max-width: 800px; */
`
