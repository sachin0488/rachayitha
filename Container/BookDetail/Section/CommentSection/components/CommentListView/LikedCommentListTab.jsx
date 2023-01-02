import React from 'react'
import styled from '@emotion/styled'

import { useBookCommentListAPI } from 'container/BookDetail/api/bookDetail.hook'
import { useRouter } from 'next/router'

import CommentCard from './CommentCard'

const LikedCommentListTab = () => {
  const { query } = useRouter()
  const { CommentList } = useBookCommentListAPI({ bookId: query?.bookId, commentId: null })

  return (
    <Root>
      {CommentList?.map(item => (
        <CommentCard key={item.id} item={item} />
      ))}
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (max-width: 800px) {
    gap: 5px;
  }
`

export default LikedCommentListTab
