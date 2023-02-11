import styled from '@emotion/styled'
import React from 'react'
import CommentListView from './components/CommentListView'
import CreateCommentSection from './components/CreateCommentSection'

const CommentSection = ({ item }) => {
  return (
    <Root>
      <CommentListView item={item} />
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  margin-inline: var(--main-side-spacing);
  max-width: var(--main-max-width);
  width: calc(100% - var(--main-side-spacing) * 2);
  align-self: center;
  margin-top: 0px;
  flex-direction: column;
  @media (max-width: 800px) {
    gap: 10px;
  }
`
export default CommentSection
