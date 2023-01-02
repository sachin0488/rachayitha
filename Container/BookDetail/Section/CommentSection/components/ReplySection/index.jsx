import styled from '@emotion/styled'
import React from 'react'
import CreateCommentSection from '../CreateCommentSection'
import CommentCard from './CommentCard'

const ReplySection = () => {
  return (
    <Root>
      <CreateCommentSection />
      <CommentCard />
      <CommentCard />
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (max-width: 800px) {
    gap: 10px;
  }
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid ${({ theme }) => theme.palette.primary.main}18;
  /* border-left: 1px solid ${({ theme }) => theme.palette.primary.main}18; */
`

export default ReplySection
