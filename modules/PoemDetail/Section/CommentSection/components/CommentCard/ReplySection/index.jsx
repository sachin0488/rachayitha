import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Skeleton } from '@mui/material'
import { InView } from 'react-intersection-observer'
import styled from '@emotion/styled'

import ReplyCard from './ReplyCard'
import CreateCommentSection from '../../CreateCommentSection'

import useCommentListService from 'modules/PoemDetail/services/CommentList.service'

const ReplySection = ({ commentId, setCommentCount }) => {
  const { query } = useRouter()

  const { ContentList, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, isError } = useCommentListService({
    poemId: query?.poemId,
    parentCommentId: commentId,
    sortBy: 'date',
  })

  useEffect(() => {
    setCommentCount(ContentList?.length)
  }, [ContentList, setCommentCount])

  return (
    <Root>
      <CreateCommentSection parentCommentId={commentId} sortBy="date" />

      {ContentList?.map(item => (
        <ReplyCard sortBy="date" key={item?.commentId} item={item} parentCommentId={commentId} />
      ))}

      {(isFetching || isFetchingNextPage) && (
        <>
          <StyledSkeleton variant="rounded" height={160} />
          <StyledSkeleton variant="rounded" height={160} />
          <StyledSkeleton variant="rounded" height={160} />
        </>
      )}

      {ContentList?.length !== 0 && (
        <InView
          id={`comment-load-more-${commentId}`}
          as="div"
          threshold={1}
          delay={500}
          disabled={isFetching || isFetchingNextPage || !hasNextPage}
          onChange={(inView, entry) => {
            if (inView && hasNextPage) {
              fetchNextPage()
            }
          }}
        />
      )}
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
const StyledSkeleton = styled(Skeleton)`
  max-width: 650px;
`
export default ReplySection
