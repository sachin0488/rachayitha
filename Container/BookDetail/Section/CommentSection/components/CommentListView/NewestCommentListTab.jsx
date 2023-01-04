import styled from '@emotion/styled'
import React from 'react'
import CommentCard from './CommentCard'

const NewestCommentListTab = () => {
  return (
    <Root>
      <CommentCard />
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`
export default NewestCommentListTab
